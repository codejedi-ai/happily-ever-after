import React from 'react'
import { Box, Container, Stack } from '@mui/material'
import TonightSchedule from '../components/TonightSchedule'
import VisitorFlow from '../components/VisitorFlow'

export default function VisitPage() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#07101a', color: '#ecf4ff', pt: 10 }}>
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Stack spacing={8}>
          <TonightSchedule />
          <VisitorFlow />
        </Stack>
      </Container>
    </Box>
  )
}
