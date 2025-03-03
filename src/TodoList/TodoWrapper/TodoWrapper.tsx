import React, { FC } from 'react';
import { FlatList, View } from 'react-native';
import { TodoItem } from './TodoItem/TodoItem';
import { WrapperProps } from './types';

export const TodoWrapper: FC<WrapperProps> = ({todo, deliteTask}) =>{
    return(
        <View>
            <FlatList
                data={todo}
                renderItem={({item}) =>
                <TodoItem id={item.id} text={item.text} isChecked={item.isChecked} deliteTask={deliteTask}/>}
                keyExtractor={item => 'id' + item.id}
            />
        </View>
    );
};
