import React, { useState } from "react";
import './ItemCount.css'

function ItemCount() {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };

  const Decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="count">
      <p>Items seleccionados: {count}</p>
        <div>
            <button onClick={Increment}>Agregar</button>
            <button onClick={Decrement}>Quitar</button>
        </div>
    </div>
  );
}

export default ItemCount;
