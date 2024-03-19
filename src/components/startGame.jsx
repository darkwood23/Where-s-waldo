import { Link } from "react-router-dom"

function StartGame() {
    return (
        <div className="start-game-holder">
            <h1 className="title">Where's Waldo?</h1>
            <div className="buttons">
                <Link to="/game-screen">
                    <button className="start-game">Start Game!</button>
                </Link>
                <Link to="/leader-boards">
                    <button className="leader-boards-checkout-btn">Check Leaderboards</button>
                </Link>
            </div>
        </div>
    )
}

export default StartGame