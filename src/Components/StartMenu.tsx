import { Button, Container, Form, InputGroup } from "react-bootstrap"

export default function StartMenu() {
	return <InputNom></InputNom>
}

function InputNom() {
	return (
		<Container>
			<InputGroup className="mb-3" hasValidation>
				<Button variant="outline-dark" id="button-aleat1">
					Nom Aléatoire
				</Button>
				<Form.Control
					type="text"
					placeholder="Entre Ton nom J1"
					aria-label="Name's input with aleat name button"
					aria-describedby="Name's input"
				/>
				<Form.Control
					type="text"
					placeholder="Entre Ton nom J2"
					aria-label="Name's input with aleat name button"
					aria-describedby="Name's input"
				/>
				<Button variant="outline-dark" id="button-aleat2">
					Nom Aléatoire
				</Button>
				<Form.Control.Feedback type="invalid">
					Please choose a username.
				</Form.Control.Feedback>
			</InputGroup>
		</Container>
	)
}
