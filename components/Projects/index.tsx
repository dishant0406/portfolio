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
          <div className='md:w-[27vw] relative  pt-[2rem]  transition-all duration-200 h-[6rem] w-[85vw]' style={{
            background: `url(${item.image[0]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'end',
            backgroundRepeat: 'no-repeat',
     
          }} >
            <div className='md:w-[27vw] opacity-0 inline-flex duration-300 gap-[10px] items-center justify-center flex-wrap hover:opacity-100 transition-all h-[6rem] absolute top-0 left-0 w-[85vw]' style={{
              //background color to dim the image
              backgroundColor: 'rgba(0,0,0,0.5)',
              backdropFilter: 'blur(5px)',
              
            }}>
              <div className='inline-flex gap-[10px] items-center justify-center w-[85vw] flex-wrap md:w-[27vw]'>

             {
               item.tags.map((tag)=>{
                 return (
                   <div className='flex brightness-200 font-semibold  bg-white text-black transition-all duration-300 cursor-pointer items-center justify-center px-[10px] h-[25px] overflow-hidden rounded-[20px] border border-white'>
                    <p className='text-[16px]'>{tag}</p>
                  </div>
                )
              })
            }
            </div>
            </div>
          </div>
        </div>
        <div className='flex md:w-[30vw] w-[90vw] text-white item-center pl-[1.5rem] mt-[16px]'>
          <p className='md:text-[20px] text-[18px] font-[500] tracking-wide border-b pb-[10px] md:w-[26vw] w-[80vw] border-white'>{item.name}</p>
        </div>
        <div className='flex md:w-[30vw] w-[90vw] text-white item-center pl-[1.5rem] mt-[16px]'>
          <p className='tracking-wide  pb-[10px] md:w-[26vw] w-[80vw]'>{item.description.length>75?
            `${item.description.slice(0,75)}...`:
            item.description
        }</p>
        </div>
        {/* <div className='flex md:w-[30vw] justify-center mt-[1rem] w-[90vw]'>
          <div className='flex md:w-[25vw] flex-wrap gap-[10px] w-[85vw]'>
          {
              item.tags.map((tag)=>{
                return (
                  <div className='flex hover:bg-white hover:text-black transition-all duration-300 cursor-pointer items-center justify-center px-[10px] h-[30px] rounded-[20px] text-white border border-white'>
                    <p className='text-[16px]'>{tag}</p>
                  </div>
                )
              })
            }
          </div>
        </div> */}
      </div>
 
  )
}

const Projects = () => {
  const { projects } = useData()
  return (
    <div id='projects' className="w-[100vw] flex justify-center my-[2rem]">
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