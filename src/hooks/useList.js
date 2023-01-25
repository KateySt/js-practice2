import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {changeList, deleteList, setList} from "../store/actions/listToDo";

function useList() {

    const listToDos = useSelector(state => ({
        list: state.list,
    }));

    const dispatch = useDispatch();

    const [inputText, setInputText] = useState('');
    const onInputText = (event) => {
        setInputText(event.target.value);
    }

    const onClickAddToList = () => {
        dispatch(setList(inputText));
        console.log(listToDos)
    }

    const onDelete = (value) => {
        dispatch(deleteList(value));
    }

    const onChangeShow = (value) => {
        dispatch(changeList(value));
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