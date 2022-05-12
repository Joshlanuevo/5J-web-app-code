import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
    const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
        <a href='/'>
            <img className='logo'
                src="images/5J_LOGO.png" alt="" 
            />
        </a>
        <RightMenu>
            <a href="#about">About</a>
            <a href="#company">Company</a>
            <a href="#contact">Contact</a>
            <CustomMenu onClick={() => setBurgerStatus(true)}/>
        </RightMenu>
        <BurgerNav show={burgerStatus}>
            <CloseWrapper>
                <CustomClose onClick={() => setBurgerStatus(false)}/>
            </CloseWrapper>
            <li onClick={() => alert('Coming soon...')}><a href={() => false}>Inventory</a></li>
        </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 10px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    font-size: 14px;
    margin-right: 10px;
    text-decoration: none;
    color: black;
  }
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
  transition: transform 0.2s;

  li {
    padding: 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;

    &:hover {
        background: #EFEFEF;
        border-radius: 80px;
        border: none;
      }

    a {
      font-weight: 600;
      text-decoration: none;
      color: black;
    }
  }
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`