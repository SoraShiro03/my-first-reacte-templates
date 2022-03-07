import React from "react";
import "../style.css"
import Card from "./card";

export default function CardGroup() {
    return (
        <div className="card-group">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}