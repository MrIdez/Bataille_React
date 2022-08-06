import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useParams } from 'react-router-dom'
import { Joueur } from '../Class'
import { initJeu, partieBat } from '../Bataille'
import { Provider, useSelector } from 'react-redux'
import stateStore, { State } from '../State_PageJeu'

// Interface
interface CarteProps {
	Carte: string | null
}
interface PropsP {
	type: number
}
interface JoueurProps {
	Joueur: Joueur
	type: number
}

interface PartieProps {
	joueurArray: [Joueur, Joueur]
}

export default function PageJeu() {
	const { NomJoueur1, NomJoueur2 } = useParams()
	if (NomJoueur1 === undefined || NomJoueur2 === undefined) {
		return (
			<script>
				{' '}
				alert("Impossible de récupérer le nom d'un des joueur");{' '}
			</script>
		)
	} else {
		let [joueur1, joueur2] = initJeu(NomJoueur1, NomJoueur2)
		return (
			<div id="PageJeu">
				<Provider store={stateStore}>
					<Container id="NomDesJoueurs">
						<br />
						<br />
						<h1 className="display-4 text-center shadow">
							{NomJoueur1.toLocaleUpperCase()} versus{' '}
							{NomJoueur2.toLocaleUpperCase()}{' '}
						</h1>
					</Container>
					<ComponentPartieBataille joueurArray={[joueur1, joueur2]} />
				</Provider>
			</div>
		)
	}
}

function ComponentPartieBataille({ joueurArray }: PartieProps) {
	let [joueur1, joueur2] = joueurArray
	const winner = useSelector<State, string>((state) => state.winner)
	if (winner.length < 1) {
		partieBat(joueurArray).then()
	}
	return (
		<Container fluid>
			<br />
			<br />
			<Row>
				<Col>
					<JoueurComponent Joueur={joueur1} type={1} />
				</Col>
				<Col className="d-flex align-items-center justify-content-center">
					<CoupBatComponents />
				</Col>
				<Col>
					<JoueurComponent Joueur={joueur2} type={2} />
				</Col>
			</Row>
		</Container>
	)
}

function CarteComponent({ Carte }: CarteProps) {
	return (
		<Container fluid className="gx-0">
			<p className="text-center">{Carte}</p>
		</Container>
	)
}

function JoueurComponent({ Joueur, type }: JoueurProps) {
	return (
		<div id="JoueurComponent" className="text-center">
			<h1> {Joueur.NomJ}</h1>
			<PaquetComp type={type}></PaquetComp>
		</div>
	)
}

function CoupBatComponents() {
	const carteArray = useSelector<State, string[]>((state) => {
		return [state.joueur1.playingCard, state.joueur2.playingCard]
	})
	const Carte1 = carteArray[0]
	const Carte2 = carteArray[1]
	return (
		<div id="CoupBatComponents">
			<Container fluid>
				<Row className="shadow">
					<Col>
						<CarteComponent Carte={Carte1} />
					</Col>
					<Col className="d-flex align-items-center justify-content-center">
						<h6> VS </h6>
					</Col>
					<Col>
						{' '}
						<CarteComponent Carte={Carte2} />
					</Col>
				</Row>
			</Container>
		</div>
	)
}

function findPaquet(type: number) {
	if (type === 1) {
		return useSelector<State, string[]>(
			(state) => state.joueur1.joueurPaquet
		)
	} else {
		return useSelector<State, string[]>(
			(state) => state.joueur2.joueurPaquet
		)
	}
}

function CollCardList(props: { strings: string[] }) {
	return (
		<Col>
			<Container fluid className=" pt-3">
				<ul>
					{props.strings.map((carte, index) => {
						return <li key={`${carte}-${index}`}>{carte}</li>
					})}
				</ul>
			</Container>
		</Col>
	)
}

function PaquetComp({ type }: PropsP) {
	const paquet = findPaquet(type)
	const paquetColl1 = paquet.slice(0, Math.floor(paquet.length / 2))
	const paquetColl2 = paquet.slice(Math.floor(paquet.length / 2))
	return (
		<Container className="shadow">
			<Row>
				<CollCardList strings={paquetColl1} />
				<CollCardList strings={paquetColl2} />
			</Row>
		</Container>
	)
}
