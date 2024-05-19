import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import styled from '@emotion/styled';

const FooterContainer = styled(Box)`
  background-color: #1976d2;
  color: white;
  padding: 15px;
  text-align: center;

  @media (min-width: 768px) {
    padding: 30px;
  }
`;

interface FooterProps {
  toggleColorMode: () => void;
  mode: 'light' | 'dark';
}

const Footer: React.FC<FooterProps> = ({ toggleColorMode, mode }) => {
  return (
    <FooterContainer>
      <Container>
        <IconButton onClick={toggleColorMode} color="inherit">
          {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
        <Typography variant="body1">&copy; {new Date().getFullYear()} Anjali Arvind. All rights reserved.</Typography>
        <Typography variant="body2">
          Connect with me on{' '}
          <a href="https://www.linkedin.com/in/anjali-arvind" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
            LinkedIn
          </a>
        </Typography>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
