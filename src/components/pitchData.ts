// ── Pitch Page Data ──────────────────────────────────────────────────────────

export const pitchProblems = [
  {
    icon: '💔',
    stat: '95%',
    label: 'of international matches never meet in person',
    color: '#ff6b6b',
    detail: 'Every dating app creates cross-border matches. None of them have the physical infrastructure to make those meetings safe, structured, or scalable.',
  },
  {
    icon: '✈️',
    stat: '$3–10K',
    label: 'average spend on one romance tour with zero infrastructure guarantee',
    color: '#ffe9af',
    detail: 'Romance tour companies charge premium prices but deliver hotel lobbies and bus transfers. There is no purpose-built physical venue for international romantic meeting.',
  },
  {
    icon: '⚠️',
    stat: '68%',
    label: 'of international couples cite cultural misunderstanding as primary conflict',
    color: '#ffb3e6',
    detail: 'The world has zero purpose-built cultural immersion infrastructure for couples navigating cross-cultural marriages. Conflict goes unaddressed until it becomes divorce.',
  },
]

export const pitchSolution = [
  { icon: '🏙️', title: 'The City', description: 'A purpose-built, internationally governed city district in Uganda — the first physical infrastructure dedicated entirely to international marriage introduction, cultural exchange, and relationship support.' },
  { icon: '🌍', title: 'Culture Towns', description: '8 permanent cultural simulation districts (Chinatown, India Town, Greek Town, Latin Quarter, and more) where couples live and experience each other\'s cultures before committing to a life together.' },
  { icon: '💍', title: 'Full Journey Infrastructure', description: 'From the first mixer to the wedding ceremony to honeymoon — every stage of the international marriage journey has a dedicated venue, service, and professional support team.' },
  { icon: '🛡️', title: 'Compliance-First Architecture', description: 'IMBRA-compliant introduction agencies, biometric entry, embassy co-governance, IOM oversight, and INTERPOL liaison — the safest international meeting infrastructure on earth.' },
]

export const pitchMarket = [
  {
    label: 'TAM',
    value: '$32.4B',
    sublabel: 'Total Addressable Market',
    color: '#b3f0ff',
    border: 'rgba(35,240,255,0.4)',
    breakdown: 'Global online dating $9.9B (Grand View Research, 2024) + destination wedding market $16.0B (Allied Market Research, 2024) + romance tour industry $500M–$1.5B (industry estimates) + international marriage services. CAGR 8.5–10.4% across segments.',
  },
  {
    label: 'SAM',
    value: '$900M',
    sublabel: 'Serviceable Addressable Market',
    color: '#ffe9af',
    border: 'rgba(255,204,77,0.4)',
    breakdown: 'US romance tourists: 25,000–50,000/yr × avg $8,000 = $200–$400M. European: 40,000–80,000/yr × $6,000 = $240–$480M. Australian/Canadian + Japanese: ~$150–$200M. Total serious international marriage seekers: $600M–$1.2B. (Sources: AFA estimates, industry surveys, OECD 2022)',
  },
  {
    label: 'SOM',
    value: '$60M',
    sublabel: 'Year 5 Serviceable Obtainable Market',
    color: '#ffd3dc',
    border: 'rgba(255,77,109,0.4)',
    breakdown: '5,000–10,000 verified visitors/year by Year 5 × $4,000–$12,000 blended ARPU = $20M–$100M. Midpoint target: $60M. Benchmarked against Sandals Resorts ($500M/yr, 24 properties) and Club Med village economics ($30–$80M per village build-out at 14–18% stabilised IRR).',
  },
]

export const pitchRevenue = [
  { stream: 'Venue & Event Tickets', model: 'Per-entry + package fees', year1: '$2.4M', year3: '$18M', icon: '🎟️', color: '#ffe9af' },
  { stream: 'Introduction Agency Licensing', model: 'Annual licence + per-booking rev share', year1: '$1.1M', year3: '$9M', icon: '🤝', color: '#ffd3dc' },
  { stream: 'Dating App Partnerships', model: 'Enterprise API + co-branded packages', year1: '$800K', year3: '$14M', icon: '📱', color: '#b3f0ff' },
  { stream: 'Travel & Accommodation', model: 'Package margin + airline rev share', year1: '$1.8M', year3: '$22M', icon: '✈️', color: '#ffb3e6' },
  { stream: 'Culture Town Experiences', model: 'Day pass + workshop fees', year1: '$600K', year3: '$8M', icon: '🏘️', color: '#ffe9af' },
  { stream: 'Wedding & Ceremony Services', model: 'Package fees, 12–30% margin', year1: '$400K', year3: '$7M', icon: '💍', color: '#ffd3dc' },
  { stream: 'Legal & Visa Services', model: 'SLA-backed service bundles', year1: '$300K', year3: '$4M', icon: '⚖️', color: '#b3f0ff' },
]

