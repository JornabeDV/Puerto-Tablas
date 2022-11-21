import Brand1 from "../../assets/img/puertoTablas.png";
import { Link } from "react-router-dom";

function Brand() {
    return (
        <Link to = "/" >
            <img src={Brand1} alt="Mi Tienda" title="Tienda Puerto Tablas"></img>
        </Link>
    );
} 

export default Brand;