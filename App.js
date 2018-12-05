import React, { Component } from 'react';
import {
  Text,
} from 'react-native';


import { Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from './store'
import AppNavigatorWithState from './src/app-navigator-with-state';


import AppLayout from './src/app'
type Props = {};
export default class App extends Component<Props> {
 



  render() {
    return (
      <Provider
        store = {store}
      >
        <PersistGate
          loading={<Text>Cargando</Text>}
          persistor ={persistor}
          >
        <AppNavigatorWithState/>
        </PersistGate>

      </Provider>
    );
  }
}


