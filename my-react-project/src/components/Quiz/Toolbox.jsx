import React from 'react';

const Toolbox = ({ icons, onDragStart }) => (
  <div id="toolbox" style={{ display: 'flex', flexWrap: 'wrap' }}>
    {icons.map(name => (
      <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 4 }}>
        <img
          src={`/icons/${name}`}
          alt={name}
          width={48}
          height={48}
          draggable
          onDragStart={e => onDragStart(e, name)}
        />
        <div style={{ fontSize: 10 }}>{name.replace('CivIcon-', '').replace('.webp', '')}</div>
      </div>
    ))}
    <p style={{ marginTop: 10, fontSize: 10, color: '#fff', maxWidth: 200 }}>
      <i className="bi bi-info-circle"></i> Icons are reusable for outer circles
    </p>
  </div>
);

export default Toolbox;
