import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Fade from 'react-reveal/Fade';

export const Company = () => {
  return (
    <Container id='company' className='company'>
      <Fade bottom>
      <Title className='display-4 mb-4'>Company</Title>
      <Underline className='underlineCompany'></Underline>
      <Row>
        <Column>
          <Card>
            <img src="images/ceewhydii.jpg" alt="" width={300} height={300}/>
            <Header>Cyd Justin Cornejo</Header>
            <Paragraph>CEO & Founder</Paragraph>
            <Links>
              <a href="https://www.facebook.com/media/set/?set=a.109904192527435&type=3" target="_blank" rel="noreferrer" >
                <FacebookIcon style={{color: "blue", marginRight: 10}}/>  
              </a>
              <InstagramIcon  style={{color: "red", marginRight: 10}}/>
              <TwitterIcon style={{color: "cyan", marginRight: 10}}/>
            </Links>
          </Card>
        </Column>
        <Column>
          <Card>
            <img src="images/jonmar.jpg" alt="" width={300} height={300}/>
            <Header>Jonmar Lumacang</Header>
            <Paragraph>Co-Founder</Paragraph>
            <Links>
              <a href="https://www.facebook.com/media/set/?set=a.109904192527435&type=3" target="_blank" rel="noreferrer" >
                <FacebookIcon style={{color: "blue", marginRight: 10}}/>  
              </a>
              <InstagramIcon  style={{color: "red", marginRight: 10}}/>
              <TwitterIcon style={{color: "cyan", marginRight: 10}}/>
            </Links>
          </Card>
        </Column>
        <Column>
          <Card>
            <img src="images/justin.jpg" alt="" width={300} height={300}/>
            <Header>Justin Masangkay</Header>
            <Paragraph>Production Manager</Paragraph>
            <Links>
              <a href="https://www.facebook.com/justinmasangkay.04" target="_blank" rel="noreferrer" >
                <FacebookIcon style={{color: "blue", marginRight: 10}}/>  
              </a>
              <InstagramIcon  style={{color: "red", marginRight: 10}}/>
              <TwitterIcon style={{color: "cyan", marginRight: 10}}/>
            </Links>
          </Card>
        </Column>
        <Column>
          <Card>
            <img src="images/ivanskie.jpg" alt="" width={300} height={300}/>
            <Header>Josh Ivan Lanuevo</Header>
            <Paragraph>Software Developer</Paragraph>
            <Links>
              <a href="https://www.facebook.com/josh.ivan.18" target="_blank" rel="noreferrer" >
                <FacebookIcon style={{color: "blue", marginRight: 10}}/>  
              </a>
              <InstagramIcon  style={{color: "red", marginRight: 10}}/>
              <TwitterIcon style={{color: "cyan", marginRight: 10}}/>
            </Links>
          </Card>
        </Column>
        <Column>
          <Card>
            <img src="images/justine.jpg" alt="" width={300} height={300}/>
            <Header>Justine Arenal</Header>
            <Paragraph>Finance Manager</Paragraph>
            <Links>
              <a href="https://www.facebook.com/justine.arenal04" target="_blank" rel="noreferrer" >
                <FacebookIcon style={{color: "blue", marginRight: 10}}/>  
              </a>
              <InstagramIcon  style={{color: "red", marginRight: 10}}/>
              <TwitterIcon style={{color: "cyan", marginRight: 10}}/>
            </Links>
          </Card>
        </Column>
      </Row>
      </Fade>
    </Container>
  )
}

export default Company

const Container = styled.div`
  width: 100%;
  margin-top: 90px;
  background-color: #EFEFEF;
  padding-bottom: 50px;
`

const Title = styled.div`
  font-size: 50px;
  font-weight: 300;
  text-align: Center;
  padding: 30px;
`

const Underline = styled.div`
  
`

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: auto;
    width: 100%;
  }
`

const Column = styled.div`
  margin: 50px;
  text-align: center;
`

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  background-color: #f1f1f1;
  border-radius: 10px;
`



const Header = styled.div`
  padding: 14px;
  font-size: 20px;
`

const Paragraph = styled.div`
  padding: 14px;
  font-size: 14px;
  color: #9D9D9D;

`

const Links = styled.div`
  padding: 16px;
`