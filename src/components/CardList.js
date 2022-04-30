import React from 'react'
import Card from './Card'
import './CardList.css'

function CardList({robot_list}) {
    const robotCards = robot_list.map(robot => <Card key={robot.id} {...robot} />)
  return (
    <div className='cardList'>
        { robotCards }
    </div>
  )
}

export default CardList