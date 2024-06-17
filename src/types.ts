export interface Position {
    x: number;
    y: number;
    direction: 'N' | 'E' | 'S' | 'W';
}

export interface Rover {
    position: Position;
    commands: string;
}

export interface Plateau {
    width: number;
    height: number;
}