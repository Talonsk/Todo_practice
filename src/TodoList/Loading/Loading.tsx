/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ActivityIndicator, View } from 'react-native';

export const Loading = () => {

    return(
        <View style={{ margin: 20 }}>
            <ActivityIndicator size={'large'}/>
        </View>
    );
};
