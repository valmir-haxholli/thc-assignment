import './Sidebar.css';

import { ReactComponent as Archive } from '../../assets/images/archive.svg';
import { ReactComponent as Disc } from '../../assets/images/disc.svg';
import { ReactComponent as Hash } from '../../assets/images/hash.svg';
import { ReactComponent as Layers } from '../../assets/images/layers.svg';
import { ReactComponent as User } from '../../assets/images/user.svg';
import { ReactComponent as Link } from '../../assets/images/link.svg';


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className='sidebar__item'>
                <Link />
                <p>Connections</p>
            </div>
            <div className='sidebar__item sidebar--active'>
                <Disc />
                <p>Invitations</p>
            </div>
            <div className='sidebar__item'>
                <Archive />
                <p>Teammates</p>
            </div>
            <div className='sidebar__item'>
                <User />
                <p>Groups</p>
            </div>
            <div className='sidebar__item'>
                <Layers />
                <p>Pages</p>
            </div>
            <div className='sidebar__item'>
                <Hash />
                <p>Hashtags</p>
            </div>
        </div>
    )
}

export default Sidebar;