import React, { FC } from 'react';
import { FlatList, View } from 'react-native';
import { TodoItem } from './TodoItem/TodoItem';
import { WrapperProps } from './types';

export const TodoWrapper: FC<WrapperProps> = ({todo, deliteTask, updateTaskAPI}) =>{
    return(
        <View>
            <FlatList
                data={todo}
                renderItem={({item}) =>
                <TodoItem
                    id={item.id}
                    text={item.text}
                    isChecked={item.isChecked}
                    deliteTask={deliteTask}
                    updateTaskAPI={updateTaskAPI}
                />}
                keyExtractor={item => 'id' + item.id}
                keyboardShouldPersistTaps="handled"
            />
        </View>
    );
};
