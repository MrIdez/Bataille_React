import { AnyAction, configureStore, createAction } from '@reduxjs/toolkit'

interface State {
	playing: boolean
	skip: boolean
	winner: null | string
	speed: number
}

const initialState: State = {
	playing: true,
	skip: false,
	winner: null,
	speed: 1,
}

const playPause = createAction('playPause')

const skip = createAction('skip')

export function changeSpeed(speed: number): AnyAction {
	return { type: 'changeSpeed', payload: { speed: speed } }
}

export function setWinner(winnerName: string): AnyAction {
	return { type: 'setWinner', payload: { winner: winnerName } }
}

function reducer(state: State = initialState, action: AnyAction) {
	if (action.type === 'playPause') {
		return {
			...state,
			playing: !state.playing,
		}
	} else if (action.type === 'skip') {
		return {
			...state,
			skip: true,
		}
	} else if (action.type === 'changeSpeed' && action.payload) {
		return {
			...state,
			speed: action.payload.speed,
		}
	} else if (action.type === 'setWinner' && action.payload) {
		return {
			...state,
			winner: action.payload.winner,
		}
	}
	return state
}
export const local_store = configureStore({ reducer: reducer })
