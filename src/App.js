import './App.css'
import About from './components/About'
import Landing from './components/Landing'
import Topnav from './components/Nav'
import Loading from './components/Loading'
import { useState, useEffect } from 'react'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Tech from './components/Tech'
import Contact from './components/Contact'
import Socials from './components/Socials'
import GameDevPortfolio from './components/GameDevPortfolio'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, [])

  return (
    <>
      {loading === false ? (
        <div className="App">
          <nav>
            <Topnav />
          </nav>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <div className="landing">
            <Landing />
          </div>
          <br />
          <div id="section1">
            <About />
          </div>
          <div id="section2">
            {' '}
            <Experience />
          </div>
          <div id="section3">
            {' '}
            <Projects />
          </div>
          <br />
          <div id="section3g">
            {' '}
            <GameDevPortfolio />
          </div>
          <br />
          <div id="section4">
            {' '}
            <Tech />{' '}
          </div>
          <br />
          <br />
          <section id="section5">
            {' '}
            <Contact />
          </section>
          <div id="bottomnav">
            <Socials />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default App
