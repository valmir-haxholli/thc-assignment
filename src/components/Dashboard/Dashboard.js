import axios from 'axios';
import { useState, useEffect } from 'react';

import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import { Tabs, Tab, Content  } from '../Tab/Tab';
import Button from '../Button/Button';


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
                          <div className='connections'>
                              <p>You have <span>{invitations?.data?.invitations.length} new connections</span></p>
                          </div>
                          <div className='connections__tab'>
                            {invitations?.data?.invitations.filter(invitation => invitation.invitation_type === 'received').map(invitation => (
                              <div  className='friends'>
                              <div className='friends__details'>
                              <img src={invitation?.image_url} alt="" />
                                <div className='friends__info'>
                                  <h3>{invitation?.name}</h3>
                                  <p>{invitation?.title}</p>
                                  <p>{invitation?.connections} connections</p>
                                </div>
                              </div>
                              <p className='friends__msg'>{invitation?.message}</p>
                              <div className='friends__btns'>
                                <Button color='primary' name='Accept' />
                                <Button color='secondary' name='Decline' />
                              </div>
                            </div>
                            ))}
                          </div>
                        </Content>
                        <Content active={active === 1}>
                          <div className='connections__tab'>
                            {invitations?.data?.invitations.filter(invitation => invitation.invitation_type === 'sent').map(invitation => (
                              <div  className='friends'>
                              <div className='friends__details'>

                              <img src={invitation?.image_url} alt="" />
                                <div className='friends__info'>
                                  <h3>{invitation?.name}</h3>
                                  <p>{invitation?.title}</p>
                                  <p>{invitation?.connections} connections</p>
                                </div>
                              </div>
                              <p className='friends__msg'>{invitation?.message}</p>
                            </div>
                            ))}
                          </div>
                        </Content>
                        </>
                    </div>
                </div> 
            </div>
        )
    )
}

export default Dashboard;