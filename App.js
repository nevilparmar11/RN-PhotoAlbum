import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {store} from './App/store/store';

import HomeScreen from './App/screens/Home';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    );
  }
}
