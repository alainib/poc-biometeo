import React from 'react';
import './App.css';

import Meteo from './components/Meteo';
import Categorie from './components/Categorie';

function App() {
  return (
    <div className="App">
      <h5>BioMétéo</h5>
      <header className="App-header">
        <Meteo />
        <Categorie name="air" display="Air" />
        <Categorie name="sol" display="Sol" />
        <Categorie name="eau" display="Eau" />
      </header>
    </div>
  );
}

export default App;
