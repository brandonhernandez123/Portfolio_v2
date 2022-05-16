import React, {useRef, useState} from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import { send } from 'emailjs-com'
import {BsGithub, BsLinkedin } from "react-icons/bs";
const Contact = () => {
    const form = useRef()

    let istate = {
        from_name: '',
        message: '',
        from_email: ''
    }

    const [toSend, setToSend ] = useState({
        from_name: '',
        to_name: 'Brandon',
        message: '',
        from_email: ''

    })

    const onSubmit = async (e) => {
        e.preventDefault()
        send('service_nkjkf3f', 'template_qtip98m', toSend, 'zzIfBPDQ2Dak-rmND')
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text)
            setToSend(istate)
            alert('Your email has been sent')
            
          })
          .catch((err) => {
            console.log('FAILED...', err)
            alert('your email was not sent, please try again.')
          })
      }

      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value })
      }



    


    return(
        <Container fluid id='section5'>
            <h2>Contact</h2>
            <p>Please fill out the form below to get in contact!</p>
        <form ref={form} onSubmit={onSubmit}>
            <label>Name</label>
            <br/>
            <input required='true' type="text" name="from_name" value={toSend.from_name} onChange={handleChange} />
            <br/>
            <br/>
            <label>Email</label>
            <br/>
            <input required='true' type="email" name="from_email" value={toSend.from_email} onChange={handleChange} />
            <br/>
            <br/>
            <label>Message</label>
            <br/>
            <textarea required='true'  type='text' name="message" value={toSend.message} onChange={handleChange} />
            <br/>
            <br/>
            <input type="submit" value="Send"  />
        </form>
        <br/>
        <br/>
        <footer id='footer'>
            <Row id='footer'>
                <Col>
                <p>© 2022 Brandon Hernandez</p>
                  <a href='https://github.com/brandonhernandez123'><BsGithub className='social'  size={45} color='mediumspringgreen'/></a>
                  
                  <a href='https://www.linkedin.com/in/brandonhdzgtz/'><BsLinkedin className='social' size={45} color='mediumspringgreen' /></a>
                
                </Col>
          

            </Row>
        </footer>
        </Container>
    )
}


export default Contact;