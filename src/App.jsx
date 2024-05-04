import './App.css'
import Banner from './components/banner'
import FeaturedProject from './components/featured-project'
import Button from './components/ui/button'
import imagePlaceholder from './assets/images/image-placeholder.jpg';

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
        <section>
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
      </main>
    </>
  )
}

export default App
