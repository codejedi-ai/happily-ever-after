import React from 'react'
import { Box, Container, Stack } from '@mui/material'
import HeroSection from '../components/HeroSection'
import OperatorPitch from '../components/OperatorPitch'
import CTABanner from '../components/CTABanner'

export default function Home() {
  return (
    <Box sx={{ minHeight: '100vh', color: '#ecf4ff', bgcolor: '#07101a' }}>
      <HeroSection />
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Stack spacing={8}>
          <OperatorPitch />
          <CTABanner />
        </Stack>
      </Container>

    </Box>
  )
}
