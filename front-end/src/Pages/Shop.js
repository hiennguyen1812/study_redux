import React from 'react'
import Clothes from '../components/Clothes/Clothes'
import Hello from '../components/Hero/Hello'
import ProductList from '../components/Product/ProductList'
import InforCard from '../InforCard.js/InforCard'

export const Shop = () => {
  return (
    <div>
      <Hello />
      <ProductList />
      <Clothes />
      <InforCard />
    </div>
  )
}

export default Shop
