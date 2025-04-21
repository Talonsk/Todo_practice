import React, { useCallback, useEffect } from 'react';
import { View } from 'react-native';
import SortableList, { RowProps } from 'react-native-sortable-list';
import { RootState } from '../../Reduser/Store/Store';
import { useDispatch, useSelector } from 'react-redux';
import { changePage, todoReplace } from '../../Reduser/Counter/Counter';
import { PaginationButtons } from './PaginationButtons/PaginationButtons';
import { TodoItem } from './TodoItem/TodoItem';
import { styles } from './style';
export const Pagination = () => {

    const todo = useSelector((state : RootState) => state.counter.todo);
    const dispatch = useDispatch();

    const pageItemMax = useSelector((state: RootState) => state.counter.pageItemMax);
    const page = useSelector((state: RootState) => state.counter.page);
    const setPage = useCallback((new_page: number) => {
        dispatch(changePage({new_page}));
    }, [dispatch]);

    const maxPage = Math.ceil(todo.length / pageItemMax);
    const pagesArr = [...Array(maxPage).keys()].map(n => n + 1);
    const pageTodo = todo.filter(e => {
        return (
            e.id <= page * pageItemMax
            &&
            e.id > (page - 1) * pageItemMax
        );
    });

    useEffect(() => {
        page !== 1 && page === maxPage + 1 && setPage(page - 1);
    }, [page, maxPage, setPage]);

    const renderRow = ({data}: RowProps) =>{
        return(
            <TodoItem
                id={data.id}
                text={data.text}
                isChecked={data.isChecked}
                image={data.image}
            />
        );
    };

    return(
        <View style={styles.pagination_container}>
            <SortableList
                data={pageTodo}
                renderRow={renderRow}
                onReleaseRow={(_, currentOrder) => {
                    dispatch(todoReplace({new_order: currentOrder}));
                }}
                style={styles.sortet_list}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
            />
            {todo.length > pageItemMax &&
                <PaginationButtons
                    page={page}
                    maxPage={maxPage}
                    pagesArr={pagesArr}
                    setPage={setPage}
                />
            }
        </View>
    );
};
