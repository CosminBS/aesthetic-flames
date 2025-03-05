import React from 'react'
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from "react-toastify"

const Contact = () => {

    const {register, handleSubmit, formState:{errors}} = useForm()

    const onSubmit = (data) => {
        if(data){
            toast('Va multumim! O sa va contactam in cel mai scurt timp.')
        }
    }

  return (
    <div className='pb-4 pt-[55px] flex flex-col gap-4 bg-[#1D1F24]'>
        <div className='w-full flex items-center justify-center h-[125px] bg-banner bg-cover bg-center'>
            <h1 className='text-[40px] text-white uppercase font-bold'>Contact</h1>
        </div>
        <div className='flex flex-col gap-7 px-8'>
          <div className='w-full py-11 flex  justify-center items-center'>
            <form className="py-3 w-full md:w-[350px] flex flex-col gap-3 text-[#C0B696]" onSubmit={handleSubmit(onSubmit)}>

                {/* Email */}
                <div className="w-full flex flex-col gap-2">
                    <label htmlFor="email">Email*</label>
                    <input type="email" id="email" placeholder="e.g. mail@mail.com" {...register('email', {
                    required: {value: true, message: 'This filed is mandatory'},
                    pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'Invalid email address'
                    }
                        })} className="border-[2px] px-2 rounded-md h-[55px] text-black focus:outline-none focus:border-[#C0B696]"/>
                    <p className="text-sm h-6 text-red-600">{errors.email && errors.email.message}</p>
                </div>

                {/* Name */}
                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor="name">Nume*</label>
                    <input type="text" id='name' placeholder='e.g. Dan Diaconescu' {...register('name', {
                        required: {value: true, message: 'This filed is mandatory'}
                    })} className="border-[2px] px-2 rounded-md h-[55px] text-black focus:outline-none focus:border-[#C0B696]" />
                    <p className="text-sm h-6 text-red-600">{errors.name && errors.name.message}</p>

                </div>

                {/* Phone number */}
                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor="phone">Telefon*</label>
                    <input type="text" id='phone' placeholder='e.g. +0123 456 789' {...register('phone', {
                        required: {value: true, message: 'This filed is mandatory'}
                    })} className="border-[2px] px-2 rounded-md h-[55px] text-black focus:outline-none focus:border-[#C0B696]" />
                    <p className="text-sm h-6 text-red-600">{errors.phone && errors.phone.message}</p>

                </div>

                {/* Message */}
                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor="message">Mesaj*</label>
                    <textarea id='message' {...register('message', {
                        required: {value:true, message: 'This filed is mandatory'}
                    })} className="border-[2px] px-2 py-2 rounded-md h-[55px] text-black focus:outline-none focus:border-[#C0B696]" />
                    <p className="text-sm h-6 text-red-600">{errors.name && errors.name.message}</p>
                </div>


                <button type="submit" className="w-full bg-[#C0B696] h-[45px] rounded-md text-white shadow-md hover:bg-[#8a836a]">Trimite</button>
            <ToastContainer/>

            </form>
          </div>
        </div>
    </div>
  )
}

export default Contact