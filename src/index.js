import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';

// STORE (REDUX) -> globalized state ex: App->MovieList -> Search -> Login -> Movie will have all the state accessible)

// ACTION -> describes what you want to do (ex: Increment (counter))

// REDUCER -> describes how your actions transform the state into the next state

// DISPATCH -> 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);