export const ACTION_CHANGE = 'ACTION_CHANGE';
export const ACTION_DELETE = 'ACTION_DELETE';
export const ACTION_SET = 'ACTION_SET';

export const changeList = (payload) => ({type: ACTION_CHANGE, payload});
export const deleteList = (payload) => ({type: ACTION_DELETE, payload});
export const setList = (payload) => ({type: ACTION_SET, payload});