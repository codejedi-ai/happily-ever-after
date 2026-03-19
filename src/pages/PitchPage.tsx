import React from 'react'
import { Box, Container } from '@mui/material'
import PitchDeck from '../components/PitchDeck'

export default function PitchPage() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#07101a', color: '#ecf4ff', pt: 10 }}>
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <PitchDeck />
      </Container>
    </Box>
  )
}
