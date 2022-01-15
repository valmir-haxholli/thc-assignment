import Button from "../Button/Button"; 

import { ReactComponent as Mail } from '../../assets/images/mail.svg';
import { ReactComponent as Lock } from '../../assets/images/lock.svg';
import { ReactComponent as View } from '../../assets/images/view.svg';


import "./LoginForm.css";

const LoginForm = () => (
    <div className="login">
        <h2>Welcome</h2>
        <form name="login__form">
            <div className="login__input" >
                <Mail className="input__img" />
                <input placeholder="Email" type="text" />
            </div>
            <div className="login__input" >
                <Lock className="input__img" />
                <input placeholder="Password" type="password" />
                <View className="input__img img--lock" />
            </div>
            <p className="form__password">Forgot password?</p>
            <Button name="Log In" color="primary" />
            <p className="form__register">Have no account yet?</p>
            <Button name="Register" color="secondary" />
        </form>
    </div>
)

export default LoginForm;