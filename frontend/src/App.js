import React from 'react'
import CustomItemContext from './context/ItemContext'
import Header from './componets/Header'
import ProductList from './componets/ProductList.js'
import './App.css'

const App = () => {
  return (
   <CustomItemContext>
    <Header />
    <ProductList />
   </CustomItemContext>
  )
}

export default App
