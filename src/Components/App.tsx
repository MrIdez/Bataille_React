import React, { useState } from "react"
import Intro from "./Introduction"
import NavigationBar from "./navbar"
import StartMenu from "./StartMenu"

function App() {
	let [GameStarted, setGameStarted] = useState(false)
	let [Nomj1, Nomj2, SetNomJ] = [
		"",
		"",
		function (n1: string, n2: string) {
			Nomj1 = n1
			Nomj2 = n2
		},
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
				<></>
			)}
		</>
	)
}

export default App
