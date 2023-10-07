import {FC} from 'react'
import {skillsData} from '../../../lib/data'
const Skills:FC = () => {
  return (
    <div className='skills'>
        <h2 className='font-fontCanela text-4xl text-center pb-6'>My <span className='text-[#c49809]'>Skills</span> </h2>
        <ul className='flex flex-wrap justify-center  gap-2 text-gray-600'>
         { 
          skillsData.map(({name},index) =>  (
             <li key={index} className='bg-acentColor  rounded-xl px-5 py-3'>{name}</li> 
            ))
        }
        </ul>
    </div>
  )
}

export default Skills