import { combineReducers, createStore, applyMiddleware } from 'redux'
import { connectRoutes } from 'redux-first-router'
import { composeWithDevTools } from 'redux-devtools-extension'
import reduxThunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'

import { routes } from '../ui/pages'
import reducers from './reducers'

// Set up the Redux store in the default way.
const { reducer, middleware, enhancer } = connectRoutes(routes, { createHistory })

const rootReducer = combineReducers({ ...reducers, location: reducer })
const middlewares = applyMiddleware(middleware, reduxThunk)
const enhancers = composeWithDevTools(enhancer, middlewares)

const store = createStore(rootReducer, {}, enhancers)

export default store
