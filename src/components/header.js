import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Header = () => {
  return (
    <HeaderWrapper>
      <InnnerWrapper>
        <Title>+Design</Title>

        <Menu>
          <MenuList>
            <MenuItem to="/">Home</MenuItem>
          </MenuList>
          <MenuList>
            <MenuItem to="/contact">contact</MenuItem>
          </MenuList>
        </Menu>
      </InnnerWrapper>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;

  background-color: rgba(255, 255, 255, 0.1);
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
`

const InnnerWrapper = styled.div`
  max-width: 1000px;
  width: 1000px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: auto 16px;
`

const Menu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`

const MenuList = styled.li``

const MenuItem = styled(Link)`
  padding: 16px 16px;
  margin: auto 16px;
  font-weight: bold;
`
