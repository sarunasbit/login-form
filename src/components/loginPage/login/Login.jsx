import './login.scss';

const Login = () => {
    return(
        <div className="login__form">
            <h2>Hello Again!</h2>
            <p>Welcome Back</p>
            <form action="">
                <input type="text" placeholder="Email Address"/>
                <input type="text" placeholder="Password"/>
                <button>Login</button>
                <p><span>Forgot Password</span></p>
            </form>
        </div>
    )
}

export default Login