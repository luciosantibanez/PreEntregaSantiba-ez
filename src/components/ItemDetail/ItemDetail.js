import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css"


const ItemDetail = ({id, name, img, price, description}) => {
    return(
        <article>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img}/>
            </picture>
            <section>
                <p>
                    Descripcion: {description}
                </p>
                <p>
                    Precio: {price}
                </p>
                
            </section>

            <div>
                <ItemCount   />
            </div>
        </article>
    )
}
export default ItemDetail;