import React from 'react'
import backgroundImage from "../assets/bg_2.png"
function Home() {
  return (
    <section className={`bg-[image:url(${backgroundImage})] bg-cover h-screen flex items-center justify-center`}>
      <div className='left container mx-auto bg-amber-200' >
        <h1 className='text-white text-6xl font-semibold my-4'>Welcome To Our Recipe Food App</h1>
        <p className='text-md text-gray-400 font-semibold text-sm'> Join us to explore a world of delicious recipes and culinary inspiration. Whether you're a seasoned chef or just starting your cooking journey, our app offers a wide variety of recipes to suit every taste and skill level. From quick and easy meals to gourmet dishes, you'll find something for every occasion. Start your culinary adventure with us today!</p>
      <button>Share Your Recipe With Us</button>
      </div>
      {/* <div className='right'>
        <img src={""} alt="share your recipe" />
      </div> */}
      <div></div>
    </section>
  )
}

export default Home
