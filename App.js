import React from 'react';

import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import { View, Text } from 'react-native';
import Router from './src/Router';

import store from './src/Store';
var persistor = null

export default class App extends React.Component {
  state = {
    isReady: false
  };

  async componentDidMount(){
    persistor = persistStore(
      store,
      {},
      () => { console.log('Loading stored state'); }
    );
    this.setState({ isReady: true });
  };

  render(){
    console.disableYellowBox = true;

    if(!this.state.isReady){
      return <View><Text>Loading</Text></View>;
    }

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    );
  };
};
