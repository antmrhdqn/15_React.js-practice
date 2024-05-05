/*
    로그인에 대한 api 요청 함수 작성
    (Api.js의 request 함수 활용)
*/

import { request } from "./Api";

export function callGetMenusAPI(method, data) {


    return async function getMenus(dispatch, getState) {

        const result = await request(method, 'user', data)

        console.log('[callGetuser]', result);
        
        dispatch({type: GET_USER, payload: result});
       
    }

}