import './App.css'
import About from './components/About'
import Landing from './components/Landing'
import Topnav from './components/Nav'

function App() {
  return (
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
        <h2>Section 2</h2>
      </div>
      <div id="section3">
        {' '}
        <h2>Section 3</h2>
      </div>
      <div id="section4">
        {' '}
        <h2>Section 4</h2>{' '}
      </div>
      <div id="section5">
        {' '}
        <h2>Section 5</h2>
      </div>
      <div id="contact">
        <h2>Contact</h2>
      </div>
    </div>
  )
}

export default App
