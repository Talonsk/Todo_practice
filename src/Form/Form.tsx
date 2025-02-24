import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export const Form = () => {
    const navigation = useNavigation();

    return (
        <Button
            onPress={() => navigation.navigate('Todo')}
            title="Log in"
        />
    );
};
