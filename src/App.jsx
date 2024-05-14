import './App.css'
import Banner from './components/banner'
import FeaturedProject from './components/featured-project'
import Button from './components/ui/button'
import SkillsSection from './components/container/skills-section';
import ExperiencesSection from './components/container/experiences-section';
import { featuredProjectsData } from './data/featured-projects-data';
import AboutSection from './components/container/about-section';

function App() {

  return (
    <>
      <main className="bg-dark">

        <Banner>
          <h1 className="text-[#fff] text-center font-bold accent-font leading-[45px] xl:leading-[70px]">Hey there! I&apos;m <span>Nico</span>, a passionate Web Developer that loves to convert web designs into an interactive and responsive website.</h1>
          <div className="text-center items-center justify-center mt-5 block lg:flex">
            <p className="text-[#fff] mb-5 lg:mb-0">Need a help to make your ideal website turn into reality?</p>
            <Button className="ml-5" href="/">Lets talk!</Button>
          </div>                 
        </Banner>

        <section className="py-[50px]">
          <div className="container">
            <h2 className="text-[#fff] mb-[40px] text-center lg:text-left">My <span className="text-primary">Projects</span></h2>
          </div>
            {featuredProjectsData &&
              featuredProjectsData.map((project, index) => {
                return (
                  <FeaturedProject 
                    key={project.id}
                    isEven={index % 2 !== 0} 
                    title={project.title}
                    imageUrl={project.imageUrl}
                    technologies={project.technologies}
                    description={project.description}
                    demoLink={project.demoLink}/>
                );
              })
            }
          
        </section>

        <SkillsSection/>

        <ExperiencesSection/>

        <AboutSection/>

      </main>
    </>
  )
}

export default App
