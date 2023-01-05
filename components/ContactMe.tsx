import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs={
  name: string;
  email: string;
  subject: string;
  message: string;
}
type Props = {}

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData => 
  window.location.href=`mailto:dmusee721@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}, ${formData.message} (${formData.email})`;
  return (
    <div className='h-screen  flex  flex-col  '>
      <h3 className=' text-center pt-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
    Contact </h3>
    
    <div className='lg:pt-40 pt-10 flex flex-col lg:space-y-10 space-y-5'>
      <h4 className='lg:text-4xl text-xl font-semibold text-center'>
        I have got just what you need.{""}
        <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk.</span>
      </h4>
    
    <div className='lg:space-y-10 space-y-5'>
    <div className='flex items-center space-x-5 justify-center'>
      <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
      <p className='lg:text-2xl'>+254717441041</p>
    </div>
    <div className='flex items-center space-x-5 justify-center'>
      <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
      <p className='lg:text-2xl text-xl'>dmusee721@gmail.com</p>
    </div>
    <div className='flex items-center space-x-5 justify-center'>
      <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
      <p className='lg:text-2xl text-lg'>Nairobi, Kenya</p>
    </div>
    </div>
    <form 
    onSubmit={handleSubmit(onSubmit)}
    className=" flex flex-col space-y-2 w-fit mx-auto">
      <div className="flex  space-x-2">
        <input {...register('name')} placeholder='Name' className='contactInput' type="text"/>
        <input {...register('email')} placeholder='Email' className='contactInput' type="email"/>
      </div>
      <input {...register('subject')} placeholder='Subject' className='contactInput' type="text"/>
      <textarea {...register('message')} placeholder='Message' className='contactInput' />
      
      <button type='submit' className='bg-[#F7AB0A]  py-5 px-10 rounded-md text-black font-bold'>
        <h1 className='mr-20'>Submit</h1></button>
    </form>
    </div>
    </div>
  )
}

export default ContactMe

