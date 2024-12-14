import React from 'react'
import { IoCloseSharp } from "react-icons/io5";
import ItemCard from './ItemCard';

function Cart() {
  return (
    <>
    <div className='fixed right-0 top-0 lg:w-[23vw] w-full h-full p-5 bg-white mb-3 rounded-lg'>
        <div className='flex justify-between  items-center my-3' >
            <span className='text-xl font-bold text-gray-800'>My Order</span>
            <IoCloseSharp className='border-2 border-gray-600 hover:text-red-600 hover:border-red-600 rounded-md cursor-pointer'/>
        </div>
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <div className='absolute bottom-0 pr-1 mb-2 right-2'>
            <h3 className='font-semibold text-gray-800'>Items: </h3>
            <h3 className='font-semibold text-gray-800'>Total Amount: </h3>
            <hr className='w-[90vw] lg:w-[18vw] my-3 font-bold'/>
            <button className='bg-green-600 font-bold text-white p-2 rounded-md w-[90vw] lg:w-[18vw]'>Checkout</button>
        </div>
    </div>
    </>
  )
}

export default Cart