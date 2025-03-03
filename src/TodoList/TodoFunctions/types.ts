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

var array = [{id: 1, text: 'adsas'}, {id: 2, text: 'kg'}];
console.log(array);

type DataErrors = 'data' | 'errors';

export type JsonProps = {
    [key in DataErrors]: TodoProps[];
} & {
    code: number;
    message: string;
};
