import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10,
        padding: 15,
        paddingTop: 200,
    },
    form: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 2,
        backgroundColor: 'white',
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
