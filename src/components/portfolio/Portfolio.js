import React from 'react'
import PortfolioBlock from './PortfolioBlock'
import { Box, Grid, Container } from '@mui/material'
import { info } from '../../info/Info'

export default function Portfolio() {
  return (
    <Container maxWidth="xl">
      <Box>
        <Grid container display={'flex'} justifyContent={'center'}>
          {info.portfolio.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <PortfolioBlock
                image={project.image}
                source={project.source}
                title={project.title}
                techno={project.techno}
                desc={project.description}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}
