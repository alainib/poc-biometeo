/*
 * Copyright (C) 2013-2020 MNEMOTIX <http://www.mnemotix.com/> and/or its affiliates
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

import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  responsiveIcon: {
    width: '75%',
    maxWidth: '400px',
    height: 'auto',
  },
  rowDirection: {
    margin: 20,
    width: '90%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: 'white',
  },
}));

export default function TopBar() {
  const classes = useStyles();

  return (
    <div className={classes.rowDirection}>
      <div>
        <img
          className={classes.responsiveIcon}
          src={'./icons/biometeo.png'}
          alt="biometeo"
        />
      </div>
      <div>Localisation Search</div>
      <div>BM</div>
    </div>
  );
}
