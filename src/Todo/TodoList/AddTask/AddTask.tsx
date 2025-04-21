import React, { useState } from 'react';
import { Button, View, TextInput } from 'react-native';
import { todoAdd } from '../Reduser/Counter/Counter';
import { useDispatch } from 'react-redux';
import { styles } from './style';

export const AddTask = () => {

    const dispatch = useDispatch();
    const [inputText, onChangeText] = useState('');

    const onPressAdd = () => {
        const text = inputText.trim();
        if (text !== '') {
            dispatch(todoAdd({text}));
            onChangeText('');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onSubmitEditing={onPressAdd}
                onChangeText={onChangeText}
                placeholder="Write your task"
                value={inputText}
            />
            <Button
                onPress={onPressAdd}
                title="Add task"
                color="#a6a6a6"
            />
        </View>
    );
};
