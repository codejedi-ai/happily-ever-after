import React from 'react'
import { Box, Button, Chip, Container, Stack, Typography } from '@mui/material'
import heroImage from '../assets/hero.png'

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        backgroundImage: `
          linear-gradient(to bottom,
            rgba(7,4,14,0.35) 0%,
            rgba(7,4,14,0.2)  40%,
            rgba(7,4,14,0.75) 80%,
            rgba(7,10,18,1)   100%
          ),
          radial-gradient(circle at 15% 20%, rgba(255,77,109,0.28), transparent 40%),
          radial-gradient(circle at 88% 10%, rgba(255,204,77,0.18), transparent 38%),
          radial-gradient(circle at 60% 70%, rgba(35,240,255,0.18), transparent 42%),
          url(${heroImage})
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        pb: { xs: 8, md: 12 },
      }}
    >
      {/* Live stats */}
      <Stack
        direction="row"
        spacing={1}
        flexWrap="wrap"
        useFlexGap
        sx={{ position: 'absolute', top: 80, right: 24 }}
      >
        {['320+ Guests Tonight', '14 Venues Live', '42 Partners'].map((s) => (
          <Chip
            key={s}
            label={s}
            size="small"
            sx={{
              bgcolor: 'rgba(7,4,14,0.72)',
              color: '#ffe9af',
              border: '1px solid rgba(255,204,77,0.45)',
              fontWeight: 700,
              backdropFilter: 'blur(8px)',
            }}
          />
        ))}
      </Stack>

      {/* Copy */}
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: 720 }}>
          <Chip
            label="The Las Vegas of International Marriages"
            sx={{
              mb: 2.5,
              bgcolor: 'rgba(255,204,77,0.14)',
              color: '#ffe9af',
              border: '1px solid rgba(255,204,77,0.55)',
              fontWeight: 700,
              fontSize: '0.88rem',
            }}
          />
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              lineHeight: 1.06,
              fontSize: { xs: '2.6rem', md: '4.2rem' },
              mb: 2,
              textShadow: '0 4px 40px rgba(0,0,0,0.6)',
            }}
          >
            Welcome To Happily Ever After City
          </Typography>
          <Typography
            sx={{ color: '#c8dce9', fontSize: { xs: '1rem', md: '1.2rem' }, mb: 3.5, maxWidth: 580, lineHeight: 1.7 }}
          >
            Uganda's premier consent-first destination — nightlife, culture,
            and international social discovery under one electrifying skyline.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
            <Button variant="contained" color="secondary" size="large"
              sx={{ fontWeight: 800, px: 4, py: 1.4, borderRadius: 2.5, fontSize: '1rem' }}>
              Apply As A Partner
            </Button>
            <Button variant="outlined" color="primary" size="large"
              sx={{ fontWeight: 700, px: 4, py: 1.4, borderRadius: 2.5, fontSize: '1rem' }}>
              Explore The City
            </Button>
          </Stack>
        </Box>
      </Container>

      {/* Scroll hint */}
      <Box
        sx={{
          position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.6, opacity: 0.6,
        }}
      >
        <Typography sx={{ fontSize: '0.75rem', letterSpacing: 2, textTransform: 'uppercase', color: '#87a9bf' }}>
          Scroll
        </Typography>
        <Box sx={{ width: 1, height: 40, borderLeft: '1px solid rgba(135,169,191,0.5)' }} />
      </Box>
    </Box>
  )
}
