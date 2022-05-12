import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { contactConfig } from '../content_option'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

export const Contact = () => {
  return (
    <Container id='contact' className='contactBody'>
        <Fade bottom>
        <Row className="mb-3 mt-3">
            <Col lg="8">
                <Title className='display-4 mb-4'>Contact Us</Title>
                <Underline className='underlineContact'></Underline>
            </Col>
        </Row>

        <Row className='sec_sp'>

            <Col lg='5' className='mb-5'>
                <h3 className="color_sec py-4">Get in touch</h3>
                <address>
                    <strong>Email: 5jCompany@gmail.com</strong>
                    <br />
                    <br />
                    <p>
                        <strong>Phone: +63 9214577069</strong>
                    </p>
                </address>
                <p>{contactConfig.description}</p>
            </Col>

            <Col lg='7' className="d-flex align-items-center">
                <form className="contact_form w-100">
                    <Row>
                        <Col lg='6' className="form-group">
                        <input
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Name"
                            type="text"
                        />
                        </Col>
                        <Col lg='6' className="form-group">
                        <input
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Email"
                            type="email"
                        />
                        </Col>
                    </Row>
                    <textarea className='form-control rounded-0' id='message'
                        name='message'
                        placeholder='Message'
                        row='5'
                    ></textarea>
                    <br />
                    <Col lg='12' className='form-group'>
                        <button className='btn ac_btn' type='submit'>Send</button>
                    </Col>
                </form>
            </Col>
        </Row>
        </Fade>
    </Container>
  )
}

export default Contact


const Title = styled.div`
  font-size: 50px;
  font-weight: 300;
  text-align: center;
  margin-left: 450px;

  @media (max-width: 768px) {
    margin: auto;
  }
`

const Underline = styled.div`
    margin-left: 610px;

    @media (max-width: 768px) {
    margin: auto;
  }
`