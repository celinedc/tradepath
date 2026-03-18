
export const INTAKE_QUESTIONS = [

  {
    id: 'favoriteSubject',
    question: "What is your favorite subject in school?",
    placeholder: "e.g., Math, Art, Physics...",
    type: 'text'
  },
  {
    id: 'extracurriculars',
    question: "What are your hobbies or extracurricular activities?",
    placeholder: "e.g., Fixing cars, Drawing, Sports...",
    type: 'text'
  },
  {
    id: 'wiresPipes',
    question: "Does the idea of looking at a complex, tangled mess of wires or pipes and figuring out where the 'break' is sound frustrating or like a fun challenge?",
    type: 'select',
    options: ['Fun challenge', 'Frustrating']
  },
  {
    id: 'steadyHandAesthetics',
    question: "Do you enjoy tasks that require a steady hand and an eye for aesthetics?",
    type: 'select',
    options: ['I love detailed work', 'Not for me']
  },
  {
    id: 'environmentChoice',
    question: "Would you rather work in a climate-controlled indoor setting or do you enjoy the variety of being outdoors in different weather conditions?",
    type: 'select',
    options: ['Indoor', 'Outdoor variety']
  },
  {
    id: 'techVsBookshelf',
    question: "When someone needs help, what are they most likely to ask you for?",
    type: 'select',
    options: ['Setting up tech/software', 'Building a bookshelf/furniture', 'Designing a creative project/art']
  },
  {
    id: 'dirtyHands',
    question: "How much does the idea of getting your hands dirty bother you?",
    type: 'select',
    options: ["Doesn't bother me", "I'd rather stay clean"]
  },
  {
    id: 'heightsVsCrawlspace',
    question: "Are you more comfortable working at the top of a 20-foot ladder or squeezed into a tight crawlspace under a floor?",
    type: 'select',
    options: ['Top of 20-foot ladder', 'Tight crawlspace', 'Neither - keep me on level ground']
  },
  {
    id: 'visualization',
    question: "Do you find it easy to visualize how a 2D blue-print or drawing will look once it is built into a 3D object?",
    type: 'select',
    options: ['Easy', 'Difficult']
  },
  {
    id: 'resultsPatience',
    question: "Do you prefer seeing immediate results from a quick repair, or do you have the patience for a multi-week construction build?",
    type: 'select',
    options: ['Immediate results', 'Multi-week patience']
  },
  {
    id: 'protocolsVsWinging',
    question: "Do you enjoy following protocols and checklists to ensure a system is perfect, or do you prefer 'winging it' and finding creative workarounds?",
    type: 'select',
    options: ['Follow protocols', 'Creative workarounds']
  },
  {
    id: 'functionVsAesthetic',
    question: "Is it more important that the thing you built works perfectly (even if no one sees it), or that it looks amazing for everyone to see?",
    type: 'select',
    options: ['Works perfectly', 'Looks amazing']
  },
  {
    id: 'steadyHandHobby',
    question: "Do you enjoy things that require a 'steady hand,' like detailed drawing, gaming, or even doing makeup/nails?",
    type: 'select',
    options: ['Yes', 'No']
  },
  {
    id: 'wifiFix',
    question: "When your Wi-Fi goes out, do you start unplugging cables and checking lights to find the 'break,' or do you just wait for someone else to fix it?",
    type: 'select',
    options: ['Investigate', 'Wait for someone']
  },
  {
    id: 'grindVsClutch',
    question: "Which feels like a bigger win? Putting in the long, repetitive grind to turn a messy rough draft into a perfect final project, or the high-pressure moment of hitting a game-winning shot (or nail-biting gaming clutch) where one tiny slip-up ruins the whole thing?",
    type: 'select',
    options: ['The long, satisfying grind', 'The high-pressure clutch moment']
  },
  {
    id: 'structureVsTinker',
    question: "In a game, are you the player who likes to build massive structures and bases (Fortnite/Minecraft), or the one who likes to tinker with the settings and mods to make the game run faster?",
    type: 'select',
    options: ['Build massive structures', 'Tinker with mods']
  }
];



export const TRAINING_MODELS = {
  PAID_APPRENTICESHIP: {
    tag: "PAID-APPRENTICESHIP",
    desc: "Union/registered apprenticeships; worker paid throughout; 4–5 years; strong wage progression",
    avgCost: "$0 (Paid to learn)"
  },
  OJT_ONLY: {
    tag: "OJT-ONLY",
    desc: "Informal on-the-job training; no formal program; variable entry and wages",
    avgCost: "$0"
  },
  COMMUNITY_COLLEGE: {
    tag: "COMMUNITY-COLLEGE",
    desc: "Classroom-based, student pays tuition; 6 months to 2 years; leads to certificate/degree",
    avgCost: "$4,000 - $15,000"
  },
  EMPLOYER_SPONSORED: {
    tag: "EMPLOYER-SPONSORED",
    desc: "Large employer–run programs (utilities, major contractors); paid; structured advancement",
    avgCost: "$0"
  },
  MANUFACTURER_CERTIFICATION: {
    tag: "MANUFACTURER-CERTIFICATION",
    desc: "Equipment/brand-specific training; often free; prerequisite trade knowledge typical",
    avgCost: "$0 - $2,000"
  },
  PRE_APPRENTICESHIP: {
    tag: "PRE-APPRENTICESHIP",
    desc: "Bridge programs; 6 weeks to 6 months; free/subsidized; leads to apprenticeship placement",
    avgCost: "$0 - $1,500"
  },
  GOVERNMENT_FUNDED: {
    tag: "GOVERNMENT-FUNDED/NONPROFIT",
    desc: "Free or subsidized tuition; workforce development focus",
    avgCost: "$0 (Grant funded)"
  },
  PRIVATE_TRADE_SCHOOL: {
    tag: "PRIVATE-TRADE-SCHOOL",
    desc: "For-profit; short, intensive; variable quality",
    avgCost: "$10,000 - $50,000+"
  }
};

