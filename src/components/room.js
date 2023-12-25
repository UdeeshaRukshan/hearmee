// Room.jsx
import React from 'react';
import '../App.css';

const boxStyle = {
    
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '20vh',
  width: '30vh',
  height: '25vh',
  backgroundColor: 'yellow',
  margin: 'auto',
  borderRadius: '20px',
  padding: '10px',
  flexDirection: 'column',
  position: 'relative',
};

const boxStyle2 = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '50px',
  backgroundColor: 'green',
  color: 'white',
  borderBottomLeftRadius: '10px',
  borderBottomRightRadius: '10px',
  position: 'absolute',
  bottom: '0',
};

const textStyle = 'floatText';
const joinH= 'join';
export default function Room() {
  return (
    <div style={boxStyle} className="floatTextContainer">
      <h3 className={textStyle}>This text should be left to right float</h3>
      <div className={joinH} style={boxStyle2}>
        <h3>Join</h3>
      </div>
    </div>
  );
}
