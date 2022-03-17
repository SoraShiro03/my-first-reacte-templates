import React from "react";
import boxData from "../box-data";
//import Box from "./box";

// export function Box(props) {
//     const [mybox, setBox] = React.useState(props.flip)

//     function toogle(e) {
//         console.log("clicked!", e)
//         setBox(prevBox => !prevBox)
//     }
//     const my_style = {
//         backgroundColor: mybox ? "#fff" : "cyan",
//     }
//     return (
//         // style only work js-objects
//         <div key={props.id} style={my_style} className="box--normal" onClick={toogle}>
//             <p>{props.id}</p>
//             <p>{props.flip}</p>
//         </div>
//     )
// }
// export default function BoxGroup() {

//     const boxes = boxData.map(
//         (box) => <Box key={box.id} id={box.id} flip={box.flip} />
//     )

//     return (
//         <div className="box--group">
//             {boxes}
//         </div>
//     )
// }


// from parent to child components

export default function BoxGroup() {
    const [boxes, setBox] = React.useState(boxData)

    function toogle(id) {
        console.log("box id: ", id)
        // setBox(prevBox => {
        //     const new_list = []
        //     for (let i = 0; i < prevBox.length; i++) {
        //         if (prevBox[i].id == id) {
        //             new_list.push({ ...prevBox[i], flip: !prevBox[i].flip })
        //         }
        //         else {
        //             new_list.push(prevBox[i])
        //         }
        //     }
        //     console.log(new_list)
        //     return new_list
        // })
        setBox(prevBox => {
            return prevBox.map((mybox) => {
                return mybox.id == id ? { ...mybox, flip: !mybox.flip } : mybox
            })

        })

    }

    const myboxes = boxes.map(
        (box) => <Box key={box.id} id={box.id} flip={box.flip} handleClick={toogle} />
    )

    return (
        <div className="box--group">
            {myboxes}
        </div>
    )
}

export function Box(props) {

    const my_style = {
        backgroundColor: props.flip ? "#fff" : "cyan",
    }
    return (
        <div style={my_style} onClick={() => props.handleClick(props.id)} className="box--normal">
            <p>{props.id}</p>
        </div>
    )
}