import React from "react";

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.src}/>
            <div className="description">
                <h5 className="game-name">{props.game}</h5>
                <h6 className="game-type">{props.type}</h6>
                <button>Rules</button>
            </div>
        </div>
    )
}

export default Card