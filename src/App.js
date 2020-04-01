import React from 'react';
import './App.css';

import Meteo from './components/Meteo';
import Categorie from './components/Categorie';

function App() {
  return (
    <div className="App">
      <h5 style={{ paddingLeft: 15 }}>Météo</h5>
      <header className="App-header">
        <Meteo />
        <Categorie name="air" display="Air" bgpos="bottom" />
        <Categorie name="sol" display="Sol" bgpos="center" />
        <Categorie name="eau" display="Eau" bgpos="top" />
      </header>
    </div>
  );
}

export default App;
