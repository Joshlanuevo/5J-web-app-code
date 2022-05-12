import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
      <Fade bottom>
      <Container id='about'>
            <AboutPic>
              <img src="images/printer_parts_final.png" alt="" max-width={700} max-height={700} className='hero-photo'/>
            </AboutPic>
            <AboutText>
              <Title>About</Title>
              <Underline className='underline'></Underline>
              <Fade bottom>
              <Aboutt>Name of the Company</Aboutt>
              We decided to name our company “5J” because all of our names starts with letter J and all of us members are 5 in total.
              <br />
              <Aboutt>Nature of Business</Aboutt>
              To innovate and upgrade what gadgets we are using in today’s world of technology that will lead the users an easy accessibility.
              <br />
              <Text>
              Our company aims to ease our access to our valuable users and to promote high tech quality products. 
              It will cost not more and not less but the best price for its superb quality. 
              We presume that our product will be trusted and guaranteed a life time warranty for our customers upon purchase.
              </Text>
              <br/>
              <Text>
              Our product targets to simply ease the access to our valuable customers just by a quick touch or swipe if needed to edit on the printer’s monitor. 
              Search what you want to print on Google images especially if the user is in a hurry. 
              Then print it on the go! Anytime, anywhere, any ways of editing the file through its brilliant touch screen monitor.
              </Text>
              
              <a href='#contact'>
                <Button>Contact us</Button>
              </a>
      </Fade>
          </AboutText>
    </Container>
    </Fade>
  )
}

export default About

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 90px;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    margin: auto;
  }
`

const AboutPic = styled.div`
  flex: 1;
`

const AboutText = styled.div`
  margin: 50px 20px 20px 50px;
`
const Title = styled.div`
  font-size: 50px;
  font-weight: 300;
  text-align: left;
  margin-bottom: 0.9rem;
`

const Aboutt = styled.div`
  font-size: 30px;
`

const Underline = styled.div`
  margin-left: 0;
`

const Text = styled.div`
`

const Button = styled.div`
  background-color: white;
  border: 3px solid black;
  height: 40px;
  width: 256px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: black;
    color: white;
  }
`