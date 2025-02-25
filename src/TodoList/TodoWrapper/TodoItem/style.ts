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
    },
    item_text:{
        flexDirection: 'row',
        height: 30,
        width: 250,
        gap: 10,
    },
    text:{
        lineHeight: 30,
        textAlign: 'center',
    },
});
