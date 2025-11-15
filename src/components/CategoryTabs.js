import React from 'react';

export default function CategoryTabs() {
  const tabs = ["All", "Hollywood", "Nollywood", "Bollywood", "Western", "K-Drama"];

  return (
    <div className="tabs">
      {tabs.map(t => (
        <button className="tab" key={t}>{t}</button>
      ))}
    </div>
  );
}