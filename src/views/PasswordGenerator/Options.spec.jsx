import React from 'react';
import ReactDOM from 'react-dom';
import Options from './Options';
import { noop } from '../../lib/lang';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Options length={9} numbers symbols uppercase excludeSimilarCharacters onOptionChange={noop} />,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
