import React from 'react'
import { Box, Container } from '@mui/material'
import CultureTowns from '../components/CultureTowns'

export default function CultureTownsPage() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#07101a', color: '#ecf4ff', pt: 10 }}>
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <CultureTowns />
      </Container>
    </Box>
  )
}
