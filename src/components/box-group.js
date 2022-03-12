import React from "react";
import boxData from "../box-data";
//import Box from "./box";

export function Box(props) {
    const [mybox, setBox] = React.useState(props.flip)

    function toogle(e) {
        console.log("clicked!", e)
        setBox(prevBox => !prevBox)
    }
    const my_style = {
        backgroundColor: mybox ? "#fff" : "cyan",
    }
    return (
        // style only work js-objects
        <div key={props.id} style={my_style} className="box--normal" onClick={toogle}>
            <p>{props.id}</p>
            <p>{props.flip}</p>
        </div>
    )
}
export default function BoxGroup() {

    const boxes = boxData.map(
        (box) => <Box key={box.id} id={box.id} flip={box.flip} />
    )

    return (
        <div className="box--group">
            {boxes}
        </div>
    )
}
