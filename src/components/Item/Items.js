import React from "react";
import Esc from "../assets/escritorioClaro.png"
import "../Item/Items.css"
import { Link } from "react-router-dom";





function Items() {
return (
    <div className="item">
        <span className="tituloItem">Escritorio Clare</span>
        <img className="imgItem" src={Esc} />
        <span className="precioItem">$15.000</span>
        <Link to={`/items/${id}`} className="btnItem">Agregar al Carrito</Link>
    </div>
)
}



export default Items;