import React from 'react'
import { Box, Button, Paper, Typography } from '@mui/material'
import Reveal from './Reveal'
import { complianceItems } from './data'

export default function ComplianceSection() {
  return (
    <Reveal>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 4.5 },
          borderRadius: 3,
          background: 'linear-gradient(135deg,rgba(255,77,109,0.09),rgba(35,240,255,0.07))',
          border: '1px solid rgba(255,204,77,0.45)',
        }}
      >
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 2fr' }, gap: 3, alignItems: 'start' }}>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 1.2 }}>Compliance & Safety</Typography>
            <Typography sx={{ color: '#bcd3e2', lineHeight: 1.8, mb: 2 }}>
              Every partner must meet our mandatory safety framework. Breach means immediate license suspension
              and referral to authorities.
            </Typography>
            <Button variant="outlined" sx={{ borderColor: 'rgba(255,204,77,0.55)', color: '#ffe9af', fontWeight: 700, borderRadius: 2 }}>
              Download Guide
            </Button>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 1.5 }}>
            {complianceItems.map((item) => (
              <Box key={item.text} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.4, p: 1.6, borderRadius: 2, bgcolor: 'rgba(14,6,22,0.5)', border: '1px solid rgba(255,204,77,0.18)' }}>
                <Typography sx={{ fontSize: '1.05rem', flexShrink: 0 }}>{item.icon}</Typography>
                <Typography sx={{ color: '#e0effa', fontSize: '0.9rem', lineHeight: 1.55 }}>{item.text}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Paper>
    </Reveal>
  )
}
