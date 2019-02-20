/// TODO: REMOVE THIS FILE
// import settings from '../../settings'

/*
 * First, set up the actions changing things.
 */

const actions = {
  setOnlineStatus: (online) => ({
		type: 'SetOnline',
		online
	}),
}
export default actions

/*
 * Second, set up the reducer applying the actions to the state.
 */

export function reducer(state = getDefaultState(), action) {
  switch (action.type) {
		
    // case 'SetOnline': {
		// 	if (typeof(action.online) !== 'boolean')
		// 		throw new Error(`Invalid type of "online" parameter. It must be boolean and is ${typeof(action.online)}.`)

    //   return {
    //     ...status,
    //     online: action.online,
    //   }
    // }

    default: {
      return state
    }
  }
}

function getDefaultState() {
	return {
		temp: 1
	}
}

/*
 * Third, set up getter functions for various useful parameters.
 */
