import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";

import { loginFail, loginPending, loginSuccess } from "../../redux/loginSlice";
import { userLogin, handleTokenRefresh } from "../../api/userApi";

import Button from "../Button/Button"; 

import { ReactComponent as Logo } from '../../assets/images/Logo.svg';

import { ReactComponent as Mail } from '../../assets/images/mail.svg';
import { ReactComponent as Lock } from '../../assets/images/lock.svg';
import { ReactComponent as View } from '../../assets/images/view.svg';
import { ReactComponent as Spinner } from '../../assets/images/spinner.svg';

import "./LoginForm.css";

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const { isLoading, isAuth, error } = useSelector(state => state.login)

    useEffect(() => {
        sessionStorage.getItem('authentication_token') &&
        history.push('/dashboard')
    }, [history])

    const dispatch = useDispatch();

    const handleSubmit = async(e) => {
        e.preventDefault();

        if(!email || !password) {
            return alert("Fill up all the form");
        }

        dispatch(loginPending());

        try {
            const isAuth = await userLogin({email, password});
            if(isAuth.state === 'error') {
                return dispatch(loginFail(isAuth.message));
            }
            dispatch(loginSuccess())
            handleTokenRefresh();
            history.push('/dashboard');
        } catch (error) {
            dispatch(loginFail(error.message))
            alert("Authentification not working, try with different user")
        }
        
    }

    return (
        <div className='content'>
          <div className='content__left'>
              <Logo className="content__logo" />
          </div>
          <div className='content__right'>
            <div className="login">
                <h2>Welcome</h2>
                <form className="login__form" onSubmit={handleSubmit}>
                    <div className="login__input" >
                        <Mail className="input__img" />
                        <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="login__input" >
                        <Lock className="input__img" />
                        <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                        <View className="input__img img--lock" />
                    </div>
                    <p className="form__password">Forgot password?</p>
                    <Button name="Log In" color="primary" />
                    <p className="form__register">Have no account yet?</p>
                    <Button name="Register" color="secondary" />
                    {isLoading ? <div className="login__spinner"><h3>Logging In</h3><Spinner /></div> : ''}
                </form>
            </div>
          </div>
        </div>
        
    )
} 


export default LoginForm;