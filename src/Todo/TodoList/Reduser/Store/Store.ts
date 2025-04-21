import { configureStore } from '@reduxjs/toolkit';
import counterReduser from '../Counter/Counter';

export const store = configureStore({
    reducer: {
        counter: counterReduser,
    },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispach = typeof store.dispatch;
