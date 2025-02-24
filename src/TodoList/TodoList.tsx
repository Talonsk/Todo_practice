import React from 'react';
import { SafeAreaView } from 'react-native';
import { AddTask } from './AddTask/AddTask';
import { TodoWrapper } from './TodoWrapper/TodoWrapper';
import { TodoProvared } from './Context/TodoContext';

export const TodoList = () => {
    return (
        <SafeAreaView>
            <TodoProvared>
                <AddTask />
                <TodoWrapper />
            </TodoProvared>
        </SafeAreaView>

    );
};
