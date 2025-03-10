import React, { FC, useEffect, useState } from 'react';
import { View, Button, FlatList } from 'react-native';
import { styles } from './style';
import { TodoItem } from '../TodoItem/TodoItem';
import { WrapperProps } from './types';

export const Pagination: FC<WrapperProps> = ({todo, deliteTask, updateTaskAPI}) => {

    const pageItemMax = 9;
    const maxPage = Math.ceil(todo.length / pageItemMax);
    const [page, setPage] = useState(1);
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
    const pagesArr: number[] = [];
    for(let p = 1; p <= maxPage; p++){
        pagesArr.push(p);
    }

    return(
        <View style={styles.pagination_container}>
            <FlatList
                key={'asadsad'}
                data={pageTodo}
                renderItem={({item}) =>
                <TodoItem
                    id={item.id}
                    text={item.text}
                    isChecked={item.isChecked}
                    deliteTask={deliteTask}
                    updateTaskAPI={updateTaskAPI}
                />}
                keyExtractor={item => 'id' + item.id}
                keyboardShouldPersistTaps="handled"
            />
            {todo.length > pageItemMax &&
                <View style={styles.button_container}>
                    <Button
                        title="<"
                        onPress={() => page > 1 ? setPage(p => p - 1) : {}}
                        color={page > 1 ? '#2296f3' : '#808080'}
                    />

                    {pagesArr.map(p => {
                        return (
                            <Button
                                title={String(p)}
                                onPress={()=>setPage(p)}
                                color={page === p ? '#2262ff' : '#2296f3'}
                            />
                        );
                    })}

                    <Button
                        title=">"
                        onPress={() => page < maxPage ? setPage(p => p + 1) : {}}
                        color={page < maxPage ? '#2296f3' : '#808080'}
                    />

                </View>
            }
        </View>
    );
};
