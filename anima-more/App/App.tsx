/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';

type SectionProps = PropsWithChildren<{
  title: string;
}>;
type ParagraphProps = PropsWithChildren<{
  text: string;
}>;

function Title({children, title}: SectionProps): React.JSX.Element {
  return (
    <View>
      <Text>
        {title}
      </Text>
      {children}
    </View>
  );
}

function Paragraph({text}: ParagraphProps): React.JSX.Element {
  return (
    <Text>
      {text}
    </Text>
  )
}

function App(): React.JSX.Element {

  return (
    <SafeAreaView>
      <Title title='Hello Word!'>
          <Paragraph text='Lorem'></Paragraph>
      </Title>
    </SafeAreaView>
  );
}

export default App;
