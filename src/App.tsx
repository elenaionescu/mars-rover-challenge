// src/App.tsx
import React, { useState } from 'react';
import PlateauInput from './components/PlateauInput';
import RoverInput from './components/RoverInput';
import { Rover, Position } from './types';
import { moveRover } from './logic';

const App: React.FC = () => {
  const [plateau, setPlateau] = useState<{ width: number; height: number } | null>(null);
  const [rovers, setRovers] = useState<Rover[]>([]);
  const [finalPositions, setFinalPositions] = useState<Position[]>([]);

  const handleAddRover = (rover: Rover) => {
    setRovers((prev) => [...prev, rover]);
  };

  const handleStartExploration = () => {
    if (plateau) {
      const results = rovers.map((rover) => moveRover(rover.position, rover.commands, plateau));
      setFinalPositions(results);
    }
  };

  return (
      <div>
        <h1>Mars Rover Challenge</h1>
        <PlateauInput onSubmit={setPlateau} />
        <RoverInput onSubmit={handleAddRover} />
        <button onClick={handleStartExploration}>Start Exploration</button>
        <h2>Final Positions</h2>
        {finalPositions.map((pos, index) => (
            <div key={index}>
              Rover {index + 1}: {pos.x} {pos.y} {pos.direction}
            </div>
        ))}
      </div>
  );
};

export default App;
