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
                    itemUno = "SNOW"
                    itemDos = "SKATE"
                    itemTres = "SURF"
                    itemCuatro = "LONG"
                />
            </nav>    

            <div className="containerCart">
                <CartWidget />
            </div>
        </header>
    )

}

export default NavBar;
