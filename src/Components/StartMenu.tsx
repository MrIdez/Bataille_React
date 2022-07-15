import { useState } from "react"
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
	setNom: Function[]
}

function InputNom({ setGame, setNom }: Props) {
	let [IsFullJ2, setIsFullJ2] = useState(false)
	let [IsFullJ1, setIsFullJ1] = useState(false)
	let text = IsFullJ2 && IsFullJ1
	return (
		<Container>
			<div className="input-group">
				<Button variant="outline-dark">Nom aléatoire</Button>
				<input
					onChange={(e) => {
						setNom[0](e.target.value)
						e.target.value != ""
							? setIsFullJ1(true)
							: setIsFullJ1(false)
					}}
					placeholder="Entre ton nom j1"
					type="text"
					aria-label="First name"
					className="form-control"
				/>
				<input
					onChange={(e) => {
						setNom[1](e.target.value)
						e.target.value != ""
							? setIsFullJ2(true)
							: setIsFullJ2(false)
					}}
					placeholder="Entre ton nom j2"
					type="text"
					aria-label="Last name"
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
						onClick={() => setGame(true)}
					>
						C'est parti
					</Button>
					<br></br>
				</div>
			)}
		</Container>
	)
}
