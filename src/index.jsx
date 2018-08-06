import React from 'react';
import ReactDOM from 'react-dom';
import 'material-components-web/material-components-web.scss'; // eslint-disable-line import/no-extraneous-dependencies
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
