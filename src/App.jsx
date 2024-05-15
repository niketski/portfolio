import './App.css'
import Banner from './components/banner'
import FeaturedProject from './components/featured-project'
import Button from './components/ui/button'
import SkillsSection from './components/container/skills-section';
import ExperiencesSection from './components/container/experiences-section';
import { featuredProjectsData } from './data/featured-projects-data';
import AboutSection from './components/container/about-section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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

                <div className="bg-[#031a39] lg:rounded-tr-[50px] lg:rounded-br-[50px] pt-[70px] lg:pt-[220px] pb-[70px] lg:pb-[160px] px-[15px] md:px-[30px] xl:px-[90px]">
                  <h2 className="text-[#fff] mb-[50px]">Get in <span className="text-primary">Touch</span></h2>
                  <p className="text-[18px] text-[#fff] mb-[40px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <div className="relative">
                    <form>

                      <div className="relative mb-[15px] lg:mb-[30px]">
                        <label htmlFor="name" className="hidden">Name</label>
                        <input 
                          type="text" 
                          name="name" 
                          id="name" 
                          placeholder="Name" 
                          className="block w-full h-[55px] lg:h-[75px] text-[15px] lg:text-[18px] text-[#fsff] font-normal bg-[#03132A] px-[25px] border-none rounded-[10px] outline-none focus:outline-2 focus:outline-primary"/>
                      </div>

                      <div className="lg:flex lg:mx-[-15px] mb-[15px] lg:mb-[30px]"> 
                        <div className="relative lg:w-1/2 mb-[15px] lg:mb-0 lg:px-[15px]">
                          <label htmlFor="email" className="hidden">Email</label>
                          <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Email" 
                            className="block w-full h-[55px] lg:h-[75px] text-[15px] lg:text-[18px] text-[#fff] font-normal bg-[#03132A] px-[25px] border-none rounded-[10px] outline-none focus:outline-2 focus:outline-primary"/>
                        </div>

                        <div className="relative lg:w-1/2 lg:px-[15px]">
                          <label htmlFor="phone-number" className="hidden">Phone number</label>
                          <input 
                            type="tel" 
                            name="phone-number" 
                            id="phone-number" 
                            placeholder="Phone number" 
                            className="block w-full h-[55px] lg:h-[75px] text-[15px] lg:text-[18px] text-[#fff] font-normal bg-[#03132A] px-[25px] border-none rounded-[10px] outline-none focus:outline-2 focus:outline-primary"/>
                        </div>
                      </div>

                      <div className="relative mb-[15px] lg:mb-[30px]">
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
              <div className="lg:w-[47.25%]">
                <div className="pt-[70px] lg:pt-[220px] pb-[70px] lg:pb-[160px] px-[15px] md:px-[30px] xl:px-[60px]">
                  <h2 className="text-[#fff] mb-[50px]">Contact Me</h2>

                  <div className="text-[#fff] text-[16px] lg:text-[20px] font-medium mb-[50px]">
                    <ul>

                      <li className="flex items-center pl-[40px] lg:pl-[50px] mb-[20px] relative">
                        <FontAwesomeIcon 
                          icon={faPhone} 
                          className="text-[#fff] text-[25px] lg:text-[32px] absolute top-[-2px] left-0"/>
                        <a href="tel:+63.921.969.7480" className="transition-colors duration-300 hover:text-[#031a39]">+63 921 969 7480</a>
                      </li>

                      <li className="flex items-center pl-[40px] lg:pl-[50px] mb-[20px] relative">
                        <FontAwesomeIcon 
                          icon={faEnvelope} 
                          className="text-[#fff] text-[25px] lg:text-[32px] absolute top-[-2px] left-0"/>
                        <a href="mailto: limnicolebenedict3@gmail.com" className="transition-colors duration-300 hover:text-[#031a39]">limnicolebenedict3@gmail.com</a>
                      </li>

                      <li className="flex items-center pl-[40px] lg:pl-[50px] mb-[20px] relative">
                        <FontAwesomeIcon 
                          icon={faMapMarkerAlt} 
                          className="text-[#fff] text-[25px] lg:text-[32px] absolute top-[-2px] left-0"/>
                        <a href="https://maps.app.goo.gl/uPxnWL52Uk5Mh46V8" target="blank" className="transition-colors duration-300 hover:text-[#031a39]">0393 Quirino Avenue Don Galo Parañaque City</a>
                      </li>

                    </ul>
                  </div>

                  <div className="mb-[30px]">
                    <ul>
                      <li className="inline-block align-middle mr-[20px]">
                        <a href="https://www.facebook.com/nicolebenedict.lim" target="_blank">
                          <FontAwesomeIcon icon={faFacebook} className="text-[#fff] text-[32px] transition-colors duration-300 hover:text-[#031a39]"/>
                        </a>
                      </li>
                      <li className="inline-block align-middle mr-[20px]">
                        <a href="https://github.com/niketski" target="_blank">
                          <FontAwesomeIcon icon={faGithub} className="text-[#fff] text-[32px] transition-colors duration-300 hover:text-[#031a39]"/>
                        </a>
                      </li>
                      <li className="inline-block align-middle">
                        <a href="https://www.linkedin.com/in/nicolelim3/" target="_blank">
                          <FontAwesomeIcon icon={faLinkedin} className="text-[#fff] text-[32px] transition-colors duration-300 hover:text-[#031a39]"/>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-[16px] text-[#fff]">Copyright © NicoDev 2024.</p>
                  </div>
                </div>
              </div>
          </div>
      </footer>
    </>
  )
}

export default App
