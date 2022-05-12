import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg, price }) {

  return (
    <Wrap bgImage={backgroundImg}>
        <Fade bottom>
          <ItemText>
            <Title>{ title }</Title>
            <Description>{ description }</Description>
            <Price>{ price }</Price>
          </ItemText>
        </Fade>
        <Buttons>
          <Fade bottom>
            <ButtonGroup>
              <LeftButton onClick={() => alert('Coming soon...')}>
                {leftBtnText}
              </LeftButton>
              {rightBtnText && 
                <RightButton onClick={() => alert('Coming soon...')}>
                  {rightBtnText}
                </RightButton>
              }
            </ButtonGroup>
          </Fade>
          <a href="#about">
            <DownArrow src="/images/down-arrow.svg" />
          </a>
        </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column; 
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")`}
`

const ItemText = styled.div`
  color: white;
  padding-top: 20vh;
  text-align: center;
  position: relative;

  @media (max-width: 768px) {
    padding-top: 15vh;
    width: 100%;
  }
`

const Price = styled.div`
  font-size: 30px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow';
  color: red;
  position: absolute;
  top: 300px;
  right: 540px;
  width: 200px;
  height: 100px;

  @media (max-width: 768px) {
    position: absolute;
    font-size: 16px;
    top: 25vh;
    right: 0;
    width: 100%;
    height: 100px;
  }
`

const Title = styled.div`
  color: white;
  font-size: 35px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 35px;
  }
`

const Description = styled.div`
  color: white;
  font-weight: 500;
`

const Buttons = styled.div``

const ButtonGroup = styled.div`
  display: flex; 
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 599;
  cursor: pointer;
  margin: 8px;

  &:hover {
    background-color: #f0f0f0;
    color: black;
    opacity: 0.65;
  }
`

const RightButton = styled.div`
  background: white;
  opacity: 0.65;
  color: black;
  height: 40px;
  width: 256px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  margin: 8px;

  &:hover {
    background-color: rgba(23, 26, 32, 0.8);
    color: white;
    opacity: 0.85;
  }
`

const DownArrow = styled.img`
  height: 40px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  animation: animateDown infinite 1.5s;
`