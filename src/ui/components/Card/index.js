import './style.scss'

import React from 'react'
import classnames from 'classnames'

import Suit from '../Suit'

export default function Card({ number, suit }) {
  // Do we know which card?
  if (number === undefined || suit === undefined)
    return getCardBack()

  // Show the card.
  return (
    <div className={classnames('card', `number${number}`, `suit${suit}`)}>
      <div className="number n1">{number}</div>
      <div className="number n2">{number}</div>
      <Suit suit={suit} className="middle" />
      <Suit suit={suit} className="side side1" />
      <Suit suit={suit} className="side side2" />
    </div>
  )
}

function getCardBack() {
  return <div className="card back" />
}