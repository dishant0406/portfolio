import { Info, Project } from 'utils/Types'
import { NavBar, HeroSection, Projects } from 'components'
import { client, useData } from 'utils'
import { useEffect } from 'react'

type Props = {
  projects: Project[],
  myInfo:Info[]
}

const Home = ({projects, myInfo}:Props) => {
  const { setProjects, setMyInfo } = useData()

  useEffect(()=>{
    setProjects(projects)
    setMyInfo(myInfo[0])
  },[])

  return (
    <div className='min-h-[100vh] w-[100vw] bg-black'>
      <NavBar />
      <HeroSection />
      <Projects />
    </div>
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
    live
  }`

  let projects:Project[] = await client.fetch(query)
  
  //forEach to projects such that if isLatest is null set to false and sort such that project with isLatest true is at top
  projects.forEach((project)=>{
    if(project.isLatest===null){
      project.isLatest = false
    }
  })
  projects.sort((a,b)=>{
    if(a.isLatest){
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
  }
}

export default Home