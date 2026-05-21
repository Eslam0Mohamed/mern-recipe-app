import React, { useState } from 'react'
import {useFormik} from "formik"
import * as yup from "yup"
import {instance} from "../config/config.js"
import toast from "react-hot-toast"
const AddRecipe = () => {
const [loading, setLoading] = useState(false)
const token = localStorage.getItem("token")
async function handleAddRecipe(values) {
  try {
  setLoading(true);
  const {data} = await instance.post("recipes",values,{
    headers: {
      "Content-Type": "multipart/form-data",
      "Authorization":`Bearer ${token}`
    }
  })
  console.log(data);
  
  if (data.success) {
    console.log(data);
    
    toast.success(data.message)
    formik.resetForm();
  }
} catch (error) {
  console.log(error);
  toast.error(error.response.data.message)
} finally {
  setLoading(false);
}
}
  const recipeSchema = yup.object({
    title: yup.string().required("Recipe Name Required"),
    ingrediants: yup.string().required("Recipe Ingredients Required"),
    instructions: yup.string().required("Recipe Instructions Required"),
    coverImage: yup.string().required("Recipe Image Required")
  })

  const formik = useFormik({
    initialValues: {
      title: "",
      instructions: "",
      ingrediants: "",
      coverImage: null

    },
    onSubmit: handleAddRecipe,
    validationSchema: recipeSchema
  })
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
            <form className='  p-6 bg-white rounded-lg shadow-md' onSubmit={formik.handleSubmit}>
              <div className='mb-4'>
                <label htmlFor='recipeName' className='block text-lg font-medium text-gray-700 mb-2'>
                  Recipe Name
                </label>
                <input
                  type='text'
                  id='recipeName'
                  className='border w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500'
                  placeholder='Enter recipe name'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.title}
                  name="title"
                />
                {formik.touched.title && formik.errors.title && (
                  <p className='text-red-500 text-sm mt-1'>{formik.errors.title}</p>
                )}
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.instructions}
                  name="instructions"
                />
                {formik.touched.instructions && formik.errors.instructions && (
                  <p className='text-red-500 text-sm mt-1'>{formik.errors.instructions}</p>
                )}
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.ingrediants}
                  name="ingrediants"
                />
                {formik.touched.ingrediants && formik.errors.ingrediants && (
                  <p className='text-red-500 text-sm mt-1'>{formik.errors.ingrediants}</p>
                )}
              </div>
              <div className='mb-4'>
                <label htmlFor='image' className='block text-lg font-medium text-gray-700 mb-2'>
                  Recipe Image
                </label>
                <input
                  id='image'
                  type='file'
                  name='coverImage'
                  className='border w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none'
                  onChange={(event) => {
                    formik.setFieldValue("coverImage", event.currentTarget.files[0]);
                  }}
                />
                {formik.touched.coverImage && formik.errors.coverImage && (
                  <p className='text-red-500 text-sm mt-1'>{formik.errors.coverImage}</p>
                )}
              </div>
              <button 
              disabled={loading}
               type='submit'
              className={`w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors duration-300 ${loading ? 'cursor-not-allowed opacity-50 animation-spin' : ''}`}>
                {loading?"Adding Recipe...":"Add Recipe"}
              </button>
            </form>
          </div>
        </div>

      </section>
    </>
  )
}

export default AddRecipe
