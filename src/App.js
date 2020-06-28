import React from 'react';
import './App.css';

import Meteo from './components/Meteo';
import Categorie from './components/Categorie';
import TopBar from './components/TopBar';

const BACKGROUNDCOLOR = 'rgba(13,53,78, 0.6)';

function App() {
  return (
    <div
      className="App"
      style={{
        color: BACKGROUNDCOLOR,
      }}
    >
      <header className="App-header">
        <TopBar />
        <Categorie name="air" noPT={true} />
        <Categorie name="eau" />
        <Categorie name="sol" noPB={true} />
      </header>
    </div>
  );
}

export default App;
