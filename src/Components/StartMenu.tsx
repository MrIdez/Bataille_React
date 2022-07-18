import React, { useContext, useState } from "react"
import { Button, Container, CloseButton } from "react-bootstrap"

interface PropsSM {
	HandlClickStartGame: (name1: string, name2: string) => void
}

interface PropsInputPlayer {
	numj : string
	handleChange : Function
	Inputref : React.Ref<HTMLInputElement>
}

interface inputState {
	IsFullJ? : boolean
}

export default function StartMenu({ HandlClickStartGame }: PropsSM) {
	let [start, setStart] = useState(false)
	return start ? (
		<div id="InputNomComponent">
			<div className="text-center">
				<CloseButton onClick={() => setStart(false)}></CloseButton>
			</div>
			<br></br>
			<InputsPLayer
				HandlClickStartGame={HandlClickStartGame}
			></InputsPLayer>
		</div>
	) : (
		<div className="text-center" id="StartBtn">
			<Button variant="outline-dark" onClick={() => setStart(true)}>
				Commencez !
			</Button>
		</div>
	)
}
function createInputRef() {
	const Input1 = React.createRef<HTMLInputElement>()
	const Input2 = React.createRef<HTMLInputElement>()
	return { Input1, Input2 }
}

function InputPlayerComponents({numj,handleChange,Inputref}:PropsInputPlayer) {
	console.log()
	return <input
				onChange={() => handleChange()}
				ref = {Inputref}
				placeholder = {`Rentre ton nom ${numj}`}
				type="text" 
				aria-label={`${numj} name`}
				className="form-control"/>
}

class InputsPLayer extends React.Component<PropsSM,inputState> {
	inputRef1: React.RefObject<HTMLInputElement>
	inputRef2: React.RefObject<HTMLInputElement>

	constructor(props:PropsSM) {
		super(props)	
		const {Input1,Input2 } = createInputRef()
		this.inputRef1 = Input1
		this.inputRef2 = Input2
		this.state = {
			IsFullJ : false 
		}

		}

	Submit() {
		
	}

	HandlClickSartGameBtnlocal() {
		const {HandlClickStartGame} = this.props
		if (this.inputRef1.current && this.inputRef2.current) {
			HandlClickStartGame(
				this.inputRef1.current.value,
				this.inputRef2.current.value
			)
		}
	}

	isInputFull() {
		if (this.inputRef1.current && this.inputRef2.current) {
			return this.inputRef1.current.value != "" && this.inputRef2.current.value != ""
		} else {
			return false
		}
	}
	checkInputValue() {
		this.isInputFull() ? this.setState(()=> { return {IsFullJ : true }}) : this.setState(()=> { return {IsFullJ : false }})
	}

	render() {
		return (
		<Container>
		<div className="input-group">
			<Button variant="outline-dark">Nom aléatoire</Button>
			<InputPlayerComponents numj ="Joueur 1" handleChange={()=> this.checkInputValue()} Inputref={this.inputRef1} />
			<InputPlayerComponents numj ="Joueur 2" handleChange={()=> this.checkInputValue()} Inputref={this.inputRef2}/>
			<Button variant="outline-dark">Nom aléatoire</Button>
		</div>
		{this.state.IsFullJ && (
			<div className="text-center">
				<br></br>
				<Button
					variant="outline-dark"
					size="lg"
					onClick={() => {
						this.HandlClickSartGameBtnlocal()
					}}
				>
					C'est parti
				</Button>
				<br></br>
			</div>
		)}</Container>
		)
	}
}