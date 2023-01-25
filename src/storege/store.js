import { configureStore } from '@reduxjs/toolkit'
import InputThingsReducer from '../features/inputThings/InputThingsSlice';

export default configureStore({
    reducer: {
        inputThings: InputThingsReducer,
    },
});