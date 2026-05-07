import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#F9F7F2] px-12 py-4 flex justify-center items-center'>
      <div className=''>All Copyrights Are Reserved To Recipe App <span className='text-o'>{new Date().getFullYear()}</span></div>
    </footer>
  )
}

export default Footer
