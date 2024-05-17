import React from 'react';
import { Container, Typography, Box, Grid, Chip } from '@mui/material';

const skills = [
  'Plasmid Cloning',
  'ELISA',
  'Western Blotting',
  'Protein Purification',
  'Cell Culture',
  'Flow Cytometry',
  'High-Throughput Screening',
  'Benchling',
  'AKTA Chromatography',
  'Molecular Biology Techniques',
  'Data Analysis',
  'Scientific Writing',
];

const Skills: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Technical Skills
      </Typography>
      <Box mt={2}>
        <Grid container spacing={2}>
          {skills.map((skill, index) => (
            <Grid item key={index}>
              <Chip label={skill} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Skills;
