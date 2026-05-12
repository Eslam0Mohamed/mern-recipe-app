
import React from 'react'
import { useFormik } from "formik"
import * as yup from "yup"

const Login = () => {

    function handleLogin(values) {
        console.log(values);
    }

    const yupSchema = yup.object({
        email: yup.string().email("Invalid email format").required("Email is required"),
        password: yup.string().min(6, "password must be more than 6 characters").required("Password is required")
    })
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: handleLogin,
        validationSchema: yupSchema

    })
    console.log(formik);

    return (
        <section className="min-h-screen bg-[#F9F7F2] flex items-center justify-center px-4">

            <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-lg">

                <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
                    Login
                </h2>

                <form className="space-y-5" onSubmit={formik.handleSubmit}>

                    <div>
                        <label className="block mb-2 font-medium text-gray-700">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-orange-400"
                            onChange={formik.handleChange}
                            name='email'
                            value={formik.values.email}
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium text-gray-700">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full p-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-orange-400"
                            onChange={formik.handleChange}
                            name='password'
                            value={formik.values.password}
                        />
                    </div>

                    <button
                        className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-3 rounded-xl font-semibold"
                    >
                        Login
                    </button>

                </form>

            </div>

        </section>
    )
}

export default Login