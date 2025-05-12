import React from 'react';
import { targetZones } from './config';

const Scoreboard = ({ score }) => (
  <div id="scoreboard">
    Score: <span>{score}</span> / <span>{targetZones.length}</span>
  </div>
);

export default Scoreboard;
