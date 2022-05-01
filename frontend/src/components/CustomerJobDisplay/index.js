import React from 'react';
import { 
    JobDisplayContainer,
    DisplayWrapper,
    DisplayH1
} from './ServicesElements'

const CustomerJobDisplay = ({ job }) => {
    const service = job.state ? job.request.service : job.service


    return(
        <JobDisplayContainer id='jobs'>
            <DisplayH1>Current Job</DisplayH1>
            <DisplayWrapper>
                <h1> { service.name } </h1>
                <h3> { service.description } </h3>
                <h3> { service.cost } </h3>
                { job.state ?
                    <>
                        <h1> Status: { job.state } </h1>
                        <h1> Assigned Mechanic </h1>
                        <h3> { job.mechanic.user.lname }, { job.mechanic.user.fname } </h3>
                        <h2> Contact Information </h2>
                        <h4> { job.mechanic.user.email } </h4>
                        <h4> { job.mechanic.user.phone_number } </h4>
                    </> :
                    <>
                        <h1> State: Provisioning </h1>
                        <h2> Waiting for Mechanic </h2>
                    </>
                }
            </DisplayWrapper>

        </JobDisplayContainer>
    
    )
}

export default CustomerJobDisplay;