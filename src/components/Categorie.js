/*
 * Copyright (C) 2013-2018 MNEMOTIX <http://www.mnemotix.com/> and/or its affiliates
 * and other contributors as indicated by the @author tags.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { useRef } from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import useComponentSize from '@rehooks/component-size';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  leftText: {
    textAlign: 'left',
    width: 'auto',
    display: 'inline-block'
  },
  responsive: {
    width: '100%',
    maxWidth: '1000px',
    height: 'auto'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  overlay: {
    backgroundColor: 'rgba(13,53,78, 0.6)',
    color: 'white',
    position: 'relative'
  },

  topOpacity: {
    position: 'absolute',
    top: -2,
    width: '100%',
    height: 75,
    background: 'linear-gradient( to top, transparent , rgba(13,53,78,0.9 ) )',
    backgroundRepeat: 'no-repeat'
  },
  bottomOpacity: {
    position: 'absolute',
    bottom: -2,
    width: '100%',
    height: 75,
    background:
      'linear-gradient( to bottom, transparent , rgba(13,53,78, 0.9 ) )',
    backgroundRepeat: 'no-repeat'
  },

  padding: {
    padding: 'auto',
    paddingTop: 85,
    paddingBottom: 85
  }
}));

export default function Categorie(props) {
  const classes = useStyles();

  let ref = useRef(null);
  let size = useComponentSize(ref);
  // size == { width: 100, height: 200 }
  let { width, height } = size;

  console.log(props.name, props.bgpos, {
    width,
    height,
    ratio: width / height
  });

  const filename = {
    air: 'air.png',
    eau: 'eau.png',
    sol: 'sol.png'
  };

  let backgd = {
    backgroundImage: `url('./photos/${filename[props.name]}')`,
    backgroundPosition: props.bgpos || 'center',
    backgroundSize: '100% auto',
    backgroundRepeat: 'no-repeat',
    width: '100%'
  };

  let test = {
    xs: 12,
    sm: 6
  };

  if (props.name === 'eau') {
    test = {
      xs: 6
    };
  }

  return (
    <div style={backgd} ref={ref}>
      <div className={classes.overlay}>
        {props.topOpacity && <div className={classes.topOpacity} />}
        <div className={classes.padding}>
          <Container maxWidth="sm">
            <Typography variant="h2" gutterBottom>
              {props.display}
            </Typography>

            <Grid container spacing={1} justify="center" alignItems="center">
              <Grid item xs={12}>
                <img
                  className={classes.responsive}
                  src={'./photos/animal.jpg'}
                  alt="meteo"
                />
              </Grid>
            </Grid>
            <Grid container spacing={1} justify="center" alignItems="center">
              <Grid item {...test} style={{ position: 'relative' }}>
                <img
                  className={classes.responsive}
                  src={'./photos/animal.jpg'}
                  alt="meteo"
                />
                <div style={{ position: 'absolute', bottom: 20, left: 10 }}>
                  <i>Galinette cendrée</i>
                  <br />
                  <b>Espèce endémique</b> observée 132
                </div>
              </Grid>
              <Grid item {...test} style={{ position: 'relative' }}>
                <img
                  className={classes.responsive}
                  src={'./photos/animal.jpg'}
                  alt="meteo"
                />
                <div style={{ position: 'absolute', bottom: 20, left: 10 }}>
                  <i>Galinette cendrée</i>
                  <br />
                  <b>Espèce endémique</b> observée 132
                </div>
              </Grid>
            </Grid>
            {renderDetails()}
          </Container>
        </div>
        {props.bottomOpacity && <div className={classes.bottomOpacity} />}
      </div>
    </div>
  );

  function renderDetails() {
    switch (props.name) {
      case 'eau':
        return (
          <div>
            <img
              className={classes.responsive}
              src={'./photos/detaileau.jpg'}
              alt="detaileau"
            />
          </div>
        );
      case 'sol':
        return (
          <Container maxWidth="sm" style={{ marginTop: 25, marginBottom: 25 }}>
            <Grid container spacing={1} justify="center" alignItems="stretch">
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" gutterBottom>
                  NIVEAU DE LA NAPPE
                </Typography>
                <Typography variant="h4" gutterBottom>
                  Eocène
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" gutterBottom>
                  NIVEAU DE LA RIVIERE
                </Typography>
                <Typography variant="h4" gutterBottom>
                  Dordogne
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h5" gutterBottom>
                  Nappe <b>profonde</b>
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography variant="h5" gutterBottom>
                  <b>24 mètres</b>
                </Typography>
              </Grid>
            </Grid>
          </Container>
        );
      default:
        return null;
    }
  }
}
