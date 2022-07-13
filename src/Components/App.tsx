import React from 'react';
import '../Styles/App.css';
import Carte from './Carte';
import NavigationBar from './navbar';

function App() {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Carte></Carte>
        </div>
    )
}


export default App;
