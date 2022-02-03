/**
 * Display the app into index.html and enlaced with 
 *    .store          src/redux/store.js
 *    .CustomRoutes   src/routes/routes.js
 * 
 * react-redux: "^7.2.6",
 */
import React from 'react'
import { Provider } from 'react-redux';

import { store } from './redux/store';

import { CustomRoutes } from './routes/routes'

function App() {
  return (
    <Provider store={store}>
      <CustomRoutes />
    </Provider>
  );
}

export default App;
