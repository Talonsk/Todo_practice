import React, { FC } from 'react';
import { TodoItem } from './TodoItem/TodoItem';
import { View } from 'react-native';

type WrapperProps = {
    todo: {
        id: number,
        text: string
    }[]
}

export const TodoWrapper: FC<WrapperProps> = ({todo}) =>{
    return(
        <View>
            {todo.map((e) => {
                return <TodoItem key={e.id} id={e.id} text={e.text}/>;
            })}
        </View>
    );
};
