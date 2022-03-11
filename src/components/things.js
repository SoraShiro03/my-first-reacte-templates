import React from 'react'

export default function Things() {
    const [myState, chagneState] = React.useState(['Thing 1', 'Thing 2'])

    function addItem() {
        chagneState(prevState => [...prevState, `Thing ${prevState.length + 1}`])
    }
    function removeItem() {
        chagneState(prevState => {
            prevState.pop()

            return [...prevState]
        })

    }
    console.log(myState)

    let things = myState.map((state) => <p>{state}</p>)
    return (
        <div className='things'>
            <div className='things--button'>
                <button onClick={addItem}>Add Thing</button>
                <button onClick={removeItem}>Remove Thing</button>
            </div>
            <div>{things}</div>
        </div>
    )
}