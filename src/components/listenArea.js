import React, { useState, useEffect } from 'react';

export default function ListenArea() {
  const [ws, setWs] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [songName, setSongName] = useState('Dasoul feat. Fito Blanko & Maffio'); // Update with your actual song name

  useEffect(() => {
    const newWs = new WebSocket('ws://localhost:8000');

    newWs.onopen = () => {
      console.log('WebSocket connected');
    };

    newWs.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'state') {
        setIsPlaying(data.isPlaying);
        setCurrentTime(data.currentTime);
        setDuration(data.duration); // Update the duration when received from the server
      }
    };

    newWs.onclose = () => {
      console.log('WebSocket disconnected');
    };

    setWs(newWs);

    return () => {
      newWs.close();
    };
  }, []);

  const playPauseHandler = () => {
    const newIsPlaying = !isPlaying;
    ws.send(JSON.stringify({ type: 'state', isPlaying: newIsPlaying, currentTime }));
    setIsPlaying(newIsPlaying);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const progressBarStyle = {
    width: duration ? `${(currentTime / duration) * 100}%` : '0%', // Updated to check if duration is available
    height: '5px',
    backgroundColor: '#61dafb',
  };

  return (
    <div style={{ ...playerStyle, textAlign: 'center' }}>
      <h2>{songName}</h2>
      <audio
        src="/audio"
        controls
        onLoadedMetadata={(e) => setDuration(e.target.duration)}
      />
      <div style={{ width: '30%', backgroundColor: '#ccc' }}>
        <div style={progressBarStyle}></div>
      </div>
      <p>{formatTime(currentTime)} / {formatTime(duration)}</p>
      <button style={buttonStyle} onClick={playPauseHandler}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
}

const playerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#282c34',
  color: 'white',
  fontSize: 'calc(10px + 2vmin)',
};

const buttonStyle = {
  marginTop: '20px',
  padding: '10px 20px',
  fontSize: 'calc(10px + 2vmin)',
  backgroundColor: '#61dafb',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};
