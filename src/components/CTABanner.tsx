import React from 'react'
import { Box, Button, Paper, Stack, Typography } from '@mui/material'
import Reveal from './Reveal'

export default function CTABanner() {
  return (
    <Reveal>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 4, md: 6 },
          borderRadius: 4,
          textAlign: 'center',
          background: 'linear-gradient(135deg,rgba(44,8,50,0.92),rgba(18,7,36,0.97))',
          border: '1px solid rgba(255,77,109,0.5)',
          boxShadow: '0 0 80px rgba(255,77,109,0.1)',
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 900, mb: 1.5, fontSize: { xs: '1.8rem', md: '2.6rem' } }}>
          Ready To Bring Your Operation In?
        </Typography>
        <Typography sx={{ color: '#9fc7de', mb: 4, fontSize: '1.05rem', maxWidth: 560, mx: 'auto' }}>
          42 licensed operators are already earning inside East Africa's most premium dating destination.
          Applications reviewed within 5 business days.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
          <Button variant="contained" color="secondary" size="large"
            sx={{ fontWeight: 800, px: 4.5, py: 1.5, borderRadius: 2.5 }}>
            Apply As A Partner
          </Button>
          <Button variant="outlined" color="primary" size="large"
            sx={{ fontWeight: 700, px: 4, py: 1.5, borderRadius: 2.5 }}>
            Schedule A Demo
          </Button>
        </Stack>
      </Paper>
    </Reveal>
  )
}
