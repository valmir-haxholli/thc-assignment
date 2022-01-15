import Login from './containers/Login';
import { ReactComponent as Logo } from './assets/images/Logo.svg';

import './App.css';

function App() {
  return (
    <div className="container">
        <div className='content'>
          <div className='content__left'>
              <Logo className="content__logo" />
          </div>
          <div className='content__right'>
              <Login />
          </div>
        </div>
    </div>
  );
}

export default App;
