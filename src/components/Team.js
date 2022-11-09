import React, { useState } from "react";
import Player from "./Player";
import Formation from "./Formation";
import './Team.css';


const Team = (props) => {

    return(
        <div className="team-card">
            <Player/>
            <Formation name={props.name}/>
            <Player/>
        </div>
    )
}

export default Team;