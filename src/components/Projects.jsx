import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'
import asphalt from '../images/asphaltdemo.png'
import comicbookshelf from '../images/comicbookshelf.png'
import Filmzilla from '../images/filmzilla.png'
import mystery from '../images/murdermystery.png'
import boxergram from '../images/boxergram.png'


const Projects = () => {
    return(
        <Container id='section3' fluid >
            <h2>Projects</h2>
            <br/>
            <h3>Deployed Projects</h3>
            <Row>
                
                <Col className='deployed'>
                <Image src={asphalt} height={150} width={300} alt='asphaltdemo' />
                <h6>Asphalt Company Demo</h6>
                
                </Col>
                <Col>
                <Image height={150} width={300} src={comicbookshelf} alt='The Comic Bookshelf' />
                <h6>The Comic BookShelf</h6>
                </Col>
                <Col>
                <Image height={150} width={300} src={Filmzilla} alt='filmzilla' />
                <h6>Filmzilla</h6>
                </Col>
                <Col>
                    <Image height={150} width={300} src={mystery} alt='Mystery Game JavaScript' />
                    <h6>Murder Mystery Js</h6>
                </Col>
            </Row>
            <br/>
            <Row className='deployed'>
                <h3>Currently in progress</h3>
                <Col>
                <Image  height={300} width={150}src={boxergram} alt ='boxergram' />
                <h6>Boxergram</h6>
                </Col>
                <Col>
                
                </Col>
            </Row>
        
        
        
        </Container>
    )
}


export default Projects;