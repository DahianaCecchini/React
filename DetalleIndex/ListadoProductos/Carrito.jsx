import React from "react";

export const Carrito = () => {
    return (
        <section>
<div id= "segundaColumna">
    <h1 className="detalleP">DETALLE PEDIDO</h1>
    <ul id="carrito">
        <li>
            <p>PIZZA</p>
            CANT.<input id="cantidad" />
            PRECIO<input id="precio" />
        </li>
        <li>
            <p>PIZZA</p>
            CANT.<input id="cantidad" />
            PRECIO<input id="precio" />
        </li>
    </ul>
</div>
</section>
    )
}