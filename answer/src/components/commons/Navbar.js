import { NavLink } from 'react-router-dom';

function Navbar() {
    return(
        <div>
            <ul>
                <li><NavLink to="/main" >MAIN</NavLink></li>
                <li><NavLink to="/menus" >MENUS</NavLink></li>
                <li><NavLink to="/login" >LOGIN</NavLink></li>
            </ul>
        </div>
    );
}

export default Navbar;