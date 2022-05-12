import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

const Mission = () => {
  return (
    <Container className='section bg-grey'>
        <Fade bottom>
            <Row className='services-center section-center'>
                <Card className='service'>
                    <Header>Mission</Header>
                    <Underline className='underline'></Underline>
                    <Paragraph>
                        Our mission is to exceed our clients' expectations in the printing business by introducing a product that does it all for the consumer. 
                        It is revolutionary advancements in quality, service, and value. We handle every customer with honesty, fairness, and professionalism while providing a high-quality product on time. 
                        To regularly supply progressive and modern printing solutions, as well as to consistently meet the most pressing needs of our customers.
                        <br />
                        <br />
                        We will build long-lasting, mutually beneficial partnerships by offering our clients the greatest quality print services available in just one machinery, in the quickest, most cost-effective manner possible, without ever sacrificing quality.
                    </Paragraph>
                </Card>
                <Card className='service'>
                    <Header>Vision</Header>
                    <Underline className='underline'></Underline>
                    <Paragraph>
                        To turn into the Philippines' most well-known and trusted provider of print and marketing services. By moving our clients away from traditional printers and toward more modern, effective, and efficient printers, we are altering the printing industry. 
                        We are transforming the printing business by shifting our clients away from traditional printers and toward more advanced, effective, and efficient printers.
                        <br />
                        <br />
                        We aim to grow our business by challenging established print and marketing media standards. In order to earn the right to be their valued adviser, we shall present fresh and innovative ideas and solutions to our clients.
                    </Paragraph>
                </Card>
                <Card className='service'>
                    <Header>Objectives</Header>
                    <Underline className='underline'></Underline>
                    <Paragraph>
                    We aim to delight our customers by breaking the rules of traditional print and marketing media. To earn the right to be their valued counsel, we will provide our clients with innovative and original ideas and solutions. 
                    </Paragraph>
                </Card>
            </Row>
        </Fade>
    </Container>
  )
}

export default Mission

const Container = styled.div`

`

const Row = styled.div`
    margin: 20px;
    padding-top: 70px;
    @media screen and (min-width: 676px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        -webkit-column-gap: 2rem;
        -moz-column-gap: 2rem;
        column-gap: 2rem;
    }
    @media screen and (min-width: 992px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`
const Card = styled.div`
  background: #EFEFEF;
  padding: 3rem 1.5rem; 
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  -webkit-transition: all 0.3s linear;
  transition: all 0.3s linear;

  &:hover{
    background-color: rgba(23, 26, 32, 0.8);
    color: white;
  }
`

const Header = styled.div`
    padding: 8px 0px;
    font-size: 29px;
    text-align: center;
`

const Paragraph = styled.div`
  -webkit-transition: var(--transition);
  transition: var(--transition);
`

const Underline = styled.div`
  width: 60px;
  height: 2px;
  margin-bottom: 1.25rem;
  background: black;
  margin-left: auto;
  margin-right: auto;
`
