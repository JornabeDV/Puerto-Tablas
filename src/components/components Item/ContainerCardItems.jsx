import CardItem from "./CardItem";
import fetchSimulation from "../../utils/fetchSimulation";
import products from "../../utils/products";
import { useState, useEffect } from "react";
import "../../styles/containerCardItems.css";
import { useParams } from "react-router-dom";

const ContainerCardItems = () => {
    const [ datos, setDatos ] = useState( [] );
    const { idCategory } = useParams();

    useEffect(() => {          
        if(idCategory == undefined) {
            fetchSimulation(products, 1500)
            .then (resp => setDatos(resp))
            .catch (error => console.log(error))
        } else {
            fetchSimulation(products.filter(filter => filter.type == idCategory ), 1500)
            .then (resp => setDatos(resp))
            .catch (error => console.log(error))
        }

    }, [idCategory])


    return (
        <div className="containerCardItems">
            {
                datos.map( product => (
                    <CardItem 
                        key={product.id}
                        id={product.id}
                        image={product.imageProduct.firstImage}
                        title={product.title}
                        quantity={product.quantity}
                        price={product.price}
                    />    
                ))
            }   
        </div>
    )
}

export default ContainerCardItems;