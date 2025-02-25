/* eslint-disable no-sequences */
import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { ControlerInput } from './Controller/ControlerInput';
import { Inputs } from './types';
import { styles } from './style';

export const Form = () => {
    const navigation = useNavigation();
    const {
        control,
        handleSubmit,
        watch,
        setError,
        clearErrors,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit = (data: Inputs) => {

        if (data.login === 'admin' && data.password === '1234') {
            navigation.navigate('Todo');
        }
        else {
            setError('root', {
                type: 'invalid',
                message: 'Invalid name or password',
            });
        }
    };

    useEffect(() => {
        const subscription = watch(() => {
            clearErrors('root');
        });
        return () => subscription.unsubscribe();
    }), [watch];

    const onFocus = (name: keyof Inputs) => {
        clearErrors(name);
        clearErrors('root');
    };

    return (
        <View style={styles.container}>
            <ControlerInput {...{
                control, errors,
                name: 'login',
                placeholder: 'Login',
                onFocus: onFocus,
                rules: {
                    required: 'Login is requred folder',
                },
                param: {
                    autoComplete: 'email',
                    inputMode: 'text',
                },
            }}
            />
            <ControlerInput {...{
                control, errors,
                name: 'password',
                placeholder: 'Password',
                onFocus: onFocus,
                rules: {
                    required: 'Password is requred folder',
                },
                param: {
                    secureTextEntry: true,
                    autoComplete: 'new-password',
                    inputMode: 'text',
                },
            }}
            />
            {
                errors.root &&
                <Text style={styles.error_text}>
                    {errors.root?.message}
                </Text>
            }
            <Button
                title="Log in"
                onPress={handleSubmit(onSubmit)}
            />
        </View>
    );
};
