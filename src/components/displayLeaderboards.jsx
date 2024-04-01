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
                <table className="table">
                    <thead>
                        <tr className="titles">
                            <th className="sn">S.N.</th>
                            <th className="username">Username</th>
                            <th className="score">Time</th>
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        {leaderBoardArray.map((leaders, num) => {
                            return (
                                <tr className="leader-element" key={num}>
                                    <td className="sn-leaderboard">{num + 1}</td>
                                    <td className="leadername">{leaders.username}</td>
                                    <td className="leader-score">{leaders.minutes}:{leaders.seconds}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <Link to="/game-screen">
                <button className="play-again">Play Again</button>
            </Link>
        </div>
    )
}

export default DisplayLeaderBoards