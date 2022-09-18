import React from 'react'
import Foods from './Foods'
import FoodsCartShow from './FoodsCartShow'
import Header from './Header'
import HotPizza from './HotPizza'
import Location from './Location'
import Serve from './Serve'
import Service from './Service'
import Testimonials from './Testimonials'
const Home = () => {
  return (
    <div>
      <Header/>
      <FoodsCartShow/>
      <Serve/>
      <Service/>
      <Foods/>
     <Location/>
     <HotPizza/>
     <Testimonials/>
    </div>
  )
}

export default Home
