import React, { useEffect, useState } from 'react'
import { baseUrl, instance } from '../config/config';
import toast from 'react-hot-toast';
import Loading from './Loading';

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favourites,setFavourites] = useState([])
  const token = localStorage.getItem("token")
  async function getFavourites() {
    try {
      const { data } = await instance.get(`/recipes/favourites`, {
        headers: { "Authorization": `Bearer ${token}` }
      })
      if (data.success) {
        setFavourites(data.data.map(fav => fav._id))      
      }
    } catch (error) {
      console.log(error)
    }
  }
  async function getRecipes() {
    try {
      setLoading(true)
    const { data } = await instance.get(`/recipes`);
    console.log(data);
    setRecipes(data.recipes);
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
            setFavourites(prev=>prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    )
      }
    } catch (error) {
      toast.error(error.response?.data?.message)
    }
  }

  useEffect(() => {
    getRecipes();
    if (token) {
      getFavourites()
    }
  }, [])

if (loading) {
  return <Loading></Loading>
}

  return (
    <>
      <section className='bg-[] py-4 '>
        <div className='container'>
          <h2 className='text-2xl text-black font-semibold  hover:text-orange-500 w-fit'>All Recipes</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
            {
              recipes.map((recipe) => {
                const isFav = favourites?.includes(recipe._id)
                console.log(isFav);
                return <div key={recipe._id} className= 'shadow-md bg-white rounded-2xl group overflow-hidden hover:scale-105 transition-transform duration-200 '>
                  <div className='w-full h-62.5 mb-6  group-hover:scale-105 transition-transform duration-200 '><img src={`${baseUrl}/images/${recipe.coverImage}`} className='overflow-hidden w-full h-full' /></div>
                  <div className='px-4 flex flex-col gap-2 pb-4'>
                    <h3 className='font-semibold text-xl text-orange-400 '>{recipe.title}</h3>
                    <p className='font-medium text-md text-gray-700 '>{recipe.ingrediants}</p>
                    <p className='text-gray-600 text-sm '>{recipe.instructions}</p>
                    <button className=' mt-auto  w-full outline-none px-6 py-2  text-xl rounded-bl-3xl rounded-tr-3xl  cursor-pointer bg-orange-600 text-white transition-colors duration-300 rounded-md hover:scale-105 '>Recipe Details</button>
                    <button onClick={()=>{toggleFavourites(recipe._id)}} className=' mt-auto  w-full outline-none px-6 py-2  text-md rounded-bl-3xl rounded-tr-3xl  cursor-pointer bg-orange-600 text-white transition-colors duration-300 rounded-md hover:scale-105 '> {isFav ? "❤️ Remove from Fav" : "🤍 Add to Fav"}</button>
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
