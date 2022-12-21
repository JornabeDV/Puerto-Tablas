import React from "react";
import { useState } from "react";
import "./ItemCount.css";

function ItemCount({ initial, stock = product.stock, onAdd }) {
  const [quantity, setQuantity] = useState(initial);

  const sumar = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };
  const restar = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const addQuantity = () => {
    onAdd(quantity);
  };

  return (
    <div className="itemCountContainer">
      <div className="itemCountButton">
        <button onClick={restar}>-</button>
        <label>{quantity}</label>
        <button onClick={sumar}>+</button>
      </div>
      <div className="itemCountAdd">
        <button onClick={addQuantity}>Agregar al carrito</button>
      </div>
    </div>
  );
}

export default ItemCount;
