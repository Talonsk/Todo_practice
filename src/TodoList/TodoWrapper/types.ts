export type WrapperProps = {
    todo: {
        id: number,
        text: string
    }[]
    deliteTask:
    (id: number) => void
};
