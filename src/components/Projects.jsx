import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'
import asphalt from '../images/asphaltdemo.png'
import comicbookshelf from '../images/comicbookshelf.png'
import Filmzilla from '../images/filmzilla.png'
import mystery from '../images/murdermystery.png'
import boxergram from '../images/boxergram.png'
import beautiful from '../images/beautifulimage.png'
import comic from '../images/comics.png'
import {BsGithub } from "react-icons/bs";



const Projects = () => {
    return(
        <Container id='section3' fluid >
            <h2 className='projecttitle'>Projects</h2>
            <p>Click image to view demo or click github icon to view repository</p>
            <br/>
            <h3 className='projecttitle'>Deployed Projects</h3>
            <Row>
            <Col className='deployed'>
                <a href='https://thecomicbookshelfv2.herokuapp.com/'>
                <Image className='project' src={comic} height={150} width={300} alt='comicbookshelfv2' />
                </a>
                
                <h6>The Comic Bookshelf V2 | <a className='mint' href='https://github.com/brandonhernandez123/the-comic-bookshelfv2'><BsGithub /></a></h6>
                
                </Col>
                <Col className='deployed'>
                <a href='https://asphalt-company-app.vercel.app/'>
                <Image className='project' src={asphalt} height={150} width={300} alt='asphaltdemo' />
                </a>
                
                <h6>Asphalt Company Demo | <a className='mint' href='https://github.com/brandonhernandez123/Asphalt-Company-App'><BsGithub /></a></h6>
                
                </Col>
                <Col>
                <a href='https://thecomicbookshelf.herokuapp.com/'>
                <Image className='project' height={150} width={300} src={comicbookshelf} alt='The Comic Bookshelf' />
                </a>
                <h6>
                    
                    The Comic BookShelf |  <a className='mint' href='https://github.com/brandonhernandez123/The-Comic-BookShelf'><BsGithub /> </a>
                
                </h6>
                </Col>
                <Col>
                <a href='https://filmzilla.herokuapp.com/'>
                <Image className='project' height={150} width={300} src={Filmzilla} alt='filmzilla' />
                </a>
                <h6>
                    Filmzilla | <a className='mint' href="https://github.com/jinyangb/Filmzilla"><BsGithub /></a>
                </h6>
                </Col>
                <Col>
                    <a href='https://brandonhdzmurdermysteryjs.surge.sh/'>
                    <Image className='project' height={150} width={300} src={mystery} alt='Mystery Game JavaScript' />
                    </a>
                    <h6>
                        
                        Murder Mystery Js | <a  className='mint' href='https://github.com/brandonhernandez123/Detective-point-and-click-adventure-js'><BsGithub /> </a>
                    
                    </h6>
                </Col>
            </Row>
            <br/>
            <Row className='deployed'>
                <h3 className='projecttitle'>Currently in progress</h3>
                <Col>
                <Image  height={300} width={150}src={boxergram} alt ='boxergram' />
                <h6>
                    
                    Boxergram | <a  className='mint' href='https://github.com/brandonhernandez123/Boxergram'><BsGithub /> </a>
                
                </h6>
                </Col>
                <Col>
                <Image height={150} width={300} src={beautiful} alt='beautiful image salon' />
                <h6>
                    Beautiful Image Salon | <a className='mint' href='https://github.com/brandonhernandez123/Beautiful-Image-Salon'><BsGithub /> </a>


                </h6>
                </Col>
            </Row>
        
        
        
        </Container>
    )
}


export default Projects;