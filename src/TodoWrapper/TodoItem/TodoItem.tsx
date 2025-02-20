import React, { FC, useContext } from 'react';
import {Button, View, Text } from 'react-native';
import { styles } from '../../../styles/styles';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { TodoContext } from '../../Context/TodoContext';

type ItemProps = {
    id: number,
    text: string
}

export const TodoItem: FC<ItemProps> = ({id, text}) =>{

    const {deliteTask} = useContext(TodoContext);

    return(
        <View style={styles.item}>
            <View style={styles.item_text}>
                <BouncyCheckbox
                size={20}
                onPress={()=>{}}
                />
                <Text style={styles.text}>{id}</Text>
                <Text style={styles.text}>{text}</Text>
            </View>
            <Button
            onPress={() => deliteTask(id)}
            title="✕"
            color="#ff3433"
            />
        </View>
    );
};
