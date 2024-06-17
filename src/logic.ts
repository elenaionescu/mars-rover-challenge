// src/logic.ts
import { Position } from './types';

const directions = ['N', 'E', 'S', 'W'] as const;

export const moveRover = (position: Position, commands: string, plateau: { width: number; height: number }): Position => {
    let { x, y, direction } = position;

    const turnLeft = () => {
        direction = directions[(directions.indexOf(direction) + 3) % 4];
    };

    const turnRight = () => {
        direction = directions[(directions.indexOf(direction) + 1) % 4];
    };

    const moveForward = () => {
        switch (direction) {
            case 'N':
                if (y < plateau.height) y++;
                break;
            case 'E':
                if (x < plateau.width) x++;
                break;
            case 'S':
                if (y > 0) y--;
                break;
            case 'W':
                if (x > 0) x--;
                break;
        }
    };

    for (const command of commands) {
        if (command === 'L') turnLeft();
        else if (command === 'R') turnRight();
        else if (command === 'M') moveForward();
    }

    return { x, y, direction };
};
