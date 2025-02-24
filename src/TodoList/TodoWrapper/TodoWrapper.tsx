import React from 'react';
import { TodoItem } from './TodoItem/TodoItem';
import { FlatList, View } from 'react-native';
import { useTodo } from '../Context/TodoContext';


export const TodoWrapper = () => {
    const {todo} = useTodo();

    return (
        <View>
            <FlatList
                data={todo}
                renderItem={({item}) => <TodoItem id={item.id} text={item.text} />}
                keyExtractor={item => 'id' + item.id}
            />
            {/* {todo.map((e) => {
                return <TodoItem key={e.id} id={e.id} text={e.text} />;
            })} */}
        </View>
    );
};
