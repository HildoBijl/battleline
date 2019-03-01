import './style.scss'

import React from 'react'
import { connect } from 'react-redux'

import Game from '../../containers/Game'

function Home() {
	return (
		<div className="home">
			<Game />
		</div>
	)
}

const stateMap = (state) => ({})
const actionMap = (dispatch) => ({})
export default connect(stateMap, actionMap)(Home)