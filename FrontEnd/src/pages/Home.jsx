import React from 'react'
import backgroundImage from "../assets/bg_2.png"
import AllRecipes from '../components/AllRecipes'
import { Link } from 'react-router-dom'
function Home() {
  return (<>
    <section style={{backgroundImage:`url(https://images.unsplash.com/photo-1645112411341-6c4fd023714a)`,}} className={`bg-cover bg-tertiary h-screen bg-center flex items-center justify-center `}>
      <div className='left container flex flex-col gap-4 text-center justify-center items-center' >
        <h1 className='text-white text-6xl font-bold'>Welcome To Our Recipe Food App</h1>
        <p className='text-md text-white font-medium text-xl '> Join us to explore a world of delicious recipes and culinary inspiration. Whether you're a seasoned chef or just starting your cooking journey, our app offers a wide variety of recipes to suit every taste and skill level. From quick and easy meals to gourmet dishes, you'll find something for every occasion. Start your culinary adventure with us today!</p>
      <Link to="/add-recipe">
      <button className='w-fit outline-none px-6 py-2  text-xl rounded-bl-3xl rounded-tr-3xl  cursor-pointer bg-orange-600 text-white transition-colors duration-300 rounded-md hover:bg-orange-700 hover:scale-105 '>Share Your Recipe With Us</button>
      </Link>
      </div>
      {/* <div className='right'>
        <img src={""} alt="share your recipe" />
        </div> */}
      <div></div>
    </section>
      <AllRecipes/>

        </>
  )
}

export default Home
