/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation, StaticParamList } from '@react-navigation/native';
import { TodoList } from './src/TodoList/TodoList';
import { Form } from './src/Form/Form';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Form',
  screens: {
    Todo: TodoList,
    Form: Form,
  },
});

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

const Navigation = createStaticNavigation(RootStack);

function App(): React.JSX.Element {

  return (
    <Navigation />
  );
}

export default App;
