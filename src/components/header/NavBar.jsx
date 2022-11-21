import Brand from "./Brand";
import ItemListContainer from "./ItemListContainer";
import CartWidget from "./CartWidget";

function NavBar() {
    return (
        <header>
            <div className="containerBrand">
                <Brand/>
            </div>

            <nav className="containerItemList">
                <ItemListContainer
                    itemOne = "SNOW"
                    itemTwo = "SKATE"
                    itemThree = "SURF"
                    itemFour = "LONG"
                />
            </nav>    

            <div className="containerCart">
                <CartWidget />
            </div>
        </header>
    )

}

export default NavBar;
