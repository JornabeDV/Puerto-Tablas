import Image from "./Image";
import "../../styles/cardItem.css";
import Description from "./Description";
import ButtonDetails from "./ButtonDetails";
import ButtonAddCart from "./ButtonAddCart";


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
                <ButtonDetails />
                <ButtonAddCart />
            </div>

        </div>
    )
}

export default CardItem;