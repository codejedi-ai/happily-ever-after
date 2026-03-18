import React from 'react'
import { Box, Container, Stack } from '@mui/material'
import ComplianceSection from '../components/ComplianceSection'
import InternationalGovernance from '../components/InternationalGovernance'

export default function GovernancePage() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#07101a', color: '#ecf4ff', pt: 10 }}>
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Stack spacing={8}>
          <ComplianceSection />
          <InternationalGovernance />
        </Stack>
      </Container>
    </Box>
  )
}
