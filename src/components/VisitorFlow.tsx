import React from 'react'
import { Box, Paper, Typography } from '@mui/material'
import Reveal from './Reveal'
import { visitorFlow } from './data'

export default function VisitorFlow() {
  return (
    <Box>
      <Reveal>
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.7 }}>How A Visit Works</Typography>
        <Typography sx={{ color: '#9fc7de', mb: 3 }}>Consent-driven at every touchpoint.</Typography>
      </Reveal>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 2.5 }}>
        {visitorFlow.map((item, i) => (
          <Reveal key={item.step} delay={i * 100}>
            <Paper
              elevation={0}
              sx={{ p: 3, borderRadius: 3, height: '100%', background: 'rgba(32,12,46,0.8)', border: '1px solid rgba(255,204,77,0.35)' }}
            >
              <Typography sx={{ fontSize: '2rem', fontWeight: 900, color: 'rgba(255,204,77,0.45)', lineHeight: 1, mb: 1 }}>
                {item.step}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 800, mb: 0.8 }}>{item.title}</Typography>
              <Typography sx={{ color: '#bcd3e2', lineHeight: 1.65 }}>{item.description}</Typography>
            </Paper>
          </Reveal>
        ))}
      </Box>
    </Box>
  )
}
