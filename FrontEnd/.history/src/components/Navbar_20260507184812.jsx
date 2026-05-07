import React from 'react'

const Navbar = () => {
    return (
        <header className='bg-[#F9F7F2]'>
            <nav className='px-12 py-4 flex justify-between items-center '>
                <div className="logo text-4xl text-orange-500 font-extrabold ">
                    Recipe App
                </div>
                <ul className='flex items-center gap-4'>
                    <li><a href="" className='hover:bg-orange-500 rounded:sm text-md font-medium '>Home</a></li>
                    <li><a href="" className='hover:bg-orange-500 rounded:sm text-md font-medium '>Recipe</a></li>
                    <li><a href="" className='hover:bg-orange-500 rounded:sm text-md font-medium '>About</a></li>
                    <li><a href="" className='hover:bg-orange-500 rounded:sm text-md font-medium '>Contact</a></li>
                </ul>
            </nav>

        </header>
    )
}

export default Navbar