export const pitchCompetitors = [
  {
    name: 'A Foreign Affair / Love Me',
    type: 'Romance Tour Operator',
    founded: '1995',
    revenue: '~$12M/yr est.',
    color: '#ff6b6b',
    pros: ['30+ years brand trust', 'Tours in 10+ countries', 'IMBRA-compliant'],
    cons: ['No physical infrastructure', 'Hotel-lobby matchmaking', 'No cultural immersion', 'No safety architecture', 'App generation not reached'],
    moat: 'Low — replicable tour model',
  },
  {
    name: 'Dream Connections',
    type: 'Romance Tour Operator',
    founded: '2004',
    revenue: '~$4M/yr est.',
    color: '#ffc629',
    pros: ['Niche Eastern European focus', 'High-touch concierge'],
    cons: ['Single geography', 'Zero physical city concept', 'No governance framework', 'No app integrations'],
    moat: 'Very Low — geographically fragile',
  },
  {
    name: 'Match Group (Tinder, Hinge, OkCupid…)',
    type: 'Dating App Portfolio',
    founded: '1993',
    revenue: '$3.19B (2023)',
    color: '#00a8e0',
    pros: ['Massive scale — 100M+ MAU', 'Global infrastructure', 'Deep pockets'],
    cons: ['Screens only — zero physical play', 'Cannot build city infrastructure', 'Match-to-meeting problem unsolved', 'No cultural exchange tools'],
    moat: 'High on apps — Zero on physical',
  },
  {
    name: 'Bumble',
    type: 'Dating App',
    founded: '2014',
    revenue: '$903M (2023)',
    color: '#ffc629',
    pros: ['Safety-first brand', 'Women-first positioning', 'International user base'],
    cons: ['App-only — no physical IRL infrastructure', 'International meeting problem unsolved'],
    moat: 'High on apps — Zero on physical',
  },
  {
    name: 'Anastasia Date / EasternHoneys',
    type: 'Online International Dating',
    founded: '1993',
    revenue: '~$100M/yr est.',
    color: '#ffb3e6',
    pros: ['Large Eastern European user base', 'Translation tools built in'],
    cons: ['Reputational / scam risk', 'Zero physical infrastructure', 'No compliance framework', 'Heavy regulatory scrutiny'],
    moat: 'Low — shrinking model',
  },
  {
    name: 'Happily Ever After City',
    type: 'Physical Marriage City',
    founded: '2025',
    revenue: '$7.1M Year 1 projection',
    color: '#ffe9af',
    pros: ['Only physical infrastructure play', 'IMBRA + embassy governance', 'Culture Towns (unique)', 'App partnership layer', 'Full journey from first meet to honeymoon', 'IOM + INTERPOL oversight'],
    cons: ['Requires significant capex', 'Uganda regulatory complexity', 'Greenfield — no comparable exit comps'],
    moat: 'Extremely High — no comparable competitor exists',
    highlight: true,
  },
]

export const pitchMarketStats = [
  { v: '29,500', l: 'K-1 fiancé visas issued by the US in 2023 alone', src: 'US State Dept., 2023' },
  { v: '105,000+', l: 'CR-1/IR-1 spousal immigration visas issued by the US annually', src: 'US State Dept., 2023' },
  { v: '200,000+', l: 'international marriages registered across EU nations per year', src: 'Eurostat, 2022' },
  { v: '$3.4B', l: 'Match Group annual revenue (Tinder, Hinge, OkCupid, POF, Match)', src: 'Match Group 10-K, 2024' },
  { v: '$1.1B', l: 'Bumble Inc. annual revenue (Bumble + Badoo combined)', src: 'Bumble Inc. annual report, 2024' },
  { v: '$8,000', l: 'average all-in spend per male romance tour participant', src: 'AFA / industry estimates, 2023' },
  { v: '35,000+', l: 'marriages claimed facilitated by AFA / Love Me since 1995', src: 'A Foreign Affair company data' },
  { v: '0', l: 'purpose-built physical cities for international marriage existing globally', src: 'Market research, March 2026' },
]

