import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import styled from '@emotion/styled'

const StyledLink = styled.a`
  color: #6a6a6a; /* Medium Gray for better contrast */
  text-decoration: none;
  margin: 0 10px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin: 10px 0;
    text-align: center;
  }
`

const NavbarContainer = styled(AppBar)`
  background-color: #f5f5dc; /* Very Light Gray for the navbar background */
`

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }
      setDrawerOpen(open)
    }

  const drawer = (
    <Box
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      sx={{ width: 250 }}
    >
      <List>
        {[
          'Home',
          'Education',
          'Experience',
          'Skills',
          'Volunteering',
          'Contact',
        ].map(text => (
          <ListItem
            button
            key={text}
            component='a'
            href={`#${text.toLowerCase()}`}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <NavbarContainer position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2, display: { md: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' sx={{ flexGrow: 1, color: '#6A6A6A' }}>
            {' '}
            {/* Medium Gray for the title */}
            Anjali Arvind
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <StyledLink href='#home'>Home</StyledLink>
            <StyledLink href='#education'>Education</StyledLink>
            <StyledLink href='#experience'>Experience</StyledLink>
            <StyledLink href='#skills'>Skills</StyledLink>
            <StyledLink href='#volunteering'>Volunteering</StyledLink>
            <StyledLink href='#contact'>Contact</StyledLink>
          </Box>
        </Toolbar>
      </NavbarContainer>
      <Drawer anchor='left' open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawer}
      </Drawer>
    </>
  )
}

export default Navbar
