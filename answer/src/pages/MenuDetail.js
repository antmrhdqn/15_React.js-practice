    // MenuDetail.js
    import React from 'react';
    import { useSelector } from 'react-redux';
    import { useParams } from 'react-router-dom';

    function MenuDetail() {

        const { menu } = useSelector(state => state.menuReducer);

        const { id } = useParams();
        
        const detail = menu.find(menu => menu.id === id);
        
        return (
            <div>
                <h2>메뉴 상세 정보</h2>
                <h3>메뉴이름: {detail.menuName}</h3>
                <h3>메뉴가격: {detail.menuPrice}</h3>
                <h3>카테고리이름: {detail.categoryName}</h3>
                <h3>상품설명: {detail.detail.description}</h3>
                <img src={detail.detail.image} alt="메뉴 이미지" />
            </div>
        );
    }

    export default MenuDetail;
