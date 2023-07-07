export class Symbol {
    static RoverWest: Symbol = new Symbol("←");
    static RoverNorth: Symbol = new Symbol("↑");
    static RoverEst: Symbol = new Symbol("→");
    static RoverSouth: Symbol = new Symbol("↓");
    static Obstacle: Symbol = new Symbol("O");
    static Nothing: Symbol = new Symbol("*");

    private readonly _representation: string;
  
    private constructor(representation: string) {
      this._representation = representation;
    }
  
  
    toString(): string {
      return this._representation;
    }
  }
  