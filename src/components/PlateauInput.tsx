import React, { useState } from 'react';

interface PlateauInputProps {
    onSubmit: (plateau: { width: number; height: number }) => void;
}

const PlateauInput: React.FC<PlateauInputProps> = ({ onSubmit }) => {
    const [width, setWidth] = useState(5);
    const [height, setHeight] = useState(5);

    const handleSubmit = () => {
        onSubmit({ width, height });
    };

    return (
        <div>
            <h3>Plateau Size</h3>
            <input
                type="number"
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
                placeholder="Width"
            />
            <input
                type="number"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                placeholder="Height"
            />
            <button onClick={handleSubmit}>Set Plateau</button>
        </div>
    );
};

export default PlateauInput;
