import React from "react";
import "./Clothes.css";
import dataClothes from "../../data/dataClothes";
import Item from "../../UI/Item";

function Clothes() {
  return (
    <section id="clothes">
      <div className="clothes">
        <h1>CLOTHES</h1>
        <hr />
        <div className="clothes-item">
          {dataClothes.map((item, i) => {
            return <Item key={i} id={item.id} color={item.color} item={item} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Clothes;
