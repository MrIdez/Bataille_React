import React, { useState } from "react"

import Carte from "./Carte"
import Intro from "./Introduction"
import NavigationBar from "./navbar"
import StartMenu from "./StartMenu"

function App() {
	let [GameStarted, setGameStarted] = useState(false)
	let [Nomj1, Nomj2, SetNomJ] = [
		"",
		"",
		[
			function (n1: string) {
				Nomj1 = n1
			},
			function (n2: string) {
				console.log(Nomj2)
				Nomj2 = n2
			},
		],
	]
	return (
		<>
			<NavigationBar></NavigationBar>
			{!GameStarted ? (
				<>
					<Intro></Intro>
					<StartMenu
						setGame={setGameStarted}
						setNom={SetNomJ}
					></StartMenu>
				</>
			) : (
				<>
					<Carte></Carte>
				</>
			)}
		</>
	)
}

export default App
