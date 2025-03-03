export type WrapperProps = {
    todo: {
        id: number,
        text: string,
        isChecked: boolean
    }[]
    deliteTask:
    (id: number) => void
};
