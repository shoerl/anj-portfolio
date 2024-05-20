import React from 'react'
import { Box, Typography, Link } from '@mui/material'
import styled from '@emotion/styled'

const FooterContainer = styled(Box)`
  background-color: var(--secondary-color);
  color: var(--text-color);
  padding: 15px;
  text-align: center;
`

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Typography variant='body2'>
        © 2024 Anjali Arvind. All rights reserved.
      </Typography>
      <Typography variant='body2'>
        Connect with me on{' '}
        <Link href='https://www.linkedin.com' color='inherit'>
          LinkedIn
        </Link>
      </Typography>
    </FooterContainer>
  )
}

export default Footer
