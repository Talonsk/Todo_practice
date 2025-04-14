/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createStaticNavigation, StaticParamList } from '@react-navigation/native';
import type { TransitionSpec } from './node_modules/@react-navigation/stack/src/types.tsx';
import { createStackNavigator } from '@react-navigation/stack';
import { Todo } from './src/Todo/Todo.tsx';
import { Form } from './src/Form/Form';

const configuration : TransitionSpec = {
  animation: 'timing',
  config: {
    duration: 500,
    easing: (duration) => duration / 3.5,
  },
};

const RootStack = createStackNavigator({
  initialRouteName: 'Form',
  screens: {
    Todo: Todo,
    Form:  Form,
  },
  screenOptions: {
    animation: 'fade_from_bottom',
    transitionSpec: {
      open: configuration,
      close: configuration,
    },
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
    <GestureHandlerRootView>
      <Navigation />
    </GestureHandlerRootView>
  );
}

export default App;
