export type FunctionProps = {
    todo: {
        id: number,
        text: string,
        isChecked: boolean
    }[],
    addTask:
        (id: number, text: string, isChecked: boolean ) => void,
};