export const pitchCompetitorDetail = [
  {
    name: 'A Foreign Affair (Love Me)',
    founded: '1995',
    hq: 'Phoenix, AZ, USA',
    model: 'Romance tours + online platform. Tours: $1,495–$3,995/man (7–10 days, not incl. flights/hotel). Online: $29–$95/month membership.',
    revenue: '$15–$25M/yr (est.)',
    strengths: 'IMBRA-compliant. 30 years of brand trust. 35,000+ claimed marriages. Tours in 10+ countries.',
    weaknesses: 'No physical infrastructure. Hotel-lobby "socials." Disrupted by Ukraine war. App generation unreached. Model unchanged since 1995.',
    threat: 'Low',
    color: '#ff6b6b',
    source: 'AFA website; IMBRA compliance filings; industry estimates',
  },
  {
    name: 'Dream Connections',
    founded: '2004',
    hq: 'USA',
    model: 'Boutique premium romance tours. $3,500–$6,500/man for 10–14 day experience. Groups of 10–25 men (vs. AFA\'s 50–100+).',
    revenue: '$2–$5M/yr (est.)',
    strengths: 'High-touch, premium positioning. Quality over volume.',
    weaknesses: 'Single-geography (Ukraine-heavy, now disrupted). Zero physical city concept. No digital strategy.',
    threat: 'Very Low',
    color: '#ffc629',
    source: 'Dream Connections website; industry estimates',
  },
  {
    name: 'Anastasia Date / AnastasiaWeb',
    founded: '1993',
    hq: 'Offshore (various)',
    model: 'Credit-based online chat platform. At peak (2015–2019) processed $140M+ in credits/year for men to chat with Eastern European women.',
    revenue: '$140M+ peak; declining post-litigation',
    strengths: 'Massive early scale. Translation tools built in.',
    weaknesses: 'Class-action lawsuits (2018–2020) for fake profiles. Settled for undisclosed amounts. Reputational collapse. Cautionary tale for the industry.',
    threat: 'Negligible (cautionary model)',
    color: '#ffb3e6',
    source: 'Court filings; Reuters; class-action settlement records',
  },
  {
    name: 'Match Group Portfolio',
    founded: '1993',
    hq: 'Dallas, TX, USA',
    model: 'App subscriptions, boosts, and premium features. Tinder, Hinge, Match, OkCupid, POF, Meetic. 75M+ Tinder MAU globally.',
    revenue: '$3.4B (2024)',
    strengths: 'Dominant digital scale. 75M+ Tinder MAU. Hinge fastest-growing. Deep pockets for investment.',
    weaknesses: 'Zero physical infrastructure. 95% of cross-border matches never meet. Cannot solve the physical meeting problem from an app.',
    threat: 'Medium — potential partner, not competitor',
    color: '#00a8e0',
    source: 'Match Group 10-K, 2024; Tinder press releases',
  },
  {
    name: 'Bumble Inc.',
    founded: '2014',
    hq: 'Austin, TX, USA',
    model: 'Women-first dating app. Bumble + Badoo combined. 500M+ Badoo registrations. Bumble Premium at $29–$60/month.',
    revenue: '$1.1B (2024)',
    strengths: 'Safety-first brand. Women-first positioning aligns with city values. International user base.',
    weaknesses: 'App-only. Zero physical IRL meeting infrastructure. International meeting problem completely unsolved.',
    threat: 'Medium — natural partner for co-branded zone',
    color: '#ffc629',
    source: 'Bumble Inc. annual report, 2024',
  },
  {
    name: 'It\'s Just Lunch',
    founded: '1991',
    hq: 'USA (H.I.G. Capital PE ownership)',
    model: '1-on-1 lunch introductions. Operates in 150+ cities globally. Revenue from membership packages: $1,200–$3,000/member.',
    revenue: '$80–$100M/yr (est.)',
    strengths: 'Proven physical matchmaking model. 150 city presence. PE-backed credibility.',
    weaknesses: 'Domestic only. No international matchmaking. No city/resort infrastructure. No cultural immersion.',
    threat: 'Low — different market segment',
    color: '#b3f0ff',
    source: 'H.I.G. Capital acquisition press release; industry estimates; IJL marketing materials',
  },
]

