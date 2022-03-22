import React from "react";
import Dice from "./dice";
import Confetti from "react-confetti"


export default function DiceApp() {

    const [diceArray, setArray] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)

    React.useEffect(() => {
        const allHeld = diceArray.every(dice => dice.isHeld && dice.value)
        const firstValue = diceArray[0].value
        const allSameValue = diceArray.every(dice => dice.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
            console.log("you win")
        }

    }, [diceArray])

    function generteNewDice(id) {

        const randomNumber = Math.floor(Math.random() * 7)
        const obj = {
            value: randomNumber,
            isHeld: false,
            id: id,
        }
        return obj
    }

    function allNewDice() {
        let newArray = []
        for (let i = 0; i < 10; i++) {
            // const randomNumber = Math.floor(Math.random() * 7)
            // const obj = {
            //     value: randomNumber,
            //     isHeld: false,
            //     id: i,
            // }
            // newArray.push(obj)
            newArray.push(generteNewDice(i))
        }
        return newArray
    }


    function rollNewDice() {
        if (!tenzies) {
            setArray(oldDices => oldDices.map(dice => {
                return dice.isHeld ?
                    dice :
                    generteNewDice(dice.id)
            }))
        }
        else {
            setTenzies(false)
            setArray(allNewDice())
        }
    }

    function holdDice(diceId) {
        setArray(oldDices => oldDices.map(dice => {
            return dice.id === diceId ?
                { ...dice, isHeld: !dice.isHeld }
                : dice
        }))
    }


    const dices = diceArray.map((element) =>
        <Dice
            key={element.id}
            value={element.value}
            isHeld={element.isHeld}
            id={element.id}
            holdDice={holdDice} />)

    console.log(diceArray)

    return (

        <main>
            {tenzies && <Confetti />}
            <div className="dice--container">
                {dices}
            </div>
            <button onClick={rollNewDice}>{tenzies ? "New Game" : "Roll"}</button>
        </main>

    )
}