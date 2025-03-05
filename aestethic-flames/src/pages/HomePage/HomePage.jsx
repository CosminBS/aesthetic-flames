import React from 'react'
import { RiCandleLine, RiPencilLine, RiBox3Line  } from "react-icons/ri";
import Card from '../../components/Card';
import PresentCard from '../../components/PresentCard';
import { useNavigate } from 'react-router'

const HomePage = () => {

    const navigate = useNavigate();
    
  return (
    <div className='flex flex-col top-16 bg-[#1D1F24] w-full'>
        <div className='h-[65vh] bg-black flex justify-center items-center pt-11'>
            <div className='w-[300px] h-[300px] bg-logo bg-center bg-cover'></div>
        </div>

        {/* Section one */}
        <div className='flex w-full flex-col pt-11 pb-11 gap-6 xl:gap-11 bg-[#1D1F24]' id='about'>
            <span className='w-full mx-auto flex flex-col md:flex md:flex-row items-center justify-center gap-4 '>
                <Card title={<RiCandleLine size={24} />} description={'Calitate superioara'}/>
                <Card title={<RiPencilLine size={24} />} description={'Servicii personalizate'}/>
                <Card title={<RiBox3Line size={24} />} description={'Comenzi rapide'}/>
            </span>

            <div className='w-full px-8 gap-4 flex flex-col items-center md:items-start'>
                <h1 className='text-white text-[22px] md:text-[27px]'>Colectie lumanari decorative</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:w-full md:flex md:justify-between gap-4 md:gap-2'>
                    <PresentCard bgClass="bg-christmas-candle" title="Lumanari pentru Craciun"/>
                    <PresentCard bgClass="bg-easter-candle" title="Lumanari pentru Paste"/>
                    <PresentCard bgClass="bg-simple-candle" title="Lumanari simple" />
                    <PresentCard bgClass="bg-personalized-candle" title="Lumanari custom" />
                </div>
            </div>

            <div className='w-full px-4 flex justify-center items-center'>
                <button onClick={() => {navigate('/products')}} className='text-[16px] bg-[#F9EABE] px-4 py-2 rounded-3xl duration-[0.3s] transition-ease-in-out hover:bg-[#dbcb9b] hover:translate-x-1'>
                    Vezi colectie
                </button>
            </div>
        </div>

        {/* Banner 1 */}
        <div className='w-full pb-3 flex'>
            <div className='bg-banner w-full h-[55vh] bg-cover bg-right sm:bg-center px-8 flex flex-col gap-3 items-start justify-center text-white'>
                <h1 className='text-[27px] md:text-[32px] xl:text-[48px]'> Lumină și Aromă în Fiecare Clipă</h1>
                <p className='w-full sm:w-[320px] text-[14px] md:w-[500px] md:text-[18px] text-justify xl:w-[700px]'>Lumânări handmade, create cu grijă pentru a aduce lumină, parfum delicat și o atmosferă caldă. Relaxează-te, bucură-te de fiecare clipă și simte magia aromelor! 🕯️✨</p>
            </div>
        </div>

        {/* Colectie marturii nunta si botez */}
        <div className='flex w-full flex-col pt-11 pb-11 gap-6 bg-[#1D1F24]'>
            <div className='w-full px-8 gap-2 flex flex-col items-center md:items-start'>
                <h1 className='text-white text-[24px] md:text-[27]'>Colectie Nunta & Botez</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:w-full md:flex md:justify-center gap-3'>
                    <PresentCard bgClass="bg-botez" title="Marturii botez"/>
                    <PresentCard bgClass="bg-nunta" title="Maturii nunta"/>
                </div>
            </div>

            <div className='w-full px-4 pt-4 flex justify-center items-center'>
                <button onClick={() => {navigate('/products')}} className='text-[16px] bg-[#F9EABE] px-4 py-2 rounded-3xl duration-[0.3s] transition-ease-in-out hover:bg-[#dbcb9b] hover:translate-x-1'>
                    Vezi colectie
                </button>
            </div>
        </div>

        {/* Banner 2 */}
        <div className='w-full flex'>
            <div className='bg-banner-1 w-full h-[55vh] bg-cover bg-right sm:bg-bottom px-8 flex flex-col gap-3 items-start justify-center text-white'>
                <h1 className='text-[27px] md:text-[30px] xl:text-[45px]'> Lumina care îți încălzește sufletul! </h1>
                <p className='w-full sm:w-[320px] text-[14px] md:w-[500px] md:text-[18px] text-justify xl:w-[700px]'>Descoperă lumânările noastre handmade, create cu dragoste din ingrediente naturale. Parfum delicat, atmosferă magică și un strop de relaxare în fiecare flacără! ✨</p>
            </div>
        </div>

    </div>

  )
}

export default HomePage