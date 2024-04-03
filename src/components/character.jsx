function Character (props) {
    const { name, image, classList, ky } = props
    return (
        <img src={image} alt={name} width="91px" className={classList} id={ name.toLowerCase() } key={ky}/>
    )
}

export default Character