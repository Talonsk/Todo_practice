import React from 'react';
import { FlatList, View } from 'react-native';
import { TodoItem } from './TodoItem/TodoItem';
import { useTodo } from '../Context/TodoContext';


export const TodoWrapper = () => {
    const {todo} = useTodo();

    return (
        <View>
            <FlatList
                data={todo}
                renderItem={({item}) =>
                <TodoItem id={item.id} text={item.text} />}
                keyExtractor={item => 'id' + item.id}
            />
        </View>
    );
};
