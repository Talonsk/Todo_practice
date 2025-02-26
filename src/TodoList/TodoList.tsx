import React from 'react';
import { SafeAreaView } from 'react-native';
import { AddTask } from './AddTask/AddTask';
import { TodoWrapper } from './TodoWrapper/TodoWrapper';
import { TodoFunctions } from './Context/TodoContext';

export const TodoList = () => {

    const {todo, addTask, deliteTask} = TodoFunctions();

    return (
        <SafeAreaView>
            <AddTask addTask={addTask}/>
            <TodoWrapper todo={todo} deliteTask={deliteTask}/>
        </SafeAreaView>

    );
};
