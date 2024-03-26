import Coordinate from "./Coordinate"

const addCoordinate = async function(character, right, left, bottom, top) {
    if (character && right && left && bottom && top) {
        const coordinate = new Coordinate({
            character,
            left,
            right,
            bottom,
            top
        })

        await coordinate.save()
    } else {
        return {
            message: "Error adding coordinates",
        }
    }
}

const getCoordinates = async function (character) {
    const coordinate = await Coordinate.find({ character }).exec()

    return coordinate
}

export default { addCoordinate: addCoordinate, getCoordinates: getCoordinates }