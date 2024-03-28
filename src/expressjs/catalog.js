const express = require("express")
const router = express.Router()

const CoordinateController = require("./CoordinateController")
const LeaderboardController = require("./LeaderboardController")

router.get("/api/leaderboards", LeaderboardController.get_leaderboard_data)
router.get("/api/coordinates", CoordinateController.get_coordinate)

router.post("/api/leaderboards/add", LeaderboardController.add_leaderboard_data)
router.post("/api/coordinates/add", CoordinateController.add_coordinate)

module.exports = router