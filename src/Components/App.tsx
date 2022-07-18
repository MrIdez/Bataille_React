import React from "react"
import Intro from "./Introduction"
import StartMenu from "./StartMenu"
import {Route, Routes, useNavigate } from "react-router-dom"
import PageJeu from "./PageJeu"


function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<PagePrincipale />} />
				<Route path="/about" element={<p>about</p>} />
				<Route path='/game/:NomJoueur1/:NomJoueur2' element={<PageJeu/>}/>
			</Routes>
		</>
	)
}

function PagePrincipale() {
	const navigateToGame = useNavigate()
	function HandlClickSartGameBtn(name1: string, name2: string) {
		navigateToGame(`/game/${name1}/${name2}`)
	}
	return (
		<div id="app">
				<div id="gameNotStarted">
					<Intro />
					<StartMenu
						HandlClickStartGame={HandlClickSartGameBtn}
					/>
				</div>
		</div>
	)
}

export default App
