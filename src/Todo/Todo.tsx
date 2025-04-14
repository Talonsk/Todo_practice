/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native';
import { TodoList } from './TodoList/TodoList';
import { Provider } from 'react-redux';
import { store } from '../Reduser/Store/Store';

export const Todo = () => {
    return(
        <SafeAreaView style={{flex: 1}}>
            <Provider store={store}>
                <TodoList/>
            </Provider>
        </SafeAreaView>
    );
};
