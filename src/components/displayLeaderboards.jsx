import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import "../styles/leaderBoards.css"
import axios from "axios"

function DisplayLeaderBoards() {
    const [leaderBoardArray, setLeaderBoardArray] = useState([])
    const [data, setData] = useState()

    useEffect(() => {
        axios.get("http://localhost:8000/api/leaderboards").then(
            response => {
                setLeaderBoardArray(response.data.items)
            }
        ).catch (error => {
            console.log(error)
        })
    }, [])

    return (
        <div className="leaderboard-div">
            <h1>Leaderboards</h1>

            <div className="leaderboard">
                <div className="titles">
                    <h2 className="sn">S.N.</h2>
                    <h2 className="username">Username</h2>
                    <h2 className="score">Time</h2>
                </div>
                {leaderBoardArray.map((leaders, num) => {
                    return (
                        <div className="leader-element">
                            <h3 className="sn-leaderboard">{num}</h3>
                            <h3 className="leadername">{leaders.username}</h3>
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