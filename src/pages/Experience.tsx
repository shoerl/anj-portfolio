import React from 'react';
import { Typography, Box, Container, List, ListItem, ListItemText, Paper } from '@mui/material';
import styled from '@emotion/styled';

const ExperienceItem = styled(Box)``;

const Experience: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Experience
      </Typography>
      <ExperienceItem>
        <Typography variant="h5">
          Koch Institute of Integrative Cancer Research at MIT, Yaffe Lab [Cambridge, MA]
        </Typography>
        <Typography variant="subtitle1">Contract Lab Technician and Lab Manager</Typography>
        <Typography variant="subtitle2">July 2023 - Present</Typography>
        <List>
          <ListItem>
            <ListItemText primary="Supported a variety of projects focused on the immunologic and inflammatory mediators of cancer progression using T-cell activation assays, in-vivo mouse tumor model studies, western blotting, tissue culture, flow cytometry, and molecular cloning" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Assisted with technical operations as a lab manager which included tracking and stocking supplies, overseeing vendor relationships, and implementing lab organizational strategies" />
          </ListItem>
        </List>
      </ExperienceItem>
      <ExperienceItem>
        <Typography variant="h5">Beam Therapeutics [Cambridge, MA]</Typography>
        <Typography variant="subtitle1">Structural Biology Research Associate</Typography>
        <Typography variant="subtitle2">January 2022 - December 2022</Typography>
        <List>
          <ListItem>
            <ListItemText primary="Performed high-throughput crystallization screening for novel protein complexes" /> 
          </ListItem>
          <ListItem>
            <ListItemText primary="Maintained and updated lab protocols in Benchling which included detailed methodology for protein crystallography" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Operated automated equipment in the lab including SPT Labtech Mosquito, Formulatrix Crystallization Imagers, and Formulatrix Screen Builder" />
          </ListItem>
        </List>
        <Typography variant="subtitle1">Structural Biology Co-op</Typography>
        <Typography variant="subtitle2">July 2021 - December 2021</Typography>
        <List>
          <ListItem>
            <ListItemText primary="Prepared and isolated proteins and protein-oligo complexes for structural characterization using AKTA-chromatography-based techniques" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Utilized software such as PyMOL for molecular visualization of protein crystal structures" />
          </ListItem>
        </List>
      </ExperienceItem>
      <ExperienceItem>
        <Typography variant="h5">Northeastern University, Environmental Health & Safety [Boston, MA]</Typography>
        <Typography variant="subtitle1">Biosafety Technical Assistant Co-op</Typography>
        <Typography variant="subtitle2">July 2020 - December 2020</Typography>
        <List>
          <ListItem>
            <ListItemText primary="Trained over 200 lab members in topics including general biosafety, bloodborne pathogens and exposure control" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Conducted routine lab and autoclave inspections in research facilities on campus" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Attended Institutional Biosafety Committee Meetings and implemented biosafety protocol recommendations" />
          </ListItem>
        </List>
      </ExperienceItem>
    </Container>
  );
};

export default Experience;