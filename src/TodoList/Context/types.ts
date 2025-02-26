<<<<<<< HEAD
import { ReactNode } from 'react';

export type ChildrenProps = {
    children: ReactNode
}

export type ContextProps = {
    todo: TodoProps[],
    addTask:
    (id: number, text: string) => void,
    deliteTask:
    (id: number) => void
}

export type TodoProps = {
    id: number,
    text: string
}
=======
export type TodoProps = {
    id: number,
    text: string
};
>>>>>>> without-context
