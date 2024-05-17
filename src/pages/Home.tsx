import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import useSEO from "../hooks/useSEO";
import styled from "@emotion/styled";
import Testimonial from "../components/Testimonial";

const HeroSection = styled(Box)`
  background: linear-gradient(135deg, #1976d2 30%, #dc004e 90%);
  color: white;
  text-align: center;
  padding: 50px 0;
`;

const Home: React.FC = () => {
  useSEO(
    "Anjali Arvind's Professional Portfolio",
    "Explore Anjali Arvind's educational background, professional experience, technical skills, and volunteering work. Currently applying for PhD programs."
  );

  return (
    <div>
      <HeroSection>
        <Typography variant="h2" gutterBottom>
          Anjali Arvind
        </Typography>
        <Typography variant="h5" gutterBottom>
          Technical Associate I at MIT Koch Institute
        </Typography>
        <Button variant="contained" color="secondary" href="#contact">
          Get in Touch
        </Button>
      </HeroSection>
      <Container>
        <Typography variant="h4" gutterBottom>
          Welcome
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to my portfolio website. Here you can find details about my
          education, experience, skills, and more.
        </Typography>
        <Typography variant="body1" paragraph>
          With a Bachelor's degree in Biochemistry from Northeastern University
          and extensive experience at renowned institutions like the MIT Koch
          Institute and Beam Therapeutics, I have developed a strong foundation
          in structural biology and biochemistry. My work involves cutting-edge
          research in immunologic and inflammatory mediators of cancer
          progression, utilizing advanced techniques such as T-cell activation
          assays, in-vivo mouse tumor model studies, and western blotting.
        </Typography>
        <Typography variant="body1" paragraph>
          I have a proven track record of excellence in laboratory management,
          including training over 200 lab members in biosafety and blood-borne
          pathogen protocols. My expertise in high-throughput crystallization
          screening and protein characterization has been instrumental in
          advancing numerous research projects.
        </Typography>
        <Box>
          <Button variant="contained" color="primary" href="#projects">
            View My Work
          </Button>
        </Box>
        <Box mt={4}>
          <Typography variant="h4" gutterBottom>
            Testimonials
          </Typography>
          <Testimonial
            name="John Doe"
            title="Senior Researcher at MIT"
            avatar="link_to_avatar"
            text="Anjali is an exceptional researcher with a keen eye for detail. Her contributions to our projects have been invaluable."
          />
          <Testimonial
            name="Jane Smith"
            title="Professor at Northeastern University"
            avatar="link_to_avatar"
            text="Anjali's dedication and expertise in biochemistry are truly impressive. She has a bright future ahead in her academic pursuits."
          />
        </Box>
      </Container>
    </div>
  );
};

export default Home;
