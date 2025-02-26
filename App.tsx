/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  SafeAreaView,
} from 'react-native';
import React from 'react';
import { AddTask } from './src/TodoList/AddTask/AddTask';
import { TodoWrapper } from './src/TodoList/TodoWrapper/TodoWrapper';

function App(): React.JSX.Element {

  return (
    <SafeAreaView>
      <AddTask />
      <TodoWrapper />
    </SafeAreaView>
  );
}

export default App;
