import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {  DiCodeBadge } from "react-icons/di";
import { HiBriefcase, HiCode } from "react-icons/hi";
import { RiCustomerService2Fill} from "react-icons/ri";




const Experience = () => {
    return (
        <Container className='section2' fluid>
            <h2>Experience</h2>
            <br/>
         <Row>
            <Col className='sei'>
            
            <h2> <HiCode color='mediumspringgreen' /> Software Engineering Experience <HiCode color='mediumspringgreen'/></h2>
            <br/>
            <h3>Software Engineering Apprentice</h3>
            <h4>General Assembly</h4>
            <h6>July 2021 - Oct 2021</h6>
            <br/>
            <ul>
                <li><DiCodeBadge color='mediumspringgreen' /> Applied practiced full-stack software engineering concepts to develop intuitive, responsive, and secure web applications over a 500+ hours/12 weeks software development immersive.</li>
                <br/>
                <li> <DiCodeBadge color='mediumspringgreen' /> Designed and built full-stack applications while leveraging architectural modeling, prototyping, and version control tools for individual and collaborative projects.</li>
                <br/>
                <li> <DiCodeBadge color='mediumspringgreen' /> Developed frontend, backend & full stack applications using JavaScript, Python, React, Vue, MongoDb, Postgres and more...</li>

            </ul>
            </Col>
            <br/>
            <Col sm={6} className='softskills'>
                <h2><HiBriefcase color='mediumspringgreen' /> Soft Skills <HiBriefcase color='mediumspringgreen' /></h2>
                <br/>
                <h4>Customer Support</h4>
                <h5>GigSmart</h5>
                <h6>Nov 2021 - Current</h6>
                <li><RiCustomerService2Fill color='mediumspringgreen' /> Respond to customer queries via live chat and support tickets in a timely and accurate way. Update our internal databases with information about technical issues and useful discussions with customers</li>
                <h4>Team Leader / Debt Collector</h4>
                <h5>Professional Bureau of Collections of Maryland</h5>
                <h6>Dec 2019 - July 2021</h6>
                <li><RiCustomerService2Fill color='mediumspringgreen' /> Reached out to borrowers with delinquent accounts to pursue payments and negotiate payment plans and Collaborated with a team to encourage open sharing of ideas and solutions.</li>
                <h4>Team Leader / CSR</h4>
                <h5>Maximus</h5>
                <h6>July 2019 - Dec 2019</h6>
                <li><RiCustomerService2Fill color='mediumspringgreen' /> Placed or answered phone calls, providing excellent customer experience by applying good listening skills and Informed individuals about eligibility requirements, application processes and procedures for the Wyoming Medicaid Program.</li>
            </Col>     
        </Row>   


        </Container>
    )
}

export default Experience;