import { useEffect, useState } from "react";
import { getProductsById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProducts] = useState (null)

    useEffect   (() => {
        getProductsById ("1")
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return(
        <div>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer;