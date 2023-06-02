import React from "react";
import Esc from "../assets/escritorioClaro.png"
import Esc2 from "../assets/escritorio.png"
import Esc3 from "../assets/escritorioOscuro.png"
import Esc4 from "../assets/escritorioPieBlanco.webp"

import "../Item/Items.css"
import { Link } from "react-router-dom";





function Items() {
return (
    <div className="contenedor">
    <div className="item">
        
        <span className="tituloItem">Escritorio Clare</span>
        <img className="imgItem" src={Esc} />
        <span className="precioItem">$15.500</span>
        <Link to={`/items/${Esc}`} className="btnItem">Agregar al Carrito</Link>
    </div>
    <div className="item">
        <span className="tituloItem">Escritorio Black</span>
        <img className="imgItem" src={Esc2} />
        <span className="precioItem">$19.000</span>
        <Link to={`/items/${Esc}`} className="btnItem">Agregar al Carrito</Link>
    </div>
    <div className="item">
        <span className="tituloItem">Escritorio Oscuro</span>
        <img className="imgItem" src={Esc3} />
        <span className="precioItem">$15.000</span>
        <Link to={`/items/${Esc}`} className="btnItem">Agregar al Carrito</Link>
    </div>
    <div className="item">
        <span className="tituloItem">Escritorio Pie Black</span>
        <img className="imgItem" src={Esc2} />
        <span className="precioItem">$12.000</span>
        <Link to={`/items/${Esc}`} className="btnItem">Agregar al Carrito</Link>
    </div>

    </div>
)
}



export default Items;