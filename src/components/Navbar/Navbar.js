import './Navbar.css'

import Button from '../Button/Button';

import { ReactComponent as Logo } from '../../assets/images/miniLogo.svg';
import { ReactComponent as Users } from '../../assets/images/users.svg';
import { ReactComponent as Chat } from '../../assets/images/chat.svg';
import { ReactComponent as Search } from '../../assets/images/search.svg';

const Navbar = () => (
    <div className='navbar'>
        <div className='navbar__sections'>
            <Logo className='navbar__home' />
            <div className='navbar__logos'>
                <div className='navbar__logo'>
                    <Users />
                    <p>Network</p>
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
        <div className='btn--navbar'>
                <Button name="Log Out" color="primary" />
        </div>
    </div>
)

export default Navbar;