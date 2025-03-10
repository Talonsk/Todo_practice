/* eslint-disable react-native/no-inline-styles */
import React, { FC, useState } from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { ItemProps } from './types';
import { styles } from './style';

export const TodoItem: FC<ItemProps> = ({ id, text, isChecked, deliteTask, updateTaskAPI }) => {

    const [itemText, setText] = useState(text);
    const [localChecked, setLocalChecked] = useState(isChecked);
    const [isChenge, setChenge] = useState(false);
    const [isDelite, setDelite] = useState(false);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();

    const updateTask = () => {
        itemText ? setChenge(!isChenge) : {};
        if (isChenge && text.trim() !== itemText.trim()){
            updateTaskAPI(id, {text: itemText});
        }
        setText(itemText.trim());
    };

    const onButtonDelitePress = () => {
        setDelite(!isDelite);
        if (!isDelite){
            setTimeoutId(
                setTimeout(async () => {
                    deliteTask(id);
                }, 5000)
            );
        }else{
            clearTimeout(timeoutId);
        }
    };

    return (
        <View style={styles.item}>
            <View style={styles.item_text}>
                <BouncyCheckbox
                    size={20}
                    onPress={() => {
                        setLocalChecked(!localChecked);
                    }}
                />
                <Text style={styles.text}>{id}</Text>
                <Text style={styles.text}>
                {isChenge ?
                    <TextInput
                        style={styles.text_input}
                        onChangeText={(changeText)=>{setText(changeText);}}
                        onSubmitEditing={updateTask}
                        autoFocus={true}
                        placeholder="Text cannot be empty"
                        value={itemText}
                    />
                    :
                        <Text style={{ textDecorationLine: localChecked ? 'line-through' : 'none' }}>
                            {itemText}
                        </Text>
                }
                </Text>
            </View>
            <View style={styles.button_container}>
                <Button
                    onPress={updateTask}
                    title={isChenge ? '✓' : '✍'}
                    color={isChenge ? '#34c924' : '#2296f3'}
                />
                <Button
                    onPress={onButtonDelitePress}
                    title={isDelite ? '↩' : '✕' }
                    color={isDelite ? '#a6a6a6' : '#ff3433'}
                />
            </View>
        </View>
    );
};
