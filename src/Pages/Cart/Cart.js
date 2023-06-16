import React from 'react'
import Card from '../../Components/Card/Card'
import CartCard from '../../Components/CartCard/CartCard'

const Cart = (props) => {

    const handleCart = (id) => {
        props.setCartProducts(props.cartData.filter((item) => item.id !== id))
    }

  return (
    <>
    <div className='p-24 min-h-screen'>
        <div className="grid grid-cols-1 gap-10 pt-10 w-full">
            {
                props.cartData.length ? props.cartData.map((item) => {
                    return (
                        <CartCard count={item.count} image={item.image} price={item.price} title={item.title} id={item.id} description={item.description} 
                        handleCart={handleCart}
                        page={"Hoempage"}/>
                    )
                })
                :
                <h1>NO PRODUCT IN CART</h1>
            }
        </div>
    </div>
    {
         props.cartData.length &&
         <div className="flex items-center justify-end py-4 px-8 bg-gray-300 bottom-10 fixed w-full text-center z-20">
         <div className='flex gap-2'>
           <p className='text-lg font-bold'>
           TOTAL :  {
                   props.cartData.reduce((accumulator, currentItem) => {
                       return accumulator + currentItem.price;
                     }, 0)
               }
                /-
           </p>
         </div>
   </div>
    }
    </>
  )
}

export default Cart