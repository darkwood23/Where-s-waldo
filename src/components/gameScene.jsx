import Waldo from '../images/waldo_400x400.png'
import Wilma from "../images/wilma_400x400.png"
import Wizard from "../images/wizard_400x400.png"
import Scene from "../images/scene-winter.jpeg"

import "../styles/gameScene.css"

import Character from "./character"

import { useEffect, useState } from 'react'
import axios from 'axios'

function GameScene (props) {

    const { changeFound, addFound } = props

    const [clicked, setClicked] = useState(false)
    const [clickXPos, setClickXPos] = useState(0)
    const [clickYPos, setClickYPos] = useState(0)
    const [targetBoxWidth, setTargetBoxWidth] = useState(0)
    const [allCoordinates, setAllCoordinates] = useState()

    const handleTargetClick = (e) => {
        setClicked(true)
        setClickXPos(e.pageX)
        setClickYPos(e.pageY)
        setTargetBoxWidth(0.05 * e.target.clientWidth)
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/coordinates").then(
            response => {
                setAllCoordinates(response.data.coordinates)
            }
        ).catch(error => {
            console.log(error)
        })
    }, [])
    

    function characterSelected(e) {
        const scene = document.querySelector(".scene")

        const clickXCoordInScene = (clickXPos - scene.offsetLeft) / scene.clientWidth
        const clickYCoordInScene = (clickYPos - scene.offsetTop) / scene.clientWidth

        const checkClickedCoords = async function () {
            const charCoords = allCoordinates.filter((coord) => coord.character === e.target.id)

            if (
                charCoords[0].left <= clickXCoordInScene &&
                charCoords[0].right >= clickXCoordInScene &&
                charCoords[0].bottom >= clickYCoordInScene &&
                charCoords[0].top <= clickYCoordInScene
            ) {
                changeFound(e.target.id)
                addFound()
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
                    <img src={Scene} alt="Where's waldo?" className="scene" width="1880px" height="1200px" />
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

export default GameScene