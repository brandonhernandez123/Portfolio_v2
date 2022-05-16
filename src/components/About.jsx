import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import brandon from '../images/brandon.png'



const About = () => {
    return(
        <Container id='section1' fluid='sm'>
            <h2 className='mint'>About Me</h2>
            <br/>
            <Row>
                <Col sm={6}>
                    <img className='brandon' src={brandon} alt='Brandon' />
                </Col>
                <Col sm={6} className='aboutcol2'>
                    <article>My journey to becoming a software engineer began during my senior year of highschool. I was introduced to HTML, CSS and a quick look at JavaScript. I immediately fell in love with everything I was learning.
                      A few years went by and I would tap into it here and there but was too afraid to take the leap and learn all these concepts head on.  
                    </article>
                    <br/>
                    <article>
                        Fast forward to July 2021, I had just gotten laid off from my job due to COVID and I decided that it was the perfect time to learn something I always admired. I signed up for General Assembly's Software Engineering Immersive program and from day one I was hooked once again. Everyday I was eager to learn more and more.
                    </article>
                    <br/>
                    <p> I am currently working on personal projects and in search of my first Software Engineer Position!</p>
                </Col>
            </Row>
            
        </Container>
    )
}


export default About;