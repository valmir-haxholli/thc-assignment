import Button from "../Button/Button"; 

import "./LoginForm.css";

const LoginForm = () => (
    <div className="login">
        <h2>Welcome</h2>
        <form name="login__form">
            <input placeholder="Email" type="text" />
            <input placeholder="Password" type="password" />
            <Button name="Log In" color="primary" />
        </form>
    </div>
)

export default LoginForm;