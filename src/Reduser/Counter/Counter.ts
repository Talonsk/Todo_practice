
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddProps, DeleteProps, PageProps, QueueDeletion, ReplaceProps, TodoProps, UpdateProps } from './types';
// import { TodoFunctions } from '../../Todo/TodoList/TodoFunctions/TodoFunctions';

// const Todo = TodoFunctions().todo;
const todo : TodoProps[] = [];
const queue_deletion : QueueDeletion = [];
const url = 'gjgjdf007y.temp.swtest.ru';

export const counterSlice = createSlice({
    name: 'todo',
    initialState: {
        id: 0,
        page: 1,
        pageItemMax: 9,
        queue_deletion: queue_deletion,
        todo: todo,
    },
    reducers: {
        todoAdd(state, action : PayloadAction<AddProps>) {
            const id = state.id += 1;
            const text = action.payload.text;
            const isChecked = false;
            state.todo.push({ id, text, isChecked});

            fetch(`http://${url}/addTask/`,
                {
                    method : 'POST',
                    body : JSON.stringify({id, text, isChecked}),
                    headers: {'Content-Type': 'application/json;charset=utf-8'},
                },
            );
        },
        todoGet() {
            // (state)
            // console.log(Todo);
            // Todo ? state.todo = Todo : {};
        },
        changePage(state, action: PayloadAction<PageProps>){
            state.page = action.payload.new_page;
        },
        addDeleteQueue(state, action: PayloadAction<DeleteProps>){
            const del_id = action.payload.del_id - 1;
            if (!state.queue_deletion.includes(del_id)){
                state.queue_deletion.push(del_id);
            }else{
                let del_index = state.queue_deletion.indexOf(del_id);
                state.queue_deletion.splice(del_index, 1);
            }
        },
        todoDelele(state) {
            const del_id = state.queue_deletion.shift() || 0;
            del_id !== undefined && state.todo.splice(del_id, 1);
            state.id -= 1;

            state.queue_deletion = state.queue_deletion.map((id)=>{
                if(id > del_id){
                    return id - 1;
                }else{
                    return id;
                }
            });

            const maxId = state.todo.length;
            if (del_id !== maxId){
                for (let i = 0; i < maxId; i++){
                    if (state.todo[i].id !== i + 1){
                        state.todo[i] = {...state.todo[i], id: i + 1};
                    }
                }
            }

            fetch(`http://${url}/deleteTask/${del_id}`,
                {method: 'DELETE'}
            );
        },
        todoReplace(state, action: PayloadAction<ReplaceProps>){
            const currentOrder = action.payload.new_order;
            const page = state.page;
            const pageItemMax = state.pageItemMax;
            let new_del_order: number[]  = [];

            const new_todo = currentOrder.map((n, i) => {
                n = parseInt(String(n), 10) + pageItemMax * (page - 1);
                i += pageItemMax * (page - 1);
                if(i !== n){
                    const parametrs = {
                        text: state.todo[n].text,
                        isChecked: state.todo[n].isChecked,
                        image: state.todo[n].image || '',
                    };
                    state.queue_deletion.map(del_id => {
                        if(del_id === n) {
                            new_del_order.push(i);
                        }
                    });
                    return {...state.todo[i], ...parametrs};
                }else{
                    return {...state.todo[n]};
                }
            });
            state.todo = new_todo;
            state.queue_deletion = new_del_order;

            // state.queue_deletion = state.queue_deletion.map(i => {
            //     if(i === id && change_id){
            //         return change_id;
            //     }else{
            //         return i;
            //     }
            // });
        },
        todoUpdate(state, action : PayloadAction<UpdateProps>) {
            const id = action.payload.id;
            const task = action.payload.parametrs;
            state.todo[id] = {...state.todo[id], ...task};

            const parametrs = action.payload.parametrs;


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
        },
    },
});

export const {
    todoAdd,
    todoDelele,
    todoUpdate,
    addDeleteQueue,
    todoReplace,
    changePage,
} = counterSlice.actions;
export default counterSlice.reducer;
