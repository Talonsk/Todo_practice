/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { SafeAreaView, View } from 'react-native';
import { AddTask } from './AddTask/AddTask';
import { TodoWrapper } from './TodoWrapper/TodoWrapper';
import { TodoFunctions } from './TodoFunctions/TodoFunctions';
import { Loading } from './Loading/Loading';

export const TodoList = () => {

    const {
        todo,
        isLoading,
        addTaskAPI,
        getTaskAPI,
        deleteTaskAPI,
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
                <View style={{flex: 1}}>
                    <AddTask
                        todo={todo}
                        addTask={addTaskAPI}
                    />
                    <TodoWrapper
                        todo={todo}
                        deliteTask={deleteTaskAPI}
                        updateTask={updateTaskAPI}
                    />
                </View>
            }
        </SafeAreaView>

    );
};
