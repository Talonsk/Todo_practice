import React, { FC } from 'react';
import { Controller } from 'react-hook-form';
import { TextInput } from 'react-native';
import { ControlProps } from '../types';
import { styles } from '../style';
import { Text } from '@react-navigation/elements';

export const ControlerInput: FC<ControlProps> = ({ control, errors, name, placeholder, onFocus, rules, param }) => {

    return (
        <>
            <Controller
                name={name}
                control={control}
                rules={{ ...rules }}
                render={({ field: { onChange,value } }) => (
                    <TextInput
                        style={[
                            styles.form,
                            errors[name] ? styles.form_error : {},
                        ]}
                        placeholder={placeholder}
                        onChangeText={onChange}
                        onFocus={() => onFocus(name)}
                        value={value}
                        {...param}
                    />
                )}
            />
            {
                errors[name]
                &&
                <Text style={styles.error_text}>
                    {errors[name]?.message}
                </Text>
            }
        </>

    );
};
