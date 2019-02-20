import './style.css'

import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Link from 'redux-first-router-link'

class Home extends Component {
	render() {
		return (
			<div className="home">Home!</div>
		)
	}
}

const stateMap = (state) => ({})
const actionMap = (dispatch) => ({})
export default connect(stateMap, actionMap)(Home)