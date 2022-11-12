import React, { useState } from "react";
import './Player.css';

const Player = (props) => {
    const [name, setName] = useState("Player")
    const [editName, setEditName] = useState(false)
    const [hits, setHits] = useState(0);
    const [sinks, setSinks] = useState(0);
    const [saves, setSaves] = useState(0);
    const [errors, setErrors] = useState(0);

    const increaseHits = () => {
        setHits(hits+1);
    }

    const decreaseHits = () => {
        if (hits > 0) {
            setHits(hits-1);
        }
    }

    const increaseSinks = () => {
        setSinks(sinks+1);
    }

    const decreaseSinks = () => {
        if (sinks > 0) {
            setSinks(sinks-1);
        }
    }

    const increaseSaves = () => {
        setSaves(saves+1);
    }

    const decreaseSaves = () => {
        if (saves > 0) {
            setSaves(saves-1);
        }
    }

    const increaseErrors = () => {
        setErrors(errors+1);
    }

    const decreaseErrors = () => {
        if (errors > 0) {
            setErrors(errors-1);
        }
    }

    return (
        <div className={`player-card ${props.name}`}>
            { 
                editName ?
                <form onSubmit={ () => {setEditName(!editName)}}>
                    <input 
                        value={name}
                        onChange={e => setName(e.target.value)}
                        autoFocus
                        maxLength={12}
                    />
                </form> :
                <div className="player-name">
                    <button onClick={ () => {setEditName(!editName)}}>x</button>
                    <label className="player-name">{name}</label>
                </div>    
            }

            <div className="player-stat-list">

                <div className="player-stat">
                    <button onClick={decreaseHits}>-</button>
                    <p>{hits} { hits == 1 ? "Hit" : "Hits"}</p>
                    <button onClick={increaseHits} class="hits">+</button>
                </div>

                <div className="player-stat">
                    <button onClick={decreaseSinks}>-</button>
                    <p>{sinks} Sinks</p>
                    <button onClick={increaseSinks}>+</button>
                </div>
                    
                <div className="player-stat">    
                    <button onClick={decreaseSaves}>-</button>
                    <p>{saves} Saves</p>
                    <button onClick={increaseSaves}>+</button>
                </div>
                
                <div className="player-stat">
                    <button onClick={decreaseErrors}>-</button>
                    <p>{errors} Errors</p>
                    <button onClick={increaseErrors}>+</button>
                </div>  

            </div>

        </div>
    )

}

export default Player;