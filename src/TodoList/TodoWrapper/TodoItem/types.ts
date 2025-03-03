export type ItemProps = {
    id: number,
    text: string,
    isChecked: boolean,
    deliteTask:
    (id: number) => void
};