export const RECOMMENDATIONS = [
  {
    id: 'electrician-comm',
    name: 'Commercial Electrician',
    title: 'The Electrician',
    trainingModel: 'PAID_APPRENTICESHIP',
    credentials: 'Journeyman Electrician License',
    timeToCertify: '4-5 Years',
    startingSalary: 48000,
    medianSalary10yr: 82000,
    demand: 'High',
    keywords: ['math', 'logic', 'puzzles', 'physics', 'building', 'safety', 'construction'],
    skills: ['Blueprint Reading', 'Circuit Logic', 'Critical Thinking', 'Manual Dexterity'],
    dayInLife: 'You start your day at a large construction site. You’ll be installing conduit, pulling wire through electrical systems, and testing circuits to ensure everything meets safety codes. It’s physical, mental, and requires high precision.',
    impact: 'You power the city. Without your work, hospitals wouldn’t have power for life-saving equipment, and businesses couldn’t function.',
    relevanceMatch: "Your interest in Math and 'fixing things' aligns perfectly with the circuit logic and complex calculations needed for electrical distribution.",
    comparableJob: {
      name: 'Electrical Engineer',
      credentials: 'B.S. in Electrical Engineering',
      timeToCertify: '4 Years',
      startingSalary: 72000,
      medianSalary10yr: 115000,
      avgCost: '$120,000+',
      dayInLife: 'You’ll spend your day in an office or lab, using CAD software to design circuits, simulating power loads, and managing project timelines for large-scale electrical infrastructure.',
      impact: 'You innovate and design the systems that keep our modern world connected and sustainable.',
      skills: ['Advanced Mathematics', 'CAD Software', 'System Design', 'Project Management'],
      trainingModel: 'FOUR_YEAR_DEGREE'
    }
  },
  {
    id: 'hvac-industrial',
    name: 'Industrial HVAC technician',
    title: 'The HVAC technician',
    trainingModel: 'COMMUNITY_COLLEGE',
    credentials: 'EPA 608 Certification & HVAC Certificate',
    timeToCertify: '6-12 Months',
    startingSalary: 42000,
    medianSalary10yr: 75000,
    demand: 'Very High',
    keywords: ['physics', 'science', 'fixing', 'machines', 'troubleshooting', 'logic', 'maintenance'],
    skills: ['Thermodynamics', 'Refrigeration Cycle', 'Diagnostic Logic', 'Customer Service'],
    dayInLife: 'You’ll be troubleshooting climate control systems in massive server farms or manufacturing plants. You’ll use thermal cameras and pressure gauges to find leaks and optimize efficiency.',
    impact: 'You keep people comfortable and critical infrastructure (like data centers) from overheating.',
    relevanceMatch: "Your quick problem-solving skills and interest in Physics make you a natural fit for the complex thermodynamics of HVAC systems.",
    comparableJob: {
      name: 'Mechanical Engineer',
      credentials: 'B.S. in Mechanical Engineering',
      timeToCertify: '4 Years',
      startingSalary: 68000,
      medianSalary10yr: 108000,
      avgCost: '$115,000+',
      dayInLife: 'You design the thermal systems that HVAC technicians install. You’ll be calculating load capacities, specifying materials, and ensuring energy efficiency standards are met.',
      impact: 'You reduce global energy consumption by designing smarter, more efficient heating and cooling solutions.',
      skills: ['Thermodynamics', 'Fluid Mechanics', 'Computer Modeling', 'Materials Science'],
      trainingModel: 'FOUR_YEAR_DEGREE'
    }
  },
  {
    id: 'datacenter-op',
    name: 'Datacenter Operator',
    title: 'The Datacenter Operator',
    trainingModel: 'EMPLOYER_SPONSORED',
    credentials: 'CompTIA A+, Server+, or Manufacturer Cert',
    timeToCertify: '3-6 Months',
    startingSalary: 52000,
    medianSalary10yr: 88000,
    demand: 'High',
    keywords: ['gaming', 'computers', 'it', 'technology', 'math', 'order', 'security'],
    skills: ['Network Architecture', 'Server Maintenance', 'Troubleshooting', 'Security Protocols'],
    dayInLife: 'Monitoring the health of thousands of servers. You’ll be swapping hardware, managing power distribution, and ensuring the internet stays online 24/7.',
    impact: 'You are the guardian of the digital world. You ensure that our communication, banking, and entertainment systems never go dark.',
    relevanceMatch: "Your background in computer gaming and technical hobbies translates directly into high-level server management.",
    comparableJob: {
      name: 'Cloud Architect',
      credentials: 'B.S. in Computer Science',
      timeToCertify: '4 Years',
      startingSalary: 85000,
      medianSalary10yr: 155000,
      avgCost: '$140,000+',
      dayInLife: 'Designing the high-level virtual infrastructure that runs on the servers managed by datacenter operators. You’ll be writing automation scripts and architecting database scaling.',
      impact: 'You build the invisible foundations of the modern digital economy.',
      skills: ['Coding (Python/Go)', 'Security Design', 'Strategic Planning', 'Distributed Systems'],
      trainingModel: 'FOUR_YEAR_DEGREE'
    }
  },
  {
    id: 'welder-pipe',
    name: 'Pipe Welder',
    title: 'The Welder',
    trainingModel: 'PRIVATE_TRADE_SCHOOL',
    credentials: 'AWS Certified Welder',
    timeToCertify: '6-9 Months',
    startingSalary: 50000,
    medianSalary10yr: 95000,
    demand: 'Medium',
    keywords: ['art', 'drawing', 'steady hand', 'sculpting', 'fire', 'metal', 'construction'],
    skills: ['Arc Welding', 'Metallurgy', 'Blueprint Reading', 'Physical Stamina'],
    dayInLife: 'Working on high-pressure steam lines. You’ll be performing X-ray quality welds in tight spaces, requiring extreme focus and a steady hand.',
    impact: 'You build the veins of our infrastructure. You provide the piping that delivers clean water, heat, and fuel to our communities.',
    relevanceMatch: "Your artistic eye and steady hand (from drawing/sculpting) will make you stand out in high-precision pipe welding.",
    comparableJob: {
      name: 'Materials Engineer',
      credentials: 'B.S. in Materials Engineering',
      timeToCertify: '4 Years',
      startingSalary: 74000,
      medianSalary10yr: 112000,
      avgCost: '$130,000+',
      dayInLife: 'You’ll be in a lab testing the stress limits of new alloys and welding techniques. You’ll analyze failure points and specify which welding rods should be used for specific jobs.',
      impact: 'You discover the materials and methods that make airplanes, bridges, and power plants safer and stronger.',
      skills: ['Chemistry', 'Microscopy', 'Failure Analysis', 'Technical Writing'],
      trainingModel: 'FOUR_YEAR_DEGREE'
    }
  },
  {
    id: 'aircraft-mech',
    name: 'Aircraft Mechanic',
    title: 'The Aircraft Mechanic',
    trainingModel: 'COMMUNITY_COLLEGE',
    credentials: 'FAA Airframe and Powerplant (A&P) License',
    timeToCertify: '18-24 Months',
    startingSalary: 55000,
    medianSalary10yr: 92000,
    demand: 'High',
    keywords: ['planes', 'flying', 'fixing', 'aerospace', 'precision', 'safety', 'engines'],
    skills: ['Engine Diagnostics', 'Avionics', 'Safety Compliance', 'Metrology'],
    dayInLife: 'Inspecting turbine engines and hydraulics. You follow exact FAA protocols to ensure that every flight is safe. It’s a high-stakes, high-reward diagnostic role.',
    impact: 'You hold the lives of thousands in your hands. You enable the global movement of people and goods with 100% reliability.',
    relevanceMatch: "Your attention to detail and love for aerospace or mechanics makes you perfect for this high-precision safety role.",
    comparableJob: {
      name: 'Aerospace Engineer',
      credentials: 'B.S. in Aerospace Engineering',
      timeToCertify: '4 Years',
      startingSalary: 78000,
      medianSalary10yr: 125000,
      avgCost: '$150,000+',
      dayInLife: 'Designing the aerodynamic profiles and structural components of the aircraft. You’ll use wind tunnels and simulations to test new wing designs.',
      impact: 'You push the boundaries of human flight and space exploration.',
      skills: ['Aerodynamics', 'Calculus', 'Simulations', 'Structural Analysis'],
      trainingModel: 'FOUR_YEAR_DEGREE'
    }
  },
  {
    id: 'heavy-op',
    name: 'Heavy Equipment Operator',
    title: 'The Equipment Operator',
    trainingModel: 'OJT_ONLY',
    credentials: 'OSHA Certifications',
    timeToCertify: '2-4 Months',
    startingSalary: 45000,
    medianSalary10yr: 78000,
    demand: 'High',
    keywords: ['driving', 'trucks', 'gaming', 'spatial', 'outdoors', 'construction', 'building'],
    skills: ['Machine Control', 'Spatial Awareness', 'Site Safety', 'Problem Solving'],
    dayInLife: 'Operating excavators or cranes on a bridge project. You use depth perception and precise controls to move tons of earth or steel within inches of a target.',
    impact: 'You are the muscle of civilization. You literally reshape the earth to build our roads, bridges, and skyscrapers.',
    relevanceMatch: "Your interest in sports or gaming translates to the excellent spatial awareness and hand-eye coordination needed for heavy machinery.",
    comparableJob: {
      name: 'Civil Engineer',
      credentials: 'B.S. in Civil Engineering',
      timeToCertify: '4 Years',
      startingSalary: 65000,
      medianSalary10yr: 102000,
      avgCost: '$110,000+',
      dayInLife: 'You design the bridge projects that operators build. You’ll be surveying sites, calculating soil load-bearing capacity, and managing budget constraints.',
      impact: 'You design the resilient infrastructure that protects and connects our society.',
      skills: ['Surveying', 'Hydrology', 'AutoCAD', 'Structural Math'],
      trainingModel: 'FOUR_YEAR_DEGREE'
    }
  },
  {
    id: 'solar-tech',
    name: 'Solar Installer',
    title: 'The Solar Tech',
    trainingModel: 'GOVERNMENT_FUNDED',
    credentials: 'NABCEP Certification',
    timeToCertify: '3-6 Months',
    startingSalary: 40000,
    medianSalary10yr: 70000,
    demand: 'Very High',
    keywords: ['outdoors', 'nature', 'energy', 'environment', 'building', 'science', 'climbing'],
    skills: ['Photovoltaics', 'Roofing Safety', 'Electrical Basics', 'Tool Use'],
    dayInLife: 'Installing solar arrays on residential and commercial rooftops. You’ll be wiring panels into the grid and ensuring optimal solar exposure.',
    impact: 'You are at the forefront of the green revolution, helping families save money and reducing our carbon footprint.',
    relevanceMatch: "Your love for the outdoors and interest in clean energy makes this high-growth field a perfect match for you.",
    comparableJob: {
      name: 'Renewable Energy Consultant',
      credentials: 'B.S. in Environmental Science',
      timeToCertify: '4 Years',
      startingSalary: 60000,
      medianSalary10yr: 110000,
      avgCost: '$120,000+',
      dayInLife: 'Analyzing energy usage for large corporations and designing custom renewable energy strategies. You’ll be doing financial modeling and policy analysis.',
      impact: 'You scale the adoption of clean energy at a global level through economics and policy.',
      skills: ['Data Analysis', 'Energy Policy', 'Financial Modeling', 'Strategic Communication'],
      trainingModel: 'FOUR_YEAR_DEGREE'
    }
  },
  {
    id: 'carpenter-finish',
    name: 'Finish Carpenter',
    title: 'The Carpenter',
    trainingModel: 'PRE_APPRENTICESHIP',
    credentials: 'Carpenter Certificate/Journeyman status',
    timeToCertify: '2-4 Years',
    startingSalary: 38000,
    medianSalary10yr: 72000,
    demand: 'High',
    keywords: ['art', 'wood', 'design', 'precision', 'making', 'furniture', 'math'],
    skills: ['Fine Woodworking', 'Geometry', 'Precision Cutting', 'Blueprint Reading'],
    dayInLife: 'Creating custom cabinetry, molding, and staircases. You’ll be working with exotic woods and high-end tools to turn a house into a home.',
    impact: 'You provide a sense of place and beauty. Your craftsmanship will remain in homes for generations.',
    relevanceMatch: "Your skill in Art and attention to detail will translate into high-end finish carpentry and custom woodworking.",
    comparableJob: {
      name: 'Architect',
      credentials: 'B.Arch or M.Arch Degree',
      timeToCertify: '5-7 Years',
      startingSalary: 55000,
      medianSalary10yr: 95000,
      avgCost: '$180,000+',
      dayInLife: 'Designing the buildings where carpenters work. You’ll be meeting with clients, creating floor plans, and ensuring all designs meet building codes and aesthetics.',
      impact: 'You envision the spaces where we live, work, and play, shaping the identity of our cities.',
      skills: ['Architectural Drawing', 'Code Compliance', 'Client Management', 'Aesthetic Design'],
      trainingModel: 'FOUR_YEAR_DEGREE'
    }
  },
  {
    id: 'auto-specialist',
    name: 'EV Specialist Mechanic',
    title: 'The Auto Tech',
    trainingModel: 'MANUFACTURER_CERTIFICATION',
    credentials: 'ASE Certification & Manufacturer Cert',
    timeToCertify: '6-12 Months',
    startingSalary: 50000,
    medianSalary10yr: 90000,
    demand: 'Very High',
    keywords: ['cars', 'ev', 'technology', 'diagnostic', 'fixing', 'electronics', 'computers'],
    skills: ['High-Voltage Systems', 'Diagnostic Software', 'Drive Train Logic', 'Battery Tech'],
    dayInLife: 'Working on Tesla or Ford EV systems. You’ll be using advanced software to diagnose battery cells and motor controllers. It’s half-mechanic, half-programmer.',
    impact: 'You keep the transportation of the future on the road. You enable clean, efficient mobility for millions.',
    relevanceMatch: "Your interest in 'how things work' and comfort with digital electronics makes you a pioneer in EV technology.",
    comparableJob: {
      name: 'Automotive Engineer',
      credentials: 'B.S. in Mechanical Engineering',
      timeToCertify: '4 Years',
      startingSalary: 75000,
      medianSalary10yr: 118000,
      avgCost: '$130,000+',
      dayInLife: 'Designing the battery cooling systems and motor enclosures for next-gen electric vehicles. You’ll be doing FEA analysis and thermal simulations.',
      impact: 'You design the sustainable cars of 2030, making electric transport more accessible and high-performing.',
      skills: ['FEA Analysis', 'Thermal Dynamics', 'Hardware Design', 'Embedded Systems'],
      trainingModel: 'FOUR_YEAR_DEGREE'
    }
  },
  {
    id: 'marine-mech',
    name: 'Marine Engine Technician',
    title: 'The Marine Tech',
    trainingModel: 'COMMUNITY_COLLEGE',
    credentials: 'Marine Systems Certification',
    timeToCertify: '12-18 Months',
    startingSalary: 44000,
    medianSalary10yr: 76000,
    demand: 'Medium',
    keywords: ['boats', 'water', 'outdoors', 'engines', 'fixing', 'travel', 'ocean'],
    skills: ['Internal Combustion', 'Hydraulic Systems', 'Marine Electronics', 'Corrosion Control'],
    dayInLife: 'Repairing outboard and inboard engines at a marina. You spend your day working by the water, fixing everything from jet skis to luxury yachts.',
    impact: 'You keep the maritime economy moving and help families enjoy the great outdoors safely.',
    relevanceMatch: "Your love for the water and mechanical aptitude make you a perfect candidate for marine propulsion systems.",
    comparableJob: {
      name: 'Naval Architect',
      credentials: 'B.S. in Naval Architecture',
      timeToCertify: '4 Years',
      startingSalary: 70000,
      medianSalary10yr: 115000,
      avgCost: '$145,000+',
      dayInLife: 'Designing hull structures and propulsion layouts for new vessels. You work with fluid dynamics and stability calculations.',
      impact: 'You design the ships that transport 90% of global trade efficiently.',
      skills: ['Hydrodynamics', 'CAD Design', 'Stability Analysis', 'Project Planning'],
      trainingModel: 'FOUR_YEAR_DEGREE'
    }
  },
  {
    id: 'wind-tech',
    name: 'Wind Turbine Technician',
    title: 'The Wind Tech',
    trainingModel: 'EMPLOYER_SPONSORED',
    credentials: 'GWO Safety Certification',
    timeToCertify: '6-12 Months',
    startingSalary: 54000,
    medianSalary10yr: 86000,
    demand: 'Very High',
    keywords: ['heights', 'adventure', 'outdoors', 'energy', 'climbing', 'electrical', 'mechanical'],
    skills: ['High-Altitude Safety', 'Hydraulic Troubleshooting', 'SCADA Systems', 'Physical Fitness'],
    dayInLife: 'Climbing 300 feet up a turbine to service the nacelle. You spend your day with a breathtaking view, maintaining the machines that power the grid with clean wind.',
    impact: 'You are a vital part of the energy transition, keeping clean power flowing 24/7.',
    relevanceMatch: "Your lack of fear of heights and interest in high-tech machinery make you an elite candidate for wind energy.",
    comparableJob: {
      name: 'Energy Systems Engineer',
      credentials: 'B.S. in Energy Engineering',
      timeToCertify: '4 Years',
      startingSalary: 72000,
      medianSalary10yr: 120000,
      avgCost: '$135,000+',
      dayInLife: 'Optimizing grid integration for wind farms and designing energy storage solutions to handle variable power loads.',
      impact: 'You solve the most complex engineering hurdles of the renewable transition.',
      skills: ['Grid Analysis', 'Systems Modeling', 'Energy Markets', 'Optimization'],
      trainingModel: 'FOUR_YEAR_DEGREE'
    }
  },
  {
    id: 'precision-machinist',
    name: 'CNC Precision Machinist',
    title: 'The Machinist',
    trainingModel: 'COMMUNITY_COLLEGE',
    credentials: 'NIMS Certification',
    timeToCertify: '12-24 Months',
    startingSalary: 46000,
    medianSalary10yr: 80000,
    demand: 'High',
    keywords: ['math', 'precision', 'technology', 'making', 'metal', 'computers', 'design'],
    skills: ['G-Code Programming', 'Micrometer Measurement', 'Metallurgy', 'Technical Drawing'],
    dayInLife: 'Programming multi-axis CNC machines to cut aerospace or medical parts with tolerances thinner than a human hair.',
    impact: 'You create the high-precision components that make modern medicine and space travel possible.',
    relevanceMatch: "Your obsession with detail and math skills will turn raw metal into functional art as a precision machinist.",
    comparableJob: {
      name: 'Manufacturing Engineer',
      credentials: 'B.S. in Manufacturing Engineering',
      timeToCertify: '4 Years',
      startingSalary: 70000,
      medianSalary10yr: 110000,
      avgCost: '$120,000+',
      dayInLife: 'Designing entire production lines and selecting the machining processes to maximize quality and throughput.',
      impact: 'You redefine how everything from smartphones to cars is mass-produced at high quality.',
      skills: ['Process Design', 'Six Sigma', 'Lean Manufacturing', 'Automation'],
      trainingModel: 'FOUR_YEAR_DEGREE'
    }
  }
,
  {
    "id": "robotics-tech",
    "name": "Industrial Robotics Tech",
    "title": "The Robotics Expert",
    "trainingModel": "MANUFACTURER_CERTIFICATION",
    "credentials": "FANUC/ABB Certification",
    "timeToCertify": "6-12 Months",
    "startingSalary": 55000,
    "medianSalary10yr": 90000,
    "demand": "Explosive",
    "keywords": [
      "robots",
      "coding",
      "automation",
      "electronics",
      "math",
      "fixing",
      "logic"
    ],
    "skills": [
      "PLC Programming",
      "Mechatronics",
      "Predictive Maintenance",
      "Circuit Diagnosis"
    ],
    "dayInLife": "You spend your day at an automated manufacturing plant, programming robotic arms to perform high-precision tasks and troubleshooting the sensors that keep the line moving.",
    "impact": "You keep the modern world turning by building and maintaining the automation that powers our economy.",
    "relevanceMatch": "Your interest in coding and logic makes you a perfect fit for programming the next generation of industrial robots.",
    "comparableJob": {
      "name": "Automation Engineer",
      "credentials": "B.S. in Robotics Engineering",
      "timeToCertify": "4 Years",
      "startingSalary": 78000,
      "medianSalary10yr": 130000,
      "avgCost": "$150,000+",
      "dayInLife": "Designing the entire control system for a new automated factory. You write the software architecture that thousands of robots follow.",
      "impact": "You redefine how everything from electric cars to heart valves is manufactured.",
      "skills": [
        "Software Architecture",
        "System Modeling",
        "Deep Learning",
        "Kinematics"
      ],
      "trainingModel": "FOUR_YEAR_DEGREE"
    }
  },
  {
    "id": "solar-installer",
    "name": "Solar Power Specialist",
    "title": "The Solar Tech",
    "trainingModel": "EMPLOYER_SPONSORED",
    "credentials": "NABCEP Certification",
    "timeToCertify": "3-6 Months",
    "startingSalary": 45000,
    "medianSalary10yr": 78000,
    "demand": "Very High",
    "keywords": [
      "outdoors",
      "energy",
      "climbing",
      "environment",
      "building",
      "sun",
      "nature"
    ],
    "skills": [
      "Photovoltaics",
      "Electrical Wiring",
      "Roofing Safety",
      "System Commissioning"
    ],
    "dayInLife": "Working outdoors on residential and commercial rooftops, installing high-efficiency panels and configuring inverter systems to feed power back into the grid.",
    "impact": "You are on the front lines of the clean energy revolution, helping families and businesses reach energy independence.",
    "relevanceMatch": "Your love for the outdoors and interest in the environment align perfectly with a career in renewable energy installation.",
    "comparableJob": {
      "name": "Sustainable Energy Engineer",
      "credentials": "B.S. in Environmental Engineering",
      "timeToCertify": "4 Years",
      "startingSalary": 68000,
      "medianSalary10yr": 110000,
      "avgCost": "$125,000+",
      "dayInLife": "Analyzing regional solar patterns and designing large-scale solar farms to optimize power generation for entire cities.",
      "impact": "You design the sustainable power grids that will support future generations.",
      "skills": [
        "Geospatial Analysis",
        "Thermodynamics",
        "Policy Analysis",
        "Energy Storage Design"
      ],
      "trainingModel": "FOUR_YEAR_DEGREE"
    }
  },
  {
    "id": "telecom-installer",
    "name": "Fiber Optic Technician",
    "title": "The Connecter",
    "trainingModel": "COMMUNITY_COLLEGE",
    "credentials": "FOA Certification",
    "timeToCertify": "3-6 Months",
    "startingSalary": 48000,
    "medianSalary10yr": 85000,
    "demand": "High",
    "keywords": [
      "fiber",
      "internet",
      "communication",
      "tech",
      "building",
      "safety",
      "networks"
    ],
    "skills": [
      "Fusion Splicing",
      "OTDR Testing",
      "Network Design",
      "Signal Troubleshooting"
    ],
    "dayInLife": "Deploying high-speed fiber networks into new neighborhoods. You manage the delicate fusion splicing that makes gigabit internet possible.",
    "impact": "You provide the literal infrastructure for the digital age, connecting people to information and each other.",
    "relevanceMatch": "Your interest in technology and building things with your hands makes you an ideal candidate for building the next generation of broadband.",
    "comparableJob": {
      "name": "Network Engineer",
      "credentials": "B.S. in Telecommunications",
      "timeToCertify": "4 Years",
      "startingSalary": 72000,
      "medianSalary10yr": 118000,
      "avgCost": "$135,000+",
      "dayInLife": "Architecting the global routing tables and switching infrastructure that runs on the fiber optics laid by technicians.",
      "impact": "You design the invisible webs that enable global communication in milliseconds.",
      "skills": [
        "Network Protocol Design",
        "Cybersecurity",
        "Cloud Optimization",
        "Traffic Management"
      ],
      "trainingModel": "FOUR_YEAR_DEGREE"
    }
  },
  {
    "id": "dental-assistant-special",
    "name": "Dental Specialist",
    "title": "The Dental Pro",
    "trainingModel": "COMMUNITY_COLLEGE",
    "credentials": "RDA / EFDA Certification",
    "timeToCertify": "9-12 Months",
    "startingSalary": 42000,
    "medianSalary10yr": 65000,
    "demand": "High",
    "keywords": [
      "healthcare",
      "science",
      "helping",
      "detail",
      "precison",
      "people",
      "biology"
    ],
    "skills": [
      "Radiography",
      "Surgical Assisting",
      "Patient Interaction",
      "Medical Software"
    ],
    "dayInLife": "Working alongside dentists to perform complex procedures, managing digital imaging, and ensuring patient comfort throughout their clinical journey.",
    "impact": "You provide essential healthcare and confidence-boosting smiles to your community every day.",
    "relevanceMatch": "Your interest in science and helping people makes you a natural for the clinical environment of specialized dentistry.",
    "comparableJob": {
      "name": "Dentist",
      "credentials": "Doctor of Dental Surgery (DDS)",
      "timeToCertify": "8 Years",
      "startingSalary": 160000,
      "medianSalary10yr": 250000,
      "avgCost": "$350,000+",
      "dayInLife": "Performing surgeries, diagnosing complex oral pathologies, and running a specialized medical practice.",
      "impact": "You are the ultimate authority in oral health, solving the most complex medical and aesthetic dental challenges.",
      "skills": [
        "Complex Surgery",
        "Pathology Diagnosis",
        "Pharmacology",
        "Practice Management"
      ],
      "trainingModel": "FOUR_YEAR_DEGREE"
    }
  },
  {
    "id": "marine-mech-special",
    "name": "Advanced Marine Technician",
    "title": "The Marine Mech",
    "trainingModel": "MANUFACTURER_CERTIFICATION",
    "credentials": "Yamaha/Mercury Master Tech",
    "timeToCertify": "12-18 Months",
    "startingSalary": 48000,
    "medianSalary10yr": 88000,
    "demand": "High",
    "keywords": [
      "boats",
      "ocean",
      "water",
      "engines",
      "fixing",
      "adventure",
      "machines"
    ],
    "skills": [
      "Marine Electronics",
      "Outboard Diagnostics",
      "Hydraulics",
      "Corrosion Control"
    ],
    "dayInLife": "You work on a dock or a specialized marine shop, diagnosing complex engine issues on high-performance vessels and managing electrical systems in harsh saltwater environments.",
    "impact": "You keep the maritime industry and ocean enthusiasts moving safely across the water.",
    "relevanceMatch": "Your interest in engines and love for the water make you a prime candidate for the specialized world of marine mechanics.",
    "comparableJob": {
      "name": "Naval Architect",
      "credentials": "B.S. in Naval Engineering",
      "timeToCertify": "4 Years",
      "startingSalary": 74000,
      "medianSalary10yr": 130000,
      "avgCost": "$160,000+",
      "dayInLife": "Designing the hull forms and propulsion systems that marine mechanics maintain. You spend your day in CAD and simulation tanks.",
      "impact": "You design the ships that transport 90% of global trade.",
      "skills": [
        "Hydrodynamics",
        "Structural Design",
        "Computational Fluid Dynamics",
        "Ship Stability"
      ],
      "trainingModel": "FOUR_YEAR_DEGREE"
    }
  },
  {
    "id": "auto-refinishing",
    "name": "Automotive Refinishing Tech",
    "title": "The Refinishing Artist",
    "trainingModel": "EMPLOYER_SPONSORED",
    "credentials": "I-CAR Platinum Certification",
    "timeToCertify": "6-12 Months",
    "startingSalary": 42000,
    "medianSalary10yr": 78000,
    "demand": "High",
    "keywords": ["art", "makeup", "drawing", "sewing", "colors", "steady hands", "precision", "aesthetic", "fine motor"],
    "skills": ["Color Matching", "Spray Technique", "Surface Prep", "Chemical Safety"],
    "dayInLife": "You spend your day in a high-tech spray booth, mixing custom colors and applying flawlessly smooth finishes to luxury vehicles. It requires the eye of an artist and the hands of a surgeon.",
    "impact": "You restore beauty and value. Your work is the final, most visible step in bringing a machine back to life.",
    "relevanceMatch": "Your artistic talent and steady hand translate perfectly to the precision world of high-end automotive refinishing.",
    "comparableJob": {
      "name": "Industrial Designer",
      "credentials": "B.A. in Industrial Design",
      "timeToCertify": "4 Years",
      "startingSalary": 62000,
      "medianSalary10yr": 105000,
      "avgCost": "$110,000+",
      "dayInLife": "Designing the aesthetic and functional form of products using CAD software and physical prototyping.",
      "impact": "You define how the world looks and feels through the products we use every day.",
      "skills": ["3D Modeling", "User Research", "Material Science", "Sketching"],
      "trainingModel": "FOUR_YEAR_DEGREE"
    }
  },
  {
    "id": "dental-lab-tech",
    "name": "Dental Laboratory Technician",
    "title": "The Dental Sculptor",
    "trainingModel": "COMMUNITY_COLLEGE",
    "credentials": "Certified Dental Technician (CDT)",
    "timeToCertify": "12-24 Months",
    "startingSalary": 45000,
    "medianSalary10yr": 82000,
    "demand": "Very High",
    "keywords": ["art", "sculpting", "sewing", "jewelry", "detail", "makeup", "drawing", "precision", "fine motor"],
    "skills": ["Micro-Sculpting", "Ceramics", "CAD/CAM", "Anatomy"],
    "dayInLife": "Using microscopes and fine instruments to hand-craft porcelain crowns and dentures. You balance medical durability with fine art aesthetics.",
    "impact": "You restore confidence and health. Every piece you create helps someone smile and eat properly again.",
    "relevanceMatch": "Your background in fine arts and detailed work makes you an elite candidate for medical dental sculpting.",
    "comparableJob": {
      "name": "Prosthetist",
      "credentials": "Master's in Orthotics and Prosthetics",
      "timeToCertify": "6 Years",
      "startingSalary": 75000,
      "medianSalary10yr": 120000,
      "avgCost": "$140,000+",
      "dayInLife": "Designing and fitting complex prosthetic limbs for patients with limb loss.",
      "impact": "You use advanced engineering to restore mobility and independence to your patients.",
      "skills": ["Biomechanics", "Patient Care", "Advanced Fabrication", "Physiology"],
      "trainingModel": "FOUR_YEAR_DEGREE"
    }
  },
  {
    "id": "historic-restoration",
    "name": "Historic Restoration Specialist",
    "title": "The History Keeper",
    "trainingModel": "PAID_APPRENTICESHIP",
    "credentials": "Master Preservationist Cert",
    "timeToCertify": "2-4 Years",
    "startingSalary": 40000,
    "medianSalary10yr": 85000,
    "demand": "Medium",
    "keywords": ["art", "history", "antiques", "woodworking", "preservation", "sewing", "detail", "architectural"],
    "skills": ["Traditional Carpentry", "Masonry", "Material Science", "Research"],
    "dayInLife": "Restoring a 19th-century cathedral or landmark. You use traditional tools and materials to ensure that history is preserved for future generations.",
    "impact": "You save the soul of our cities. Without you, the craftsmanship of the past would be lost forever.",
    "relevanceMatch": "Your love for history and artistic patience makes you a vital link in preserving our cultural architectural heritage.",
    "comparableJob": {
      "name": "Architectural Historian",
      "credentials": "M.A. in Historic Preservation",
      "timeToCertify": "6 Years",
      "startingSalary": 58000,
      "medianSalary10yr": 95000,
      "avgCost": "$125,000+",
      "dayInLife": "Researching and documenting the historical significance of buildings and managing preservation policy.",
      "impact": "You provide the academic and legal framework to protect our shared history.",
      "skills": ["Archival Research", "Report Writing", "Policy Analysis", "History"],
      "trainingModel": "FOUR_YEAR_DEGREE"
    }
  },
  {
    "id": "bim-coordinator",
    "name": "BIM Coordinator",
    "title": "The Digital Architect",
    "trainingModel": "EMPLOYER_SPONSORED",
    "credentials": "Revit/Navisworks Professional",
    "timeToCertify": "6-12 Months",
    "startingSalary": 58000,
    "medianSalary10yr": 105000,
    "demand": "Explosive",
    "keywords": ["gaming", "minecraft", "strategy", "3d", "computers", "logic", "puzzles", "modding", "gamer"],
    "skills": ["Virtual Construction", "Clash Detection", "3D Modeling", "Coordination"],
    "dayInLife": "You build the entire building in a virtual 3D environment before a single brick is laid. You resolve 'clashes' between pipes and beams in a digital world.",
    "impact": "You save millions in waste. By solving problems in the digital world, you make physical construction faster and safer.",
    "relevanceMatch": "Your experience in 3D gaming worlds (like Minecraft) and strategic puzzles makes you a natural for BIM coordination.",
    "comparableJob": {
      "name": "Virtual Reality Developer",
      "credentials": "B.S. in Computer Science",
      "timeToCertify": "4 Years",
      "startingSalary": 82000,
      "medianSalary10yr": 145000,
      "avgCost": "$140,000+",
      "dayInLife": "Developing the high-level interactive code and environments for VR gaming and simulations.",
      "impact": "You create entirely new worlds and experiences for education and entertainment.",
      "skills": ["C# Programming", "Game Engine Logic", "UX Design", "Graphics Programming"],
      "trainingModel": "FOUR_YEAR_DEGREE"
    }
  },
  {
    "id": "ndt-technician",
    "name": "Non-Destructive Testing (NDT) Tech",
    "title": "The Diagnostic Detective",
    "trainingModel": "COMMUNITY_COLLEGE",
    "credentials": "ASNT Level II Certification",
    "timeToCertify": "12-18 Months",
    "startingSalary": 52000,
    "medianSalary10yr": 95000,
    "demand": "High",
    "keywords": ["puzzles", "strategy", "detective", "science", "physics", "logic", "safety", "gaming", "how things work"],
    "skills": ["Ultrasonic Testing", "Radiography", "Eddy Current", "Analysis"],
    "dayInLife": "Using X-rays and ultrasound to 'see' through bridge beams or airplane wings to find tiny hidden cracks before they become dangerous.",
    "impact": "You stop disasters before they happen. You are the invisible line of defense keeping infrastructure safe.",
    "relevanceMatch": "Your strategic 'detective' mindset and interest in how things work make you perfect for high-stakes diagnostic testing.",
    "comparableJob": {
      "name": "Forensic Engineer",
      "credentials": "B.S in Mechanical Engineering + P.E.",
      "timeToCertify": "6-8 Years",
      "startingSalary": 85000,
      "medianSalary10yr": 135000,
      "avgCost": "$150,000+",
      "dayInLife": "Investigating the technical reasons behind structural failures and providing expert testimony.",
      "impact": "You provide the truth in the aftermath of failures to ensure they never happen again.",
      "skills": ["Failure Theory", "Legal Tech", "Materials Analysis", "Physics"],
      "trainingModel": "FOUR_YEAR_DEGREE"
    }
  },
  {
    "id": "aviation-avionics",
    "name": "Aviation Avionics Tech",
    "title": "The Flight Digitizer",
    "trainingModel": "MANUFACTURER_CERTIFICATION",
    "credentials": "NCATT AET Certification",
    "timeToCertify": "12-24 Months",
    "startingSalary": 58000,
    "medianSalary10yr": 98000,
    "demand": "High",
    "keywords": ["gaming", "computers", "electronics", "strategy", "logic", "puzzles", "flying", "systems"],
    "skills": ["Digital Flight Systems", "Radar Maintenance", "Fiber Optics", "Programming"],
    "dayInLife": "Working inside the cockpit of a jet engine, troubleshooting the complex digital networks that control navigation and autopilot.",
    "impact": "You make flight possible. You are the digital bridge between the pilot and the machine.",
    "relevanceMatch": "Your comfort with complex digital systems and strategic logic makes you an elite candidate for avionics tech.",
    "comparableJob": {
      "name": "Systems Architect",
      "credentials": "B.S. in Computer Engineering",
      "timeToCertify": "4 Years",
      "startingSalary": 90000,
      "medianSalary10yr": 165000,
      "avgCost": "$160,000+",
      "dayInLife": "Designing the high-level digital architecture for aerospace or telecommunications hardware.",
      "impact": "You envision the platforms that will power the next generation of communication.",
      "skills": ["Hardware Architecture", "Signal Processing", "Embedded Logic", "Strategic Planning"],
      "trainingModel": "FOUR_YEAR_DEGREE"
    }
  },
  {
    "id": "water-treatment",
    "name": "Water Treatment Operator",
    "title": "The Public Health Guardian",
    "trainingModel": "GOVERNMENT_FUNDED",
    "credentials": "State Grade II Operator License",
    "timeToCertify": "6-12 Months",
    "startingSalary": 48000,
    "medianSalary10yr": 85000,
    "demand": "Very High",
    "keywords": ["nature", "chemistry", "outdoors", "helping", "science", "animals", "environment", "public health"],
    "skills": ["Chemical Analysis", "System Monitoring", "Microbiology", "Compliance"],
    "dayInLife": "Conducting lab tests on local water supplies and managing the massive chemical and biological systems that provide clean water to your city.",
    "impact": "You save lives every day. Without your technical work, modern cities would be uninhabitable due to disease.",
    "relevanceMatch": "Your interest in chemistry and 'helping others' finds a vital home in the essential world of public water safety.",
    "comparableJob": {
      "name": "Environmental Scientist",
      "credentials": "B.S. in Environmental Science",
      "timeToCertify": "4 Years",
      "startingSalary": 62000,
      "medianSalary10yr": 110000,
      "avgCost": "$115,000+",
      "dayInLife": "Researching human impact on ecosystems and developing policies to mitigate pollution.",
      "impact": "You provide the scientific evidence needed to heal and protect our natural world.",
      "skills": ["Data Collection", "Ecology", "Technical Writing", "Sample Analysis"],
      "trainingModel": "FOUR_YEAR_DEGREE"
    }
  },
  {
    "id": "land-surveyor",
    "name": "Land Surveyor",
    "title": "The Wild Mathematician",
    "trainingModel": "PAID_APPRENTICESHIP",
    "credentials": "LSIT Certification",
    "timeToCertify": "2-4 Years",
    "startingSalary": 45000,
    "medianSalary10yr": 92000,
    "demand": "High",
    "keywords": ["nature", "outdoors", "hiking", "math", "geometry", "strategy", "history", "mapping"],
    "skills": ["Geospatial Math", "GPS Tech", "Legal Research", "Physical Stamina"],
    "dayInLife": "Trekking through wilderness or city centers with high-tech laser equipment today to define the legal boundaries of the world.",
    "impact": "You define property and progress. Your measurements are the basis for every road and building ever made.",
    "relevanceMatch": "Your love for the outdoors and 'math in the wild' makes you a perfect fit for a career in land surveying.",
    "comparableJob": {
      "name": "Geodetic Engineer",
      "credentials": "B.S. in Geodesy/Civil Engineering",
      "timeToCertify": "4 Years",
      "startingSalary": 70000,
      "medianSalary10yr": 115000,
      "avgCost": "$120,000+",
      "dayInLife": "Managing global coordinate systems and performing high-level mathematical modeling of the Earth's shape.",
      "impact": "You enable the global mapping and GPS systems that our modern world relies on.",
      "skills": ["Advanced Calculus", "Satellite Tech", "Spherical Geometry", "Data Modeling"],
      "trainingModel": "FOUR_YEAR_DEGREE"
    }
  },
  {
    "id": "biomed-tech",
    "name": "Bio-Medical Equipment Tech",
    "title": "The Life-Link Mechanic",
    "trainingModel": "COMMUNITY_COLLEGE",
    "credentials": "CBET Certification",
    "timeToCertify": "12-24 Months",
    "startingSalary": 55000,
    "medianSalary10yr": 88000,
    "demand": "High",
    "keywords": ["helping", "fixing", "science", "healthcare", "machines", "logic", "biology", "life-saving"],
    "skills": ["Medical Electronics", "Calibration", "Diagnostic Repair", "Safety Standards"],
    "dayInLife": "Working in a hospital, repairing critical life-support systems, MRI machines, and robotic surgery tools to ensure they never fail.",
    "impact": "You keep patients alive. Behind every successful surgery is a technician who ensured the equipment was perfect.",
    "relevanceMatch": "Your desire to 'help others' and love for fixing machines find an essential intersection in medical technology.",
    "comparableJob": {
      "name": "Biomedical Engineer",
      "credentials": "B.S. in Biomedical Engineering",
      "timeToCertify": "4 Years",
      "startingSalary": 74000,
      "medianSalary10yr": 122000,
      "avgCost": "$140,000+",
      "dayInLife": "Designing new medical devices and artificial organs in a laboratory setting.",
      "impact": "You invent the future of medicine through engineering and biology.",
      "skills": ["Tissue Engineering", "Analog Design", "Prototyping", "Anatomy"],
      "trainingModel": "FOUR_YEAR_DEGREE"
    }
  },
  {
    "id": "tower-tech",
    "name": "Tower Technician",
    "title": "The High-Altitude Spiderman",
    "trainingModel": "EMPLOYER_SPONSORED",
    "credentials": "ComTrain/OSHA High Climb Cert",
    "timeToCertify": "3-6 Months",
    "startingSalary": 52000,
    "medianSalary10yr": 90000,
    "demand": "Very High",
    "keywords": ["heights", "climbing", "adventure", "physical", "outdoors", "building", "electronics", "adrenaline"],
    "skills": ["High-Climb Rescue", "Antenna Alignment", "Structural Safety", "Testing"],
    "dayInLife": "Climbing 500 feet into the air to maintain the 5G and satellite networks that connect the entire world. It's high-stakes and high-adrenaline.",
    "impact": "You connect the planet. You ensure that everyone, everywhere has access to the digital economy.",
    "relevanceMatch": "Your lack of fear of heights and love for 'physical adventure' makes you a top-tier candidate for tower technology.",
    "comparableJob": {
      "name": "Telecommunications Engineer",
      "credentials": "B.S. in Electrical Engineering",
      "timeToCertify": "4 Years",
      "startingSalary": 75000,
      "medianSalary10yr": 118000,
      "avgCost": "$130,000+",
      "dayInLife": "Designing the signal propagation models and network architecture for global wireless providers.",
      "impact": "You solve the complex electromagnetic puzzles that make wireless communication possible at scale.",
      "skills": ["RF Theory", "Waveform Design", "Network Security", "Strategic Planning"],
      "trainingModel": "FOUR_YEAR_DEGREE"
    }
  },
  {
    "id": "millwright",
    "name": "Master Millwright",
    "title": "The Industrial Giant",
    "trainingModel": "PAID_APPRENTICESHIP",
    "credentials": "Red Seal / Journeyman Millwright",
    "timeToCertify": "4 Years",
    "startingSalary": 58000,
    "medianSalary10yr": 110000,
    "demand": "High",
    "keywords": ["machinery", "building", "physical", "strategy", "fixing", "logic", "precision", "heavy industrial"],
    "skills": ["Precision Leveling", "Turbine Mounting", "Hydraulics", "Welding"],
    "dayInLife": "Moving and installing massive industrial machines that weigh hundreds of tons, requiring pinpoint accuracy and heavy machinery expertise.",
    "impact": "You build the world's production capacity. Without millwrights, no factory or power plant could ever be built.",
    "relevanceMatch": "Your love for 'building big things' and mechanical strategy makes you perfect for the grand scale of master millwright work.",
    "comparableJob": {
      "name": "Plant Engineer",
      "credentials": "B.S. in Mechanical Engineering",
      "timeToCertify": "4 Years",
      "startingSalary": 78000,
      "medianSalary10yr": 125000,
      "avgCost": "$140,000+",
      "dayInLife": "Managing the maintenance and efficiency strategies for massive industrial facilities.",
      "impact": "You optimize the entire lifecycle of industrial infrastructure for efficiency and sustainability.",
      "skills": ["Predictive Maintenance", "Operations Management", "Thermodynamics", "Systems Safety"],
      "trainingModel": "FOUR_YEAR_DEGREE"
    }
  },
  {
    "id": "ironworker",
    "name": "Ironworker / Rigging Specialist",
    "title": "The Sky Skeleton Builder",
    "trainingModel": "PAID_APPRENTICESHIP",
    "credentials": "Journeyman Ironworker",
    "timeToCertify": "3-4 Years",
    "startingSalary": 48000,
    "medianSalary10yr": 95000,
    "demand": "High",
    "keywords": ["heights", "physical", "building", "metal", "climbing", "construction", "adventure", "heavy industrial"],
    "skills": ["Structural Welding", "Rigging Math", "Blueprint Reading", "Teamwork"],
    "dayInLife": "Walking on steel beams hundreds of feet in the air, connecting the structural skeleton of the city's newest skyscraper.",
    "impact": "You define the skyline. You build the bones of our cities, making modern high-rise living possible.",
    "relevanceMatch": "Your physical stamina and comfort with 'heights' makes you the backbone of structural construction.",
    "comparableJob": {
      "name": "Structural Engineer",
      "credentials": "B.S. in Civil/Structural Engineering",
      "timeToCertify": "4 Years",
      "startingSalary": 72000,
      "medianSalary10yr": 120000,
      "avgCost": "$125,000+",
      "dayInLife": "Calculating the precise load capacities and wind stresses that the steel skeleton must withstand.",
      "impact": "You provide the mathematical certainty that skyscrapers remain safe and standing for centuries.",
      "skills": ["Finite Element Analysis", "Material Stress", "Code Compliance", "Calculus"],
      "trainingModel": "FOUR_YEAR_DEGREE"
    }
  }
];
