/* eslint-disable no-lone-blocks */
import React, { FC } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { style } from './FormStyle';
import { Control, Controller, FieldErrors, useForm } from 'react-hook-form';

type Inputs = {
    login: string,
    password: string,
}

type ControlProps = {
    control: Control<Inputs, any>,
    errors: FieldErrors<Inputs>,
    name: 'login' | 'password',
    rules: {},
    placeholder: string
}

// console.log(String({...Inputs}.keys));

const ControlForm: FC<ControlProps> = ({ control, errors, name, rules, placeholder }) => {

    return (
        <>
            <Controller
                name={name}
                control={control}
                rules={{ ...rules }}
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        style={[
                            style.form,
                            errors[name] ? style.form_error : {},
                        ]}
                        placeholder={placeholder}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />
            {
                errors[name]
                &&
                <Text style={style.error_text}>
                    {errors[name]?.message}
                </Text>
            }
        </>

    );
};

export const Form = () => {
    const navigation = useNavigation();

    const { control, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit = (data: Inputs) => {
        console.log(data);
        if (data.login === 'admin' && data.password === '1234') {
            navigation.navigate('Todo');
        }
        else {
            console.error('Invalid name or password');
            console.log(errors);
        }
    };

    return (
        <View>
            <ControlForm {...{ control, errors, name: 'login', rules: { required: 'Login is requred folder' }, placeholder: 'Login' }} />
            <ControlForm {...{ control, errors, name: 'password', rules: { required: 'Password is requred folder' }, placeholder: 'Password' }} />
            <Button
                title="Log in"
                onPress={handleSubmit(onSubmit)}
            />
        </View>
    );
};
