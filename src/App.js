import React from 'react';
import './App.css';

import Meteo from './components/Meteo';
import Categorie from './components/Categorie';
import TopBar from './components/TopBar';

const BACKGROUNDCOLOR = 'rgba(13,53,78, 0.6)';
const relativeBox = {
  width: '100%',
  height: '100vh',
  position: 'relative',
};
const overlay = {
  backgroundColor: BACKGROUNDCOLOR,
  color: 'white',
  position: 'relative',
  height: '100%',
};
const container = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};
const margin30 = {
  marginTop: 130,
  marginBottom: 130,
};

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
        <Meteo />
        <div style={relativeBox}>
          <div
            style={{
              width: '100%',
              position: 'absolute',
              left: 0,
              right: 0,
              top: '-350px',
              bottom: '-270px',
              webkitMask:
                'linear-gradient(transparent ,#fff 200px calc(100% - 50px),transparent)',
              mask:
                'linear-gradient(transparent ,#fff 200px calc(100% - 50px),transparent)',
              background:
                "url('https://poc-b-i-o-meteo.netlify.com/photos/air.jpg') bottom/cover",
            }}
          >
            <div style={overlay}>
              <div style={container}>
                <div style={margin30}>
                  <div
                    style={{
                      height: 450,
                      width: 600,
                      backgroundColor: 'yellow',
                      border: '3px solid red',
                    }}
                  >
                    a
                  </div>
                  <div
                    style={{
                      height: 200,
                      width: 600,
                      backgroundColor: 'white',
                      border: '3px solid red',
                    }}
                  >
                    b
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={relativeBox}>
          <div
            style={{
              width: '100%',
              position: 'absolute',
              left: 0,
              right: 0,
              top: '-100px',
              bottom: '-100px',
              zIndex: 1,
              webkitMask:
                'linear-gradient(transparent ,#fff 200px calc(100% - 50px),transparent)',
              mask:
                'linear-gradient(transparent ,#fff 200px calc(100% - 50px),transparent)',
              background:
                "url('https://poc-b-i-o-meteo.netlify.com/photos/sol.jpg') bottom/cover",
            }}
          >
            <div style={overlay}>
              <div style={container}>
                <div
                  style={{
                    height: 100,
                    width: 600,
                    backgroundColor: 'blue',
                    border: '3px solid red',
                  }}
                >
                  a
                </div>
                <div
                  style={{
                    height: 400,
                    width: 600,
                    backgroundColor: 'grey',
                    border: '3px solid red',
                  }}
                >
                  b
                </div>
                <div
                  style={{
                    height: 100,
                    width: 600,
                    backgroundColor: 'blue',
                    border: '3px solid red',
                  }}
                >
                  c
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={relativeBox}>
          <div
            style={{
              width: '100%',
              position: 'absolute',
              left: 0,
              right: 0,
              top: '-50px',
              bottom: '-50px',
              webkitMask:
                'linear-gradient(transparent ,#fff 70px calc(100% - 50px),transparent)',
              mask:
                'linear-gradient(transparent ,#fff 70px calc(100% - 50px),transparent)',
              background:
                "url('https://poc-b-i-o-meteo.netlify.com/photos/eau.jpg') bottom/cover",
            }}
          >
            <div style={overlay}>
              <div style={container}>
                <div
                  style={{
                    height: 100,
                    width: 600,
                    border: '3px solid red',
                    backgroundColor: 'blue',
                  }}
                >
                  a
                </div>
                <div
                  style={{
                    height: 500,
                    width: 600,
                    border: '3px solid red',
                    backgroundColor: 'grey',
                  }}
                >
                  b
                </div>
                <div
                  style={{
                    height: 200,
                    width: 600,
                    border: '3px solid red',
                    backgroundColor: 'white',
                  }}
                >
                  c
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
