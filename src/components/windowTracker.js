import React from "react";

export default function WindowTracker(props) {
    const [windowResizeValue, setValue] = React.useState(window.innerWidth)

    React.useEffect(() => {
        function watchWidth() {
            console.log("Setting Up")
            setValue(window.innerWidth)
        }

        window.addEventListener('resize', watchWidth)
        //show ? window.addEventListener('resize', resizeWindow) : window.removeEventListener('resize', watchWidth)
        return function () {
            console.log("cleaning Up")
            window.removeEventListener('resize', watchWidth)
        }
    }, [])

    return (
        <div>
            <h1>{props.name}</h1>
            <h1>Show: "{props.show}"</h1>
            <h1>{window.innerWidth}</h1>
        </div>
    )
}