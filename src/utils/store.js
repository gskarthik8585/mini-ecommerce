import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../utils/slice'

export default configureStore({
    reducer: {
        app: appReducer
    }
});