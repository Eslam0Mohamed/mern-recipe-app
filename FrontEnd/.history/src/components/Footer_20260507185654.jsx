import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#F9F7F2] px-12 py-4 flex justify-center items-center'>
      <div className=''>All Copyrights Are Reserved To  <span className='text-orange-500'>Recipe App</span> {new Date().getFullYear()}</div>
    </footer>
  )
}

export default Footer
