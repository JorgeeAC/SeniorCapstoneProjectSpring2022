import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import CurrentJobDisplay from './CurrentJobDisplay'
import UserAdapter from "../../adapters/UserAdapter";
import {
  PageContainer,
  Welcoming,
  ServicesContainer,
} from "./MechanicElements";

import ServicesAdapter from "../../adapters/ServicesAdapter";
import Requests from "./Requests";

const MechanicPageContent = ({ user }) => {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ mechanic, setMechanic ] = useState();
  const [ requests, setRequests ] = useState([])
  const [ currentJob, setCurrentJob ] = useState();
  const [ render, setRender ] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (!user.id) return;

    UserAdapter.getMechanicFromUserId(user.id)
    .then(resp => resp.json())
    .then(setMechanic)
    .catch(console.log);

    ServicesAdapter.getJobRequests()
    .then(resp => resp.json())
    .then(setRequests)
    .catch(console.log);

    ServicesAdapter.getCurrentJobMechanic()
    .then(resp => resp.json())
    .then(setCurrentJob)
    .catch(error => {
      console.log(error);
      setCurrentJob();
    });

  }, [user, render])

  const fetchInformation = () => setRender(!render);

  return (
    <>
      <Navbar toggle={toggle} />
      <PageContainer>
        <Welcoming>
          <h1>Welcome</h1>
          <h2>{ user.username }</h2>
        </Welcoming>
        <ServicesContainer>
          <h1 style={{color: "white"}}> { currentJob ? "Current Job" : "Active Job Requests" } </h1>
          <h1 style={{color: "white"}}> - </h1>
         { mechanic && currentJob ? <CurrentJobDisplay job={currentJob} fetch={fetchInformation} /> 
          : <Requests requests={requests} mechanic={mechanic} fetch={fetchInformation} /> }
        </ServicesContainer>
      </PageContainer>
    </>
  );
};

export default MechanicPageContent;
