import { NavLink } from 'react-router-dom';

function LoginForm() {

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <div>
                <label>ID</label><input style={{marginLeft:5}} type="text"/>
                <label style={{marginLeft:20}}>P/W</label><input style={{marginLeft:5}} type="password"/>
            </div>
            <button>로그인</button>
        </div>
    );
}

export default LoginForm;
