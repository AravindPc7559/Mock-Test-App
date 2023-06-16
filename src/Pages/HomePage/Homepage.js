import React from 'react'
import Card from '../../Components/Card/Card'
import Footer from '../../Components/Footer/Footer'

const Homepage = (props) => {
    
    const handleCart = (id) => {
       const item =  props.data && props.data.find((item) => item.id === id)
       props.setCartProducts((prev) => [...prev, item])
    }

  return (
    <div className='p-16'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pt-10">
            {
                props.data.map((item) => {
                    return (
                        <Card image={item.image} price={item.price} title={item.title} id={item.id} description={item.description} 
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