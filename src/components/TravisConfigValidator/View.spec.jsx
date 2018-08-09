import React from 'react';
import ReactDOM from 'react-dom';
import View from './View';
import { noop } from '../common/lang';

const Noop = () => <div />;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <View
      RenderLog={Noop}
      input=""
      onInputChange={noop}
      onValidate={noop}
      loading
      success
      messages={[]}
    />
  ), div);
  ReactDOM.unmountComponentAtNode(div);
});
