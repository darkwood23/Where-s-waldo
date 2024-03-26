import { Link } from "react-router-dom"
import getScores from "../js/LeaderboardController"
import { useEffect } from "react"
import "../styles/leaderBoards.css"

const getLeaderBoards = () => {
    useEffect(() => {
        console.log(getScores())
        return getScores
    }, [])

}

function DisplayLeaderBoards() {

    // const leaderBoardArray = getLeaderBoards()
    const leaderBoardArray = []

    return (
        <div className="leaderboard-div">
            <h1>Leaderboards</h1>

            <div className="leaderboard">
                <div className="titles">
                    <h2 className="sn">S.N.</h2>
                    <h2 className="username">Username</h2>
                    <h2 className="score">Time</h2>
                </div>
                { undefined === leaderBoardArray ? '' : leaderBoardArray.map((leaders, num) => {
                    return (
                        <div className="leader-element">
                            <h3 className="sn-leaderboard">{num}</h3>
                            <h3 className="leadername">{leaders.name}</h3>
                            <h3 className="leader-score">{leaders.minutes}:{leaders.seconds}</h3>
                        </div>
                    )
                })}
            </div>
            <Link to="/game-screen">
                <button className="play-again">Play Again</button>
            </Link>
        </div>
    )
}

export default DisplayLeaderBoards