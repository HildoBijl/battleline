import './style.scss'

import React from 'react'
import { connect } from 'react-redux'

import Card from '../../components/Card'

function Home() {
	return (
		<div className="home">
			<Card number={1} suit={5} />
			<Card number={3} suit={5} />
			<Card />
			<Card number={9} suit={5} />
		</div>
	)
}

const stateMap = (state) => ({})
const actionMap = (dispatch) => ({})
export default connect(stateMap, actionMap)(Home)