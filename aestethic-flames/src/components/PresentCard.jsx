import React from 'react'

const PresentCard = ({title, bgClass}) => {
  return (
    <div className={`w-[185px] h-[290px] md:h-[450px] md:w-[350px] bg-white rounded-md flex flex-col p-3 ${bgClass} bg-cover  transition-ease-in-out duration-[0.5s] cursor-pointer hover:translate-y-2`}>
        <span className='w-full h-full flex justify-normal items-end'>
            <p className='text-[#C0B696] px-2'>{title}</p>
        </span>
    </div>
  )
}

export default PresentCard