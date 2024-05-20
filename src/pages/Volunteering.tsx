import React from 'react'
import { Typography, Box, Container } from '@mui/material'
import styled from '@emotion/styled'

const VolunteeringItem = styled(Box)`
  margin-bottom: 20px;
`

const Volunteering: React.FC = () => {
  return (
    <Container>
      <Typography variant='h4' gutterBottom>
        Volunteering
      </Typography>
      <VolunteeringItem>
        <Typography variant='h6'>826 Boston</Typography>
        <Typography variant='body2'>Tutor</Typography>
        <Typography variant='body2'>January 2019 - April 2019</Typography>
        <Typography variant='body1'>
          • Tutored elementary and middle school children in topics including
          English, Math, and Science
        </Typography>
      </VolunteeringItem>
      <VolunteeringItem>
        <Typography variant='h6'>Lawrence General Hospital</Typography>
        <Typography variant='body2'>Volunteer Assistant</Typography>
        <Typography variant='body2'>May 2015 - November 2017</Typography>
        <Typography variant='body1'>
          • Assisted nurses and doctors with transporting biological materials
          throughout the hospital
          <br />• Oversaw the needs of over 15 children pre and post-surgery in
          the pediatric department
        </Typography>
      </VolunteeringItem>
    </Container>
  )
}

export default Volunteering
