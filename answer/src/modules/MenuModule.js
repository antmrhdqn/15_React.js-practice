import { createActions, handleActions } from 'redux-actions';

const initialState = [];

export const GET_MENU = 'menus/GET_MENU';

const actions = createActions({
    [GET_MENU]: () => { }
})


const menuReducer = handleActions(
    {
        [GET_MENU]: (state, { payload }) => ({menu:payload})
    }, initialState
)

export default menuReducer;