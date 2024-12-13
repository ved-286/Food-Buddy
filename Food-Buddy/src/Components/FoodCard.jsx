import React from 'react'
import { FaStar } from "react-icons/fa";

function FoodCard() {
  return (
    <div className='font-bold w-[250px] p-5 bg-white flex flex-col rounded-lg gap-2'>
        <img className='w-full h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out ' src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5" alt="" />
        <div className='flex justify-between text-sm'>
          <h2>Onion Pizza</h2>
          <span className='text-green-500'>$150</span>
        </div>
        <p className='text-sm font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, reiciendis?</p>
        <div className='flex justify-between '>
          <span className='flex justify-between items-center'>
          <FaStar className='mr-1 text-yellow-400' /> 4.5
          </span>
          <button className='p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm'>Add to Cart</button>
        </div>
    </div>
  )
}

export default FoodCard