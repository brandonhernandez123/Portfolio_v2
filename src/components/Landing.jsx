import React from 'react'
import { Container } from 'react-bootstrap';


const Landing = () => {
    return(
        <Container fluid className='landing'>
            <h4 className='name'>Hello, I'm Brandon.</h4>
            <br/>
            <br/>
            <h1 className='intro'>Software Engineering is my <span className='mint'>passion.</span> Building for <span className='mint'>today</span>, <span className='mint'>tomorrow</span> and <span className='mint'>beyond</span> is my goal.</h1>
            <br/>
            <h6 className='pitch'>
I am a <span className='mint'>full stack</span> software engineer of <span className='mex'>His</span>pa<span className='ico'>nic</span> descent with a strong background in <span className='mint'>customer service</span> and <span className='mint'>leading small groups</span>. My goal is to turn <span className='mint'>complex</span> and exciting ideas into <span className='mint'>reality </span></h6>
        </Container>
    )
}

export default Landing;