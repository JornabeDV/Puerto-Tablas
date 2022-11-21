import Image from "./Image";
import "../../styles/cardItem.css";
import Description from "./Description";
import ButtonDetails from "./ButtonDetails";
import ButtonAddCart from "./ButtonAddCart";
import { Link } from "react-router-dom";

const CardItem = (props) => {
    return (
        <div className="cardItems">
            <Image 
                image = {props.image} 
            />    
            <Description 
                title = {props.title} 
                quantity = {props.quantity}
                price = {props.price}
            />
            <div className="buttons">
                <Link to={ `/item/${props.id}` }>
                    <ButtonDetails 
                        txt="Ver detalles" 
                    />
                </Link>

                <ButtonAddCart />
            </div>

        </div>
    )
}

export default CardItem;