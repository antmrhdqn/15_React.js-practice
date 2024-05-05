import LoginForm from '../components/form/LoginForm'

function Login() {
    return (
        <>
         <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <h1>로그인 페이지</h1>
            <LoginForm />
            </div>
        </>
    );
}

export default Login;