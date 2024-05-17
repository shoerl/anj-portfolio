import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import styled from '@emotion/styled';

const TestimonialCard = styled(Box)`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
`;

const Testimonial: React.FC<{ name: string; title: string; avatar: string; text: string }> = ({ name, title, avatar, text }) => {
  return (
    <TestimonialCard>
      <Box display="flex" alignItems="center" mb={2}>
        <Avatar src={avatar} alt={name} />
        <Box ml={2}>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body2" color="textSecondary">
            {title}
          </Typography>
        </Box>
      </Box>
      <Typography variant="body1">{text}</Typography>
    </TestimonialCard>
  );
};

export default Testimonial;
