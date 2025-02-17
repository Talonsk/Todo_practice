/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { styles } from './styles';

import {
  SafeAreaView,
  TextInput,
} from 'react-native';

function App(): React.JSX.Element {
  const [text, onChangeText] = useState('');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Write your task"
        value={text}
      />
    </SafeAreaView>
  );
};

export default App;
