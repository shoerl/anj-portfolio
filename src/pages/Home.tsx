import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import useSEO from '../hooks/useSEO';
import styled from '@emotion/styled';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Volunteering from './Volunteering';
import Contact from './Contact';

const HeroSection = styled(Box)`
  background: linear-gradient(135deg, #FF9EC7 30%, #3C3C3C 90%);
  color: white;
  text-align: center;
  padding: 30px 15px;

  @media (min-width: 768px) {
    padding: 50px 30px;
  }
`;

const CartoonImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: 15px;

  @media (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const Section = styled(Box)`
  padding: 60px 15px;
  @media (min-width: 768px) {
    padding: 80px 30px;
  }
`;

const Home: React.FC = () => {
  const seo = useSEO({
    title: "Anjali Arvind's Professional Portfolio",
    description: "Explore Anjali Arvind's educational background, professional experience, technical skills, and volunteering work."
  });

  return (
    <div>
      {seo}
      <HeroSection>
        <CartoonImage src="/avatar.jpeg" alt="Cartoon of Anjali Arvind" />
        <Typography variant="h1" gutterBottom>
          Anjali Arvind
        </Typography>
        <Typography variant="h2" gutterBottom>
          Technical Associate I at MIT Koch Institute
        </Typography>
        <Button variant="contained" color="secondary" href="#contact">
          Get in Touch
        </Button>
      </HeroSection>
      <Container>
        <Section id="education">
          <Education />
        </Section>
        <Section id="experience">
          <Experience />
        </Section>
        <Section id="skills">
          <Skills />
        </Section>
        <Section id="volunteering">
          <Volunteering />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
      </Container>
    </div>
  );
};

export default Home;
