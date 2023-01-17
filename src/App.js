import React from 'react';
import Search from './Search';
import DigitalTimeComp from './DigitalTimeComp';
import './style.css';

export default function App() {
  return (
    <div>
      <section>
        <div className="main-header">
          <h1 style={{ flex: 2 }}>Weather</h1>
          <DigitalTimeComp />
        </div>
        <Search />
      </section>
    </div>
  );
}
