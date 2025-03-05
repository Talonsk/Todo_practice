import { useCallback, useState } from 'react';
import { TodoProps, UpdateProps } from './types';
import axios from 'axios';
const url = 'gjgjdf007y.temp.swtest.ru';

export const TodoFunctions = () => {
    const addTaskAPI = async ({id, text, isChecked}: TodoProps) => {
        try {
            const response = await axios.post(`http://${url}/addTask/`, {
                    id: id,
                    text: text,
                    isChecked: isChecked,
                },
            );
            const json = response.data;

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
            const response = await axios.get(`http://${url}/getTask/${id}`);
            const json = response.data;

            // await new Promise(resolve => {
            //     setTimeout(resolve, 3000);
            // });
            // for(let i = 0; i <= 10000; i++){
            //     console.log(i);
            // }

            if(json.data){
                return json.data;
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
    const updateTaskAPI = async (id: UpdateProps['id'], parametrs: UpdateProps['parametrs']) => {
        try {
            const response = await axios.patch(`http://${url}/updateTask/${id}`, {
                    id: parametrs.id,
                    text: parametrs.text,
                    isChecked: parametrs.isChecked,
                },
            );
            const json = response.data;

            if(json.data){
                setTodo(
                    todo.map(e => {
                        if(e.id === id){
                            return {...e, ...json.data};
                        }else{
                            return e;
                        }
                    })
                );
            }else{
                console.error(json.errors);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const [todo, setTodo] = useState<TodoProps[]>([]);
    const [isLoading, setLoading] = useState(true);

    const addTask = (id: number, text: string, isChecked: boolean ) => {
        addTaskAPI({id, text, isChecked});
    };
    const deliteTask = (id: number) => {
        deleteTaskAPI(id);
    };

    return ({
        todo,
        isLoading,
        setTodo,
        addTask,
        getTaskAPI,
        deliteTask,
        updateTaskAPI,
    });

};
