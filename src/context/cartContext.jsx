import { useState, useContext, createContext } from "react";

const CartContext = createContext([]);
// Creo esta función para ahorrarme importar cartContext y useContext.
export const useCartContext = () => useContext(CartContext);

const cartContextProvider = ({ children }) => {
  // Definir variables y funciones globales a inyectar en "value" luego.
  const [cartList, setCartList] = useState([]);

  const isInCart = (id) => cartList.findIndex((product) => product.id === id); //Busco con el index el ID igual para que no se dupliquen los productos.

  const addToCart = (newProductCart) => {
    let index = isInCart(newProductCart.id);
    if (index === -1) {
      setCartList([...cartList, newProductCart]); //Hago ...spread para mantener lo que tengo en cartList y le agrego el newProductCart. Lo hago así porque quiero que sea una lista, uso un array.
    } else {
      cartList[index].quantity += newProductCart.quantity;
      setCartList([...cartList]);
    }
  };
  const deleteCart = () => {
    setCartList([]);
  };
  const removeItemCart = (productId) => {
    setCartList(cartList.filter((product) => product.id !== productId));
  };
  const totalQuantity = () => {
    return cartList.reduce((count, product) => (count += product.quantity), 0);
  };
  const totalPrice = () => {
    return cartList.reduce(
      (sumPrice, product) => (sumPrice += product.quantity * product.price),
      0
    );
  };
  return (
    <CartContext.Provider
      value={{
        cartList, //Inyecto el estado.
        addToCart, //Función que actualiza/modifica el estado.
        deleteCart, //Función que deja vacio el carrito.
        removeItemCart,
        totalQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default cartContextProvider;
