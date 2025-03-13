export type FunctionProps = {
    todo: {
        id: number,
        text: string,
        isChecked: boolean
    }[],
    addTask:
    ({ id, text, isChecked }: TodoProps) => Promise<void>
};

type TodoProps = {
    id: number,
    text: string,
    isChecked: boolean
};
