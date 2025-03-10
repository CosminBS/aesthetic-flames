import React from 'react'

const Spinner = () => {
    return (
        <div className="fixed flex items-center justify-center top-0 left-0 w-full h-full bg-[#cacacaeb]">
            <div className="absolute">
                <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-[#C0B696] animate-spin">
                </div>
            </div>
        </div>
      )
}

export default Spinner