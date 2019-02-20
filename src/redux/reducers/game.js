import settings from '../../settings'

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
		cardLocation: Array(settings.numColors).fill(0).map(_ => Array(settings.numNumbers).fill(0).map(_ => ({ location: 'stack' }))), // Set up a two-dimensional array which tells us where each card is.
		stone: Array(settings.numFlags).fill(0) // The status of the stones. 0 means unclaimed, 1 or 2 means claimed by the respective player.
	}
}

/*
 * Third, set up getter functions for various useful parameters.
 */
