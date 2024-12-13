import React from 'react'
import NavBar from '../Components/NavBar'
import CategoryMenu from '../Components/CategoryMenu'
import FoodItems from '../Components/FoodItems'

function Home() {
  return (
    <>
    <NavBar />
    <CategoryMenu />
    <FoodItems />
    </>
  )
}

export default Home