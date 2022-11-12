import React, { useState } from "react";
import Player from "./Player";
import Formation from "./Formation";
import './Team.css';


const Team = (props) => {

    return(
        <div className="team-card">
            <Player name={props.name}/>
            <Formation name={props.name}/>
            <Player name={props.name}/>

        </div>
    )
}

export default Team;