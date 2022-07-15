import { Container, Button } from "react-bootstrap"

export default function Intro() {
	return (
		<Container className="mx-auto">
			<Container>
				<br></br>
				<br></br>
				<br></br>
			</Container>
			<h1 className="display-2 text-center">Bienvenue</h1>
			<br></br>
			<p className="text-center">
				La bataille est un jeu de cartes qui se joue habituellement à
				deux qui est d'une grande simplicité pour les débutants,
				puisqu'on peut y jouer sous la conduite exclusive du hasard
				(bien que la manière dont sont rangés les plis peut influencer
				considérablement l'issue du jeu1, pour les joueurs avancés). On
				distribue l'ensemble d'un (ou plusieurs) jeu de cartes (ici 32)
				aux joueurs, qui n'en prennent pas connaissance. À chaque tour,
				chaque joueur retourne la carte du haut de sa main (ou son tas).
				Celui qui a la carte de la plus haute valeur — selon la
				hiérarchie du bridge : as, roi, dame, valet, dix… jusqu'au deux
				— fait la levée, qu'il place sous son tas. En cas d'égalité de
				valeurs — cas appelé bataille — les joueurs en ballotage disent
				« bataille ! », et commencent par placer une première carte face
				cachée puis une seconde carte face visible pour décider qui fera
				la levée. En cas de nouvelle égalité, la procédure est répétée.
				À la fin, le joueur gagnant remporte toutes les cartes, qu'il
				place sous son tas. La bataille est parfois l'occasion
				d'acquérir une grosse carte et c'est l'unique manière de gagner
				un as. Sans bataille et à moins qu'un joueur ne possède tous les
				as, il serait impossible de terminer une partie de bataille.
				Lorsqu'un joueur a en sa possession toutes les cartes du jeu, la
				partie se termine et il est déclaré gagnant. Avec ces règles, il
				est possible de calculer le nombre moyen de plis nécessaires
				pour terminer une partie à deux joueurs. Une simulation
				numérique donne une moyenne de 480 plis et une médiane de 360
				plis (avec 52 cartes). Un coup moyen durant typiquement 10
				secondes, 50 % des parties durent 1 heure ou plus. Toujours par
				simulation numérique, on peut estimer à 90 % de chance de
				victoire pour une main initiale contenant les 4 as, et à 70 % de
				chance de victoire pour une main initiale n'en contenant que 3.
				L'avantage pour des mains contenant les quatre rois est bien
				plus faible car cela donne une probabilité de victoire de 56 %
				uniquement.
			</p>
			<br></br>
			<figcaption className="blockquote-footer text-end">
				"Bataille (jeu)."{" "}
				<cite title="Source Title">
					Wikipédia, l'encyclopédie libre,
				</cite>
			</figcaption>
			<p className="text-center">Peut etre ya un truc la</p>
		</Container>
	)
}
