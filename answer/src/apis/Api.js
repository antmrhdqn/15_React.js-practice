import axios from 'axios';

const DOMAIN = 'http://localhost:4000';

export const request = async (method, url, data) => {

    /*
        공통 api 호출 함수 작성

        1. async-await 활용
        2. method, url, data를 받아 api 요청
    */

        const getUrl = data ? `/${data}` : '';
        const result = await axios({method, url:`${DOMAIN}/${url}/${getUrl}`})
        .then(res => res.data)
        .catch(error => console.log(error));

        console.log('[request]',result);
        return result;
};
