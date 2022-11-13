const Description = (props) => {
    return (
        <div className="cardDescription">
            <h3 className="title">
                {props.title}
            </h3>

            <div className="description">
                <span className="descriptionTitle">Descripción:</span> 
                <p className="text">
                    {props.text}
                </p>
            </div>
            
            <span className="quantity">
                    Cantidad: {props.quantity}
            </span>

            <span className="price">
                    ${props.price}
            </span>
        </div>
    )
}

export default Description;