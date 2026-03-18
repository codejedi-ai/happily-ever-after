import React from 'react'
import { Box, Paper, Typography } from '@mui/material'
import Reveal from './Reveal'
import { schedule } from './data'

export default function TonightSchedule() {
  return (
    <Reveal>
      <Paper
        elevation={0}
        sx={{ p: { xs: 3, md: 4 }, borderRadius: 3, background: 'rgba(22,8,34,0.84)', border: '1px solid rgba(35,240,255,0.38)' }}
      >
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 2.5 }}>Tonight In The City</Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 2 }}>
          {schedule.map((item) => (
            <Paper
              key={item.title}
              elevation={0}
              sx={{ p: 2.2, borderRadius: 2.5, background: 'rgba(39,14,57,0.74)', border: '1px solid rgba(255,77,109,0.3)' }}
            >
              <Typography sx={{ color: '#ffd3dc', fontSize: '0.8rem', fontWeight: 800, mb: 0.5, letterSpacing: 0.5 }}>{item.time}</Typography>
              <Typography sx={{ color: '#ffe9af', fontWeight: 700, mb: 0.7, lineHeight: 1.3 }}>{item.title}</Typography>
              <Typography sx={{ color: '#c8dce9', fontSize: '0.88rem', lineHeight: 1.55 }}>{item.detail}</Typography>
            </Paper>
          ))}
        </Box>
      </Paper>
    </Reveal>
  )
}
