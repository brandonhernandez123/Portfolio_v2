import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const Experience = () => {
    return (
        <Container className='section2' fluid>
            <h2>Experience</h2>
         <Row>
            <Col className='sei'>
            
            <h2><FontAwesomeIcon icon="fa-solid fa-terminal" /> Software Engineering Experience</h2>
            <br/>
            <h3>Software Engineering Apprentice</h3>
            <h4>General Assembly</h4>
            <h6>July 2021 - Oct 2021</h6>
            <ul>
                <li>Applied practiced full-stack software engineering concepts to develop intuitive, responsive, and secure web applications over a 500+ hours/12 weeks software development immersive.</li>
                <li>Designed and built full-stack applications while leveraging architectural modeling, prototyping, and version control tools for individual and collaborative projects.</li>
            </ul>
            </Col>
            <Col>
            
            </Col>     
        </Row>   


        </Container>
    )
}

export default Experience;