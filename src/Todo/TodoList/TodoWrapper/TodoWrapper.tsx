/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import { Pagination } from './Pagination/Pagination';

export const TodoWrapper = () =>{
    return(
        <View style={{ flex: 1 }}>
            <Pagination />
        </View>
    );
};
