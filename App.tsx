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
import { TodoFunctions } from './src/TodoList/Context/TodoContext';

function App(): React.JSX.Element {

  const { todo, addTask, deliteTask } = TodoFunctions();
  console.log(todo);

  return (
    <SafeAreaView>
      <AddTask addTask={addTask}/>
      <TodoWrapper todo={todo} deliteTask={deliteTask}/>
    </SafeAreaView>
  );
}

export default App;
