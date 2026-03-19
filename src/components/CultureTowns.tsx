import React from 'react'
import { Box, Chip, Paper, Stack, Typography } from '@mui/material'
import Reveal from './Reveal'
import { cultureTowns } from './data'

export default function CultureTowns() {
  return (
    <Box>
      {/* Header */}
      <Reveal>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 3,
            background: 'linear-gradient(135deg, rgba(255,204,77,0.08), rgba(35,240,255,0.06))',
            border: '1px solid rgba(255,204,77,0.4)',
            mb: 4,
          }}
        >
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems={{ xs: 'flex-start', sm: 'center' }} sx={{ mb: 1.5 }}>
            <Typography variant="h4" sx={{ fontWeight: 800 }}>
              Culture Towns
            </Typography>
            <Chip
              label="Live-In Cultural Simulation Districts"
              size="small"
              sx={{ bgcolor: 'rgba(255,204,77,0.12)', color: '#ffe9af', border: '1px solid rgba(255,204,77,0.4)', fontWeight: 700 }}
            />
          </Stack>
          <Typography sx={{ color: '#bcd3e2', lineHeight: 1.85, maxWidth: 860 }}>
            International marriages don't end at the altar — they begin a lifetime of navigating each other's
            worlds. Culture Towns are immersive residential and cultural districts within the city, each
            designed to simulate everyday life in a spouse's home country. Like Chinatowns, Greektowns, and
            Little Indias found across the world — but purpose-built to reduce cultural friction, accelerate
            mutual understanding, and give couples a safe space to explore their differences before they become
            household conflicts.
          </Typography>
        </Paper>
      </Reveal>

      {/* Why Culture Towns */}
      <Reveal>
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 0.6 }}>Why Culture Towns Exist</Typography>
        <Typography sx={{ color: '#9fc7de', mb: 3, fontSize: '0.95rem' }}>
          Cultural misunderstanding is the leading cause of breakdown in international marriages. Culture Towns
          are the city's answer — not lectures, but lived experience.
        </Typography>
      </Reveal>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 2, mb: 6 }}>
        {[
          { icon: '🏘️', title: 'Simulate Life Before You Live It', desc: 'Spend a week in your partner\'s cultural context before committing to a life in it. No surprises. No culture shock. Just clarity.' },
          { icon: '🤝', title: 'Resolve Misunderstandings Early', desc: 'Most cultural conflicts stem from assumptions, not malice. Culture Towns replace assumptions with experience and guided conversation.' },
          { icon: '🌐', title: 'Cultural Exchange Goes Both Ways', desc: 'Each town welcomes both partners. The foreign spouse learns the home culture; the local spouse is seen through a new lens.' },
          { icon: '💬', title: 'Language & Communication Bridges', desc: 'Embedded language cafés, translation staff, and communication style workshops help couples find a shared language — literally and emotionally.' },
          { icon: '👨‍👩‍👧', title: 'Family Expectation Workshops', desc: 'From in-law relationships to parenting values to financial roles — facilitated sessions clarify what family actually means in each culture.' },
          { icon: '❤️', title: 'Strengthen the Relationship Foundation', desc: 'Couples who understand each other\'s cultural roots report stronger marriages. Culture Towns are the most powerful relationship preparation tool in the city.' },
        ].map((item, i) => (
          <Reveal key={item.title} delay={i * 70}>
            <Box sx={{
              display: 'flex', flexDirection: 'column', gap: 1,
              p: 2.5, borderRadius: 2.5, height: '100%',
              background: 'rgba(14,6,24,0.78)',
              border: '1px solid rgba(255,204,77,0.22)',
            }}>
              <Typography sx={{ fontSize: '1.4rem' }}>{item.icon}</Typography>
              <Typography sx={{ fontWeight: 800, color: '#ffe9af', fontSize: '0.93rem' }}>{item.title}</Typography>
              <Typography sx={{ color: '#bcd3e2', fontSize: '0.88rem', lineHeight: 1.65 }}>{item.desc}</Typography>
            </Box>
          </Reveal>
        ))}
      </Box>

      {/* Town Cards */}
      <Reveal>
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 0.6 }}>The Districts</Typography>
        <Typography sx={{ color: '#9fc7de', mb: 2.5, fontSize: '0.95rem' }}>
          Eight permanent cultural districts, each a living simulation of home.
        </Typography>
      </Reveal>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 2.5 }}>
        {cultureTowns.map((town, i) => (
          <Reveal key={town.name} delay={i * 60}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 2.5, md: 3 },
                borderRadius: 3,
                background: 'rgba(14,6,24,0.85)',
                border: `1px solid ${town.border}`,
                height: '100%',
              }}
            >
              <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1.2 }}>
                <Typography sx={{ fontSize: '1.8rem', lineHeight: 1 }}>{town.flag}</Typography>
                <Typography variant="h6" sx={{ fontWeight: 900, color: town.color }}>
                  {town.name}
                </Typography>
              </Stack>

              <Typography sx={{ color: '#bcd3e2', fontSize: '0.9rem', lineHeight: 1.7, mb: 2 }}>
                {town.description}
              </Typography>

              <Typography sx={{ fontWeight: 700, color: town.color, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: 0.9, mb: 1 }}>
                What You'll Experience
              </Typography>
              <Stack spacing={0.7}>
                {town.experiences.map((exp) => (
                  <Typography key={exp} sx={{ color: '#d4e6f4', fontSize: '0.86rem', display: 'flex', gap: 1, lineHeight: 1.5 }}>
                    <Box component="span" sx={{ color: town.color, flexShrink: 0 }}>▸</Box>
                    {exp}
                  </Typography>
                ))}
              </Stack>
            </Paper>
          </Reveal>
        ))}
      </Box>

      {/* Closing statement */}
      <Reveal>
        <Paper
          elevation={0}
          sx={{
            mt: 5,
            p: { xs: 3, md: 4 },
            borderRadius: 3,
            background: 'linear-gradient(135deg, rgba(35,240,255,0.07), rgba(255,77,109,0.06))',
            border: '1px solid rgba(35,240,255,0.3)',
            textAlign: 'center',
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 800, mb: 1.2 }}>
            Culture is not a barrier — it's a bridge waiting to be built.
          </Typography>
          <Typography sx={{ color: '#9fc7de', maxWidth: 680, mx: 'auto', lineHeight: 1.8, fontSize: '0.95rem' }}>
            Culture Towns don't ask couples to abandon their heritage — they ask couples to share it.
            Every misunderstanding prevented here is a marriage saved. Every tradition explained here
            is a family unified. This is the infrastructure that makes international marriage not just
            possible, but beautiful.
          </Typography>
        </Paper>
      </Reveal>
    </Box>
  )
}
