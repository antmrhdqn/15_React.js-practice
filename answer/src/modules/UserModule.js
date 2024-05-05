import { createActions, handleActions } from 'redux-actions';


export const GET_USER = 'users/GET_USER';

const actions = createActions({
    [GET_USER]: () => { }
})

const initialState = [{}];

const userReducer = handleActions(
    {
        [GET_USER]: (state, { payload }) => {
            return payload;
        }
    }, initialState
)

export default userReducer;