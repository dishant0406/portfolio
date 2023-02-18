import { Project } from 'utils/Types';
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import { useData } from 'utils';

type Props = {
  item: Project
}

const ProjectCard = ({item}:Props)=>{

  const gotoLink = () => {
    let link = item.github || item.live
    window.open(link, '_blank')
  }
  return (
   
      <div className="border rounded-[30px] border-white md:w-[30vw] w-[90vw] pb-[1rem]">
        <div className="flex md:w-[30vw] w-[90vw] item-center justify-between">
          {
            item.isLatest?(
              <div className=" text-white hover:text-black hover:bg-white transition-all duration-300 cursor-pointer flex items-center justify-center px-[1rem] h-[30px] rounded-[20px] ml-[1rem] mt-[1rem] border border-white">
                <p className="text-[16px]">LATEST PROJECT</p>
              </div>
            ):(
              <div className=" text-[#999999] hover:text-black hover:bg-white transition-all duration-300 cursor-pointer flex items-center justify-center px-[1rem] h-[30px] rounded-[20px] ml-[1rem] mt-[1rem] border border-[#999999]">
                <p className="text-[16px]">PROJECT</p>
              </div>
            )
          }
          <div className='flex items-center'>
            <BsFillArrowRightCircleFill onClick={gotoLink} className='text-white w-[40px] cursor-pointer hover:scale-110 transition-all duration-300  scale-125 mr-[8px]'/>
          </div>
        </div>
        <div className='flex md:w-[30vw] w-[90vw] item-center justify-center mt-[15px]'>
          <div className='md:w-[27vw] h-[6rem] w-[85vw]' style={{
            background: `url(${item.image[0]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'end',
            backgroundRepeat: 'no-repeat'
          }} />
        </div>
        <div className='flex md:w-[30vw] w-[90vw] text-white item-center pl-[1.5rem] mt-[16px]'>
          <p className='md:text-[20px] text-[18px] font-[500] tracking-wide border-b pb-[10px] md:w-[26vw] w-[80vw] border-white'>{item.name}</p>
        </div>
        <div className='flex md:w-[30vw] w-[90vw] text-white item-center pl-[1.5rem] mt-[16px]'>
          <p className='tracking-wide  pb-[10px] md:w-[26vw] w-[80vw]'>{item.description.length>90?
            `${item.description.slice(0,90)}...`:
            item.description
        }</p>
        </div>
      </div>
 
  )
}

const Projects = () => {
  const { projects } = useData()
  return (
    <div className="w-[100vw] flex justify-center my-[2rem]">
    <div className="w-[95vw] flex flex-wrap gap-[1rem] md:justify-start justify-center">
    {
        projects.map((project)=>{
          return (
            <ProjectCard item={project} key={project._id} />
          )
        })
    }
  </div>
  </div>
  )
}

export default Projects