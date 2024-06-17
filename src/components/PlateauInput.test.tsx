import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PlateauInput from './PlateauInput';

test('PlateauInput should render and submit correct values', () => {
    const handleSubmit = jest.fn();
    render(<PlateauInput onSubmit={handleSubmit} />);

    fireEvent.change(screen.getByPlaceholderText(/width/i), { target: { value: '5' } });
    fireEvent.change(screen.getByPlaceholderText(/height/i), { target: { value: '5' } });
    fireEvent.click(screen.getByText(/set plateau/i));

    expect(handleSubmit).toHaveBeenCalledWith({ width: 5, height: 5 });
});
