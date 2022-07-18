import React from "react"
import ReactDOM from "react-dom/client"
import App from "./Components/App"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router } from "react-router-dom"
import NavigationBar from "./Components/navbar"
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Router>
			<NavigationBar/>
			<App></App>
		</Router>
	</React.StrictMode>
)
