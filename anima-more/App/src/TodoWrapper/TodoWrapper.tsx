
import React, { PropsWithChildren } from "react";
import { TodoItem } from "./TodoItem";

type wrapperProps = PropsWithChildren<{
    todo: {
        id: number,
        text: string
    }[]
}>

export const TodoWrapper = ({todo}: wrapperProps) =>{
    return(
        todo.map((e) => {
            return <TodoItem id={e.id} text={e.text}/>;
        })
    );
};
