import {useDispatch, useSelector} from "react-redux";
import {selectInputList, setListToDo} from "../features/inputThings/InputThingsSlice";
import {useEffect, useState} from "react";

function useList() {

    const listToDos = useSelector(selectInputList);

    const dispatch = useDispatch();

    const [todo, setToDo] = useState({
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
    });

    const [inputText, setInputText] = useState('');

    useEffect(() => {
        dispatch(setListToDo(todo));
    }, [todo]);

    const onInputText = (event) => {
        setInputText(event.target.value);
    }

    const onClickAddToList = () => {
        setToDo(
            {
                list:
                    [...todo.list, {id: Date.now(), title: inputText, isCompleted: false}]
            }
        );
    }

    const onDelete = (value) => {
        setToDo(
            {
                list: todo.list.filter((el) => el !== value)
            }
        );
    }

    const onChangeShow = (value) => {
        setToDo(
            {
                list: todo.list.map((el) => ({
                    ...el,
                    isCompleted: el.id === value.id ? !el.isCompleted : el.isCompleted
                }))
            }
        );
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