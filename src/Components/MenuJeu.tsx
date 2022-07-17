import { Container } from "react-bootstrap"

interface PropsJ {
	Nomj1: string
	Nomj2: string
}

export default function MenuJeu({ Nomj1, Nomj2 }: PropsJ) {
	console.log(Nomj1, Nomj2)
	return (
		<Container fluid id="MenuJeu">
			<br />
			<h1 className="display-2 text-center">
				{Nomj1} vs {Nomj2}{" "}
			</h1>
		</Container>
	)
}
