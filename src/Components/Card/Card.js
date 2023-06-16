import React from 'react'
import { AiFillDelete } from 'react-icons/ai';
import {BsCartPlus} from 'react-icons/bs'

const Card = (props) => {

    const shortenText = (text, maxLength) => {
        if (text.length <= maxLength) {
          return text;
        }
      
        return text.substring(0, maxLength) + "...";
      };
      
      const shortenHeading = (text, maxLength) => {
        if (text.length <= maxLength) {
          return text;
        }
      
        return text.substring(0, maxLength) + "...";
      };
  return (
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className='h-[300px] overflow-hidden'>
    <img class="rounded-t-lg w-full h-full " src={props.image} alt="" />
    </div>
    <div class="p-5 h-[200px]">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">RS: {props.price} /-</h5>
        </a>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{shortenHeading(props.title, 23)}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{shortenText(props.description, 100)}</p>
       
    </div>
    <button
    onClick={() => props.handleCart(props.id)}
    className='inline-flex mb-3 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            {
              props.page === "cart" && "Delete"
             }
             {
              props.page === "Hoempage" && "Add To Cart "
             }
             {
              props.page === "cart" && 
              <AiFillDelete className='text-xl ml-3' />
             }
               {
              props.page === "Hoempage" && 
              <BsCartPlus className='text-xl ml-3' /> 
            }
        </button>
</div>

  )
}

export default Card