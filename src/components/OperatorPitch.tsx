import React from 'react'
import { Box, Paper, Stack, Typography } from '@mui/material'
import Reveal from './Reveal'

const stats = ['12,000+ visitors / month', '$2.4M annual partner revenue', '98% safety compliance']

export default function OperatorPitch() {
  return (
    <Reveal>
      <Paper
        elevation={0}
        sx={{ p: { xs: 3, md: 4.5 }, borderRadius: 3, background: 'rgba(26,10,38,0.76)', border: '1px solid rgba(255,77,109,0.4)' }}
      >
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' }, gap: 3, alignItems: 'center' }}>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 1.2 }}>Why Operators Choose Us</Typography>
            <Typography sx={{ color: '#bcd3e2', lineHeight: 1.85 }}>
              Las Vegas boulevard energy combined with a hard-compliance B2B infrastructure. Licensed operators
              plug into our venue grid, guest verification pipeline, and analytics dashboard — capturing
              demand from travellers seeking premium dating experiences in East Africa.
            </Typography>
          </Box>
          <Stack spacing={1.2}>
            {stats.map((s) => (
              <Box key={s} sx={{ p: 1.6, borderRadius: 2, border: '1px solid rgba(255,204,77,0.3)', bgcolor: 'rgba(255,204,77,0.06)' }}>
                <Typography sx={{ fontWeight: 700, color: '#ffe9af', fontSize: '0.93rem' }}>{s}</Typography>
              </Box>
            ))}
          </Stack>
        </Box>
      </Paper>
    </Reveal>
  )
}
