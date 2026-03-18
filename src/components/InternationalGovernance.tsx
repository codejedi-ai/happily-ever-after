import React from 'react'
import { Box, Chip, Paper, Stack, Typography } from '@mui/material'
import Reveal from './Reveal'
import { embassyRoles, oversightBodies, corruptionSafeguards } from './data'

export default function InternationalGovernance() {
  return (
    <Box>
      {/* Header */}
      <Reveal>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 3,
            background: 'linear-gradient(135deg, rgba(35,240,255,0.07), rgba(255,204,77,0.07))',
            border: '1px solid rgba(35,240,255,0.4)',
            mb: 4,
          }}
        >
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems={{ xs: 'flex-start', sm: 'center' }} sx={{ mb: 1.5 }}>
            <Typography variant="h4" sx={{ fontWeight: 800 }}>
              International Governance & Oversight
            </Typography>
            <Chip
              label="Uganda-based · Internationally governed"
              size="small"
              sx={{ bgcolor: 'rgba(35,240,255,0.1)', color: '#b3f0ff', border: '1px solid rgba(35,240,255,0.4)', fontWeight: 700 }}
            />
          </Stack>
          <Typography sx={{ color: '#bcd3e2', lineHeight: 1.85, maxWidth: 820 }}>
            The city operates on Ugandan soil under a framework deliberately designed so that no single Ugandan
            authority — government, police, or judiciary — can unilaterally interfere with, shut down, or extract
            from its operations. Every participant, partner, and process is anchored to international law,
            embassy access, and multi-body oversight. Corruption is not ignored here — it is structurally neutralised.
          </Typography>
        </Paper>
      </Reveal>

      {/* Embassy Partnerships */}
      <Reveal>
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 0.6 }}>Embassy Partners</Typography>
        <Typography sx={{ color: '#9fc7de', mb: 2.5, fontSize: '0.95rem' }}>
          Every major sending country has a formal consular role inside city operations.
        </Typography>
      </Reveal>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 2.5, mb: 6 }}>
        {embassyRoles.map((item, i) => (
          <Reveal key={item.country} delay={i * 70}>
            <Paper
              elevation={0}
              sx={{
                p: 3, borderRadius: 3, height: '100%',
                background: 'rgba(14,6,24,0.84)',
                border: '1px solid rgba(35,240,255,0.3)',
                display: 'flex', flexDirection: 'column', gap: 1,
              }}
            >
              <Stack direction="row" spacing={1.2} alignItems="center">
                <Typography sx={{ fontSize: '1.5rem' }}>{item.icon}</Typography>
                <Box>
                  <Typography sx={{ fontWeight: 800, color: '#b3f0ff', fontSize: '0.9rem' }}>{item.country}</Typography>
                  <Typography sx={{ color: '#5e87a0', fontSize: '0.75rem' }}>{item.role}</Typography>
                </Box>
              </Stack>
              <Typography sx={{ color: '#c8dce9', fontSize: '0.88rem', lineHeight: 1.65, flexGrow: 1 }}>
                {item.detail}
              </Typography>
            </Paper>
          </Reveal>
        ))}
      </Box>

      {/* International Oversight Bodies */}
      <Reveal>
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 0.6 }}>International Oversight Bodies</Typography>
        <Typography sx={{ color: '#9fc7de', mb: 2.5, fontSize: '0.95rem' }}>
          Six independent bodies with standing access to city records, incident logs, and partner data.
        </Typography>
      </Reveal>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 2, mb: 6 }}>
        {oversightBodies.map((item, i) => (
          <Reveal key={item.name} delay={i * 70}>
            <Box sx={{
              display: 'flex', alignItems: 'flex-start', gap: 2, p: 2.5, borderRadius: 2.5,
              background: 'rgba(14,6,24,0.78)', border: '1px solid rgba(255,204,77,0.25)',
            }}>
              <Typography sx={{ fontSize: '1.4rem', flexShrink: 0, mt: 0.2 }}>{item.icon}</Typography>
              <Box>
                <Typography sx={{ fontWeight: 800, color: '#ffe9af', fontSize: '0.9rem', mb: 0.4 }}>{item.name}</Typography>
                <Typography sx={{ color: '#bcd3e2', fontSize: '0.88rem', lineHeight: 1.6 }}>{item.function}</Typography>
              </Box>
            </Box>
          </Reveal>
        ))}
      </Box>

      {/* Anti-Corruption Safeguards */}
      <Reveal>
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 0.6 }}>Anti-Corruption Architecture</Typography>
        <Typography sx={{ color: '#9fc7de', mb: 2.5, fontSize: '0.95rem' }}>
          Uganda's corruption risk is real. These six structural safeguards ensure it cannot touch city operations.
        </Typography>
      </Reveal>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 2.5 }}>
        {corruptionSafeguards.map((item, i) => (
          <Reveal key={item.title} delay={i * 70}>
            <Paper
              elevation={0}
              sx={{
                p: 3, borderRadius: 3, height: '100%',
                background: 'rgba(14,6,24,0.84)',
                border: '1px solid rgba(255,77,109,0.3)',
                display: 'flex', flexDirection: 'column', gap: 1,
              }}
            >
              <Typography sx={{ fontWeight: 800, color: '#ffd3dc', fontSize: '0.95rem' }}>{item.title}</Typography>
              <Typography sx={{ color: '#bcd3e2', fontSize: '0.88rem', lineHeight: 1.65 }}>{item.description}</Typography>
            </Paper>
          </Reveal>
        ))}
      </Box>
    </Box>
  )
}
