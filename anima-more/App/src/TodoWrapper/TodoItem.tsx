import React, { Props } from 'react';
import {Button, View, Text } from 'react-native';
import { styles } from '../../styles';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

type ItemProps = Props<{
    id: number,
    text: string
}>

export const TodoItem = ({id, text}: ItemProps) =>{
    return(
        <View key={id} style={styles.item}>
            <View style={styles.item_text}>
                <BouncyCheckbox
                size={20}
                onPress={()=>{}}
                />
                <Text>{id}</Text>
                <Text>{text}</Text>
            </View>
            <Button
            onPress={()=>{}}
            title="✕"
            color="#ff3433"
            />
        </View>
    );
};
