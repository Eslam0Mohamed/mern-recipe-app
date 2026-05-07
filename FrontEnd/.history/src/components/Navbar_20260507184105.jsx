import React from 'react'

const Navbar = () => {
    return (
        <header className='bg-white'>
            <nav className='px-12 py-3 flex justify-between items-center '>
                <div className="logo text-4xl text-orange-500 font-extrabold ">
                    Recipe App
                </div>
                <ul className='flex items-center gap-3'>
                    <li><a href="" className='hover:text-orange-500'>Home</a></li>
                    <li><a href="" className='hover:text-orange-500'>Recipe</a></li>
                    <li><a href="" className='hover:text-orange-500'>About</a></li>
                    <li><a href="" className='hover:text-orange-500'>Contact</a></li>
                </ul>
            </nav>

        </header>
    )
}

export default Navbar
