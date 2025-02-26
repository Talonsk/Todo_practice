import {
    Button,
    View,
    TextInput,
} from 'react-native';
import React, { FC, useState } from 'react';
import { styles } from '../../../styles/styles';
import { FunctionProps } from './types';

export const AddTask: FC<FunctionProps> = ({addTask}) => {
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
