import { Coordinate } from "./Coordinate";
import { Position } from "./Position";
import { Size } from "./Size";

export class Point {
  private readonly _latitude: Coordinate;
  private readonly _longitude: Coordinate;

  constructor(latitude: Coordinate, longitude: Coordinate) {
    this._latitude = latitude;
    this._longitude = longitude;
  }

  public normalize(point: Point): Point {
    return new Point(
      this._latitude.normalize(point._latitude),
      this._longitude.normalize(point._longitude)
    );
  }
  public GetLatitude(): number{
    return this._latitude.GetValue();
  }
  public getLongitude():number{
    return this._longitude.GetValue();
  }
  public incrementLongitude(): Point {
    return new Point(this._latitude, this._longitude.add());
  }

  public decrementLongitude(): Point {
    return new Point(this._latitude, this._longitude.substract());
  }

  public incrementLatitude(): Point {
    return new Point(this._latitude.add(), this._longitude);
  }

  public decrementLatitude(): Point {
    return new Point(this._latitude.substract(), this._longitude);
  }

  public isSamePoint(point: Point): boolean {
    return (
      this._latitude.equal(point._latitude) &&
      this._longitude.equal(point._longitude)
    );
  }
}
