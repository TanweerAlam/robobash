import React from 'react'
import './Card.css'

function Card({ name, email, username }) {
  return (
    <div className='card'>
        <h3>{name}</h3>
        <p>{email}</p>
        <p>{username}</p>
    </div>
  )
}

export default Card