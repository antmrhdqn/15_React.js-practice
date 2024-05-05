import React from 'react';
import { NavLink } from 'react-router-dom';
import './MenuItem.css'

function MenuItem({menu}) {
    
    return (
        <div className='menuItem'>
           <NavLink to={`/menus/detail/${menu.id}`}>
                <h3>메뉴이름: {menu.menuName}</h3>
                <h3>메뉴가격: {menu.menuPrice}</h3>
            </NavLink>
        </div>
    );
}

export default MenuItem;