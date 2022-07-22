import React, { useContext, useState } from "react"
import { Button, Container, CloseButton, Fade, Collapse } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

interface PropsInputPlayer {
	numj: string
	handleChange: Function
	Inputref: React.Ref<HTMLInputElement>
}

interface inputState {
	IsFullJ: boolean
}

interface inputProps {
	navigateHook: Function
}

export default function StartMenu() {
	let [start, setStart] = useState(false)
	const navigate = useNavigate()
	return (
		<div id="StartMenu">
			<Collapse in={start}>
				<div id="InputNomComponent">
					<div className="text-center">
						<CloseButton
							onClick={() => setStart(false)}
						></CloseButton>
					</div>
					<br></br>
					<InputsPLayer navigateHook={navigate}></InputsPLayer>
				</div>
			</Collapse>
			{!start && (
				<div className="text-center" id="StartBtn">
					<Button
						variant="outline-dark"
						onClick={() => setStart(true)}
					>
						Commencez !
					</Button>
				</div>
			)}
		</div>
	)
}
function createInputRef() {
	const Input1 = React.createRef<HTMLInputElement>()
	const Input2 = React.createRef<HTMLInputElement>()
	return { Input1, Input2 }
}

function InputPlayerComponents({
	numj,
	handleChange,
	Inputref,
}: PropsInputPlayer) {
	return (
		<input
			onChange={() => handleChange()}
			ref={Inputref}
			placeholder={`Rentre ton nom ${numj}`}
			type="text"
			aria-label={`${numj} name`}
			className="form-control"
		/>
	)
}

class InputsPLayer extends React.Component<inputProps, inputState> {
	inputRef1: React.RefObject<HTMLInputElement>
	inputRef2: React.RefObject<HTMLInputElement>

	constructor(props: inputProps) {
		super(props)
		const { Input1, Input2 } = createInputRef()
		this.inputRef1 = Input1
		this.inputRef2 = Input2
		this.state = {
			IsFullJ: false,
		}
	}

	HandlClickSartGameBtn() {
		const navigateToGame = this.props.navigateHook
		if (this.inputRef1.current && this.inputRef2.current) {
			navigateToGame(
				`/game/${this.inputRef1.current.value}/${this.inputRef2.current.value}`
			)
		}
	}

	isInputFull() {
		if (this.inputRef1.current && this.inputRef2.current) {
			return (
				this.inputRef1.current.value != "" &&
				this.inputRef2.current.value != ""
			)
		} else {
			return false
		}
	}
	checkInputValue() {
		if (this.isInputFull() === true) {
			if (this.state.IsFullJ === false) {
				this.setState(() => {
					return { IsFullJ: true }
				})
			}
		} else {
			if (this.state.IsFullJ === true) {
				this.setState(() => {
					return { IsFullJ: false }
				})
			}
		}
	}

	handleBtnAleat(inputRef: React.RefObject<HTMLInputElement>) {
		const input = inputRef.current
		const Nom = [
			"Agnès Téziste",
			"Kelly Diossi",
			"Maggy Tarestcassé",
			"Alex Trémité",
			"Annie Versaire",
			"Maud Erateur",
			"Alban Bou",
			"Alex Cité",
			"Luc Ratif",
			"Alain Proviste",
			"Léna Zis",
			"Line Evitable",
		]
		const i = Math.floor(Math.random() * Nom.length)
		if (input) {
			input.value = Nom[i]
			this.checkInputValue()
		}
	}

	render() {
		return (
			<Container>
				<div className="input-group">
					<Button
						variant="outline-dark"
						onClick={() => this.handleBtnAleat(this.inputRef1)}
					>
						Nom aléatoire
					</Button>
					<InputPlayerComponents
						numj="Joueur 1"
						handleChange={() => this.checkInputValue()}
						Inputref={this.inputRef1}
					/>
					<InputPlayerComponents
						numj="Joueur 2"
						handleChange={() => this.checkInputValue()}
						Inputref={this.inputRef2}
					/>
					<Button
						variant="outline-dark"
						onClick={() => this.handleBtnAleat(this.inputRef2)}
					>
						Nom aléatoire
					</Button>
				</div>
				<Fade in={this.state.IsFullJ}>
					<div className="text-center">
						<br></br>
						<Button
							variant="outline-dark"
							size="lg"
							onClick={() => {
								this.HandlClickSartGameBtn()
							}}
						>
							C'est parti
						</Button>
						<br></br>
					</div>
				</Fade>
			</Container>
		)
	}
}
