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

export const entryExitProtocols = [
  {
    icon: '🪪',
    title: 'Biometric Entry Registration',
    detail: 'Every person entering the city — guest, operator, or staff — registers biometrics at the gate. No anonymous entry. Every arrival is time-stamped and logged with an international observer present.',
  },
  {
    icon: '🤝',
    title: 'Dual-Authority Entry Clearance',
    detail: 'Entry is cleared jointly by city security and the arriving guest\'s home embassy contact. No single authority can grant or deny entry unilaterally.',
  },
  {
    icon: '🚪',
    title: 'Voluntary Exit Protocol',
    detail: 'Any guest can trigger a safe exit at any time from any venue — no reason required. Exit is escorted, documented, and reported to their home embassy within the hour.',
  },
  {
    icon: '🚫',
    title: 'No Forced Departure',
    detail: 'No agency, partner, or Ugandan authority can remove a guest from the city without the guest\'s signed consent AND sign-off from their home embassy consular officer.',
  },
  {
    icon: '📋',
    title: 'Departure Welfare Check',
    detail: 'Every exit triggers an independent welfare check — a brief one-on-one with a city welfare officer before the guest passes through the gate. Flagged concerns halt departure and escalate immediately.',
  },
  {
    icon: '🔴',
    title: 'Permanent Entry Blacklist',
    detail: 'Anyone banned for coercion, fraud, or abuse is biometrically flagged and permanently barred from re-entry. The blacklist is shared with partner embassies and INTERPOL.',
  },
  {
    icon: '📡',
    title: 'Real-Time Movement Registry',
    detail: 'All in-city movement between districts is logged. Unusual patterns — a guest not seen for 12+ hours, repeated venue access by the same operator — trigger automatic welfare checks.',
  },
  {
    icon: '🌐',
    title: 'International Observer Presence',
    detail: 'An IOM-appointed international observer is stationed at the entry and exit gate 24/7. Their log is independent of city management and cannot be altered or suppressed.',
  },
]

export const partnerAirlines = [
  {
    name: 'Emirates',
    hub: 'Dubai (DXB)',
    icon: '🇦🇪',
    color: '#d4af37',
    border: 'rgba(212,175,55,0.45)',
    routes: ['Daily non-stop Dubai → Entebbe', 'Connects 130+ cities via DXB', 'Premium cabin city packages available'],
    note: 'Best gateway from the Americas, South Asia, and Far East.',
  },
  {
    name: 'Ethiopian Airlines',
    hub: 'Addis Ababa (ADD)',
    icon: '🇪🇹',
    color: '#4caf50',
    border: 'rgba(76,175,80,0.45)',
    routes: ['Multiple daily ADD → Entebbe flights', 'Widest African network — 60+ African cities', 'Codeshare with Lufthansa, United, Air China'],
    note: 'Best gateway from across Africa and China.',
  },
  {
    name: 'Kenya Airways',
    hub: 'Nairobi (NBO)',
    icon: '🇰🇪',
    color: '#c0392b',
    border: 'rgba(192,57,43,0.45)',
    routes: ['Multiple daily NBO → Entebbe', 'Direct from London Heathrow via Nairobi', 'East Africa regional network'],
    note: 'Fastest connection from the UK and East Africa.',
  },
  {
    name: 'Qatar Airways',
    hub: 'Doha (DOH)',
    icon: '🇶🇦',
    color: '#8e0029',
    border: 'rgba(142,0,41,0.45)',
    routes: ['Daily Doha → Entebbe', 'Connects Europe, Americas, and Asia via DOH', 'Business class lounge partnership with city'],
    note: 'Premium travellers\' preferred route from Europe and the Middle East.',
  },
  {
    name: 'Turkish Airlines',
    hub: 'Istanbul (IST)',
    icon: '🇹🇷',
    color: '#e74c3c',
    border: 'rgba(231,76,60,0.45)',
    routes: ['Istanbul → Entebbe 4x weekly', 'Flies to more countries than any airline', 'Connecting Europe, Central Asia, Americas'],
    note: 'Unbeatable for Eastern European and Central Asian guests.',
  },
  {
    name: 'KLM / Brussels Airlines',
    hub: 'Amsterdam (AMS) / Brussels (BRU)',
    icon: '🇪🇺',
    color: '#00a0e2',
    border: 'rgba(0,160,226,0.45)',
    routes: ['Direct Amsterdam → Entebbe 3x weekly', 'Brussels → Entebbe 4x weekly', 'SkyTeam network access — 170+ countries'],
    note: 'Primary route for Western and Central European guests.',
  },
  {
    name: 'RwandAir',
    hub: 'Kigali (KGL)',
    icon: '🇷🇼',
    color: '#20b2aa',
    border: 'rgba(32,178,170,0.45)',
    routes: ['Daily Kigali → Entebbe (55 min)', 'Regional East & Central Africa network', 'Budget-friendly short-haul option'],
    note: 'Shortest hop in the region — ideal for guests from Central Africa.',
  },
  {
    name: 'British Airways',
    hub: 'London Heathrow (LHR)',
    icon: '🇬🇧',
    color: '#003580',
    border: 'rgba(0,53,128,0.45)',
    routes: ['London → Entebbe via Nairobi', 'Business and First class city packages', 'Avios points redeemable on city stays'],
    note: 'Primary UK and Commonwealth route.',
  },
]

