import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator } from './screens/Navigation';
import reducer from "./store/reducer";

import {Provider} from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from'redux';
import {} from 'react-redux';
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
  dataReducer: reducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
