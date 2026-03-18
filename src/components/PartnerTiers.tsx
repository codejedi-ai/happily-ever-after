import React from 'react'
import { Box, Button, Paper, Stack, Typography } from '@mui/material'
import Reveal from './Reveal'
import { partnerTiers } from './data'

export default function PartnerTiers() {
  return (
    <Box>
      <Reveal>
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.7 }}>B2B Partner Program</Typography>
        <Typography sx={{ color: '#9fc7de', mb: 3 }}>Three tiers — pick the one that fits your operation.</Typography>
      </Reveal>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3 }}>
        {partnerTiers.map((tier, i) => (
          <Reveal key={tier.tier} delay={i * 100}>
            <Paper
              elevation={0}
              sx={{ p: 3, borderRadius: 3, height: '100%', background: 'rgba(30,10,44,0.82)', border: `1px solid ${tier.border}` }}
            >
              <Typography variant="h6" sx={{ fontWeight: 800, color: tier.color, mb: 1.8 }}>{tier.tier}</Typography>
              <Stack spacing={1.1} sx={{ mb: 2.5 }}>
                {tier.items.map((item) => (
                  <Typography key={item} sx={{ color: '#d4e6f4', fontSize: '0.93rem', display: 'flex', gap: 1 }}>
                    <Box component="span" sx={{ color: tier.color, flexShrink: 0 }}>▸</Box>
                    {item}
                  </Typography>
                ))}
              </Stack>
              <Button fullWidth variant="outlined" sx={{ borderColor: tier.border, color: tier.color, fontWeight: 700, borderRadius: 2 }}>
                Apply Now
              </Button>
            </Paper>
          </Reveal>
        ))}
      </Box>
    </Box>
  )
}
