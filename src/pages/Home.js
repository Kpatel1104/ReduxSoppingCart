import React from 'react';
import Products from '../components/Products';

const Home = () => {
  return (
    <div className='home'>
     <h3  className='heading'> WELCOME TO MYSTORE </h3>
     <section className='he1'>
        <h3> Products </h3>
        <Products/>
     </section>
    </div>
  )
};

export default Home;
