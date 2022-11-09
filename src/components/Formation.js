import React, { useState } from "react";
import FullCup from "../assets/FullCup.png";
import './Formation.css';

const Formation = (props) => {


    const renderTeamOne = () => {
        return(
            <div>
                <div className="first-row">
                    <img id="1" src={FullCup}/>
                </div>
                <div className="second-row">
                    <img id="2" src={FullCup}/>
                    <img id="3" src={FullCup}/>
                </div>
                <div className="third-row">
                    <img id="4" src={FullCup}/>
                    <img id="5" src={FullCup}/>
                    <img id="6" src={FullCup}/>
                </div>
                <div className="fourth-row">
                    <img id="7" src={FullCup}/>
                </div>
            </div>
        )
    }   

    

    const renderTeamTwo = () => {
        return(
            <div>
                <div className="row">
                    <img id="7" src={FullCup}/>
                </div>
                <div className="row">
                    <img id="4" src={FullCup}/>
                    <img id="5" src={FullCup}/>
                    <img id="6" src={FullCup}/>
                </div>
                <div className="row">
                    <img id="2" src={FullCup}/>
                    <img id="3" src={FullCup}/>
                </div>
                <div className="row">
                    <img id="1" src={FullCup}/>
                </div>
            </div>
        )
    }  

    return(
        <div className="formation-card">
            { props.name === "one" ?
                renderTeamTwo() :
                renderTeamOne()
            }
        </div>
    )
}

export default Formation;