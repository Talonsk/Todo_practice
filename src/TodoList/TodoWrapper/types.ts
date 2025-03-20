export type WrapperProps = {
    todo: TodoProps[],
    deliteTask:
    (id: number) => Promise<void>,
    updateTask:
    (id: UpdateProps['id'], parametrs: UpdateProps['parametrs']) => Promise<void>,
};

type TodoProps = {
    id: number,
    text: string,
    isChecked: boolean,
    image?: string
};

type UpdateProps = {
    id: number,
    parametrs: {
        id?: number,
        text?: string,
        isChecked?: boolean,
        image?: string
    }
};
