function StartGame(props) {
    return (
        <div className="start-game-holder">
            <img src={props.image} alt={props.alt} className="waldo-image"/>
            <h1 className="title">Where's Waldo?</h1>
            <button className="start-game">Start Game!</button>
        </div>
    )
}

export default StartGame