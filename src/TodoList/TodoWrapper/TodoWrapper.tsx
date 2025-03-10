/* eslint-disable react-native/no-inline-styles */
import React, { FC } from 'react';
import { View } from 'react-native';
import { WrapperProps } from './types';
import { Pagination } from './Pagination/Pagination';

export const TodoWrapper: FC<WrapperProps> = ({todo, deliteTask, updateTaskAPI}) =>{
    return(
        <View style={{flex: 1}}>
            <Pagination
                todo={todo}
                deliteTask={deliteTask}
                updateTaskAPI={updateTaskAPI}
            />
        </View>
    );
};
