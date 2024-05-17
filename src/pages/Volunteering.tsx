import React from "react";
import { Container, Typography, Box } from "@mui/material";

const Volunteering: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Volunteering Experience
      </Typography>
      <Box mt={2}>
        <Typography variant="h5" gutterBottom>
          Volunteer Research Assistant
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Boston Children's Hospital | Jan 2021 - Jun 2021
        </Typography>
        <Typography variant="body1" paragraph>
          Assisted in pediatric oncology research, focusing on the development
          of novel therapeutic strategies. Responsibilities included conducting
          experiments, data analysis, and maintaining detailed lab records.
        </Typography>
      </Box>
      <Box mt={2}>
        <Typography variant="h5" gutterBottom>
          Community Outreach Coordinator
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Northeastern University | Sep 2019 - Dec 2020
        </Typography>
        <Typography variant="body1" paragraph>
          Organized and led community outreach programs to promote STEM
          education among underprivileged high school students. Coordinated with
          local schools, prepared educational materials, and delivered
          interactive workshops.
        </Typography>
      </Box>
    </Container>
  );
};

export default Volunteering;
