import React from 'react';
import Room from '../components/room'; // Adjust the path based on your project structure
import '../App.css';

const Catalog = () => {
  const maxItemsPerRow = 3; // Set your desired maximum items per row

  return (
    <div style={{ marginTop: '10vh', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
      {[...Array(10)].map((_, index) => (
        <Room key={index} />
      ))}
      <div style={{ flex: `0 0 ${100 / maxItemsPerRow}%` }}></div>
      {/* Add an empty div to fill the row and center the last row if needed */}
    </div>
  );
};

export default Catalog;
