import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import AppContainer from './containers/AppContainer';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Provider store={configureStore()}>
        <AppContainer />
      </Provider>
    </div>
  );
};

export default App;
