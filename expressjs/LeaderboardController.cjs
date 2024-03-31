const Leaderboard = require("./Leaderboard.cjs")
const asyncHandler = require("express-async-handler")

module.exports.get_leaderboard_data = asyncHandler( async (req, res, next) => {
    const allLeaderboardItems = await Leaderboard.find().exec()

    res.status(200).json({
        status: 200,
        items: allLeaderboardItems
    })
})

module.exports.add_leaderboard_data = asyncHandler( async (req, res, next) => {
    const leaderboard = new Leaderboard({
        username: req.body.username,
        seconds: req.body.seconds,
        minutes: req.body.minutes
    })

    const exists = await Leaderboard.findOne({ username: req.body.username }).exec()

    if(exists) {
        res.status(409).json({
            message: 'This username already exists'
        })
    } else {
        await leaderboard.save()
        res.status(200).json({
            message: 'User created successfully',
            item: leaderboard
        })
    }
})