import React, { useContext, useState } from "react"
import { Button, Container, CloseButton } from "react-bootstrap"
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider"

interface PropsSM {
	settersArrayProps: (
		| React.Dispatch<React.SetStateAction<boolean>>
		| ((n1: string, n2: string) => void)
	)[]
}

type setNom = (n1: string, n2: string) => void
type setGame = React.Dispatch<React.SetStateAction<boolean>>

export default function StartMenu({ settersArrayProps }: PropsSM) {
	let [start, setStart] = useState(false)
	return start ? (
		<div id="InputNomComponent">
			<div className="text-center">
				<CloseButton onClick={() => setStart(false)}></CloseButton>
			</div>
			<br></br>
			<OnlyInputComponent
				settersArrayProps={settersArrayProps}
			></OnlyInputComponent>
		</div>
	) : (
		<div className="text-center" id="StartBtn">
			<Button variant="outline-dark" onClick={() => setStart(true)}>
				Commencez !
			</Button>
		</div>
	)
}

function OnlyInputComponent({ settersArrayProps }: PropsSM) {
	let [IsFullJ, setIsFullJ] = useState(false)
	let Input1 = React.createRef<HTMLInputElement>()
	let Input2 = React.createRef<HTMLInputElement>()
	const setNom = settersArrayProps[0] as setNom
	const setGame = settersArrayProps[1] as setGame
	function RenvoieNom() {
		if (Input1.current && Input2.current) {
			setNom(Input1.current.value, Input2.current.value)
		}
	}

	function isInputFull() {
		if (Input1.current && Input2.current) {
			return Input1.current.value != "" && Input2.current.value != ""
		} else {
			return false
		}
	}
	function checkInputValue() {
		isInputFull() ? setIsFullJ(true) : setIsFullJ(false)
	}
	return (
		<Container>
			<div className="input-group">
				<Button variant="outline-dark">Nom aléatoire</Button>
				<input
					onChange={() => {
						checkInputValue()
					}}
					ref={Input1}
					placeholder="Entre ton nom j1"
					type="text"
					aria-label="First Player name"
					className="form-control"
				/>
				<input
					onChange={() => {
						checkInputValue()
					}}
					ref={Input2}
					placeholder="Entre ton nom j2"
					type="text"
					aria-label="Second Player name"
					className="form-control"
				/>
				<Button variant="outline-dark">Nom aléatoire</Button>
			</div>
			{IsFullJ && (
				<div className="text-center">
					<br></br>
					<Button
						variant="outline-dark"
						size="lg"
						onClick={() => {
							RenvoieNom()
							setGame(true)
						}}
					>
						C'est parti
					</Button>
					<br></br>
				</div>
			)}
		</Container>
	)
}
