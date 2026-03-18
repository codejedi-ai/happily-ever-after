import React from 'react'
import { Box, Container, Stack, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Box sx={{ px: 3, py: 4, borderTop: '1px solid rgba(255,77,109,0.18)' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' }, gap: 2, alignItems: 'center' }}>
          <Typography sx={{ color: '#5e87a0', fontSize: '0.88rem', lineHeight: 1.7 }}>
            Happily Ever After City is a licensed entertainment and social destination. All participation is voluntary,
            verified, and consent-governed. Coercion or exploitation triggers immediate legal referral.
          </Typography>
          <Stack direction="row" spacing={2} justifyContent={{ xs: 'flex-start', md: 'flex-end' }}>
            {['Terms', 'Privacy', 'Compliance', 'Contact'].map((link) => (
              <Typography key={link} component="a" href="#"
                sx={{ color: '#5e87a0', fontSize: '0.88rem', textDecoration: 'none', '&:hover': { color: '#ffe9af' } }}>
                {link}
              </Typography>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
