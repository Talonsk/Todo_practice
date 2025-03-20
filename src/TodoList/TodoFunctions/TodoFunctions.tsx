import { useCallback, useState } from 'react';
import { TodoProps, UpdateProps } from './types';
import axios from 'axios';
const url = 'gjgjdf007y.temp.swtest.ru';

export const TodoFunctions = () => {
    const addTaskAPI = async ({id, text, isChecked}: TodoProps) => {
        try {
            const response = await axios.post(`http://${url}/addTask/`,
                { id, text, isChecked },
            );
            const json = response.data;

            if(json.data){
                setTodo(t => {
                    return [
                        ...t,
                        json.data,
                    ];
                }
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
            const response = await axios.get(`http://${url}/getTask/${id}`);
            const json = response.data;

            if(json.data){
                setTodo([
                    ...json.data,
                ]);
            }else{
                console.error(json.errors);
            }
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
        }
    }, []);
    const deleteTaskAPI = async (id: number) => {
        try {
                    const response = await axios.delete(`http://${url}/deleteTask/${id}`);
                    const json = response.data;

                    if(json.data){
                        const del_id = Number(json.data.id);
                        setTodo(t => {return t.filter(e => e.id !== del_id);});
                    }else{
                        console.error(json.errors);
                    }
        } catch (error) {
            console.log(error);
        }
    };
    const updateTaskAPI = async (id: UpdateProps['id'], parametrs: UpdateProps['parametrs']) => {
        try {
            const response = await axios.patch(`http://${url}/updateTask/${id}`, {
                    id: parametrs.id,
                    text: parametrs.text,
                    isChecked: parametrs.isChecked,
                    image: parametrs.image,
                },
            );
            const json = response.data;
            console.log(json, parametrs);

            if(json.data){
                setTodo((t) => {
                    return t.map(e => {
                    if(e.id === id){
                            return {...e, ...json.data};
                        }else{
                            return e;
                        }
                    });
                });
            }else{
                console.error(json.errors);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const updateId = async () => {
        const maxId = todo.length;
        for(let i = 0; i <= maxId; i++){
            if (todo[i].id !== i + 1){
                await updateTaskAPI(todo[i].id, {id: i + 1});
            }
        }
    };

    const [todo, setTodo] = useState<TodoProps[]>([]);
    const [isLoading, setLoading] = useState(true);

    return ({
        todo,
        isLoading,
        addTaskAPI,
        getTaskAPI,
        deleteTaskAPI,
        updateTaskAPI,
        updateId,
    });

};



