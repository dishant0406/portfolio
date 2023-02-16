import {BsGithub,BsTwitter,BsFillArrowRightCircleFill} from 'react-icons/bs'
const HeroSection = () => {
  return (
    <div className="w-[100vw] mt-[1rem] flex justify-center">
      <div className="w-[95vw] flex  bg-[#839292] justify-between rounded-[30px] items-end h-[35vh]">
        <div className='mb-[1rem] ml-[1rem]'>
          <p className="text-[6vw] tracking-tight text-white">
            Dishant Sharma —
          </p>
          <div className='flex gap-[10px] items-center'>
            <div className='w-[20vw] cursor-pointer justify-between text-white flex items-center hover:bg-white transition-all duration-300 hover:text-[#9ca8a8] border border-white rounded-[20px] h-[2.5vw]'>
              <p className=' text-[1.5vw]  ml-[15px]'>Full Stack Developer</p>
              <BsFillArrowRightCircleFill className=' scale-125 mr-[8px]'/>
            </div>
            <div>
              <p className='text-white text-[1.2vw]'>Frontend Developer - alive.house</p>
            </div>
          </div>
        </div>
        <div className='mb-[2rem] mr-[2rem]'>
          <img src='assets/Profile.png' className='h-[25vh]'/>
        </div>
      </div>
      
    </div>
  )
}

export default HeroSection