import React, { FC } from 'react';
import { View } from 'react-native';
import { TodoItem } from './TodoItem/TodoItem';
import { WrapperProps } from './types';

export const TodoWrapper: FC<WrapperProps> = ({todo, deliteTask}) =>{
    return(
        <View>
            {todo.map((e) => {
                return <TodoItem key={e.id} id={e.id} text={e.text} deliteTask={deliteTask}/>;
            })}
        </View>
    );
};
