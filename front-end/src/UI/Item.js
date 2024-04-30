import React from 'react'
import "./Item.css"

const Item = (props) => {
  return (
    <div className='itemClothes'>
        <img src={props.item.image} />
        <p>{props.item.name}</p>
        <div className='item-prices'>
            <div className='item-price-new'>
                ${props.item.new_price}
            </div>
            <div className='item-price-old'>
                ${props.item.old_price}
            </div>
        </div>

    </div>
  )
}

export default Item