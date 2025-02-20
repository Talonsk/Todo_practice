/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  SafeAreaView,
} from 'react-native';
import React, {useState } from 'react';
import { AddTask } from './src/AddTask/AddTask';
import { TodoWrapper } from './src/TodoWrapper/TodoWrapper';
import { TodoContext } from './src/Context/TodoContext';

type TodoProps = {
  id: number,
  text: string
}

function App(): React.JSX.Element {

  const [todo, setTodo] = useState<TodoProps[]>([]);
  const addTask = (id: number, text: string) => {
    setTodo(
      [
        ...todo,
        {
          id: id,
          text: text,
        },
      ]
    );
  };
  const deliteTask = (id: number) =>{
    setTodo(
      todo.filter(e => e.id !== id )
    );
  };

  return (
    <SafeAreaView>
      <TodoContext.Provider value={{addTask, deliteTask}}>
        <AddTask/>
        <TodoWrapper todo={todo}/>
      </TodoContext.Provider>
    </SafeAreaView>
  );
}

export default App;
