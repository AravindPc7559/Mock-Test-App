import React from 'react'
import Card from '../../Components/Card/Card'

const Cart = (props) => {

    const handleCart = (id) => {
        props.setCartProducts(props.cartData.filter((item) => item.id !== id))
    }

  return (
    <>
    <div className='p-16 min-h-screen'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pt-10">
            {
                props.cartData.length ? props.cartData.map((item) => {
                    return (
                        <Card page={"cart"} image={item.image} price={item.price} title={item.title} id={item.id} description={item.description} 
                        handleCart={handleCart}
                        />
                    )
                })
                :
                <h1>NO PRODUCT IN CART</h1>
            }
        </div>
    </div>
    {
         props.cartData.length &&
         <div className="flex items-center justify-end py-4 px-8 bg-gray-300 bottom-10 fixed w-full text-center">
         <div className='flex gap-2'>
           <h1 className='font-bold'>TOTAL :</h1>
           <p>
               {
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