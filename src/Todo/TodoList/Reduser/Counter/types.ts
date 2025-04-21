export type AddProps = {
    text: string,
}
export type DeleteProps = {
    del_id: number,
}
export type UpdateProps = {
    id: number;
    parametrs: {
        id?: number;
        text?: string;
        isChecked?: boolean;
        image?: string;
    };
}
export type ReplaceProps = {
    new_order: number[];
};
export type PageProps = {
    new_page: number;
};
export type TodoProps = {
    id: number;
    text: string;
    isChecked: boolean;
    image?: string;
}
export type QueueDeletion = number[]
