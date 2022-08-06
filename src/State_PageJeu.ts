import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'

export type stateJoueur = {
	joueurPaquet: Array<string>
	playingCard: string
}

export interface State {
	playing: boolean
	skip: boolean
	winner: string
	speed: number
	nbcoups: number
	joueur1: stateJoueur
	joueur2: stateJoueur
}

const initialState: State = {
	playing: false,
	skip: false,
	winner: '',
	speed: 1,
	nbcoups: 0,
	joueur1: { joueurPaquet: [], playingCard: '' },
	joueur2: { joueurPaquet: [], playingCard: '' },
}

const stateSlice = createSlice({
	name: 'stateSlice',
	initialState: initialState,
	reducers: {
		resetSate: (state) => {
			state = initialState
		},
		togglePlayPause: (state) => {
			state.playing = !state.playing
		},
		play: (state) => {
			state.playing = true
		},
		skip: (state) => {
			state.skip = true
		},
		unSkip: (state) => {
			state.skip = false
		},
		changeSpeed: (state, action: PayloadAction<number>) => {
			state.speed = action.payload
		},
		setWinner: (state, action: PayloadAction<string>) => {
			state.winner = action.payload
		},
		incrementCoups: (state, action: PayloadAction<number>) => {
			state.nbcoups += action.payload
		},
		updateJoueur: (state, action: PayloadAction<stateJoueur[]>) => {
			state.joueur1 = action.payload[0]
			state.joueur2 = action.payload[1]
		},
	},
})

export const actions = stateSlice.actions
const State_store = configureStore({ reducer: stateSlice.reducer })
export default State_store
