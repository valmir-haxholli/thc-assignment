import { useHistory } from 'react-router-dom';

import './Navbar.css'

import Button from '../Button/Button';

import { ReactComponent as Logo } from '../../assets/images/miniLogo.svg';
import { ReactComponent as Users } from '../../assets/images/users.svg';
import { ReactComponent as Chat } from '../../assets/images/chat.svg';
import { ReactComponent as Search } from '../../assets/images/search.svg';

const Navbar = () => {

    const history = useHistory();

    const userLogout = (e) => {
        e.preventDefault();
        sessionStorage.removeItem('authentication_token');
        history.push('/');
    }

    return (
        <div className='navbar'>
            <div className='navbar__sections'>
                <Logo className='navbar__home' />
                <div className='navbar__logos'>
                    <div className='navbar__logo'>
                        <Users />
                        <p className='logo--active'>Network</p>
                    </div>
                    <div className='navbar__logo'>
                        <div className='notification'>
                            <span className='notification__content'></span>
                            <Chat />
                        </div>
                        <p>Chat</p>
                    </div>
                </div>
                <div className='navbar__search'>
                    <Search />
                    <input type="text"  placeholder='Search'/>
                </div>
            </div>
            <form className='btn--navbar' onSubmit={userLogout}>
                    <Button color='primary' name='Log Out' />
            </form>
        </div>
    )
}
    


export default Navbar;