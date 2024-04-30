import React from 'react'
import Clothes from '../components/Clothes/Clothes'
import Hello from '../components/Hero/Hello'
import ProductList from '../components/Product/ProductList'
import InforCard from '../About/InforCard'
import Offer from '../components/Offer/Offer'

export const Shop = () => {
  return (
    <div>
      <Hello />
      <ProductList />
      <Clothes />
      <Offer />
      <InforCard />
    </div>
  )
}

export default Shop
