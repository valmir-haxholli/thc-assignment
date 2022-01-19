import axios from 'axios';
import { useState, useEffect } from 'react';

import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import { Tabs, Tab, Content  } from '../Tab/Tab';


import './Dashboard.css'

const Dashboard = () => {

  const [connections, setConnections] = useState();
  const [invitations, setInvitations] = useState();

  const [active, setActive] = useState(0);
  const handleClick = e => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };

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
                    <div className='main'>
                        <Tabs className='main__tab'>
                            <Tab onClick={handleClick} active={active === 0} id={0}>
                            Received
                            </Tab>
                            <Tab onClick={handleClick} active={active === 1} id={1}>
                            Sent
                            </Tab>
                        </Tabs>
                        <>
                            <Content active={active === 0}>
                            <h1>Content 1</h1>
                            </Content>
                            <Content active={active === 1}>
                            <h1>Content 2</h1>
                            </Content>
                        </>
                    </div>
                </div> 
            </div>
        )
    )
}

export default Dashboard;