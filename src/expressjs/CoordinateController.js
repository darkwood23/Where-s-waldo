const Coordinate = require("./Coordinate")
const asyncHandler = require("express-async-handler")

module.exports.get_coordinate = asyncHandler ( async (req, res, next) => {
    const coordinate = await Coordinate.findOne({ character: req.body.character }).exec()

    if(coordinate) {
        res.status(200).json({
            message: 'Coordinates found successfully',
            coordinate
        })
    } else {
        res.status(404).json({
            message: 'Error finding coordinates'
        })
    }
})

module.exports.add_coordinate = asyncHandler( async (req, res, next) => {
    const coordinate = new Coordinate({
        character: req.body.character,
        left: req.body.left,
        right: req.body.right,
        bottom: req.body.bottom,
        top: req.body.top
    })

    const exists = await Coordinate.findOne({ character: req.body.character }).exec()

    if(exists) {
        res.status(409).json({
            message: 'Coordinates of character are already added',
        })
    } else {
        await coordinate.save()
        res.status(200).json({
            message: 'Coordinates added successfully'
        })
    }
})