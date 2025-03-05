import React from 'react'

const Card = ({title, description}) => {
  return (
    <div className='w-[220px] h-[65px] rounded-xl bg-[#16181C] flex items-center justify-center p-2 gap-2 cursor-pointer'>
        <div className='text-[#FEF9E1]'>{title}</div>
        <p className='text-[#C0B696] text-[14px]'>{description}</p>
    </div>
  )
}

export default Card