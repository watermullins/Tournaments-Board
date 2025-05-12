import React from 'react';
import { targetZones } from './config';

const ControlPanel = ({ score, placedIcons, setScore }) => {
  const handleCheckScore = () => {
    let correct = 0;
    placedIcons.forEach(img => {
      if (targetZones.some(z => z.name === img.name && z.x === img.x && z.y === img.y)) {
        correct++;
      }
    });
    setScore(correct);
  };

  const handleShare = () => {
    const total = targetZones.length;
    const percent = score / total;
    let grade;
    if (percent === 1) grade = "S";
    else if (percent >= 0.9) grade = "A";
    else if (percent >= 0.8) grade = "B";
    else if (percent >= 0.7) grade = "C";
    else if (percent >= 0.5) grade = "D";
    else grade = "F";

    const text = `Archer Techtree Challenge\nScore: ${score}/${total}\nGrade: ${grade}\naoe2tournaments.com/games/archers`;
    navigator.clipboard.writeText(text).then(() => alert("Copied to clipboard!"));
  };

  return (
    <div style={{ marginTop: 12 }}>
      <button onClick={handleCheckScore}>Check Score</button>
      <button onClick={handleShare}>Share Results</button>
      <button onClick={() => window.location.href = '/games/'}>More Games</button>
    </div>
  );
};

export default ControlPanel;
