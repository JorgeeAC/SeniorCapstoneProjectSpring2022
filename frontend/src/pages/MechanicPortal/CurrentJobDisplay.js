import React from 'react';
import ServicesAdapter from '../../adapters/ServicesAdapter.js';
import { 
    JobDisplayContainer,
    DisplayWrapper,
} from '../../components/CustomerJobDisplay/ServicesElements.js'
import { Button } from '../../components/Services/ModalElements.js';

const CurrentJobDisplay = ({ job, fetch }) => {
    const { fname, lname, address, email, phone_number } = job.request.user;
    const { name, cost, description } = job.request.service;

    const completeJob = () => {
        ServicesAdapter.completeCurrentJob(job.id)
        .then(fetch)
        .catch(console.log)
    }
    
    return(
        <JobDisplayContainer>
            <DisplayWrapper>
                <h1> Customer Information </h1>
                <h3> - </h3>
                <h3> { lname }, { fname }  </h3>
                <h3> { email } </h3>
                <h3> { address } </h3>
                <h3> { phone_number } </h3>
                <h3> - </h3>
                <h1> Service Information </h1>
                <h3> - </h3>
                <h2> { name } </h2>
                <h3> ${ cost } </h3>
                <h3> { description } </h3>
                <h3> - </h3>
                <Button onClick={completeJob}> Finish Job </Button>
            </DisplayWrapper>
        </JobDisplayContainer>
    
    )
}

export default CurrentJobDisplay;