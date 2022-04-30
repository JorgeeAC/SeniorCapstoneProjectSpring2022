import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import {
  PageContainer,
  Welcoming,
  ServicesContainer,
} from "./MechanicElements";
import {
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH1,
  ServicesH2,
  ServicesP,
} from "../components/Services/ServicesElements";
// import Footer from "./components/Footer";

const MechanicPageContent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Navbar toggle={toggle} />
      <PageContainer>
        <Welcoming>
          <h1>Welcome</h1>
          <h2>Mechanic</h2>
        </Welcoming>
        <ServicesContainer>
          <ServicesWrapper>
            <ServicesCard>
              <ServicesH2>This is a title example</ServicesH2>
              <ServicesP>
                Description for the service provided for the mechanic
              </ServicesP>
            </ServicesCard>
            <ServicesCard>
              <ServicesH2>This is a title example</ServicesH2>
              <ServicesP>
                Description for the service provided for the mechanic
              </ServicesP>
            </ServicesCard>
            <ServicesCard>
              <ServicesH2>This is a title example</ServicesH2>
              <ServicesP>
                Description for the service provided for the mechanic
              </ServicesP>
            </ServicesCard>
          </ServicesWrapper>
        </ServicesContainer>
      </PageContainer>
    </Router>
  );
};

export default MechanicPageContent;
