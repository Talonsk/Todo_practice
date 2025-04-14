import React, { FC } from 'react';
import { Button, View } from 'react-native';
import { styles } from './style';
import { ButtonsProps } from './types';

export const PaginationButtons: FC<ButtonsProps> = ({page, maxPage, pagesArr, setPage}) => {
    return(
        <View style={styles.button_container}>
            <Button
                title="<"
                onPress={() => page > 1 ? setPage(page - 1) : {}}
                color={page > 1 ? '#2296f3' : '#808080'}
            />

            {pagesArr.map(p => {
                return (
                    <Button
                        key={String(p)}
                        title={String(p)}
                        onPress={()=>setPage(p)}
                        color={page === p ? '#2262ff' : '#2296f3'}
                    />
                );
            })}

            <Button
                title=">"
                onPress={() => page < maxPage ? setPage(page + 1) : {}}
                color={page < maxPage ? '#2296f3' : '#808080'}
            />
        </View>
    );
};
