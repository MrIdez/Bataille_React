import React, { useState } from "react"
import Intro from "./Introduction"
import NavigationBar from "./navbar"
import StartMenu from "./StartMenu"
import { Route, Routes } from "react-router-dom"
import MenuJeu from "./MenuJeu"

function App() {
	return (
		<>
			<NavigationBar></NavigationBar>
			<Routes>
				<Route path="/" element={<PagePrincipale />} />
				<Route path="/about" element={<p>qsfqsf</p>} />
			</Routes>
		</>
	)
}

function PagePrincipale() {
	let [GameStarted, setGameStarted] = useState(false)
	let [nomJ1, SetNomJ1] = useState("")
	let [nomJ2, SetNomJ2] = useState("")
	function SetNomJ(n1: string, n2: string) {
		SetNomJ1(n1)
		SetNomJ2(n2)
	}
	function HandlClickSartGameBtn(name1: string, name2: string) {
		SetNomJ(name1, name2)
		setGameStarted(true)
	}
	return (
		<div id="app">
			{!GameStarted ? (
				<div id="gameNotStarted">
					<Intro />
					<StartMenu
						HandlClickSartGameBtnProps={HandlClickSartGameBtn}
					/>
				</div>
			) : (
				<MenuJeu Nomj1={nomJ1} Nomj2={nomJ2}></MenuJeu>
			)}
		</div>
	)
}

export default App
