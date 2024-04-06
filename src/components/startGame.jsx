import { Link } from "react-router-dom"
import "../styles/startGame.css"
import GlowingWaldo from "./glowingWaldo"

function StartGame() {
    return (
        <div className="start-game-holder">
            <GlowingWaldo classList='svgGlow' w='200' h='200' />
            <h1 className="title">Where's Waldo?</h1>
            <div className="buttons">
                <Link to="/game-screen">
                    <button className="btn">Start Game!</button>
                </Link>
                <Link to="/leader-boards">
                    <button className="btn">Check Leaderboards</button>
                </Link>
            </div>
        </div>
    )
}

export default StartGame