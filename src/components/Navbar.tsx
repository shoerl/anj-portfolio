import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 10px;
`;

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Anjali Arvind
        </Typography>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/education">Education</StyledLink>
        <StyledLink to="/experience">Experience</StyledLink>
        <StyledLink to="/skills">Skills</StyledLink>
        <StyledLink to="/volunteering">Volunteering</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
