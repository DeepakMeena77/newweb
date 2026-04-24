export const site = {
  name: 'Carbon Carat Technology LLP',
  shortName: 'CCT',
  legalName: 'Carbon Carat Technology LLP (CCT)',
  tagline: 'Born to Deliver the Excellence',
  description:
    'Carbon Carat Technology LLP designs advanced CVD, MPCVD, sputtering, and thin-film deposition systems for semiconductor, diamond, nanotechnology, and research applications.',
  phoneDisplay: '+91 8928373100',
  phoneRaw: '+918928373100',
  email: 'Info.cctechmumbai@gmail.com',
  addressLine1: 'PAP-R-569, MIDC Road, Rabale',
  addressLine2: 'Thane, Navi Mumbai - 400070, India',
  city: 'Navi Mumbai',
  region: 'Maharashtra',
  postalCode: '400070',
  country: 'India',
  brochurePath: '/assets/brochure/cct-brochure.pdf',
  logoPath: '/assets/brand/logo.png',
};

export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/products/', label: 'Products' },
  { href: '/industries/', label: 'Industries' },
  { href: '/technical-articles/', label: 'Technical Articles' },
  { href: '/about-us/', label: 'About Us' },
  { href: '/contact/', label: 'Contact' },
];

export const categories = [
  {
    title: 'MPCVD Systems',
    description: 'High-power microwave plasma systems for precision diamond synthesis and advanced carbon growth.',
    anchor: '#mpcvd',
    accent: 'cyan',
  },
  {
    title: 'HFCVD Systems',
    description: 'Reliable hot filament platforms for industrial coatings, nanodiamond, and scalable carbon applications.',
    anchor: '#hfcvd',
    accent: 'amber',
  },
  {
    title: 'Thermal CVD Systems',
    description: 'Thermal process systems for graphene, CNT growth, and thin-film development.',
    anchor: '#thermal-cvd',
    accent: 'slate',
  },
  {
    title: 'Sputtering Systems',
    description: 'Precision magnetron sputtering equipment for metals, semiconductors, and dielectric coatings.',
    anchor: '#sputtering',
    accent: 'sky',
  },
  {
    title: 'Electron / Thermal Evaporation',
    description: 'Thin-film evaporation solutions for conductive, semiconductor, and optical coating workflows.',
    anchor: '#evaporation',
    accent: 'violet',
  },
];

export const benefits = [
  'Genuine products',
  'Best prices',
  'Fast delivery',
  'Warranty support',
];

export const industries = [
  {
    title: 'CVD Diamond',
    description: 'Solutions for electronic-grade, optical-grade, and quantum-grade diamond growth and wafer production.',
    accent: 'cyan',
  },
  {
    title: 'Semiconductor',
    description: 'Thin-film and deposition equipment tailored to semiconductor fabrication, coating, and process development.',
    accent: 'green',
  },
  {
    title: 'Research & Academics',
    description: 'Flexible platforms for laboratories, pilot development, and advanced materials research programs.',
    accent: 'amber',
  },
  {
    title: 'Nanotechnology',
    description: 'Graphene, CNT, fullerene, and micro-nano device processing capabilities for emerging technology teams.',
    accent: 'violet',
  },
];

export const materials = [
  {
    title: 'Boron Doped Diamond Plates',
    subtitle: 'p-type, high purity, precision doping',
    image: '/assets/products/diamond-plates.png',
  },
  {
    title: 'Phosphorous Doped Diamond Plates',
    subtitle: 'n-type, high purity, controlled doping',
    image: '/assets/products/diamond-plates.png',
  },
  {
    title: 'Optical Grade Polycrystalline Diamond Wafer',
    subtitle: 'Large-area wafer format for optical and advanced material use cases',
    image: '/assets/products/diamond-wafers.png',
  },
  {
    title: 'Semiconductor Grade Diamond Plates',
    subtitle: 'Ultra-high purity, atomically smooth surface',
    image: '/assets/products/diamond-wafers.png',
  },
];

