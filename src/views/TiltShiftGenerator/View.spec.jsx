import React from 'react';
import ReactDOM from 'react-dom';
import View from './View';
import { noop } from '../../lib/lang';

const Noop = () => <div />;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <View
      RenderOptions={Noop}
      RenderDroppableImage={Noop}
      RenderToolbar={Noop}
      imageRef={{}}
      canvasRef={{}}
      onDrop={noop}
      onOptionChange={noop}
      onImageLoad={noop}
    />,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
