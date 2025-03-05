import React from 'react'

const About = () => {
  return (
    <div className='pb-4 pt-[55px] flex flex-col gap-4 bg-[#1D1F24]'>
        <div className='w-full flex items-center justify-center h-[125px] bg-banner bg-cover bg-center'>
            <h1 className='text-[40px] text-white uppercase font-bold'>Despre</h1>
        </div>
        <div className='h-screen flex items-center'>
            <div className='flex flex-col justify-center items-center gap-11 md:flex-row md:justify-around w-full'>
                <div className='h-[250px] w-[250px] md:h-[350px] md:w-[350px] bg-logo bg-cover'></div>
                <div className='flex flex-col gap-4 items-start justify-start text-justify w-[350px] xl:w-[450px]'>
                  <h1 className='text-[#C0B696] text-[22px] uppercase font-bold'>Aesthetic flames</h1>
                  <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos illo impedit sequi mollitia delectus ipsam animi repellat amet quisquam ad veniam est aperiam excepturi non, fugiat ea, vero cumque consectetur voluptates hic voluptatum laboriosam eos molestiae. Fuga neque excepturi consequuntur at impedit aliquid quasi eaque? Repellendus adipisci, facilis quia, molestias pariatur maiores expedita reprehenderit maxime non animi ipsum nisi, error beatae delectus enim alias tempora!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About