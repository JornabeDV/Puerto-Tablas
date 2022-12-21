import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// CSS
import "./Cart.css";

const Cart = () => {
  const { cartList, deleteCart, removeItemCart, totalPrice } = useCartContext();
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let order = {};
    order.buyer = { dataForm };
    order.total = totalPrice();
    order.items = cartList.map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price,
    }));

    const db = getFirestore();
    const queryCollection = collection(db, "orders");
    addDoc(queryCollection, order)
      .then((order) => {
        const orderId = `Código de la compra: ${order.id}`;
        alert(orderId);
      })
      .finally(() => {
        setDataForm({
          name: "",
          email: "",
          phone: "",
        });
        deleteCart();
      });
  };
  const handleOnChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="cartContainer">
      <h1>Carrito</h1>
      {cartList.lenght !== 0 ? (
        <>
          <ul>
            {cartList.map((product) => (
              <li className="cartData" key={product.id}>
                <img src={product.urlimg} alt="Imagen del producto" />
                <h3>{product.name}</h3> - Cantidad: {product.quantity}
                <button onClick={() => removeItemCart(product.id)}>X</button>
              </li>
            ))}
          </ul>
          <label>{totalPrice() !== 0 && totalPrice()}</label>
          <button onClick={deleteCart}>Borrar todo</button>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              onChange={handleOnChange}
              value={dataForm.name}
              placeholder="Nombre"
            />
            <input
              type="text"
              name="email"
              onChange={handleOnChange}
              value={dataForm.email}
              placeholder="example@email"
            />
            <input
              type="text"
              name="reemail"
              onChange={handleOnChange}
              placeholder="Reingrese su mail"
            />
            <input
              type="text"
              name="phone"
              onChange={handleOnChange}
              value={dataForm.phone}
              placeholder="Número de teléfono"
            />
            <button>Terminar compra</button>
          </form>
        </>
      ) : (
        <h2>
          El carrito no tiene productos <Link to="/">Ir a comprar</Link>
        </h2>
      )}
    </div>
  );
};

export default Cart;