export const connectingHubs = [
  { hub: 'Dubai (DXB)', flag: '🇦🇪', reach: 'Americas, South Asia, Far East', avgLayover: '2–4 hrs' },
  { hub: 'Addis Ababa (ADD)', flag: '🇪🇹', reach: 'All of Africa, China, India', avgLayover: '1–3 hrs' },
  { hub: 'Nairobi (NBO)', flag: '🇰🇪', reach: 'UK, East & Southern Africa', avgLayover: '1–2 hrs' },
  { hub: 'Doha (DOH)', flag: '🇶🇦', reach: 'Europe, Americas, SE Asia', avgLayover: '2–5 hrs' },
  { hub: 'Istanbul (IST)', flag: '🇹🇷', reach: 'Europe, Central Asia, Americas', avgLayover: '2–4 hrs' },
  { hub: 'Amsterdam (AMS)', flag: '🇳🇱', reach: 'Western Europe, North America', avgLayover: '1–3 hrs' },
]

export const visaInfo = [
  { region: 'East African Community', flag: '🌍', policy: 'Visa-free entry', detail: 'Kenya, Tanzania, Rwanda, Burundi, South Sudan — no visa required.' },
  { region: 'Most African Nations', flag: '🌍', policy: 'Visa on Arrival', detail: 'Available at Entebbe Airport. $50 USD single entry, valid 30 days.' },
  { region: 'USA, UK, EU, Canada, Australia', flag: '🌐', policy: 'e-Visa (online)', detail: 'Apply at visas.immigration.go.ug. Processed in 48–72 hrs. $50 single / $100 multi-entry.' },
  { region: 'China, India, UAE', flag: '🌏', policy: 'e-Visa (online)', detail: 'Same online portal. City partner agencies can handle visa applications on behalf of clients.' },
]

