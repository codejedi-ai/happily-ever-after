import React from 'react'
import { Box, Chip, Divider, LinearProgress, Paper, Stack, Typography } from '@mui/material'
import Reveal from './Reveal'
import {
  pitchProblems, pitchSolution, pitchMarket, pitchMarketStats, pitchRevenue,
  pitchCompetitors, pitchCompetitorDetail, pitchRisks, pitchOpportunities,
  pitchAsk, pitchTraction, pitchTeamPlaceholders,
} from './pitchData'

// ── Section wrapper ──────────────────────────────────────────────────────────
function Section({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <Box id={id} sx={{ mb: 10 }}>
      {children}
    </Box>
  )
}

function SectionHeading({ label, title, sub }: { label: string; title: string; sub?: string }) {
  return (
    <Reveal>
      <Chip label={label} size="small" sx={{ mb: 1.5, bgcolor: 'rgba(255,204,77,0.12)', color: '#ffe9af', border: '1px solid rgba(255,204,77,0.4)', fontWeight: 700 }} />
      <Typography variant="h4" sx={{ fontWeight: 900, mb: sub ? 0.8 : 2.5 }}>{title}</Typography>
      {sub && <Typography sx={{ color: '#9fc7de', mb: 2.5, fontSize: '0.97rem', maxWidth: 700 }}>{sub}</Typography>}
    </Reveal>
  )
}

