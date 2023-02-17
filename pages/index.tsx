import { NavBar, HeroSection, Projects } from 'components'

const Home = () => {
  return (
    <div className='min-h-[100vh] w-[100vw] bg-black'>
      <NavBar />
      <HeroSection />
      <Projects />
    </div>
  )
}

export default Home