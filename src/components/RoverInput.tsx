import React, { useState } from 'react';
import { Rover } from '../types';

interface RoverInputProps {
    onSubmit: (rover: Rover) => void;
}

const RoverInput: React.FC<RoverInputProps> = ({ onSubmit }) => {
    const [position, setPosition] = useState({ x: 1, y: 2, direction: 'N' as 'N' | 'E' | 'S' | 'W' });
    const [commands, setCommands] = useState('LMLMLMLMM');

    const handleSubmit = () => {
        onSubmit({ position, commands });
    };

    return (
        <div>
            <h3>Rover Initial Position and Commands</h3>
            <input
                type="number"
                value={position.x}
                onChange={(e) => setPosition({ ...position, x: Number(e.target.value) })}
                placeholder="X"
            />
            <input
                type="number"
                value={position.y}
                onChange={(e) => setPosition({ ...position, y: Number(e.target.value) })}
                placeholder="Y"
            />
            <select
                value={position.direction}
                onChange={(e) => setPosition({ ...position, direction: e.target.value as 'N' | 'E' | 'S' | 'W' })}
            >
                <option value="N">N</option>
                <option value="E">E</option>
                <option value="S">S</option>
                <option value="W">W</option>
            </select>
            <input
                type="text"
                value={commands}
                onChange={(e) => setCommands(e.target.value)}
                placeholder="Commands"
            />
            <button onClick={handleSubmit}>Add Rover</button>
        </div>
    );
};

export default RoverInput;
