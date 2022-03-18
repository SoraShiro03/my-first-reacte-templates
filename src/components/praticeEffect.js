import React from "react";


export default function PraticeEffect() {
    const [count, setCount] = React.useState(1)
    const [starWArData, setStarWarData] = React.useState({})

    console.log("rendered!")
    React.useEffect(() => {
        console.log(count, "render!")
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(resp => resp.json())
            .then(data => setStarWarData(data))
    }, [count])

    function nextCharacter() {
        setCount(prevState => prevState + 1)
    }

    return (
        <div className="pratice--container">
            <h1 onClick={nextCharacter}>the current count{count}</h1>
            <p>
                {JSON.stringify(starWArData)}
            </p>

        </div>
    )
}