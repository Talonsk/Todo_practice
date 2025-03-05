export type ItemProps = {
    id: number,
    text: string,
    isChecked: boolean,
    deliteTask:
    (id: number) => void,
    updateTaskAPI:
    (id: UpdateProps['id'], parametrs: UpdateProps['parametrs']) => Promise<void>
};

type UpdateProps = {
    id: number,
    parametrs: {
        id?: number,
        text?: string,
        isChecked?: boolean
    }
};
