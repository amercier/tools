import React from 'react';
import ReactDOM from 'react-dom';
import CopyToClipboard from './CopyToClipboard';
import { noop } from '../../lib/lang';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CopyToClipboard password="" copied onCopy={noop} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
