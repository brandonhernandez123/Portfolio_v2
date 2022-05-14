import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'


const Tech = () => {
    return(
        <Container id='section4'>
            <h1>Tech</h1>
            <br/>
            <Row>
                <h5> Languages</h5>
                <Col className='languagecol'>
                
                <Image  src='https://i.imgur.com/0oZ1kpH.png' height={64} width={64} alt='HTML' className='languages'  />
                <Image src='https://i.imgur.com/n6kAPfo.png' height={64} width={64} alt='CSS' className='languages' />
                <Image src='https://i.imgur.com/kdPDZgh.png' height={64} width={64} alt='JavaScript' className='languages' />
                <Image src='https://i.imgur.com/3FF5R6z.png' height={64} width={64} alt='Python' className='languages' />
                <Image src='https://i.imgur.com/SHnIujV.png' height={64} width={64} alt='SQL' className='languages' />

                </Col>
            </Row>
            <br/>
            <Row>
                <h5>FrontEnd</h5>
                <Col>
                <Image  src='https://i.imgur.com/33qKeue.png' height={64} width={64} alt='React' className='languages'  />
                <Image src='https://i.imgur.com/bCCOEFI.png' height={64} width={64} alt='Redux' className='languages' />
                <Image src='https://i.imgur.com/Cur6wDW.png' height={64} width={64} alt='Vue' className='languages' />
                <Image src='https://i.imgur.com/I5Duy9D.png' height={64} width={64} alt='Vuex' className='languages' />
                <Image src='https://i.imgur.com/SNvxaLc.png' height={64} width={64} alt='bootstrap' className='languages' />
                </Col>
            </Row>
            <br/>
            <Row>
                <h5>Backend & Databases</h5>
                <Col>
                <Image  src='https://i.imgur.com/iHdseRT.png' height={64} width={64} alt='Node' className='languages'  />
                <Image src='https://i.imgur.com/gul247b.png' height={64} width={64} alt='ExpressJs' className='languages' />
                <Image src='https://i.imgur.com/Ee9JBP0.png' height={64} width={64} alt='MongoDb' className='languages' />
                <Image src='https://i.imgur.com/xcoRtim.png' height={64} width={64} alt='Flask' className='languages' />
                <Image src='https://i.imgur.com/MEprI7G.png' height={64} width={64} alt='Postgresql' className='languages' />
                </Col>
            </Row>
            <br/>
            <Row>
                <h5>Other</h5>
                <Col>
                <Image  src='https://i.imgur.com/HvVGmPd.png' height={74} width={64} alt='Heroku' className='languages'  />
                <Image src='https://i.imgur.com/ilgJ9pW.jpg' height={64} width={64} alt='Vercel' className='languages' />
                <Image src='https://i.imgur.com/HLYSEq4.jpg' height={64} width={64} alt='Restful API' className='languages' />
                <Image src='https://i.imgur.com/yUyjL9h.png' height={64} width={70} alt='Github' className='languages' />
                </Col>
            </Row>


        </Container>
    )
}

export default Tech;