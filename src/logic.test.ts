import { moveRover } from './logic';
import { Position } from './types';

describe('moveRover', () => {
    const plateau = { width: 5, height: 5 };

    test('should move rover correctly according to commands', () => {
        let position: Position = { x: 1, y: 2, direction: 'N' };
        let commands = 'LMLMLMLMM';
        let expected: Position = { x: 1, y: 3, direction: 'N' };
        expect(moveRover(position, commands, plateau)).toEqual(expected);

        position = { x: 3, y: 3, direction: 'E' };
        commands = 'MMRMMRMRRM';
        expected = { x: 5, y: 1, direction: 'E' };
        expect(moveRover(position, commands, plateau)).toEqual(expected);
    });

    test('should not move rover outside the plateau', () => {
        let position: Position = { x: 0, y: 0, direction: 'S' };
        let commands = 'MMM';
        let expected: Position = { x: 0, y: 0, direction: 'S' };
        expect(moveRover(position, commands, plateau)).toEqual(expected);

        position = { x: 5, y: 5, direction: 'N' };
        commands = 'MMM';
        expected = { x: 5, y: 5, direction: 'N' };
        expect(moveRover(position, commands, plateau)).toEqual(expected);
    });
});
