import { Info, Project } from 'utils/Types'
import { NavBar, HeroSection, Projects, SEO } from 'components'
import { client, useData } from 'utils'
import { useEffect } from 'react'
import Image from 'next/image'
import { HiOutlineMail } from "react-icons/hi";
import type { IpadCursorConfig } from 'ipad-cursor'
import { IPadCursorProvider, useIPadCursor } from 'ipad-cursor/react'

type Props = {
  projects: Project[],
  myInfo: Info[]
}

const Home = ({ projects, myInfo }: Props) => {
  const { setProjects, setMyInfo } = useData()
  const config: IpadCursorConfig = {
    blockStyle: {
      radius: 30
    },
    enableAutoUpdateCursor: true,
    enableLighting: true,
  }
  useIPadCursor()

  useEffect(() => {
    setProjects(projects)
    setMyInfo(myInfo[0])
  }, [])

  return (
    <IPadCursorProvider config={config}>
      <div className='min-h-[100vh] select-none w-[100vw] bg-black'>
        <SEO title='Dishant Sharma - Developer' />
        <NavBar />
        <HeroSection />
        <Projects />
        <div className='md:h-[10vh] md:py-0 py-[1rem] w-full border-t border-white px-[5%] md:gap-0 gap-[1rem] justify-between md:flex-row flex-col flex items-center'>
          <div className='flex items-center gap-[1rem]'>
            <Image src='/assets/favicon.ico' alt='logo' width={30} height={30} />
            <p className='text-white'>© {
              new Date().getFullYear()
            } Dishant Sharma</p>
          </div>
          <div className='flex items-center gap-[0.5rem]'>
            <HiOutlineMail className='text-white text-[20px]' />
            <a href='mailto:dishant5570@gmail.com' className='text-white'>
              dishant5570@gmail.com
            </a>
          </div>
        </div>
      </div>
    </IPadCursorProvider>
  )
}

//get props from sanity client
export async function getStaticProps() {
  //query to type portfolioProject which is not draft and images as a array of cdn links sort such that the project with isLatest as true is at top and all with isLatest as null below it
  const query = `*[_type == "portfolioProject" && !(_id in path("drafts.**"))]{
        _id,
        name,
        description,
        "image": image[].asset->url,
      isLatest,
      github,
      live,
      tags
  }`

  let projects: Project[] = await client.fetch(query)

  //forEach to projects such that if isLatest is null set to false and sort such that project with isLatest true is at top
  projects.forEach((project) => {
    if (project.isLatest === null) {
      project.isLatest = false
    }
  })
  projects.sort((a, b) => {
    if (a.isLatest) {
      return -1
    }
    return 1
  })

  //query to fetch type myinfo which is not draft with image as cdn url and resume is file which should also be a cdn
  const query2 = `*[_type == "myinfo" && !(_id in path("drafts.**"))]{
        _id,
        name,
        about,
        company,
        email,
        github,
        linkedin,
        twitter,
        job,
        role,
        skills,
        "image": image.asset->url,
    "resume": resume.asset->url,
    "resumeImage": resumeImage.asset->url
  }`

  let myInfo = await client.fetch(query2)


  return {
    props: {
      projects,
      myInfo
    },
    revalidate: 120
  }
}

export default Home