export const pitchRisks = [
  {
    risk: 'Uganda Anti-Homosexuality Act (2023)',
    severity: 'High',
    color: '#ff6b6b',
    detail: 'Signed May 2023 by President Museveni. Provides up to life imprisonment; death penalty in aggravated cases. World Bank suspended $300M in loans. US imposed visa restrictions. Western LP ESG screening will flag Uganda specifically.',
    mitigation: 'Structure as internationally governed SEZ with explicit human rights charter. Evaluate Rwanda as primary or parallel location — no equivalent legislation, superior infrastructure, Kagame government courts foreign investment.',
    source: 'World Bank statement, May 2023; US State Dept. travel advisory; Human Rights Watch report, 2023',
  },
  {
    risk: 'Chicken-and-Egg Cold Start',
    severity: 'High',
    color: '#ff9933',
    detail: 'Western male visitors will not come without a critical mass of participating women. East African women will not participate without a proven safe venue. Neither side has incentive to arrive first.',
    mitigation: 'Phase 1 model subsidises female participation (free or heavily discounted entry, professional development programming, stipends for cultural ambassadors). Seed with agency-referred participants before opening to walk-in traffic.',
    source: 'Internal analysis; comparable two-sided marketplace launch playbooks (Airbnb, Uber)',
  },
  {
    risk: 'Trafficking / Exploitation Narrative',
    severity: 'High',
    color: '#ff6b6b',
    detail: 'Any large-scale international marriage venue in Africa will face scrutiny from Polaris Project, IJM, UN Special Rapporteur on Trafficking, and international media. Conflation with sex tourism is near-certain in early coverage.',
    mitigation: 'Proactive IOM partnership, UN observer presence, INTERPOL liaison, and independent third-party audit. Publish all safety statistics quarterly. Pre-brief key NGOs before launch. Legal team on standby for defamation.',
    source: 'Polaris Project annual reports; UN Palermo Protocol; IMBRA legislative history',
  },
  {
    risk: 'Infrastructure Deficit (Uganda)',
    severity: 'Medium',
    color: '#ffc629',
    detail: 'Frequent power load-shedding outside Kampala. Road deterioration beyond Kampala–Entebbe Expressway. Entebbe Airport handles ~2.5M pax/year with no direct US carrier (US visitors: 20–30hrs total travel).',
    mitigation: 'On-site solar + diesel hybrid power generation budgeted in Phase 1 CapEx. Direct charter flight arrangements with Emirates/Turkish for launch packages. Consider Kigali, Rwanda as gateway city.',
    source: 'Umeme Uganda reliability reports; Entebbe Airport traffic data; Google Flights routing analysis',
  },
  {
    risk: '\"City\" Vision vs. Fundable Phase 1',
    severity: 'Medium',
    color: '#ffe9af',
    detail: 'Purpose-built cities cost $200M–$1B+. Traditional VC cannot fund this timeline or risk profile. Comparable African city concepts (Akon City, Hope City Ghana) have largely stalled.',
    mitigation: 'Phase 1 pitch is a boutique resort + event center ($15–$40M). Prove unit economics at 250 visitors/month → break-even. Use hospitality PE, impact capital, and DFIs (IFC, DFC) rather than traditional VC.',
    source: 'Tatu City Kenya; Konza Techno City; Eko Atlantic; African Development Bank project database',
  },
]

