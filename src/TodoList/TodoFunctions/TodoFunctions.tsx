import { useCallback, useState } from 'react';
import { JsonProps, TodoProps } from './types';

export const TodoFunctions = () => {
    const addTaskAPI = async ({id, text, isChecked}: TodoProps) => {
        try {
            const response = await fetch('http://f1093629.xsph.ru/addTask/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: id,
                    text: text,
                    isChecked: isChecked,
                }),
            });

            const json = await response.json();

            if(json.data){
                setTodo(
                    [
                        ...todo,
                        json.data,
                    ]
                );
            }else{
                console.error(json.errors);
            }
        } catch (error) {
            console.log(error);
        }
    };
    const getTaskAPI = useCallback( async (id : string | number = '') => {
        try {
            const response = await fetch(`http://f1093629.xsph.ru/getTask/?${id}`);
            const json: JsonProps = await response.json();

            if(json.data){
                return json.data;
            }else{
                console.error(json.errors);
            }
        } catch (error) {
            console.log(error);
        }
    }, []);
    const deleteTaskAPI = async (id: number) => {
        try {
            const response = await fetch(`http://f1093629.xsph.ru/deleteTask/${id}`, {
                method: 'DELETE',
            });
            const json = await response.json();

            if(json.data){
                const del_id = Number(json.data.id);
                setTodo(
                    todo.filter(e => e.id !== del_id)
                );
            }else{
                console.error(json.errors);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const [todo, setTodo] = useState<TodoProps[]>([]);

    const addTask = (id: number, text: string, isChecked: boolean ) => {
        addTaskAPI({id, text, isChecked});
    };
    const deliteTask = (id: number) => {
        deleteTaskAPI(id);
    };

    return ({
        todo,
        setTodo,
        addTask,
        deliteTask,
        getTaskAPI,
    });

};
