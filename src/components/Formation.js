import React, { useState } from "react";
import FullCup from "../assets/FullCup.png";
import HalfCup from "../assets/HalfCup.png";
import EmptyCup from "../assets/EmptyCup.png";
import './Formation.css';

const Formation = (props) => {

    const [cups, setState] = useState(
        [
            {
                id: 1,
                status: "full"
            },
            {
                id: 2,
                status: "full"
            },
            {
                id: 3,
                status: "full"
            },
            {
                id: 4,
                status: "full"
            },
            {
                id: 5,
                status: "full"
            },
            {
                id: 6,
                status: "full"
            },
            {
                id: 7,
                status: "full"
            },
        ]
    );

    const renderCup = (cupId) => {
        
        const cup = cups.find(cup => cup.id === cupId)

        const imgSrc = () => {
            switch (cup.status) {
                case 'full':
                    return FullCup
                case 'half':
                    return HalfCup
                case 'empty':
                    return EmptyCup
                default:
                    return null
            }
        }

        return (
            <img id={cup.id} src={imgSrc()} onClick={() => {drinkCup(cup.id)}}/>
        )        
    }

    const drinkCup = (cupId) => {

        const updatedCups = cups.map (cup => {
            if (cup.id === cupId) {
                if (cup.status === 'full') {
                    return {...cup, status: 'half'};
                } else if (cup.status === 'half') {
                    return {...cup, status: 'empty'};
                } else if (cup.status === 'empty') {
                    return {...cup, status: 'full'};
                }
            }
            return cup;
        });

        setState(updatedCups);

    };
    
    const renderTeamOne = () => {
        return(
            <div>
                <div className="row">
                    {renderCup(7)}
                </div>
                <div className="row">
                    {renderCup(4)}
                    {renderCup(5)}
                    {renderCup(6)}
                </div>
                <div className="row">
                    {renderCup(2)}
                    {renderCup(3)}
                </div>
                <div className="row">
                    {renderCup(1)}
                </div>
            </div>
        )
    }  

    const renderTeamTwo = () => {
        return(
            <div>
                <div className="row">
                    {renderCup(1)}
                </div>
                <div className="row">
                    {renderCup(2)}
                    {renderCup(3)}
                </div>
                <div className="row">
                    {renderCup(4)}
                    {renderCup(5)}
                    {renderCup(6)}
                </div>
                <div className="row">
                    {renderCup(7)}
                </div>
            </div>
        )
    }   

    



    return(
        <div className="formation-card">
            { props.name === "one" ?
                renderTeamOne() :
                renderTeamTwo()
                
            }
        </div>
    )
}

export default Formation;