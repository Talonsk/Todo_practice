/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { AddTask } from './AddTask/AddTask';
import { TodoWrapper } from './TodoWrapper/TodoWrapper';
import { TodoFunctions } from './TodoFunctions/TodoFunctions';
import { Loading } from './Loading/Loading';

export const TodoList = () => {

    const {
        todo,
        isLoading,
        addTask,
        getTaskAPI,
        deliteTask,
        updateTaskAPI,
        updateId,
    } = TodoFunctions();

    useEffect(() => {
        async function fetchData(){
            await getTaskAPI();
        }
        fetchData();
    }, [getTaskAPI]);
    useEffect(() =>{updateId();});

    return (
        <SafeAreaView style={{flex: 1}}>
            {isLoading ? <Loading/> :
                <>
                    <AddTask
                        todo={todo}
                        addTask={addTask}
                    />
                    <TodoWrapper
                        todo={todo}
                        deliteTask={deliteTask}
                        updateTaskAPI={updateTaskAPI}
                    />
                </>
            }
        </SafeAreaView>

    );
};
