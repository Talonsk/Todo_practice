import React from 'react';
import { Button, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { style } from './FormStyle';
import { Controller, useForm } from 'react-hook-form';

type Inputs = {
    login: string,
    password: string,
}

export const Form = () => {
    const navigation = useNavigation();

    const { control, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit = (data: Inputs) => {
        console.log(data);
        if (data.login === 'admin' && data.password === '1234'){
            navigation.navigate('Todo');
        }
    };
    console.log(errors);

    return (
        <View>
            <Controller
                name="login"
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        style={style.form}
                        placeholder="Login"
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />
            <Controller
                name="password"
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        style={style.form}
                        placeholder="Password"
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />
            <Button
                title="Log in"
                onPress={handleSubmit(onSubmit)}
            />
            {/* <Controller/> */}
        </View>
    );
};
