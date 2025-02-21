import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        padding: 10,
        margin:  15,
    },
    input:{
        width: 200,
        height: 40,
        borderWidth: 1,
    },
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
