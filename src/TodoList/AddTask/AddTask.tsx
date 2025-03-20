import React, { FC, useEffect, useState } from 'react';
import { Button, View, TextInput } from 'react-native';
import { FunctionProps } from './types';
import { styles } from './style';

export const AddTask: FC<FunctionProps> = ({todo, addTask}) => {

    const [id, setId] = useState(1);
    const [inputText, onChangeText] = useState('');

    useEffect(() => {
        if(todo.length !== 0){
            const lastId = todo[todo.length - 1].id;
            setId(lastId + 1);
        }else{
            setId(1);
        }
    }, [todo]);

    const onPressAdd = () => {
        const isChecked = false;
        const text = inputText.trim();
        if (text !== '') {
            setId(i => i + 1);
            addTask({id, text, isChecked});
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
