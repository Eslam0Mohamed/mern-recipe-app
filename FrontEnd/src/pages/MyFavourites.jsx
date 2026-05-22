import React, { useEffect, useState } from 'react'
import { baseUrl, instance } from '../config/config';
import toast from 'react-hot-toast';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';

const MyFavourites = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token")
  async function getRecipes() {
    try {
      setLoading(true)
    const { data } = await instance.get(`/recipes/favourites`,{
    headers:{
      "Authorization":`Bearer ${token}`
    }
    });
    console.log(data);
    setRecipes(data.data);
    } catch (error) {
      console.log(error.response.data);
      toast.error(error.response.data.message)
    }finally{
      setLoading(false)
    }
  }

  async function toggleFavourites(id) {
    try {
      const {data} = await instance.patch(`recipes/favourites/${id}`,{},{
        headers:{
          "Authorization":`Bearer ${token}`
        }
      })
      if (data.success) {
        console.log(data);
        toast.success(data.message)
        setRecipes((prev)=>
   prev.filter((item)=> item._id !== id)
)
      }
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  useEffect(() => {
    getRecipes();
  }, [])

if (loading) {
  return <Loading></Loading>
}
if (recipes.length === 0) {
  return (
    <section className='min-h-screen flex justify-center items-center bg-[#F9F7F2]'>
      <div className='text-center space-y-4'>
        <h2 className='text-4xl font-bold text-orange-500'>
          No Recipes Added Yet
        </h2>
        <p className='text-gray-500 text-lg mb-6'>
          Start by adding your first favourite recipe 🍽️
        </p>
               <Link to="/">
                <button className='w-fit outline-none px-6 py-2  text-xl rounded-bl-3xl rounded-tr-3xl  cursor-pointer bg-orange-600 text-white transition-colors duration-300 rounded-md hover:bg-orange-700 hover:scale-105 '>See More</button>
                </Link>
      </div>
    </section>
  )
}
  return (
    <>
      <section className='bg-[] py-4 '>
        <div className='container'>
          <h2 className='text-2xl text-black font-semibold  hover:text-orange-500 w-fit'>My Favourites Recipes</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
            {
              recipes?.map((recipe) => {
                return <div key={recipe._id} className= 'shadow-md bg-white rounded-2xl group overflow-hidden hover:scale-105 transition-transform duration-200 '>
                  <div className='w-full h-62.5 mb-6  group-hover:scale-105 transition-transform duration-200 '><img src={`${baseUrl}/images/${recipe.coverImage}`} className='overflow-hidden w-full h-full' /></div>
                  <div className='px-4 flex flex-col gap-2 pb-4'>
                    <h3 className='font-semibold text-xl text-orange-400 '>{recipe.title}</h3>
                    <p className='font-medium text-md text-gray-700 '>{recipe.ingrediants}</p>
                    <p className='text-gray-600 text-sm '>{recipe.instructions}</p>
                    <Link to={`/recipe-details/${recipe._id}`} className=' mt-auto  w-full outline-none px-6 py-2  text-xl rounded-bl-3xl rounded-tr-3xl  cursor-pointer bg-orange-600 text-white transition-colors duration-300 rounded-md hover:scale-105 '>Recipe Details</Link>
                    <button onClick={()=>{toggleFavourites(recipe._id)}} className=' mt-auto  w-full outline-none px-6 py-2  text-xl rounded-bl-3xl rounded-tr-3xl  cursor-pointer bg-orange-600
                     text-white transition-colors duration-300 rounded-md hover:scale-105 '>
                      
                        Remove From fav </button>
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

export default MyFavourites
