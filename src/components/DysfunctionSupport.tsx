import React from 'react'
import { Box, Paper, Typography } from '@mui/material'
import Reveal from './Reveal'
import { dysfunctions } from './data'

export default function DysfunctionSupport() {
  return (
    <Box>
      <Reveal>
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.7 }}>When Things Get Hard</Typography>
        <Typography sx={{ color: '#9fc7de', mb: 3 }}>
          The city has dedicated infrastructure for every relationship difficulty — not just the highlights.
        </Typography>
      </Reveal>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
          gap: 2.5,
        }}
      >
        {dysfunctions.map((item, i) => (
          <Reveal key={item.title} delay={i * 80}>
            <Paper
              elevation={0}
              sx={{ p: 3, borderRadius: 3, height: '100%', background: 'rgba(18,6,28,0.82)', border: `1px solid ${item.border}` }}
            >
              <Typography sx={{ fontSize: '1.6rem', mb: 1 }}>{item.icon}</Typography>
              <Typography sx={{ fontWeight: 800, color: item.color, mb: 0.3 }}>{item.title}</Typography>
              <Typography sx={{ color: '#5e87a0', fontSize: '0.78rem', mb: 1.2, fontStyle: 'italic' }}>{item.venue}</Typography>
              <Typography sx={{ color: '#c8dce9', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.description}</Typography>
            </Paper>
          </Reveal>
        ))}
      </Box>
    </Box>
  )
}
