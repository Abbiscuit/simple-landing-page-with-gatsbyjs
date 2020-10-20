import React from "react"
import styled from "styled-components"

const Skills = () => {
  return (
    <SkillList>
      <SkillItem>Figma</SkillItem>
      <SkillItem>Web Design</SkillItem>
      <SkillItem>React.js</SkillItem>
      <SkillItem>Gatsby.js</SkillItem>
      <SkillItem>UI Design</SkillItem>
      <SkillItem>UX Design</SkillItem>
      <SkillItem>STUDIO</SkillItem>
      <SkillItem>Word</SkillItem>
      <SkillItem>Excel</SkillItem>
    </SkillList>
  )
}

export default Skills

const SkillList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

const SkillItem = styled.li`
  padding: 10px;
  border: 1px solid #000;
  border-radius: 50px;
  min-width: 100px;
  text-align: center;
  margin: 5px;
`
