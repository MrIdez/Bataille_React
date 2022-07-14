import React from 'react';
import '../Styles/App.css';
//import Carte from './Carte';
import Intro from './Introduction';
import NavigationBar from './navbar';

function App() {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Intro></Intro>
        </div>
    )
}


export default App;
