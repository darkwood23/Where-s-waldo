import Waldo from '../images/waldo_400x400.png'
import Wilma from "../images/wilma_400x400.png"
import Wizard from "../images/wizard_400x400.png"
import Scene from "../images/scene-winter.jpeg"

const { getCoordinates } = require("../js/CoordinateController")

import "../styles/gameScreen.css"

import Character from "./character"

import { useState } from 'react'

function GameScreen () {

    const [ characterFound, changeCharacterFound ] = useState(0)

    const [clicked, setClicked] = useState(false)
    const [clickXPos, setClickXPos] = useState(0)
    const [clickYPos, setClickYPos] = useState(0)
    const [targetBoxWidth, setTargetBoxWidth] = useState(0)

    const handleTargetClick = (e) => {
        setClicked(true)
        setClickXPos(e.pageX)
        setClickYPos(e.pageY)
        setTargetBoxWidth(0.05 * e.target.clientWidth)
    }

    function characterSelected(e) {
        const scene = document.querySelector(".scene")

        const clickXCoordInScene = (clickXPos - scene.offsetLeft) / scene.clientWidth
        const clickYCoordInScene = (clickYPos - scene.offsetTop) / scene.clientWidth

        const characterName = e.target.id
        const character = getCoordinates(characterName)

        const checkClickedCoords = async function () {
            const charCoords = await character

            if (
                charCoords.left <= clickXCoordInScene &&
                charCoords.right >= clickXCoordInScene &&
                charCoords.bottom >= clickYCoordInScene &&
                charCoords.top <= clickYCoordInScene
            ) {
                changeCharacterFound(characterName)
                setClicked(false)
            } else {
                setClicked(false)
            }
        }

        checkClickedCoords()
    }

    if (clicked) {
        return (
            <div>
                <button className='scene-btn' type='button' onClick={handleTargetClick}>
                    <img src={Scene} alt="Where's waldo?" className='snow-scene' width="1880px" height="1200px" />
                </button>
                <div style={{
                    left: clickXPos - targetBoxWidth / 2,
                    top: clickYPos - targetBoxWidth / 2
                }} className='target-container'>
                    <div className="targeting-box" />
                    <div className="character-targets">
                        <button className="select-character" id="waldo" onClick={characterSelected}>
                            <Character name="Waldo" image={Waldo}></Character>
                        </button>
                        <button className="select-character" id="wilma" onClick={characterSelected}>
                            <Character name="Wilma" image={Wilma}></Character>
                        </button>
                        <button className="select-character" id="wizard" onClick={characterSelected}>
                            <Character name="Wizard" image={Wizard}></Character>
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    if(!clicked) {
        return (
            <button className='screen-btn' type='button' onClick={handleTargetClick}>
                <img src={Scene} alt="Where's waldo scene" width="1880px" height="1200px" className='App' />
            </button>
        )
    }
}

export default GameScreen