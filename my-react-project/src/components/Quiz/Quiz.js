import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { sheetUrl, targetZones } from './config';
import Toolbox from './Toolbox';
import MainImageArea from './MainImageArea';
import Scoreboard from './Scoreboard';
import ControlPanel from './ControlPanel';

const Quiz = () => {
  const [icons, setIcons] = useState([]);
  const [placedIcons, setPlacedIcons] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    Papa.parse(sheetUrl, {
      download: true,
      header: true,
      complete: () => {
        const iconNames = [...new Set(targetZones.map(z => z.name))];
        setIcons(iconNames);
      },
      error: (err) => console.error('Error loading sheet:', err)
    });
  }, []);

  const handleDragStart = (e, name) => {
    e.dataTransfer.setData('icon', name);
  };

  return (
    <div className="main-content">
      <Toolbox icons={icons} onDragStart={handleDragStart} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <MainImageArea placedIcons={placedIcons} setPlacedIcons={setPlacedIcons} />
        <Scoreboard score={score} />
        <ControlPanel score={score} placedIcons={placedIcons} setScore={setScore} />
      </div>
    </div>
  );
};

export default Quiz;
