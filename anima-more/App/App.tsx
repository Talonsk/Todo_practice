/* eslint-disable react/react-in-jsx-scope */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  Alert,
  Button,
  SafeAreaView,
  TextInput,
} from 'react-native';
import { styles } from './styles';
import React from 'react';

function onPressAdd(){
  Alert.alert('I`m presed');
}

function App(): React.JSX.Element {

  const [text, onChangeText] = React.useState('');

  return (
    <SafeAreaView>
        <SafeAreaView style={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder="Write your task"
            value={text}
          />
          <Button
            onPress={onPressAdd}
            title='Add task'
            color='#a6a6a6'
          />
        </SafeAreaView>
    </SafeAreaView>
  );
}

export default App;
