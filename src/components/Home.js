import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Home = () => {
  return (
    <Container>
        <Section 
            title="5J Company"
            description="Order Online for Touchless Delivery"
            price = 'For only 5,000 pesos!'
            backgroundImg="main_page.png"
            leftBtnText="Order Now"
            rightBtnText="Existing Inventory"
        />

    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
`