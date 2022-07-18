import React, { useContext, useState } from "react"
import { Button, Container, CloseButton } from "react-bootstrap"
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider"

interface PropsSM {
	HandlClickSartGameBtnProps: (name1: string, name2: string) => void
}

export default function StartMenu({ HandlClickSartGameBtnProps }: PropsSM) {
	let [start, setStart] = useState(false)
	return start ? (
		<div id="InputNomComponent">
			<div className="text-center">
				<CloseButton onClick={() => setStart(false)}></CloseButton>
			</div>
			<br></br>
			<OnlyInputComponent
				HandlClickSartGameBtnProps={HandlClickSartGameBtnProps}
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

function OnlyInputComponent({ HandlClickSartGameBtnProps }: PropsSM) {
	let [IsFullJ, setIsFullJ] = useState(false)
	let Input1 = React.createRef<HTMLInputElement>()
	let Input2 = React.createRef<HTMLInputElement>()
	function HandlClickSartGameBtnlocal() {
		if (Input1.current && Input2.current) {
			HandlClickSartGameBtnProps(
				Input1.current.value,
				Input2.current.value
			)
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
							HandlClickSartGameBtnlocal()
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
