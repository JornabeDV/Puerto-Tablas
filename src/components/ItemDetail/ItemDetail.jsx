import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import ItemCount from "../ItemCount/ItemCount";
import { GrMoney } from "react-icons/gr";
// CSS
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
  const [isCounter, setIsCounter] = useState(true);
  const { cartList, addToCart } = useCartContext();

  const onAdd = (quantity) => {
    addToCart({ ...product, quantity });
    setIsCounter(false);
  };

  return (
    <>
      <div className="detailContainer">
        <div className="detailBody">
          <img src={product.urlimg} />
          <div className="detailData">
            <div className="detailDataTitle">{product.name}</div>
            <div className="detailDataPrice">
              <GrMoney /> ${product.price}
            </div>
            <div className="detailDataStock">Disponibles: {product.stock}</div>
            <div className="detailDataDescription">{product.description}</div>
          </div>
          {isCounter ? (
            <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
          ) : (
            <div>
              <button>
                <Link to="/Cart">Terminar compra</Link>
              </button>
              <button>
                <Link to="/">Seguir comprando</Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
