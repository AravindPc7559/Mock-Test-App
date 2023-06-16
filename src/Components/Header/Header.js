import React from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
  const router = useNavigate()
  return (
    <header className="flex items-center justify-between py-4 px-8 bg-gray-200 fixed w-full">
      <div className="flex items-center cursor-pointer" onClick={() => router('/')}>
        <img src="https://w7.pngwing.com/pngs/361/627/png-transparent-leaf-logo-green-leaves-green-and-teal-leaf-logo-text-maple-leaf-grass.png" alt="Logo" className="h-8 w-8 mr-2" />
        <h1 className="text-xl font-bold">MOCK TEST</h1>
      </div>

      <div className="w-1/3 text-center flex gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none w-full"
        />
      </div>

      <div 
      onClick={() => router('/cart')}
      className='flex gap-2 rounde hover:scale-110 transition-all cursor-pointer'>
       <AiOutlineShoppingCart className='text-2xl cursor-pointer'   />
       <p>{props.cartProducts.length}</p>
      </div>
    </header>
  );
};

export default Header;
