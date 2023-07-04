import { Orientation } from "../Enum/Orientation";
import { Position } from "../Geometry/Position";
import { RoverInterface } from "../Interface/RoverInterface";
import { State } from "./State";

export class Rover implements RoverInterface {
  private _state: State;

  constructor(orientation: Orientation, position: Position) {
    this._state = new State(orientation, position);
  }

  turnLeft(): State {
    this._state = this._state.counterClockwiseRotation();
    return this._state;
  }

  turnRight(): State {
    this._state = this._state.clockwiseRotation();
    return this._state;
  }

  moveForward(): State {
    this._state = this._state.moveForward();
    return this._state;
  }

  moveBackward(): State {
    this._state = this._state.moveBackward();
    return this._state;
  }
}