export const equipment = [
  {
    slug: 'mpcvd-6kw',
    title: '6 kW MPCVD Diamond Deposition System',
    category: 'MPCVD Systems',
    summary:
      'Reliable, automated, and precision-driven system for advanced diamond and carbon material synthesis.',
    image: '/assets/products/mpcvd-6kw.png',
    applications: [
      'High-quality electronic, optical, and quantum grade single crystal diamond growth',
      'Polycrystalline and free-standing diamond films',
      'Advanced carbon nanomaterials including graphene, CNTs, and fullerenes',
    ],
    features: [
      'High power-density 6 kW, 2.45 GHz microwave plasma',
      'Water-cooled stage and chamber for stable long-duration operation',
      'Plasma self-heating for substrate temperature control',
      'Full-range vacuum gauge for precise pressure monitoring',
      'Turbo and rotary pumps up to 1 x 10^-5 Pa with automatic pressure control',
      'Efficient cooling system for high-power reliability',
      '24-inch monitor with PLC automation and recipe storage',
      'Fully automated process module for consistent, high-quality growth',
    ],
    warranty: [
      '12 months from installation or 14 months from shipment, whichever is earlier',
      'Excludes misuse, unauthorized modifications, and consumables',
      'Site utilities readiness is required and delays do not extend warranty',
    ],
  },
  {
    slug: 'mpcvd-10kw-12kw',
    title: '10 kW / 12 kW MPCVD Diamond Deposition System',
    category: 'MPCVD Systems',
    summary:
      'High-power, precision-controlled system for scalable diamond and advanced carbon material synthesis.',
    image: '/assets/products/mpcvd-10kw.png',
    applications: [
      'High-quality electronic, optical, and quantum grade single crystal diamond growth',
      'Polycrystalline and free-standing diamond films',
    ],
    features: [
      '10 kW / 12 kW high power-density microwave plasma',
      '2.45 GHz magnetron for efficient plasma generation',
      'Wide plasma range from low to ultra-high power density with temperature control',
      'Recipe-driven computer control with pyrometer from 400 to 1700 C',
      'Water-cooled aluminium structure for stability',
      'Five MFC gas lines, expandable on request',
    ],
    warranty: [
      '12 months from installation or 14 months from shipment, whichever is earlier',
      'Excludes misuse, unauthorized modifications, and consumables',
      'Utility delays in gas, power, or water do not extend warranty',
    ],
  },
  {
    slug: 'mpcvd-915mhz-30kw',
    title: '915 MHz MPCVD System (30 kW)',
    category: 'MPCVD Systems',
    summary:
      'Built for high-throughput, large-scale, and precision-driven diamond synthesis.',
    image: '/assets/brochure/915mhz-sheet.png',
    applications: [
      'High-quality single crystal diamond growth',
      'Polycrystalline and free-standing diamond films',
      'Advanced carbon nanomaterials including graphene, CNTs, and fullerenes',
    ],
    features: [
      '30 kW high power-density microwave plasma',
      '915 MHz magnetron for deep plasma penetration and uniform growth',
      'Wide operating range from low to ultra-high plasma density with precise temperature control',
      'Recipe-driven automation with pyrometer from 400 to 1700 C',
      'Water-cooled aluminium structure for continuous, stable operation',
      'Multi-gas MFC system with five lines, expandable on request',
    ],
    warranty: [
      '12 months from installation or 14 months from shipment, whichever is earlier',
      'Excludes misuse, unauthorized modifications, and consumables',
      'Utility readiness is required and delays do not extend warranty',
    ],
  },
  {
    slug: 'hfcvd-diamond-system',
    title: 'Hot Filament CVD Diamond System',
    category: 'HFCVD Systems',
    summary:
      'Reliable, scalable, and efficient solution for industrial diamond and carbon coating applications.',
    image: '/assets/brochure/hfcvd-sheet.png',
    applications: [
      'Nanodiamond and microcrystalline diamond coatings',
      'CVD diamond films',
      'Graphene, CNTs, and advanced thin films',
    ],
    features: [
      'Mature, industry-trusted technology with simple and robust design',
      'High-performance deposition with excellent safety and reliability',
      'Double-layer stainless steel chamber for durability and thermal stability',
      'Compact two-stage structure for efficient operation',
      'Integrated gas and vacuum system with optimized pipeline design',
      'Real-time monitoring and precise control of gas flow and pressure',
      'Fully automated control system for consistent, repeatable results',
    ],
    warranty: [],
  },
  {
    slug: 'thermal-cvd-system',
    title: 'Thermal CVD System',
    category: 'Thermal CVD Systems',
    summary:
      'Enables uniform, high-quality graphene and CNT growth with precise coating across rigid and flexible substrates.',
    image: '/assets/brochure/thermal-sheet.png',
    applications: [
      'Graphene, single-walled CNTs, and multi-walled CNT growth',
      'Thin-film coatings for advanced materials',
      'Micro-nano device fabrication and processing',
      'Research and small-scale production',
    ],
    features: [
      'Thermal decomposition platform for high-quality large-area graphene synthesis',
      'Supports conductive, semiconductor, ferroelectric, and optical films',
      'Capable of evaporating refractory metals',
      'Compatible with rigid substrates including glass, silicon, and diamond wafers',
      'Compatible with flexible substrates such as PDMS, PTFE, and PI',
    ],
    warranty: [],
  },
  {
    slug: 'magnetron-sputtering-system',
    title: 'Magnetron Sputtering Coating System',
    category: 'Sputtering Systems',
    summary:
      'Engineered for high-uniformity coatings, process repeatability, and user-friendly automated operation.',
    image: '/assets/brochure/sputtering-sheet.png',
    applications: [
      'Metal, semiconductor, and dielectric thin-film deposition',
      'Semiconductor devices, LEDs, and photovoltaic coatings',
      'Research laboratories and pilot-scale manufacturing',
    ],
    features: [
      'Single-chamber compact design for stable and efficient operation',
      'Integrated magnetron sputtering source with ion bombardment capability',
      'Rotating substrate holder with optical heating for uniform film growth',
      'Complete vacuum, gas flow, water-cooling, and safety alarm systems',
      'High-reliability sputtering power supply for consistent deposition',
      'PLC-based intelligent control system with touchscreen interface',
      'Automated vacuum, sputtering, gas filling, and venting operations',
    ],
    warranty: [],
  },
  {
    slug: 'electron-beam-evaporation-system',
    title: 'Electron Beam Evaporation Coating System',
    category: 'Electron / Thermal Evaporation',
    summary:
      'Delivers precise, uniform, and high-performance thin film coatings for cutting-edge applications.',
    image: '/assets/products/ebe-system.png',
    applications: [
      'Deposition of conductive, semiconductor, ferroelectric, and optical films',
      'Research laboratories and academic institutions',
      'Small-scale production environments',
    ],
    features: [
      'Vacuum evaporation chamber with E-type electron gun',
      'Thermal evaporation source and rotating heated substrate holder',
      'Gas flow control and high-efficiency vacuum system',
      'Intelligent electronic controls on a robust industrial platform',
    ],
    warranty: [],
  },
];

