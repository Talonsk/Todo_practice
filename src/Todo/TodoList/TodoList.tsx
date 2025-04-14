/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { AddTask } from './AddTask/AddTask';
import { TodoWrapper } from './TodoWrapper/TodoWrapper';
import { TodoFunctions } from './TodoFunctions/TodoFunctions';
import { Loading } from './Loading/Loading';

export const TodoList = () => {

    const {isLoading, getTaskAPI} = TodoFunctions();

    useEffect(() => {
        async function fetchData(){
            await getTaskAPI();
        }
        fetchData();
    }, [getTaskAPI]);

    return (
        <View style={{flex: 1}}>
            {isLoading ? <Loading/> :
                <View style={{flex: 1}}>
                    <AddTask />
                    <TodoWrapper />
                </View>
            }
        </View>

    );
};
