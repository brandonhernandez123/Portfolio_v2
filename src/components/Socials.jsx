import React from 'react'
import { Container, Nav } from 'react-bootstrap'
import {BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail} from "react-icons/ai";


const Socials = () => {
    return(
        <Container fluid>
            <Nav fixed='bottom' className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="https://github.com/brandonhernandez123">
                        <BsGithub className='social'  size={45} color='mediumspringgreen'/>
                        
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='https://www.linkedin.com/in/brandonhdzgtz/' eventKey="link-1">
                        <BsLinkedin className='social' size={45} color='mediumspringgreen' />
                    
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='#section5' eventKey="link-2">

                        <AiOutlineMail className='social' size={45} color='mediumspringgreen' />
                    </Nav.Link>
                </Nav.Item>
               
             </Nav>
        </Container>
    )
}


export default Socials;