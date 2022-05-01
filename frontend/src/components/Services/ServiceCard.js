import React, { useState } from 'react'
import { 
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
  } from './ServicesElements'
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
  } from './ModalElements'
import ServicesAdapter from '../../adapters/ServicesAdapter';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ service, icon, user }) => {

    const [active, setActive] = useState(false);

    return(
        <>
           <ServiceModal active={active} service={service} user={user} hideModal={() => setActive(false)} />
            <ServicesCard onClick={() => setActive(true)}>
                <ServicesIcon src = {icon} />
                <ServicesH2> { service.name } </ServicesH2>
                <ServicesP> { service.description }  </ServicesP>
            </ServicesCard>
        </>
    )
}

export default ServiceCard;


const ServiceModal = ({ service, active, hideModal, user }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        ServicesAdapter.createJobRequest({ service_id: service.service_id, user_id: user.id })
        .then(() => { 
            
            hideModal();
            navigate('/profile')
        
        })
        .catch(console.log)
    }

    return (
        <>
        {active && (
        <ModalBlock>
            <ModalOverlay onClick={() => hideModal()}></ModalOverlay>
            <ModalContainer>
                <ModalHeader>
                <ModalTitle>{service.name}</ModalTitle>
                <ModalClose onClick={() => hideModal()}>X</ModalClose>
                </ModalHeader>
                <ModalBody>
                    <h4>Price: ${ service.cost }</h4>
                    { service.description }
                </ModalBody>
                <ModalFooter> 
                    { user && <Button onClick={handleClick}> Choose Service </Button>}
                </ModalFooter>
            </ModalContainer>
        </ModalBlock>
        )}
        </>
    )
}