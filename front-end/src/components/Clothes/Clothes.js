import React from 'react'
import "./Clothes.css"
import dataClothes from '../../data/dataClothes'
import Item from '../../UI/Item'

function Clothes() {
  return (
    <div className='clothes'>
        <h1>CLOTHES IN COLLECTION</h1>
        <hr />
        <div className='clothes-item'>
            {dataClothes.map((item,i) => {
                return <Item key={i} id={item.id} 
                item={item}
                />
            })}
        </div>
    </div>
  )
}

export default Clothes