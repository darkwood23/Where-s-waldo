import Leaderboard from "./Leaderboard"

const getScores = async function () {
    const allLeaderboardItems = await Leaderboard.find().exec()

    return allLeaderboardItems
}

const addScores = async function (username, seconds, minutes) {
    if (username && seconds && minutes) {
        const leaderboardItem = new Leaderboard({
            username: username,
            seconds: seconds,
            minutes: minutes
        })

        await leaderboardItem.save()

        return {
            message: "User added to leaderboard successfully"
        }
    } else {
        return {
            message: "Error saving leaderboard items"
        }
    }
}

export default { getScores: getScores, addScores: addScores}