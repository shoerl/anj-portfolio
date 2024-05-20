import React from 'react'
import styled from '@emotion/styled'
import { Button, Container, Typography } from '@mui/material'

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 60vh; /* Adjust height to show content below */
  background: linear-gradient(135deg, #ffb6c1 30%, #04cfad 90%);
  padding: 20px;

  @media (max-width: 768px) {
    height: 60vh; /* Original height for mobile */
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    height: 50vh; /* Height for iPads and similar tablets */
  }

  @media (min-width: 1025px) {
    height: 50vh; /* Height for laptops and larger displays */
  }
`

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
`

const StyledButton = styled(Button)`
  padding: 12px 12px; /* Increase padding */
  font-size: 1rem; /* Increase font size */
`

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <HeroContent>
          <Avatar src='avatar.jpeg' alt='Anjali Arvind' />
          <Typography variant='h3' component='h3' gutterBottom>
            Anjali Arvind
          </Typography>
          <Typography variant='h5' component='h5' gutterBottom>
            Technical Associate I at MIT Koch Institute
          </Typography>
          <StyledButton variant='contained' color='primary' href='#contact'>
            Get in Touch
          </StyledButton>
        </HeroContent>
      </Container>
    </HeroSection>
  )
}

export default Hero
