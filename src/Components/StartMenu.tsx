import React, { useState } from "react"
import { Button, Container, CloseButton } from "react-bootstrap"

export default function StartMenu({ setGame, setNom }: Props) {
	let [start, setStart] = useState(false)
	return start ? (
		<>
			<div className="text-center">
				<CloseButton onClick={() => setStart(false)}></CloseButton>
			</div>
			<br></br>
			<InputNom setGame={setGame} setNom={setNom}></InputNom>
		</>
	) : (
		<div className="text-center">
			<Button variant="outline-dark" onClick={() => setStart(true)}>
				Commencez !
			</Button>
		</div>
	)
}

interface Props {
	setGame: Function
	setNom: (n1: string, n2: string) => void
}

function InputNom({ setGame, setNom }: Props) {
	let [IsFullJ2, setIsFullJ2] = useState(false)
	let [IsFullJ1, setIsFullJ1] = useState(false)
	let text = IsFullJ2 && IsFullJ1
	let Input1 = React.createRef<HTMLInputElement>()
	let Input2 = React.createRef<HTMLInputElement>()
	function RenvoieN() {
		if (Input1.current && Input2.current) {
			setNom(Input1.current.value, Input2.current.value)
		}
	}
	return (
		<Container>
			<div className="input-group">
				<Button variant="outline-dark">Nom aléatoire</Button>
				<input
					onChange={() => {
						if (Input1.current) {
							Input1.current.value != ""
								? setIsFullJ1(true)
								: setIsFullJ1(false)
						}
					}}
					ref={Input1}
					placeholder="Entre ton nom j1"
					type="text"
					aria-label="First Player name"
					className="form-control"
				/>
				<input
					onChange={() => {
						if (Input2.current) {
							Input2.current.value != ""
								? setIsFullJ2(true)
								: setIsFullJ2(false)
						}
					}}
					ref={Input2}
					placeholder="Entre ton nom j2"
					type="text"
					aria-label="Second Player name"
					className="form-control"
				/>
				<Button variant="outline-dark">Nom aléatoire</Button>
			</div>
			{text && (
				<div className="text-center">
					<br></br>
					<Button
						variant="outline-dark"
						size="lg"
						onClick={() => {
							RenvoieN()
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
