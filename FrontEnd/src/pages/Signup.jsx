
import React from 'react'

const Register = () => {
  return (
    <section className="min-h-screen bg-[#F9F7F2] flex items-center justify-center px-4">

      <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-lg">

        <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
          Register
        </h2>

        <form className="space-y-5">

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <button
            className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-3 rounded-xl font-semibold"
          >
            Register
          </button>

        </form>

      </div>

    </section>
  )
}

export default Register