export const pitchOpportunities = [
  {
    icon: '🇺🇦',
    title: 'Post-Ukraine Market Gap',
    detail: 'The Russia-Ukraine war (2022–present) destroyed the dominant Eastern European romance tourism ecosystem — the single largest market segment. Operators like AFA and Dream Connections are scrambling to pivot. Demand is real, displaced, and actively seeking a new home.',
    source: 'AFA operational updates 2022–2023; Dream Connections destination changes',
  },
  {
    icon: '🌍',
    title: 'East Africa as Untapped Destination',
    detail: 'Uganda/East Africa has near-zero penetration as a romance tourism destination. First-mover advantage is genuine. English is an official language, the population is the world\'s youngest (median age ~16), and the growing Kampala middle class provides a highly educated participant pool.',
    source: 'Uganda Bureau of Statistics 2024; UNESCO education data; Uganda Tourism Board',
  },
  {
    icon: '📱',
    title: 'Dating Apps Need Physical Infrastructure',
    detail: 'Match Group ($3.4B revenue), Bumble ($1.1B), and every major app have the same structural gap: they create matches but cannot make them meet safely across borders. This is explicitly acknowledged in Match Group and Bumble investor materials. The city is the infrastructure they cannot build.',
    source: 'Match Group 10-K 2024; Bumble annual report 2024; Hinge press materials',
  },
  {
    icon: '🏨',
    title: 'Experiential Economy Tailwinds',
    detail: 'Post-COVID consumer spending has structurally shifted toward experiences over goods. Destination resort concepts like Sandals (~$500M/yr) and Club Med show scalable high-margin resort models. Premium all-inclusive international marriage packages ($4,000–$12,000) are positioned in this trend.',
    source: 'McKinsey Consumer Sentiment Survey 2023; Sandals Resorts financial data; Club Med annual report',
  },
]

export const pitchAsk = {
  amount: '$24M',
  round: 'Series A',
  valuation: '$80M pre-money',
  use: [
    { label: 'Phase 1 City Infrastructure', pct: 38, amount: '$9.1M', detail: 'Core venue construction, biometric entry systems, hospitality fit-out across 14 launch venues' },
    { label: 'Culture Towns Build-Out', pct: 22, amount: '$5.3M', detail: '8 cultural district fit-outs, resident cultural staff, programming and experiences' },
    { label: 'Technology & App Integrations', pct: 14, amount: '$3.4M', detail: 'City OS platform, dating app API integrations, safety monitoring systems' },
    { label: 'Regulatory & Governance Setup', pct: 10, amount: '$2.4M', detail: 'Embassy MOU negotiations, IOM partnership, IMBRA compliance infrastructure, legal entity setup' },
    { label: 'Marketing & Partnership Acquisition', pct: 10, amount: '$2.4M', detail: 'Airline partnerships, agency licensing launch, app partnership business development' },
    { label: 'Working Capital & Ops (18 mo)', pct: 6, amount: '$1.4M', detail: 'Team hiring, operational runway to revenue break-even' },
  ],
}

export const pitchTraction = [
  { icon: '🏗️', label: 'City concept fully designed', detail: '14 launch venues mapped, full journey pipeline from arrival to honeymoon' },
  { icon: '✈️', label: '8 airline gateway partners identified', detail: 'Emirates, Ethiopian, Kenya Airways, Qatar, Turkish, KLM, RwandAir, British Airways' },
  { icon: '📋', label: 'IMBRA compliance framework drafted', detail: 'Introduction agency licensing model complete, legal review in progress' },
  { icon: '🌍', label: 'IOM & UN governance model in design', detail: 'International oversight framework structured with dual-authority entry/exit protocols' },
  { icon: '📱', label: 'Dating app partnership pitch decks ready', detail: 'Tinder, Hinge, Bumble, Match Group, eHarmony — city integration proposals drafted' },
  { icon: '🏘️', label: '8 Culture Towns fully designed', detail: 'China Town, India Town, Greek Town, Latin Quarter, Arab Quarter, and more — operational concept complete' },
]

export const pitchTeamPlaceholders = [
  { role: 'CEO / Founder', focus: 'City concept, investor relations, strategic partnerships', initials: 'TBA' },
  { role: 'COO', focus: 'City operations, venue management, partner onboarding', initials: 'TBA' },
  { role: 'Chief Legal Officer', focus: 'IMBRA compliance, embassy negotiations, international law', initials: 'TBA' },
  { role: 'CTO', focus: 'City OS platform, app partnerships, safety tech infrastructure', initials: 'TBA' },
  { role: 'Chief Culture Officer', focus: 'Culture Towns programming, cultural advisor network', initials: 'TBA' },
]
