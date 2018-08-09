import React from 'react';
import ReactDOM from 'react-dom';
import Options from './Options';
import { noop } from '../common/lang';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <Options
      disabled
      blur={0}
      distance={0}
      maxDistance={0}
      perspective={0}
      position={0}
      vignetting={0}
      zoom={0}
      onOptionChange={noop}
    />
  ), div);
  ReactDOM.unmountComponentAtNode(div);
});
