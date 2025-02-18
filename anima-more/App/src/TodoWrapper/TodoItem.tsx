import React, { PropsWithChildren } from "react";
import {SafeAreaView, Text } from "react-native";
import { styles } from "../../styles";

type itemProps = PropsWithChildren<{
    id: number,
    text: string
}>

export const TodoItem = ({id, text}: itemProps) =>{
    return(
        <SafeAreaView style={styles.item}>
            <Text>{id}</Text>
            <Text>{text}</Text>
        </SafeAreaView>

    );
};
