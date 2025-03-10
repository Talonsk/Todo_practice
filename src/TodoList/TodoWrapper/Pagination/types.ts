export type WrapperProps = {
    todo: TodoProps[],
    deliteTask:
    (id: number) => void,
    updateTaskAPI:
    (id: UpdateProps['id'], parametrs: UpdateProps['parametrs']) => Promise<void>,
};

type TodoProps = {
    id: number,
    text: string,
    isChecked: boolean
};

type UpdateProps = {
    id: number,
    parametrs: {
        id?: number,
        text?: string,
        isChecked?: boolean
    }
};
