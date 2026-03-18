import React from 'react'
import { Box, Container, Stack } from '@mui/material'
import JourneyPipeline from '../components/JourneyPipeline'
import MutualAcknowledgment from '../components/MutualAcknowledgment'
import DysfunctionSupport from '../components/DysfunctionSupport'

export default function JourneyPage() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#07101a', color: '#ecf4ff', pt: 10 }}>
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Stack spacing={8}>
          <JourneyPipeline />
          <MutualAcknowledgment />
          <DysfunctionSupport />
        </Stack>
      </Container>
    </Box>
  )
}
