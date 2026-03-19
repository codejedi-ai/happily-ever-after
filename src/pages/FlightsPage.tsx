import React from 'react'
import { Box, Button, Chip, Container, Paper, Stack, Typography } from '@mui/material'
import Reveal from '../components/Reveal'
import { partnerAirlines, connectingHubs, visaInfo, travelBundles, entryExitProtocols } from '../components/data'

export default function FlightsPage() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#07101a', color: '#ecf4ff', pt: 10 }}>
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Stack spacing={8}>

          {/* Entry & Exit Regulation */}
          <Reveal>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: 3,
                background: 'linear-gradient(135deg, rgba(255,77,109,0.09), rgba(255,204,77,0.07))',
                border: '1px solid rgba(255,77,109,0.5)',
              }}
            >
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems={{ xs: 'flex-start', sm: 'center' }} sx={{ mb: 1.5 }}>
                <Typography variant="h4" sx={{ fontWeight: 800 }}>
                  Every Arrival. Every Departure. Regulated.
                </Typography>
                <Chip
                  label="Controlled International Zone"
                  size="small"
                  sx={{ bgcolor: 'rgba(255,77,109,0.12)', color: '#ffd3dc', border: '1px solid rgba(255,77,109,0.4)', fontWeight: 700, flexShrink: 0 }}
                />
              </Stack>
              <Typography sx={{ color: '#bcd3e2', lineHeight: 1.85, maxWidth: 820, mb: 3.5 }}>
                The city perimeter is a controlled international zone. No one enters anonymously. No one
                leaves without a welfare check. No agency, operator, or Ugandan authority can move a
                person through the gate without consent, documentation, and international oversight.
                This is what makes the city structurally different from everywhere else.
              </Typography>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 2 }}>
                {entryExitProtocols.map((item, i) => (
                  <Reveal key={item.title} delay={i * 60}>
                    <Box sx={{
                      p: 2.2, borderRadius: 2.5, height: '100%',
                      bgcolor: 'rgba(14,6,24,0.82)',
                      border: '1px solid rgba(255,77,109,0.22)',
                      display: 'flex', flexDirection: 'column', gap: 0.8,
                    }}>
                      <Typography sx={{ fontSize: '1.3rem' }}>{item.icon}</Typography>
                      <Typography sx={{ fontWeight: 800, color: '#ffd3dc', fontSize: '0.88rem', lineHeight: 1.3 }}>{item.title}</Typography>
                      <Typography sx={{ color: '#bcd3e2', fontSize: '0.82rem', lineHeight: 1.6 }}>{item.detail}</Typography>
                    </Box>
                  </Reveal>
                ))}
              </Box>
            </Paper>
          </Reveal>

          {/* Neutral Ground Hero */}
          <Reveal>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: 3,
                background: 'linear-gradient(135deg, rgba(35,240,255,0.08), rgba(255,77,109,0.08))',
                border: '1px solid rgba(35,240,255,0.4)',
              }}
            >
              <Chip
                label="Neutral Ground"
                sx={{ mb: 2, bgcolor: 'rgba(35,240,255,0.1)', color: '#b3f0ff', border: '1px solid rgba(35,240,255,0.45)', fontWeight: 700 }}
              />
              <Typography variant="h3" sx={{ fontWeight: 900, mb: 2, fontSize: { xs: '1.8rem', md: '2.8rem' } }}>
                A Safe Place To Meet When No Country Feels Safe
              </Typography>
              <Typography sx={{ color: '#bcd3e2', lineHeight: 1.85, fontSize: '1.05rem', maxWidth: 820, mb: 3 }}>
                Many international couples face a problem no dating app solves: they can't safely visit each
                other's countries. Visa refusals, political tensions, family danger, cultural hostility, or laws
                that criminalise their relationship mean neither person's home is a safe meeting point.
              </Typography>
              <Typography sx={{ color: '#bcd3e2', lineHeight: 1.85, fontSize: '1.05rem', maxWidth: 820, mb: 3 }}>
                The city exists precisely for this. A third country — internationally governed, embassy-anchored,
                and consent-protected — where two people from anywhere in the world can meet on equal footing,
                without either person being on the other's turf.
              </Typography>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' }, gap: 2 }}>
                {[
                  { icon: '🏳️', label: 'No home advantage', detail: 'Neither person is on familiar ground — true equality from day one.' },
                  { icon: '🛡️', label: 'Embassy-protected', detail: 'Your home embassy has a formal presence inside city operations.' },
                  { icon: '⚖️', label: 'International law governs', detail: 'Not Ugandan law. Not your partner\'s law. International frameworks.' },
                ].map((item) => (
                  <Box key={item.label} sx={{ p: 2, borderRadius: 2, bgcolor: 'rgba(35,240,255,0.06)', border: '1px solid rgba(35,240,255,0.2)' }}>
                    <Typography sx={{ fontSize: '1.3rem', mb: 0.8 }}>{item.icon}</Typography>
                    <Typography sx={{ fontWeight: 800, color: '#b3f0ff', fontSize: '0.9rem', mb: 0.4 }}>{item.label}</Typography>
                    <Typography sx={{ color: '#bcd3e2', fontSize: '0.85rem', lineHeight: 1.6 }}>{item.detail}</Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Reveal>

          {/* Partner Airlines */}
          <Box>
            <Reveal>
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.7 }}>Flights In</Typography>
              <Typography sx={{ color: '#9fc7de', mb: 3 }}>
                Entebbe International Airport (EBB) — 45 minutes from the city. Partner airlines cover every major region.
              </Typography>
            </Reveal>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 2.5 }}>
              {partnerAirlines.map((airline, i) => (
                <Reveal key={airline.name} delay={i * 60}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2.5, borderRadius: 3, height: '100%',
                      background: 'rgba(14,6,24,0.84)',
                      border: `1px solid ${airline.border}`,
                      display: 'flex', flexDirection: 'column', gap: 1,
                    }}
                  >
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography sx={{ fontSize: '1.4rem' }}>{airline.icon}</Typography>
                      <Box>
                        <Typography sx={{ fontWeight: 800, color: airline.color, fontSize: '0.92rem', lineHeight: 1.2 }}>{airline.name}</Typography>
                        <Typography sx={{ color: '#5e87a0', fontSize: '0.72rem' }}>{airline.hub}</Typography>
                      </Box>
                    </Stack>
                    <Stack spacing={0.6} sx={{ flexGrow: 1 }}>
                      {airline.routes.map((r) => (
                        <Typography key={r} sx={{ color: '#c8dce9', fontSize: '0.82rem', display: 'flex', gap: 0.8, lineHeight: 1.5 }}>
                          <Box component="span" sx={{ color: airline.color, flexShrink: 0 }}>▸</Box>{r}
                        </Typography>
                      ))}
                    </Stack>
                    <Typography sx={{ color: '#5e87a0', fontSize: '0.78rem', fontStyle: 'italic', mt: 0.5 }}>{airline.note}</Typography>
                  </Paper>
                </Reveal>
              ))}
            </Box>
          </Box>

          {/* Connecting Hubs */}
          <Box>
            <Reveal>
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.7 }}>Major Connecting Hubs</Typography>
              <Typography sx={{ color: '#9fc7de', mb: 3 }}>No matter where you're flying from, one of these hubs connects you.</Typography>
            </Reveal>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 2 }}>
              {connectingHubs.map((hub, i) => (
                <Reveal key={hub.hub} delay={i * 60}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2.2, borderRadius: 2.5, bgcolor: 'rgba(14,6,24,0.78)', border: '1px solid rgba(255,204,77,0.25)' }}>
                    <Typography sx={{ fontSize: '1.6rem', flexShrink: 0 }}>{hub.flag}</Typography>
                    <Box>
                      <Typography sx={{ fontWeight: 800, color: '#ffe9af', fontSize: '0.92rem' }}>{hub.hub}</Typography>
                      <Typography sx={{ color: '#9fc7de', fontSize: '0.8rem' }}>{hub.reach}</Typography>
                      <Typography sx={{ color: '#5e87a0', fontSize: '0.75rem' }}>Avg layover: {hub.avgLayover}</Typography>
                    </Box>
                  </Box>
                </Reveal>
              ))}
            </Box>
          </Box>

          {/* Visa Info */}
          <Box>
            <Reveal>
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.7 }}>Visa & Entry</Typography>
              <Typography sx={{ color: '#9fc7de', mb: 3 }}>Uganda has one of Africa's most open visa policies. Most guests are covered.</Typography>
            </Reveal>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 2 }}>
              {visaInfo.map((item, i) => (
                <Reveal key={item.region} delay={i * 70}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, p: 2.5, borderRadius: 2.5, bgcolor: 'rgba(14,6,24,0.78)', border: '1px solid rgba(35,240,255,0.22)' }}>
                    <Typography sx={{ fontSize: '1.4rem', flexShrink: 0 }}>{item.flag}</Typography>
                    <Box>
                      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 0.5 }}>
                        <Typography sx={{ fontWeight: 800, color: '#b3f0ff', fontSize: '0.9rem' }}>{item.region}</Typography>
                        <Chip label={item.policy} size="small" sx={{ bgcolor: 'rgba(35,240,255,0.1)', color: '#b3f0ff', border: '1px solid rgba(35,240,255,0.3)', fontWeight: 700, fontSize: '0.68rem' }} />
                      </Stack>
                      <Typography sx={{ color: '#bcd3e2', fontSize: '0.87rem', lineHeight: 1.6 }}>{item.detail}</Typography>
                    </Box>
                  </Box>
                </Reveal>
              ))}
            </Box>
          </Box>

          {/* Travel Bundles */}
          <Box>
            <Reveal>
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.7 }}>Flight + City Packages</Typography>
              <Typography sx={{ color: '#9fc7de', mb: 3 }}>Airfare, transfer, accommodation, and events — one booking.</Typography>
            </Reveal>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3 }}>
              {travelBundles.map((bundle, i) => (
                <Reveal key={bundle.name} delay={i * 100} style={{ height: '100%' }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3, borderRadius: 3, height: '100%',
                      background: 'rgba(14,6,24,0.84)',
                      border: `1px solid ${bundle.border}`,
                      display: 'flex', flexDirection: 'column',
                    }}
                  >
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.8 }}>
                      <Typography variant="h6" sx={{ fontWeight: 800, color: bundle.color }}>{bundle.name}</Typography>
                      <Chip label={bundle.duration} size="small" sx={{ bgcolor: 'transparent', border: `1px solid ${bundle.border}`, color: bundle.color, fontWeight: 700, fontSize: '0.7rem' }} />
                    </Stack>
                    <Stack spacing={0.9} sx={{ flexGrow: 1 }}>
                      {bundle.includes.map((line) => (
                        <Typography key={line} sx={{ color: '#d4e6f4', fontSize: '0.88rem', display: 'flex', gap: 1, lineHeight: 1.55 }}>
                          <Box component="span" sx={{ color: bundle.color, flexShrink: 0 }}>✓</Box>{line}
                        </Typography>
                      ))}
                    </Stack>
                    <Button fullWidth variant="outlined" sx={{ mt: 2.5, borderColor: bundle.border, color: bundle.color, fontWeight: 700, borderRadius: 2 }}>
                      Book This Package
                    </Button>
                  </Paper>
                </Reveal>
              ))}
            </Box>
          </Box>

          {/* Airport Transfer */}
          <Reveal>
            <Paper
              elevation={0}
              sx={{ p: { xs: 3, md: 4 }, borderRadius: 3, background: 'rgba(22,8,34,0.84)', border: '1px solid rgba(255,204,77,0.38)' }}
            >
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>Entebbe → The City</Typography>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' }, gap: 2.5 }}>
                {[
                  { icon: '🚐', mode: 'City Shuttle', detail: 'Scheduled transfers every 90 min from the arrivals hall. Included in all packages.', time: '45 min' },
                  { icon: '🚗', mode: 'Private Transfer', detail: 'Meet-and-greet service with a named driver. Bookable through any partner agency.', time: '35 min' },
                  { icon: '🚁', mode: 'Helicopter Transfer', detail: 'Premium arrival directly to the Sky Deck helipad. Available for Connection Week and above.', time: '12 min' },
                ].map((item) => (
                  <Box key={item.mode} sx={{ p: 2.5, borderRadius: 2.5, bgcolor: 'rgba(39,14,57,0.74)', border: '1px solid rgba(255,204,77,0.25)' }}>
                    <Typography sx={{ fontSize: '1.5rem', mb: 0.8 }}>{item.icon}</Typography>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 0.6 }}>
                      <Typography sx={{ fontWeight: 800, color: '#ffe9af' }}>{item.mode}</Typography>
                      <Chip label={item.time} size="small" sx={{ bgcolor: 'rgba(255,204,77,0.1)', color: '#ffe9af', border: '1px solid rgba(255,204,77,0.3)', fontWeight: 700, fontSize: '0.68rem' }} />
                    </Stack>
                    <Typography sx={{ color: '#c8dce9', fontSize: '0.88rem', lineHeight: 1.6 }}>{item.detail}</Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Reveal>

        </Stack>
      </Container>
    </Box>
  )
}
