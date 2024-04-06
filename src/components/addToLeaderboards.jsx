import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "../styles/addToLeaderboard.css"

function AddToLeaderboards(props) {
    const navigate = useNavigate()

    const { minutes, seconds } = props
    const [formData, setFormData] = useState({
        username: '',
        seconds: seconds,
        minutes: minutes
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }

    const submitForm = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post('http://localhost:8000/api/leaderboards/add', formData)
            console.log("Form data added successfully", response.data)
            setFormData({ ...formData, username: ''})
        } catch (error) {
            console.log("Error while adding form data", error)
        }

        navigate("/leader-boards")
    }

    return (
        <div className="add-to-leaderboards" >
            <div className="completion">
                <p>You finished in {minutes} minutes and {seconds} seconds </p>
            </div>
            <div className="add-leaderboard-form">
                <form action="" method="POST" onSubmit={submitForm}>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" onChange={handleChange} value={formData.username}/>
                    <input type="number" onChange={handleChange} value={formData.minutes} name="minutes" id="minutes" style={{ display: "none"}}  />
                    <input type="number" onChange={handleChange} value={formData.seconds} name="seconds" id="seconds" style={{ display: "none"}} />
                    <button type="submit" className="btn">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddToLeaderboards