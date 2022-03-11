import React from "react";

export default function MyState() {
    const [current, changeState] = React.useState(0)
    console.log(current, changeState)

    // function Increment() {
    //     changeState(current + 1)
    // }
    // function Decrement() {
    //     changeState(current - 1)
    // }

    //best pratice
    function Increment() {
        changeState(prevState => prevState + 1)
    }
    function Decrement() {
        changeState(prevState => prevState - 1)
    }

    return (
        <div className="myState">

            <h1 onClick={Increment}>Increment</h1>
            <h1>{current}</h1>
            <h1 onClick={Decrement}>Decrement</h1>

        </div>
    )
}