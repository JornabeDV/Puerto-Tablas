import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import ItemList from "../ItemList/ItemList";
import Banner from "../Banner/Banner";
// ---------- CSS
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "products");
    if (categoryId) {
      let queryFilter = query(
        queryCollection,
        where("category", "==", categoryId)
      );
      getDocs(queryFilter)
        .then((resp) =>
          setProduct(resp.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      getDocs(queryCollection)
        .then((resp) =>
          setProduct(resp.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [categoryId]);

  return (
    <div className="ItemListContainer">
      {loading ? (
        <h2 className="cargando">Cargando...</h2>
      ) : (
        <>
          {" "}
          <Banner /> <ItemList product={product} />
        </>
      )}
    </div>
  );
};

export default ItemListContainer;
