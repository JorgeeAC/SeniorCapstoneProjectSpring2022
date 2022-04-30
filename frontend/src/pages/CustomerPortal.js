import React, { useEffect, useState } from 'react'
import UserAdapter from '../adapters/UserAdapter';
import CustomerDisplay from '../components/CustomerDisplay';
import CustomerNavbar from '../components/CustomerNavbar';
import Services from '../components/Services';



const CustomerPortal = () => {
  const [ user, setUser ] = useState({});

  useEffect(() => {
    UserAdapter.getLoggedInUser()
    .then(resp => resp.json())
    .then(resp => {  console.log(resp); setUser(resp) })
    .catch(console.log)
  }, [])

  return (
    <div>
        <CustomerNavbar />
        <CustomerDisplay />
        <Services />
        <h1> { 'Hello ! ' + user.fname+ ' ' + user.lname } </h1>
        <h2> { user.username } </h2>
        <h3> { user.address } </h3>
        <h4> { user.DOB } </h4>
        <h5> { user.email } </h5>
        <h6> { user.phone_number } </h6>

    </div>
  )
}

export default CustomerPortal