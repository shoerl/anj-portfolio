import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const Contact: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <Typography variant="body1" paragraph>
        I'm currently open to new opportunities and collaborations. Feel free to reach out if you have any questions or if you would like to discuss potential projects.
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        <TextField
          required
          fullWidth
          id="name"
          label="Name"
          variant="outlined"
          margin="normal"
        />
        <TextField
          required
          fullWidth
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          margin="normal"
        />
        <TextField
          required
          fullWidth
          id="message"
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">
          Send Message
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
