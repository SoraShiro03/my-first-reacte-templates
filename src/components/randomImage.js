import React from "react"
import MyImageData from "../image_data.js"

export default function RandomImage() {

    const [state, changeState] = React.useState("https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819__340.jpg")


    function getImage() {

        const random_number = Math.floor(Math.random() * MyImageData.length)
        console.log("Random: ", random_number, "data: ", MyImageData.length)
        const image = MyImageData[random_number].image
        return image
    }
    function getRandom() {
        changeState(prevState => {
            prevState = getImage()
            return prevState
        })
    }
    console.log(state)
    return (
        <div>
            <button onClick={getRandom}>Get Image</button>
            <img src={state}></img>

        </div>
    )
}