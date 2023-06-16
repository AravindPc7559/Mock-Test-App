import React from 'react'
import { MdDeleteForever } from 'react-icons/md'
import ItemIncreaser from '../ItemIncreaser/ItemIncreaser'

const CartCard = (props) => {
    
    const shortenText = (text, maxLength) => {
        if (text.length <= maxLength) {
          return text;
        }
      
        return text.substring(0, maxLength) + "...";
      };

  return (
    <div className='flex flex-col items-center h-[150px] relative justify-between overflow-hidden bg-white border border-gray-200 rounded-lg shadow md:flex-row z-10  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full '>   
    <div className='flex'>
    <img class="object-cover w-full rounded-t-lg min-h-full md:w-48 bg-cover md:rounded-none md:rounded-l-lg" src={props.image} alt="" />
    <div class="flex flex-col p-4 leading-normal justify-center  px-16">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-start">{props.title}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-start">{shortenText(props.description, 180)}</p>
        <p class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-start">RS: {props.price} /-</p>
    </div>
    </div>
    <div className='absolute right-2 bottom-2 flex gap-8'>
    <ItemIncreaser count={props.count} />
    <button
    onClick={() => props.handleCart(props.id)}
    className='inline-flex mb-3 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
          Remove
    <MdDeleteForever className='text-xl ml-3' /> 
        </button>
    </div>
    </div>
  )
}

export default CartCard