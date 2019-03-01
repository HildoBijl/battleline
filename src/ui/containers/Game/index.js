import './style.scss'

import React from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'

import Card from '../../components/Card'

function Game({ cardLocations, flags }) {
	console.log(cardLocations)
	return (
		<div className="game">
			{getFlagCards(flags)}
			{getPlayingCards(cardLocations)}
		</div>
	)
}

function getFlagCards(flags) {
	return flags.map((flagClaim, index) => {
		return <Card key={index} type='flag' className={classnames(`flag${index}`, `flagClaim${flagClaim}`)} />
	})
}

function getPlayingCards(cardLocations) {
	let inHandCounter = 0 // This positions the cards in the hand.
	return cardLocations.map((suitLocations, suit) => {
		return suitLocations.map((card, number) => {
			switch (card.location) {
				case 'table':
					return <Card key={`${number}-${suit}`} number={number} suit={suit} className={classnames('onTable', `onTablePlayer${card.player}`, `onTableFlag${card.flag}`, `onTableOrder${card.order}`)} />
				case 'hand':
					if (card.player === 0) // The current player.
						return <Card key={`${number}-${suit}`} number={number} suit={suit} className={classnames('inHand', 'selectable', `inHand${inHandCounter++}`)} /> // ToDo: add a 'selected' class for when a card in the hand is selected.
					// Fall through: when the card is in the opponent's hand, make it appear as if it's in the stack. Otherwise the player could in theory read the opponent's cards.
				default: // When the card is in the stack.
					return <Card key={`${number}-${suit}`} number={number} suit={suit} type='back' className='inStack' />
			}
		})
	})
}

const stateMap = (state) => ({ ...state.game })
const actionMap = (dispatch) => ({})
export default connect(stateMap, actionMap)(Game)
