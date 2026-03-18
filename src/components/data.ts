export const partnerTiers = [
  {
    tier: 'Venue Partner',
    color: '#ffe9af',
    border: 'rgba(255,204,77,0.5)',
    items: ['List venues on the city grid', 'Nightly guest routing dashboard', 'Safety monitoring tools'],
  },
  {
    tier: 'Agency Operator',
    color: '#ffd3dc',
    border: 'rgba(255,77,109,0.5)',
    items: ['Onboard licensed agencies', 'Issue verified guest packages', 'Lead tracking & analytics'],
  },
  {
    tier: 'Service Provider',
    color: '#b3f0ff',
    border: 'rgba(35,240,255,0.5)',
    items: ['Legal, translation & medical', 'SLA-backed city-wide dispatch', 'Revenue share per booking'],
  },
]

export const journey = [
  {
    stage: '01', label: 'Stranger',      title: 'The Arrival Gate',      color: '#b3f0ff', border: 'rgba(35,240,255,0.45)',
    venue: 'Welcome & Verification Hub',
    description: 'Identity check, consent onboarding, and a guided orientation tour of the city.',
  },
  {
    stage: '02', label: 'First Meeting', title: 'The Mixer Lounges',     color: '#ffe9af', border: 'rgba(255,204,77,0.45)',
    venue: 'Global Mixer Circuit',
    description: 'Hosted small-group intros across language-matched lounges and rooftop icebreaker events.',
  },
  {
    stage: '03', label: 'Spark',         title: 'The Culture Quarter',   color: '#ffd3dc', border: 'rgba(255,77,109,0.45)',
    venue: 'Dance, Food & Experience Studios',
    description: 'Shared cooking classes, dance nights, and cultural tours — the city creates the context.',
  },
  {
    stage: '04', label: 'Dating',        title: 'The Romance Mile',      color: '#ffb3e6', border: 'rgba(255,100,200,0.45)',
    venue: 'Private Dining & Date Routes',
    description: 'Curated restaurant circuits, sunset cruises, and exclusive couple-facing venue packages.',
  },
  {
    stage: '05', label: 'Deepening',     title: 'The Suites District',   color: '#b3f0ff', border: 'rgba(35,240,255,0.45)',
    venue: 'Extended Stay & Counseling Hub',
    description: 'Long-stay accommodations, relationship concierge, live translation, and visa support.',
  },
  {
    stage: '06', label: 'Proposal',      title: 'The Sky Deck',          color: '#ffe9af', border: 'rgba(255,204,77,0.45)',
    venue: 'Rooftop Garden & Ring Service',
    description: 'Bespoke proposal planning, photographer concierge, drone light show, and ring curation.',
  },
  {
    stage: '07', label: 'Wedding',       title: 'The Grand Pavilion',    color: '#ffd3dc', border: 'rgba(255,77,109,0.45)',
    venue: 'Ceremony & Reception Hall',
    description: 'Full wedding packages — legal ceremony, cultural fusion options, and live entertainment.',
  },
  {
    stage: '08', label: 'Ever After',    title: 'The Honeymoon Villas',  color: '#ffb3e6', border: 'rgba(255,100,200,0.45)',
    venue: 'Luxury Suites & Travel Desk',
    description: 'Honeymoon stays, post-wedding travel packages, immigration support, and resettlement concierge.',
  },
]

export const dysfunctions = [
  { icon: '💬', title: 'Communication Breakdown', venue: 'The Dialogue Studio',  color: '#b3f0ff', border: 'rgba(35,240,255,0.4)',   description: 'Structured mediation sessions with trained facilitators. Language barrier support included.' },
  { icon: '🌍', title: 'Cultural Clash',           venue: 'The Bridge Center',    color: '#ffe9af', border: 'rgba(255,204,77,0.4)',   description: 'Cultural education, family expectation workshops, and dedicated cross-cultural advisors.' },
  { icon: '🤝', title: 'Trust & Conflict',         venue: 'The Mediation Suite',  color: '#ffd3dc', border: 'rgba(255,77,109,0.4)',   description: 'Licensed couples counseling, conflict resolution facilitation, and private session rooms.' },
  { icon: '🚨', title: 'Crisis Intervention',      venue: 'The Safe House',       color: '#ffb3e6', border: 'rgba(255,100,200,0.4)',  description: '24/7 emergency support, safe separation rooms, and immediate case escalation to authorities.' },
  { icon: '🧠', title: 'Mental Health & Wellness', venue: 'The Wellness Pavilion',color: '#b3f0ff', border: 'rgba(35,240,255,0.4)',   description: 'Individual therapy, group support programs, grief counseling, and self-care retreats.' },
  { icon: '⚖️', title: 'Legal & Separation',       venue: 'The Justice Wing',     color: '#ffe9af', border: 'rgba(255,204,77,0.4)',   description: 'Free legal aid, asset guidance, fair separation facilitation, and immigration re-routing.' },
]

export const schedule = [
  { time: '6:30 PM',  title: 'Sunset Arrival Show',  detail: 'Drone lights and skyline projection mapping.' },
  { time: '9:00 PM',  title: 'Global Mixer Circuit',  detail: 'Hosted intros across language-themed lounges.' },
  { time: '11:30 PM', title: 'Culture Showcase',      detail: 'Dance, fashion, and music from resident talent.' },
  { time: '12:30 AM', title: 'After-Hours Sky Deck',  detail: 'Live sets, panoramic views, private tables.' },
]

export const visitorFlow = [
  { step: '01', title: 'Verify & Join',       description: 'Identity check, biometric check-in, consent onboarding.' },
  { step: '02', title: 'Arrive & Explore',    description: 'Pick your circuit — rooftop, culture lounge, or boulevard.' },
  { step: '03', title: 'Connect With Intent', description: 'Mutual, opted-in. You pay for venues — never for people.' },
  { step: '04', title: 'Continue The Story',  description: 'Travel support, translation, and follow-up on demand.' },
]

export const complianceItems = [
  { icon: '🚫', text: 'Zero transactional human brokering' },
  { icon: '🛡️', text: 'Mandatory ID & fraud screening' },
  { icon: '⚖️', text: 'Free on-site legal support' },
  { icon: '📡', text: '24 / 7 safety monitoring & emergency response' },
  { icon: '🔒', text: 'Instant opt-out with city-level enforcement' },
  { icon: '📋', text: 'License suspension for any breach' },
]
