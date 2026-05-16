import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {AuthContext} from '../Context/AuthContext'

const Navbar = () => {
 const { token, handleLogout } = useContext(AuthContext)
    
    return (
        <header className='bg-white/50 backdrop-blur-md sticky top-0 z-50 shadow-md'>
            <nav className='px-12 py-4 flex justify-between items-center '>
                <div className="logo text-4xl text-orange-500 font-extrabold ">
                    Recipe App
                </div>
                <div className='flex gap-6'>
                <ul className='flex items-center gap-4'>
                    <li><Link to="/" className='hover:bg-orange-500 hover:text-white py-1 px-2 rounded-md  text-md font-medium text-lg'>Home</Link></li>
                    <li><Link to="/my-recipes" className='hover:bg-orange-500 hover:text-white py-1 px-2 rounded-md  text-md font-medium text-lg'>Recipe</Link></li>
                    <li><Link to="/my-favourites" className='hover:bg-orange-500 hover:text-white py-1 px-2 rounded-md  text-md font-medium text-lg'>Favourites</Link></li>
                    <li><Link to="/contact" className='hover:bg-orange-500 hover:text-white py-1 px-2 rounded-md  text-md font-medium text-lg'>Contact</Link></li>
                 {
                    token?"":(<>
                    <li><Link to="/auth/login" className='hover:bg-orange-500 hover:text-white py-1 px-2 rounded-md  text-md font-medium text-lg'>Login</Link></li>
                    <li><Link to="/auth/signup" className='hover:bg-orange-500 hover:text-white py-1 px-2 rounded-md  text-md font-medium text-lg'>Signup</Link></li>
                    </>
                ) }
                </ul>
                {
                    token && <button onClick={handleLogout} className="bg-orange-500 hover:bg-orange-600 transition text-white py-1 px-3 rounded-xl font-semibold">Logout</button>
                }
                </div>
            </nav>

        </header>
    )
}

export default Navbar
