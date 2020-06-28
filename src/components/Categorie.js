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
import Meteo from './Meteo';

const BACKGROUNDCOLOR = 'rgba(13,53,78, 0.8)';

const adiv = {
  height: 450,
  width: 600,
  backgroundColor: 'yellow',
  border: '3px solid red',
};
const bdiv = {
  height: 200,
  width: 600,
  backgroundColor: 'grey',
  border: '3px solid red',
};
const cdiv = {
  height: 100,
  width: 600,
  backgroundColor: 'green',
  border: '3px solid red',
};

const relativeBox = {
  width: '100%',
  position: 'relative',
};
const overlay = {
  backgroundColor: BACKGROUNDCOLOR,
  color: 'white',
  position: 'relative',
  zIndex: 10,
  padding: '50px',
};
const container = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

export default function Categorie(props) {
  let ref = useRef(null);
  let size = useComponentSize(ref);
  let { width, height } = size;

  const maskValue = `linear-gradient(transparent ,#fff ${
    props.name === 'air' ? '370px' : '70px'
  }  calc(100% - 50px),transparent)`;

  return (
    <div style={relativeBox} id={props.name} ref={ref}>
      <div
        style={{
          width: '100%',
          position: 'absolute',
          left: 0,
          right: 0,

          top: props.noPT ? '0px' : '-100px',
          bottom: props.noPB ? '0px' : '-50px',
          webkitMask: maskValue,
          mask: maskValue,
          background:
            "url('https://poc-b-i-o-meteo.netlify.com/photos/eau.jpg') bottom/cover",
        }}
      ></div>
      <div style={overlay}>
        <div style={container}>
          {props.name === 'air' && <Meteo />}
          {props.name}
          <div style={adiv}>a</div>
          <div style={bdiv}>b</div>
          {props.name === 'sol' && <div style={cdiv}>c</div>}
          {props.name === 'sol' && <div style={cdiv}>c</div>}
        </div>
      </div>
    </div>
  );
}
