import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import rootStore from './reducers';
import IopenApp from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Provider store={rootStore}>
    <IopenApp />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
