/* eslint-disable react/react-in-jsx-scope */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  SafeAreaView,
} from 'react-native';
import React, { PropsWithChildren } from 'react';
import { AddTask } from './src/AddTask';
import { TodoWrapper } from './src/TodoWrapper/TodoWrapper';

type todoProps = PropsWithChildren<{
    id: number,
    text: string
}>

function App(): React.JSX.Element {

  const [todo, setTodo] = React.useState<todoProps[]>([]);
  function addTask(id: number, text: string){
    setTodo(
      [
        ...todo,
        {
          id: id,
          text: text,
        },
      ]
    );
  }

  return (
    <SafeAreaView>
      <AddTask addTask={addTask}/>
      <TodoWrapper todo={todo}/>
    </SafeAreaView>
  );
}

export default App;
