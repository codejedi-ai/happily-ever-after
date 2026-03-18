import React from 'react'
import { Box, Chip, Paper, Stack, Typography } from '@mui/material'
import Reveal from './Reveal'
import { journey } from './data'

export default function JourneyPipeline() {
  return (
    <Box>
      <Reveal>
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.7 }}>From Stranger To Married</Typography>
        <Typography sx={{ color: '#9fc7de', mb: 3 }}>
          Every stage of the journey has a dedicated part of the city built for it.
        </Typography>
      </Reveal>
      <Stack spacing={0}>
        {journey.map((item, i) => (
          <Reveal key={item.stage} delay={i * 60}>
            <Box sx={{ display: 'flex', alignItems: 'stretch', position: 'relative' }}>
              {/* Bubble + connector */}
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 2.5, flexShrink: 0, pt: 2 }}>
                <Box
                  sx={{
                    width: 42, height: 42, borderRadius: '50%',
                    border: `2px solid ${item.color}`,
                    bgcolor: 'rgba(7,4,14,0.9)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, boxShadow: `0 0 16px ${item.border}`, zIndex: 1,
                  }}
                >
                  <Typography sx={{ fontSize: '0.72rem', fontWeight: 900, color: item.color, letterSpacing: 0.5 }}>
                    {item.stage}
                  </Typography>
                </Box>
                {i < journey.length - 1 && (
                  <Box sx={{ width: 2, flexGrow: 1, minHeight: 24, bgcolor: `${item.color}40`, mt: 0.5, mb: 0.5 }} />
                )}
              </Box>

              {/* Card */}
              <Paper
                elevation={0}
                sx={{
                  flex: 1,
                  mb: i < journey.length - 1 ? 1 : 0,
                  p: { xs: 2, md: 2.5 },
                  borderRadius: 2.5,
                  background: 'rgba(22,8,34,0.78)',
                  border: `1px solid ${item.border}`,
                  display: 'flex',
                  alignItems: { xs: 'flex-start', md: 'center' },
                  flexDirection: { xs: 'column', md: 'row' },
                  gap: 2,
                }}
              >
                <Chip
                  label={item.label}
                  size="small"
                  sx={{
                    bgcolor: 'transparent', border: `1px solid ${item.border}`, color: item.color,
                    fontWeight: 800, fontSize: '0.72rem', letterSpacing: 0.8, minWidth: 90, flexShrink: 0,
                  }}
                />
                <Box sx={{ flexShrink: 0, minWidth: { md: 220 } }}>
                  <Typography sx={{ fontWeight: 800, color: item.color, fontSize: '0.82rem', mb: 0.2 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: '#7a9ab5', fontSize: '0.78rem' }}>{item.venue}</Typography>
                </Box>
                <Typography sx={{ color: '#c8dce9', fontSize: '0.9rem', lineHeight: 1.55 }}>
                  {item.description}
                </Typography>
              </Paper>
            </Box>
          </Reveal>
        ))}
      </Stack>
    </Box>
  )
}
