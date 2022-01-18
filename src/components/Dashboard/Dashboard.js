import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';


import './Dashboard.css'

const Dashboard = () => {

  const [connections, setConnections] = useState();
  const [invitations, setInvitations] = useState();

  useEffect(async () => {
    const result = await axios.get(
      'https://thc-ui-api.thrivecoin.com/v1/users/recent_connections',
    );
    setConnections(result.data);
  },[]);

  useEffect(async () => {
    const result = await axios.get(
      'https://thc-ui-api.thrivecoin.com/v1/users/invitations',
    );
    setInvitations(result.data);
  },[]);

    return (
        (
            <div className='dashboard'>
                <Navbar />
                <div className='dashboard__content'>
                    <Sidebar />
                </div>
            </div>
        )
    )
}

export default Dashboard;