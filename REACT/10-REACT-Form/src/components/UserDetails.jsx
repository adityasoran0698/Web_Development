import React from 'react'

const UserDetails = ({data}) => {
  return (
    <div>
        <h1>First Name: {data.fname}</h1>
        <h1>Middle Name: {data.mname}</h1>
        <h1>Last Name: {data.lname}</h1>
        <h1>Password: {data.pname}</h1>
    </div>
  )
}

export default UserDetails