export const travelBundles = [
  {
    name: 'Discovery Weekend',
    duration: '3 nights',
    color: '#ffe9af',
    border: 'rgba(255,204,77,0.45)',
    includes: ['Return economy airfare (hub of choice)', 'Airport transfer — Entebbe to the city', '3-night Suites District stay', 'Welcome mixer event + city orientation'],
  },
  {
    name: 'Connection Week',
    duration: '7 nights',
    color: '#ffd3dc',
    border: 'rgba(255,77,109,0.45)',
    includes: ['Return business-class airfare', 'Private airport transfer', '7-night premium suite', 'Full event access + Romance Mile package', 'Concierge & translation services'],
  },
  {
    name: 'Ever After Package',
    duration: '14 nights',
    color: '#b3f0ff',
    border: 'rgba(35,240,255,0.45)',
    includes: ['Return first-class or private charter', 'VIP arrival lounge at Entebbe', '14-night Sky Deck suite', 'All events + private dining + proposal planning', 'Legal & visa support for next steps'],
  },
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
  {
    name: 'Plenty of Fish (POF)',
    color: '#00bcd4',
    border: 'rgba(0,188,212,0.45)',
    tagline: '150M+ registered users — the world\'s most active free dating platform',
    opportunity: 'POF\'s massive free-tier user base includes millions of international intent users who cannot afford premium subscriptions but would pay for a high-value physical city experience. A "POF City Pass" converts free users into paying travellers — a monetisation breakthrough the platform has never achieved.',
    integrations: [
      'POF City Pass — exclusive city entry package for verified POF users',
      'International match alerts with city arrival package bundled',
      'In-app "Meet in Uganda" campaign driving conversion from free to paid',
      'Revenue share model on every city booking originating from POF',
    ],
  },
  {
    name: 'Zoosk',
    color: '#e91e8c',
    border: 'rgba(233,30,140,0.45)',
    tagline: '40M users across 80 countries — behavioural matchmaking at global scale',
    opportunity: 'Zoosk\'s SmartPick™ algorithm is built on behavioural signals — and the city generates the richest real-world behavioural dataset in the international match space. A Zoosk integration closes the loop between algorithmic prediction and physical outcome, making their matching engine genuinely smarter.',
    integrations: [
      'Zoosk SmartPick™ integration — city interaction data fed back to improve matching',
      'Behavioural profile enrichment from city venue activity',
      'Co-branded international event series on the Global Mixer Circuit',
      'In-app city booking for cross-border Zoosk matches',
    ],
  },
  {
    name: 'Muslima / SingleMuslim',
    color: '#4caf50',
    border: 'rgba(76,175,80,0.45)',
    tagline: 'The world\'s leading Islamic marriage platforms — halal matchmaking at scale',
    opportunity: 'Islamic marriage platforms serve a 1.8B+ Muslim global community with specific requirements around chaperoned meetings, mahr agreements, and family consent. The city\'s Arab Quarter and compliance architecture makes it the only internationally sanctioned venue that can host halal introductions — a market segment no competitor serves.',
    integrations: [
      'Halal introduction packages within the Arab Quarter cultural district',
      'Wali (guardian) accommodation and family-chaperoned meeting protocols',
      'Mahr documentation and Islamic marriage contract support',
      'Muslima-branded events under the city\'s international governance framework',
    ],
  },
  {
    name: 'Badoo',
    color: '#ff4f7b',
    border: 'rgba(255,79,123,0.45)',
    tagline: '500M+ registered users — the world\'s largest dating network by registration',
    opportunity: 'Badoo\'s vast emerging-market user base — strong in Africa, Latin America, and South/Southeast Asia — maps almost perfectly onto the city\'s target guest demographics. A Badoo city integration reaches markets that Tinder and Match Group have never fully penetrated.',
    integrations: [
      'Badoo-sponsored welcome events for African and Latin American guest cohorts',
      'City as Badoo\'s flagship live-meeting destination for emerging market users',
      'In-app city profile badge for verified city visitors',
      'Joint safety campaign — Badoo\'s anti-catfishing tools + city biometric entry',
    ],
  },
  {
    name: 'Coffee Meets Bagel',
    color: '#a0522d',
    border: 'rgba(160,82,45,0.45)',
    tagline: 'Quality over quantity — curated daily matches for intentional daters',
    opportunity: 'Coffee Meets Bagel\'s quality-focused, relationship-intent user base is among the most marriage-ready on any platform. Their users are the ideal city guest — thoughtful, committed, and seeking real-world connection. A CMB "Journey Package" sells directly to this high-LTV cohort.',
    integrations: [
      'CMB Journey Package — curated city itinerary for matched international pairs',
      'Bagel-of-the-Day city edition — daily curated introduction at city mixers',
      'Post-match city concierge service for long-distance CMB matches',
      'CMB relationship milestone tracking integrated with city journey pipeline',
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
    title: 'International Marriage Finally Has a Home',
    description: 'Apps show international matches but have no infrastructure to support them meeting. The city is the missing piece of the international marriage supply chain.',
  },
]

export const cultureTowns = [
  {
    name: 'China Town',
    flag: '🇨🇳',
    color: '#ff6b6b',
    border: 'rgba(255,107,107,0.45)',
    description: 'Lantern-lit courtyards, morning tai chi, Mandarin language cafés, and traditional hotpot dinners. Guided workshops on Chinese family structures, gift-giving customs, and the relationship expectations that define Chinese marriages.',
    experiences: ['Mandarin conversation café', 'Traditional tea ceremony', 'Family structure & expectations workshop', 'Chinese New Year festival quarter'],
  },
  {
    name: 'India Town',
    flag: '🇮🇳',
    color: '#ff9933',
    border: 'rgba(255,153,51,0.45)',
    description: 'Bollywood dance studios, fragrant spice markets, and open-hearted conversations about family hierarchy, evolving gender roles, and the diversity of Indian marriage traditions — from arranged introductions to love marriages.',
    experiences: ['Bollywood dance studio', 'Spice market & cooking classes', 'Cultural expectations seminar', 'Holi & Diwali celebration spaces'],
  },
  {
    name: 'Latin Quarter',
    flag: '🌎',
    color: '#ff8c42',
    border: 'rgba(255,140,66,0.45)',
    description: 'Salsa dancing, communal feasting, and the warmth of Latin American family culture. Candid sessions on loyalty, family hierarchy, machismo reform, and the passion and protectiveness that define Latin relationships.',
    experiences: ['Salsa & bachata dance studio', 'Family-style communal dining', 'Spanish language lounge', 'Wedding culture & quinceañera showcase'],
  },
  {
    name: 'Greek Town',
    flag: '🇬🇷',
    color: '#4a90d9',
    border: 'rgba(74,144,217,0.45)',
    description: 'Lively taverna evenings, traditional folk dancing, and the Mediterranean warmth of Greek family bonds. Sessions on Orthodox traditions, kefi (joy), and the close-knit community life that defines Greek partnerships.',
    experiences: ['Greek taverna & mezze dining', 'Traditional folk dance nights', 'Orthodox & cultural traditions seminar', 'Mediterranean lifestyle showcase'],
  },
  {
    name: 'Eastern European Quarter',
    flag: '🇵🇱',
    color: '#e8c84a',
    border: 'rgba(232,200,74,0.45)',
    description: 'Hearty communal meals, folk music, and strong family bonds. Honest conversations about gender roles, hospitality traditions, and the deep loyalty and directness that characterise Eastern European partnerships.',
    experiences: ['Traditional cuisine masterclasses', 'Folk music & dance evenings', 'Cultural values dialogue sessions', 'Winter festival experience space'],
  },
  {
    name: 'West African Quarter',
    flag: '🌍',
    color: '#4caf50',
    border: 'rgba(76,175,80,0.45)',
    description: 'Drumming circles, vibrant Ankara fashion markets, and the communal spirit of West African life. Guided sessions on extended family expectations, bride price traditions, and building modern relationships rooted in African values.',
    experiences: ['Drumming & dance workshops', 'Ankara fashion market', 'Bride price & tradition dialogue', 'Afrobeats social lounge'],
  },
  {
    name: 'Arab Quarter',
    flag: '🕌',
    color: '#c8a84b',
    border: 'rgba(200,168,75,0.45)',
    description: 'Fragrant coffee ceremonies, Arabic calligraphy, and the elegant hospitality of Arab culture. Open discussions on Islamic marriage law, mahr, family consent, and building cross-cultural relationships with dignity and respect.',
    experiences: ['Arabic coffee & hospitality ritual', 'Calligraphy & art workshops', 'Islamic marriage & mahr seminar', 'Oud music & culture evenings'],
  },
  {
    name: 'East Asian Fusion District',
    flag: '🇯🇵',
    color: '#e8a0d0',
    border: 'rgba(232,160,208,0.45)',
    description: 'Cherry blossom gardens, K-drama cafés, and immersive sessions on Japanese, Korean, and Southeast Asian culture. Explore filial piety, group harmony, and the nuanced communication styles that shape East Asian relationships.',
    experiences: ['Japanese garden & tea ceremony', 'K-drama & Korean cuisine café', 'Filial piety & family roles workshop', 'Asian night market & cultural fusion'],
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
