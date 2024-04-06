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
        { name: 'waldo', found: false, src: Waldo, key: 'waldo' },
        { name: 'wilma', found: false, src: Wilma, key: 'wilma' },
        { name: 'wizard', found: false, src: Wizard, key: 'wizard' }
    ])

    const [ foundCharacters, setFoundCharacters ] = useState(0)

    const [ seconds, setSeconds ] = useState(0)
    const [ minutes, setMinutes ] = useState(0)

    const [ isRunning, setIsRunning ] = useState(true)

    if (seconds === 60) {
        setSeconds(0)
        setMinutes(minutes + 1)
    }

    const changeFound = (character) => {
        const newFound = characterFound.map((char) => {
            if (char.name === character) {
                return {
                    ...char,
                    found: true
                }
            } else {
                return char
            }
        })

        changeCharacterFound(newFound)
    }

    const addFound = () => {
        setFoundCharacters(foundCharacters + 1)
    }

    useEffect(() => {
        let id
        if (isRunning) {
            id = setInterval(() => setSeconds((oldSecond) => oldSecond + 1), 1000)
        }
        return () => {
            clearInterval(id)
        }
    }, [isRunning, minutes, seconds])

    useEffect(() => {
        if (foundCharacters === 3) {
            setIsRunning(false)
        }
    })


    if (foundCharacters !== 3) {
        return (
            <div className="game-screen">
                <div className="time">
                    <h1>Elapsed Time:</h1>
                    <h1>{minutes} : {seconds}</h1>
                </div>
                <h2>Find these: </h2>   
                <div className="to-find">
                    {characterFound.map((character) => {
                        if (character.found) {
                            return <Character name={character.name} image={character.src} classList="characters-found found" ky={character.key}/>
                        } else {
                            return <Character name={character.name} image={character.src} classList="characters-found" ky={character.key}/>
                        }
                    })}
                </div>
                <GameScene changeFound={changeFound} addFound={addFound}></GameScene>
            </div>
        )
    } else {
        return (
            <AddToLeaderboards minutes={minutes} seconds={seconds}/>
        )
    }
}

export default GameScreen