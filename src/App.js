import React from 'react';
import './App.css';

import Meteo from './components/Meteo';
import Categorie from './components/Categorie';

const BACKGROUNDCOLOR = 'rgba(13,53,78, 0.6)';
const box = {
  color: BACKGROUNDCOLOR,
  width: '100%',
  height: '100vh',
  position: 'relative'
};
const overlay = {
  backgroundColor: BACKGROUNDCOLOR,
  color: 'white',
  position: 'relative',
  height: '100%'
};
const container = {
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center'
};

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

  return (
    <div className="App">
      <header className="App-header">
        <div style={box}>
          <div
            style={{
              width: '100%',

              position: 'absolute',
              left: 0,
              right: 0,
              top: '-50px',
              bottom: '-50px',
              background:
                "url('https://poc-b-i-o-meteo.netlify.com/photos/air.jpg') bottom/cover",
              WebkitMask:
                'linear-gradient(transparent ,#fff 50px calc(100% - 50px),transparent)',
              mask:
                'linear-gradient(transparent ,#fff 50px calc(100% - 50px),transparent)'
            }}
          >
            <div style={overlay}>
              <div style={container}>
                <div
                  style={{ height: 400, width: 200, backgroundColor: 'grey' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div style={box}>
          <div
            style={{
              width: '100%',

              position: 'absolute',
              left: 0,
              right: 0,
              top: '-50px',
              bottom: '-50px',
              background:
                "url('https://poc-b-i-o-meteo.netlify.com/photos/sol.jpg') bottom/cover",
              WebkitMask:
                'linear-gradient(transparent ,#fff 50px calc(100% - 50px),transparent)',
              mask:
                'linear-gradient(transparent ,#fff 50px calc(100% - 50px),transparent)'
            }}
          >
            <div style={overlay}>
              <div style={container}>
                <div
                  style={{ height: 400, width: 200, backgroundColor: 'grey' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div style={box}>
          <div
            style={{
              width: '100%',
              position: 'absolute',
              left: 0,
              right: 0,
              top: '-50px',
              bottom: '-50px',
              background:
                "url('https://poc-b-i-o-meteo.netlify.com/photos/eau.jpg') bottom/cover",
              WebkitMask:
                'linear-gradient(transparent ,#fff 50px calc(100% - 50px),transparent)',
              mask:
                'linear-gradient(transparent ,#fff 50px calc(100% - 50px),transparent)'
            }}
          >
            <div style={overlay}>
              <div style={container}>
                <div
                  style={{ height: 500, width: 200, backgroundColor: 'grey' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
