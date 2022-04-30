import React from 'react'
import Icon1 from '../../images/img5.jpg'
import Icon2 from '../../images/img4.jpg'
import Icon3 from '../../images/img7.jpg'
import { 
    CustomerServicesContainer, 
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
  } from './CustomerServicesElements'

const CustomerServices = () => {
  return (
    <CustomerServicesContainer id = "services">
        <ServicesH1> Pick a Service </ServicesH1>
        <ServicesWrapper>
        <ServicesCard>
            <ServicesIcon src = {Icon1} />
            <ServicesH2> Standard Vehicle Maintenance </ServicesH2>
            <ServicesP> Some car needs are perfectly fine at home. From standard oil changes, refilling fluids and changing flat tires.   </ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src = {Icon2} />
            <ServicesH2> Vehicle Registration Inspections </ServicesH2>
            <ServicesP>Vehicle registrations no longer need to be a hassle.  </ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src = {Icon3} />
            <ServicesH2> Car Detailing Services </ServicesH2>
            <ServicesP> Get your car looking your best from the comfort of your home. Get connected with great car detailers! </ServicesP>
        </ServicesCard>
        </ServicesWrapper>
    </CustomerServicesContainer>
  )
}

export default CustomerServices