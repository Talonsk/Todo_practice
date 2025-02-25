import { Control, FieldErrors } from 'react-hook-form';

export type Inputs = {
    login: string,
    password: string,
}

export type ControlProps = {
    control: Control<Inputs, any>,
    errors: FieldErrors<Inputs>,
    name: keyof Inputs,
    placeholder: string
    onFocus: (name: keyof Inputs) => void,
    rules: {},
    param: {},
}
