import {createSlice} from '@reduxjs/toolkit'

export const InputThingsSlice = createSlice({
    name: 'inputThings',
    initialState: {
        ListInputThings: {},
    },
    reducers: {
        setList: (state, action) => {
            state.ListInputThings = action.payload
        },
    },
})

export const {setList} = InputThingsSlice.actions

export const selectInputList = (state) => state.inputThings.ListInputThings

export const setListToDo = (i) => (dispatch) => {
    dispatch(setList(i))
}

export default InputThingsSlice.reducer