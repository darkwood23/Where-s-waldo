import GameScene from "./gameScene"
import Waldo from "../images/waldo_400x400.png"
import Wilma from "../images/wilma_400x400.png"
import Wizard from "../images/wizard_400x400.png"
import { useState, useEffect } from "react"
import Character from "./character"
import "../styles/gameScreen.css"
import AddToLeaderboards from "./addToLeaderboards"

function GameScreen () {
    const [ characterFound, changeCharacterFound ] = useState([
        { name: 'waldo', found: false, src: Waldo },
        { name: 'wilma', found: false, src: Wilma },
        { name: 'wizard', found: false, src: Wizard }
    ])

    const [ found, setFound ] = useState([])

    const [ seconds, setSeconds ] = useState(0)
    const [ minutes, setMinutes ] = useState(0)

    if (seconds === 60) {
        setSeconds(0)
        setMinutes(minutes + 1)
    }

    useEffect(() => {
        const id = setInterval(() => setSeconds((oldSecond) => oldSecond + 1), 1000)

        return () => {
            clearInterval(id)
        }
    })

    // setFound([ ...found, characterFound.filter((character) => character.found === true)])

    // if(setFound.length === 3) {
    //     return (
    //         <AddToLeaderboards minutes={minutes} second={seconds}/>
    //     )
    // }


    return (
        <div className="game-screen">
            <div className="time">
                <h1>Elapsed Time:</h1>
                <h1>{minutes} : {seconds}</h1>
            </div>
            <h2>Find these: </h2>   
            <div className="to-find">
                {characterFound.map((character) => {
                    return <Character name={character.name} image={character.src} classList="characters-found" />
                })}
            </div>
            <GameScene changeCharacterFound={changeCharacterFound}></GameScene>
        </div>
    )
}

export default GameScreen