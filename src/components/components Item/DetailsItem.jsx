import Image from "./Image";
import Description from "./Description";
import "../../styles/detailsItem.css";
import AddCantCart from "./AddCantCart";
import ButtonDetails from "./ButtonDetails";
import fetchSimulation from "../../utils/fetchSimulation";
import products from "../../utils/products";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const DetailsItem = () => {
    const [ datos, setDatos ] = useState( [] );
    const { idItem } = useParams();

    useEffect( () => {
        fetchSimulation(products.filter(flt => flt.id == idItem), 1500)
        .then (resp => setDatos(resp))
        .catch (error => console.log(error))
    }, [idItem])

    return (
        <div className="detailsItem">
            {
                datos.map ( items => (
                    <>
                        <div className="containerLeft">
                            <Image
                                image={items.imageProduct.firstImage}
                            />
                        </div>

                        <div className="containerRight">
                                <Description
                                    title = {datos[0].title}
                                    text = {datos[0].description} 
                                    quantity = {datos[0].stock}
                                    price = {datos[0].price}
                                />
                            <div className="buttons">
                                <AddCantCart
                                    quantity = {5}
                                />

                                <ButtonDetails
                                    txt="Agregar al Carrito"
                                />
                            </div>
                        </div>
                    </>
                ))
            }
        </div>
    )    

}

export default DetailsItem;