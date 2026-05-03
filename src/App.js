import React, { useState, useEffect } from 'react';

const signs = ["Cipactli", "Ehecatl", "Calli", "Cuetzpalin", "Coatl", "Miquiztli", "Mazatl", "Tochtli", "Atl", "Izcuintli", "Ozomatli", "Malinalli", "Acatl", "Ocelotl", "Quauhtli", "Cozcaquauhtli", "Olin", "Tecpatl", "Quiahuitl", "Xochitl"];
const lords = ["Xiuhtecuhtli (Fire)", "Itztli (Stone)", "Piltzintecuhtli (Sun)", "Centeotl (Maize)", "Mictlantecuhtli (Death)", "Chalchiuhtlicue (Water)", "Tlazolteotl (Filth-Eater)", "Tepeyollotl (Heart of Hill)", "Tlaloc (Rain)"];

function App() {
  const [data, setData] = useState({ number: 1, name: "ACATL", lord: "ITZTLI", time: "" });

  useEffect(() => {
    const sync = () => {
      const now = new Date();
      const offsetTime = new Date(now.getTime() - (12 * 60 * 60 * 1000));
      const anchor = new Date("2026-05-02T00:00:00");
      const diffDays = Math.floor((offsetTime - anchor) / (1000 * 60 * 60 * 24));
      let num = (1 + diffDays) % 13 || 13;
      let sIdx = (12 + diffDays) % 20;
      let lIdx = (1 + diffDays) % 9;
      setData({
        number: num,
        name: signs[sIdx >= 0 ? sIdx : sIdx + 20].toUpperCase(),
        lord: lords[lIdx >= 0 ? lIdx : lIdx + 9].toUpperCase(),
        time: now.toLocaleTimeString()
      });
    };
    sync();
    const timer = setInterval(sync, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div style={{ backgroundColor: '#050505', minHeight: '100vh', color: '#FFD700', fontFamily: 'monospace', padding: '40px' }}>
      <div style={{ border: '4px double #FFD700', padding: '40px' }}>
        <p>NODE: MCDERMITT_STATION | [ {data.time} ]</p>
        <div style={{ textAlign: 'center', margin: '40px 0' }}>
          <h1 style={{ fontSize: '12rem', margin: '0' }}>{data.number}</h1>
          <h2 style={{ fontSize: '5rem', letterSpacing: '15px' }}>{data.name}</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div style={{ border: '1px solid #FFD700', padding: '15px' }}>
            <small style={{ color: '#888' }}>YOALTEUCTLI_CORE</small>
            <h3>{data.lord}</h3>
          </div>
          <div style={{ border: '1px solid #FFD700', padding: '15px' }}>
            <small style={{ color: '#888' }}>SYSTEM_STATUS</small>
            <h3>STABLE_SYNC</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
