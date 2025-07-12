import React from 'react'
import {useContext} from 'react';
import {UserContext} from '../App'
const ChildC = () => {
  const user = useContext(UserContext);
  return (
    <div>
      {user.name} is {user.age} years old
    </div>
  )
}

export default ChildC