export const technicalArticles = [
  {
    title: 'Simulation, development, and optical emission spectroscopy of microwave plasma chemical vapor deposition reactor for synthesis of large-area single crystal diamond',
    citation: 'Next Materials 8 (2025) 100791',
    topic: 'Microwave Plasma CVD System from SCD Growth',
    searchUrl:
      'https://scholar.google.com/scholar?q=Simulation%2C+development%2C+and+optical+emission+spectroscopy+of+microwave+plasma+chemical+vapor+deposition+reactor+for+synthesis+of+large-area+single+crystal+diamond',
  },
  {
    title: 'Step growth in single crystal diamond grown by microwave plasma chemical vapor deposition',
    citation: 'Diamond & Related Materials 15 (2006) 304',
    topic: 'Dependency of deposition parameters on morphology of the single crystal diamond films',
    searchUrl:
      'https://scholar.google.com/scholar?q=Step+growth+in+single+crystal+diamond+grown+by+microwave+plasma+chemical+vapor+deposition',
  },
];

export const aboutHighlights = [
  {
    title: 'Team Work',
    description: 'A skilled engineering team that works closely with clients on standard and custom systems.',
    image: '/assets/icons/teamwork.png',
  },
  {
    title: 'High-quality',
    description: 'Equipment designed for dependable output, process stability, and repeatable manufacturing quality.',
    image: '/assets/icons/high-quality.png',
  },
  {
    title: 'Safe Materials',
    description: 'Material selection and system design built around safe, durable, and production-ready operation.',
    image: '/assets/icons/safe-materials.png',
  },
  {
    title: 'Rich Experience',
    description: 'A professional foundation in thermal and CVD systems backed by practical application knowledge.',
    image: '/assets/icons/rich-experience.png',
  },
];

export const supportChannels = [
  {
    title: 'Phone',
    value: site.phoneDisplay,
    href: `tel:${site.phoneRaw}`,
    image: '/assets/icons/phone.png',
  },
  {
    title: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
    image: '/assets/icons/email.png',
  },
  {
    title: 'Address',
    value: `${site.addressLine1}, ${site.addressLine2}`,
    href: 'https://maps.google.com/?q=PAP-R-569%2C+MIDC+Road%2C+Rabale%2C+Thane%2C+Navi+Mumbai+400070%2C+India',
    image: '/assets/icons/location.png',
  },
];

export const brochurePreviews = [
  {
    title: 'Home concept preview',
    image: '/assets/brochure/home-preview.png',
  },
  {
    title: 'Product range brochure',
    image: '/assets/brochure/product-range-sheet.png',
  },
  {
    title: 'Technical articles sheet',
    image: '/assets/brochure/technical-articles.png',
  },
  {
    title: 'About company sheet',
    image: '/assets/brochure/about-sheet.png',
  },
  {
    title: 'Contact sheet',
    image: '/assets/brochure/contact-sheet.png',
  },
];

export const formInterests = [
  'General inquiry',
  'Boron and phosphorous diamond plates',
  'MPCVD systems',
  'HFCVD systems',
  'Thermal CVD systems',
  'Magnetron sputtering systems',
  'Electron beam evaporation systems',
  'Technical consultation',
];
