import React from "react";
import "../style.css"

export default function Card(props) {

    return (
        <div className="card">

            <div className="card--image">
                <h2>Online</h2>
                <img src={props.image}></img>
            </div>
            <h1>{props.name}</h1>
            <p>
                {props.description}
            </p>
            <a className="my-link" href="#">Read More</a>

        </div>
    )
}
