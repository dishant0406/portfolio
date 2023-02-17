import {BsGithub,BsTwitter,BsFillArrowRightCircleFill} from 'react-icons/bs'

type Props = {}

const Projects = (props: Props) => {
  return (
    <div className="w-[100vw] flex justify-center my-[2rem]">
      <div className="w-[95vw] flex flex-wrap gap-[1rem] md:justify-start justify-center">
        <div className="border rounded-[30px] border-white md:w-[30vw] w-[90vw] pb-[1rem]">
          <div className="flex md:w-[30vw] w-[90vw] item-center justify-between">
            <div className=" text-white hover:text-black hover:bg-white transition-all duration-300 cursor-pointer flex items-center justify-center px-[1rem] h-[30px] rounded-[20px] ml-[1rem] mt-[1rem] border border-white">
              <p className="text-[16px]">LATEST PROJECT</p>
            </div>
            <div className='flex items-center'>
              <BsFillArrowRightCircleFill className='text-white w-[40px] cursor-pointer hover:scale-110 transition-all duration-300  scale-125 mr-[8px]'/>
            </div>
          </div>
          <div className='flex md:w-[30vw] w-[90vw] item-center justify-center mt-[15px]'>
            <div className='md:w-[27vw] h-[6rem] w-[85vw]' style={{
              background: `url("https://www.dishantsharma.me/images/projects/projectManagement.gif")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }} />
          </div>
          <div className='flex md:w-[30vw] w-[90vw] text-white item-center pl-[1.5rem] mt-[16px]'>
            <p className='md:text-[20px] text-[18px] font-[500] tracking-wide border-b pb-[10px] md:w-[26vw] w-[80vw] border-white'>Manalyse Project Management</p>
          </div>
          <div className='flex md:w-[30vw] w-[90vw] text-white item-center pl-[1.5rem] mt-[16px]'>
            <p className='tracking-wide  pb-[10px] md:w-[26vw] w-[80vw]'>A project Management web-app made using reactjs and firebase</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects