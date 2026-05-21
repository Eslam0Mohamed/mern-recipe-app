import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { baseUrl, instance } from '../config/config'
import Loading from '../components/Loading'
import toast from 'react-hot-toast'

const RecipeDetails = () => {

    const { id } = useParams()

    const [recipe, setRecipe] = useState(null)
    const [loading, setLoading] = useState(true)

    async function getRecipeDetails() {

        try {

            const { data } = await instance.get(`/recipes/${id}`)

            setRecipe(data.recipe)

        } catch (error) {

            console.log(error)
            toast.error(error.response.data.message)

        } finally {

            setLoading(false)

        }

    }

    useEffect(() => {
        getRecipeDetails()
    }, [id])

    if (loading) {
        return <Loading />
    }

    return (
        <section className='min-h-screen bg-[#F9F7F2] py-10 px-4'>
<h2 className='text-center text-4xl text-gray-500 my-6'>{recipe.title} Details</h2>
            <div className='max-w-6xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8'>

                <div className='h-100 md:h-full'>
                    <img
                        src={`${baseUrl}/images/${recipe.coverImage}`}
                        alt={recipe.title}
                        className='w-full h-full object-cover'
                    />
                </div>

                <div className='p-8 flex flex-col justify-center'>

                    <h1 className='text-4xl font-bold text-orange-500 mb-6'>
                        {recipe.title}
                    </h1>

                    <div className='mb-6'>
                        <h2 className='text-2xl font-semibold mb-3 text-gray-800'>
                            Ingredients
                        </h2>

                        <p className='text-gray-600 leading-7'>
                            {recipe.ingrediants}
                        </p>
                    </div>

                    <div>
                        <h2 className='text-2xl font-semibold mb-3 text-gray-800'>
                            Instructions
                        </h2>

                        <p className='text-gray-600 leading-7 whitespace-pre-line'>
                            {recipe.instructions}
                        </p>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default RecipeDetails