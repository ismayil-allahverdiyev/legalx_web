// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import authReducer from './auth_slice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

const makeStore = () => configureStore({
    reducer: {
        auth: authReducer,
    },
});

export type RootState = ReturnType<ReturnType<typeof makeStore>['getState']>;
export type AppDispatch = ReturnType<typeof makeStore>['dispatch'];
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const wrapper = createWrapper(makeStore);
