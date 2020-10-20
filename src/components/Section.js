import React from "react"
import styled from "styled-components"
import Skills from "./Skills"
import Social from "./Social"

const Section = ({ title, description, social, skills }) => {
  return (
    <SectionWrapper>
      <SectionTitle>{title}</SectionTitle>
      <SectionDescription>{description}</SectionDescription>
      {social && <Social />}
      {skills && <Skills />}
    </SectionWrapper>
  )
}

export default Section

const SectionWrapper = styled.section`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: 20px;
  padding-right: 20px;
`
const SectionTitle = styled.h3`
  font-size: 32px;
  line-height: 1.4;
  margin-bottom: 40px;
`

const SectionDescription = styled.p`
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 40px;
`
