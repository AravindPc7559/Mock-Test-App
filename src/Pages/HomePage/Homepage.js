import React from 'react'
import Card from '../../Components/Card/Card'
import Footer from '../../Components/Footer/Footer'

const Homepage = (props) => {
    console.log(props.cartData)
    const handleCart = (id) => {
        const itemExistOrNot = props.cartData.length && props.cartData.find((item) => item.id === id)
        if(!itemExistOrNot){
            const item =  props.data && props.data.find((item) => item.id === id)
            item.count = 0;
            props.setCartProducts((prev) => [...prev, item])
        } else {
            const objectIndex = props.cartData.findIndex(item => item.id === id);
            itemExistOrNot.count =  itemExistOrNot.count + 1;
            console.log(objectIndex)
            props.cartData[objectIndex] = itemExistOrNot
        }
    }

  return (
    <div className='p-16'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pt-10">
            {
                props.data.map((item) => {
                    return (
                        <Card image={item.image} price={item.price} title={item.title} id={item.id} description={item.description} 
                        count={item.count}
                        cartData={props.cartData}
                        handleCart={handleCart}
                        page={"Hoempage"}
                        />
                    )
                })
            }
        </div>
    </div>
  )
}

export default Homepage