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
        // setTodo,
        addTask,
        getTaskAPI,
        deliteTask,
        updateTaskAPI,
        updateId,
    } = TodoFunctions();

    useEffect(() => {
        async function fetchData(){
            await getTaskAPI();
        }
        fetchData();
    }, [getTaskAPI]);
    useEffect(() =>{
        updateId();
    });

    return (
        <SafeAreaView>
            {isLoading ? <Loading/> :
                <>
                    <AddTask todo={todo} addTask={addTask} />
                    <TodoWrapper todo={todo} deliteTask={deliteTask} updateTaskAPI={updateTaskAPI}/>
                    {/* <Button
                        onPress={updateId}
                        title='update id'
                    /> */}
                </>
            }
        </SafeAreaView>

    );
};
