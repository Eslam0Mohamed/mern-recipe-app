import React, { useContext, useState } from 'react'
import { useFormik } from 'formik'
import toast from 'react-hot-toast'
import { AuthContext } from '../Context/AuthContext'
import * as yup from "yup" 
import { useNavigate } from 'react-router-dom'
const Register = () => {
  const [loading,setLoading] = useState(false)
const navigate = useNavigate()
  const {sendDataToSignup} = useContext(AuthContext)

  async function handleSignup(values){
    try {
      const response = await sendDataToSignup(values)
      if (response.success) {
        toast.success(response.message)
        setTimeout(() => {
          navigate("/auth/login")
        }, 2000)
      }
    } catch (error) {
      console.log(error);
      toast.error(error)
    }
  }
  const yupSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),  
    password:yup.string().required("Password is required").min(6,"password should be more than 6 charachter")})

const formik = useFormik({
  initialValues:{
    name:"",
    email:"",
    password:"",
  },
  onSubmit:handleSignup,
  validationSchema:yupSchema
})

  return (
    <section className="min-h-screen bg-[#F9F7F2] flex items-center justify-center px-4">

      <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-lg">

        <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
          Register
        </h2>

     
      <form className="space-y-5" onSubmit={formik.handleSubmit}>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Name
            </label>

            <input
            name='name'
              type="text"
              placeholder="Enter your name"
              onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              
              className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-orange-400"
            />
            {
              formik.errors.name && formik.touched.name && <p className='text-red-400 text-sm'>{formik.errors.name}</p>
            }
                      </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Email
            </label>

            <input
            name='email'
              type="email"
              placeholder="Enter your email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-orange-400"
            />
            {
              formik.errors.email && formik.touched.email && <p className='text-red-400 text-sm'>{formik.errors.email}</p>
            }
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Password
            </label>

            <input
            name='password'
              type="password"
              placeholder="Enter your password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-orange-400"
            />
            {
              formik.errors.password && formik.touched.password && <p className='text-red-400 text-sm'>{formik.errors.password}</p>
            }
          </div>

          <button
          // type='button'
            className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-3 rounded-xl font-semibold"
          disabled={loading}
          >
            {loading? "Register.. waiting":"Register"}
          </button>

        </form>

      </div>

    </section>
  )
}

export default Register