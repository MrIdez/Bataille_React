import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useParams } from "react-router-dom"
import { Carte, JeuDeCarte32C, Joueur } from "../Class"
import Collapse from "react-bootstrap/Collapse"
import PaquetComp from "./PaquetComponent"

interface CarteProps {
	Carte: Carte
}

interface JoueurProps {
	Joueur: Joueur
}

interface PartieProps {
	joueurArray: [Joueur, Joueur]
}

interface CoupBatProps {
	carteArray: [Carte, Carte]
}

export default function PageJeu() {
	const { NomJoueur1, NomJoueur2 } = useParams()
	if (NomJoueur1 === undefined || NomJoueur2 === undefined) {
		return (
			<script>
				{" "}
				alert("Impossible de recuperer le nom d'un des joueur");{" "}
			</script>
		)
	} else {
		let [joueur1, joueur2] = initJeu(NomJoueur1, NomJoueur2)
		return (
			<div id="PageJeu">
				<Container id="NomDesJoueurs">
					<br />
					<br />
					<h1 className="display-4 text-center">
						{NomJoueur1.toLocaleUpperCase()} versus{" "}
						{NomJoueur2.toLocaleUpperCase()}{" "}
					</h1>
				</Container>
				<ComponentPartieBataille joueurArray={[joueur1, joueur2]} />
			</div>
		)
	}
}

function initJeu(nj1: string, nj2: string) {
	const Paquet = new JeuDeCarte32C()
	Paquet.Melanger()
	const JA = new Joueur(nj1)
	const JB = new Joueur(nj2)
	JA.Ramasser(Paquet.Distribuer(16))
	JB.Ramasser(Paquet.Distribuer(16))
	return [JA, JB]
}

function partieBat([joueur1, joueur2]: Joueur[]) {
	/** 
	 * TODO : La partie de bataille 
	 * let nbcoup = 0;
    while (JB.GetNbCartes != 0 && JA.GetNbCartes != 0) {
        const CA = JA.TirerCarte();
        const CB = JB.TirerCarte();
        const jeu1 = [CA, CB];
        nbcoup += 1;
        CoupBataille(JA, JB, jeu1);
        if (skip === false) {
            while (pause === true && skip === false) {
                await sleep(0.1);
            }
            await AffCoupBat(CA, CB, JA, JB, nbcoup);
        }
    }
    if (JB.GetNbCartes == 0) {
        Resultat['Gagnant'] = 1;
    }
    else {
        Resultat['Gagnant'] = 2;
    }
    Resultat['NbCoups'] = nbcoup;
    return Resultat;
 */
}

function ComponentPartieBataille({ joueurArray }: PartieProps) {
	let [joueur1, joueur2] = joueurArray
	const CA = joueur1.TirerCarte()
	const CB = joueur2.TirerCarte()
	return (
		<Container fluid>
			<br />
			<br />
			<Row>
				<Col>
					<JoueurComponent Joueur={joueur1} />
				</Col>
				<Col md="auto">
					<CoupBatComponents carteArray={[CA, CB]} />
				</Col>
				<Col>
					<JoueurComponent Joueur={joueur2} />
				</Col>
			</Row>
		</Container>
	)
}

function CarteComponent({ Carte }: CarteProps) {
	return <p>{Carte.AfficheCarte()}</p>
}

function JoueurComponent({ Joueur }: JoueurProps) {
	return (
		<div id="JoueurComponent">
			<h1> {Joueur.NomJ}</h1>
			<PaquetComp paquet={Joueur.GetPioche}></PaquetComp>
		</div>
	)
}

function CoupBatComponents({ carteArray }: CoupBatProps) {
	let [Carte1, Carte2] = carteArray
	return (
		<div id="CoupBatComponents">
			<Container>
				<Row>
					<Col>
						<CarteComponent Carte={Carte1} />
					</Col>
					<Col md="auto">
						<h1> VS </h1>
					</Col>
					<Col>
						{" "}
						<CarteComponent Carte={Carte2} />
					</Col>
				</Row>
			</Container>
		</div>
	)
}
