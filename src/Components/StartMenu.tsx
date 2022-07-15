import { useState } from "react"
import { Button, Container, CloseButton } from "react-bootstrap"
import { CSSTransition } from "react-transition-group"

export default function StartMenu() {
	let [test, upTest] = useState(false)
	return test ? (
		<>
			<div className="text-center">
				<CloseButton onClick={() => upTest(false)}></CloseButton>
			</div>
			<br></br>
			<InputNom></InputNom>
		</>
	) : (
		<div className="text-center">
			<Button variant="outline-dark" onClick={() => upTest(true)}>
				{" "}
				Commencez !
			</Button>
		</div>
	)
}

function InputNom() {
	return (
		<Container>
			<div className="input-group">
				<Button variant="outline-dark">Nom aléatoire</Button>
				<input
					placeholder="Entre ton nom j1"
					type="text"
					aria-label="First name"
					className="form-control"
				/>
				<input
					placeholder="Entre ton nom j2"
					type="text"
					aria-label="Last name"
					className="form-control"
				/>
				<Button variant="outline-dark">Nom aléatoire</Button>
			</div>
		</Container>
	)
}
