import React, { FC, useEffect, useState } from 'react';
import { View } from 'react-native';
import SortableList, { RowProps } from 'react-native-sortable-list';
import { PaginationButtons } from './PaginationButtons/PaginationButtons';
import { TodoItem } from './TodoItem/TodoItem';
import { PaginationProps } from './types';
import { styles } from './style';

export const Pagination: FC<PaginationProps> = ({todo, deliteTask, updateTask}) => {

    const pageItemMax = 9;
    const [page, setPage] = useState(1);
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
        page >= maxPage + 1 && setPage(p => p - 1);
    }, [page, maxPage, setPage]);

    const renderRow = ({data}: RowProps) =>{
        return(
            <TodoItem
                id={data.id}
                text={data.text}
                isChecked={data.isChecked}
                image={data.image}
                deliteTask={deliteTask}
                updateTask={updateTask}
            />
        );
    };

    return(
        <View style={styles.pagination_container}>
            <SortableList
                data={pageTodo}
                renderRow={renderRow}
                onReleaseRow={(key, currentOrder) => {
                    currentOrder.map(async (n, i) => {
                        n = parseInt(String(n), 10) + pageItemMax * (page - 1);
                        i += pageItemMax * (page - 1);
                        i !== n && await updateTask(i + 1, {
                            text: todo[n].text,
                            isChecked: todo[n].isChecked,
                            image: todo[n].image || '',
                        });
                    });
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
