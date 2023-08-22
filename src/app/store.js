import { configureStore } from "@reduxjs/toolkit";
import manageTodosReducer from '../features/manageTodos/manageSlice';

export default configureStore({
    reducer: {
        todos: manageTodosReducer
    }
})