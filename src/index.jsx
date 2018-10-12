import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import registerServiceWorker from './registerServiceWorker';

import './index.scss';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
