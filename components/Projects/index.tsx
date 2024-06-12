import { Project } from 'utils/Types';
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { useData } from 'utils';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

type Props = {
  item: Project
}

const ProjectCard = ({ item }: Props) => {
  const [isHoverd, setIsHoverd] = useState(false)
  const gotoLink = () => {
    let link = item.github || item.live
    window.open(link, '_blank')
  }
  return (
    <div className='relative hover:scale-105 transition-all duration-300 overflow-visible h-[40vh] md:h-[45vh] md:w-[28vw] w-[90vw]'>

      <div
        onMouseEnter={() => setIsHoverd(true)}
        onMouseLeave={() => setIsHoverd(false)}
        className="border z-[1] bg-black absolute top-0 right-0 rounded-[30px] shadow-white hover:shadow-lg transition-all duration-300 hover:shadow-white shadow-md border-white md:w-[28vw] w-[90vw] pb-[1rem]">
        <div className="flex md:w-[28vw] w-[90vw] p-[5px] pb-[8px] item-center justify-between">
          {
            item.isLatest ? (
              <div data-cursor="block" className=" text-white shadow-white shadow-md hover:text-black hover:bg-white transition-all duration-300  flex items-center justify-center px-[1rem] h-[30px] rounded-[20px] ml-[1rem] mt-[1rem] border border-white">
                <p className="text-[16px]">LATEST PROJECT</p>
              </div>
            ) : (
              <div data-cursor="block" className=" text-[#999999] shadow-white shadow-md hover:text-black hover:bg-white transition-all duration-300  flex items-center justify-center px-[1rem] h-[30px] rounded-[20px] ml-[1rem] mt-[1rem] border border-[#999999]">
                <p className="text-[16px]">PROJECT</p>
              </div>
            )
          }
          <Link data-cursor="block" href={
            item.live ? item.live : item.github
          } target='_blank' className='flex items-center'>
            <BsFillArrowRightCircleFill className='text-white w-[40px]  hover:scale-110 transition-all duration-300  scale-125 mr-[8px]' />
          </Link>
        </div>
        <div className='flex md:w-[28vw] w-[90vw] item-center justify-center mt-[15px]'>
          <div className='md:w-[27vw] relative  pt-[2rem]  transition-all duration-200 h-[6rem] w-[85vw]' style={{
            background: `url(${item.image[0]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'end',
            backgroundRepeat: 'no-repeat'
          }}>
            <div className='md:w-[27vw] opacity-0 inline-flex duration-300 gap-[10px] items-center justify-center flex-wrap hover:opacity-100 transition-all h-[6rem] absolute top-0 left-0 w-[85vw]' style={{
              //background color to dim the image
              backgroundColor: 'rgba(0,0,0,0.5)',
              backdropFilter: 'blur(5px)',

            }}>
              <div className='inline-flex gap-[10px] overflow-hidden items-center justify-center w-[85vw] flex-wrap md:w-[27vw]'>

                {
                  item.tags.map((tag) => {
                    return (
                      <div data-cursor="block" key={tag} className='flex brightness-200 font-semibold  bg-white text-black transition-all duration-300  items-center justify-center px-[10px] h-[25px] overflow-hidden rounded-[20px] border border-white'>
                        <p className='text-[16px]'>{tag}</p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
        <div className='flex md:w-[28vw] w-[90vw] text-white item-center pl-[1.5rem] mt-[16px]'>
          <p className='md:text-[20px] text-[18px] font-[500] tracking-wide border-b pb-[10px] md:w-[26vw] w-[80vw] border-white'>{item.name}</p>
        </div>
        <div className='flex md:w-[28vw] w-[90vw] text-white pb-[10px] item-center pl-[1.5rem] mt-[16px]'>
          <p className='tracking-wide line-clamp-2 md:w-[26vw] w-[80vw]'>{item.description}</p>
        </div>
      </div>
    </div>

  )
}

const Projects = () => {
  const { projects } = useData()
  return (
    <div id='projects' className="w-[100vw] flex justify-center mt-[2rem]">
      <div style={{
        backdropFilter: 'blur(10px)',

      }} className="w-[95vw] pt-[5vh]  rounded-t-[5vw]  overflow-y-hidden flex flex-wrap gap-[1rem] md:justify-center justify-center">
        {
          projects.map((project, index) => {
            return (
              <motion.div className='p-[5px] overflow-visible pb-[1rem]' initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + (0.04 * index) }} key={project._id}>
                <ProjectCard item={project} />
              </motion.div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Projects