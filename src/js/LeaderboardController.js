const Leaderboard = require("./Leaderboard")

exports.default.getScores = async function () {
    const allLeaderboardItems = await Leaderboard.find().exec()

    return {
        items: allLeaderboardItems
    }
}

exports.default.addScores = async function (username, score) {
    if (username && score) {
        const leaderboardItem = new Leaderboard({
            username: username,
            score: score
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