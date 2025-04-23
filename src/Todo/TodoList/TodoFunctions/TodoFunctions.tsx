import { useCallback, useState } from 'react';
import { JsonProps, TodoProps } from './types';
import { useMMKVObject } from 'react-native-mmkv';
// import { useMMKVObject } from 'react-native-mmkv';
const url = 'gjgjdf007y.temp.swtest.ru';

export const TodoFunctions = () => {

    const [todo, setTodo] = useMMKVObject<TodoProps[]>('todo');
    const [isLoading, setLoading] = useState(true);

    const getTaskAPI = useCallback( async (id : string | number = '') => {
        try {
            const response = await fetch(`http://${url}/getTask/${id}`);
            const json : JsonProps = await response.json();

            if(json.data){
                setTodo([...json.data]);
            }else{
                console.error(json.errors);
            }
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
        }
    }, [setTodo]);

    return ({
        todo,
        isLoading,
        getTaskAPI,
    });

};



