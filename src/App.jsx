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

        <section className="py-[70px]">
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

      <footer className="bg-primary">
          <div className="block lg:flex">
              <div className="lg:w-[52.75%]">
                <div className="bg-[#031a39] rounded-tr-[50px] rounded-br-[50px] pt-[220px] pb-[160px] px-[90px]">
                  <h2 className="text-[#fff] mb-[50px]">Get in <span className="text-primary">Touch</span></h2>
                  <p className="text-[18px] text-[#fff] mb-[40px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <div className="relative">
                    <form>

                      <div className="relative mb-[30px]">
                        <label htmlFor="name" className="hidden">Name</label>
                        <input 
                          type="text" 
                          name="name" 
                          id="name" 
                          placeholder="Name" 
                          className="block w-full h-[75px] text-[15px] lg:text-[18px] text-[#fff] font-normal bg-[#03132A] px-[25px] border-none rounded-[10px] outline-none focus:outline-2 focus:outline-primary"/>
                      </div>

                      <div className="lg:flex lg:mx-[-15px] mb-[30px]"> 
                        <div className="relative lg:w-1/2 lg:px-[15px] mb-[30px] lg:mb-0">
                          <label htmlFor="email" className="hidden">Email</label>
                          <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Email" 
                            className="block w-full h-[75px] text-[15px] lg:text-[18px] text-[#fff] font-normal bg-[#03132A] px-[25px] border-none rounded-[10px] outline-none focus:outline-2 focus:outline-primary"/>
                        </div>
                        
                        <div className="relative lg:w-1/2 lg:px-[15px]">
                          <label htmlFor="phone-number" className="hidden">Phone number</label>
                          <input 
                            type="tel" 
                            name="phone-number" 
                            id="phone-number" 
                            placeholder="Phone number" 
                            className="block w-full h-[75px] text-[15px] lg:text-[18px] text-[#fff] font-normal bg-[#03132A] px-[25px] border-none rounded-[10px] outline-none focus:outline-2 focus:outline-primary"/>
                        </div>
                      </div>

                      <div className="relative mb-[30px]">
                        <label htmlFor="message" className="hidden">Message</label>
                        <textarea 
                          name="message" 
                          id="message"
                          placeholder="Message"
                          className="block w-full h-[221px] text-[15px] lg:text-[18px] text-[#fff] font-normal bg-[#03132A] px-[25px] border-none rounded-[10px] resize-none pt-[28px] outline-none focus:outline-2 focus:outline-primary"></textarea>
                      </div>

                      <div className=" text-right">
                        <Button type='submit'>Submit</Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="lg:w-[47.25%]"></div>
          </div>
      </footer>
    </>
  )
}

export default App
