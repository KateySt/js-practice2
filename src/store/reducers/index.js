import {ACTION_DELETE, ACTION_CHANGE, ACTION_SET} from "../actions/listToDo";

const initialState = {
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
};

const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ACTION_DELETE:
            return {
                list: state.list.filter((el) => el !== payload)
            };
        case ACTION_CHANGE:
            return {
                list: state.list.map((el) => ({
                    ...el,
                    isCompleted: el.id === payload.id ? !el.isCompleted : el.isCompleted
                }))
            };
        case ACTION_SET:
            return {
                list:
                    [...state.list, {id: Date.now(), title: payload, isCompleted: false}]
            };
        default:
            return state;
    }
}

export default rootReducer;