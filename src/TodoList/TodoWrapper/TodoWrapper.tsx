import React from 'react';
import { View } from 'react-native';
import { TodoItem } from './TodoItem/TodoItem';
import { TodoFunctions } from '../Context/TodoContext';


export const TodoWrapper = () => {
    const { todo } = TodoFunctions();

    return (
        <View>
            {todo.map((e) => {
                return <TodoItem key={e.id} id={e.id} text={e.text} />;
            })}
        </View>
    );
};
