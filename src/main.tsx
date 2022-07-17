import React from "react"
import ReactDOM from "react-dom/client"
import App from "./Components/App"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router } from "react-router-dom"
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Router>
			<App></App>
		</Router>
	</React.StrictMode>
)
