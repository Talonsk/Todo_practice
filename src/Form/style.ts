import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        gap: 10,
        margin: 15,
    },
    form: {
        borderWidth: 1,
        padding: 10,
    },
    form_error: {
        borderColor: 'red',
    },
    error_text: {
        marginLeft: 10,
        marginTop: -2,
        color: 'red',
    },
});
