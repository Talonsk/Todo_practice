import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { AddTask } from './AddTask/AddTask';
import { TodoWrapper } from './TodoWrapper/TodoWrapper';
import { TodoFunctions } from './TodoFunctions/TodoFunctions';
import { Loading } from './Loading/Loading';

export const TodoList = () => {

    const {
        todo,
        isLoading,
        setTodo,
        addTask,
        getTaskAPI,
        deliteTask,
        updateTaskAPI,
    } = TodoFunctions();

    useEffect( () => {
        async function fetchData() {
            const newTodo = await getTaskAPI();
            if (newTodo){
                setTodo([
                    ...newTodo,
                ]);
            }
        }

        fetchData();

    }, [getTaskAPI, setTodo]);

    return (
        <SafeAreaView>
            {isLoading ? <Loading/> :
                <>
                    <AddTask todo={todo} addTask={addTask} />
                    <TodoWrapper todo={todo} deliteTask={deliteTask} updateTaskAPI={updateTaskAPI}/>
                </>
            }
        </SafeAreaView>

    );
};
