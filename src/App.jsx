import './App.css'
import Banner from './components/banner'

function App() {

  return (
    <>
      <main className="bg-dark">
        <Banner>
          <h1 className="text-[#fff] text-center font-bold accent-font">Hey there! I&apos;m <span>Nico</span>, a passionate Web Developer that loves to convert web designs into an interactive and responsive website.</h1>
          <div className="text-center items-center justify-center mt-5 block lg:flex">
            <p className="text-[#fff] mb-5 lg:mb-0">Need a help to make your ideal website turn into reality?</p>
            <a href="#" className="btn ml-5">Let’s talk!</a>
          </div>
        </Banner>
      </main>
    </>
  )
}

export default App
