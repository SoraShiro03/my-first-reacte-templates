import React from "react";

export default function Dice(props) {
    let styles = {
        backgroundColor: ""
    }
    return (
        <div onClick={() => props.holdDice(props.id)} style={props.isHeld ? { backgroundColor: "#59E391" } : { backgroundColor: "#fff" }} className="dice">
            <h1>{props.value}</h1>
            <h1>{props.isHeld}</h1>
        </div>
    )
} 