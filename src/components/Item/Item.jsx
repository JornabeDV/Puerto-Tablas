import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="cardContainer">
      <Link to={`/detail/${product.id}`}>
        <div className="cardBody">
          <img src={product.urlimg} />
        </div>
        <div className="cardFooter">
          <div>{product.name}</div>
          <div>${product.price}</div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
