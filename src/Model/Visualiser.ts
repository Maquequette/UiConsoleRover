import { Rover } from "./Rover";
import {Obstacle} from './Obstacle'
import { Orientation } from "../Enum/Orientation";
import { Position } from "../Geometry/Position";
import { Size } from "../Geometry/Size";
import { Point } from "../Geometry/Point";
export class visualize{
    

    constructor(){
        
    }
    Visualize( rover:Rover,ObstacleFounded : Array<Obstacle>){
        //const pointMax : Point = mapSize.getPointMax();
        const orientation:Orientation= rover.GetOrientation();
        const position : Position=rover.GetPosition();
        const plan=position.getPlanet();
        const size : Size =plan.getSize();
        const point : Point =size.getPointMax();
        const : number=point.GetLatitude();
        const longitudeRover : number=point.getLongitude();


    }
    //besoin de la fonction hasobstacle
    
}