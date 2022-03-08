import React from "react";
import "../style.css"
import Card from "./card";
import data from "../my-card-data.js"

export default function CardGroup() {

    let mycard = data.map((item) => {

        return (
            <Card
                // name={item.name}
                // description={item.description}
                // image={item.image}
                {...item}
            />
        )
    })
    return (
        <div className="card-group">
            {mycard}
        </div>
    )
}