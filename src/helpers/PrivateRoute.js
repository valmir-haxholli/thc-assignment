import { Redirect, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loginSuccess } from '../redux/loginSlice';

import Dashboard from '../components/Dashboard/Dashboard';

export const PrivateRoute = ({ children, ...rest }) => {

  const dispatch = useDispatch();
  
  const { isAuth } = useSelector((state) => state.login);
  
  useEffect(() => {
    sessionStorage.getItem('authentication_token') && dispatch(loginSuccess())
  }, [dispatch]);

  return (
    <Route
    {...rest}
    render = {() => 
      isAuth ? <Route exact path="/dashboard" component={Dashboard} /> : <Redirect to='/' />
    }
  />
  )
}
  
