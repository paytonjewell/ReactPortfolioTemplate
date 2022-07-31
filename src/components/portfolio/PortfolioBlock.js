import React from 'react'
import IconLink from './IconLink'
import { Box } from '@mui/material'

function PortfolioBlock(props) {
  const { image, title, techno, desc } = props

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Box component={'img'} src={image} alt={'mockup'} />
      <h1 style={{ fontSize: '1.4rem' }}>{title}</h1>
      <Box
        className={'portfolio'}
        display={'flex'}
        flexDirection={'row'}
        gap={'0.1rem'}
        alignItems={'center'}
        fontSize={'1rem'}
        py={'1rem'}
      >
        {techno.map((item, index) => (
          <Box p={1} border={'1px solid black'} borderRadius={'20px'}>
            <IconLink key={index} title={item} />
          </Box>
        ))}
      </Box>
      <Box>
        <p>{desc}</p>
      </Box>
    </Box>
  )
}

export default PortfolioBlock
