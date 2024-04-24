import React from 'react'
import Hello from '../components/Hero/Hello'
import ProductList from '../container/Product/ProductList'
import InforCard from '../InforCard.js/InforCard'

export const Shop = () => {
  return (
    <div>
      <Hello />
      <ProductList />
      <InforCard />
    </div>
  )
}

export default Shop
