import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { todos } from './reducers';
import { StoreState } from './actions/storeState';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore<StoreState>(todos, {
  todos: []
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
