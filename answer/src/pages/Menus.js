import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom';
import MenuItem from '../components/items/MenuItem'
import { callGetMenusAPI } from "../apis/MenuAPICalls";
import './Menus.css';

function Menus() {

    const { menu } = useSelector(state => state.menuReducer);

    const menus = menu;
    console.log('[menus]', menus);


    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(callGetMenusAPI())
        }, []
    );


    return (
        menus && (
            <div >
                <NavLink to="/menus/regist">
                    <button>메뉴등록</button>
                </NavLink>
                <NavLink to="/menus/modify">
                    <button>메뉴수정</button>
                </NavLink>


                <div className="menuBox">
                {menus.map(menu => <MenuItem key={menu.id} menu={menu} />)}
                </div>
            </div>
        )
    );
}

export default Menus
