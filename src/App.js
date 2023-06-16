import { useEffect, useState } from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Homepage from './Pages/HomePage/Homepage';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Cart from './Pages/Cart/Cart';

function App() {

  const [data, setData] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);


  const fetchData = () => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
      setData(res.data)
    }).catch((err) => {
      alert("failed to fetch data Please try again......")
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <Header cartProducts={cartProducts}/>
      <Routes>
      <Route path="/" element={<Homepage data={data} setCartProducts={setCartProducts} cartData={cartProducts}/>} />
      <Route path="/cart" element={  <Cart cartData={cartProducts} setCartProducts={setCartProducts}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
