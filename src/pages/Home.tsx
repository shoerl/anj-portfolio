import React from 'react'
import { Container, Box } from '@mui/material'
import useSEO from '../hooks/useSEO'
import styled from '@emotion/styled'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
import Volunteering from './Volunteering'
import Contact from './Contact'
import Hero from './Hero'

const Section = styled(Box)`
  padding: 40px 15px;
  @media (min-width: 768px) {
    padding: 60px 30px;
  }
`

const Home: React.FC = () => {
  const seo = useSEO({
    title: "Anjali Arvind's Professional Portfolio",
    description:
      "Explore Anjali Arvind's educational background, professional experience, technical skills, and volunteering work.",
  })

  return (
    <div>
      {seo}
      <Hero />
      <Container>
        <Section id='education'>
          <Education />
        </Section>
        <Section id='experience'>
          <Experience />
        </Section>
        <Section id='skills'>
          <Skills />
        </Section>
        <Section id='volunteering'>
          <Volunteering />
        </Section>
        <Section id='contact'>
          <Contact />
        </Section>
      </Container>
    </div>
  )
}

export default Home
