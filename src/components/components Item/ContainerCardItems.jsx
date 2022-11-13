import CardItem from "./CardItem";
import fetchSimulation from "../../utils/fetchSimulation";
import products from "../../utils/products";
import { useState, useEffect } from "react";
import "../../styles/containerCardItems.css";

const ContainerCardItems = () => {
    const [ datos, setDatos ] = useState( [] );

    useEffect( () => {
        fetchSimulation(products, 2000)
        .then (resp => console.log(resp))
        .catch (error => console.log(error))
    }, [])


    return (
        <div className="containerCardItems">
            {
                datos.map( products => (
                    <CardItem 
                        key={products.id}
                        image={products.imageProducts.firstImage}
                        title={products.title}
                        quantity={products.quantity}
                        price={products.price}
                    />    
                ))
            }   
        </div>
    )
}

export default ContainerCardItems;