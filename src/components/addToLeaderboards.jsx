import { Link } from "react-router-dom"

function AddToLeaderboards(props) {
    const { score } = props
    return (
        <div className="add-to-leaderboards" >
            <div className="completion">
                <p>Your score is: {score}</p>
            </div>
            <div className="add-leaderboard-form">
                <label htmlFor="username">Username:</label>
                <input type="text" />
                <Link to="leader-boards">
                    <button type="button">Submit</button>
                </Link>
            </div>
        </div>
    )
}

export default AddToLeaderboards