import { useCallback, useState } from 'react';
import { JsonProps, TodoProps, UpdateProps } from './types';
import { useMMKVObject } from 'react-native-mmkv';
const url = 'gjgjdf007y.temp.swtest.ru';

export const TodoFunctions = () => {

    const [todo, setTodo] = useMMKVObject<TodoProps[]>('todo');
    const [isLoading, setLoading] = useState(true);

    const addTaskAPI = async ({id, text, isChecked}: TodoProps) => {
        try {
            todo &&
            setTodo([
                ...todo,
                { id, text, isChecked },
            ]);

            fetch(`http://${url}/addTask/`,
                {
                    method : 'POST',
                    body : JSON.stringify({id, text, isChecked}),
                    headers: {'Content-Type': 'application/json;charset=utf-8'},
                },
            );

        } catch (error) {
            console.log(error);
        }
    };
    const getTaskAPI = useCallback( async (id : string | number = '') => {
        try {
            const response = await fetch(`http://${url}/getTask/${id}`);
            const json : JsonProps = await response.json();

            if(json.data){
                setTodo(
                    [...json.data]
                );
            }else{
                console.error(json.errors);
            }
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
        }
    }, [setTodo]);
    const deleteTaskAPI = async (id: number) => {
        try {
            setTodo(t => t && t.filter(e => e.id !== id));

            fetch(`http://${url}/deleteTask/${id}`,
                {method: 'DELETE'}
            );

        } catch (error) {
            console.log(error);
        }
    };
    const updateTaskAPI = async (id: UpdateProps['id'], parametrs: UpdateProps['parametrs']) => {
        try {
            todo &&
            setTodo( t =>
                t && t.map(e => {
                    if(e.id === id){
                        return {...e, ...parametrs};
                    }else{
                        return e;
                    }
                }),
            );


            fetch(`http://${url}/updateTask/${id}`, {
                    method : 'PATCH',
                    body : JSON.stringify({
                        id: parametrs.id,
                        text: parametrs.text,
                        isChecked: parametrs.isChecked,
                        image: parametrs.image,
                    }),
                    headers: {'Content-Type': 'application/json;charset=utf-8'},
                },
            );
            // const json = await reqwest.json();
            console.log(id, parametrs);

        } catch (error) {
            console.log(error);
        }
    };

    const updateId = () => {
        if (todo){
            const maxId = todo.length;
            // const index_arr = [...Array(maxId).keys()];

            for (let i = 0; i < maxId; i++){
                if (todo[i].id !== i + 1){
                    console.log(todo[i].id, 'dsfds');
                    updateTaskAPI(todo[i].id, {id: i + 1});
                }
            }
        }
    };

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



