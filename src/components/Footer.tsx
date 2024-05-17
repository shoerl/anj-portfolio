import React from 'react';
import { Container, Typography, Box, IconButton } from '@mui/material';
import styled from '@emotion/styled';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const FooterContainer = styled(Box)`
  background-color: #1976d2;
  color: white;
  padding: 20px 0;
  text-align: center;
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
