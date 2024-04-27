import React from 'react'
import "./Item.css"

const Item = (props) => {
  return (
    <div className='itemClothes'>
        <img src={props.item.clotheImg} />
        <p>{props.nameClothes}</p>
        <div className='item-prices'>
            <div className='item-price-new'>
                {props.item.new_price}
            </div>
            <div className='item-old-new'>
                {props.item.old_price}
            </div>
        </div>

    </div>
  )
}

export default Item