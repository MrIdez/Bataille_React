import React from "react"

//import Carte from './Carte';
import Intro from "./Introduction"
import NavigationBar from "./navbar"
import StartMenu from "./StartMenu"

function App() {
	return (
		<div>
			<NavigationBar></NavigationBar>
			<Intro></Intro>
			<StartMenu></StartMenu>
		</div>
	)
}

export default App
