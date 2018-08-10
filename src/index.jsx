import React from 'react';
import ReactDOM from 'react-dom';
import 'material-components-web/material-components-web.scss'; // eslint-disable-line import/no-extraneous-dependencies
import App from './views/App';
import registerServiceWorker from './registerServiceWorker';

import './index.scss';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
