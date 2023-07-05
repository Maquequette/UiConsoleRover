import { Orientation } from "./src/Enum/Orientation";
import { Planet } from "./src/Model/Planet";
import { Rover } from "./src/Model/Rover";
import { Coordinate } from "./src/Geometry/Coordinate";
import { Size } from "./src/Geometry/Size";
import { State } from "./src/Model/State";
import { PositionBuilder } from "./src/utilities/Builder/PositionBuilder";
import {PlanetWithObstacles} from './src/Model/PlanetWithObstacles'
import { Point } from "./src/Geometry/Point";
import { Obstacle } from "./src/Model/Obstacle";
const planet = new Planet(new Size(new Coordinate(7), new Coordinate(15)));
const positionBuilder = new PositionBuilder(0, 0, planet).build();

const planetWithObstacles = new PlanetWithObstacles( new Size( new Coordinate(2), new Coordinate(2)), [
    new Obstacle( new Point( new Coordinate(0), new Coordinate(7)) ),
    new Obstacle( new Point( new Coordinate(1), new Coordinate(0)) ),
    new Obstacle( new Point( new Coordinate(1), new Coordinate(1)) )])

const wall_e: Rover = new Rover(
        Orientation.North,
        new PositionBuilder(0, 0, planetWithObstacles).build()
      );
      console.log(planetWithObstacles,positionBuilder);
      //console.log(wall_e.turnLeft());
  
