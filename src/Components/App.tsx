import React, { useState } from "react"
import { Container } from "react-bootstrap"
import PaquetComp from "./Paquet"
import Intro from "./Introduction"
import NavigationBar from "./navbar"
import StartMenu from "./StartMenu"
import { JeuDeCarte32C } from "../Class"
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
	const JdC = new JeuDeCarte32C()
	return (
		<>
			{!GameStarted ? (
				<>
					<Intro></Intro>
					<StartMenu
						setGame={setGameStarted}
						setNom={SetNomJ}
					></StartMenu>
				</>
			) : (
				<MenuJeu Nomj1={nomJ1} Nomj2={nomJ2}></MenuJeu>
			)}
		</>
	)
}

export default App
