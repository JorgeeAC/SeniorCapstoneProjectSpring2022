import React, { useEffect, useState } from 'react'
import Icon1 from '../../images/img5.jpg'
import Icon2 from '../../images/img4.jpg'
import Icon3 from '../../images/img7.jpg'
import Icon4 from '../../images/svg-1.svg'
import Icon5 from '../../images/svg-2.svg'
import Icon6 from '../../images/svg-3.svg'

import ServicesAdapter from '../../adapters/ServicesAdapter'
import UserAdapter from '../../adapters/UserAdapter'

import ServiceCard from './ServiceCard';

import { 
    ServicesContainer, 
    ServicesH1,
    ServicesWrapper,
  } from './ServicesElements'

const Services = () => {

  const [ icons, setIcons ] = useState([Icon4, Icon5, Icon6]);
  const [ services, setServices ] = useState([]);
  const [ user, setUser ] = useState()

  useEffect(() => {

    UserAdapter.getLoggedInUser()
    .then(resp => resp.json())
    .then(resp => {
      if (resp.username){
        setUser(resp);
        setIcons([Icon1, Icon2, Icon3]);
      }
    })
    .catch(console.error)

    ServicesAdapter.getServices()
    .then(resp => resp.json())
    .then(setServices)
    .catch(console.error)

  }, [])

  const getRandomIcon = () => {
    return icons[Math.floor(Math.random() * icons.length)];
  }

  return (
    <ServicesContainer id = "services">
        <ServicesH1> Our Services</ServicesH1>
        <ServicesWrapper>
          { services.length > 0 && services.map(service => <ServiceCard
            key={service.service_id}
            service={service} 
            icon={getRandomIcon()} 
            user={user}
          />)}
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services