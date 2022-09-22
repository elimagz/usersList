import React from 'react'

export default function User(props) {
    const removeUserHandler = (event) => {
        console.log(props);
        props.removeUser(props.id);
    }
  return (
    <div>
        <div onClick={removeUserHandler}>{`${props.name} (${props.age} years old)`}</div>
    </div>
  )
}
