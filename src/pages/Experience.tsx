import React from 'react'
import { Typography, Box, Container } from '@mui/material'
import styled from '@emotion/styled'

const ExperienceItem = styled(Box)`
  margin-bottom: 20px;
`

const Experience: React.FC = () => {
  return (
    <Container>
      <Typography variant='h4' gutterBottom>
        Contact
      </Typography>
      <ExperienceItem>
        <Typography variant='h6'>
          Koch Institute of Integrative Cancer Research at MIT, Yaffe Lab
          [Cambridge, MA]
        </Typography>
        <Typography variant='body2'>
          Contract Lab Technician and Lab Manager
        </Typography>
        <Typography variant='body2'>July 2023 - Present</Typography>
        <Typography variant='body1'>
          • Supported a variety of projects focused on the immunologic and
          inflammatory mediators of cancer progression using T-cell activation
          assays, in-vivo mouse tumor model studies, western blotting, tissue
          culture, flow cytometry, and molecular cloning
          <br />• Assisted with technical operations as a lab manager which
          included tracking and stocking supplies, overseeing vendor
          relationships, and implementing lab organizational strategies
        </Typography>
      </ExperienceItem>
      <ExperienceItem>
        <Typography variant='h6'>Beam Therapeutics [Cambridge, MA]</Typography>
        <Typography variant='body2'>
          Structural Biology Research Associate
        </Typography>
        <Typography variant='body2'>January 2022 - December 2022</Typography>
        <Typography variant='body1'>
          • Performed high-throughput crystallization screening for novel
          protein complexes
          <br />
          • Maintained and updated lab protocols in Benchling which included
          detailed methodology for protein crystallography
          <br />• Operated automated equipment in the lab including SPT Labtech
          Mosquito, Formulatrix Crystallization Imagers, and Formulatrix Screen
          Builder
        </Typography>
      </ExperienceItem>
      <ExperienceItem>
        <Typography variant='body2'>Structural Biology Co-op</Typography>
        <Typography variant='body2'>July 2021 - December 2021</Typography>
        <Typography variant='body1'>
          • Prepared and isolated proteins and protein-oligo complexes for
          structural characterization using AKTA-chromatography-based techniques
          <br />• Utilized software such as PyMOL for molecular visualization of
          protein crystal structures
        </Typography>
      </ExperienceItem>
      <ExperienceItem>
        <Typography variant='h6'>
          Northeastern University, Environmental Health & Safety [Boston, MA]
        </Typography>
        <Typography variant='body2'>
          Biosafety Technical Assistant Co-op
        </Typography>
        <Typography variant='body2'>July 2020 - December 2020</Typography>
        <Typography variant='body1'>
          • Trained over 200 lab members in topics including general biosafety,
          bloodborne pathogens and exposure control
          <br />
          • Conducted routine lab and autoclave inspections in research
          facilities on campus
          <br />• Attended Institutional Biosafety Committee Meetings and
          implemented biosafety protocol recommendations
        </Typography>
      </ExperienceItem>
    </Container>
  )
}

export default Experience
