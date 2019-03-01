import './style.scss'

import React from 'react'
import classnames from 'classnames'

import { Suit, Flag } from '../Symbols'

export default function Card({ number, suit, type = 'normal', className }) {
  // Do we know which card?
  if (type === 'back')
    return getCardBack(className)

  if (type === 'flag')
    return getFlag(className)

  // Show the card.
  return (
    <div className={classnames('card', `number${number}`, `suit${suit}`, className)}>
      <div className="number n1">{number + 1}</div>
      <div className="number n2">{number + 1}</div>
      <Suit suit={suit} className="middle" />
      <Suit suit={suit} className="side side1" />
      <Suit suit={suit} className="side side2" />
    </div>
  )
}

function getCardBack(className) {
  return <div className={classnames('card', `back`, className)} />
}

function getFlag(className) {
  return <div className={classnames('card', `flag`, className)}><Flag /></div>
}