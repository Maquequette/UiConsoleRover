import { Size } from "../Geometry/Size";
import { Point } from "../Geometry/Point";


export class Planet {
  protected readonly _size: Size;

  constructor(size: Size) {
    this._size = size;
  }

  normalize(point: Point): Point {
    return point.normalize(this._size.getPointMax());
  }

  hasObstacles(point: Point): boolean {
    return false;
  }
  //Pourquoi .getPointMax n'était pas dans t'aille de la planete
  getSize():Size{
    return this._size;
  }

}
