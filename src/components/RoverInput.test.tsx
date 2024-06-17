import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RoverInput from './RoverInput';

test('RoverInput should render and submit correct values', () => {
    const handleSubmit = jest.fn();
    render(<RoverInput onSubmit={handleSubmit} />);

    fireEvent.change(screen.getByPlaceholderText(/x/i), { target: { value: '1' } });
    fireEvent.change(screen.getByPlaceholderText(/y/i), { target: { value: '2' } });
    fireEvent.change(screen.getByDisplayValue(/n/i), { target: { value: 'N' } });
    fireEvent.change(screen.getByPlaceholderText(/commands/i), { target: { value: 'LMLMLMLMM' } });
    fireEvent.click(screen.getByText(/add rover/i));

    expect(handleSubmit).toHaveBeenCalledWith({
        position: { x: 1, y: 2, direction: 'N' },
        commands: 'LMLMLMLMM',
    });
});
