import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Social = () => {
  return (
    <SocialMenu>
      <li>
        <SocialItem to="#">Twitter</SocialItem>
      </li>
      <li>
        <SocialItem to="#">Facebook</SocialItem>
      </li>
      <li>
        <SocialItem to="#">Instagram</SocialItem>
      </li>
    </SocialMenu>
  )
}

export default Social

const SocialMenu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`

const SocialItem = styled(Link)`
  margin: 0 10px;
`
