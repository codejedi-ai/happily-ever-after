import React from 'react'
import { Box, Chip, Paper, Stack, Typography } from '@mui/material'
import Reveal from './Reveal'

export default function MutualAcknowledgment() {
  return (
    <Reveal>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 2.5, md: 3.5 },
          borderRadius: 3,
          background: 'linear-gradient(120deg, rgba(35,240,255,0.08), rgba(255,204,77,0.08))',
          border: '1px solid rgba(255,204,77,0.45)',
          display: 'flex',
          alignItems: { xs: 'flex-start', md: 'center' },
          flexDirection: { xs: 'column', md: 'row' },
          gap: 2.5,
        }}
      >
        <Box sx={{ fontSize: '2rem', flexShrink: 0 }}>🤝</Box>
        <Box sx={{ flexGrow: 1 }}>
          <Typography sx={{ fontWeight: 800, mb: 0.5 }}>Both Sides Must Acknowledge Their Stage</Typography>
          <Typography sx={{ color: '#bcd3e2', fontSize: '0.93rem', lineHeight: 1.65 }}>
            No stage in the pipeline advances without mutual confirmation from both parties. Each person independently
            acknowledges their current relationship status through the city app — privately, without pressure.
            Mismatched stages trigger a counselor check-in, not an automatic escalation.
          </Typography>
        </Box>
        <Stack direction="row" spacing={1} flexShrink={0} flexWrap="wrap" useFlexGap>
          <Chip label="Guest confirms" size="small"
            sx={{ bgcolor: 'rgba(35,240,255,0.12)', color: '#b3f0ff', border: '1px solid rgba(35,240,255,0.4)', fontWeight: 700 }} />
          <Chip label="Partner confirms" size="small"
            sx={{ bgcolor: 'rgba(255,204,77,0.12)', color: '#ffe9af', border: '1px solid rgba(255,204,77,0.4)', fontWeight: 700 }} />
        </Stack>
      </Paper>
    </Reveal>
  )
}
