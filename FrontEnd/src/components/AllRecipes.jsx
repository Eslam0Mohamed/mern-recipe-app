import React, { useEffect, useState } from 'react'
import { instance } from '../config/config';

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  async function getRecipes() {

    const { data } = await instance.get(`/recipes`);
    console.log(data);
    setRecipes(data.recipes);
  }

  useEffect(() => {
    getRecipes();
  }, [])



  return (
    <>
      <section className='bg-[] py-4 '>
        <div className='container'>
          <h2 className='text-2xl text-black font-semibold  hover:text-orange-500 w-fit'>All Recipes</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
            {
              recipes.map((recipe) => {
                return <div className= 'shadow-md hover:bg-orange-500  bg-white rounded-2xl group overflow-hidden hover:scale-105 transition-transform duration-200 ' key={recipe.id}>
                  <div className='w-full h-62.5 mb-6  group-hover:scale-105 transition-transform duration-200 '><img src={recipe.coverImage} className='overflow-hidden w-full h-full' /></div>
                  <div className='px-4 flex flex-col gap-2 pb-4'>
                    <h3 className='font-semibold text-xl group-hover:text-gray-200 text-orange-400 '>{recipe.title}</h3>
                    <p className='font-medium text-md text-gray-700 group-hover:text-white'>{recipe.ingrediants}</p>
                    <p className='text-gray-600 text-sm group-hover:text-white'>{recipe.instructions}</p>
                    <button className='group-hover:bg-white mt-auto group-hover:text-orange-600 w-full outline-none px-6 py-2  text-xl rounded-bl-3xl rounded-tr-3xl  cursor-pointer bg-orange-600 text-white transition-colors duration-300 rounded-md hover:bg-orange-700 hover:scale-105 '>Recipe Details</button>
                  </div>
                </div>
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default AllRecipes
