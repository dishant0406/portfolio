import {BsGithub,BsTwitter,BsFillArrowRightCircleFill} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
import { useData } from 'utils';
import {motion} from 'framer-motion'

const NavBar = () => {

  const {info} = useData()
  return (
    <div className='w-[100vw] h-[80px] justify-between flex items-center'>
      <motion.div initial={{ opacity: 0, x:-200 }} animate={{opacity: 1,x:0 }} transition={{ delay: 0.3 }} className='h-[80px] flex items-center'>
        <div className='md:w-[16vw] w-[40vw] ml-[1rem] border border-white flex rounded-[20px] items-center justify-center h-[40px]'>
          <div className='md:w-[15.2vw] w-[95%] cursor-pointer justify-between text-white flex items-center hover:bg-white transition-all duration-300 hover:text-black border border-white rounded-[20px] h-[30px]'>
            <p className=' text-[18px] ml-[15px]'>Portfolio</p>
            <BsFillArrowRightCircleFill className=' scale-125 mr-[8px]'/>
          </div>
        </div>
        <div className='w-[31.5vw] bg-[#262626] gap-[6px] ml-[1rem] border border-white hidden md:flex rounded-[20px] items-center justify-center h-[40px]'>
          <div className='w-[15.2vw] cursor-pointer text-white flex items-center hover:bg-white transition-all duration-300 hover:text-black border border-white rounded-[20px] h-[30px]'>
            <p className=' text-[18px] ml-[15px]'>About Me</p>
          </div>
          <a href='#projects' className='w-[15.2vw] cursor-pointer text-white flex items-center hover:bg-white transition-all duration-300 hover:text-black border border-white rounded-[20px] h-[30px]'>
            <p className=' text-[18px] ml-[15px]'>Projects</p>
          </a>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x:200 }} animate={{opacity: 1,x:0 }} transition={{ delay: 0.3 }} className='flex gap-[8px] mr-[2rem] h-[80px] items-center'>
        <a href={info?.github} target='_blank' className='h-[50px] hover:scale-95 flex transition-all duration-300 text-white hover:bg-white hover:text-black items-center justify-center w-[50px] rounded-full border border-white'>
          <BsGithub className=' scale-125'/>
        </a>
        <a href={info?.linkedin} target='_blank' className='h-[50px] hover:scale-95 flex transition-all duration-300 text-white hover:bg-white hover:text-black items-center justify-center w-[50px] rounded-full border border-white'>
          <FaLinkedinIn className=' scale-125'/>
        </a>
        <a href={info?.twitter} target='_blank' className='h-[50px] hover:scale-95 flex transition-all duration-300 text-white hover:bg-white hover:text-black items-center justify-center w-[50px] rounded-full border border-white'>
          <BsTwitter className=' scale-125'/>
        </a>
      </motion.div>
      
    </div>
  )
}

export default NavBar