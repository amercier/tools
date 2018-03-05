import { shallow, mount } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'rmwc/Button';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('input field', () => {
  it('starts with an empty input', () => {
    const wrapper = mount(<App />);
    expect(wrapper.state('input')).toBe('');
    expect(wrapper.find('textarea').instance().value).toBe('');
  });

  it('displays the new input on state change', () => {
    const wrapper = mount(<App />);
    wrapper.setState({ input: 'http://localhost/'});
    expect(wrapper.find('textarea').instance().value).toBe('http://localhost/');
  });
});

describe('"Encode" button', () => {
  it('encodes input when "Encode" button is pressed', () => {
    const wrapper = mount(<App />);
    wrapper.setState({ input: 'http://localhost/'});

    const encodeButton = wrapper.find(Button).get(0);
    expect(encodeButton.props.onClick).toBeDefined();
    encodeButton.props.onClick();
    expect(wrapper.state('input')).toBe('http%3A%2F%2Flocalhost%2F');
  });

  it('disables "Decode" button when output would be identical', () => {
    const wrapper = mount(<App />);
    wrapper.setState({ input: 'http://localhost/'});

    const encodeButton = wrapper.find(Button).get(1);
    expect(encodeButton.props.disabled).toBeDefined();
    expect(encodeButton.props.disabled).toBe(true);
  });
});

describe('"Decode" button', () => {
  it('enables "Decode" button when output would be different', () => {
    const wrapper = mount(<App />);
    wrapper.setState({ input: 'http://localhost/%20'});

    const encodeButton = wrapper.find(Button).get(1);
    expect(encodeButton.props.disabled).toBeDefined();
    expect(encodeButton.props.disabled).toBe(false);
  });

  it('decodes input when "Decode" button is pressed', () => {
    const wrapper = mount(<App />);
    wrapper.setState({ input: 'http%3A%2F%2Flocalhost%2F'});

    const decodeButton = wrapper.find(Button).get(1);
    expect(decodeButton.props.onClick).toBeDefined();
    decodeButton.props.onClick();
    expect(wrapper.state('input')).toBe('http://localhost/');
  });
});
