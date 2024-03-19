import { Link } from "react-router-dom"

function DisplayLeaderBoards(props) {

    return (
        <div className="leaderboard-div">
            <h1>LeaderBoards</h1>

            <div className="leaderboard">
                <div className="titles">
                    <h2 className="sn">S.N.</h2>
                    <h2 className="username">Username</h2>
                    <h2 className="score">Score</h2>
                </div>
                {props.leaderBoardArray.map((leaders, num) => {
                    return (
                        <div className="leader-element">
                            <h3 className="sn-leaderboard">{num}</h3>
                            <h3 className="leadername">{leaders.name}</h3>
                            <h3 className="leader-score">{leaders.score}</h3>
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