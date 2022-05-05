import React, { useState } from 'react'
import { 
    ServicesCard,
    ServicesH2,
    ServicesP
  } from './../../components/Services/ServicesElements'
  import {
    ModalBlock,
    ModalBody,
    ModalClose,
    ModalContainer,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    ModalTitle,
    Button
  } from '../../components/Services/ModalElements'

import ServicesAdapter from '../../adapters/ServicesAdapter';
import { useNavigate } from 'react-router-dom';

const RequestCard = ({ request, mechanic, fetch }) => {

    const [active, setActive] = useState(false);

    return(
        <>
           <RequestModal active={active} request={request} mechanic={mechanic} fetch={fetch} hideModal={() => setActive(false)} />
            <ServicesCard onClick={() => setActive(true)}>
                <ServicesH2> { request.service.name } </ServicesH2>
                <ServicesP> { request.service.description }  </ServicesP>
                <ServicesP> ${ request.service.cost }  </ServicesP>
            </ServicesCard>
        </>
    )
}

export default RequestCard;


const RequestModal = ({ request, active, hideModal, mechanic, fetch }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        ServicesAdapter.claimJobRequest({ 
            request_id: request.id,
            mechanic_id: mechanic.mechanic_id
         })
        .then(() => { 
            hideModal();
            fetch();
         })
        .catch(console.log)
    }

    const user = request.user
    return (
        <>
        {active && (
        <ModalBlock>
            <ModalOverlay onClick={() => hideModal()}></ModalOverlay>
            <ModalContainer>
                <ModalHeader>
                <ModalTitle>{request.service.name}</ModalTitle>
                <ModalClose onClick={() => hideModal()}>X</ModalClose>
                </ModalHeader>
                <ModalBody>
                    <h3>{ request.service.description }</h3>
                    <h4>Price: ${ request.service.cost }</h4>
                    <h3> - </h3>
                    <h3>User Information</h3>
                    <h3>-----------------------</h3>
                    <h4> { user.email } </h4>
                    <h4> { user.address } </h4>
                    <h4> { user.phone_number } </h4>
                </ModalBody>
                <ModalFooter> 
                    { mechanic && <Button onClick={handleClick}> Choose Request </Button>}
                </ModalFooter>
            </ModalContainer>
        </ModalBlock>
        )}
        </>
    )
}