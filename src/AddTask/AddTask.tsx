import {
    Button,
    View,
    TextInput,
} from 'react-native';
import React, { useContext, useState } from 'react';
import { styles } from '../../styles/styles';
import { TodoContext } from '../Context/TodoContext';

export const AddTask = () =>{
    const [id, setId] = useState(1);
    const [text, onChangeText] = useState('');
    const {addTask} = useContext(TodoContext);

    const onPressAdd = () =>{
        if (text !== ''){
            setId(i => i + 1);
            addTask(id, text);
            onChangeText('');
        }
    };

    return(
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
