import './App.css'
import Banner from './components/banner'
import FeaturedProject from './components/featured-project'
import Button from './components/ui/button'
import imagePlaceholder from './assets/images/image-placeholder.jpg';
import SkillsSection from './components/container/skills-section';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef, useState, useLayoutEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function App() {
  const featuredProjects = [
    {
      id: 1,
      title: 'Native Real Estate',
      imageUrl: imagePlaceholder,
      technologies: [ 'HTML', 'CSS', 'Javascript', 'Wordpress' ],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      demoLink: '/'
    },
    {
      id: 2,
      title: 'Native Real Estate',
      imageUrl: imagePlaceholder,
      technologies: [ 'HTML', 'CSS', 'Javascript', 'Wordpress' ],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      demoLink: '/'
    },
    {
      id: 3,
      title: 'Native Real Estate',
      imageUrl: imagePlaceholder,
      technologies: [ 'HTML', 'CSS', 'Javascript', 'Wordpress' ],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      demoLink: '/'
    },
    {
      id: 4,
      title: 'Native Real Estate',
      imageUrl: imagePlaceholder,
      technologies: [ 'HTML', 'CSS', 'Javascript', 'Wordpress' ],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      demoLink: '/'
    }
  ];
  const component = useRef();
  const section = useRef();
  const slider = useRef();
  // const slide1 = useRef();
  // const slide2 = useRef();
  // const slide3 = useRef();

  useEffect(() => {

  });

  useGSAP(() => {

    gsap.to(slider.current, {
      xPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: section.current,
        pin: true,
        scrub: 1,
        end: () => "+=" + slider.current.offsetWidth,
        markers: false
      }
    })

  });


  return (
    <>
      <main className="bg-dark">

        <Banner>
          <h1 className="text-[#fff] text-center font-bold accent-font">Hey there! I&apos;m <span>Nico</span>, a passionate Web Developer that loves to convert web designs into an interactive and responsive website.</h1>
          <div className="text-center items-center justify-center mt-5 block lg:flex">
            <p className="text-[#fff] mb-5 lg:mb-0">Need a help to make your ideal website turn into reality?</p>
            <Button className="ml-5" href="/">Lets talk!</Button>
          </div>                 
        </Banner>

        <section className="py-[50px]">
          <div className="container">
            <h2 className="text-[#fff] mb-[40px] text-center lg:text-left">My <span className="text-primary">Projects</span></h2>
          </div>
            {featuredProjects &&
              featuredProjects.map((project, index) => {
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

        <section className="py-[50px]" ref={section}>
            <div className="container">
              <h2 className="text-center text-[#fff] mb-[100px]">
                Professional <br/><span className="text-primary">Experience</span>
              </h2>
            </div>
            <div className=" overflow-hidden">
              <div style={{ width: `${(890 * 4) + (204 * 2)}px` }} ref={slider}>

                <div className="relative px-[204px] flex">

                  <div className="inline-block w-[890px]">
                    <div className=" min-h-[145px]">
                      <h3 className="site-bg-gradient gradient-bordered-text">2018</h3>
                    </div>
                    
                    
                    <div className="pl-[70px] relative">
                      <div className="mb-[20px]">
                        <em className="absolute w-[25px] h-[25px] bg-primary rounded-[50%] left-0 top-0"></em>
                        <span className="font-bold text-[13px] text-[#4D4D4D] uppercase">July 2018 - July - 2021</span>
                      </div>
                      <div className="bg-[#141414] rounded-[10px] py-[50px] px-[25px] max-w-[640px]">
                        <small className="text-[#fff] font-bold text-[16px] inline-block mb-[5px]">August99</small>
                        <h4 className="text-primary font-bold text-[24px] mb-[10px]">Front End Web Developer</h4>
                        <p className="text-[#fff] font-medium text-[16px]">Built 100+ Real Estate websites successfully and delivered with quality despite of having a fast-paced environment. Attended AngularJs training provided by the company to keep myself updated on the latest technologies. Maintained my KPI score high. Managed to handle multiple tasks and delivered with quality under pressure.</p>
                      </div>
                    </div>
                  </div>

                  <div className="inline-block w-[890px]">
                    <div className="min-h-[145px]">
                      <h3 className="site-bg-gradient gradient-bordered-text mb-[100px]">2021</h3>
                    </div>
                    
                    <div className="pl-[70px] relative">
                      <div className="mb-[20px]">
                        <em className="absolute w-[25px] h-[25px] bg-primary rounded-[50%] left-0 top-0"></em>
                        <span className="font-bold text-[13px] text-[#4D4D4D] uppercase">July 2021 - July - 2022</span>
                      </div>
                      <div className="bg-[#141414] rounded-[10px] py-[50px] px-[25px] max-w-[640px]">
                        <small className="text-[#fff] font-bold text-[16px] inline-block mb-[5px]">August99</small>
                        <h4 className="text-primary font-bold text-[24px] mb-[10px]">Full Stack Web Developer</h4>
                        <p className="text-[#fff] font-medium text-[16px]">Promoted as a Full-stack Developer and given more complex tasks. Developed dynamic Real Estate website and custom templates using PHP. Adhered to WCAG standards, used Google PageSpeed Insights and GTMetrix for improving website performance. Successfully developed HTML email templates using Mailchimp.</p>
                      </div>
                    </div>
                  </div>

                  <div className="inline-block w-[890px]">
                    <div className="min-h-[145px]">
                      <h3 className="site-bg-gradient gradient-bordered-text mb-[100px]">2022</h3>
                    </div>
                    
                    
                    <div className="pl-[70px] relative mb-[50px]">
                      <div className="mb-[20px]">
                        <em className="absolute w-[25px] h-[25px] bg-primary rounded-[50%] left-0 top-0"></em>
                        <span className="font-bold text-[13px] text-[#4D4D4D] uppercase">Febraury 2022 - <span className="text-[14px] bg-primary text-[#fff] capitalize px-[15px] py-[6px] rounded-[10px]">Present</span></span>
                      </div>
                      <div className="bg-[#141414] rounded-[10px] py-[50px] px-[25px] max-w-[640px]">
                        <small className="text-[#fff] font-bold text-[16px] inline-block mb-[5px]">Parallel Outsourcing</small>
                        <h4 className="text-primary font-bold text-[24px] mb-[10px]">Front End Developer</h4>
                        <p className="text-[#fff] font-medium text-[16px]">Successfully developed Wordpress websites applying coding best practices, optimization, responsiveness and compatibility on different kind of browsers. Integrated Advance Custom Field plugin to make the website dynamic. Maintained and update websites based on client requests. Contributed to the team by collaborating effectively to the other developers and project managers to solve problems resulting in positive outcomes.</p>
                      </div>
                    </div>

                    {/* <div className="pl-[70px] relative">
                      <div className="mb-[20px]">
                        <em className="absolute w-[25px] h-[25px] bg-primary rounded-[50%] left-0 top-0"></em>
                        <span className="font-bold text-[13px] text-[#4D4D4D] uppercase">June 2022 - <span className="text-[14px] bg-primary text-[#fff] capitalize px-[15px] py-[6px] rounded-[10px]">Present</span></span>
                      </div>
                      <div className="bg-[#141414] rounded-[10px] py-[50px] px-[25px] max-w-[640px]">
                        <small className="text-[#fff] font-bold text-[16px] inline-block mb-[5px]">Taocrowd</small>
                        <h4 className="text-primary font-bold text-[24px] mb-[10px]">Front End Developer</h4>
                        <p className="text-[#fff] font-medium text-[16px]"> Developed beautiful Real Estate Website applying responsiveness and compatibility on different kind of browsers. Delivered projects that are optimized and with quality despite of tight deadline and having a full-time job.  </p>
                      </div>
                    </div> */}

                  </div>

                  <div className="inline-block w-[890px]">

                    <div className="min-h-[145px]">
                      
                    </div>
                    {/* <h3 className="site-bg-gradient gradient-bordered-text mb-[100px]">2022</h3> */}

                    <div className="pl-[70px] relative">
                      <div className="mb-[20px]">
                        <em className="absolute w-[25px] h-[25px] bg-primary rounded-[50%] left-0 top-0"></em>
                        <span className="font-bold text-[13px] text-[#4D4D4D] uppercase">June 2022 - <span className="text-[14px] bg-primary text-[#fff] capitalize px-[15px] py-[6px] rounded-[10px]">Present</span></span>
                      </div>
                      <div className="bg-[#141414] rounded-[10px] py-[50px] px-[25px] max-w-[640px]">
                        <small className="text-[#fff] font-bold text-[16px] inline-block mb-[5px]">Taocrowd</small>
                        <h4 className="text-primary font-bold text-[24px] mb-[10px]">Front End Developer</h4>
                        <p className="text-[#fff] font-medium text-[16px]"> Developed beautiful Real Estate Website applying responsiveness and compatibility on different kind of browsers. Delivered projects that are optimized and with quality despite of tight deadline and having a full-time job.  </p>
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            </div>
        </section>

        <SkillsSection/>

      </main>
    </>
  )
}

export default App
