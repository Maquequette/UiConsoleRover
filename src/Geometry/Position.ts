import { Planet } from "../Model/Planet";
import { Point } from "./Point";
import { Size } from "./Size";

export class Position {
  private readonly _point: Point;
  private readonly _planet: Planet;

  constructor(point: Point, planet: Planet) {
    this._point = planet.normalize(point);
    this._planet = planet;
  }
  getPoint():Point{
    return this._point;
  }
  getPlanet():Planet{
    return this._planet;
  }
  incrementLatitudeIfAvailable(): Position {
    return this.goIfValidPosition(
      new Position(this._point.incrementLatitude(), this._planet)
    );
  }

  decrementLatitudeIfAvailable(): Position {
    return this.goIfValidPosition(
      new Position(this._point.decrementLatitude(), this._planet)
    );
  }

  incrementLongitudeIfAvailable(): Position {
    return this.goIfValidPosition(
      new Position(this._point.incrementLongitude(), this._planet)
    );
  }

  decrementLongitudeIfAvailable(): Position {
    return this.goIfValidPosition(
      new Position(this._point.decrementLongitude(), this._planet)
    );
  }

  isSamePosition(position: Position): boolean {
    return position._point.isSamePoint(this._point);
  }

  goIfValidPosition(position: Position) {
    if (!this._planet.hasObstacles(position._point)) {
      return position;
    }
    return this;
  }
}
