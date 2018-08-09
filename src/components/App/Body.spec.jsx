import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Body from './Body';

const Noop = () => <div />;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <BrowserRouter>
      <Body
        RenderMenu={Noop}
        RenderMenuItem={Noop}
        RenderHome={Noop}
        RenderPage={Noop}
        isNarrow
        modules={[]}
      />
    </BrowserRouter>
  ), div);
  ReactDOM.unmountComponentAtNode(div);
});
