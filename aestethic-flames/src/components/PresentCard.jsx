import React from 'react'

const PresentCard = ({title, bgClass}) => {
  return (
    <div className={`w-full sm:w-full md:w-[350px] h-[290px] md:h-[450px] bg-white rounded-md flex flex-col p-3 ${bgClass} bg-cover transition-all duration-[0.5s] cursor-pointer hover:translate-y-2 hover:shadow-lg`}>
        <div className='w-full h-full flex justify-center items-end'>
            <div className='w-full px-6 gap-4 flex flex-col items-center sm:items-start'>
                <h1 className='text-white text-[18px] sm:text-[22px] md:text-[27px] font-semibold'>{title}</h1>
                <p className='text-[#C0B696] text-sm sm:text-base px-2'>{title}</p>
            </div>
        </div>
    </div>
  )
}

export default PresentCard
