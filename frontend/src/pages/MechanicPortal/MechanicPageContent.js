import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import UserAdapter from "../../adapters/UserAdapter";
import {
  PageContainer,
  Welcoming,
  ServicesContainer,
} from "./MechanicElements";

import ServicesAdapter from "../../adapters/ServicesAdapter";
import Requests from "./Requests";

const MechanicPageContent = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [ mechanic, setMechanic ] = useState();
  const [ requests, setRequests ] = useState([])

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    UserAdapter.getMechanicFromUserId(user.id)
    .then(resp=>resp.json())
    .then(setMechanic)
    .catch(console.log);
  
    ServicesAdapter.getJobRequests()
    .then(resp=>resp.json())
    .then(setRequests)
    .catch(console.log)
  }, [user])

  return (
    <>
      <Navbar toggle={toggle} />
      <PageContainer>
        <Welcoming>
          <h1>Welcome</h1>
          <h2>{ user.username }</h2>
        </Welcoming>
        <ServicesContainer>
         { mechanic && <Requests requests={requests} mechanic={mechanic} /> }
        </ServicesContainer>
      </PageContainer>
    </>
  );
};

export default MechanicPageContent;
