import React from 'react'
import Intro from './Introduction'
import StartMenu from './StartMenu'
import { Route, Routes } from 'react-router-dom'
import PageJeu from './PageJeu'

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<PagePrincipale />} />
				<Route path="/about" element={<p>about</p>} />
				<Route
					path="/game/:NomJoueur1/:NomJoueur2"
					element={<PageJeu />}
				/>
			</Routes>
		</>
	)
}

function PagePrincipale() {
	return (
		<div id="app">
			<Intro />
			<StartMenu />
		</div>
	)
}

export default App
