import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Foot>
      <Title>5J &copy; 2022</Title>
    </Foot>
  )
}

export default Footer

const Foot = styled.div`
`

const Title = styled.div`
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  font-family: 'Arial, sans-serif';
  margin: 20px;

  @media (max-width: 768px) {
    margin: auto;
    text-align: center;
  }
`