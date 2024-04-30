import React from 'react'
import "./Deals.css"
import dataDeals from '../../data/dataDeals'
import Item from '../../UI/Item'

const Deals = () => {
  return (
    <div className='new-deals'>
        <h1>NEW DEALS</h1>
        <hr />
        <div className='deals'>
            {dataDeals.map((item,i) => {
                return <Item key={i} item={item} />
            })}
        </div>
    </div>
  )
}

export default Deals