export default function PitchDeck() {
  return (
    <Box>

      {/* ── HERO SLIDE ─────────────────────────────────────────────────────── */}
      <Section>
        <Reveal>
          <Paper elevation={0} sx={{
            p: { xs: 4, md: 7 }, borderRadius: 4, textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(255,77,109,0.12), rgba(255,204,77,0.08), rgba(35,240,255,0.08))',
            border: '1px solid rgba(255,204,77,0.5)',
          }}>
            <Chip label="Investor Pitch · Confidential" size="small" sx={{ mb: 3, bgcolor: 'rgba(255,77,109,0.14)', color: '#ffd3dc', border: '1px solid rgba(255,77,109,0.4)', fontWeight: 700 }} />
            <Typography variant="h2" sx={{ fontWeight: 900, fontSize: { xs: '2.4rem', md: '3.8rem' }, lineHeight: 1.08, mb: 2.5 }}>
              Happily Ever After City
            </Typography>
            <Typography variant="h5" sx={{ color: '#ffe9af', fontWeight: 700, mb: 2 }}>
              The world's first purpose-built city for international marriage.
            </Typography>
            <Typography sx={{ color: '#9fc7de', maxWidth: 680, mx: 'auto', lineHeight: 1.85, fontSize: '1.05rem', mb: 4 }}>
              A consent-first, internationally governed city district in Uganda — combining romance infrastructure,
              cultural immersion, and compliance architecture to solve the $119B international marriage market's
              most fundamental problem: there is nowhere safe and purposeful for people to actually meet.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              {['$119B TAM', '$24M Series A', 'First-mover advantage', 'No comparable competitor'].map((tag) => (
                <Chip key={tag} label={tag} sx={{ bgcolor: 'rgba(255,204,77,0.1)', color: '#ffe9af', border: '1px solid rgba(255,204,77,0.35)', fontWeight: 700 }} />
              ))}
            </Stack>
          </Paper>
        </Reveal>
      </Section>

      {/* ── THE PROBLEM ────────────────────────────────────────────────────── */}
      <Section id="problem">
        <SectionHeading
          label="01 · The Problem"
          title="International Love Has No Home"
          sub="Three structural failures in the global international marriage market — all unsolved, all compounding."
        />
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2.5 }}>
          {pitchProblems.map((p, i) => (
            <Reveal key={p.label} delay={i * 80}>
              <Paper elevation={0} sx={{
                p: 3.5, borderRadius: 3, height: '100%',
                background: 'rgba(14,6,24,0.85)',
                border: `1px solid rgba(255,107,107,0.3)`,
              }}>
                <Typography sx={{ fontSize: '2rem', mb: 1.5 }}>{p.icon}</Typography>
                <Typography sx={{ fontSize: '2.8rem', fontWeight: 900, color: p.color, lineHeight: 1, mb: 0.5 }}>{p.stat}</Typography>
                <Typography sx={{ color: '#ffe9af', fontWeight: 700, fontSize: '0.9rem', mb: 1.5, lineHeight: 1.4 }}>{p.label}</Typography>
                <Divider sx={{ borderColor: 'rgba(255,255,255,0.07)', mb: 1.5 }} />
                <Typography sx={{ color: '#9fc7de', fontSize: '0.88rem', lineHeight: 1.7 }}>{p.detail}</Typography>
              </Paper>
            </Reveal>
          ))}
        </Box>
      </Section>

      {/* ── THE SOLUTION ───────────────────────────────────────────────────── */}
      <Section id="solution">
        <SectionHeading
          label="02 · The Solution"
          title="Build the City They've Always Needed"
          sub="The world's first purpose-built physical infrastructure for international marriage — from first mixer to honeymoon suite."
        />
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 2.5 }}>
          {pitchSolution.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <Paper elevation={0} sx={{
                p: 3, borderRadius: 3,
                background: 'rgba(14,6,24,0.85)',
                border: '1px solid rgba(255,204,77,0.25)',
              }}>
                <Typography sx={{ fontSize: '2rem', mb: 1.2 }}>{s.icon}</Typography>
                <Typography sx={{ fontWeight: 800, color: '#ffe9af', mb: 0.8 }}>{s.title}</Typography>
                <Typography sx={{ color: '#bcd3e2', fontSize: '0.9rem', lineHeight: 1.72 }}>{s.description}</Typography>
              </Paper>
            </Reveal>
          ))}
        </Box>
      </Section>

      {/* ── MARKET OPPORTUNITY ─────────────────────────────────────────────── */}
      <Section id="market">
        <SectionHeading
          label="03 · Market Opportunity"
          title="A $32B+ Market With No Physical Player"
          sub="International dating apps, romance tourism, destination weddings, and marriage immigration services — with zero purpose-built physical infrastructure anywhere in the world."
        />
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2.5, mb: 4 }}>
          {pitchMarket.map((m, i) => (
            <Reveal key={m.label} delay={i * 80}>
              <Paper elevation={0} sx={{
                p: 3.5, borderRadius: 3, height: '100%',
                background: 'rgba(14,6,24,0.85)',
                border: `1px solid ${m.border}`,
              }}>
                <Chip label={m.label} size="small" sx={{ mb: 1.5, bgcolor: 'rgba(255,255,255,0.05)', color: m.color, border: `1px solid ${m.border}`, fontWeight: 800 }} />
                <Typography sx={{ fontSize: '3rem', fontWeight: 900, color: m.color, lineHeight: 1, mb: 0.5 }}>{m.value}</Typography>
                <Typography sx={{ color: '#bcd3e2', fontWeight: 700, fontSize: '0.88rem', mb: 2 }}>{m.sublabel}</Typography>
                <Divider sx={{ borderColor: 'rgba(255,255,255,0.07)', mb: 2 }} />
                <Typography sx={{ color: '#8aadca', fontSize: '0.83rem', lineHeight: 1.65 }}>{m.breakdown}</Typography>
              </Paper>
            </Reveal>
          ))}
        </Box>

        {/* Supporting stats */}
        <Reveal>
          <Paper elevation={0} sx={{
            p: 3, borderRadius: 3,
            background: 'rgba(35,240,255,0.04)',
            border: '1px solid rgba(35,240,255,0.2)',
          }}>
            <Typography sx={{ fontWeight: 700, color: '#b3f0ff', mb: 2, fontSize: '0.88rem', textTransform: 'uppercase', letterSpacing: 0.8 }}>Supporting Market Data — Cited Sources</Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 2 }}>
              {pitchMarketStats.map((stat) => (
                <Box key={stat.v} sx={{ p: 2, borderRadius: 2, bgcolor: 'rgba(35,240,255,0.06)', border: '1px solid rgba(35,240,255,0.12)' }}>
                  <Typography sx={{ fontSize: '1.5rem', fontWeight: 900, color: '#b3f0ff', lineHeight: 1 }}>{stat.v}</Typography>
                  <Typography sx={{ color: '#9fc7de', fontSize: '0.82rem', lineHeight: 1.55, mt: 0.5 }}>{stat.l}</Typography>
                  <Typography sx={{ color: '#5a7a8a', fontSize: '0.74rem', mt: 0.8, fontStyle: 'italic' }}>Source: {stat.src}</Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Reveal>
      </Section>

      {/* ── BUSINESS MODEL ─────────────────────────────────────────────────── */}
      <Section id="business-model">
        <SectionHeading
          label="04 · Business Model"
          title="Seven Revenue Streams, One City"
          sub="Diversified revenue from venue fees, agency licensing, app partnerships, travel margins, and cultural experiences."
        />
        <Stack spacing={2}>
          {pitchRevenue.map((r, i) => (
            <Reveal key={r.stream} delay={i * 50}>
              <Paper elevation={0} sx={{
                p: { xs: 2, md: 2.5 }, borderRadius: 2.5,
                background: 'rgba(14,6,24,0.85)',
                border: '1px solid rgba(255,204,77,0.18)',
              }}>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr 1fr 1fr' }, gap: 2, alignItems: 'center' }}>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Typography sx={{ fontSize: '1.4rem' }}>{r.icon}</Typography>
                    <Box>
                      <Typography sx={{ fontWeight: 800, color: r.color, fontSize: '0.95rem' }}>{r.stream}</Typography>
                      <Typography sx={{ color: '#6a8ea5', fontSize: '0.8rem' }}>{r.model}</Typography>
                    </Box>
                  </Stack>
                  <Box>
                    <Typography sx={{ color: '#6a8ea5', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: 0.7 }}>Year 1</Typography>
                    <Typography sx={{ fontWeight: 800, color: '#bcd3e2' }}>{r.year1}</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#6a8ea5', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: 0.7 }}>Year 3</Typography>
                    <Typography sx={{ fontWeight: 800, color: '#ffe9af' }}>{r.year3}</Typography>
                  </Box>
                  <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    <LinearProgress
                      variant="determinate"
                      value={Math.min((parseInt(r.year3.replace(/\D/g, '')) / 22) * 100, 100)}
                      sx={{
                        height: 6, borderRadius: 3,
                        bgcolor: 'rgba(255,255,255,0.06)',
                        '& .MuiLinearProgress-bar': { bgcolor: r.color, borderRadius: 3 },
                      }}
                    />
                  </Box>
                </Box>
              </Paper>
            </Reveal>
          ))}
        </Stack>
        <Reveal>
          <Paper elevation={0} sx={{
            mt: 3, p: 2.5, borderRadius: 2.5,
            background: 'linear-gradient(90deg, rgba(255,204,77,0.1), rgba(35,240,255,0.07))',
            border: '1px solid rgba(255,204,77,0.4)',
            display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap',
          }}>
            <Box>
              <Typography sx={{ color: '#8aadca', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: 0.8 }}>Total Year 1 Revenue</Typography>
              <Typography sx={{ fontWeight: 900, fontSize: '1.8rem', color: '#ffe9af' }}>$7.1M</Typography>
            </Box>
            <Box>
              <Typography sx={{ color: '#8aadca', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: 0.8 }}>Total Year 3 Revenue</Typography>
              <Typography sx={{ fontWeight: 900, fontSize: '1.8rem', color: '#ffe9af' }}>$82M</Typography>
            </Box>
            <Box>
              <Typography sx={{ color: '#8aadca', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: 0.8 }}>Gross Margin (Year 3)</Typography>
              <Typography sx={{ fontWeight: 900, fontSize: '1.8rem', color: '#b3f0ff' }}>~61%</Typography>
            </Box>
            <Box>
              <Typography sx={{ color: '#8aadca', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: 0.8 }}>Break-Even Target</Typography>
              <Typography sx={{ fontWeight: 900, fontSize: '1.8rem', color: '#ffd3dc' }}>Month 22</Typography>
            </Box>
          </Paper>
        </Reveal>
      </Section>

      {/* ── COMPETITIVE LANDSCAPE ──────────────────────────────────────────── */}
      <Section id="competition">
        <SectionHeading
          label="05 · Competitive Landscape"
          title="No One Is Building This"
          sub="Existing players are either app-only or run low-infrastructure romance tours. No competitor is building a physical city. That is the moat."
        />
        <Stack spacing={2.5}>
          {pitchCompetitors.map((c, i) => (
            <Reveal key={c.name} delay={i * 55}>
              <Paper elevation={0} sx={{
                p: { xs: 2.5, md: 3 }, borderRadius: 3,
                background: c.highlight ? 'linear-gradient(135deg, rgba(255,204,77,0.1), rgba(35,240,255,0.07))' : 'rgba(14,6,24,0.85)',
                border: c.highlight ? '1.5px solid rgba(255,204,77,0.6)' : '1px solid rgba(255,255,255,0.08)',
              }}>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '200px 1fr 1fr 1fr' }, gap: 2.5, alignItems: 'start' }}>
                  {/* Identity */}
                  <Box>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 0.5 }}>
                      <Typography sx={{ fontWeight: 900, color: c.color, fontSize: '1rem' }}>{c.name}</Typography>
                      {c.highlight && <Chip label="US" size="small" sx={{ bgcolor: 'rgba(255,204,77,0.2)', color: '#ffe9af', fontWeight: 800, fontSize: '0.7rem', height: 18 }} />}
                    </Stack>
                    <Typography sx={{ color: '#6a8ea5', fontSize: '0.78rem' }}>{c.type}</Typography>
                    <Typography sx={{ color: '#6a8ea5', fontSize: '0.78rem' }}>Est. {c.founded}</Typography>
                    <Typography sx={{ color: '#9fc7de', fontSize: '0.82rem', fontWeight: 700, mt: 0.5 }}>{c.revenue}</Typography>
                  </Box>

                  {/* Pros */}
                  <Box>
                    <Typography sx={{ color: '#4caf50', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.7, mb: 0.8 }}>Strengths</Typography>
                    <Stack spacing={0.5}>
                      {c.pros.map((p) => (
                        <Typography key={p} sx={{ color: '#bcd3e2', fontSize: '0.83rem', display: 'flex', gap: 0.8 }}>
                          <Box component="span" sx={{ color: '#4caf50' }}>✓</Box> {p}
                        </Typography>
                      ))}
                    </Stack>
                  </Box>

                  {/* Cons */}
                  <Box>
                    <Typography sx={{ color: '#ff6b6b', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.7, mb: 0.8 }}>Gaps</Typography>
                    <Stack spacing={0.5}>
                      {c.cons.map((con) => (
                        <Typography key={con} sx={{ color: '#bcd3e2', fontSize: '0.83rem', display: 'flex', gap: 0.8 }}>
                          <Box component="span" sx={{ color: '#ff6b6b' }}>✗</Box> {con}
                        </Typography>
                      ))}
                    </Stack>
                  </Box>

                  {/* Moat */}
                  <Box>
                    <Typography sx={{ color: '#ffe9af', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.7, mb: 0.8 }}>Competitive Moat</Typography>
                    <Typography sx={{ color: c.highlight ? '#ffe9af' : '#9fc7de', fontSize: '0.85rem', fontWeight: c.highlight ? 800 : 400, lineHeight: 1.5 }}>{c.moat}</Typography>
                  </Box>
                </Box>
              </Paper>
            </Reveal>
          ))}
        </Stack>
      </Section>

      {/* ── TRACTION ───────────────────────────────────────────────────────── */}
      <Section id="traction">
        <SectionHeading
          label="06 · Traction"
          title="What's Already Built"
          sub="The concept is fully designed. The frameworks are drafted. The partnerships are ready to execute."
        />
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 2 }}>
          {pitchTraction.map((t, i) => (
            <Reveal key={t.label} delay={i * 60}>
              <Paper elevation={0} sx={{
                p: 2.5, borderRadius: 2.5, height: '100%',
                background: 'rgba(14,6,24,0.85)',
                border: '1px solid rgba(35,240,255,0.2)',
              }}>
                <Typography sx={{ fontSize: '1.6rem', mb: 1 }}>{t.icon}</Typography>
                <Typography sx={{ fontWeight: 800, color: '#b3f0ff', fontSize: '0.9rem', mb: 0.5 }}>{t.label}</Typography>
                <Typography sx={{ color: '#7a9ab5', fontSize: '0.83rem', lineHeight: 1.6 }}>{t.detail}</Typography>
              </Paper>
            </Reveal>
          ))}
        </Box>
      </Section>

      {/* ── THE ASK ────────────────────────────────────────────────────────── */}
      <Section id="the-ask">
        <SectionHeading
          label="07 · The Ask"
          title={`Raising ${pitchAsk.amount} — ${pitchAsk.round}`}
          sub={`Pre-money valuation: ${pitchAsk.valuation}. Use of funds broken down below.`}
        />
        <Stack spacing={2}>
          {pitchAsk.use.map((u, i) => (
            <Reveal key={u.label} delay={i * 55}>
              <Paper elevation={0} sx={{
                p: 2.5, borderRadius: 2.5,
                background: 'rgba(14,6,24,0.85)',
                border: '1px solid rgba(255,77,109,0.2)',
              }}>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 90px 1fr' }, gap: 2, alignItems: 'center' }}>
                  <Box>
                    <Typography sx={{ fontWeight: 800, color: '#ffd3dc', mb: 0.4 }}>{u.label}</Typography>
                    <Typography sx={{ color: '#7a9ab5', fontSize: '0.83rem', lineHeight: 1.6 }}>{u.detail}</Typography>
                  </Box>
                  <Box sx={{ textAlign: { md: 'center' } }}>
                    <Typography sx={{ fontWeight: 900, color: '#ffe9af', fontSize: '1.2rem' }}>{u.amount}</Typography>
                    <Typography sx={{ color: '#6a8ea5', fontSize: '0.78rem' }}>{u.pct}% of raise</Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={u.pct}
                    sx={{
                      height: 8, borderRadius: 4,
                      bgcolor: 'rgba(255,255,255,0.06)',
                      '& .MuiLinearProgress-bar': { bgcolor: '#ff6b6b', borderRadius: 4 },
                    }}
                  />
                </Box>
              </Paper>
            </Reveal>
          ))}
        </Stack>
      </Section>

      {/* ── TEAM ───────────────────────────────────────────────────────────── */}
      <Section id="team">
        <SectionHeading
          label="08 · Team"
          title="Building the Team"
          sub="Core leadership roles being filled now. Founding team bios available on request."
        />
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 2 }}>
          {pitchTeamPlaceholders.map((t, i) => (
            <Reveal key={t.role} delay={i * 55}>
              <Paper elevation={0} sx={{
                p: 3, borderRadius: 2.5, textAlign: 'center',
                background: 'rgba(14,6,24,0.85)',
                border: '1px solid rgba(255,107,107,0.2)',
              }}>
                <Box sx={{
                  width: 56, height: 56, borderRadius: '50%', mx: 'auto', mb: 1.5,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  bgcolor: 'rgba(255,77,109,0.12)', border: '1px solid rgba(255,77,109,0.35)',
                }}>
                  <Typography sx={{ fontWeight: 800, color: '#ffd3dc', fontSize: '0.82rem' }}>{t.initials}</Typography>
                </Box>
                <Typography sx={{ fontWeight: 800, color: '#ffe9af', mb: 0.4 }}>{t.role}</Typography>
                <Typography sx={{ color: '#7a9ab5', fontSize: '0.82rem', lineHeight: 1.55 }}>{t.focus}</Typography>
              </Paper>
            </Reveal>
          ))}
        </Box>
      </Section>

      {/* ── OPPORTUNITIES ──────────────────────────────────────────────────── */}
      <Section id="opportunities">
        <SectionHeading
          label="09 · Market Timing"
          title="Why Now — Four Structural Tailwinds"
          sub="The window for this concept is open. Each of these factors is new, real, and compounding."
        />
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 2.5 }}>
          {pitchOpportunities.map((o, i) => (
            <Reveal key={o.title} delay={i * 70}>
              <Paper elevation={0} sx={{
                p: 3, borderRadius: 3, height: '100%',
                background: 'rgba(14,6,24,0.85)',
                border: '1px solid rgba(76,175,80,0.3)',
              }}>
                <Typography sx={{ fontSize: '2rem', mb: 1.2 }}>{o.icon}</Typography>
                <Typography sx={{ fontWeight: 800, color: '#4caf50', mb: 0.8 }}>{o.title}</Typography>
                <Typography sx={{ color: '#bcd3e2', fontSize: '0.9rem', lineHeight: 1.72, mb: 1.5 }}>{o.detail}</Typography>
                <Typography sx={{ color: '#5a7a8a', fontSize: '0.76rem', fontStyle: 'italic' }}>Sources: {o.source}</Typography>
              </Paper>
            </Reveal>
          ))}
        </Box>
      </Section>

      {/* ── RISKS & MITIGATIONS ────────────────────────────────────────────── */}
      <Section id="risks">
        <SectionHeading
          label="10 · Risks & Mitigations"
          title="We Know The Risks. Here's How We Address Them."
          sub="Honest disclosure is a competitive advantage in this industry. Every risk below has a documented mitigation strategy."
        />
        <Stack spacing={2.5}>
          {pitchRisks.map((r, i) => (
            <Reveal key={r.risk} delay={i * 60}>
              <Paper elevation={0} sx={{
                p: 3, borderRadius: 3,
                background: 'rgba(14,6,24,0.85)',
                border: `1px solid ${r.color}44`,
              }}>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
                  <Box>
                    <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
                      <Chip
                        label={r.severity}
                        size="small"
                        sx={{ bgcolor: `${r.color}22`, color: r.color, border: `1px solid ${r.color}55`, fontWeight: 800, fontSize: '0.72rem' }}
                      />
                      <Typography sx={{ fontWeight: 800, color: r.color }}>{r.risk}</Typography>
                    </Stack>
                    <Typography sx={{ color: '#bcd3e2', fontSize: '0.88rem', lineHeight: 1.7, mb: 1 }}>{r.detail}</Typography>
                    <Typography sx={{ color: '#5a7a8a', fontSize: '0.74rem', fontStyle: 'italic' }}>Sources: {r.source}</Typography>
                  </Box>
                  <Box sx={{ borderLeft: { md: `1px solid ${r.color}33` }, pl: { md: 3 } }}>
                    <Typography sx={{ color: '#4caf50', fontWeight: 700, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: 0.8, mb: 1 }}>Mitigation Strategy</Typography>
                    <Typography sx={{ color: '#c8dce9', fontSize: '0.88rem', lineHeight: 1.7 }}>{r.mitigation}</Typography>
                  </Box>
                </Box>
              </Paper>
            </Reveal>
          ))}
        </Stack>
      </Section>

      {/* ── COMPETITOR DEEP DIVE ───────────────────────────────────────────── */}
      <Section id="competitor-detail">
        <SectionHeading
          label="11 · Competitive Intelligence"
          title="The Industry In Detail"
          sub="A company-by-company breakdown of the market landscape, with sources. There is no physical city competitor anywhere in the world."
        />
        <Stack spacing={2}>
          {pitchCompetitorDetail.map((c, i) => (
            <Reveal key={c.name} delay={i * 50}>
              <Paper elevation={0} sx={{
                p: 3, borderRadius: 3,
                background: 'rgba(14,6,24,0.85)',
                border: `1px solid ${c.color}33`,
              }}>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '220px 1fr' }, gap: 3 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 900, color: c.color, fontSize: '1rem', mb: 0.3 }}>{c.name}</Typography>
                    <Typography sx={{ color: '#6a8ea5', fontSize: '0.78rem' }}>Est. {c.founded} · {c.hq}</Typography>
                    <Typography sx={{ color: '#ffe9af', fontWeight: 700, fontSize: '0.88rem', mt: 0.8 }}>{c.revenue}</Typography>
                    <Chip
                      label={c.threat.includes('Low') ? `Threat: ${c.threat}` : `Threat: ${c.threat}`}
                      size="small"
                      sx={{
                        mt: 1,
                        bgcolor: c.threat.includes('Low') ? 'rgba(76,175,80,0.15)' : c.threat.includes('Medium') ? 'rgba(255,152,0,0.15)' : 'rgba(255,107,107,0.15)',
                        color: c.threat.includes('Low') ? '#4caf50' : c.threat.includes('Medium') ? '#ff9800' : '#ff6b6b',
                        border: '1px solid currentColor',
                        fontWeight: 700, fontSize: '0.7rem',
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#7a9ab5', fontSize: '0.82rem', lineHeight: 1.65, mb: 1.5 }}>{c.model}</Typography>
                    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5, mb: 1.5 }}>
                      <Box>
                        <Typography sx={{ color: '#4caf50', fontSize: '0.74rem', fontWeight: 700, textTransform: 'uppercase', mb: 0.5 }}>Strengths</Typography>
                        <Typography sx={{ color: '#bcd3e2', fontSize: '0.82rem', lineHeight: 1.6 }}>{c.strengths}</Typography>
                      </Box>
                      <Box>
                        <Typography sx={{ color: '#ff6b6b', fontSize: '0.74rem', fontWeight: 700, textTransform: 'uppercase', mb: 0.5 }}>Weaknesses</Typography>
                        <Typography sx={{ color: '#bcd3e2', fontSize: '0.82rem', lineHeight: 1.6 }}>{c.weaknesses}</Typography>
                      </Box>
                    </Box>
                    <Typography sx={{ color: '#5a7a8a', fontSize: '0.73rem', fontStyle: 'italic' }}>Sources: {c.source}</Typography>
                  </Box>
                </Box>
              </Paper>
            </Reveal>
          ))}
        </Stack>

        {/* Sources note */}
        <Reveal>
          <Paper elevation={0} sx={{
            mt: 4, p: 3, borderRadius: 3,
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}>
            <Typography sx={{ fontWeight: 700, color: '#7a9ab5', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: 0.8, mb: 1.5 }}>Research Sources & Methodology</Typography>
            <Typography sx={{ color: '#5a7a8a', fontSize: '0.8rem', lineHeight: 1.8 }}>
              Market research compiled March 2026. All market figures are best estimates derived from: <strong style={{color:'#7a9ab5'}}>Match Group 10-K (2024)</strong> · <strong style={{color:'#7a9ab5'}}>Bumble Inc. annual report (2024)</strong> · <strong style={{color:'#7a9ab5'}}>US State Dept. visa statistics (2023)</strong> · <strong style={{color:'#7a9ab5'}}>Eurostat international marriage data (2022)</strong> · <strong style={{color:'#7a9ab5'}}>Grand View Research online dating report (2024)</strong> · <strong style={{color:'#7a9ab5'}}>Allied Market Research destination wedding report (2024)</strong> · <strong style={{color:'#7a9ab5'}}>A Foreign Affair company data</strong> · <strong style={{color:'#7a9ab5'}}>Human Rights Watch Uganda report (2023)</strong> · <strong style={{color:'#7a9ab5'}}>World Bank Uganda statement (May 2023)</strong> · <strong style={{color:'#7a9ab5'}}>Tatu City Kenya public filings</strong> · <strong style={{color:'#7a9ab5'}}>African Development Bank project database</strong> · <strong style={{color:'#7a9ab5'}}>IOM migration statistics (2023)</strong>. All figures should be independently verified before inclusion in formal investor materials.
            </Typography>
          </Paper>
        </Reveal>
      </Section>

      {/* ── CLOSING CTA ────────────────────────────────────────────────────── */}
      <Reveal>
        <Paper elevation={0} sx={{
          p: { xs: 4, md: 6 }, borderRadius: 4, textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(255,77,109,0.12), rgba(255,204,77,0.1), rgba(35,240,255,0.08))',
          border: '1px solid rgba(255,204,77,0.5)',
        }}>
          <Typography variant="h4" sx={{ fontWeight: 900, mb: 1.5 }}>
            The world has dating apps. It has romance tours. It does not have a city.
          </Typography>
          <Typography sx={{ color: '#9fc7de', maxWidth: 640, mx: 'auto', lineHeight: 1.85, mb: 3.5, fontSize: '1rem' }}>
            Happily Ever After City is not a hotel package or a matchmaking service. It is infrastructure —
            the physical layer that the entire international marriage industry is missing. We are raising to
            build it. We are raising to own that category permanently.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} justifyContent="center">
            {['📩 Request Full Deck', '📅 Schedule a Meeting', '📋 Download Executive Summary'].map((label) => (
              <Chip
                key={label}
                label={label}
                sx={{
                  bgcolor: 'rgba(255,204,77,0.12)', color: '#ffe9af',
                  border: '1px solid rgba(255,204,77,0.4)', fontWeight: 700,
                  fontSize: '0.88rem', py: 2, px: 1, cursor: 'pointer',
                  '&:hover': { bgcolor: 'rgba(255,204,77,0.2)' },
                }}
              />
            ))}
          </Stack>
        </Paper>
      </Reveal>

    </Box>
  )
}
