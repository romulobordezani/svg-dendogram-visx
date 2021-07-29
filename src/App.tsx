import React from 'react';
import './App.css';
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import CockPitControlled from './components/cockpit';

function App() {
  return (
      <ParentSize>{({ width, height }) => <CockPitControlled width={width} height={height} />}</ParentSize>
  );
}

export default App;
