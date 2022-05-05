import React, { useEffect, useState } from 'react'
import UserAdapter from '../adapters/UserAdapter';
import CustomerDisplay from '../components/CustomerDisplay';
import CustomerNavbar from '../components/CustomerNavbar';
import Services from '../components/Services';
import CustomerJobDisplay from '../components/CustomerJobDisplay'; 
import { homeObjOne } from '../components/CustomerDisplay/Data';
import Footer from '../components/Footer';
import ServicesAdapter from '../adapters/ServicesAdapter';


const CustomerPortal = () => {
  const [ user, setUser ] = useState({});
  const [ currentJob, setCurrentJob ] = useState();
  const [ render, setRender ] = useState(false);

  useEffect(() => {
    UserAdapter.getLoggedInUser()
    .then(resp => resp.json())
    .then(resp => {  
      setUser(resp)
      ServicesAdapter.getCurrentJob()
      .then(resp => resp.json())
      .then(setCurrentJob)
      .catch((error) => {
        setCurrentJob();
        console.log(error);
      }) 
    })
    .catch(console.log)
  }, [render])


  return (
    <div>
        <CustomerNavbar />
        <CustomerDisplay />
        { currentJob ? <CustomerJobDisplay job={currentJob} />: <Services render={setRender} /> }
        <CustomerDisplay {...homeObjOne} render={setRender} />
        <h1> { 'Hello ! ' + user.fname+ ' ' + user.lname } </h1>
        <h2> { user.username } </h2>
        <h3> { user.address } </h3>
        <h4> { user.DOB } </h4>
        <h5> { user.email } </h5>
        <h6> { user.phone_number } </h6>

        <Footer />

    </div>
  )
}

export default CustomerPortal