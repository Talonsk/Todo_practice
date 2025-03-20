import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    item:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        gap: 10,
        padding: 10,
        margin: 5,
        borderWidth: 1,
        backgroundColor: 'white',
    },
    item_text:{
        flexDirection: 'row',
        height: 40,
        width: 250,
        gap: 10,
    },
    text:{
        lineHeight: 40,
        textAlign: 'center',
    },
    text_input:{
        height: 40,
        width: 250,
        padding: 0,
    },
    button_container: {
        flexDirection: 'row',
        gap: 5,
    },
});
