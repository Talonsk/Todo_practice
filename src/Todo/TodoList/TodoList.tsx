/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { AddTask } from './AddTask/AddTask';
import { TodoWrapper } from './TodoWrapper/TodoWrapper';
import { TodoFunctions } from './TodoFunctions/TodoFunctions';
import { Loading } from './Loading/Loading';
import { useDispatch } from 'react-redux';
import { todoGet } from './Reduser/Counter/Counter';

export const TodoList = () => {

    const {isLoading, getTaskAPI} = TodoFunctions();
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData(){
            await getTaskAPI();
        }
        fetchData();
        dispatch(todoGet());
    }, [dispatch, getTaskAPI]);

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
