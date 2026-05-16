import React from 'react'

const AddRecipe = () => {


  return (
    <>
      <section className='py-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto my-6 '>
        <div className=' '>
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836" alt="Add Recipe" 
            className='w-full h-full object-cover rounded-lg shadow-md' />
        </div>
        <div>
                   <h1 className='text-3xl font-bold text-center text-orange-500'>Add New Recipe</h1>
        <form className='  p-6 bg-white rounded-lg shadow-md'>
          <div className='mb-4'>
            <label htmlFor='recipeName' className='block text-lg font-medium text-gray-700 mb-2'>
              Recipe Name
            </label>
            <input
              type='text'
              id='recipeName'
              className='border w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500'
              placeholder='Enter recipe name'
            />
          </div>
            <div className='mb-4'>
              <label htmlFor='recipeDescription' className='block text-lg font-medium text-gray-700 mb-2'>
                Recipe Instructions
              </label>
              <textarea
                id='recipeDescription'
                className='border w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500'
                placeholder='Enter recipe description'
                rows='4'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='recipeIngredients' className='block text-lg font-medium text-gray-700 mb-2'>
                Ingredients
              </label>
              <textarea
                id='recipeIngredients'
                className='border w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500'
                placeholder='Enter recipe ingredients'
                rows='4'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='image' className='block text-lg font-medium text-gray-700 mb-2'>
                Recipe Image
              </label>
              <input
                id='image'
                type='file'
                name='image'
                className='border w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none'
              />
            </div>
            <button className='w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors duration-300'>
              Add Recipe
            </button>
        </form>
        </div>
        </div>
 
      </section>
    </>
  )
}

export default AddRecipe
