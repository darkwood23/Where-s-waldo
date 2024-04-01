import { Link } from "react-router-dom"

function AddToLeaderboards(props) {
    const { minutes, seconds } = props
    return (
        <div className="add-to-leaderboards" >
            <div className="completion">
                <p>You finished in {minutes} minutes and {seconds} seconds </p>
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