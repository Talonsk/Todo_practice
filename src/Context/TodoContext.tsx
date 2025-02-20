import { createContext } from 'react';

type ContextProps = {
    addTask:
        (id: number, text: string) => void,
    deliteTask:
        (id: number) => void
}

export const TodoContext = createContext<ContextProps>({
    addTask() {},
    deliteTask() {},
});
