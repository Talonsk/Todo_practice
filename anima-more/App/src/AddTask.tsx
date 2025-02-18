/* eslint-disable react/react-in-jsx-scope */

import {
    Button,
    SafeAreaView,
    TextInput,
} from 'react-native';
import React, { PropsWithChildren } from 'react';
import { styles } from '../styles';

type functionProps = PropsWithChildren<{
    addTask:
        (id: number, text: string) => void
}>

export const AddTask = ({addTask}: functionProps) =>{
    const [id, setId] = React.useState(1);
    const [text, onChangeText] = React.useState('');

    function onPressAdd(){
        setId(i => i + 1);
        addTask(id, text);
    }

    return(
        <SafeAreaView style={styles.container}>
            <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder="Write your task"
            value={text}
            />
            <Button
            onPress={onPressAdd}
            title="Add task"
            color="#a6a6a6"
            />
        </SafeAreaView>
    );
};
