import React, { useState,useEffect } from "react";
import  {Visualize}  from "../../UI/Visualiser";

const Map  = ()=>{
    const [content,setContent] = useState("");

    useEffect(() => {
        const visualize=new Visualize();
        
        console.log(visualize.BuildVisible())

    })
    return (
        <div>d</div> 
    )
}

export default Map