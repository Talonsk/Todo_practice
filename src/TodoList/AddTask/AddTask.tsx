import React, { FC, useState } from 'react';
import { Button, View, TextInput } from 'react-native';
import { FunctionProps } from './types';
import { styles } from './style';

export const AddTask: FC<FunctionProps> = ({ addTask }) => {
    const [id, setId] = useState(1);
    const [text, onChangeText] = useState('');

    const onPressAdd = () => {
        if (text !== '') {
            setId(i => i + 1);
            addTask(id, text);
            onChangeText('');
        }
    };

    return (
        <View style={styles.container}>
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
        </View>
    );
};
