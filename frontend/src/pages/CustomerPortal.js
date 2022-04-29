import React, { useEffect, useState } from 'react'
import UserAdapter from '../adapters/UserAdapter';


const CustomerPortal = () => {
  const id = localStorage.getItem('user_id');
  const [ user, setUser ] = useState({});

  useEffect(() => {
    UserAdapter.getUser(id)
    .then(resp => resp.json())
    .then(resp => {  console.log(resp);setUser(resp) })
    .catch(console.log)
  }, [id])

  return (
    <div>
        <h1> { user.fname+ ' ' + user.lname } </h1>
        <h2> { user.username } </h2>
        <h3> { user.address } </h3>
        <h4> { user.DOB } </h4>
        <h5> { user.email } </h5>
        <h6> { user.phone_number } </h6>
    </div>
  )
}

export default CustomerPortal