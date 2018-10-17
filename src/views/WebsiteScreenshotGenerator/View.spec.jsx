import React from 'react';
import ReactDOM from 'react-dom';
import View from './View';
import { noop } from '../../lib/lang';

const Noop = () => <div />;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <View
      RenderToolbar={Noop}
      RenderImageLoader={Noop}
      url=""
      resolution=""
      resolutions={[]}
      onUrlChange={noop}
      onResolutionChange={noop}
      onGo={noop}
      displayedUrl=""
      blobUrl=""
      loading
    />,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
