import { Carte, JeuDeCarte32C, Joueur } from './Class'
import stateStore, { actions, stateJoueur } from './State_PageJeu'

export function initJeu(nj1: string, nj2: string) {
	const Paquet = new JeuDeCarte32C()
	Paquet.Melanger()
	const JA = new Joueur(nj1)
	const JB = new Joueur(nj2)
	JA.Ramasser(Paquet.Distribuer(16))
	JB.Ramasser(Paquet.Distribuer(16))
	return [JA, JB]
}

export async function partieBat([joueur1, joueur2]: Joueur[]) {
	stateStore.dispatch(actions.play())
	const nbCartesJ1 = () => joueur1.GetNbCartes
	const nbCartesJ2 = () => joueur2.GetNbCartes
	while (nbCartesJ1() != 0 && nbCartesJ2() != 0) {
		//await sleep(0.1)
		coupbataille(joueur1, joueur2)
		stateStore.dispatch(actions.incrementCoups(1))
	}
	if (nbCartesJ1() === 0) {
		stateStore.dispatch(actions.setWinner(joueur2.GetNom))
	} else {
		stateStore.dispatch(actions.setWinner(joueur1.GetNom))
	}
}

function updateState(joueur1: Joueur, cA1: Carte, joueur2: Joueur, cB1: Carte) {
	let stateJ1: stateJoueur = {
		joueurPaquet: joueur1.GetPioche.paquet.map((value) =>
			value.AfficheCarte()
		),
		playingCard: cA1.AfficheCarte(),
	}
	let stateJ2: stateJoueur = {
		joueurPaquet: joueur2.GetPioche.paquet.map((value) =>
			value.AfficheCarte()
		),
		playingCard: cB1.AfficheCarte(),
	}
	stateStore.dispatch(actions.updateJoueur([stateJ1, stateJ2]))
}

function coupbataille(joueur1: Joueur, joueur2: Joueur) {
	const cA1 = joueur1.TirerCarte()
	const cB1 = joueur2.TirerCarte()
	const jeu = [cA1, cB1]
	updateState(joueur1, cA1, joueur2, cB1)
	if (cA1.Valeur > cB1.Valeur) {
		joueur1.Ramasser(jeu)
	} else if (cA1.Valeur < cB1.Valeur) {
		joueur2.Ramasser(jeu)
	} else {
		equality(joueur1, joueur2, jeu)
	}
	return [joueur1, joueur2]
}
/**
 * Cette fct résout le cas où le joueur passé en tant que "JoueurEnDifficulté" n'as pas assez de carte pour faire la bataille selon les règles normales.
 * */
function petiteBataille(
	cA: Carte,
	cB: Carte,
	joueurQuiGagne: Joueur,
	jeu: Carte[],
	JoueurEnDifficulty: Joueur
) {
	if (cA.Valeur > cB.Valeur) {
		joueurQuiGagne.Ramasser(jeu)
	} else {
		JoueurEnDifficulty.Ramasser(jeu)
	}
}
/**
 * tire une carte dans la pioche des deux joueurs
 * */
function tirerCartes(JA: Joueur, JB: Joueur, jeu: Carte[]) {
	const cA = JA.TirerCarte()
	const cB = JB.TirerCarte()
	jeu.push(cA)
	jeu.push(cB)
	return [cA, cB]
}

function equality(JA: Joueur, JB: Joueur, jeu: Carte[]) {
	if (JB.GetNbCartes === 0) {
		JB.Ramasser(jeu)
	} else if (JA.GetNbCartes === 0) {
		JA.Ramasser(jeu)
	} else {
		const [cA2, cB2] = tirerCartes(JA, JB, jeu)
		if (JB.GetNbCartes === 0) {
			petiteBataille(cA2, cB2, JA, jeu, JB)
		} else if (JA.GetNbCartes === 0) {
			petiteBataille(cA2, cB2, JB, jeu, JA)
		} else {
			const [cA3, cB3] = tirerCartes(JA, JB, jeu)
			if (cA3.Valeur > cB3.Valeur) {
				JA.Ramasser(jeu)
			} else if (cA3.Valeur < cB3.Valeur) {
				JB.Ramasser(jeu)
			} else {
				equality(JA, JB, jeu)
			}
		}
	}
	return [JA, JB]
}

// Fonction sleep()
/**
 * Permet d'attendre s seconde
 * @param s le nombre de secondes que l'on souhaite attendre
 */
function sleep(s: number) {
	return new Promise((resolve) => setTimeout(resolve, s * 1000))
}
