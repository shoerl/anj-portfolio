import React from "react";
import { Container, Typography, Box } from "@mui/material";

const Education: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Education
      </Typography>
      <Box mt={2}>
        <Typography variant="h5" gutterBottom>
          Bachelor of Science in Biochemistry
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Northeastern University | Sep 2017 - May 2021
        </Typography>
        <Typography variant="body1" paragraph>
          Graduated with honors, focusing on structural biology and
          biochemistry. Conducted independent research projects, presented
          findings at academic conferences, and published work in peer-reviewed
          journals. Coursework included advanced molecular biology, organic
          chemistry, and biophysical techniques.
        </Typography>
      </Box>
    </Container>
  );
};

export default Education;
