import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

import './Dashboard.css'

const Dashboard = () => (
    <div className='dashboard'>
        <Navbar />
        <div className='dashboard__content'>
            <Sidebar />
        </div>
    </div>
)

export default Dashboard;