'use client'
import { motion } from 'framer-motion'
import {FC} from 'react'
import {RiSendPlaneFill} from 'react-icons/ri'



export const Contact:FC = () => {
    const fadeIn = {
        initial: {
          opacity: 0,
          y: 100,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition:{duration:1}
          }
        }

    const sendData  = async (form:any ) => {
        form.preventDefault();
        const res = await fetch('/api/send/',{
          headers: {
            'Content-Type': 'application/json'
          },
            method: 'POST',
            body: JSON.stringify({
              name:form.target[1].value,
              email:form.target[2].value,
              message:form.target[3].value
            })
        }) 
      
        //await res.json();
        form.target['name'].value= ''
        form.target['email'].value= ''
        form.target['message'].value= ''
        
      
       
       
    } 
  
return (
  
<motion.div
id='contact'
variants={fadeIn}
initial='initial'
whileInView='animate'

className="flex items-center justify-start ">
  <div className="mx-auto w-full max-w-lg">
    <h1 className="py-4 text-4xl text-center font-fontCanela">Contact <span className='text-acentColor'> Me</span></h1>
    <p  className=" mt-3 text-gray-600"> Email us at  <a className='underline font-semibold' href='mailto:osmelweb@gmail.com'>osmelweb@gmail.com</a> or message us here:</p>

    <form onSubmit={sendData}  className="mt-10">
       <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" /> 
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="relative z-0">
          <input required maxLength={500} type="text" name="name" className="peer block w-full appearance-none border-0 border-b border-acentColor bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-0" placeholder=" " />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-acentColor peer-focus:dark:text-blue-500">Your name</label>
        </div>
        <div className="relative z-0">
          <input required maxLength={50}  type="email" name="email" className="peer block w-full appearance-none border-0 border-b border-acentColor bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-0" placeholder=" " />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-acentColor peer-focus:dark:text-blue-500">Your email</label>
        </div>
        <div className="relative z-0 col-span-2">
          <textarea required maxLength={500}  name="message" rows ={5}  className="peer block w-full appearance-none border-0 border-b border-acentColor bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-0" placeholder=" "></textarea>
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-acentColor peer-focus:dark:text-blue-500">Your message</label>
        </div>
      </div>
      <button type="submit" name='btn' className="mt-5  bg-acentColor  px-6 py-4 flex items-center  gap-2 rounded-full shadow-xl transition duration-300  hover:scale-110 text-white">Send Message <RiSendPlaneFill/> </button>
    </form>
  </div>
</motion.div>
    
  )
}
