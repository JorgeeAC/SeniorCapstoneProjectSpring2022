import React from 'react'
import { 
    ServicesContainer,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH1,
    ServicesH2,
    ServicesP} from '../Services/ServicesElements'
import Icon1 from '../../images/img4.jpg'
import Icon2 from '../../images/img5.jpg'
import Icon3 from '../../images/img6.jpg'
import {animateScroll as scroll} from 'react-scroll' 
import {UserIcon} from 'react-icons/fa-user'

const CustomerPortalComponent = () => {
    const [scrollNav, setScrollNav] = useState(false)

  return (    
    <>
        <CustomerPortalContainer scrollNav = {scrollNav} >
            <H1> 'test ' </H1>
            <ServicesContainer>
                <ServicesWrapper>
                    <ServicesCard>
                    <ServicesIcon src = {Icon1} />
                    <ServicesH2> Oil Change </ServicesH2>
                    <ServicesP> Standard oil change right to your door. Your choice of oil and your worries go away.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src = {Icon2} />
                    <ServicesH2> State Inspection </ServicesH2>
                    <ServicesP> Finally a convenient solution for your state registration expirations!</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src = {Icon3} />
                    <ServicesH2> Fluid Check  </ServicesH2>
                    <ServicesP> Common maintenance that nobody wants to keep up with.  </ServicesP>
                </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </CustomerPortalContainer>

    </>
  )
}

export default CustomerPortalComponent
