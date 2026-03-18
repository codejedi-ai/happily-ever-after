import React from 'react'
import { Box, Container, Stack } from '@mui/material'
import PartnerTiers from '../components/PartnerTiers'
import DatingAppPartners from '../components/DatingAppPartners'

export default function PartnersPage() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#07101a', color: '#ecf4ff', pt: 10 }}>
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Stack spacing={8}>
          <PartnerTiers />
          <DatingAppPartners />
        </Stack>
      </Container>
    </Box>
  )
}
