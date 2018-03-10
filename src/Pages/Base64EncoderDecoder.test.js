import { shallow, mount } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'rmwc/Button';
import Base64EncoderDecoder from './Base64EncoderDecoder';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Base64EncoderDecoder />, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe('input field', () => {
  it('starts with an empty input', () => {
    const wrapper = mount(<Base64EncoderDecoder />);
    expect(wrapper.state('input')).toBe('');
    expect(wrapper.find('textarea').instance().value).toBe('');
  });

  it('displays the new input on state change', () => {
    const wrapper = mount(<Base64EncoderDecoder />);
    wrapper.setState({ input: '✓ à la mode' });
    expect(wrapper.find('textarea').instance().value).toBe('✓ à la mode');
  });
});


describe('"Encode" button', () => {
  it('disables "Encode" button when input is empty', () => {
    const wrapper = mount(<Base64EncoderDecoder />);
    wrapper.setState({ input: '' });

    const encodeButton = wrapper.find(Button).get(0);
    expect(encodeButton.props.disabled).toBeDefined();
    expect(encodeButton.props.disabled).toBe(true);
  });

  it('encodes input when "Encode" button is pressed', () => {
    const wrapper = mount(<Base64EncoderDecoder />);
    wrapper.setState({ input: '✓ à la mode' });

    const encodeButton = wrapper.find(Button).get(0);
    expect(encodeButton.props.onClick).toBeDefined();
    encodeButton.props.onClick();
    expect(wrapper.state('input')).toBe('4pyTIMOgIGxhIG1vZGU=');
  });
});


describe('"Decode" button', () => {
  it('disables "Decode" button when input is empty', () => {
    const wrapper = mount(<Base64EncoderDecoder />);
    wrapper.setState({ input: '' });

    const encodeButton = wrapper.find(Button).get(1);
    expect(encodeButton.props.disabled).toBeDefined();
    expect(encodeButton.props.disabled).toBe(true);
  });

  it('disables "Decode" button when input is not base64-encoded', () => {
    const wrapper = mount(<Base64EncoderDecoder />);
    wrapper.setState({ input: 'not a base64 string' });

    const encodeButton = wrapper.find(Button).get(1);
    expect(encodeButton.props.disabled).toBeDefined();
    expect(encodeButton.props.disabled).toBe(true);
  });

  it('enables "Decode" button when input is base64-encoded', () => {
    const wrapper = mount(<Base64EncoderDecoder />);
    wrapper.setState({ input: '4pyTIMOgIGxhIG1vZGU=' });

    const encodeButton = wrapper.find(Button).get(1);
    expect(encodeButton.props.disabled).toBeDefined();
    expect(encodeButton.props.disabled).toBe(false);
  });

  it('decodes input when "Decode" button is pressed', () => {
    const wrapper = mount(<Base64EncoderDecoder />);
    wrapper.setState({ input: '4pyTIMOgIGxhIG1vZGU=' });

    const decodeButton = wrapper.find(Button).get(1);
    expect(decodeButton.props.onClick).toBeDefined();
    decodeButton.props.onClick();
    expect(wrapper.state('input')).toBe('✓ à la mode');
  });
});
