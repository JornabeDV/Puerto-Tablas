import cart from "../../assets/img/cart.svg";

function CartWidget () {
    return (
        <div className="containerLenght">

         <img src={cart} alt="cart"/>
            
            <span className="cantCart">
                1
            </span>

        </div>

    )
}

export default CartWidget