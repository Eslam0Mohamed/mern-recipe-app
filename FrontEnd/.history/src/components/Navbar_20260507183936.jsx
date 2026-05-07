import React from 'react'

const Navbar = () => {
    return (
        <header>
            <nav className='px-12 py-3 flex justify-between items-center '>
                <div className="logo text-4xl text-orange-500 font-extrabold ">
                    Recipe App
                </div>
                <ul className='flex items-center '>
                    <li><a href="">Home</a></li>
                    <li><a href="">Recipe</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>

        </header>
    )
}

export default Navbar
