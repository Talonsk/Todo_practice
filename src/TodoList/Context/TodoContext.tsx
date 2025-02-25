/* eslint-disable react/react-in-jsx-scope */
import { createContext, useContext, useState, FC } from 'react';
import { ContextProps, ChildrenProps, TodoProps } from './types';


const TodoContext = createContext<ContextProps>({
    todo: [{id: 0, text:''}],
    addTask() { },
    deliteTask() { },
});

export const TodoProvared: FC<ChildrenProps> = ({children}) => {
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

    return (
        <TodoContext.Provider value={{todo, addTask, deliteTask }}>
            {children}
        </TodoContext.Provider>
    );
};

export  const useTodo = () => useContext(TodoContext);
