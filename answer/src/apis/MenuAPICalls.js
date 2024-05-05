/*
    Menu 정보에 대한 api 요청 함수 작성
    (Api.js의 request 함수 활용)
*/

import { GET_MENU } from "../modules/MenuModule";
import { request } from "./Api"

export function callGetMenusAPI(method, data) {


    return async function getMenus(dispatch, getState) {

        const result = await request(method, 'menu', data)

        console.log('[callGetMenu]', result);
        
        dispatch({type: GET_MENU, payload: result});
       
    }

}