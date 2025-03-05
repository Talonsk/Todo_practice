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
    text: string,
    isChecked: boolean
}

export type UpdateProps = {
    id: number,
    parametrs: {
        id?: number,
        text?: string,
        isChecked?: boolean
    }
}

type DataErrors = 'data' | 'errors';

export type JsonProps = {
    [key in DataErrors]: TodoProps[];
} & {
    code: number;
    message: string;
};
