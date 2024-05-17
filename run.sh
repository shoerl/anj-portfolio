cat <<EOT >> src/pages/Experience.tsx
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Experience: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Professional Experience
      </Typography>
      <Box mt={2}>
        <Typography variant="h5" gutterBottom>
          Lab Manager/Technical Associate I
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          MIT Koch Institute for Integrative Cancer Research | Jul 2023 - Present
        </Typography>
        <Typography variant="body1" paragraph>
          At the MIT Koch Institute, I manage a diverse array of projects focused on the immunologic and inflammatory mediators of cancer progression. I have honed my skills in T-cell activation assays, in-vivo mouse tumor model studies, and western blotting. My role also includes overseeing lab operations, ensuring compliance with safety protocols, and training new researchers.
        </Typography>
      </Box>
      <Box mt={2}>
        <Typography variant="h5" gutterBottom>
          Research Associate in Structural Biology
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Beam Therapeutics | Jan 2022 - Dec 2022
        </Typography>
        <Typography variant="body1" paragraph>
          At Beam Therapeutics, I played a critical role in high-throughput crystallization screening for novel protein complexes. My work involved maintaining and updating lab protocols in Benchling, preparing and isolating proteins for structural characterization using AKTA chromatography-based techniques, and collaborating with cross-functional teams to advance our research objectives.
        </Typography>
      </Box>
      <Box mt={2}>
        <Typography variant="h5" gutterBottom>
          Biosafety Technical Assistant
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Northeastern University | Jul 2020 - Dec 2020
        </Typography>
        <Typography variant="body1" paragraph>
          As a Biosafety Technical Assistant at Northeastern University, I trained over 200 lab members in biosafety and blood-borne pathogen protocols. My responsibilities included managing biological materials, overseeing the needs of children in the pediatric department, and assisting nurses and doctors with transporting biological samples throughout the hospital.
        </Typography>
      </Box>
    </Container>
  );
};

export default Experience;
EOT
