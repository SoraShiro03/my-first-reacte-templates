import React from "react";
import "../style.css"
import Shiro from "../images/shiro.jpg"
export default function Card() {
    return (
        <div className="card">
            <img src={Shiro}></img>
            <p>
                we want no game no life season 2
            </p>
            <a className="my-link" href="#">Read More</a>
        </div>
    )
}
