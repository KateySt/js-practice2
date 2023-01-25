import {createSlice} from '@reduxjs/toolkit'

export const InputThingsSlice = createSlice({
    name: 'inputThings',
    initialState: {
        ListInputThings: {
            list: [
                {
                    id: 0,
                    title: 'do1',
                    isCompleted: false,
                },
                {
                    id: 1,
                    title: 'do2',
                    isCompleted: true,
                },
                {
                    id: 2,
                    title: 'do3',
                    isCompleted: true,
                },
            ]
        },
         idDelete: 0,
    },
    reducers: {
        setList: (state, action) => {
            state.ListInputThings = {
                list:
                    [...state.ListInputThings.list, {id: Date.now(), title: action.payload, isCompleted: false}]
            };
        },
        deleteList: (state, action) => {
             state.idDelete = state.ListInputThings.list.pop(action.payload);
        },
        changeList: (state, action) => {
            state.ListInputThings = {
                list: state.ListInputThings.list.map((el) => ({
                    ...el,
                    isCompleted: el.id === action.payload.id ? !el.isCompleted : el.isCompleted
                }))
            };
        },
    },
});

export const {setList, deleteList, changeList} = InputThingsSlice.actions;

export const selectInputList = (state) => state.inputThings.ListInputThings;

export const deleteListToDo = (element) => (dispatch) => {
    dispatch(deleteList(element));
}

export const changeListToDo = (element) => (dispatch) => {
    dispatch(changeList(element));
}

export const setListToDo = (element) => (dispatch) => {
    dispatch(setList(element));
}

export default InputThingsSlice.reducer;