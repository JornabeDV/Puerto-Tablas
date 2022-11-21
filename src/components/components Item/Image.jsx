const Image = (props) => {
    return (
        <div className="cardImg">
            <img src={props.image} alt="imagen"></img>
        </div>
    )
}

export default Image;