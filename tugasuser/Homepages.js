import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
// import Routes from '../routes/router'
// import Detailpage from '../Detailpage'
import Carousel from '../components/Carousel'
import Cards from '../components/Card'


function Home() {
  return (
    <>
      <Header />
      <div className="Banner mx-auto container d-flex">
        <Carousel />
      </div>
      <Cards />
      <Footer />
    </>
  )
}

export default Home
