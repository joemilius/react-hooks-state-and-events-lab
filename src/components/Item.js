import React from "react";
import {useState} from 'react';

function Item({ name, category }) {
  const [itemAdded, setItemAdded] = useState(false)

  function handleItemAdded(){
    setItemAdded(!itemAdded)
  }
  
  return (
    <li className={!itemAdded ? "" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleItemAdded}>Add to Cart</button>
    </li>
  );
}

export default Item;
