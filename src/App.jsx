import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";

import CartContextProvider from "./context/cartContext";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/categoria/:categoryId"
            element={<ItemListContainer />}
          />
          <Route path="/detail/:productId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
