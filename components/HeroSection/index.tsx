import { useState } from 'react'
import {BsGithub,BsTwitter,BsFillArrowRightCircleFill} from 'react-icons/bs'
const HeroSection = () => {
  const [skills, setSkills] = useState([
    {
      name: 'Javascript',
    },
    {
      name: 'HTML',
    },
    {
      name: 'CSS',
    },
    {
      name: 'React',
    },
    {
      name: 'Next',
    },
    {
      name: 'Tailwind',
    },
    {
      name: 'Node',
    },
    {
      name: 'Express',
    },
    {
      name: 'MongoDB',
    },
    {
      name: 'Firebase',
    },
    {
      name: 'Git',
    },
    {
      name: 'Github',
    },
    {
      name: 'TypeScript',
    },
    {
      name: 'Supabase',
    },
    {
      name: 'React Native',
    },

  ])

  return (
    <div className="w-[100vw] mt-[1rem] flex flex-col items-center">
      <div className="w-[95vw] flex md:flex-row flex-col bg-[#839292] md:py-[0] py-[1rem] justify-between rounded-[30px] md:items-end md:h-[35vh]">
      <div className='md:mb-[2rem] mb-[1rem] w-[95vw] justify-start  flex md:hidden'>
          <img src='assets/Profile.png' className='h-[20vh] ml-[1rem]'/>
        </div>
        <div className='mb-[1rem] ml-[1rem]'>
          <p className="md:text-[6vw]  text-[10vw] tracking-tight text-white">
            Dishant Sharma <span className='md:inline hidden'>—</span>
          </p>
          <p className="md:text-[6vw] mt-[-1rem] flex md:hidden text-left ml-[2rem] text-[10vw] tracking-tight text-white">
            —
          </p>
          <div className='flex md:flex-row flex-col gap-[10px] md:ml-[0] ml-[-1rem] items-center'>
            <div className='pl-[5px]  cursor-pointer justify-between text-white flex items-center hover:bg-white transition-all duration-300 hover:text-[#9ca8a8] border border-white rounded-[20px] h-[40px]'>
              <p className=' md:text-[20px] text-[24px] whitespace-nowrap  ml-[15px]'>Full Stack Developer</p>
              <BsFillArrowRightCircleFill className='ml-[2rem] scale-125 mr-[8px]'/>
            </div>
            <div>
              <p className='text-white text-[16px]'>Frontend Developer - alive.house</p>
            </div>
          </div>
        </div>
        <div className='mb-[2rem] md:flex hidden mr-[2rem]'>
          <img src='assets/Profile.png' className='h-[25vh]'/>
        </div>
      </div>
      <div className='max-w-[100vw] flex mt-[1rem] justify-center'>
        <div className='flex max-w-[90vw] flex-wrap gap-[10px]'>
          {
            skills.map(skill=>{
              return (
                <div className='px-[1rem] text-[#555555] hover:bg-white transition-all duration-300 cursor-pointer hover:text-black h-[40px] border rounded-[20px] flex items-center border-[#555555]'>
                <p className=' text-[18px]'>{skill.name}</p>
              </div>
              )
            })
          }
        </div>
      </div>
      
    </div>
  )
}

export default HeroSection