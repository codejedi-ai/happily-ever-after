import React from 'react'
import { Box, Container, Stack } from '@mui/material'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import OperatorPitch from '../components/OperatorPitch'
import PartnerTiers from '../components/PartnerTiers'
import JourneyPipeline from '../components/JourneyPipeline'
import MutualAcknowledgment from '../components/MutualAcknowledgment'
import DysfunctionSupport from '../components/DysfunctionSupport'
import TonightSchedule from '../components/TonightSchedule'
import VisitorFlow from '../components/VisitorFlow'
import ComplianceSection from '../components/ComplianceSection'
import CTABanner from '../components/CTABanner'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <Box sx={{ minHeight: '100vh', color: '#ecf4ff', bgcolor: '#07101a' }}>
      <Navbar />
      <HeroSection />

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Stack spacing={8}>
          <OperatorPitch />
          <PartnerTiers />
          <JourneyPipeline />
          <MutualAcknowledgment />
          <DysfunctionSupport />
          <TonightSchedule />
          <VisitorFlow />
          <ComplianceSection />
          <CTABanner />
        </Stack>
      </Container>

      <Footer />

      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </Box>
  )
}
