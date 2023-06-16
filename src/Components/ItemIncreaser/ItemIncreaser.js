import React from 'react'
import { AiOutlineMinus } from 'react-icons/ai'
import {BiPlus} from 'react-icons/bi'

const ItemIncreaser = (props) => {
  return (
    <div className='text-white  px-3 py-2'>
        <div className='flex gap-4'>
            <AiOutlineMinus className='text-2xl cursor-pointer' />
            <p className=''>{props.count}</p>
            <BiPlus className='text-2xl cursor-pointer' />
        </div>
    </div>
  )
}

export default ItemIncreaser