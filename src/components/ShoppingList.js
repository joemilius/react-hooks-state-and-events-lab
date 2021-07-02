import React from "react";
import Item from "./Item";
import {useState} from 'react';

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All")
  

  const listToDisplay = items.filter(food => {
    if (selectedCategory === "All"){
      return true
    }else {
      return food.category === selectedCategory
    }
  })
  
  function handleCategory(event){
      setSelectedCategory(event.target.value)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {listToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
