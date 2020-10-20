import React from "react"
import styled from "styled-components"

const HeroSection = () => {
  return (
    <Hero>
      <HeroGroup>
        <Title>I am a designer.</Title>
        <Description>View the good side.</Description>
      </HeroGroup>
    </Hero>
  )
}

export default HeroSection

const Hero = styled.div`
  background-image: url("https://images.unsplash.com/photo-1518489913881-199b7c7a081d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const HeroGroup = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;

  padding-left: 20px;
  padding-right: 20px;
`

const Title = styled.h1`
  font-size: 72px;
`

const Description = styled.p`
  font-size: 32px;
`
