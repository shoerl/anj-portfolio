import React from 'react'
import styled from '@emotion/styled'
import { Button, TextField, Typography, Container } from '@mui/material'

const ContactSection = styled.section`
  padding: 60px 0;
`

const FormContainer = styled(Container)`
  margin: 0 auto;
  padding: 20px;
  text-align: left; /* Left-align text within the form container */
`

const StyledTextField = styled(TextField)`
  margin-bottom: 25px;
  & .MuiInputBase-root {
    color: #333;
  }
  & .MuiInputLabel-root {
    color: #666;
  }
`

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center; /* Center-align the button */
  margin-top: 30px;
`

const Contact = () => {
  return (
    <ContactSection>
      <FormContainer>
        <Typography
          variant='h4'
          component='h1'
          gutterBottom
          style={{ color: '#333' }}
        >
          Contact Me
        </Typography>
        <Typography
          variant='body1'
          component='p'
          gutterBottom
          style={{ color: '#666' }}
        >
          I'm currently open to new opportunities and collaborations. Feel free
          to reach out if you have any questions or if you would like to discuss
          potential projects.
        </Typography>
        <form noValidate autoComplete='off'>
          <StyledTextField fullWidth label='Name' variant='outlined' required />
          <StyledTextField
            fullWidth
            label='Email'
            variant='outlined'
            required
          />
          <StyledTextField
            fullWidth
            label='Message'
            variant='outlined'
            multiline
            rows={4}
            required
          />
          <StyledButtonContainer>
            <Button variant='contained' color='primary' type='submit'>
              Send Message
            </Button>
          </StyledButtonContainer>
        </form>
      </FormContainer>
    </ContactSection>
  )
}

export default Contact
