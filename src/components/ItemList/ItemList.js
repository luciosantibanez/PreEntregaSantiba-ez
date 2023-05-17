import "./ItemList.css"
import ItemDetail from "../ItemDetail/ItemDetail";
import Item from "../Item/Items";

const ItemList = ({products}) => {
    return (
        <div>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList;