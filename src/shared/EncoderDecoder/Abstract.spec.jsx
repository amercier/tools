/* eslint-disable lines-between-class-members, class-methods-use-this */

import React from 'react';
import ReactDOM from 'react-dom';
import AbstractEncoderDecoder from './Abstract';
import { identity } from '../../lib/lang';

class ConcreteEncoderDecoder extends AbstractEncoderDecoder {
  get isEncodeDisabled() {
    return true;
  }
  get isDecodeDisabled() {
    return true;
  }
  static encode = identity;
  static decode = identity;
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ConcreteEncoderDecoder />, div);
  ReactDOM.unmountComponentAtNode(div);
});
