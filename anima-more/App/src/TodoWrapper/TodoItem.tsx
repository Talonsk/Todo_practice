import React, { PropsWithChildren } from "react";
import {SafeAreaView, Text } from "react-native";

type itemProps = PropsWithChildren<{
    id: number,
    text: string
}>

export const TodoItem = ({id, text}: itemProps) =>{
    return(
        <SafeAreaView>
            <Text>{id}</Text>
            <Text>{text}</Text>
        </SafeAreaView>

    );
};
