import React from 'react';
import ReactDOM from 'react-dom';
import WebsiteScreenshotGenerator from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WebsiteScreenshotGenerator />, div);
  ReactDOM.unmountComponentAtNode(div);
});
