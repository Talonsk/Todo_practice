import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { AddTask } from './AddTask/AddTask';
import { TodoWrapper } from './TodoWrapper/TodoWrapper';
import { TodoFunctions } from './TodoFunctions/TodoFunctions';

export const TodoList = () => {

    const {
        todo,
        setTodo,
        addTask,
        deliteTask,
        getTaskAPI,
    } = TodoFunctions();

    useEffect( () => {
        async function fetchData() {
            const newTodo = await getTaskAPI();
            if (newTodo){
                setTodo([
                    ...newTodo,
                ]);
            }
        }

        fetchData();

    }, [getTaskAPI, setTodo]);

    return (
        <SafeAreaView>
            <AddTask todo={todo} addTask={addTask}/>
            <TodoWrapper todo={todo} deliteTask={deliteTask}/>
        </SafeAreaView>

    );
};
