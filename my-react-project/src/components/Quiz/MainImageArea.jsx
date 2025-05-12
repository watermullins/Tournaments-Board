import React, { useRef } from 'react';
import { targetZones } from './config';

const MainImageArea = ({ placedIcons, setPlacedIcons }) => {
  const containerRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const iconName = e.dataTransfer.getData('icon');
    if (!iconName) return;

    const rect = containerRef.current.getBoundingClientRect();
    const dropX = e.clientX - rect.left;
    const dropY = e.clientY - rect.top;

    const zone = targetZones.find(z =>
      dropX >= z.x && dropX <= z.x + z.width &&
      dropY >= z.y && dropY <= z.y + z.height
    );

    if (zone) {
      const updated = placedIcons.filter(i => i.x !== zone.x || i.y !== zone.y);
      updated.push({ name: iconName, x: zone.x, y: zone.y });
      setPlacedIcons(updated);
    }
  };

  return (
    <div id="container" ref={containerRef} onDrop={handleDrop} onDragOver={e => e.preventDefault()} style={{ position: 'relative' }}>
      <img id="mainImage" src="https://ik.imagekit.io/aoe2tournaments/Archer.jpg" alt="Main" />
      {targetZones.map((zone, i) => (
        <div
          key={i}
          className="zone"
          style={{
            left: zone.x,
            top: zone.y,
            width: zone.width,
            height: zone.height
          }}>
          <div className="zone-dot" />
        </div>
      ))}
      {placedIcons.map((icon, i) => (
        <img
          key={i}
          src={`/icons/${icon.name}`}
          className="dropped-icon"
          style={{
            left: icon.x + 30 - 24,
            top: icon.y + 30 - 24,
            position: 'absolute'
          }}
          alt={icon.name}
        />
      ))}
    </div>
  );
};

export default MainImageArea;
