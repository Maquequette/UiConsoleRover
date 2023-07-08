import { Rover } from "../Model/Rover";
import { Obstacle } from "../Model/Obstacle";
import { Orientation } from "../Enum/Orientation";
import { Position } from "../Geometry/Position";
import { Point } from "../Geometry/Point";
import { Coordinate } from "../Geometry/Coordinate";
import { Planet } from "../Model/Planet";
import { Size } from "../Geometry/Size";
import { generateObstacles } from "../utilities/generateObstacles";
import { Symbol } from "./Symbol";
// import { Size } from "../Geometry/Size";
// import { Point } from "../Geometry/Point";
export  class Visualize {
  //////////////////////////////////////////
  //A mettre dans un objet enfant
  //////////////////////////////////////////
  private OBstacleToTODraw: Obstacle[] = generateObstacles(4, 10);
  private RoverToDraw: FakeRover;
  constructor() {
    this.RoverToDraw = new FakeRover();
  }
  BuildVisible(): String {
    // //const pointMax : Point = mapSize.getPointMax();
    // const orientation:Orientation= rover.GetOrientation();
    // const position : Position=rover.GetPosition();
    // const plan=position.getPlanet();
    // const size : Size =plan.getSize();
    // const point : Point =size.getPointMax();
    // const : number=point.GetLatitude();
    // const longitudeRover : number=point.getLongitude();
    let content: string = "";
    const hauteurplan: number = 10;
    const largeurplan: number = 10;
    for (let i: number = 0; i < hauteurplan; i++) {
      for (let j: number = 0; j < largeurplan; j++) {
        content = content + this.DrawAtCoordinate(j, i);
      }
      content = content + "\n";
    }
    return content;
  }

  private DrawAtCoordinate(X: number, Y: number): String {
    if (this.IsSomethingThere(this.RoverToDraw.getPosition(), X, Y)) {
      return this.GetRoverRepresentation(this.RoverToDraw.getOrientation());
    }
    return this.GetObstacleRepresentation(this.OBstacleToTODraw, X, Y);

    // if (!this.RoverToDraw.hasBeenWrited) {
    //     if (IsSomethingThere) {

    //     }
    //   return this.DrawRover(this.RoverToDraw.getOrientation());
    // }
    // if(){

    // }
  }
  private GetObstacleRepresentation(
    Obstacles: Obstacle[],
    X: number,
    Y: number
  ): String {
    let representation: string = Symbol.Nothing.toString();
    Obstacles?.forEach((Obstacle: Obstacle) => {
      if (this.IsSomethingThere(Obstacle.getPoint(), X, Y)) {
        representation = Symbol.Obstacle.toString();
      }
    });
    return representation;
  }
  private GetRoverRepresentation(Orientation: Orientation): String {
    switch (Orientation.toString()) {
      case "North":
        return Symbol.RoverNorth.toString();
      case "South":
        return Symbol.RoverSouth.toString();
      case "East":
        return Symbol.RoverEst.toString();
      case "West":
        return Symbol.RoverWest.toString();
      default:
        return Symbol.Nothing.toString();
    }
  }
  private IsSomethingThere(
    SomeThing: Point,
    ThereX: number,
    ThereY: number
  ): Boolean {
    let CanIdrawRoverOrObstacle: Boolean = false;
    if (
      SomeThing.GetLatitude() == ThereX &&
      SomeThing.getLongitude() == ThereY
    ) {
      CanIdrawRoverOrObstacle = true;
    }
    return CanIdrawRoverOrObstacle;
  }

  //besoin de la fonction hasobstacle
}

export class FakeRover {
  private readonly orientation: Orientation;
  private readonly position: Position;
  public hasBeenWrited: Boolean = false;
  constructor() {
    this.orientation = Orientation.South;
    this.position = new Position(
      new Point(new Coordinate(7), new Coordinate(7)),
      new Planet(new Size(new Coordinate(10), new Coordinate(10)))
    );
  }

  public getPosition(): Point {
    return this.position.getPoint();
  }
  getOrientation(): Orientation {
    return this.orientation;
  }
}
