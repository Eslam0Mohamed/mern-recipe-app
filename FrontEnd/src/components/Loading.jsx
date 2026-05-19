import React from 'react'

const Loading = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-[#F9F7F2]'>
      
      <div className='flex flex-col items-center gap-4'>
        
        <div className='w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin'></div>

        <h2 className='text-xl font-semibold text-gray-700'>
          Loading...
        </h2>

      </div>

    </div>
  )
}

export default Loading