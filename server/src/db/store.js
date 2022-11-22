import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {serverReducers} from "../services/Server";


export const store = configureStore({
    reducer: {
        server: serverReducers,

    },
    // adding explicit getDefaultMiddleware function
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            // custom middleware
            logger
        ])
});


