import React from 'react'
import backgroundImage from "../assets/bg_1.png"
function Home() {
  return (
    <section style={{backgroundImage:`url(${backgroundImage})`,}} className={`bg-cover bg-tertiary h-screen bg-center flex items-center justify-center `}>
      <div className='left container flex flex-col gap-4 text-center justify-center items-center' >
        <h1 className='text-white text-6xl font-semibold'>Welcome To Our Recipe Food App</h1>
        <p className='text-md text-gray-100 font-medium text-lg'> Join us to explore a world of delicious recipes and culinary inspiration. Whether you're a seasoned chef or just starting your cooking journey, our app offers a wide variety of recipes to suit every taste and skill level. From quick and easy meals to gourmet dishes, you'll find something for every occasion. Start your culinary adventure with us today!</p>
      <button className='w-fit outline-none px-4 py-1  text-xl border cursor-pointer border-600 bg-orange-600 text-white transition-colors duration-300 rounded-md hover:bg-orange-700 hover:scale-105 '>Share Your Recipe With Us</button>
      </div>
      {/* <div className='right'>
        <img src={""} alt="share your recipe" />
      </div> */}
      <div></div>
    </section>
  )
}

export default Home
