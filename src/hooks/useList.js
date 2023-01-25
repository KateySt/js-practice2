import {useDispatch, useSelector} from "react-redux";
import {changeListToDo, deleteListToDo, selectInputList, setListToDo} from "../features/inputThings/InputThingsSlice";
import {useEffect, useState} from "react";

function useList() {

    const listToDos = useSelector(selectInputList);

    const dispatch = useDispatch();

    const [inputText, setInputText] = useState('');

    const onInputText = (event) => {
        setInputText(event.target.value);
    }

    const onClickAddToList = () => {
        dispatch(setListToDo(inputText));
    }

    const onDelete = (value) => {
        dispatch(deleteListToDo(value));
    }

    const onChangeShow = (value) => {
        dispatch(changeListToDo(value));
    }

    const getColour = (value) => {
        return value.isCompleted ? '#F7C815' : '#BC0000';
    }

    return {
        listToDos,
        inputText,
        onInputText,
        onClickAddToList,
        onDelete,
        onChangeShow,
        getColour
    };
}

export default useList;