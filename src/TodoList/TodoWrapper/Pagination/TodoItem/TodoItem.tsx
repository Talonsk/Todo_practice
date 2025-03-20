/* eslint-disable react-native/no-inline-styles */
import React, { FC, useState } from 'react';
import { Button, View, Text, TextInput, Image } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { ItemProps } from './types';
import { styles } from './style';
import { launchImageLibrary } from 'react-native-image-picker';

export const TodoItem: FC<ItemProps> = ({ id, text, isChecked, image = '', deliteTask, updateTask }) => {

    const [itemText, setText] = useState(text);
    const [localChecked] = useState(isChecked);
    const [localImage, setImage] = useState(image);
    const [isChenge, setChenge] = useState(false);
    const [isDelite, setDelite] = useState(false);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();

    const onButtonUpdatePress = () => {
        itemText && setChenge(!isChenge);
        const newText = itemText.trim();
        if (isChenge && text.trim() !== newText){
            if (newText !== '') {
                updateTask(id, {text: newText});
            }
        }
        setText(itemText.trim());
    };

    const onButtonDelitePress = () => {
        setDelite(!isDelite);
        if (!isDelite){
            setTimeoutId(
                setTimeout(async () => {
                    deliteTask(id);
                }, 2500)
            );
        }else{
            clearTimeout(timeoutId);
        }
    };

    const onButtonImagePress = async () => {
        const result = await launchImageLibrary({
            mediaType: 'photo',
            includeBase64: true,
        });
        if (result.assets !== undefined){
            if (result.assets[0].base64 !== undefined){
                const imageBase64 = result.assets[0].base64;
                updateTask(id, {image: imageBase64});
                setImage(result.assets[0].base64);
            }
        }
    };

    return (
        <View style={styles.item}>
            <View style={styles.item_text}>
                <BouncyCheckbox
                    size={20}
                    isChecked={isChecked}
                    onPress={() => {
                        updateTask(id, {isChecked: !localChecked});
                    }}
                />
                <Text style={styles.text}>{id}</Text>
                <Text style={styles.text}>
                {
                    isChenge ?
                    <TextInput
                        style={styles.text_input}
                        onChangeText={(changeText)=>{setText(changeText);}}
                        onSubmitEditing={onButtonUpdatePress}
                        autoFocus={true}
                        placeholder="Text cannot be empty"
                        value={itemText}
                    /> :
                    <Text style={{ textDecorationLine: localChecked ? 'line-through' : 'none' }}>
                        {itemText}
                    </Text>
                }
                </Text>
            </View>
            {
                localImage ?
                <Image
                    source={{uri: `data:image/png;base64,${localImage}`}}
                    style={{width: 40, height: 40}}
                /> :
                <Button
                    onPress={onButtonImagePress}
                    title="⇫"
                />
            }
            <View style={styles.button_container}>
                <Button
                    onPress={onButtonUpdatePress}
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
