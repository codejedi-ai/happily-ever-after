import React from 'react'
import { Box, Button, Chip, Paper, Stack, Typography } from '@mui/material'
import Reveal from './Reveal'
import { datingApps, appPartnerValue } from './data'

export default function DatingAppPartners() {
  return (
    <Box>
      {/* Header */}
      <Reveal>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 3,
            background: 'linear-gradient(135deg, rgba(255,107,107,0.08), rgba(255,198,41,0.07))',
            border: '1px solid rgba(255,107,107,0.4)',
            mb: 4,
          }}
        >
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems={{ xs: 'flex-start', sm: 'center' }} sx={{ mb: 1.5 }}>
            <Typography variant="h4" sx={{ fontWeight: 800 }}>
              Dating Apps Are Natural Partners
            </Typography>
            <Chip
              label="Tinder · Hinge · Bumble · Match Group"
              size="small"
              sx={{ bgcolor: 'rgba(255,107,107,0.12)', color: '#ffb3b3', border: '1px solid rgba(255,107,107,0.4)', fontWeight: 700 }}
            />
          </Stack>
          <Typography sx={{ color: '#bcd3e2', lineHeight: 1.85, maxWidth: 820 }}>
            Every major dating app has the same unsolved problem: they create matches but have no physical
            infrastructure to help people actually meet — especially across borders. The city is the missing
            piece of the global dating supply chain. For apps, this is a new premium revenue layer, a
            safety story, and a first-party data source they cannot build anywhere else.
          </Typography>
        </Paper>
      </Reveal>

      {/* Why Apps Need This */}
      <Reveal>
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 0.6 }}>Why Every App Needs A City Like This</Typography>
        <Typography sx={{ color: '#9fc7de', mb: 2.5, fontSize: '0.95rem' }}>
          Six structural gaps in the dating app industry that the city solves.
        </Typography>
      </Reveal>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 2, mb: 6 }}>
        {appPartnerValue.map((item, i) => (
          <Reveal key={item.title} delay={i * 70}>
            <Box sx={{
              display: 'flex', flexDirection: 'column', gap: 1,
              p: 2.5, borderRadius: 2.5, height: '100%',
              background: 'rgba(14,6,24,0.78)',
              border: '1px solid rgba(255,107,107,0.22)',
            }}>
              <Typography sx={{ fontSize: '1.4rem' }}>{item.icon}</Typography>
              <Typography sx={{ fontWeight: 800, color: '#ffb3b3', fontSize: '0.93rem' }}>{item.title}</Typography>
              <Typography sx={{ color: '#bcd3e2', fontSize: '0.88rem', lineHeight: 1.65 }}>{item.description}</Typography>
            </Box>
          </Reveal>
        ))}
      </Box>

      {/* Per-App Cards */}
      <Reveal>
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 0.6 }}>Platform-by-Platform Opportunity</Typography>
        <Typography sx={{ color: '#9fc7de', mb: 2.5, fontSize: '0.95rem' }}>
          Each app has a unique angle. Here is the pitch for each one.
        </Typography>
      </Reveal>
      <Stack spacing={2.5}>
        {datingApps.map((app, i) => {
          const isRainbow = 'rainbow' in app && app.rainbow
          const rainbowGradient = 'linear-gradient(90deg, #e40303, #ff8c00, #ffed00, #008026, #004dff, #750787)'

          return (
          <Reveal key={app.name} delay={i * 60}>
            {/* Rainbow border via wrapper box */}
            <Box sx={isRainbow ? {
              background: rainbowGradient,
              borderRadius: '14px',
              p: '1.5px',
            } : {}}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 2.5, md: 3.5 },
                borderRadius: isRainbow ? '13px' : 3,
                background: 'rgba(14,6,24,0.97)',
                border: isRainbow ? 'none' : `1px solid ${app.border}`,
              }}
            >
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3, alignItems: 'start' }}>
                {/* Left: identity + opportunity */}
                <Box>
                  <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
                    <Typography
                      variant="h6"
                      sx={isRainbow ? {
                        fontWeight: 900,
                        background: rainbowGradient,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      } : { fontWeight: 900, color: app.color }}
                    >
                      {app.name}
                    </Typography>
                    {isRainbow && <Typography sx={{ fontSize: '1.1rem' }}>🏳️‍🌈</Typography>}
                  </Stack>
                  <Typography sx={{ color: '#7a9ab5', fontSize: '0.82rem', fontStyle: 'italic', mb: 1.2 }}>
                    {app.tagline}
                  </Typography>
                  <Typography sx={{ color: '#c8dce9', fontSize: '0.92rem', lineHeight: 1.7 }}>
                    {app.opportunity}
                  </Typography>
                </Box>

                {/* Right: integrations + CTA */}
                <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Typography sx={isRainbow ? {
                    fontWeight: 700, fontSize: '0.82rem', mb: 1.2, textTransform: 'uppercase', letterSpacing: 0.8,
                    background: rainbowGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  } : { fontWeight: 700, color: app.color, fontSize: '0.82rem', mb: 1.2, textTransform: 'uppercase', letterSpacing: 0.8 }}>
                    City Integrations
                  </Typography>
                  <Stack spacing={0.9} sx={{ flexGrow: 1 }}>
                    {app.integrations.map((line) => (
                      <Typography key={line} sx={{ color: '#d4e6f4', fontSize: '0.88rem', display: 'flex', gap: 1, lineHeight: 1.55 }}>
                        <Box component="span" sx={isRainbow ? {
                          background: rainbowGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', flexShrink: 0,
                        } : { color: app.color, flexShrink: 0 }}>▸</Box>
                        {line}
                      </Typography>
                    ))}
                  </Stack>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={isRainbow ? {
                      mt: 2, fontWeight: 700, borderRadius: 2, alignSelf: 'flex-start',
                      background: rainbowGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text', borderColor: 'transparent',
                      outline: '1.5px solid',
                      outlineColor: 'rgba(255,255,255,0.25)',
                    } : { mt: 2, borderColor: app.border, color: app.color, fontWeight: 700, borderRadius: 2, alignSelf: 'flex-start' }}
                  >
                    Request Partnership Deck
                  </Button>
                </Box>
              </Box>
            </Paper>
            </Box>
          </Reveal>
          )
        })}
      </Stack>
    </Box>
  )
}
