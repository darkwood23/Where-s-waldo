function Character (props) {
    const { name, image, classList } = props
    return (
        <img src={image} alt={name} width="91px" className={classList} id={ name.toLowerCase() }/>
    )
}

export default Character