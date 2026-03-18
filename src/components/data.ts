export const partnerTiers = [
  {
    tier: 'Venue Partner',
    color: '#ffe9af',
    border: 'rgba(255,204,77,0.5)',
    items: ['List venues on the city grid', 'Nightly guest routing dashboard', 'Safety monitoring tools'],
  },
  {
    tier: 'Introduction Agency',
    color: '#ffd3dc',
    border: 'rgba(255,77,109,0.5)',
    badge: 'IMBRA-compliant',
    items: [
      'Licensed international marriage introduction brokers',
      'Issue curated guest profiles and meeting packages',
      'Client lead tracking, follow-up tools & analytics',
    ],
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

export const datingApps = [
  {
    name: 'Tinder',
    color: '#ff6b6b',
    border: 'rgba(255,107,107,0.45)',
    tagline: 'The world\'s largest match engine — zero physical infrastructure',
    opportunity: 'Tinder Passport already lets users match across borders. The city becomes the destination they actually travel to. A "Tinder City Week" package converts passive swipers into paying travellers.',
    integrations: [
      'Branded mixer nights on the Global Mixer Circuit',
      'Tinder Passport + city arrival = automatic venue unlock',
      'Premium subscription perk: priority city event access',
      'First-party data on what happens after the match',
    ],
  },
  {
    name: 'Hinge',
    color: '#e8505b',
    border: 'rgba(232,80,91,0.45)',
    tagline: 'Designed to be deleted — but first, the first date needs to happen',
    opportunity: 'Hinge\'s entire brand is "relationships, not hookups." The city is the most relationship-forward environment on earth. Co-branded "Hinge Serious Meet" packages sell directly to their most-committed users.',
    integrations: [
      'Hinge-curated date routes on the Romance Mile',
      'Relationship stage tracking integrated with the city pipeline',
      'In-app city booking for matched users in separate countries',
      'Hinge Rose redemption for premium city experiences',
    ],
  },
  {
    name: 'Bumble',
    color: '#ffc629',
    border: 'rgba(255,198,41,0.45)',
    tagline: 'Women make the first move — the city keeps it that way',
    opportunity: 'Bumble\'s safety-first, women-first positioning is a natural fit. The city\'s consent infrastructure and opt-out enforcement mirrors Bumble\'s values exactly. A Bumble co-branded zone on the strip is a marketing story that writes itself.',
    integrations: [
      'Bumble-branded safe social zones with women-first entry protocols',
      'BFF and Bizz modes — cultural exchange and networking events',
      'Bumble Premium perk: complimentary city orientation concierge',
      'Joint anti-harassment training for all city venue staff',
    ],
  },
  {
    name: 'Grindr / Scruff',
    color: '#ff6b6b',
    border: 'rgba(255,204,77,0.45)',
    rainbow: true,
    tagline: 'Global LGBTQ+ community seeking safe international spaces',
    opportunity: 'Uganda\'s current legal climate is a challenge — but international governance makes the city a protected zone. A formally designated LGBTQ+-safe district within city boundaries, backed by embassy oversight, becomes a landmark for the community.',
    integrations: [
      'Designated safe district with embassy-backed protections',
      'Grindr-partnered events under international consular protection',
      'In-app "City Safe Zone" badge for verified city venues',
      'Legal support on-demand through the Justice Wing',
    ],
  },
  {
    name: 'Match Group (Portfolio)',
    color: '#00a8e0',
    border: 'rgba(0,168,224,0.45)',
    tagline: 'Match, OkCupid, Meetic, Pairs — one B2B deal, 40+ brands',
    opportunity: 'Match Group owns the world\'s largest portfolio of dating platforms. A single enterprise B2B agreement gives all their brands access to city infrastructure, event programming, and the international pipeline — one contract, continental reach.',
    integrations: [
      'Enterprise API integration across all Match Group platforms',
      'Co-branded events segmented by app audience and culture',
      'Shared user verification layer — one city profile across apps',
      'Revenue share on all bookings originating from any Match Group app',
    ],
  },
  {
    name: 'eHarmony / EliteSingles',
    color: '#b3f0ff',
    border: 'rgba(35,240,255,0.45)',
    tagline: 'Compatibility-matched users ready to commit — they just need a place to meet',
    opportunity: 'Long-form compatibility platforms attract users who are serious about marriage. These users are the city\'s highest-value guests. A co-branded "eHarmony Destination" package sells the city as the natural next step after a deep algorithmic match.',
    integrations: [
      'Compatibility profile integration with city journey stage tracking',
      'Concierge-facilitated first meetings for matched long-distance users',
      'Wedding and proposal packages co-marketed through the platform',
      'Post-visit relationship outcome data shared back to improve matching',
    ],
  },
]

export const appPartnerValue = [
  {
    icon: '📊',
    title: 'The Match-to-Meeting Problem',
    description: 'Across all major apps, fewer than 5% of matches result in an in-person meeting. The city is a purpose-built conversion engine for the other 95%.',
  },
  {
    icon: '✈️',
    title: 'Travel Intent Is Already There',
    description: 'Dating apps see massive spikes in international swiping before travel. The city gives apps a destination to sell — not just a match to make.',
  },
  {
    icon: '🔒',
    title: 'Safety Infrastructure Apps Can\'t Build Alone',
    description: 'Every app wants safer real-world meetings. The city provides verified venues, consent protocols, and emergency response that no app can replicate in-house.',
  },
  {
    icon: '💰',
    title: 'A New Premium Revenue Stream',
    description: 'City packages become a premium monetisation layer — above subscriptions, above boosts. A $500 city experience package has far higher margins than a $30/month subscription.',
  },
  {
    icon: '📍',
    title: 'First-Party Data on Real-World Outcomes',
    description: 'Apps are blind once users leave the screen. The city closes the loop — providing outcome data on which matches converted, at which stage, and why.',
  },
  {
    icon: '🌍',
    title: 'International Matching Finally Has a Home',
    description: 'Apps show international matches but have no infrastructure to support them meeting. The city is the missing piece of the international dating supply chain.',
  },
]

export const embassyRoles = [
  {
    icon: '🇺🇸',
    country: 'United States',
    role: 'K-1 & CR-1 Visa Processing',
    detail: 'US Embassy Kampala reviews fiancé and spousal visa petitions. All introduction agencies must meet IMBRA disclosure requirements before a US client can proceed.',
  },
  {
    icon: '🇬🇧',
    country: 'United Kingdom',
    role: 'Settlement Visa & Marriage Registration',
    detail: 'UKVI-accredited marriage registration support. British nationals receive consular briefings on rights, obligations, and fraud red flags before any formal introduction.',
  },
  {
    icon: '🇪🇺',
    country: 'European Union',
    role: 'EU Family Reunification & Recognition',
    detail: 'EU member-state consulates facilitate marriage recognition under Brussels IIa regulation and provide independent legal referral for binational couples.',
  },
  {
    icon: '🇦🇺',
    country: 'Australia',
    role: 'Prospective Marriage Visa (Subclass 300)',
    detail: 'Australian High Commission provides pre-departure orientation and monitors introduction agencies for compliance with Australian immigration integrity standards.',
  },
  {
    icon: '🇨🇦',
    country: 'Canada',
    role: 'Spousal Sponsorship & PR Pathways',
    detail: 'IRCC-aligned documentation support and consular interviews. Canadian nationals are advised of sponsor obligations and anti-fraud screening requirements.',
  },
  {
    icon: '🌐',
    country: 'Other Nations',
    role: 'Bilateral Agreement Framework',
    detail: 'The city maintains a bilateral MOU template ratified with 30+ countries, covering marriage recognition, visa facilitation, and consular access rights.',
  },
]

export const oversightBodies = [
  {
    icon: '🏛️',
    name: 'UN Special Rapporteur on Trafficking',
    function: 'Annual audit of city operations, incident reporting, and anti-trafficking safeguard effectiveness.',
  },
  {
    icon: '🌍',
    name: 'African Union — Human Rights Commission',
    function: 'Regional oversight on participant rights, consent standards, and cross-border enforcement coordination.',
  },
  {
    icon: '🔵',
    name: 'International Organization for Migration (IOM)',
    function: 'Monitors migration pathways, flags irregular movement patterns, and provides victim support infrastructure.',
  },
  {
    icon: '⚖️',
    name: 'Hague Conference on Private International Law',
    function: 'Ensures marriage contracts and dissolution proceedings are recognised across signatory states.',
  },
  {
    icon: '🔍',
    name: 'Independent Third-Party Auditor',
    function: 'Quarterly financial, operational, and compliance audit by a non-Ugandan firm. Reports published publicly.',
  },
  {
    icon: '🚔',
    name: 'INTERPOL Liaison Office',
    function: 'On-site liaison for real-time fraud screening, fugitive checks, and cross-border incident escalation.',
  },
]

export const corruptionSafeguards = [
  {
    title: 'Escrow-Held Operating Funds',
    description: 'All partner revenue is held in an internationally domiciled escrow account — not accessible by Ugandan authorities without a court order from the partner\'s home country.',
  },
  {
    title: 'Non-Ugandan Arbitration Clause',
    description: 'All partner contracts specify arbitration under ICC rules in a neutral jurisdiction (London or Singapore). Ugandan courts have no unilateral jurisdiction over partner disputes.',
  },
  {
    title: 'Dual-Key Incident Reporting',
    description: 'Every serious incident is logged simultaneously to the city\'s internal system AND an international oversight body. No single Ugandan authority can suppress a report.',
  },
  {
    title: 'Embassy Hotline Access',
    description: 'Every foreign national has a direct, city-funded hotline to their home embassy — available 24/7 from any venue on the strip, independent of city staff.',
  },
  {
    title: 'Transparent Fee Registry',
    description: 'All agency fees, venue charges, and service costs are published in a public registry audited quarterly. No undisclosed payments to officials are possible without detection.',
  },
  {
    title: 'Staff Whistleblower Protection',
    description: 'City staff can report corruption via an encrypted channel to an international ombudsman. Whistleblowers receive legal protection and relocation support if needed.',
  },
]

export const complianceItems = [
  { icon: '📜', text: 'Introduction agencies must hold valid business registration and IMBRA-equivalent licensing' },
  { icon: '🛡️', text: 'Mandatory identity verification and fraud screening for all guests and operators' },
  { icon: '⚖️', text: 'Free independent legal support available to every participant on request' },
  { icon: '📡', text: '24 / 7 safety monitoring, secure zones, and emergency response across all venues' },
  { icon: '🔒', text: 'Immediate opt-out rights with city-level no-contact enforcement' },
  { icon: '📋', text: 'Agency fees cover introduction services only — no person is a product or price' },
]
