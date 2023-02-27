import { useState } from 'react'
import {BsGithub,BsTwitter,BsFillArrowRightCircleFill} from 'react-icons/bs'
import { useData } from 'utils';
import {ResumeModal} from '..'
import { motion } from 'framer-motion';
const HeroSection = () => {
  const {info} = useData()
  let [isOpen, setIsOpen] = useState(false)
  const [isZoomed, setIsZoomed] = useState(false)

  return (
    <div className="w-[100vw] mt-[1rem] flex flex-col items-center">
      <motion.div initial={{ opacity: 0, y:100 }} animate={{opacity: 1,y:0 }} transition={{ delay: 0.3 }} className="w-[95vw] flex md:flex-row flex-col bg-[#839292] md:py-[0] py-[1rem] justify-between rounded-[30px] md:items-end md:h-[35vh]">
      <motion.div initial={{ opacity: 0, x:100 }} animate={{opacity: 1,x:0 }} transition={{ delay: 0.7 }} className='md:mb-[2rem] mb-[1rem] w-[95vw] items-center flex-col  flex md:hidden'>
          <img src={info?.image} className='h-[20vh] mb-[0.5rem]'/>
          <div onClick={()=>setIsOpen(true)} className='px-[2rem] bg-[#95a2a2] text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer flex items-center h-[30px] mt-[10px]  rounded-[20px]'>
            <p>Resume</p>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x:-200 }} animate={{opacity: 1,x:0 }} transition={{ delay: 0.7 }} className='mb-[1rem] md:ml-[1rem]'>
          <p className="md:text-[6vw] md:text-left text-center  text-[10vw] tracking-tight text-white">
            {info?.name} <span className='md:inline hidden'>—</span>
          </p>
          
          <div className='flex md:flex-row flex-col gap-[10px] md:ml-[0] items-center'>
            <div className='pl-[5px]  cursor-pointer justify-between text-white flex items-center hover:bg-white transition-all duration-300 hover:text-[#9ca8a8] border border-white rounded-[20px] h-[40px]'>
              <p className=' md:text-[20px] text-[24px] whitespace-nowrap  ml-[15px]'>{info?.job}</p>
              <BsFillArrowRightCircleFill className='ml-[2rem] scale-125 mr-[8px]'/>
            </div>
            <div>
              <p className='text-white text-[16px]'>{info?.role} - {info?.company}</p>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x:200 }} animate={{opacity: 1,x:0 }} transition={{ delay: 0.7 }} className='mb-[1rem] md:flex md:flex-col items-center hidden mr-[2rem]'>
          <img src={info?.image} className='h-[25vh]'/>
          <div onClick={()=>setIsOpen(true)} className='px-[1rem] text-white bg-[#95a2a2] hover:bg-white hover:text-black transition-all duration-300 cursor-pointer flex items-center h-[30px] mt-[10px]  rounded-[20px]'>
            <p>Resume</p>
          </div>
        </motion.div>
      </motion.div>
      <div className='max-w-[100vw] flex mt-[1rem] justify-center'>
        <div className='flex max-w-[90vw] flex-wrap gap-[10px]'>
          {
           info?.skills.map((skill, index)=>{
              return (
                <motion.div initial={{ opacity: 0, scale:0 }} animate={{opacity: 1,scale:1 }} transition={{ delay: 0.3 + (0.04*index)  }} key={skill} className='px-[1rem] text-[#555555] hover:bg-white transition-all duration-300 cursor-pointer hover:text-black h-[40px] border rounded-[20px] flex items-center border-[#555555]'>
                <p className=' text-[18px]'>{skill}</p>
              </motion.div>
              )
            })
          }
        </div>
      </div>
      <ResumeModal isOpen={isOpen} setIsOpen={setIsOpen} isZoomed={isZoomed} setIsZoomed={setIsZoomed}/>
      <img src={info?.resumeImage} className='hidden'/>
    </div>
  )
}

export default HeroSection