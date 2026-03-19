import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import JourneyPage from './pages/JourneyPage'
import PartnersPage from './pages/PartnersPage'
import VisitPage from './pages/VisitPage'
import GovernancePage from './pages/GovernancePage'
import FlightsPage from './pages/FlightsPage'
import CultureTownsPage from './pages/CultureTownsPage'
import PitchPage from './pages/PitchPage'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"               element={<Home />} />
        <Route path="/journey"        element={<JourneyPage />} />
        <Route path="/culture-towns"  element={<CultureTownsPage />} />
        <Route path="/partners"       element={<PartnersPage />} />
        <Route path="/visit"          element={<VisitPage />} />
        <Route path="/governance"     element={<GovernancePage />} />
        <Route path="/flights"        element={<FlightsPage />} />
        <Route path="/pitch"          element={<PitchPage />} />
      </Routes>
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
    </BrowserRouter>
  )
}
