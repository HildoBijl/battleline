import settings from '../../settings'

/*
 * First, set up the actions changing things.
 */

// ToDo: sort this out.
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
  const defaultState = {
		cardLocations: Array(settings.numColors).fill(0).map(_ => Array(settings.numNumbers).fill(0).map(_ => ({ location: 'stack' }))), // Set up a two-dimensional array which tells us where each card is.
		flags: Array(settings.numFlags).fill(0) // The status of the flags. 0 means unclaimed, 1 or 2 means claimed by the respective player.
  }
  defaultState.flags[4] = 1
  defaultState.flags[2] = 2
  // defaultState.flags[6] = 2
  defaultState.flags[7] = 2

  defaultState.cardLocations[0][0] = { location: 'hand', player: 0}
  defaultState.cardLocations[5][8] = { location: 'hand', player: 0}
  defaultState.cardLocations[5][1] = { location: 'hand', player: 0}
  defaultState.cardLocations[5][3] = { location: 'hand', player: 0}
  defaultState.cardLocations[5][4] = { location: 'hand', player: 0}
  defaultState.cardLocations[5][6] = { location: 'hand', player: 0}
  defaultState.cardLocations[4][6] = { location: 'hand', player: 1}
  defaultState.cardLocations[2][2] = { location: 'hand', player: 1}
  defaultState.cardLocations[1][2] = { location: 'table', player: 0, flag: 2, order: 0}
  defaultState.cardLocations[1][3] = { location: 'table', player: 0, flag: 2, order: 2}
  defaultState.cardLocations[1][4] = { location: 'table', player: 0, flag: 2, order: 1}
  defaultState.cardLocations[4][3] = { location: 'table', player: 1, flag: 4, order: 0}
  defaultState.cardLocations[4][5] = { location: 'table', player: 1, flag: 4, order: 2}
  defaultState.cardLocations[4][7] = { location: 'table', player: 1, flag: 4, order: 1}
  defaultState.cardLocations[4][2] = { location: 'table', player: 0, flag: 6, order: 2}
  defaultState.cardLocations[5][2] = { location: 'table', player: 0, flag: 6, order: 0}
  defaultState.cardLocations[2][2] = { location: 'table', player: 0, flag: 6, order: 1}

  return defaultState
  // ToDo: set back.
	// return {
	// 	cardLocations: Array(settings.numColors).fill(0).map(_ => Array(settings.numNumbers).fill(0).map(_ => ({ location: 'stack' }))), // Set up a two-dimensional array which tells us where each card is.
	// 	flags: Array(settings.numFlags).fill(0) // The status of the flags. 0 means unclaimed, 1 or 2 means claimed by the respective player.
	// }
}

/*
 * Third, set up getter functions for various useful parameters.
 */
