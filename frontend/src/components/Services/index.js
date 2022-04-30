import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import { 
    ServicesContainer, 
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
  } from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id = "services">
        <ServicesH1> Our Services</ServicesH1>
        <ServicesWrapper>
        <ServicesCard>
            <ServicesIcon src = {Icon1} />
            <ServicesH2> Standard Vehicle Maintenance </ServicesH2>
            <ServicesP> Help you anywhere you</ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src = {Icon2} />
            <ServicesH2> Vehicle Registration Inspections </ServicesH2>
            <ServicesP> Help you anywhere you</ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src = {Icon3} />
            <ServicesH2> Car Detailing Maintenance </ServicesH2>
            <ServicesP> Help you anywhere you</ServicesP>
        </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services