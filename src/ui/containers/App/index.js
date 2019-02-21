import '../../reset.scss'
import '../../index.scss'
import './style.scss'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import pages from '../../pages'
// import classnames from 'classnames'

// import userActions from '../../../redux/user.js'
// import statusActions from '../../../redux/status.js'

// import Header from '../Header/Header.js'
// import Page from '../Page/Page.js'

class App extends Component {
  render() {
		console.log(this.props.page)
		const p = pages[this.props.page]
		console.log(p)

		return <p.component />
		// ToDo: reinstate.
    // return (
    //   <div className={classnames('app', this.props.theme)}>
    //     <Header />
    //     <Page />
    //   </div>
    // )
  }
}

const stateMap = (state) => ({
	page: state.location.type,
})
const actionMap = (dispatch) => ({
  // processAuthStateChange: () => dispatch(userActions.processAuthStateChange()),
  // processRedirectSuccess: (result) => dispatch(userActions.processRedirectSuccess(result)),
  // processRedirectError: (error) => dispatch(userActions.processRedirectError(error)),
  // setOnlineStatus: (online) => dispatch(statusActions.setOnlineStatus(online)),
})
export default connect(stateMap, actionMap)(App)