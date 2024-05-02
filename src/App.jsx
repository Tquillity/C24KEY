// ================
// app.jsx
// ================

import React, { useState, useEffect } from 'react';
import SelectInput from './components/SelectInput';
import AccessList from './components/AccessList';
import { rankOptions, lokaOptions, killsOptions } from './data/config.js';
import { checkCrystalMines, checkDSAMines } from './utilities/accessControl';
import './style.scss';

function App() {
  const [rankCVC, setRankCVC] = useState('');
  const [lokaPledged, setLokaPledged] = useState('');
  const [kills, setKills] = useState('');
  const [accessList, setAccessList] = useState({ allowed: new Set(["Crystal Mine Level 1 (FFA)", "DSA Mine Level 1 & 2 (FFA)"]), denied: new Set() });

  useEffect(() => {
    // Start with fresh sets every time the inputs change but keep FFA mines in allowed
    let accesses = { allowed: new Set(["Crystal Mine Level 1 (FFA)", "DSA Mine Level 1 & 2 (FFA)"]), denied: new Set() };

    // Check for Crystal Mines
    accesses = checkCrystalMines(rankCVC, lokaPledged, kills, accesses);
    
    // Check for DSA Mines
    accesses = checkDSAMines(rankCVC, lokaPledged, kills, accesses);

    // Update state with the new calculations
    setAccessList({
      allowed: Array.from(accesses.allowed),
      denied: Array.from(accesses.denied)
    });
  }, [rankCVC, lokaPledged, kills]); // Dependencies listed here

  return (
    <div className="App">
      <SelectInput label="Select CVC Rank:" value={rankCVC} onChange={e => setRankCVC(e.target.value)} options={rankOptions} />
      <SelectInput label="Select LOKA Pledged:" value={lokaPledged} onChange={e => setLokaPledged(e.target.value)} options={lokaOptions} />
      <SelectInput label="Select Number of Kills:" value={kills} onChange={e => setKills(e.target.value)} options={killsOptions} />

      <AccessList title="Accessible Mines" items={accessList.allowed} listType="accessible" />
      <AccessList title="Inaccessible Mines" items={accessList.denied} listType="inaccessible" />
    </div>
  );
}

export default App;
