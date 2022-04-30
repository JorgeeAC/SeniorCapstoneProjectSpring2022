import React, { useEffect, useState } from 'react'
import UserAdapter from '../adapters/UserAdapter';
import CustomerDisplay from '../components/CustomerDisplay';
import CustomerNavbar from '../components/CustomerNavbar';
import CustomerServices from '../components/CustomerServices';



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
        <CustomerServices />
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