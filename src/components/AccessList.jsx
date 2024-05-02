// ================
// accesslist.jsx
// ================

import React from 'react';

function AccessList({ title, items, listType }) {
  // Ensure items is always treated as an array
  const itemList = Array.isArray(items) ? items : [];
  const cmineItems = itemList.filter(item => item.includes('Crystal Mine'));
  const dsaItems = itemList.filter(item => item.includes('DSA Mine'));

  const listClassName = `list ${listType}`;

  return (
    <div className={listClassName}>
      <h2>{title}</h2>
      <ul>
        {cmineItems.map(item => (
          <li key={item}>{item}</li>
        ))}
        {/* Spacer to separate DSA and Crystal Mines */}
        {dsaItems.length > 0 && <li className="spacer"></li>}
        {dsaItems.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default AccessList;