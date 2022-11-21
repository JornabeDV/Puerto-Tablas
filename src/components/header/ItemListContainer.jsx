import { Link } from 'react-router-dom';

function ItemListContainer(props) {
    return (
        <ul>
            <li>
                <Link to = "category/SNOW" >
                    {props.itemOne} 
                </Link>
            </li>
            <li>
                <Link to = "category/SKATE" > 
                    {props.itemTwo} 
                </Link>
            </li>
            <li>
                <Link to = "category/SURF" > 
                    {props.itemThree} 
                </Link>
            </li>
            <li>
                <Link to = "category/LONG" > 
                    {props.itemFour} 
                </Link>
            </li>
        </ul>
    )
}

export default ItemListContainer;