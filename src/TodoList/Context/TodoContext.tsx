import { useState } from 'react';
import { TodoProps } from './types';

export const TodoFunctions = () => {
    const [todo, setTodo] = useState<TodoProps[]>([]);
    const addTask = (id: number, text: string) => {
        setTodo(
            [
                ...todo,
                {
                    id: id,
                    text: text,
                },
            ]
        );
    };
    const deliteTask = (id: number) => {
        setTodo(
            todo.filter(e => e.id !== id)
        );
    };

    return({
        todo,
        addTask,
        deliteTask,
    });

};
