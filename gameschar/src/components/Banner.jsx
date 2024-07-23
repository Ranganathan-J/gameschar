import React, { useEffect } from 'react'

function Banner({gameBanner}) {
    useEffect(() => {

    })
  return (
    <div className='relative m-3'>
        <div className='absolute bottom-0 p-8 dark:bg-gradient-to-t from-slate-900 to-transparent w-full'>
            <h2 className='text-2xl text-white font-bold'>{gameBanner.name}</h2>
            <button className='bg-blue-700 rounded-lg font-bold cursor-pointer px-2 py-1 text-white'>Get Now</button>
        </div>
        <img src={gameBanner.background_image} alt={gameBanner.slug} className='object-cover md:h-[300px] rounded-lg' />
    </div>
  )
}

export default Banner