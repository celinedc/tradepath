export const ETHNICITIES = [
  {
    "id": "white",
    "name": "White",
    "color": "#94a3b8"
  },
  {
    "id": "black",
    "name": "Black",
    "color": "#fbbf24"
  },
  {
    "id": "hispanic",
    "name": "Hispanic",
    "color": "#10b981"
  },
  {
    "id": "asian",
    "name": "Asian",
    "color": "#8b5cf6"
  },
  {
    "id": "multi",
    "name": "Multi-racial",
    "color": "#ec4899"
  }
];

export const TRADE_CAREERS = [
  {
    "id": "undecided",
    "name": "Exploring",
    "sector": "Exploring",
    "base": 48250,
    "demand": "Very High",
    "growth": "6%",
    "payGrowth": [
      {
        "year": "1",
        "white": 48250,
        "black": 39565,
        "hispanic": 41012,
        "asian": 50662,
        "multi": 44390
      },
      {
        "year": "5",
        "white": 56450,
        "black": 46289,
        "hispanic": 47982,
        "asian": 59272,
        "multi": 51934
      },
      {
        "year": "10",
        "white": 68500,
        "black": 56170,
        "hispanic": 58225,
        "asian": 71925,
        "multi": 63020
      },
      {
        "year": "15",
        "white": 82000,
        "black": 67240,
        "hispanic": 69700,
        "asian": 86100,
        "multi": 75440
      },
      {
        "year": "20",
        "white": 98000,
        "black": 80360,
        "hispanic": 83300,
        "asian": 102900,
        "multi": 90160
      },
      {
        "year": "25",
        "white": 118000,
        "black": 96760,
        "hispanic": 100300,
        "asian": 123900,
        "multi": 108560
      },
      {
        "year": "30",
        "white": 142000,
        "black": 116440,
        "hispanic": 120700,
        "asian": 149100,
        "multi": 130640
      },
      {
        "year": "35",
        "white": 172000,
        "black": 141040,
        "hispanic": 146200,
        "asian": 180600,
        "multi": 158240
      },
      {
        "year": "40",
        "white": 208000,
        "black": 170560,
        "hispanic": 176800,
        "asian": 218400,
        "multi": 191360
      }
    ],
    "aptitude": "Ideal for students in the discovery phase. This path provides a comparative look at trade career averages while you explore specific skilled trades.",
    "competencies": [
      {
        "title": "Discovery Phase",
        "desc": "Evaluating interests across multiple high-demand sectors.",
        "icon": "Search",
        "color": "text-safety-blue"
      },
      {
        "title": "Aptitude Mapping",
        "desc": "Identifying natural strengths through hands-on sampling.",
        "icon": "Compass",
        "color": "text-indigo-500"
      },
      {
        "title": "Market Analysis",
        "desc": "Comparing longitudinal wealth outcomes across core trades.",
        "icon": "TrendingUp",
        "color": "text-emerald-500"
      }
    ],
    "comparableJob": {
      "name": "General Bachelor's Degree",
      "startingSalary": 58500,
      "avgCost": "$125,000"
    }
  },
  {
    "id": "electrician",
    "name": "Electrician",
    "sector": "Construction",
    "base": 55000,
    "demand": "High",
    "growth": "7%",
    "payGrowth": [
      {
        "year": "1",
        "white": 55000,
        "black": 45100,
        "hispanic": 46750,
        "asian": 57750,
        "multi": 50600
      },
      {
        "year": "5",
        "white": 64342,
        "black": 52761,
        "hispanic": 54691,
        "asian": 67559,
        "multi": 59195
      },
      {
        "year": "10",
        "white": 78282,
        "black": 64191,
        "hispanic": 66540,
        "asian": 82196,
        "multi": 72020
      },
      {
        "year": "15",
        "white": 95242,
        "black": 78099,
        "hispanic": 80956,
        "asian": 100004,
        "multi": 87623
      },
      {
        "year": "20",
        "white": 115877,
        "black": 95019,
        "hispanic": 98495,
        "asian": 121671,
        "multi": 106607
      },
      {
        "year": "25",
        "white": 140982,
        "black": 115605,
        "hispanic": 119834,
        "asian": 148031,
        "multi": 129703
      },
      {
        "year": "30",
        "white": 171526,
        "black": 140651,
        "hispanic": 145797,
        "asian": 180102,
        "multi": 157804
      },
      {
        "year": "35",
        "white": 208687,
        "black": 171124,
        "hispanic": 177384,
        "asian": 219122,
        "multi": 191992
      },
      {
        "year": "40",
        "white": 253900,
        "black": 208198,
        "hispanic": 215815,
        "asian": 266595,
        "multi": 233588
      }
    ],
    "aptitude": "Logical thinking, practical math, and steady hand-eye coordination for complex wiring and safety protocols.",
    "competencies": [
      {
        "title": "Circuit Logic",
        "desc": "Understanding flow and interruptions in electrical systems.",
        "icon": "Zap",
        "color": "text-amber-500"
      },
      {
        "title": "Precision Wiring",
        "desc": "Highly detailed manual work in tight electrical boxes.",
        "icon": "Target",
        "color": "text-blue-500"
      },
      {
        "title": "Safety Protocol",
        "desc": "Rigorous adherence to National Electrical Code (NEC).",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ],
    "comparableJob": {
      "name": "Electrical Engineer",
      "startingSalary": 72000,
      "avgCost": "$120,000"
    }
  },
  {
    "id": "hvac",
    "name": "HVAC Technician",
    "sector": "Energy & Utilities",
    "base": 50000,
    "demand": "Very High",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 50000,
        "black": 41000,
        "hispanic": 42500,
        "asian": 52500,
        "multi": 46000
      },
      {
        "year": "5",
        "white": 57376,
        "black": 47048,
        "hispanic": 48770,
        "asian": 60245,
        "multi": 52786
      },
      {
        "year": "10",
        "white": 68145,
        "black": 55879,
        "hispanic": 57923,
        "asian": 71552,
        "multi": 62693
      },
      {
        "year": "15",
        "white": 80935,
        "black": 66366,
        "hispanic": 68795,
        "asian": 84981,
        "multi": 74460
      },
      {
        "year": "20",
        "white": 96125,
        "black": 78823,
        "hispanic": 81706,
        "asian": 100931,
        "multi": 88435
      },
      {
        "year": "25",
        "white": 114166,
        "black": 93616,
        "hispanic": 97041,
        "asian": 119875,
        "multi": 105033
      },
      {
        "year": "30",
        "white": 135594,
        "black": 111187,
        "hispanic": 115255,
        "asian": 142374,
        "multi": 124746
      },
      {
        "year": "35",
        "white": 161043,
        "black": 132055,
        "hispanic": 136887,
        "asian": 169095,
        "multi": 148160
      },
      {
        "year": "40",
        "white": 191269,
        "black": 156840,
        "hispanic": 162578,
        "asian": 200832,
        "multi": 175967
      }
    ],
    "aptitude": "Mechanical troubleshooting, understanding of thermodynamics, and technical problem-solving skills.",
    "competencies": [
      {
        "title": "Thermodynamics",
        "desc": "Mastery of heat transfer and refrigeration cycles.",
        "icon": "Wind",
        "color": "text-blue-400"
      },
      {
        "title": "System Diagnostics",
        "desc": "Mental mapping of complex airflow and liquid systems.",
        "icon": "Brain",
        "color": "text-purple-500"
      },
      {
        "title": "Mechanical Repair",
        "desc": "Hands-on fix logic for compressors and motors.",
        "icon": "Wrench",
        "color": "text-industrial-500"
      }
    ],
    "comparableJob": {
      "name": "Mechanical Engineer",
      "startingSalary": 68000,
      "avgCost": "$115,000"
    }
  },
  {
    "id": "welder",
    "name": "Welder",
    "sector": "Industrial & Manufacturing",
    "base": 48000,
    "demand": "Moderate",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 48000,
        "black": 39360,
        "hispanic": 40800,
        "asian": 50400,
        "multi": 44160
      },
      {
        "year": "5",
        "white": 54024,
        "black": 44300,
        "hispanic": 45921,
        "asian": 56726,
        "multi": 49702
      },
      {
        "year": "10",
        "white": 62629,
        "black": 51356,
        "hispanic": 53235,
        "asian": 65761,
        "multi": 57619
      },
      {
        "year": "15",
        "white": 72604,
        "black": 59536,
        "hispanic": 61714,
        "asian": 76235,
        "multi": 66796
      },
      {
        "year": "20",
        "white": 84168,
        "black": 69018,
        "hispanic": 71543,
        "asian": 88377,
        "multi": 77435
      },
      {
        "year": "25",
        "white": 97574,
        "black": 80011,
        "hispanic": 82938,
        "asian": 102453,
        "multi": 89768
      },
      {
        "year": "30",
        "white": 113115,
        "black": 92754,
        "hispanic": 96148,
        "asian": 118771,
        "multi": 104066
      },
      {
        "year": "35",
        "white": 131131,
        "black": 107528,
        "hispanic": 111462,
        "asian": 137688,
        "multi": 120641
      },
      {
        "year": "40",
        "white": 152017,
        "black": 124654,
        "hispanic": 129215,
        "asian": 159618,
        "multi": 139856
      }
    ],
    "aptitude": "Extreme focus, physical endurance, spatial awareness, and metallurgy knowledge.",
    "competencies": [
      {
        "title": "Metallurgy",
        "desc": "Understanding material properties under extreme heat.",
        "icon": "Flame",
        "color": "text-orange-500"
      },
      {
        "title": "Spatial Awareness",
        "desc": "Precise coordination in challenging physical positions.",
        "icon": "Target",
        "color": "text-red-500"
      },
      {
        "title": "Structural Integrity",
        "desc": "Critical eye for bond strength and safety and flaws.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ],
    "comparableJob": {
      "name": "Materials Engineer",
      "startingSalary": 74000,
      "avgCost": "$130,000"
    }
  },
  {
    "id": "aircraft-tech",
    "name": "Aircraft Mechanic",
    "sector": "Aviation & Aerospace",
    "base": 65000,
    "demand": "High",
    "growth": "11%",
    "payGrowth": [
      {
        "year": "1",
        "white": 65000,
        "black": 53300,
        "hispanic": 55250,
        "asian": 68250,
        "multi": 59800
      },
      {
        "year": "5",
        "white": 77514,
        "black": 63561,
        "hispanic": 65887,
        "asian": 81389,
        "multi": 71313
      },
      {
        "year": "10",
        "white": 96596,
        "black": 79209,
        "hispanic": 82107,
        "asian": 101426,
        "multi": 88868
      },
      {
        "year": "15",
        "white": 120376,
        "black": 98709,
        "hispanic": 102320,
        "asian": 126395,
        "multi": 110746
      },
      {
        "year": "20",
        "white": 150011,
        "black": 123009,
        "hispanic": 127509,
        "asian": 157511,
        "multi": 138010
      },
      {
        "year": "25",
        "white": 186941,
        "black": 153292,
        "hispanic": 158900,
        "asian": 196288,
        "multi": 171986
      },
      {
        "year": "30",
        "white": 232962,
        "black": 191029,
        "hispanic": 198018,
        "asian": 244610,
        "multi": 214325
      },
      {
        "year": "35",
        "white": 290314,
        "black": 238057,
        "hispanic": 246766,
        "asian": 304829,
        "multi": 267088
      },
      {
        "year": "40",
        "white": 361783,
        "black": 296662,
        "hispanic": 307516,
        "asian": 379873,
        "multi": 332841
      }
    ],
    "aptitude": "Rigorous attention to detail, high mechanical comprehension, and ability to follow strict regulatory safety standards.",
    "competencies": [
      {
        "title": "Systems Integration",
        "desc": "Logic for interconnected avionics and hydraulics.",
        "icon": "Zap",
        "color": "text-blue-600"
      },
      {
        "title": "Compliance Rigor",
        "desc": "Zero-error mindset for FAA safety checklists.",
        "icon": "CheckCircle2",
        "color": "text-emerald-600"
      },
      {
        "title": "Component Logic",
        "desc": "Breaking down complex engines into diagnostic parts.",
        "icon": "Brain",
        "color": "text-indigo-500"
      }
    ],
    "comparableJob": {
      "name": "Aerospace Engineer",
      "startingSalary": 78000,
      "avgCost": "$140,000"
    }
  },
  {
    "id": "lpn",
    "name": "Licensed Practical Nurse",
    "sector": "Healthcare & Medical",
    "base": 52000,
    "demand": "Critical",
    "growth": "9%",
    "payGrowth": [
      {
        "year": "1",
        "white": 52000,
        "black": 42640,
        "hispanic": 44200,
        "asian": 54600,
        "multi": 47840
      },
      {
        "year": "5",
        "white": 60366,
        "black": 49500,
        "hispanic": 51311,
        "asian": 63384,
        "multi": 55537
      },
      {
        "year": "10",
        "white": 72741,
        "black": 59648,
        "hispanic": 61830,
        "asian": 76378,
        "multi": 66922
      },
      {
        "year": "15",
        "white": 87653,
        "black": 71875,
        "hispanic": 74505,
        "asian": 92036,
        "multi": 80641
      },
      {
        "year": "20",
        "white": 105622,
        "black": 86610,
        "hispanic": 89778,
        "asian": 110903,
        "multi": 97172
      },
      {
        "year": "25",
        "white": 127274,
        "black": 104365,
        "hispanic": 108183,
        "asian": 133638,
        "multi": 117092
      },
      {
        "year": "30",
        "white": 153365,
        "black": 125759,
        "hispanic": 130360,
        "asian": 161033,
        "multi": 141096
      },
      {
        "year": "35",
        "white": 184805,
        "black": 151540,
        "hispanic": 157084,
        "asian": 194045,
        "multi": 170020
      },
      {
        "year": "40",
        "white": 222690,
        "black": 182606,
        "hispanic": 189286,
        "asian": 233824,
        "multi": 204875
      }
    ],
    "aptitude": "Compassion, quick decision-making under pressure, and precise medical monitoring skills.",
    "competencies": [
      {
        "title": "Clinical Observation",
        "desc": "Identifying subtle changes in patient condition.",
        "icon": "Eye",
        "color": "text-blue-500"
      },
      {
        "title": "Dose Precision",
        "desc": "High-accuracy calculation for patient safety.",
        "icon": "Target",
        "color": "text-emerald-500"
      },
      {
        "title": "Crisis Logic",
        "desc": "Clear thinking and action during medical emergencies.",
        "icon": "Zap",
        "color": "text-amber-500"
      }
    ]
  },
  {
    "id": "plumber",
    "name": "Plumber",
    "sector": "Construction",
    "base": 58000,
    "demand": "High",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 58000,
        "black": 47560,
        "hispanic": 49300,
        "asian": 60900,
        "multi": 53360
      },
      {
        "year": "5",
        "white": 68375,
        "black": 56068,
        "hispanic": 58119,
        "asian": 71794,
        "multi": 62905
      },
      {
        "year": "10",
        "white": 83992,
        "black": 68873,
        "hispanic": 71393,
        "asian": 88192,
        "multi": 77273
      },
      {
        "year": "15",
        "white": 103175,
        "black": 84604,
        "hispanic": 87699,
        "asian": 108334,
        "multi": 94921
      },
      {
        "year": "20",
        "white": 126740,
        "black": 103927,
        "hispanic": 107729,
        "asian": 133077,
        "multi": 116601
      },
      {
        "year": "25",
        "white": 155687,
        "black": 127664,
        "hispanic": 132334,
        "asian": 163472,
        "multi": 143232
      },
      {
        "year": "30",
        "white": 191246,
        "black": 156822,
        "hispanic": 162559,
        "asian": 200808,
        "multi": 175946
      },
      {
        "year": "35",
        "white": 234926,
        "black": 192639,
        "hispanic": 199687,
        "asian": 246672,
        "multi": 216132
      },
      {
        "year": "40",
        "white": 288582,
        "black": 236637,
        "hispanic": 245295,
        "asian": 303011,
        "multi": 265495
      }
    ],
    "aptitude": "Spatial logic, problem-solving in confined spaces, and understanding of fluid dynamics.",
    "competencies": [
      {
        "title": "Fluid Dynamics",
        "desc": "Predicting pressure and flow in complex piping.",
        "icon": "Droplets",
        "color": "text-blue-400"
      },
      {
        "title": "Spatial Logic",
        "desc": "Designing routes through wall and floor structures.",
        "icon": "Target",
        "color": "text-indigo-500"
      },
      {
        "title": "Emergency Repair",
        "desc": "Rapid diagnostic and fix under active water flow.",
        "icon": "Zap",
        "color": "text-amber-500"
      }
    ]
  },
  {
    "id": "machinist",
    "name": "Machinist",
    "sector": "Industrial & Manufacturing",
    "base": 52000,
    "demand": "Moderate",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 52000,
        "black": 42640,
        "hispanic": 44200,
        "asian": 54600,
        "multi": 47840
      },
      {
        "year": "5",
        "white": 58982,
        "black": 48366,
        "hispanic": 50135,
        "asian": 61931,
        "multi": 54264
      },
      {
        "year": "10",
        "white": 69043,
        "black": 56615,
        "hispanic": 58687,
        "asian": 72495,
        "multi": 63520
      },
      {
        "year": "15",
        "white": 80820,
        "black": 66272,
        "hispanic": 68697,
        "asian": 84861,
        "multi": 74354
      },
      {
        "year": "20",
        "white": 94606,
        "black": 77577,
        "hispanic": 80415,
        "asian": 99336,
        "multi": 87037
      },
      {
        "year": "25",
        "white": 110743,
        "black": 90809,
        "hispanic": 94132,
        "asian": 116280,
        "multi": 101884
      },
      {
        "year": "30",
        "white": 129633,
        "black": 106299,
        "hispanic": 110188,
        "asian": 136114,
        "multi": 119262
      },
      {
        "year": "35",
        "white": 151745,
        "black": 124431,
        "hispanic": 128983,
        "asian": 159332,
        "multi": 139605
      },
      {
        "year": "40",
        "white": 177628,
        "black": 145655,
        "hispanic": 150984,
        "asian": 186509,
        "multi": 163418
      }
    ],
    "aptitude": "Precise measurement skills, familiarity with CNC programming, and mathematical accuracy.",
    "competencies": [
      {
        "title": "CNC Logic",
        "desc": "Translating 3D designs into machine code.",
        "icon": "Brain",
        "color": "text-purple-500"
      },
      {
        "title": "Micron Precision",
        "desc": "Working with tolerances smaller than a human hair.",
        "icon": "Target",
        "color": "text-emerald-500"
      },
      {
        "title": "Material Science",
        "desc": "Knowledge of how metals behave during cutting.",
        "icon": "Flame",
        "color": "text-orange-500"
      }
    ]
  },
  {
    "id": "heavy-eq-op",
    "name": "Heavy Equipment Operator",
    "sector": "Construction",
    "base": 53000,
    "demand": "High",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 53000,
        "black": 43460,
        "hispanic": 45050,
        "asian": 55650,
        "multi": 48760
      },
      {
        "year": "5",
        "white": 60819,
        "black": 49871,
        "hispanic": 51696,
        "asian": 63860,
        "multi": 55953
      },
      {
        "year": "10",
        "white": 72234,
        "black": 59232,
        "hispanic": 61399,
        "asian": 75845,
        "multi": 66455
      },
      {
        "year": "15",
        "white": 85791,
        "black": 70348,
        "hispanic": 72922,
        "asian": 90080,
        "multi": 78928
      },
      {
        "year": "20",
        "white": 101893,
        "black": 83552,
        "hispanic": 86609,
        "asian": 106987,
        "multi": 93741
      },
      {
        "year": "25",
        "white": 121016,
        "black": 99233,
        "hispanic": 102864,
        "asian": 127067,
        "multi": 111335
      },
      {
        "year": "30",
        "white": 143730,
        "black": 117858,
        "hispanic": 122170,
        "asian": 150916,
        "multi": 132231
      },
      {
        "year": "35",
        "white": 170706,
        "black": 139979,
        "hispanic": 145100,
        "asian": 179241,
        "multi": 157049
      },
      {
        "year": "40",
        "white": 202745,
        "black": 166251,
        "hispanic": 172333,
        "asian": 212882,
        "multi": 186525
      }
    ],
    "aptitude": "Depth perception, quick reaction times, and physical stamina for outdoor worksites.",
    "competencies": [
      {
        "title": "Depth Perception",
        "desc": "Precise control of massive machinery in tight sites.",
        "icon": "Eye",
        "color": "text-blue-500"
      },
      {
        "title": "Site Logic",
        "desc": "Mental mapping of underground and overhead risks.",
        "icon": "Brain",
        "color": "text-purple-500"
      },
      {
        "title": "Physical Stamina",
        "desc": "Concentration in harsh environments and long shifts.",
        "icon": "Zap",
        "color": "text-amber-500"
      }
    ]
  },
  {
    "id": "chef",
    "name": "Chef",
    "sector": "Service",
    "base": 45000,
    "demand": "High",
    "growth": "15%",
    "payGrowth": [
      {
        "year": "1",
        "white": 45000,
        "black": 36900,
        "hispanic": 38250,
        "asian": 47250,
        "multi": 41400
      },
      {
        "year": "5",
        "white": 54698,
        "black": 44852,
        "hispanic": 46493,
        "asian": 57433,
        "multi": 50322
      },
      {
        "year": "10",
        "white": 69810,
        "black": 57244,
        "hispanic": 59338,
        "asian": 73300,
        "multi": 64225
      },
      {
        "year": "15",
        "white": 89097,
        "black": 73059,
        "hispanic": 75732,
        "asian": 93552,
        "multi": 81969
      },
      {
        "year": "20",
        "white": 113713,
        "black": 93244,
        "hispanic": 96656,
        "asian": 119398,
        "multi": 104616
      },
      {
        "year": "25",
        "white": 145129,
        "black": 119006,
        "hispanic": 123360,
        "asian": 152386,
        "multi": 133519
      },
      {
        "year": "30",
        "white": 185226,
        "black": 151885,
        "hispanic": 157442,
        "asian": 194487,
        "multi": 170408
      },
      {
        "year": "35",
        "white": 236401,
        "black": 193849,
        "hispanic": 200941,
        "asian": 248221,
        "multi": 217489
      },
      {
        "year": "40",
        "white": 301714,
        "black": 247405,
        "hispanic": 256457,
        "asian": 316799,
        "multi": 277577
      }
    ],
    "aptitude": "Creativity, sensory precision, ability to multitask in high-speed environments, and leadership.",
    "competencies": [
      {
        "title": "Multitasking",
        "desc": "Managing 10+ active processes simultaneously.",
        "icon": "Zap",
        "color": "text-amber-500"
      },
      {
        "title": "Sensory Precision",
        "desc": "Acute taste and smell for profile refinement.",
        "icon": "Eye",
        "color": "text-orange-500"
      },
      {
        "title": "Leadership",
        "desc": "Commanding a high-pressure team in heat.",
        "icon": "Target",
        "color": "text-red-500"
      }
    ]
  },
  {
    "id": "carpenter",
    "name": "Carpenter",
    "sector": "Construction",
    "base": 47000,
    "demand": "Moderate",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 47000,
        "black": 38540,
        "hispanic": 39950,
        "asian": 49350,
        "multi": 43240
      },
      {
        "year": "5",
        "white": 52899,
        "black": 43377,
        "hispanic": 44964,
        "asian": 55544,
        "multi": 48667
      },
      {
        "year": "10",
        "white": 61324,
        "black": 50286,
        "hispanic": 52126,
        "asian": 64391,
        "multi": 56418
      },
      {
        "year": "15",
        "white": 71092,
        "black": 58295,
        "hispanic": 60428,
        "asian": 74646,
        "multi": 65404
      },
      {
        "year": "20",
        "white": 82415,
        "black": 67580,
        "hispanic": 70053,
        "asian": 86536,
        "multi": 75822
      },
      {
        "year": "25",
        "white": 95541,
        "black": 78344,
        "hispanic": 81210,
        "asian": 100318,
        "multi": 87898
      },
      {
        "year": "30",
        "white": 110759,
        "black": 90822,
        "hispanic": 94145,
        "asian": 116297,
        "multi": 101898
      },
      {
        "year": "35",
        "white": 128400,
        "black": 105288,
        "hispanic": 109140,
        "asian": 134820,
        "multi": 118128
      },
      {
        "year": "40",
        "white": 148850,
        "black": 122057,
        "hispanic": 126523,
        "asian": 156293,
        "multi": 136942
      }
    ],
    "aptitude": "Spatial reasoning, manual dexterity, and advanced geometry for framing and finishing.",
    "competencies": [
      {
        "title": "Geometrical Logic",
        "desc": "Applying layout math to physical construction.",
        "icon": "Brain",
        "color": "text-blue-500"
      },
      {
        "title": "Manual Dexterity",
        "desc": "Precision work with saws and finishing tools.",
        "icon": "Target",
        "color": "text-emerald-500"
      },
      {
        "title": "Structural Logic",
        "desc": "Visualizing the hidden frame and load flow.",
        "icon": "ShieldCheck",
        "color": "text-industrial-500"
      }
    ]
  },
  {
    "id": "millwright",
    "name": "Millwright",
    "sector": "Industrial & Manufacturing",
    "base": 56000,
    "demand": "Very High",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 56000,
        "black": 45920,
        "hispanic": 47600,
        "asian": 58800,
        "multi": 51520
      },
      {
        "year": "5",
        "white": 63766,
        "black": 52288,
        "hispanic": 54201,
        "asian": 66954,
        "multi": 58665
      },
      {
        "year": "10",
        "white": 75005,
        "black": 61504,
        "hispanic": 63754,
        "asian": 78755,
        "multi": 69005
      },
      {
        "year": "15",
        "white": 88225,
        "black": 72345,
        "hispanic": 74991,
        "asian": 92636,
        "multi": 81167
      },
      {
        "year": "20",
        "white": 103775,
        "black": 85096,
        "hispanic": 88209,
        "asian": 108964,
        "multi": 95473
      },
      {
        "year": "25",
        "white": 122066,
        "black": 100094,
        "hispanic": 103756,
        "asian": 128170,
        "multi": 112301
      },
      {
        "year": "30",
        "white": 143581,
        "black": 117737,
        "hispanic": 122044,
        "asian": 150760,
        "multi": 132095
      },
      {
        "year": "35",
        "white": 168888,
        "black": 138488,
        "hispanic": 143555,
        "asian": 177332,
        "multi": 155377
      },
      {
        "year": "40",
        "white": 198655,
        "black": 162897,
        "hispanic": 168857,
        "asian": 208588,
        "multi": 182763
      }
    ],
    "aptitude": "Industrial machine logic, precision assembly, and heavy-duty troubleshooting.",
    "competencies": [
      {
        "title": "Industrial Machine Logic",
        "desc": "Understanding complex mechanical and electrical systems.",
        "icon": "Brain",
        "color": "text-purple-500"
      },
      {
        "title": "Precision Assembly",
        "desc": "Aligning components to micron tolerances.",
        "icon": "Target",
        "color": "text-blue-500"
      },
      {
        "title": "Heavy-Duty Troubleshooting",
        "desc": "Diagnosing and repairing large-scale machinery.",
        "icon": "Wrench",
        "color": "text-red-500"
      }
    ]
  },
  {
    "id": "dental-hygiene",
    "name": "Dental Hygienist",
    "sector": "Healthcare & Medical",
    "base": 77000,
    "demand": "Critical",
    "growth": "9%",
    "payGrowth": [
      {
        "year": "1",
        "white": 77000,
        "black": 63140,
        "hispanic": 65450,
        "asian": 80850,
        "multi": 70840
      },
      {
        "year": "5",
        "white": 90079,
        "black": 73865,
        "hispanic": 76567,
        "asian": 94583,
        "multi": 82873
      },
      {
        "year": "10",
        "white": 109595,
        "black": 89868,
        "hispanic": 93156,
        "asian": 115075,
        "multi": 100827
      },
      {
        "year": "15",
        "white": 133339,
        "black": 109338,
        "hispanic": 113338,
        "asian": 140006,
        "multi": 122672
      },
      {
        "year": "20",
        "white": 162227,
        "black": 133026,
        "hispanic": 137893,
        "asian": 170339,
        "multi": 149249
      },
      {
        "year": "25",
        "white": 197374,
        "black": 161847,
        "hispanic": 167768,
        "asian": 207243,
        "multi": 181584
      },
      {
        "year": "30",
        "white": 240136,
        "black": 196912,
        "hispanic": 204116,
        "asian": 252143,
        "multi": 220925
      },
      {
        "year": "35",
        "white": 292162,
        "black": 239573,
        "hispanic": 248338,
        "asian": 306770,
        "multi": 268789
      },
      {
        "year": "40",
        "white": 355460,
        "black": 291477,
        "hispanic": 302141,
        "asian": 373233,
        "multi": 327023
      }
    ],
    "aptitude": "Manual precision, patient communication, and high attention to clinical detail.",
    "competencies": [
      {
        "title": "Manual Precision",
        "desc": "Performing delicate procedures with steady hands.",
        "icon": "Target",
        "color": "text-emerald-500"
      },
      {
        "title": "Patient Communication",
        "desc": "Educating and reassuring patients effectively.",
        "icon": "Eye",
        "color": "text-blue-500"
      },
      {
        "title": "Clinical Detail",
        "desc": "Observing and documenting oral health conditions.",
        "icon": "Microscope",
        "color": "text-indigo-500"
      }
    ]
  },
  {
    "id": "landscape-arch",
    "name": "Landscape Architect",
    "sector": "Service",
    "base": 60000,
    "demand": "Moderate",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 60000,
        "black": 49200,
        "hispanic": 51000,
        "asian": 63000,
        "multi": 55200
      },
      {
        "year": "5",
        "white": 68851,
        "black": 56458,
        "hispanic": 58524,
        "asian": 72294,
        "multi": 63343
      },
      {
        "year": "10",
        "white": 81774,
        "black": 67055,
        "hispanic": 69508,
        "asian": 85863,
        "multi": 75232
      },
      {
        "year": "15",
        "white": 97122,
        "black": 79640,
        "hispanic": 82553,
        "asian": 101978,
        "multi": 89352
      },
      {
        "year": "20",
        "white": 115350,
        "black": 94587,
        "hispanic": 98048,
        "asian": 121118,
        "multi": 106122
      },
      {
        "year": "25",
        "white": 137000,
        "black": 112340,
        "hispanic": 116450,
        "asian": 143850,
        "multi": 126040
      },
      {
        "year": "30",
        "white": 162713,
        "black": 133424,
        "hispanic": 138306,
        "asian": 170848,
        "multi": 149696
      },
      {
        "year": "35",
        "white": 193252,
        "black": 158466,
        "hispanic": 164264,
        "asian": 202914,
        "multi": 177791
      },
      {
        "year": "40",
        "white": 229522,
        "black": 188208,
        "hispanic": 195094,
        "asian": 240998,
        "multi": 211161
      }
    ],
    "aptitude": "Visual design, environmental awareness, and spatial planning skills.",
    "competencies": [
      {
        "title": "Visual Design",
        "desc": "Creating aesthetically pleasing and functional outdoor spaces.",
        "icon": "Palette",
        "color": "text-pink-500"
      },
      {
        "title": "Environmental Awareness",
        "desc": "Integrating sustainable practices and ecological principles.",
        "icon": "TreeDeciduous",
        "color": "text-green-500"
      },
      {
        "title": "Spatial Planning",
        "desc": "Organizing elements for optimal flow and use.",
        "icon": "Brain",
        "color": "text-purple-500"
      }
    ]
  },
  {
    "id": "auto-tech",
    "name": "Automotive Technician",
    "sector": "Transportation",
    "base": 48000,
    "demand": "High",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 48000,
        "black": 39360,
        "hispanic": 40800,
        "asian": 50400,
        "multi": 44160
      },
      {
        "year": "5",
        "white": 52983,
        "black": 43446,
        "hispanic": 45036,
        "asian": 55632,
        "multi": 48744
      },
      {
        "year": "10",
        "white": 59945,
        "black": 49155,
        "hispanic": 50954,
        "asian": 62943,
        "multi": 55150
      },
      {
        "year": "15",
        "white": 67823,
        "black": 55615,
        "hispanic": 57649,
        "asian": 71214,
        "multi": 62397
      },
      {
        "year": "20",
        "white": 76735,
        "black": 62923,
        "hispanic": 65225,
        "asian": 80572,
        "multi": 70596
      },
      {
        "year": "25",
        "white": 86819,
        "black": 71191,
        "hispanic": 73796,
        "asian": 91160,
        "multi": 79873
      },
      {
        "year": "30",
        "white": 98228,
        "black": 80547,
        "hispanic": 83493,
        "asian": 103139,
        "multi": 90369
      },
      {
        "year": "35",
        "white": 111135,
        "black": 91131,
        "hispanic": 94465,
        "asian": 116692,
        "multi": 102245
      },
      {
        "year": "40",
        "white": 125740,
        "black": 103106,
        "hispanic": 106879,
        "asian": 132027,
        "multi": 115680
      }
    ],
    "aptitude": "Diagnostic logic, mechanical aptitude, and ability to keep pace with evolving vehicle software.",
    "competencies": [
      {
        "title": "Diagnostic Logic",
        "desc": "Troubleshooting complex vehicle systems.",
        "icon": "Brain",
        "color": "text-blue-500"
      },
      {
        "title": "Mechanical Aptitude",
        "desc": "Repairing and maintaining engines and components.",
        "icon": "Wrench",
        "color": "text-red-500"
      },
      {
        "title": "Software Adaptation",
        "desc": "Staying current with evolving vehicle electronics.",
        "icon": "Zap",
        "color": "text-amber-500"
      }
    ]
  },
  {
    "id": "mason",
    "name": "Mason",
    "sector": "Construction",
    "base": 45000,
    "demand": "Moderate",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 45000,
        "black": 36900,
        "hispanic": 38250,
        "asian": 47250,
        "multi": 41400
      },
      {
        "year": "5",
        "white": 50256,
        "black": 41210,
        "hispanic": 42717,
        "asian": 52768,
        "multi": 46235
      },
      {
        "year": "10",
        "white": 57697,
        "black": 47311,
        "hispanic": 49042,
        "asian": 60581,
        "multi": 53081
      },
      {
        "year": "15",
        "white": 66239,
        "black": 54316,
        "hispanic": 56303,
        "asian": 69551,
        "multi": 60940
      },
      {
        "year": "20",
        "white": 76047,
        "black": 62358,
        "hispanic": 64640,
        "asian": 79849,
        "multi": 69963
      },
      {
        "year": "25",
        "white": 87307,
        "black": 71591,
        "hispanic": 74211,
        "asian": 91672,
        "multi": 80322
      },
      {
        "year": "30",
        "white": 100233,
        "black": 82191,
        "hispanic": 85198,
        "asian": 105245,
        "multi": 92215
      },
      {
        "year": "35",
        "white": 115074,
        "black": 94361,
        "hispanic": 97813,
        "asian": 120828,
        "multi": 105868
      },
      {
        "year": "40",
        "white": 132113,
        "black": 108332,
        "hispanic": 112296,
        "asian": 138718,
        "multi": 121544
      }
    ],
    "aptitude": "Physical endurance, eye for symmetry, and mastery of structural materials.",
    "competencies": [
      {
        "title": "Physical Endurance",
        "desc": "Sustained effort in demanding construction environments.",
        "icon": "Hammer",
        "color": "text-gray-500"
      },
      {
        "title": "Eye for Symmetry",
        "desc": "Achieving precise alignment and aesthetic balance.",
        "icon": "Target",
        "color": "text-emerald-500"
      },
      {
        "title": "Material Mastery",
        "desc": "Understanding properties of brick, stone, and mortar.",
        "icon": "Flame",
        "color": "text-orange-500"
      }
    ]
  },
  {
    "id": "pipelayer",
    "name": "Pipelayer",
    "sector": "Construction",
    "base": 44000,
    "demand": "Moderate",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 44000,
        "black": 36080,
        "hispanic": 37400,
        "asian": 46200,
        "multi": 40480
      },
      {
        "year": "5",
        "white": 48948,
        "black": 40137,
        "hispanic": 41606,
        "asian": 51395,
        "multi": 45032
      },
      {
        "year": "10",
        "white": 55923,
        "black": 45856,
        "hispanic": 47534,
        "asian": 58719,
        "multi": 51449
      },
      {
        "year": "15",
        "white": 63891,
        "black": 52391,
        "hispanic": 54307,
        "asian": 67085,
        "multi": 58780
      },
      {
        "year": "20",
        "white": 72995,
        "black": 59856,
        "hispanic": 62045,
        "asian": 76644,
        "multi": 67155
      },
      {
        "year": "25",
        "white": 83396,
        "black": 68384,
        "hispanic": 70886,
        "asian": 87565,
        "multi": 76724
      },
      {
        "year": "30",
        "white": 95279,
        "black": 78128,
        "hispanic": 80987,
        "asian": 100043,
        "multi": 87656
      },
      {
        "year": "35",
        "white": 108855,
        "black": 89261,
        "hispanic": 92527,
        "asian": 114298,
        "multi": 100146
      },
      {
        "year": "40",
        "white": 124366,
        "black": 101980,
        "hispanic": 105711,
        "asian": 130584,
        "multi": 114416
      }
    ],
    "aptitude": "Spatial geometry, safety-first mindset, and ability to interpret blueprints.",
    "competencies": [
      {
        "title": "Spatial Geometry",
        "desc": "Laying pipes with precise angles and depths.",
        "icon": "Brain",
        "color": "text-purple-500"
      },
      {
        "title": "Safety-First Mindset",
        "desc": "Adhering to strict trenching and material handling protocols.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      },
      {
        "title": "Blueprint Interpretation",
        "desc": "Translating complex designs into underground infrastructure.",
        "icon": "Eye",
        "color": "text-blue-500"
      }
    ]
  },
  {
    "id": "roofer",
    "name": "Roofer",
    "sector": "Construction",
    "base": 43853,
    "demand": "Stable",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 43853,
        "black": 35959,
        "hispanic": 37275,
        "asian": 46046,
        "multi": 40345
      },
      {
        "year": "5",
        "white": 50757,
        "black": 41621,
        "hispanic": 43144,
        "asian": 53295,
        "multi": 46697
      },
      {
        "year": "10",
        "white": 60936,
        "black": 49967,
        "hispanic": 51795,
        "asian": 63982,
        "multi": 56061
      },
      {
        "year": "15",
        "white": 73155,
        "black": 59987,
        "hispanic": 62182,
        "asian": 76813,
        "multi": 67303
      },
      {
        "year": "20",
        "white": 87825,
        "black": 72016,
        "hispanic": 74651,
        "asian": 92216,
        "multi": 80799
      },
      {
        "year": "25",
        "white": 105436,
        "black": 86458,
        "hispanic": 89621,
        "asian": 110708,
        "multi": 97002
      },
      {
        "year": "30",
        "white": 126580,
        "black": 103795,
        "hispanic": 107593,
        "asian": 132909,
        "multi": 116453
      },
      {
        "year": "35",
        "white": 151963,
        "black": 124609,
        "hispanic": 129168,
        "asian": 159561,
        "multi": 139806
      },
      {
        "year": "40",
        "white": 182436,
        "black": 149597,
        "hispanic": 155071,
        "asian": 191558,
        "multi": 167841
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "Droplets",
        "color": "text-blue-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-pink-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "glazier",
    "name": "Glazier",
    "sector": "Construction",
    "base": 44097,
    "demand": "High",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 44097,
        "black": 36160,
        "hispanic": 37482,
        "asian": 46302,
        "multi": 40569
      },
      {
        "year": "5",
        "white": 49502,
        "black": 40592,
        "hispanic": 42077,
        "asian": 51978,
        "multi": 45542
      },
      {
        "year": "10",
        "white": 57200,
        "black": 46904,
        "hispanic": 48620,
        "asian": 60060,
        "multi": 52624
      },
      {
        "year": "15",
        "white": 66095,
        "black": 54198,
        "hispanic": 56181,
        "asian": 69400,
        "multi": 60808
      },
      {
        "year": "20",
        "white": 76374,
        "black": 62626,
        "hispanic": 64918,
        "asian": 80192,
        "multi": 70264
      },
      {
        "year": "25",
        "white": 88250,
        "black": 72365,
        "hispanic": 75013,
        "asian": 92663,
        "multi": 81190
      },
      {
        "year": "30",
        "white": 101974,
        "black": 83618,
        "hispanic": 86678,
        "asian": 107072,
        "multi": 93816
      },
      {
        "year": "35",
        "white": 117831,
        "black": 96622,
        "hispanic": 100157,
        "asian": 123723,
        "multi": 108405
      },
      {
        "year": "40",
        "white": 136155,
        "black": 111647,
        "hispanic": 115731,
        "asian": 142962,
        "multi": 125262
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "Microscope",
        "color": "text-orange-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "ironworker",
    "name": "Ironworker",
    "sector": "Construction",
    "base": 48453,
    "demand": "Very High",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 48453,
        "black": 39731,
        "hispanic": 41185,
        "asian": 50876,
        "multi": 44577
      },
      {
        "year": "5",
        "white": 52939,
        "black": 43410,
        "hispanic": 44998,
        "asian": 55586,
        "multi": 48704
      },
      {
        "year": "10",
        "white": 59134,
        "black": 48490,
        "hispanic": 50264,
        "asian": 62091,
        "multi": 54404
      },
      {
        "year": "15",
        "white": 66055,
        "black": 54165,
        "hispanic": 56147,
        "asian": 69358,
        "multi": 60771
      },
      {
        "year": "20",
        "white": 73786,
        "black": 60504,
        "hispanic": 62718,
        "asian": 77475,
        "multi": 67883
      },
      {
        "year": "25",
        "white": 82421,
        "black": 67586,
        "hispanic": 70058,
        "asian": 86542,
        "multi": 75828
      },
      {
        "year": "30",
        "white": 92068,
        "black": 75495,
        "hispanic": 78257,
        "asian": 96671,
        "multi": 84702
      },
      {
        "year": "35",
        "white": 102843,
        "black": 84331,
        "hispanic": 87416,
        "asian": 107985,
        "multi": 94615
      },
      {
        "year": "40",
        "white": 114879,
        "black": 94201,
        "hispanic": 97647,
        "asian": 120623,
        "multi": 105688
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "Microscope",
        "color": "text-pink-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-purple-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "drywall-installer",
    "name": "Drywall Installer",
    "sector": "Construction",
    "base": 71873,
    "demand": "Stable",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 71873,
        "black": 58936,
        "hispanic": 61092,
        "asian": 75467,
        "multi": 66123
      },
      {
        "year": "5",
        "white": 90709,
        "black": 74381,
        "hispanic": 77103,
        "asian": 95245,
        "multi": 83452
      },
      {
        "year": "10",
        "white": 121341,
        "black": 99500,
        "hispanic": 103140,
        "asian": 127408,
        "multi": 111634
      },
      {
        "year": "15",
        "white": 162317,
        "black": 133100,
        "hispanic": 137970,
        "asian": 170433,
        "multi": 149332
      },
      {
        "year": "20",
        "white": 217131,
        "black": 178047,
        "hispanic": 184561,
        "asian": 227987,
        "multi": 199760
      },
      {
        "year": "25",
        "white": 290454,
        "black": 238172,
        "hispanic": 246886,
        "asian": 304977,
        "multi": 267218
      },
      {
        "year": "30",
        "white": 388538,
        "black": 318602,
        "hispanic": 330258,
        "asian": 407965,
        "multi": 357455
      },
      {
        "year": "35",
        "white": 519745,
        "black": 426191,
        "hispanic": 441784,
        "asian": 545733,
        "multi": 478166
      },
      {
        "year": "40",
        "white": 695260,
        "black": 570113,
        "hispanic": 590971,
        "asian": 730023,
        "multi": 639639
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "Wind",
        "color": "text-gray-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-orange-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "painter",
    "name": "Painter",
    "sector": "Construction",
    "base": 74724,
    "demand": "Moderate",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 74724,
        "black": 61274,
        "hispanic": 63515,
        "asian": 78460,
        "multi": 68746
      },
      {
        "year": "5",
        "white": 85224,
        "black": 69884,
        "hispanic": 72440,
        "asian": 89485,
        "multi": 78406
      },
      {
        "year": "10",
        "white": 100447,
        "black": 82367,
        "hispanic": 85380,
        "asian": 105469,
        "multi": 92411
      },
      {
        "year": "15",
        "white": 118390,
        "black": 97079,
        "hispanic": 100631,
        "asian": 124309,
        "multi": 108918
      },
      {
        "year": "20",
        "white": 139537,
        "black": 114420,
        "hispanic": 118607,
        "asian": 146514,
        "multi": 128374
      },
      {
        "year": "25",
        "white": 164462,
        "black": 134859,
        "hispanic": 139793,
        "asian": 172685,
        "multi": 151305
      },
      {
        "year": "30",
        "white": 193840,
        "black": 158948,
        "hispanic": 164764,
        "asian": 203532,
        "multi": 178332
      },
      {
        "year": "35",
        "white": 228464,
        "black": 187341,
        "hispanic": 194195,
        "asian": 239888,
        "multi": 210187
      },
      {
        "year": "40",
        "white": 269274,
        "black": 220805,
        "hispanic": 228883,
        "asian": 282738,
        "multi": 247732
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "Wrench",
        "color": "text-red-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-pink-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "flooring-installer",
    "name": "Flooring Installer",
    "sector": "Construction",
    "base": 68642,
    "demand": "High",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 68642,
        "black": 56286,
        "hispanic": 58346,
        "asian": 72074,
        "multi": 63151
      },
      {
        "year": "5",
        "white": 78837,
        "black": 64646,
        "hispanic": 67011,
        "asian": 82779,
        "multi": 72530
      },
      {
        "year": "10",
        "white": 93735,
        "black": 76863,
        "hispanic": 79675,
        "asian": 98422,
        "multi": 86236
      },
      {
        "year": "15",
        "white": 111449,
        "black": 91388,
        "hispanic": 94731,
        "asian": 117021,
        "multi": 102533
      },
      {
        "year": "20",
        "white": 132510,
        "black": 108658,
        "hispanic": 112634,
        "asian": 139136,
        "multi": 121909
      },
      {
        "year": "25",
        "white": 157551,
        "black": 129192,
        "hispanic": 133919,
        "asian": 165429,
        "multi": 144947
      },
      {
        "year": "30",
        "white": 187325,
        "black": 153606,
        "hispanic": 159226,
        "asian": 196691,
        "multi": 172339
      },
      {
        "year": "35",
        "white": 222725,
        "black": 182635,
        "hispanic": 189316,
        "asian": 233861,
        "multi": 204907
      },
      {
        "year": "40",
        "white": 264815,
        "black": 217148,
        "hispanic": 225093,
        "asian": 278056,
        "multi": 243630
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "CheckCircle2",
        "color": "text-emerald-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-industrial-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "insulation-installer",
    "name": "Insulation Installer",
    "sector": "Construction",
    "base": 42320,
    "demand": "Moderate",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 42320,
        "black": 34702,
        "hispanic": 35972,
        "asian": 44436,
        "multi": 38934
      },
      {
        "year": "5",
        "white": 45149,
        "black": 37022,
        "hispanic": 38377,
        "asian": 47407,
        "multi": 41537
      },
      {
        "year": "10",
        "white": 48953,
        "black": 40142,
        "hispanic": 41610,
        "asian": 51401,
        "multi": 45037
      },
      {
        "year": "15",
        "white": 53077,
        "black": 43524,
        "hispanic": 45116,
        "asian": 55731,
        "multi": 48831
      },
      {
        "year": "20",
        "white": 57549,
        "black": 47190,
        "hispanic": 48917,
        "asian": 60427,
        "multi": 52945
      },
      {
        "year": "25",
        "white": 62398,
        "black": 51166,
        "hispanic": 53038,
        "asian": 65518,
        "multi": 57406
      },
      {
        "year": "30",
        "white": 67655,
        "black": 55477,
        "hispanic": 57507,
        "asian": 71038,
        "multi": 62243
      },
      {
        "year": "35",
        "white": 73355,
        "black": 60151,
        "hispanic": 62352,
        "asian": 77023,
        "multi": 67487
      },
      {
        "year": "40",
        "white": 79536,
        "black": 65219,
        "hispanic": 67605,
        "asian": 83512,
        "multi": 73173
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "Droplets",
        "color": "text-amber-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-400"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "tile-setter",
    "name": "Tile Setter",
    "sector": "Construction",
    "base": 64379,
    "demand": "Critical",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 64379,
        "black": 52791,
        "hispanic": 54722,
        "asian": 67598,
        "multi": 59229
      },
      {
        "year": "5",
        "white": 70594,
        "black": 57887,
        "hispanic": 60005,
        "asian": 74123,
        "multi": 64946
      },
      {
        "year": "10",
        "white": 79213,
        "black": 64954,
        "hispanic": 67331,
        "asian": 83173,
        "multi": 72876
      },
      {
        "year": "15",
        "white": 88884,
        "black": 72885,
        "hispanic": 75551,
        "asian": 93328,
        "multi": 81773
      },
      {
        "year": "20",
        "white": 99736,
        "black": 81783,
        "hispanic": 84775,
        "asian": 104722,
        "multi": 91757
      },
      {
        "year": "25",
        "white": 111912,
        "black": 91768,
        "hispanic": 95126,
        "asian": 117508,
        "multi": 102959
      },
      {
        "year": "30",
        "white": 125576,
        "black": 102972,
        "hispanic": 106740,
        "asian": 131855,
        "multi": 115530
      },
      {
        "year": "35",
        "white": 140908,
        "black": 115544,
        "hispanic": 119771,
        "asian": 147953,
        "multi": 129635
      },
      {
        "year": "40",
        "white": 158111,
        "black": 129651,
        "hispanic": 134394,
        "asian": 166017,
        "multi": 145462
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "Hammer",
        "color": "text-blue-400"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "boilermaker",
    "name": "Boilermaker",
    "sector": "Construction",
    "base": 69382,
    "demand": "Very High",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 69382,
        "black": 56893,
        "hispanic": 58975,
        "asian": 72851,
        "multi": 63831
      },
      {
        "year": "5",
        "white": 83402,
        "black": 68390,
        "hispanic": 70892,
        "asian": 87572,
        "multi": 76730
      },
      {
        "year": "10",
        "white": 104976,
        "black": 86080,
        "hispanic": 89229,
        "asian": 110225,
        "multi": 96578
      },
      {
        "year": "15",
        "white": 132130,
        "black": 108347,
        "hispanic": 112310,
        "asian": 138736,
        "multi": 121560
      },
      {
        "year": "20",
        "white": 166308,
        "black": 136373,
        "hispanic": 141362,
        "asian": 174624,
        "multi": 153004
      },
      {
        "year": "25",
        "white": 209327,
        "black": 171648,
        "hispanic": 177928,
        "asian": 219794,
        "multi": 192581
      },
      {
        "year": "30",
        "white": 263474,
        "black": 216049,
        "hispanic": 223953,
        "asian": 276648,
        "multi": 242396
      },
      {
        "year": "35",
        "white": 331627,
        "black": 271935,
        "hispanic": 281883,
        "asian": 348209,
        "multi": 305097
      },
      {
        "year": "40",
        "white": 417410,
        "black": 342276,
        "hispanic": 354798,
        "asian": 438280,
        "multi": 384017
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "Microscope",
        "color": "text-pink-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-green-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "bricklayer",
    "name": "Bricklayer",
    "sector": "Construction",
    "base": 61000,
    "demand": "Stable",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 61000,
        "black": 50020,
        "hispanic": 51850,
        "asian": 64050,
        "multi": 56120
      },
      {
        "year": "5",
        "white": 74666,
        "black": 61226,
        "hispanic": 63466,
        "asian": 78400,
        "multi": 68693
      },
      {
        "year": "10",
        "white": 96132,
        "black": 78828,
        "hispanic": 81712,
        "asian": 100939,
        "multi": 88442
      },
      {
        "year": "15",
        "white": 123769,
        "black": 101491,
        "hispanic": 105204,
        "asian": 129958,
        "multi": 113868
      },
      {
        "year": "20",
        "white": 159352,
        "black": 130668,
        "hispanic": 135449,
        "asian": 167319,
        "multi": 146604
      },
      {
        "year": "25",
        "white": 205164,
        "black": 168234,
        "hispanic": 174389,
        "asian": 215422,
        "multi": 188751
      },
      {
        "year": "30",
        "white": 264146,
        "black": 216600,
        "hispanic": 224524,
        "asian": 277354,
        "multi": 243015
      },
      {
        "year": "35",
        "white": 340086,
        "black": 278870,
        "hispanic": 289073,
        "asian": 357090,
        "multi": 312879
      },
      {
        "year": "40",
        "white": 437857,
        "black": 359043,
        "hispanic": 372179,
        "asian": 459750,
        "multi": 402829
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "ShieldCheck",
        "color": "text-blue-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-purple-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "concrete-finisher",
    "name": "Concrete Finisher",
    "sector": "Construction",
    "base": 64862,
    "demand": "Very High",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 64862,
        "black": 53187,
        "hispanic": 55133,
        "asian": 68105,
        "multi": 59673
      },
      {
        "year": "5",
        "white": 70417,
        "black": 57742,
        "hispanic": 59854,
        "asian": 73937,
        "multi": 64783
      },
      {
        "year": "10",
        "white": 78033,
        "black": 63987,
        "hispanic": 66328,
        "asian": 81935,
        "multi": 71791
      },
      {
        "year": "15",
        "white": 86474,
        "black": 70909,
        "hispanic": 73503,
        "asian": 90798,
        "multi": 79556
      },
      {
        "year": "20",
        "white": 95828,
        "black": 78579,
        "hispanic": 81454,
        "asian": 100619,
        "multi": 88162
      },
      {
        "year": "25",
        "white": 106193,
        "black": 87079,
        "hispanic": 90264,
        "asian": 111503,
        "multi": 97698
      },
      {
        "year": "30",
        "white": 117680,
        "black": 96498,
        "hispanic": 100028,
        "asian": 123564,
        "multi": 108266
      },
      {
        "year": "35",
        "white": 130409,
        "black": 106936,
        "hispanic": 110848,
        "asian": 136930,
        "multi": 119977
      },
      {
        "year": "40",
        "white": 144515,
        "black": 118503,
        "hispanic": 122838,
        "asian": 151741,
        "multi": 132954
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "Zap",
        "color": "text-blue-400"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-purple-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "crane-operator",
    "name": "Crane Operator",
    "sector": "Construction",
    "base": 42123,
    "demand": "Very High",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 42123,
        "black": 34541,
        "hispanic": 35805,
        "asian": 44229,
        "multi": 38753
      },
      {
        "year": "5",
        "white": 50463,
        "black": 41380,
        "hispanic": 42894,
        "asian": 52986,
        "multi": 46426
      },
      {
        "year": "10",
        "white": 63247,
        "black": 51863,
        "hispanic": 53760,
        "asian": 66410,
        "multi": 58188
      },
      {
        "year": "15",
        "white": 79270,
        "black": 65002,
        "hispanic": 67380,
        "asian": 83234,
        "multi": 72929
      },
      {
        "year": "20",
        "white": 99353,
        "black": 81469,
        "hispanic": 84450,
        "asian": 104320,
        "multi": 91404
      },
      {
        "year": "25",
        "white": 124522,
        "black": 102108,
        "hispanic": 105844,
        "asian": 130748,
        "multi": 114561
      },
      {
        "year": "30",
        "white": 156069,
        "black": 127976,
        "hispanic": 132658,
        "asian": 163872,
        "multi": 143583
      },
      {
        "year": "35",
        "white": 195607,
        "black": 160398,
        "hispanic": 166266,
        "asian": 205387,
        "multi": 179958
      },
      {
        "year": "40",
        "white": 245161,
        "black": 201032,
        "hispanic": 208387,
        "asian": 257419,
        "multi": 225548
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "ShieldCheck",
        "color": "text-industrial-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-industrial-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "elevator-mechanic",
    "name": "Elevator Mechanic",
    "sector": "Construction",
    "base": 41671,
    "demand": "Critical",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 41671,
        "black": 34170,
        "hispanic": 35420,
        "asian": 43755,
        "multi": 38337
      },
      {
        "year": "5",
        "white": 51016,
        "black": 41833,
        "hispanic": 43364,
        "asian": 53567,
        "multi": 46935
      },
      {
        "year": "10",
        "white": 65697,
        "black": 53871,
        "hispanic": 55842,
        "asian": 68982,
        "multi": 60441
      },
      {
        "year": "15",
        "white": 84603,
        "black": 69374,
        "hispanic": 71912,
        "asian": 88833,
        "multi": 77834
      },
      {
        "year": "20",
        "white": 108949,
        "black": 89338,
        "hispanic": 92607,
        "asian": 114397,
        "multi": 100233
      },
      {
        "year": "25",
        "white": 140302,
        "black": 115047,
        "hispanic": 119256,
        "asian": 147317,
        "multi": 129078
      },
      {
        "year": "30",
        "white": 180677,
        "black": 148155,
        "hispanic": 153575,
        "asian": 189711,
        "multi": 166223
      },
      {
        "year": "35",
        "white": 232671,
        "black": 190790,
        "hispanic": 197770,
        "asian": 244304,
        "multi": 214057
      },
      {
        "year": "40",
        "white": 299627,
        "black": 245694,
        "hispanic": 254683,
        "asian": 314608,
        "multi": 275657
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "Flame",
        "color": "text-gray-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-indigo-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "framer",
    "name": "Framer",
    "sector": "Construction",
    "base": 59639,
    "demand": "High",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 59639,
        "black": 48904,
        "hispanic": 50693,
        "asian": 62621,
        "multi": 54868
      },
      {
        "year": "5",
        "white": 69143,
        "black": 56697,
        "hispanic": 58772,
        "asian": 72600,
        "multi": 63612
      },
      {
        "year": "10",
        "white": 83181,
        "black": 68208,
        "hispanic": 70704,
        "asian": 87340,
        "multi": 76527
      },
      {
        "year": "15",
        "white": 100069,
        "black": 82056,
        "hispanic": 85058,
        "asian": 105072,
        "multi": 92063
      },
      {
        "year": "20",
        "white": 120385,
        "black": 98716,
        "hispanic": 102327,
        "asian": 126404,
        "multi": 110754
      },
      {
        "year": "25",
        "white": 144826,
        "black": 118757,
        "hispanic": 123102,
        "asian": 152067,
        "multi": 133240
      },
      {
        "year": "30",
        "white": 174229,
        "black": 142868,
        "hispanic": 148095,
        "asian": 182941,
        "multi": 160291
      },
      {
        "year": "35",
        "white": 209602,
        "black": 171874,
        "hispanic": 178162,
        "asian": 220082,
        "multi": 192834
      },
      {
        "year": "40",
        "white": 252156,
        "black": 206768,
        "hispanic": 214333,
        "asian": 264764,
        "multi": 231984
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "Hammer",
        "color": "text-emerald-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-indigo-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "land-surveyor",
    "name": "Land Surveyor",
    "sector": "Construction",
    "base": 72392,
    "demand": "Moderate",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 72392,
        "black": 59361,
        "hispanic": 61533,
        "asian": 76012,
        "multi": 66601
      },
      {
        "year": "5",
        "white": 84950,
        "black": 69659,
        "hispanic": 72208,
        "asian": 89198,
        "multi": 78154
      },
      {
        "year": "10",
        "white": 103755,
        "black": 85079,
        "hispanic": 88192,
        "asian": 108942,
        "multi": 95454
      },
      {
        "year": "15",
        "white": 126722,
        "black": 103912,
        "hispanic": 107713,
        "asian": 133058,
        "multi": 116584
      },
      {
        "year": "20",
        "white": 154773,
        "black": 126913,
        "hispanic": 131557,
        "asian": 162511,
        "multi": 142391
      },
      {
        "year": "25",
        "white": 189033,
        "black": 155007,
        "hispanic": 160678,
        "asian": 198484,
        "multi": 173910
      },
      {
        "year": "30",
        "white": 230877,
        "black": 189319,
        "hispanic": 196245,
        "asian": 242420,
        "multi": 212406
      },
      {
        "year": "35",
        "white": 281983,
        "black": 231226,
        "hispanic": 239685,
        "asian": 296082,
        "multi": 259424
      },
      {
        "year": "40",
        "white": 344402,
        "black": 282410,
        "hispanic": 292742,
        "asian": 361622,
        "multi": 316850
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "Zap",
        "color": "text-red-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-red-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "pipefitter",
    "name": "Pipefitter",
    "sector": "Construction",
    "base": 68286,
    "demand": "Critical",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 68286,
        "black": 55995,
        "hispanic": 58043,
        "asian": 71700,
        "multi": 62823
      },
      {
        "year": "5",
        "white": 72892,
        "black": 59771,
        "hispanic": 61958,
        "asian": 76536,
        "multi": 67060
      },
      {
        "year": "10",
        "white": 79088,
        "black": 64852,
        "hispanic": 67225,
        "asian": 83043,
        "multi": 72761
      },
      {
        "year": "15",
        "white": 85812,
        "black": 70365,
        "hispanic": 72940,
        "asian": 90102,
        "multi": 78947
      },
      {
        "year": "20",
        "white": 93106,
        "black": 76347,
        "hispanic": 79140,
        "asian": 97762,
        "multi": 85658
      },
      {
        "year": "25",
        "white": 101021,
        "black": 82837,
        "hispanic": 85868,
        "asian": 106072,
        "multi": 92940
      },
      {
        "year": "30",
        "white": 109609,
        "black": 89879,
        "hispanic": 93168,
        "asian": 115089,
        "multi": 100840
      },
      {
        "year": "35",
        "white": 118927,
        "black": 97520,
        "hispanic": 101088,
        "asian": 124873,
        "multi": 109413
      },
      {
        "year": "40",
        "white": 129037,
        "black": 105810,
        "hispanic": 109681,
        "asian": 135489,
        "multi": 118714
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "TreeDeciduous",
        "color": "text-industrial-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-indigo-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "sheet-metal-worker",
    "name": "Sheet Metal Worker",
    "sector": "Construction",
    "base": 41596,
    "demand": "Stable",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 41596,
        "black": 34109,
        "hispanic": 35357,
        "asian": 43676,
        "multi": 38268
      },
      {
        "year": "5",
        "white": 44182,
        "black": 36229,
        "hispanic": 37555,
        "asian": 46391,
        "multi": 40647
      },
      {
        "year": "10",
        "white": 47642,
        "black": 39066,
        "hispanic": 40496,
        "asian": 50024,
        "multi": 43830
      },
      {
        "year": "15",
        "white": 51372,
        "black": 42125,
        "hispanic": 43667,
        "asian": 53941,
        "multi": 47263
      },
      {
        "year": "20",
        "white": 55395,
        "black": 45424,
        "hispanic": 47086,
        "asian": 58165,
        "multi": 50964
      },
      {
        "year": "25",
        "white": 59733,
        "black": 48981,
        "hispanic": 50773,
        "asian": 62720,
        "multi": 54955
      },
      {
        "year": "30",
        "white": 64411,
        "black": 52817,
        "hispanic": 54749,
        "asian": 67631,
        "multi": 59258
      },
      {
        "year": "35",
        "white": 69455,
        "black": 56953,
        "hispanic": 59036,
        "asian": 72927,
        "multi": 63898
      },
      {
        "year": "40",
        "white": 74893,
        "black": 61413,
        "hispanic": 63659,
        "asian": 78638,
        "multi": 68902
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "Baby",
        "color": "text-red-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-purple-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "steamfitter",
    "name": "Steamfitter",
    "sector": "Construction",
    "base": 67693,
    "demand": "Critical",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 67693,
        "black": 55508,
        "hispanic": 57539,
        "asian": 71078,
        "multi": 62278
      },
      {
        "year": "5",
        "white": 79623,
        "black": 65291,
        "hispanic": 67679,
        "asian": 83604,
        "multi": 73253
      },
      {
        "year": "10",
        "white": 97533,
        "black": 79977,
        "hispanic": 82903,
        "asian": 102410,
        "multi": 89731
      },
      {
        "year": "15",
        "white": 119473,
        "black": 97968,
        "hispanic": 101552,
        "asian": 125446,
        "multi": 109915
      },
      {
        "year": "20",
        "white": 146347,
        "black": 120005,
        "hispanic": 124395,
        "asian": 153665,
        "multi": 134640
      },
      {
        "year": "25",
        "white": 179267,
        "black": 146999,
        "hispanic": 152377,
        "asian": 188231,
        "multi": 164926
      },
      {
        "year": "30",
        "white": 219593,
        "black": 180066,
        "hispanic": 186654,
        "asian": 230572,
        "multi": 202025
      },
      {
        "year": "35",
        "white": 268989,
        "black": 220571,
        "hispanic": 228640,
        "asian": 282438,
        "multi": 247469
      },
      {
        "year": "40",
        "white": 329496,
        "black": 270187,
        "hispanic": 280071,
        "asian": 345971,
        "multi": 303136
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "Baby",
        "color": "text-indigo-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-pink-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "terrazzo-worker",
    "name": "Terrazzo Worker",
    "sector": "Construction",
    "base": 60116,
    "demand": "High",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 60116,
        "black": 49295,
        "hispanic": 51099,
        "asian": 63122,
        "multi": 55307
      },
      {
        "year": "5",
        "white": 74162,
        "black": 60813,
        "hispanic": 63038,
        "asian": 77870,
        "multi": 68229
      },
      {
        "year": "10",
        "white": 96420,
        "black": 79065,
        "hispanic": 81957,
        "asian": 101241,
        "multi": 88707
      },
      {
        "year": "15",
        "white": 125359,
        "black": 102795,
        "hispanic": 106556,
        "asian": 131627,
        "multi": 115331
      },
      {
        "year": "20",
        "white": 162984,
        "black": 133647,
        "hispanic": 138536,
        "asian": 171133,
        "multi": 149945
      },
      {
        "year": "25",
        "white": 211901,
        "black": 173759,
        "hispanic": 180116,
        "asian": 222496,
        "multi": 194949
      },
      {
        "year": "30",
        "white": 275500,
        "black": 225910,
        "hispanic": 234175,
        "asian": 289275,
        "multi": 253460
      },
      {
        "year": "35",
        "white": 358187,
        "black": 293713,
        "hispanic": 304459,
        "asian": 376096,
        "multi": 329532
      },
      {
        "year": "40",
        "white": 465691,
        "black": 381867,
        "hispanic": 395837,
        "asian": 488976,
        "multi": 428436
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "Brain",
        "color": "text-blue-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-400"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "waterproofer",
    "name": "Waterproofer",
    "sector": "Construction",
    "base": 54355,
    "demand": "Stable",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 54355,
        "black": 44571,
        "hispanic": 46202,
        "asian": 57073,
        "multi": 50007
      },
      {
        "year": "5",
        "white": 67773,
        "black": 55574,
        "hispanic": 57607,
        "asian": 71162,
        "multi": 62351
      },
      {
        "year": "10",
        "white": 89295,
        "black": 73222,
        "hispanic": 75901,
        "asian": 93760,
        "multi": 82152
      },
      {
        "year": "15",
        "white": 117652,
        "black": 96475,
        "hispanic": 100004,
        "asian": 123535,
        "multi": 108240
      },
      {
        "year": "20",
        "white": 155014,
        "black": 127112,
        "hispanic": 131762,
        "asian": 162765,
        "multi": 142613
      },
      {
        "year": "25",
        "white": 204241,
        "black": 167478,
        "hispanic": 173605,
        "asian": 214453,
        "multi": 187902
      },
      {
        "year": "30",
        "white": 269101,
        "black": 220663,
        "hispanic": 228736,
        "asian": 282556,
        "multi": 247573
      },
      {
        "year": "35",
        "white": 354557,
        "black": 290737,
        "hispanic": 301374,
        "asian": 372285,
        "multi": 326193
      },
      {
        "year": "40",
        "white": 467152,
        "black": 383064,
        "hispanic": 397079,
        "asian": 490509,
        "multi": 429780
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "Eye",
        "color": "text-pink-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-emerald-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "asbestos-abatement",
    "name": "Asbestos Abatement Worker",
    "sector": "Construction",
    "base": 56674,
    "demand": "Critical",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 56674,
        "black": 46473,
        "hispanic": 48173,
        "asian": 59508,
        "multi": 52140
      },
      {
        "year": "5",
        "white": 69376,
        "black": 56888,
        "hispanic": 58969,
        "asian": 72845,
        "multi": 63826
      },
      {
        "year": "10",
        "white": 89328,
        "black": 73249,
        "hispanic": 75929,
        "asian": 93795,
        "multi": 82182
      },
      {
        "year": "15",
        "white": 115019,
        "black": 94316,
        "hispanic": 97766,
        "asian": 120770,
        "multi": 105818
      },
      {
        "year": "20",
        "white": 148098,
        "black": 121441,
        "hispanic": 125884,
        "asian": 155503,
        "multi": 136251
      },
      {
        "year": "25",
        "white": 190691,
        "black": 156367,
        "hispanic": 162088,
        "asian": 200226,
        "multi": 175436
      },
      {
        "year": "30",
        "white": 245534,
        "black": 201338,
        "hispanic": 208704,
        "asian": 257811,
        "multi": 225891
      },
      {
        "year": "35",
        "white": 316150,
        "black": 259243,
        "hispanic": 268727,
        "asian": 331957,
        "multi": 290858
      },
      {
        "year": "40",
        "white": 407074,
        "black": 333801,
        "hispanic": 346013,
        "asian": 427428,
        "multi": 374508
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "TreeDeciduous",
        "color": "text-pink-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-indigo-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "cabinetmaker",
    "name": "Cabinetmaker",
    "sector": "Construction",
    "base": 62480,
    "demand": "Stable",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 62480,
        "black": 51234,
        "hispanic": 53108,
        "asian": 65604,
        "multi": 57482
      },
      {
        "year": "5",
        "white": 74097,
        "black": 60760,
        "hispanic": 62983,
        "asian": 77802,
        "multi": 68170
      },
      {
        "year": "10",
        "white": 91702,
        "black": 75196,
        "hispanic": 77947,
        "asian": 96288,
        "multi": 84366
      },
      {
        "year": "15",
        "white": 113490,
        "black": 93062,
        "hispanic": 96467,
        "asian": 119165,
        "multi": 104411
      },
      {
        "year": "20",
        "white": 140455,
        "black": 115173,
        "hispanic": 119387,
        "asian": 147478,
        "multi": 129218
      },
      {
        "year": "25",
        "white": 173826,
        "black": 142537,
        "hispanic": 147752,
        "asian": 182517,
        "multi": 159920
      },
      {
        "year": "30",
        "white": 215126,
        "black": 176403,
        "hispanic": 182857,
        "asian": 225882,
        "multi": 197916
      },
      {
        "year": "35",
        "white": 266238,
        "black": 218315,
        "hispanic": 226302,
        "asian": 279550,
        "multi": 244939
      },
      {
        "year": "40",
        "white": 329494,
        "black": 270185,
        "hispanic": 280070,
        "asian": 345969,
        "multi": 303135
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "Wind",
        "color": "text-orange-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-400"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "deck-builder",
    "name": "Deck Builder",
    "sector": "Construction",
    "base": 64765,
    "demand": "Moderate",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 64765,
        "black": 53107,
        "hispanic": 55050,
        "asian": 68003,
        "multi": 59584
      },
      {
        "year": "5",
        "white": 67608,
        "black": 55439,
        "hispanic": 57467,
        "asian": 70989,
        "multi": 62200
      },
      {
        "year": "10",
        "white": 71339,
        "black": 58498,
        "hispanic": 60638,
        "asian": 74906,
        "multi": 65632
      },
      {
        "year": "15",
        "white": 75275,
        "black": 61726,
        "hispanic": 63984,
        "asian": 79039,
        "multi": 69253
      },
      {
        "year": "20",
        "white": 79429,
        "black": 65132,
        "hispanic": 67514,
        "asian": 83400,
        "multi": 73074
      },
      {
        "year": "25",
        "white": 83811,
        "black": 68725,
        "hispanic": 71240,
        "asian": 88002,
        "multi": 77106
      },
      {
        "year": "30",
        "white": 88436,
        "black": 72517,
        "hispanic": 75170,
        "asian": 92858,
        "multi": 81361
      },
      {
        "year": "35",
        "white": 93316,
        "black": 76519,
        "hispanic": 79318,
        "asian": 97981,
        "multi": 85850
      },
      {
        "year": "40",
        "white": 98464,
        "black": 80741,
        "hispanic": 83695,
        "asian": 103388,
        "multi": 90587
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "ShieldCheck",
        "color": "text-purple-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-industrial-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "demolition-worker",
    "name": "Demolition Worker",
    "sector": "Construction",
    "base": 55207,
    "demand": "Very High",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 55207,
        "black": 45270,
        "hispanic": 46926,
        "asian": 57967,
        "multi": 50790
      },
      {
        "year": "5",
        "white": 58455,
        "black": 47933,
        "hispanic": 49686,
        "asian": 61377,
        "multi": 53778
      },
      {
        "year": "10",
        "white": 62784,
        "black": 51483,
        "hispanic": 53367,
        "asian": 65923,
        "multi": 57761
      },
      {
        "year": "15",
        "white": 67434,
        "black": 55296,
        "hispanic": 57319,
        "asian": 70806,
        "multi": 62040
      },
      {
        "year": "20",
        "white": 72429,
        "black": 59392,
        "hispanic": 61565,
        "asian": 76050,
        "multi": 66635
      },
      {
        "year": "25",
        "white": 77793,
        "black": 63791,
        "hispanic": 66124,
        "asian": 81683,
        "multi": 71570
      },
      {
        "year": "30",
        "white": 83555,
        "black": 68515,
        "hispanic": 71022,
        "asian": 87733,
        "multi": 76871
      },
      {
        "year": "35",
        "white": 89744,
        "black": 73590,
        "hispanic": 76282,
        "asian": 94231,
        "multi": 82564
      },
      {
        "year": "40",
        "white": 96391,
        "black": 79040,
        "hispanic": 81932,
        "asian": 101210,
        "multi": 88679
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "ShieldCheck",
        "color": "text-blue-400"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-indigo-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "cnc-operator",
    "name": "CNC Operator",
    "sector": "Industrial & Manufacturing",
    "base": 62083,
    "demand": "Stable",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 62083,
        "black": 50908,
        "hispanic": 52771,
        "asian": 65187,
        "multi": 57116
      },
      {
        "year": "5",
        "white": 75829,
        "black": 62180,
        "hispanic": 64454,
        "asian": 79620,
        "multi": 69763
      },
      {
        "year": "10",
        "white": 97367,
        "black": 79841,
        "hispanic": 82762,
        "asian": 102235,
        "multi": 89578
      },
      {
        "year": "15",
        "white": 125022,
        "black": 102518,
        "hispanic": 106269,
        "asian": 131274,
        "multi": 115021
      },
      {
        "year": "20",
        "white": 160533,
        "black": 131637,
        "hispanic": 136453,
        "asian": 168560,
        "multi": 147691
      },
      {
        "year": "25",
        "white": 206130,
        "black": 169027,
        "hispanic": 175211,
        "asian": 216437,
        "multi": 189640
      },
      {
        "year": "30",
        "white": 264679,
        "black": 217037,
        "hispanic": 224977,
        "asian": 277913,
        "multi": 243504
      },
      {
        "year": "35",
        "white": 339857,
        "black": 278683,
        "hispanic": 288878,
        "asian": 356850,
        "multi": 312668
      },
      {
        "year": "40",
        "white": 436388,
        "black": 357838,
        "hispanic": 370930,
        "asian": 458208,
        "multi": 401477
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "Zap",
        "color": "text-emerald-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "tool-die-maker",
    "name": "Tool & Die Maker",
    "sector": "Industrial & Manufacturing",
    "base": 70168,
    "demand": "Moderate",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 70168,
        "black": 57538,
        "hispanic": 59643,
        "asian": 73676,
        "multi": 64555
      },
      {
        "year": "5",
        "white": 80860,
        "black": 66305,
        "hispanic": 68731,
        "asian": 84903,
        "multi": 74391
      },
      {
        "year": "10",
        "white": 96545,
        "black": 79167,
        "hispanic": 82063,
        "asian": 101372,
        "multi": 88821
      },
      {
        "year": "15",
        "white": 115272,
        "black": 94523,
        "hispanic": 97981,
        "asian": 121036,
        "multi": 106050
      },
      {
        "year": "20",
        "white": 137632,
        "black": 112858,
        "hispanic": 116987,
        "asian": 144514,
        "multi": 126621
      },
      {
        "year": "25",
        "white": 164329,
        "black": 134750,
        "hispanic": 139680,
        "asian": 172545,
        "multi": 151183
      },
      {
        "year": "30",
        "white": 196205,
        "black": 160888,
        "hispanic": 166774,
        "asian": 206015,
        "multi": 180508
      },
      {
        "year": "35",
        "white": 234263,
        "black": 192096,
        "hispanic": 199124,
        "asian": 245976,
        "multi": 215522
      },
      {
        "year": "40",
        "white": 279704,
        "black": 229357,
        "hispanic": 237748,
        "asian": 293689,
        "multi": 257328
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "Microscope",
        "color": "text-green-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-gray-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "industrial-electrician",
    "name": "Industrial Electrician",
    "sector": "Industrial & Manufacturing",
    "base": 61891,
    "demand": "Moderate",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 61891,
        "black": 50751,
        "hispanic": 52607,
        "asian": 64986,
        "multi": 56940
      },
      {
        "year": "5",
        "white": 71983,
        "black": 59026,
        "hispanic": 61185,
        "asian": 75582,
        "multi": 66224
      },
      {
        "year": "10",
        "white": 86941,
        "black": 71292,
        "hispanic": 73900,
        "asian": 91288,
        "multi": 79986
      },
      {
        "year": "15",
        "white": 105009,
        "black": 86107,
        "hispanic": 89258,
        "asian": 110259,
        "multi": 96608
      },
      {
        "year": "20",
        "white": 126831,
        "black": 104002,
        "hispanic": 107806,
        "asian": 133173,
        "multi": 116685
      },
      {
        "year": "25",
        "white": 153188,
        "black": 125614,
        "hispanic": 130210,
        "asian": 160848,
        "multi": 140933
      },
      {
        "year": "30",
        "white": 185023,
        "black": 151719,
        "hispanic": 157269,
        "asian": 194274,
        "multi": 170221
      },
      {
        "year": "35",
        "white": 223473,
        "black": 183248,
        "hispanic": 189952,
        "asian": 234646,
        "multi": 205595
      },
      {
        "year": "40",
        "white": 269913,
        "black": 221329,
        "hispanic": 229426,
        "asian": 283409,
        "multi": 248320
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "TreeDeciduous",
        "color": "text-industrial-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-400"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "instrument-tech",
    "name": "Instrumentation Technician",
    "sector": "Industrial & Manufacturing",
    "base": 61791,
    "demand": "Critical",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 61791,
        "black": 50669,
        "hispanic": 52522,
        "asian": 64881,
        "multi": 56848
      },
      {
        "year": "5",
        "white": 71355,
        "black": 58511,
        "hispanic": 60652,
        "asian": 74923,
        "multi": 65647
      },
      {
        "year": "10",
        "white": 85418,
        "black": 70043,
        "hispanic": 72606,
        "asian": 89689,
        "multi": 78585
      },
      {
        "year": "15",
        "white": 102253,
        "black": 83848,
        "hispanic": 86915,
        "asian": 107366,
        "multi": 94073
      },
      {
        "year": "20",
        "white": 122406,
        "black": 100373,
        "hispanic": 104045,
        "asian": 128526,
        "multi": 112614
      },
      {
        "year": "25",
        "white": 146531,
        "black": 120155,
        "hispanic": 124551,
        "asian": 153857,
        "multi": 134808
      },
      {
        "year": "30",
        "white": 175410,
        "black": 143836,
        "hispanic": 149099,
        "asian": 184181,
        "multi": 161377
      },
      {
        "year": "35",
        "white": 209981,
        "black": 172185,
        "hispanic": 178484,
        "asian": 220480,
        "multi": 193183
      },
      {
        "year": "40",
        "white": 251366,
        "black": 206120,
        "hispanic": 213661,
        "asian": 263934,
        "multi": 231257
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "Microscope",
        "color": "text-pink-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "robotics-tech",
    "name": "Robotics Technician",
    "sector": "Industrial & Manufacturing",
    "base": 46537,
    "demand": "Stable",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 46537,
        "black": 38160,
        "hispanic": 39556,
        "asian": 48864,
        "multi": 42814
      },
      {
        "year": "5",
        "white": 58241,
        "black": 47758,
        "hispanic": 49505,
        "asian": 61153,
        "multi": 53582
      },
      {
        "year": "10",
        "white": 77093,
        "black": 63217,
        "hispanic": 65529,
        "asian": 80948,
        "multi": 70926
      },
      {
        "year": "15",
        "white": 102048,
        "black": 83680,
        "hispanic": 86741,
        "asian": 107151,
        "multi": 93885
      },
      {
        "year": "20",
        "white": 135081,
        "black": 110766,
        "hispanic": 114819,
        "asian": 141835,
        "multi": 124275
      },
      {
        "year": "25",
        "white": 178806,
        "black": 146621,
        "hispanic": 151985,
        "asian": 187747,
        "multi": 164502
      },
      {
        "year": "30",
        "white": 236685,
        "black": 194082,
        "hispanic": 201183,
        "asian": 248520,
        "multi": 217751
      },
      {
        "year": "35",
        "white": 313300,
        "black": 256906,
        "hispanic": 266305,
        "asian": 328965,
        "multi": 288236
      },
      {
        "year": "40",
        "white": 414714,
        "black": 340065,
        "hispanic": 352507,
        "asian": 435449,
        "multi": 381537
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "Hammer",
        "color": "text-emerald-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-industrial-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "automation-tech",
    "name": "Automation Technician",
    "sector": "Industrial & Manufacturing",
    "base": 73011,
    "demand": "High",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 73011,
        "black": 59869,
        "hispanic": 62059,
        "asian": 76662,
        "multi": 67170
      },
      {
        "year": "5",
        "white": 85521,
        "black": 70127,
        "hispanic": 72692,
        "asian": 89797,
        "multi": 78679
      },
      {
        "year": "10",
        "white": 104213,
        "black": 85455,
        "hispanic": 88581,
        "asian": 109424,
        "multi": 95876
      },
      {
        "year": "15",
        "white": 126992,
        "black": 104133,
        "hispanic": 107943,
        "asian": 133342,
        "multi": 116833
      },
      {
        "year": "20",
        "white": 154749,
        "black": 126895,
        "hispanic": 131537,
        "asian": 162487,
        "multi": 142369
      },
      {
        "year": "25",
        "white": 188574,
        "black": 154631,
        "hispanic": 160288,
        "asian": 198003,
        "multi": 173488
      },
      {
        "year": "30",
        "white": 229792,
        "black": 188429,
        "hispanic": 195323,
        "asian": 241282,
        "multi": 211409
      },
      {
        "year": "35",
        "white": 280019,
        "black": 229616,
        "hispanic": 238016,
        "asian": 294020,
        "multi": 257618
      },
      {
        "year": "40",
        "white": 341225,
        "black": 279804,
        "hispanic": 290041,
        "asian": 358286,
        "multi": 313927
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "CheckCircle2",
        "color": "text-industrial-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-orange-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "foundry-worker",
    "name": "Foundry Worker",
    "sector": "Industrial & Manufacturing",
    "base": 74220,
    "demand": "Stable",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 74220,
        "black": 60860,
        "hispanic": 63087,
        "asian": 77931,
        "multi": 68282
      },
      {
        "year": "5",
        "white": 87958,
        "black": 72126,
        "hispanic": 74764,
        "asian": 92356,
        "multi": 80921
      },
      {
        "year": "10",
        "white": 108760,
        "black": 89183,
        "hispanic": 92446,
        "asian": 114198,
        "multi": 100059
      },
      {
        "year": "15",
        "white": 134482,
        "black": 110275,
        "hispanic": 114310,
        "asian": 141206,
        "multi": 123723
      },
      {
        "year": "20",
        "white": 166287,
        "black": 136355,
        "hispanic": 141344,
        "asian": 174601,
        "multi": 152984
      },
      {
        "year": "25",
        "white": 205613,
        "black": 168603,
        "hispanic": 174771,
        "asian": 215894,
        "multi": 189164
      },
      {
        "year": "30",
        "white": 254241,
        "black": 208478,
        "hispanic": 216105,
        "asian": 266953,
        "multi": 233902
      },
      {
        "year": "35",
        "white": 314369,
        "black": 257782,
        "hispanic": 267213,
        "asian": 330087,
        "multi": 289219
      },
      {
        "year": "40",
        "white": 388717,
        "black": 318748,
        "hispanic": 330409,
        "asian": 408153,
        "multi": 357619
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "Zap",
        "color": "text-blue-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-industrial-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "metal-fabricator",
    "name": "Metal Fabricator",
    "sector": "Industrial & Manufacturing",
    "base": 65441,
    "demand": "High",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 65441,
        "black": 53662,
        "hispanic": 55625,
        "asian": 68713,
        "multi": 60206
      },
      {
        "year": "5",
        "white": 70169,
        "black": 57539,
        "hispanic": 59644,
        "asian": 73678,
        "multi": 64556
      },
      {
        "year": "10",
        "white": 76562,
        "black": 62781,
        "hispanic": 65078,
        "asian": 80391,
        "multi": 70437
      },
      {
        "year": "15",
        "white": 83538,
        "black": 68501,
        "hispanic": 71008,
        "asian": 87715,
        "multi": 76855
      },
      {
        "year": "20",
        "white": 91150,
        "black": 74743,
        "hispanic": 77477,
        "asian": 95707,
        "multi": 83858
      },
      {
        "year": "25",
        "white": 99455,
        "black": 81553,
        "hispanic": 84537,
        "asian": 104428,
        "multi": 91499
      },
      {
        "year": "30",
        "white": 108517,
        "black": 88984,
        "hispanic": 92239,
        "asian": 113942,
        "multi": 99835
      },
      {
        "year": "35",
        "white": 118404,
        "black": 97091,
        "hispanic": 100643,
        "asian": 124324,
        "multi": 108932
      },
      {
        "year": "40",
        "white": 129192,
        "black": 105938,
        "hispanic": 109813,
        "asian": 135652,
        "multi": 118857
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "Wrench",
        "color": "text-orange-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-indigo-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "ndt-tech",
    "name": "Non-Destructive Testing Tech",
    "sector": "Industrial & Manufacturing",
    "base": 60113,
    "demand": "High",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 60113,
        "black": 49293,
        "hispanic": 51096,
        "asian": 63119,
        "multi": 55304
      },
      {
        "year": "5",
        "white": 73110,
        "black": 59950,
        "hispanic": 62144,
        "asian": 76766,
        "multi": 67261
      },
      {
        "year": "10",
        "white": 93377,
        "black": 76569,
        "hispanic": 79371,
        "asian": 98046,
        "multi": 85907
      },
      {
        "year": "15",
        "white": 119263,
        "black": 97795,
        "hispanic": 101373,
        "asian": 125226,
        "multi": 109722
      },
      {
        "year": "20",
        "white": 152323,
        "black": 124905,
        "hispanic": 129475,
        "asian": 159940,
        "multi": 140138
      },
      {
        "year": "25",
        "white": 194549,
        "black": 159530,
        "hispanic": 165367,
        "asian": 204277,
        "multi": 178985
      },
      {
        "year": "30",
        "white": 248480,
        "black": 203754,
        "hispanic": 211208,
        "asian": 260904,
        "multi": 228602
      },
      {
        "year": "35",
        "white": 317362,
        "black": 260237,
        "hispanic": 269758,
        "asian": 333230,
        "multi": 291973
      },
      {
        "year": "40",
        "white": 405338,
        "black": 332377,
        "hispanic": 344538,
        "asian": 425605,
        "multi": 372911
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "Wrench",
        "color": "text-industrial-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-pink-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "packaging-mech",
    "name": "Packaging Mechanic",
    "sector": "Industrial & Manufacturing",
    "base": 73844,
    "demand": "High",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 73844,
        "black": 60552,
        "hispanic": 62767,
        "asian": 77536,
        "multi": 67936
      },
      {
        "year": "5",
        "white": 83510,
        "black": 68478,
        "hispanic": 70984,
        "asian": 87686,
        "multi": 76829
      },
      {
        "year": "10",
        "white": 97391,
        "black": 79861,
        "hispanic": 82783,
        "asian": 102261,
        "multi": 89600
      },
      {
        "year": "15",
        "white": 113580,
        "black": 93135,
        "hispanic": 96543,
        "asian": 119259,
        "multi": 104493
      },
      {
        "year": "20",
        "white": 132459,
        "black": 108616,
        "hispanic": 112590,
        "asian": 139082,
        "multi": 121862
      },
      {
        "year": "25",
        "white": 154476,
        "black": 126670,
        "hispanic": 131305,
        "asian": 162200,
        "multi": 142118
      },
      {
        "year": "30",
        "white": 180153,
        "black": 147725,
        "hispanic": 153130,
        "asian": 189160,
        "multi": 165741
      },
      {
        "year": "35",
        "white": 210098,
        "black": 172280,
        "hispanic": 178583,
        "asian": 220603,
        "multi": 193290
      },
      {
        "year": "40",
        "white": 245020,
        "black": 200916,
        "hispanic": 208267,
        "asian": 257271,
        "multi": 225418
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "Palette",
        "color": "text-pink-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-orange-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "process-op",
    "name": "Process Operator",
    "sector": "Industrial & Manufacturing",
    "base": 71420,
    "demand": "Moderate",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 71420,
        "black": 58564,
        "hispanic": 60707,
        "asian": 74991,
        "multi": 65706
      },
      {
        "year": "5",
        "white": 74905,
        "black": 61422,
        "hispanic": 63669,
        "asian": 78650,
        "multi": 68913
      },
      {
        "year": "10",
        "white": 79502,
        "black": 65191,
        "hispanic": 67576,
        "asian": 83477,
        "multi": 73141
      },
      {
        "year": "15",
        "white": 84380,
        "black": 69192,
        "hispanic": 71723,
        "asian": 88599,
        "multi": 77630
      },
      {
        "year": "20",
        "white": 89558,
        "black": 73437,
        "hispanic": 76124,
        "asian": 94036,
        "multi": 82393
      },
      {
        "year": "25",
        "white": 95053,
        "black": 77944,
        "hispanic": 80795,
        "asian": 99806,
        "multi": 87449
      },
      {
        "year": "30",
        "white": 100886,
        "black": 82727,
        "hispanic": 85753,
        "asian": 105931,
        "multi": 92815
      },
      {
        "year": "35",
        "white": 107077,
        "black": 87803,
        "hispanic": 91016,
        "asian": 112431,
        "multi": 98511
      },
      {
        "year": "40",
        "white": 113648,
        "black": 93191,
        "hispanic": 96601,
        "asian": 119330,
        "multi": 104556
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "TreeDeciduous",
        "color": "text-pink-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-orange-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "quality-inspector",
    "name": "Quality Inspector",
    "sector": "Industrial & Manufacturing",
    "base": 64409,
    "demand": "Stable",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 64409,
        "black": 52815,
        "hispanic": 54748,
        "asian": 67629,
        "multi": 59256
      },
      {
        "year": "5",
        "white": 77714,
        "black": 63725,
        "hispanic": 66057,
        "asian": 81600,
        "multi": 71497
      },
      {
        "year": "10",
        "white": 98274,
        "black": 80585,
        "hispanic": 83533,
        "asian": 103188,
        "multi": 90412
      },
      {
        "year": "15",
        "white": 124274,
        "black": 101905,
        "hispanic": 105633,
        "asian": 130488,
        "multi": 114332
      },
      {
        "year": "20",
        "white": 157152,
        "black": 128865,
        "hispanic": 133579,
        "asian": 165010,
        "multi": 144580
      },
      {
        "year": "25",
        "white": 198729,
        "black": 162958,
        "hispanic": 168919,
        "asian": 208665,
        "multi": 182830
      },
      {
        "year": "30",
        "white": 251305,
        "black": 206070,
        "hispanic": 213609,
        "asian": 263870,
        "multi": 231201
      },
      {
        "year": "35",
        "white": 317791,
        "black": 260589,
        "hispanic": 270122,
        "asian": 333681,
        "multi": 292368
      },
      {
        "year": "40",
        "white": 401867,
        "black": 329531,
        "hispanic": 341587,
        "asian": 421960,
        "multi": 369717
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "ShieldCheck",
        "color": "text-gray-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-amber-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "stationary-engineer",
    "name": "Stationary Engineer",
    "sector": "Industrial & Manufacturing",
    "base": 64801,
    "demand": "Critical",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 64801,
        "black": 53137,
        "hispanic": 55081,
        "asian": 68041,
        "multi": 59617
      },
      {
        "year": "5",
        "white": 79835,
        "black": 65465,
        "hispanic": 67860,
        "asian": 83827,
        "multi": 73448
      },
      {
        "year": "10",
        "white": 103623,
        "black": 84971,
        "hispanic": 88080,
        "asian": 108805,
        "multi": 95334
      },
      {
        "year": "15",
        "white": 134500,
        "black": 110290,
        "hispanic": 114325,
        "asian": 141225,
        "multi": 123740
      },
      {
        "year": "20",
        "white": 174577,
        "black": 143153,
        "hispanic": 148391,
        "asian": 183306,
        "multi": 160611
      },
      {
        "year": "25",
        "white": 226596,
        "black": 185809,
        "hispanic": 192606,
        "asian": 237926,
        "multi": 208468
      },
      {
        "year": "30",
        "white": 294115,
        "black": 241174,
        "hispanic": 249997,
        "asian": 308820,
        "multi": 270585
      },
      {
        "year": "35",
        "white": 381752,
        "black": 313037,
        "hispanic": 324489,
        "asian": 400839,
        "multi": 351212
      },
      {
        "year": "40",
        "white": 495502,
        "black": 406312,
        "hispanic": 421177,
        "asian": 520278,
        "multi": 455862
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "Microscope",
        "color": "text-indigo-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-red-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "turbine-mech",
    "name": "Turbine Mechanic",
    "sector": "Industrial & Manufacturing",
    "base": 66657,
    "demand": "High",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 66657,
        "black": 54659,
        "hispanic": 56658,
        "asian": 69990,
        "multi": 61324
      },
      {
        "year": "5",
        "white": 72942,
        "black": 59812,
        "hispanic": 62001,
        "asian": 76589,
        "multi": 67107
      },
      {
        "year": "10",
        "white": 81638,
        "black": 66943,
        "hispanic": 69392,
        "asian": 85720,
        "multi": 75107
      },
      {
        "year": "15",
        "white": 91371,
        "black": 74924,
        "hispanic": 77665,
        "asian": 95940,
        "multi": 84061
      },
      {
        "year": "20",
        "white": 102264,
        "black": 83857,
        "hispanic": 86925,
        "asian": 107378,
        "multi": 94083
      },
      {
        "year": "25",
        "white": 114456,
        "black": 93854,
        "hispanic": 97288,
        "asian": 120179,
        "multi": 105300
      },
      {
        "year": "30",
        "white": 128102,
        "black": 105043,
        "hispanic": 108887,
        "asian": 134507,
        "multi": 117854
      },
      {
        "year": "35",
        "white": 143374,
        "black": 117567,
        "hispanic": 121868,
        "asian": 150543,
        "multi": 131904
      },
      {
        "year": "40",
        "white": 160467,
        "black": 131583,
        "hispanic": 136397,
        "asian": 168490,
        "multi": 147630
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "Microscope",
        "color": "text-pink-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-emerald-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "mold-maker",
    "name": "Mold Maker",
    "sector": "Industrial & Manufacturing",
    "base": 64182,
    "demand": "Critical",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 64182,
        "black": 52629,
        "hispanic": 54555,
        "asian": 67391,
        "multi": 59047
      },
      {
        "year": "5",
        "white": 73145,
        "black": 59979,
        "hispanic": 62173,
        "asian": 76802,
        "multi": 67294
      },
      {
        "year": "10",
        "white": 86129,
        "black": 70626,
        "hispanic": 73210,
        "asian": 90436,
        "multi": 79239
      },
      {
        "year": "15",
        "white": 101418,
        "black": 83163,
        "hispanic": 86206,
        "asian": 106489,
        "multi": 93305
      },
      {
        "year": "20",
        "white": 119421,
        "black": 97925,
        "hispanic": 101508,
        "asian": 125392,
        "multi": 109868
      },
      {
        "year": "25",
        "white": 140620,
        "black": 115308,
        "hispanic": 119527,
        "asian": 147651,
        "multi": 129370
      },
      {
        "year": "30",
        "white": 165582,
        "black": 135777,
        "hispanic": 140744,
        "asian": 173861,
        "multi": 152335
      },
      {
        "year": "35",
        "white": 194974,
        "black": 159879,
        "hispanic": 165728,
        "asian": 204723,
        "multi": 179376
      },
      {
        "year": "40",
        "white": 229585,
        "black": 188259,
        "hispanic": 195147,
        "asian": 241064,
        "multi": 211218
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "Eye",
        "color": "text-purple-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "patternmaker",
    "name": "Patternmaker",
    "sector": "Industrial & Manufacturing",
    "base": 43043,
    "demand": "Critical",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 43043,
        "black": 35295,
        "hispanic": 36587,
        "asian": 45195,
        "multi": 39600
      },
      {
        "year": "5",
        "white": 45808,
        "black": 37563,
        "hispanic": 38937,
        "asian": 48099,
        "multi": 42144
      },
      {
        "year": "10",
        "white": 49516,
        "black": 40603,
        "hispanic": 42089,
        "asian": 51992,
        "multi": 45555
      },
      {
        "year": "15",
        "white": 53524,
        "black": 43890,
        "hispanic": 45495,
        "asian": 56200,
        "multi": 49242
      },
      {
        "year": "20",
        "white": 57856,
        "black": 47442,
        "hispanic": 49178,
        "asian": 60749,
        "multi": 53228
      },
      {
        "year": "25",
        "white": 62539,
        "black": 51282,
        "hispanic": 53158,
        "asian": 65666,
        "multi": 57536
      },
      {
        "year": "30",
        "white": 67601,
        "black": 55433,
        "hispanic": 57461,
        "asian": 70981,
        "multi": 62193
      },
      {
        "year": "35",
        "white": 73073,
        "black": 59919,
        "hispanic": 62112,
        "asian": 76726,
        "multi": 67227
      },
      {
        "year": "40",
        "white": 78987,
        "black": 64769,
        "hispanic": 67139,
        "asian": 82936,
        "multi": 72668
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "Brain",
        "color": "text-blue-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-red-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "industrial-painter",
    "name": "Industrial Painter",
    "sector": "Industrial & Manufacturing",
    "base": 65902,
    "demand": "Stable",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 65902,
        "black": 54040,
        "hispanic": 56017,
        "asian": 69197,
        "multi": 60630
      },
      {
        "year": "5",
        "white": 77257,
        "black": 63351,
        "hispanic": 65669,
        "asian": 81120,
        "multi": 71077
      },
      {
        "year": "10",
        "white": 94242,
        "black": 77278,
        "hispanic": 80105,
        "asian": 98954,
        "multi": 86702
      },
      {
        "year": "15",
        "white": 114959,
        "black": 94267,
        "hispanic": 97715,
        "asian": 120707,
        "multi": 105763
      },
      {
        "year": "20",
        "white": 140232,
        "black": 114990,
        "hispanic": 119197,
        "asian": 147243,
        "multi": 129013
      },
      {
        "year": "25",
        "white": 171060,
        "black": 140269,
        "hispanic": 145401,
        "asian": 179613,
        "multi": 157375
      },
      {
        "year": "30",
        "white": 208665,
        "black": 171106,
        "hispanic": 177366,
        "asian": 219099,
        "multi": 191972
      },
      {
        "year": "35",
        "white": 254538,
        "black": 208721,
        "hispanic": 216357,
        "asian": 267265,
        "multi": 234175
      },
      {
        "year": "40",
        "white": 310495,
        "black": 254606,
        "hispanic": 263921,
        "asian": 326020,
        "multi": 285655
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "Hammer",
        "color": "text-industrial-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-industrial-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "diesel-mech",
    "name": "Diesel Mechanic",
    "sector": "Transportation",
    "base": 73762,
    "demand": "High",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 73762,
        "black": 60485,
        "hispanic": 62698,
        "asian": 77450,
        "multi": 67861
      },
      {
        "year": "5",
        "white": 77977,
        "black": 63941,
        "hispanic": 66280,
        "asian": 81876,
        "multi": 71739
      },
      {
        "year": "10",
        "white": 83586,
        "black": 68541,
        "hispanic": 71048,
        "asian": 87765,
        "multi": 76899
      },
      {
        "year": "15",
        "white": 89599,
        "black": 73471,
        "hispanic": 76159,
        "asian": 94079,
        "multi": 82431
      },
      {
        "year": "20",
        "white": 96044,
        "black": 78756,
        "hispanic": 81637,
        "asian": 100846,
        "multi": 88360
      },
      {
        "year": "25",
        "white": 102952,
        "black": 84421,
        "hispanic": 87509,
        "asian": 108100,
        "multi": 94716
      },
      {
        "year": "30",
        "white": 110358,
        "black": 90493,
        "hispanic": 93804,
        "asian": 115876,
        "multi": 101529
      },
      {
        "year": "35",
        "white": 118296,
        "black": 97003,
        "hispanic": 100552,
        "asian": 124211,
        "multi": 108832
      },
      {
        "year": "40",
        "white": 126805,
        "black": 103980,
        "hispanic": 107785,
        "asian": 133146,
        "multi": 116661
      }
    ],
    "aptitude": "Requires specialized training in transportation systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Transportation field.",
        "icon": "Wind",
        "color": "text-amber-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-red-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "marine-mech",
    "name": "Marine Mechanic",
    "sector": "Transportation",
    "base": 71426,
    "demand": "Stable",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 71426,
        "black": 58569,
        "hispanic": 60712,
        "asian": 74997,
        "multi": 65712
      },
      {
        "year": "5",
        "white": 86635,
        "black": 71041,
        "hispanic": 73640,
        "asian": 90967,
        "multi": 79704
      },
      {
        "year": "10",
        "white": 110278,
        "black": 90428,
        "hispanic": 93737,
        "asian": 115792,
        "multi": 101456
      },
      {
        "year": "15",
        "white": 140374,
        "black": 115107,
        "hispanic": 119318,
        "asian": 147393,
        "multi": 129144
      },
      {
        "year": "20",
        "white": 178683,
        "black": 146520,
        "hispanic": 151881,
        "asian": 187617,
        "multi": 164389
      },
      {
        "year": "25",
        "white": 227447,
        "black": 186507,
        "hispanic": 193330,
        "asian": 238819,
        "multi": 209251
      },
      {
        "year": "30",
        "white": 289519,
        "black": 237406,
        "hispanic": 246091,
        "asian": 303995,
        "multi": 266357
      },
      {
        "year": "35",
        "white": 368531,
        "black": 302195,
        "hispanic": 313251,
        "asian": 386957,
        "multi": 339048
      },
      {
        "year": "40",
        "white": 469105,
        "black": 384666,
        "hispanic": 398739,
        "asian": 492561,
        "multi": 431577
      }
    ],
    "aptitude": "Requires specialized training in transportation systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Transportation field.",
        "icon": "ShieldCheck",
        "color": "text-pink-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-indigo-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "motorcycle-mech",
    "name": "Motorcycle Mechanic",
    "sector": "Transportation",
    "base": 65802,
    "demand": "Moderate",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 65802,
        "black": 53958,
        "hispanic": 55932,
        "asian": 69092,
        "multi": 60538
      },
      {
        "year": "5",
        "white": 74215,
        "black": 60856,
        "hispanic": 63083,
        "asian": 77926,
        "multi": 68278
      },
      {
        "year": "10",
        "white": 86259,
        "black": 70733,
        "hispanic": 73320,
        "asian": 90572,
        "multi": 79359
      },
      {
        "year": "15",
        "white": 100258,
        "black": 82212,
        "hispanic": 85220,
        "asian": 105271,
        "multi": 92238
      },
      {
        "year": "20",
        "white": 116529,
        "black": 95554,
        "hispanic": 99050,
        "asian": 122356,
        "multi": 107207
      },
      {
        "year": "25",
        "white": 135441,
        "black": 111062,
        "hispanic": 115125,
        "asian": 142213,
        "multi": 124606
      },
      {
        "year": "30",
        "white": 157422,
        "black": 129086,
        "hispanic": 133809,
        "asian": 165293,
        "multi": 144828
      },
      {
        "year": "35",
        "white": 182970,
        "black": 150036,
        "hispanic": 155525,
        "asian": 192119,
        "multi": 168333
      },
      {
        "year": "40",
        "white": 212665,
        "black": 174385,
        "hispanic": 180765,
        "asian": 223298,
        "multi": 195652
      }
    ],
    "aptitude": "Requires specialized training in transportation systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Transportation field.",
        "icon": "TreeDeciduous",
        "color": "text-gray-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-industrial-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "auto-body-repair",
    "name": "Auto Body Repairer",
    "sector": "Transportation",
    "base": 47928,
    "demand": "Stable",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 47928,
        "black": 39301,
        "hispanic": 40739,
        "asian": 50324,
        "multi": 44094
      },
      {
        "year": "5",
        "white": 50322,
        "black": 41264,
        "hispanic": 42773,
        "asian": 52838,
        "multi": 46296
      },
      {
        "year": "10",
        "white": 53483,
        "black": 43856,
        "hispanic": 45460,
        "asian": 56157,
        "multi": 49204
      },
      {
        "year": "15",
        "white": 56842,
        "black": 46611,
        "hispanic": 48316,
        "asian": 59684,
        "multi": 52295
      },
      {
        "year": "20",
        "white": 60413,
        "black": 49539,
        "hispanic": 51351,
        "asian": 63434,
        "multi": 55580
      },
      {
        "year": "25",
        "white": 64208,
        "black": 52650,
        "hispanic": 54577,
        "asian": 67418,
        "multi": 59071
      },
      {
        "year": "30",
        "white": 68241,
        "black": 55958,
        "hispanic": 58005,
        "asian": 71653,
        "multi": 62782
      },
      {
        "year": "35",
        "white": 72528,
        "black": 59473,
        "hispanic": 61649,
        "asian": 76154,
        "multi": 66726
      },
      {
        "year": "40",
        "white": 77084,
        "black": 63209,
        "hispanic": 65521,
        "asian": 80938,
        "multi": 70917
      }
    ],
    "aptitude": "Requires specialized training in transportation systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Transportation field.",
        "icon": "Baby",
        "color": "text-blue-400"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-purple-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "truck-driver",
    "name": "Truck Driver (CDL)",
    "sector": "Transportation",
    "base": 38068,
    "demand": "Stable",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 38068,
        "black": 31216,
        "hispanic": 32358,
        "asian": 39971,
        "multi": 35023
      },
      {
        "year": "5",
        "white": 45286,
        "black": 37134,
        "hispanic": 38493,
        "asian": 47550,
        "multi": 41663
      },
      {
        "year": "10",
        "white": 56262,
        "black": 46135,
        "hispanic": 47823,
        "asian": 59075,
        "multi": 51761
      },
      {
        "year": "15",
        "white": 69899,
        "black": 57317,
        "hispanic": 59414,
        "asian": 73393,
        "multi": 64307
      },
      {
        "year": "20",
        "white": 86840,
        "black": 71209,
        "hispanic": 73814,
        "asian": 91182,
        "multi": 79893
      },
      {
        "year": "25",
        "white": 107888,
        "black": 88468,
        "hispanic": 91705,
        "asian": 113283,
        "multi": 99257
      },
      {
        "year": "30",
        "white": 134038,
        "black": 109911,
        "hispanic": 113932,
        "asian": 140739,
        "multi": 123315
      },
      {
        "year": "35",
        "white": 166525,
        "black": 136551,
        "hispanic": 141546,
        "asian": 174851,
        "multi": 153203
      },
      {
        "year": "40",
        "white": 206887,
        "black": 169647,
        "hispanic": 175854,
        "asian": 217231,
        "multi": 190336
      }
    ],
    "aptitude": "Requires specialized training in transportation systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Transportation field.",
        "icon": "Droplets",
        "color": "text-amber-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-gray-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "avionics-tech",
    "name": "Avionics Technician",
    "sector": "Transportation",
    "base": 35215,
    "demand": "High",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 35215,
        "black": 28876,
        "hispanic": 29933,
        "asian": 36976,
        "multi": 32398
      },
      {
        "year": "5",
        "white": 43296,
        "black": 35503,
        "hispanic": 36802,
        "asian": 45461,
        "multi": 39832
      },
      {
        "year": "10",
        "white": 56053,
        "black": 45963,
        "hispanic": 47645,
        "asian": 58856,
        "multi": 51569
      },
      {
        "year": "15",
        "white": 72569,
        "black": 59506,
        "hispanic": 61683,
        "asian": 76197,
        "multi": 66763
      },
      {
        "year": "20",
        "white": 93951,
        "black": 77039,
        "hispanic": 79858,
        "asian": 98648,
        "multi": 86435
      },
      {
        "year": "25",
        "white": 121633,
        "black": 99739,
        "hispanic": 103388,
        "asian": 127714,
        "multi": 111902
      },
      {
        "year": "30",
        "white": 157471,
        "black": 129126,
        "hispanic": 133850,
        "asian": 165344,
        "multi": 144873
      },
      {
        "year": "35",
        "white": 203869,
        "black": 167172,
        "hispanic": 173288,
        "asian": 214062,
        "multi": 187559
      },
      {
        "year": "40",
        "white": 263938,
        "black": 216429,
        "hispanic": 224347,
        "asian": 277134,
        "multi": 242823
      }
    ],
    "aptitude": "Requires specialized training in transportation systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Transportation field.",
        "icon": "Eye",
        "color": "text-emerald-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-indigo-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "bicycle-mech",
    "name": "Bicycle Mechanic",
    "sector": "Transportation",
    "base": 41763,
    "demand": "Very High",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 41763,
        "black": 34246,
        "hispanic": 35499,
        "asian": 43851,
        "multi": 38422
      },
      {
        "year": "5",
        "white": 45585,
        "black": 37380,
        "hispanic": 38748,
        "asian": 47865,
        "multi": 41939
      },
      {
        "year": "10",
        "white": 50859,
        "black": 41704,
        "hispanic": 43230,
        "asian": 53402,
        "multi": 46790
      },
      {
        "year": "15",
        "white": 56743,
        "black": 46529,
        "hispanic": 48231,
        "asian": 59580,
        "multi": 52203
      },
      {
        "year": "20",
        "white": 63307,
        "black": 51912,
        "hispanic": 53811,
        "asian": 66473,
        "multi": 58243
      },
      {
        "year": "25",
        "white": 70631,
        "black": 57918,
        "hispanic": 60037,
        "asian": 74163,
        "multi": 64981
      },
      {
        "year": "30",
        "white": 78803,
        "black": 64618,
        "hispanic": 66982,
        "asian": 82743,
        "multi": 72498
      },
      {
        "year": "35",
        "white": 87919,
        "black": 72094,
        "hispanic": 74731,
        "asian": 92315,
        "multi": 80886
      },
      {
        "year": "40",
        "white": 98090,
        "black": 80434,
        "hispanic": 83377,
        "asian": 102995,
        "multi": 90243
      }
    ],
    "aptitude": "Requires specialized training in transportation systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Transportation field.",
        "icon": "Microscope",
        "color": "text-pink-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "railroad-carman",
    "name": "Railroad Carman",
    "sector": "Transportation",
    "base": 62379,
    "demand": "Critical",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 62379,
        "black": 51151,
        "hispanic": 53022,
        "asian": 65498,
        "multi": 57389
      },
      {
        "year": "5",
        "white": 65346,
        "black": 53583,
        "hispanic": 55544,
        "asian": 68613,
        "multi": 60118
      },
      {
        "year": "10",
        "white": 69253,
        "black": 56787,
        "hispanic": 58865,
        "asian": 72716,
        "multi": 63713
      },
      {
        "year": "15",
        "white": 73394,
        "black": 60183,
        "hispanic": 62385,
        "asian": 77064,
        "multi": 67522
      },
      {
        "year": "20",
        "white": 77783,
        "black": 63782,
        "hispanic": 66115,
        "asian": 81672,
        "multi": 71560
      },
      {
        "year": "25",
        "white": 82434,
        "black": 67596,
        "hispanic": 70069,
        "asian": 86555,
        "multi": 75839
      },
      {
        "year": "30",
        "white": 87363,
        "black": 71637,
        "hispanic": 74258,
        "asian": 91731,
        "multi": 80374
      },
      {
        "year": "35",
        "white": 92587,
        "black": 75921,
        "hispanic": 78699,
        "asian": 97216,
        "multi": 85180
      },
      {
        "year": "40",
        "white": 98123,
        "black": 80461,
        "hispanic": 83404,
        "asian": 103029,
        "multi": 90273
      }
    ],
    "aptitude": "Requires specialized training in transportation systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Transportation field.",
        "icon": "Hammer",
        "color": "text-industrial-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "small-engine-mech",
    "name": "Small Engine Mechanic",
    "sector": "Transportation",
    "base": 65336,
    "demand": "Stable",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 65336,
        "black": 53576,
        "hispanic": 55536,
        "asian": 68603,
        "multi": 60109
      },
      {
        "year": "5",
        "white": 68273,
        "black": 55984,
        "hispanic": 58032,
        "asian": 71686,
        "multi": 62811
      },
      {
        "year": "10",
        "white": 72130,
        "black": 59146,
        "hispanic": 61310,
        "asian": 75736,
        "multi": 66359
      },
      {
        "year": "15",
        "white": 76205,
        "black": 62488,
        "hispanic": 64774,
        "asian": 80015,
        "multi": 70108
      },
      {
        "year": "20",
        "white": 80510,
        "black": 66018,
        "hispanic": 68433,
        "asian": 84535,
        "multi": 74069
      },
      {
        "year": "25",
        "white": 85058,
        "black": 69748,
        "hispanic": 72299,
        "asian": 89311,
        "multi": 78254
      },
      {
        "year": "30",
        "white": 89864,
        "black": 73688,
        "hispanic": 76384,
        "asian": 94357,
        "multi": 82674
      },
      {
        "year": "35",
        "white": 94940,
        "black": 77851,
        "hispanic": 80699,
        "asian": 99687,
        "multi": 87345
      },
      {
        "year": "40",
        "white": 100304,
        "black": 82249,
        "hispanic": 85258,
        "asian": 105319,
        "multi": 92280
      }
    ],
    "aptitude": "Requires specialized training in transportation systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Transportation field.",
        "icon": "Flame",
        "color": "text-green-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-pink-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "forklift-mech",
    "name": "Forklift Mechanic",
    "sector": "Transportation",
    "base": 57575,
    "demand": "Moderate",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 57575,
        "black": 47212,
        "hispanic": 48939,
        "asian": 60454,
        "multi": 52969
      },
      {
        "year": "5",
        "white": 66253,
        "black": 54328,
        "hispanic": 56315,
        "asian": 69566,
        "multi": 60953
      },
      {
        "year": "10",
        "white": 78963,
        "black": 64750,
        "hispanic": 67118,
        "asian": 82911,
        "multi": 72646
      },
      {
        "year": "15",
        "white": 94111,
        "black": 77171,
        "hispanic": 79994,
        "asian": 98816,
        "multi": 86582
      },
      {
        "year": "20",
        "white": 112164,
        "black": 91975,
        "hispanic": 95340,
        "asian": 117773,
        "multi": 103191
      },
      {
        "year": "25",
        "white": 133681,
        "black": 109619,
        "hispanic": 113629,
        "asian": 140365,
        "multi": 122987
      },
      {
        "year": "30",
        "white": 159326,
        "black": 130647,
        "hispanic": 135427,
        "asian": 167292,
        "multi": 146580
      },
      {
        "year": "35",
        "white": 189890,
        "black": 155710,
        "hispanic": 161407,
        "asian": 199385,
        "multi": 174699
      },
      {
        "year": "40",
        "white": 226318,
        "black": 185581,
        "hispanic": 192370,
        "asian": 237634,
        "multi": 208213
      }
    ],
    "aptitude": "Requires specialized training in transportation systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Transportation field.",
        "icon": "Brain",
        "color": "text-purple-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-green-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "fleet-manager",
    "name": "Fleet Manager",
    "sector": "Transportation",
    "base": 47733,
    "demand": "Stable",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 47733,
        "black": 39141,
        "hispanic": 40573,
        "asian": 50120,
        "multi": 43914
      },
      {
        "year": "5",
        "white": 57893,
        "black": 47472,
        "hispanic": 49209,
        "asian": 60788,
        "multi": 53262
      },
      {
        "year": "10",
        "white": 73687,
        "black": 60423,
        "hispanic": 62634,
        "asian": 77371,
        "multi": 67792
      },
      {
        "year": "15",
        "white": 93788,
        "black": 76907,
        "hispanic": 79720,
        "asian": 98478,
        "multi": 86285
      },
      {
        "year": "20",
        "white": 119374,
        "black": 97887,
        "hispanic": 101468,
        "asian": 125343,
        "multi": 109824
      },
      {
        "year": "25",
        "white": 151940,
        "black": 124590,
        "hispanic": 129149,
        "asian": 159537,
        "multi": 139784
      },
      {
        "year": "30",
        "white": 193389,
        "black": 158579,
        "hispanic": 164381,
        "asian": 203059,
        "multi": 177918
      },
      {
        "year": "35",
        "white": 246146,
        "black": 201840,
        "hispanic": 209224,
        "asian": 258453,
        "multi": 226454
      },
      {
        "year": "40",
        "white": 313295,
        "black": 256902,
        "hispanic": 266301,
        "asian": 328960,
        "multi": 288232
      }
    ],
    "aptitude": "Requires specialized training in transportation systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Transportation field.",
        "icon": "CheckCircle2",
        "color": "text-blue-400"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-orange-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "logistics-coord",
    "name": "Logistics Coordinator",
    "sector": "Transportation",
    "base": 52827,
    "demand": "High",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 52827,
        "black": 43318,
        "hispanic": 44903,
        "asian": 55468,
        "multi": 48601
      },
      {
        "year": "5",
        "white": 58857,
        "black": 48263,
        "hispanic": 50029,
        "asian": 61800,
        "multi": 54149
      },
      {
        "year": "10",
        "white": 67372,
        "black": 55245,
        "hispanic": 57266,
        "asian": 70741,
        "multi": 61982
      },
      {
        "year": "15",
        "white": 77118,
        "black": 63237,
        "hispanic": 65551,
        "asian": 80974,
        "multi": 70949
      },
      {
        "year": "20",
        "white": 88275,
        "black": 72386,
        "hispanic": 75034,
        "asian": 92689,
        "multi": 81213
      },
      {
        "year": "25",
        "white": 101046,
        "black": 82857,
        "hispanic": 85889,
        "asian": 106098,
        "multi": 92962
      },
      {
        "year": "30",
        "white": 115664,
        "black": 94844,
        "hispanic": 98314,
        "asian": 121447,
        "multi": 106411
      },
      {
        "year": "35",
        "white": 132396,
        "black": 108565,
        "hispanic": 112537,
        "asian": 139016,
        "multi": 121805
      },
      {
        "year": "40",
        "white": 151550,
        "black": 124271,
        "hispanic": 128817,
        "asian": 159127,
        "multi": 139426
      }
    ],
    "aptitude": "Requires specialized training in transportation systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Transportation field.",
        "icon": "Microscope",
        "color": "text-orange-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "warehouse-manager",
    "name": "Warehouse Manager",
    "sector": "Transportation",
    "base": 67750,
    "demand": "Stable",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 67750,
        "black": 55555,
        "hispanic": 57588,
        "asian": 71138,
        "multi": 62330
      },
      {
        "year": "5",
        "white": 74298,
        "black": 60925,
        "hispanic": 63154,
        "asian": 78013,
        "multi": 68354
      },
      {
        "year": "10",
        "white": 83381,
        "black": 68372,
        "hispanic": 70874,
        "asian": 87550,
        "multi": 76710
      },
      {
        "year": "15",
        "white": 93574,
        "black": 76730,
        "hispanic": 79538,
        "asian": 98252,
        "multi": 86088
      },
      {
        "year": "20",
        "white": 105012,
        "black": 86110,
        "hispanic": 89260,
        "asian": 110263,
        "multi": 96611
      },
      {
        "year": "25",
        "white": 117849,
        "black": 96637,
        "hispanic": 100172,
        "asian": 123742,
        "multi": 108421
      },
      {
        "year": "30",
        "white": 132256,
        "black": 108450,
        "hispanic": 112417,
        "asian": 138869,
        "multi": 121675
      },
      {
        "year": "35",
        "white": 148423,
        "black": 121707,
        "hispanic": 126160,
        "asian": 155844,
        "multi": 136549
      },
      {
        "year": "40",
        "white": 166567,
        "black": 136585,
        "hispanic": 141582,
        "asian": 174895,
        "multi": 153242
      }
    ],
    "aptitude": "Requires specialized training in transportation systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Transportation field.",
        "icon": "Zap",
        "color": "text-blue-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-red-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "heavy-truck-mech",
    "name": "Heavy Truck Mechanic",
    "sector": "Transportation",
    "base": 38789,
    "demand": "Very High",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 38789,
        "black": 31807,
        "hispanic": 32971,
        "asian": 40728,
        "multi": 35686
      },
      {
        "year": "5",
        "white": 47725,
        "black": 39134,
        "hispanic": 40566,
        "asian": 50111,
        "multi": 43907
      },
      {
        "year": "10",
        "white": 61842,
        "black": 50711,
        "hispanic": 52566,
        "asian": 64934,
        "multi": 56895
      },
      {
        "year": "15",
        "white": 80136,
        "black": 65711,
        "hispanic": 68115,
        "asian": 84143,
        "multi": 73725
      },
      {
        "year": "20",
        "white": 103841,
        "black": 85150,
        "hispanic": 88265,
        "asian": 109033,
        "multi": 95534
      },
      {
        "year": "25",
        "white": 134559,
        "black": 110338,
        "hispanic": 114375,
        "asian": 141286,
        "multi": 123794
      },
      {
        "year": "30",
        "white": 174363,
        "black": 142977,
        "hispanic": 148208,
        "asian": 183081,
        "multi": 160414
      },
      {
        "year": "35",
        "white": 225941,
        "black": 185272,
        "hispanic": 192050,
        "asian": 237238,
        "multi": 207866
      },
      {
        "year": "40",
        "white": 292778,
        "black": 240078,
        "hispanic": 248861,
        "asian": 307417,
        "multi": 269355
      }
    ],
    "aptitude": "Requires specialized training in transportation systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Transportation field.",
        "icon": "Palette",
        "color": "text-red-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-gray-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "line-worker",
    "name": "Electrical Line Worker",
    "sector": "Energy & Utilities",
    "base": 42030,
    "demand": "High",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 42030,
        "black": 34465,
        "hispanic": 35726,
        "asian": 44132,
        "multi": 38668
      },
      {
        "year": "5",
        "white": 45066,
        "black": 36954,
        "hispanic": 38306,
        "asian": 47320,
        "multi": 41461
      },
      {
        "year": "10",
        "white": 49172,
        "black": 40321,
        "hispanic": 41796,
        "asian": 51631,
        "multi": 45238
      },
      {
        "year": "15",
        "white": 53652,
        "black": 43994,
        "hispanic": 45604,
        "asian": 56334,
        "multi": 49360
      },
      {
        "year": "20",
        "white": 58540,
        "black": 48002,
        "hispanic": 49759,
        "asian": 61467,
        "multi": 53856
      },
      {
        "year": "25",
        "white": 63873,
        "black": 52376,
        "hispanic": 54292,
        "asian": 67066,
        "multi": 58763
      },
      {
        "year": "30",
        "white": 69692,
        "black": 57147,
        "hispanic": 59238,
        "asian": 73176,
        "multi": 64116
      },
      {
        "year": "35",
        "white": 76041,
        "black": 62354,
        "hispanic": 64635,
        "asian": 79843,
        "multi": 69958
      },
      {
        "year": "40",
        "white": 82968,
        "black": 68034,
        "hispanic": 70523,
        "asian": 87117,
        "multi": 76331
      }
    ],
    "aptitude": "Requires specialized training in electrical systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Electrical field.",
        "icon": "ShieldCheck",
        "color": "text-blue-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-indigo-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "telecom-installer",
    "name": "Telecom Installer",
    "sector": "Energy & Utilities",
    "base": 48893,
    "demand": "High",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 48893,
        "black": 40092,
        "hispanic": 41559,
        "asian": 51338,
        "multi": 44982
      },
      {
        "year": "5",
        "white": 52046,
        "black": 42678,
        "hispanic": 44239,
        "asian": 54649,
        "multi": 47883
      },
      {
        "year": "10",
        "white": 56276,
        "black": 46146,
        "hispanic": 47834,
        "asian": 59089,
        "multi": 51774
      },
      {
        "year": "15",
        "white": 60849,
        "black": 49896,
        "hispanic": 51721,
        "asian": 63891,
        "multi": 55981
      },
      {
        "year": "20",
        "white": 65793,
        "black": 53950,
        "hispanic": 55924,
        "asian": 69083,
        "multi": 60530
      },
      {
        "year": "25",
        "white": 71139,
        "black": 58334,
        "hispanic": 60468,
        "asian": 74696,
        "multi": 65448
      },
      {
        "year": "30",
        "white": 76920,
        "black": 63074,
        "hispanic": 65382,
        "asian": 80766,
        "multi": 70767
      },
      {
        "year": "35",
        "white": 83171,
        "black": 68200,
        "hispanic": 70695,
        "asian": 87329,
        "multi": 76517
      },
      {
        "year": "40",
        "white": 89929,
        "black": 73742,
        "hispanic": 76440,
        "asian": 94425,
        "multi": 82735
      }
    ],
    "aptitude": "Requires specialized training in electrical systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Electrical field.",
        "icon": "CheckCircle2",
        "color": "text-green-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-indigo-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "security-system-tech",
    "name": "Security System Technician",
    "sector": "Energy & Utilities",
    "base": 70336,
    "demand": "Stable",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 70336,
        "black": 57676,
        "hispanic": 59786,
        "asian": 73853,
        "multi": 64709
      },
      {
        "year": "5",
        "white": 73998,
        "black": 60678,
        "hispanic": 62898,
        "asian": 77698,
        "multi": 68078
      },
      {
        "year": "10",
        "white": 78844,
        "black": 64652,
        "hispanic": 67017,
        "asian": 82786,
        "multi": 72536
      },
      {
        "year": "15",
        "white": 84008,
        "black": 68886,
        "hispanic": 71407,
        "asian": 88208,
        "multi": 77287
      },
      {
        "year": "20",
        "white": 89510,
        "black": 73398,
        "hispanic": 76083,
        "asian": 93985,
        "multi": 82349
      },
      {
        "year": "25",
        "white": 95372,
        "black": 78205,
        "hispanic": 81066,
        "asian": 100141,
        "multi": 87742
      },
      {
        "year": "30",
        "white": 101618,
        "black": 83327,
        "hispanic": 86375,
        "asian": 106699,
        "multi": 93489
      },
      {
        "year": "35",
        "white": 108273,
        "black": 88784,
        "hispanic": 92032,
        "asian": 113687,
        "multi": 99612
      },
      {
        "year": "40",
        "white": 115365,
        "black": 94599,
        "hispanic": 98060,
        "asian": 121133,
        "multi": 106135
      }
    ],
    "aptitude": "Requires specialized training in electrical systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Electrical field.",
        "icon": "Droplets",
        "color": "text-amber-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-orange-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "fiber-optic-tech",
    "name": "Fiber Optic Technician",
    "sector": "Energy & Utilities",
    "base": 64344,
    "demand": "Stable",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 64344,
        "black": 52762,
        "hispanic": 54692,
        "asian": 67561,
        "multi": 59196
      },
      {
        "year": "5",
        "white": 71477,
        "black": 58611,
        "hispanic": 60755,
        "asian": 75050,
        "multi": 65759
      },
      {
        "year": "10",
        "white": 81514,
        "black": 66842,
        "hispanic": 69287,
        "asian": 85590,
        "multi": 74993
      },
      {
        "year": "15",
        "white": 92962,
        "black": 76229,
        "hispanic": 79018,
        "asian": 97610,
        "multi": 85525
      },
      {
        "year": "20",
        "white": 106017,
        "black": 86934,
        "hispanic": 90114,
        "asian": 111318,
        "multi": 97536
      },
      {
        "year": "25",
        "white": 120905,
        "black": 99142,
        "hispanic": 102769,
        "asian": 126951,
        "multi": 111233
      },
      {
        "year": "30",
        "white": 137885,
        "black": 113065,
        "hispanic": 117202,
        "asian": 144779,
        "multi": 126854
      },
      {
        "year": "35",
        "white": 157248,
        "black": 128944,
        "hispanic": 133661,
        "asian": 165111,
        "multi": 144668
      },
      {
        "year": "40",
        "white": 179331,
        "black": 147052,
        "hispanic": 152432,
        "asian": 188298,
        "multi": 164985
      }
    ],
    "aptitude": "Requires specialized training in electrical systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Electrical field.",
        "icon": "Target",
        "color": "text-green-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-emerald-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "solar-installer",
    "name": "Solar Panel Installer",
    "sector": "Energy & Utilities",
    "base": 57342,
    "demand": "Stable",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 57342,
        "black": 47020,
        "hispanic": 48741,
        "asian": 60209,
        "multi": 52755
      },
      {
        "year": "5",
        "white": 64202,
        "black": 52646,
        "hispanic": 54572,
        "asian": 67412,
        "multi": 59066
      },
      {
        "year": "10",
        "white": 73942,
        "black": 60633,
        "hispanic": 62851,
        "asian": 77639,
        "multi": 68027
      },
      {
        "year": "15",
        "white": 85160,
        "black": 69831,
        "hispanic": 72386,
        "asian": 89418,
        "multi": 78348
      },
      {
        "year": "20",
        "white": 98080,
        "black": 80426,
        "hispanic": 83368,
        "asian": 102984,
        "multi": 90234
      },
      {
        "year": "25",
        "white": 112960,
        "black": 92628,
        "hispanic": 96016,
        "asian": 118608,
        "multi": 103924
      },
      {
        "year": "30",
        "white": 130098,
        "black": 106680,
        "hispanic": 110583,
        "asian": 136603,
        "multi": 119690
      },
      {
        "year": "35",
        "white": 149836,
        "black": 122865,
        "hispanic": 127360,
        "asian": 157327,
        "multi": 137849
      },
      {
        "year": "40",
        "white": 172568,
        "black": 141506,
        "hispanic": 146683,
        "asian": 181196,
        "multi": 158762
      }
    ],
    "aptitude": "Requires specialized training in electrical systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Electrical field.",
        "icon": "Wind",
        "color": "text-orange-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-emerald-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "wind-tech",
    "name": "Wind Turbine Technician",
    "sector": "Energy & Utilities",
    "base": 66725,
    "demand": "Stable",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 66725,
        "black": 54715,
        "hispanic": 56716,
        "asian": 70061,
        "multi": 61387
      },
      {
        "year": "5",
        "white": 76969,
        "black": 63114,
        "hispanic": 65423,
        "asian": 80817,
        "multi": 70811
      },
      {
        "year": "10",
        "white": 92012,
        "black": 75450,
        "hispanic": 78210,
        "asian": 96612,
        "multi": 84651
      },
      {
        "year": "15",
        "white": 109995,
        "black": 90196,
        "hispanic": 93496,
        "asian": 115495,
        "multi": 101196
      },
      {
        "year": "20",
        "white": 131494,
        "black": 107825,
        "hispanic": 111770,
        "asian": 138068,
        "multi": 120974
      },
      {
        "year": "25",
        "white": 157194,
        "black": 128899,
        "hispanic": 133615,
        "asian": 165053,
        "multi": 144618
      },
      {
        "year": "30",
        "white": 187917,
        "black": 154092,
        "hispanic": 159729,
        "asian": 197313,
        "multi": 172884
      },
      {
        "year": "35",
        "white": 224645,
        "black": 184209,
        "hispanic": 190948,
        "asian": 235877,
        "multi": 206673
      },
      {
        "year": "40",
        "white": 268551,
        "black": 220212,
        "hispanic": 228268,
        "asian": 281979,
        "multi": 247067
      }
    ],
    "aptitude": "Requires specialized training in electrical systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Electrical field.",
        "icon": "CheckCircle2",
        "color": "text-blue-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-emerald-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "audio-visual-tech",
    "name": "Audio Visual Technician",
    "sector": "Energy & Utilities",
    "base": 54478,
    "demand": "High",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 54478,
        "black": 44672,
        "hispanic": 46306,
        "asian": 57202,
        "multi": 50120
      },
      {
        "year": "5",
        "white": 64015,
        "black": 52492,
        "hispanic": 54413,
        "asian": 67216,
        "multi": 58894
      },
      {
        "year": "10",
        "white": 78317,
        "black": 64220,
        "hispanic": 66570,
        "asian": 82233,
        "multi": 72052
      },
      {
        "year": "15",
        "white": 95815,
        "black": 78569,
        "hispanic": 81443,
        "asian": 100606,
        "multi": 88150
      },
      {
        "year": "20",
        "white": 117223,
        "black": 96123,
        "hispanic": 99639,
        "asian": 123084,
        "multi": 107845
      },
      {
        "year": "25",
        "white": 143413,
        "black": 117599,
        "hispanic": 121901,
        "asian": 150584,
        "multi": 131940
      },
      {
        "year": "30",
        "white": 175455,
        "black": 143873,
        "hispanic": 149136,
        "asian": 184227,
        "multi": 161418
      },
      {
        "year": "35",
        "white": 214655,
        "black": 176017,
        "hispanic": 182457,
        "asian": 225388,
        "multi": 197483
      },
      {
        "year": "40",
        "white": 262614,
        "black": 215343,
        "hispanic": 223222,
        "asian": 275745,
        "multi": 241605
      }
    ],
    "aptitude": "Requires specialized training in electrical systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Electrical field.",
        "icon": "Wrench",
        "color": "text-pink-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-purple-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "computer-repair-tech",
    "name": "Computer Repair Tech",
    "sector": "Energy & Utilities",
    "base": 35982,
    "demand": "Very High",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 35982,
        "black": 29505,
        "hispanic": 30585,
        "asian": 37781,
        "multi": 33103
      },
      {
        "year": "5",
        "white": 40256,
        "black": 33010,
        "hispanic": 34218,
        "asian": 42269,
        "multi": 37036
      },
      {
        "year": "10",
        "white": 46319,
        "black": 37982,
        "hispanic": 39372,
        "asian": 48635,
        "multi": 42614
      },
      {
        "year": "15",
        "white": 53296,
        "black": 43703,
        "hispanic": 45302,
        "asian": 55961,
        "multi": 49032
      },
      {
        "year": "20",
        "white": 61324,
        "black": 50285,
        "hispanic": 52125,
        "asian": 64390,
        "multi": 56418
      },
      {
        "year": "25",
        "white": 70560,
        "black": 57859,
        "hispanic": 59976,
        "asian": 74088,
        "multi": 64915
      },
      {
        "year": "30",
        "white": 81188,
        "black": 66574,
        "hispanic": 69010,
        "asian": 85247,
        "multi": 74693
      },
      {
        "year": "35",
        "white": 93417,
        "black": 76602,
        "hispanic": 79404,
        "asian": 98087,
        "multi": 85943
      },
      {
        "year": "40",
        "white": 107487,
        "black": 88139,
        "hispanic": 91364,
        "asian": 112861,
        "multi": 98888
      }
    ],
    "aptitude": "Requires specialized training in electrical systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Electrical field.",
        "icon": "CheckCircle2",
        "color": "text-purple-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "electronics-bench-tech",
    "name": "Electronics Bench Tech",
    "sector": "Energy & Utilities",
    "base": 71263,
    "demand": "Very High",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 71263,
        "black": 58436,
        "hispanic": 60574,
        "asian": 74826,
        "multi": 65562
      },
      {
        "year": "5",
        "white": 87552,
        "black": 71792,
        "hispanic": 74419,
        "asian": 91929,
        "multi": 80547
      },
      {
        "year": "10",
        "white": 113244,
        "black": 92860,
        "hispanic": 96257,
        "asian": 118906,
        "multi": 104184
      },
      {
        "year": "15",
        "white": 146475,
        "black": 120109,
        "hispanic": 124504,
        "asian": 153799,
        "multi": 134757
      },
      {
        "year": "20",
        "white": 189458,
        "black": 155356,
        "hispanic": 161039,
        "asian": 198931,
        "multi": 174301
      },
      {
        "year": "25",
        "white": 245055,
        "black": 200945,
        "hispanic": 208296,
        "asian": 257307,
        "multi": 225450
      },
      {
        "year": "30",
        "white": 316966,
        "black": 259912,
        "hispanic": 269421,
        "asian": 332814,
        "multi": 291609
      },
      {
        "year": "35",
        "white": 409980,
        "black": 336184,
        "hispanic": 348483,
        "asian": 430479,
        "multi": 377181
      },
      {
        "year": "40",
        "white": 530289,
        "black": 434837,
        "hispanic": 450745,
        "asian": 556803,
        "multi": 487866
      }
    ],
    "aptitude": "Requires specialized training in electrical systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Electrical field.",
        "icon": "Microscope",
        "color": "text-purple-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-purple-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "substation-tech",
    "name": "Substation Technician",
    "sector": "Energy & Utilities",
    "base": 69285,
    "demand": "Critical",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 69285,
        "black": 56814,
        "hispanic": 58892,
        "asian": 72749,
        "multi": 63742
      },
      {
        "year": "5",
        "white": 73173,
        "black": 60002,
        "hispanic": 62197,
        "asian": 76832,
        "multi": 67319
      },
      {
        "year": "10",
        "white": 78341,
        "black": 64240,
        "hispanic": 66590,
        "asian": 82258,
        "multi": 72074
      },
      {
        "year": "15",
        "white": 83875,
        "black": 68777,
        "hispanic": 71294,
        "asian": 88068,
        "multi": 77165
      },
      {
        "year": "20",
        "white": 89799,
        "black": 73635,
        "hispanic": 76329,
        "asian": 94289,
        "multi": 82615
      },
      {
        "year": "25",
        "white": 96142,
        "black": 78836,
        "hispanic": 81720,
        "asian": 100949,
        "multi": 88450
      },
      {
        "year": "30",
        "white": 102932,
        "black": 84404,
        "hispanic": 87492,
        "asian": 108079,
        "multi": 94698
      },
      {
        "year": "35",
        "white": 110202,
        "black": 90366,
        "hispanic": 93672,
        "asian": 115712,
        "multi": 101386
      },
      {
        "year": "40",
        "white": 117986,
        "black": 96749,
        "hispanic": 100288,
        "asian": 123885,
        "multi": 108547
      }
    ],
    "aptitude": "Requires specialized training in electrical systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Electrical field.",
        "icon": "Palette",
        "color": "text-blue-400"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-indigo-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "dental-hygienist",
    "name": "Dental Hygienist",
    "sector": "Healthcare & Medical",
    "base": 55595,
    "demand": "Critical",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 55595,
        "black": 45588,
        "hispanic": 47256,
        "asian": 58375,
        "multi": 51147
      },
      {
        "year": "5",
        "white": 63995,
        "black": 52476,
        "hispanic": 54396,
        "asian": 67195,
        "multi": 58876
      },
      {
        "year": "10",
        "white": 76302,
        "black": 62568,
        "hispanic": 64857,
        "asian": 80118,
        "multi": 70198
      },
      {
        "year": "15",
        "white": 90976,
        "black": 74601,
        "hispanic": 77330,
        "asian": 95525,
        "multi": 83698
      },
      {
        "year": "20",
        "white": 108472,
        "black": 88947,
        "hispanic": 92202,
        "asian": 113896,
        "multi": 99795
      },
      {
        "year": "25",
        "white": 129333,
        "black": 106053,
        "hispanic": 109933,
        "asian": 135800,
        "multi": 118987
      },
      {
        "year": "30",
        "white": 154206,
        "black": 126449,
        "hispanic": 131075,
        "asian": 161916,
        "multi": 141869
      },
      {
        "year": "35",
        "white": 183862,
        "black": 150767,
        "hispanic": 156282,
        "asian": 193055,
        "multi": 169153
      },
      {
        "year": "40",
        "white": 219221,
        "black": 179761,
        "hispanic": 186338,
        "asian": 230182,
        "multi": 201683
      }
    ],
    "aptitude": "Requires specialized training in healthcare systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Healthcare field.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-amber-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "medical-assistant",
    "name": "Medical Assistant",
    "sector": "Healthcare & Medical",
    "base": 38632,
    "demand": "Moderate",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 38632,
        "black": 31678,
        "hispanic": 32837,
        "asian": 40564,
        "multi": 35541
      },
      {
        "year": "5",
        "white": 41644,
        "black": 34148,
        "hispanic": 35398,
        "asian": 43726,
        "multi": 38313
      },
      {
        "year": "10",
        "white": 45742,
        "black": 37508,
        "hispanic": 38880,
        "asian": 48029,
        "multi": 42082
      },
      {
        "year": "15",
        "white": 50242,
        "black": 41199,
        "hispanic": 42706,
        "asian": 52755,
        "multi": 46223
      },
      {
        "year": "20",
        "white": 55186,
        "black": 45253,
        "hispanic": 46908,
        "asian": 57945,
        "multi": 50771
      },
      {
        "year": "25",
        "white": 60616,
        "black": 49705,
        "hispanic": 51524,
        "asian": 63647,
        "multi": 55767
      },
      {
        "year": "30",
        "white": 66580,
        "black": 54596,
        "hispanic": 56593,
        "asian": 69909,
        "multi": 61254
      },
      {
        "year": "35",
        "white": 73132,
        "black": 59968,
        "hispanic": 62162,
        "asian": 76788,
        "multi": 67281
      },
      {
        "year": "40",
        "white": 80327,
        "black": 65868,
        "hispanic": 68278,
        "asian": 84344,
        "multi": 73901
      }
    ],
    "aptitude": "Requires specialized training in healthcare systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Healthcare field.",
        "icon": "Wind",
        "color": "text-emerald-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-gray-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "pharmacy-tech",
    "name": "Pharmacy Technician",
    "sector": "Healthcare & Medical",
    "base": 59804,
    "demand": "Stable",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 59804,
        "black": 49039,
        "hispanic": 50833,
        "asian": 62794,
        "multi": 55020
      },
      {
        "year": "5",
        "white": 71201,
        "black": 58385,
        "hispanic": 60521,
        "asian": 74761,
        "multi": 65505
      },
      {
        "year": "10",
        "white": 88549,
        "black": 72611,
        "hispanic": 75267,
        "asian": 92977,
        "multi": 81465
      },
      {
        "year": "15",
        "white": 110124,
        "black": 90302,
        "hispanic": 93606,
        "asian": 115631,
        "multi": 101314
      },
      {
        "year": "20",
        "white": 136956,
        "black": 112304,
        "hispanic": 116412,
        "asian": 143804,
        "multi": 125999
      },
      {
        "year": "25",
        "white": 170325,
        "black": 139666,
        "hispanic": 144776,
        "asian": 178841,
        "multi": 156699
      },
      {
        "year": "30",
        "white": 211824,
        "black": 173696,
        "hispanic": 180051,
        "asian": 222415,
        "multi": 194878
      },
      {
        "year": "35",
        "white": 263435,
        "black": 216016,
        "hispanic": 223919,
        "asian": 276606,
        "multi": 242360
      },
      {
        "year": "40",
        "white": 327620,
        "black": 268648,
        "hispanic": 278477,
        "asian": 344001,
        "multi": 301410
      }
    ],
    "aptitude": "Requires specialized training in healthcare systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Healthcare field.",
        "icon": "Wind",
        "color": "text-emerald-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-indigo-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "phlebotomist",
    "name": "Phlebotomist",
    "sector": "Healthcare & Medical",
    "base": 51655,
    "demand": "High",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 51655,
        "black": 42357,
        "hispanic": 43907,
        "asian": 54238,
        "multi": 47523
      },
      {
        "year": "5",
        "white": 55741,
        "black": 45708,
        "hispanic": 47380,
        "asian": 58528,
        "multi": 51282
      },
      {
        "year": "10",
        "white": 61307,
        "black": 50272,
        "hispanic": 52111,
        "asian": 64372,
        "multi": 56402
      },
      {
        "year": "15",
        "white": 67428,
        "black": 55291,
        "hispanic": 57314,
        "asian": 70800,
        "multi": 62034
      },
      {
        "year": "20",
        "white": 74161,
        "black": 60812,
        "hispanic": 63037,
        "asian": 77869,
        "multi": 68228
      },
      {
        "year": "25",
        "white": 81565,
        "black": 66884,
        "hispanic": 69331,
        "asian": 85644,
        "multi": 75040
      },
      {
        "year": "30",
        "white": 89709,
        "black": 73562,
        "hispanic": 76253,
        "asian": 94195,
        "multi": 82533
      },
      {
        "year": "35",
        "white": 98667,
        "black": 80907,
        "hispanic": 83867,
        "asian": 103600,
        "multi": 90773
      },
      {
        "year": "40",
        "white": 108518,
        "black": 88985,
        "hispanic": 92240,
        "asian": 113944,
        "multi": 99837
      }
    ],
    "aptitude": "Requires specialized training in healthcare systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Healthcare field.",
        "icon": "CheckCircle2",
        "color": "text-green-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "surgical-tech",
    "name": "Surgical Technologist",
    "sector": "Healthcare & Medical",
    "base": 56811,
    "demand": "High",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 56811,
        "black": 46585,
        "hispanic": 48289,
        "asian": 59652,
        "multi": 52266
      },
      {
        "year": "5",
        "white": 70966,
        "black": 58193,
        "hispanic": 60322,
        "asian": 74515,
        "multi": 65289
      },
      {
        "year": "10",
        "white": 93719,
        "black": 76850,
        "hispanic": 79661,
        "asian": 98405,
        "multi": 86222
      },
      {
        "year": "15",
        "white": 123767,
        "black": 101489,
        "hispanic": 105202,
        "asian": 129955,
        "multi": 113866
      },
      {
        "year": "20",
        "white": 163449,
        "black": 134028,
        "hispanic": 138931,
        "asian": 171621,
        "multi": 150373
      },
      {
        "year": "25",
        "white": 215853,
        "black": 176999,
        "hispanic": 183475,
        "asian": 226645,
        "multi": 198584
      },
      {
        "year": "30",
        "white": 285058,
        "black": 233747,
        "hispanic": 242299,
        "asian": 299311,
        "multi": 262253
      },
      {
        "year": "35",
        "white": 376452,
        "black": 308690,
        "hispanic": 319984,
        "asian": 395274,
        "multi": 346335
      },
      {
        "year": "40",
        "white": 497147,
        "black": 407661,
        "hispanic": 422575,
        "asian": 522005,
        "multi": 457375
      }
    ],
    "aptitude": "Requires specialized training in healthcare systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Healthcare field.",
        "icon": "Hammer",
        "color": "text-pink-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-indigo-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "dental-assistant",
    "name": "Dental Assistant",
    "sector": "Healthcare & Medical",
    "base": 39243,
    "demand": "Very High",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 39243,
        "black": 32179,
        "hispanic": 33357,
        "asian": 41205,
        "multi": 36104
      },
      {
        "year": "5",
        "white": 46721,
        "black": 38311,
        "hispanic": 39713,
        "asian": 49057,
        "multi": 42983
      },
      {
        "year": "10",
        "white": 58103,
        "black": 47645,
        "hispanic": 49388,
        "asian": 61009,
        "multi": 53455
      },
      {
        "year": "15",
        "white": 72259,
        "black": 59252,
        "hispanic": 61420,
        "asian": 75871,
        "multi": 66478
      },
      {
        "year": "20",
        "white": 89862,
        "black": 73687,
        "hispanic": 76383,
        "asian": 94355,
        "multi": 82673
      },
      {
        "year": "25",
        "white": 111755,
        "black": 91639,
        "hispanic": 94992,
        "asian": 117342,
        "multi": 102814
      },
      {
        "year": "30",
        "white": 138981,
        "black": 113964,
        "hispanic": 118133,
        "asian": 145930,
        "multi": 127862
      },
      {
        "year": "35",
        "white": 172839,
        "black": 141728,
        "hispanic": 146913,
        "asian": 181481,
        "multi": 159012
      },
      {
        "year": "40",
        "white": 214947,
        "black": 176256,
        "hispanic": 182705,
        "asian": 225694,
        "multi": 197751
      }
    ],
    "aptitude": "Requires specialized training in healthcare systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Healthcare field.",
        "icon": "CheckCircle2",
        "color": "text-emerald-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-indigo-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "radiology-tech",
    "name": "Radiology Technician",
    "sector": "Healthcare & Medical",
    "base": 51101,
    "demand": "Very High",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 51101,
        "black": 41903,
        "hispanic": 43436,
        "asian": 53656,
        "multi": 47013
      },
      {
        "year": "5",
        "white": 58512,
        "black": 47980,
        "hispanic": 49735,
        "asian": 61437,
        "multi": 53831
      },
      {
        "year": "10",
        "white": 69304,
        "black": 56829,
        "hispanic": 58908,
        "asian": 72769,
        "multi": 63760
      },
      {
        "year": "15",
        "white": 82087,
        "black": 67311,
        "hispanic": 69774,
        "asian": 86191,
        "multi": 75520
      },
      {
        "year": "20",
        "white": 97227,
        "black": 79727,
        "hispanic": 82643,
        "asian": 102089,
        "multi": 89449
      },
      {
        "year": "25",
        "white": 115161,
        "black": 94432,
        "hispanic": 97887,
        "asian": 120919,
        "multi": 105948
      },
      {
        "year": "30",
        "white": 136402,
        "black": 111850,
        "hispanic": 115942,
        "asian": 143222,
        "multi": 125490
      },
      {
        "year": "35",
        "white": 161561,
        "black": 132480,
        "hispanic": 137327,
        "asian": 169639,
        "multi": 148636
      },
      {
        "year": "40",
        "white": 191360,
        "black": 156915,
        "hispanic": 162656,
        "asian": 200928,
        "multi": 176051
      }
    ],
    "aptitude": "Requires specialized training in healthcare systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Healthcare field.",
        "icon": "Baby",
        "color": "text-blue-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-400"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "veterinary-tech",
    "name": "Veterinary Technician",
    "sector": "Healthcare & Medical",
    "base": 55450,
    "demand": "High",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 55450,
        "black": 45469,
        "hispanic": 47133,
        "asian": 58223,
        "multi": 51014
      },
      {
        "year": "5",
        "white": 64963,
        "black": 53269,
        "hispanic": 55218,
        "asian": 68211,
        "multi": 59766
      },
      {
        "year": "10",
        "white": 79180,
        "black": 64927,
        "hispanic": 67303,
        "asian": 83139,
        "multi": 72845
      },
      {
        "year": "15",
        "white": 96509,
        "black": 79137,
        "hispanic": 82032,
        "asian": 101334,
        "multi": 88788
      },
      {
        "year": "20",
        "white": 117630,
        "black": 96457,
        "hispanic": 99985,
        "asian": 123511,
        "multi": 108220
      },
      {
        "year": "25",
        "white": 143374,
        "black": 117566,
        "hispanic": 121868,
        "asian": 150542,
        "multi": 131904
      },
      {
        "year": "30",
        "white": 174752,
        "black": 143296,
        "hispanic": 148539,
        "asian": 183489,
        "multi": 160771
      },
      {
        "year": "35",
        "white": 212997,
        "black": 174657,
        "hispanic": 181047,
        "asian": 223647,
        "multi": 195957
      },
      {
        "year": "40",
        "white": 259612,
        "black": 212882,
        "hispanic": 220670,
        "asian": 272592,
        "multi": 238843
      }
    ],
    "aptitude": "Requires specialized training in healthcare systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Healthcare field.",
        "icon": "Hammer",
        "color": "text-orange-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-orange-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "optician",
    "name": "Optician",
    "sector": "Healthcare & Medical",
    "base": 55366,
    "demand": "Stable",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 55366,
        "black": 45400,
        "hispanic": 47061,
        "asian": 58134,
        "multi": 50937
      },
      {
        "year": "5",
        "white": 58999,
        "black": 48379,
        "hispanic": 50149,
        "asian": 61949,
        "multi": 54279
      },
      {
        "year": "10",
        "white": 63878,
        "black": 52380,
        "hispanic": 54296,
        "asian": 67072,
        "multi": 58768
      },
      {
        "year": "15",
        "white": 69160,
        "black": 56711,
        "hispanic": 58786,
        "asian": 72618,
        "multi": 63627
      },
      {
        "year": "20",
        "white": 74878,
        "black": 61400,
        "hispanic": 63647,
        "asian": 78622,
        "multi": 68888
      },
      {
        "year": "25",
        "white": 81070,
        "black": 66477,
        "hispanic": 68910,
        "asian": 85124,
        "multi": 74584
      },
      {
        "year": "30",
        "white": 87774,
        "black": 71974,
        "hispanic": 74608,
        "asian": 92162,
        "multi": 80752
      },
      {
        "year": "35",
        "white": 95031,
        "black": 77926,
        "hispanic": 80777,
        "asian": 99783,
        "multi": 87429
      },
      {
        "year": "40",
        "white": 102889,
        "black": 84369,
        "hispanic": 87456,
        "asian": 108034,
        "multi": 94658
      }
    ],
    "aptitude": "Requires specialized training in healthcare systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Healthcare field.",
        "icon": "Zap",
        "color": "text-amber-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-purple-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "paramedic",
    "name": "Paramedic",
    "sector": "Healthcare & Medical",
    "base": 57139,
    "demand": "Stable",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 57139,
        "black": 46854,
        "hispanic": 48568,
        "asian": 59996,
        "multi": 52568
      },
      {
        "year": "5",
        "white": 61561,
        "black": 50480,
        "hispanic": 52326,
        "asian": 64639,
        "multi": 56636
      },
      {
        "year": "10",
        "white": 67572,
        "black": 55409,
        "hispanic": 57436,
        "asian": 70950,
        "multi": 62166
      },
      {
        "year": "15",
        "white": 74170,
        "black": 60819,
        "hispanic": 63044,
        "asian": 77878,
        "multi": 68236
      },
      {
        "year": "20",
        "white": 81412,
        "black": 66758,
        "hispanic": 69200,
        "asian": 85483,
        "multi": 74899
      },
      {
        "year": "25",
        "white": 89361,
        "black": 73276,
        "hispanic": 75957,
        "asian": 93830,
        "multi": 82213
      },
      {
        "year": "30",
        "white": 98087,
        "black": 80431,
        "hispanic": 83374,
        "asian": 102992,
        "multi": 90240
      },
      {
        "year": "35",
        "white": 107665,
        "black": 88285,
        "hispanic": 91515,
        "asian": 113048,
        "multi": 99052
      },
      {
        "year": "40",
        "white": 118178,
        "black": 96906,
        "hispanic": 100451,
        "asian": 124087,
        "multi": 108724
      }
    ],
    "aptitude": "Requires specialized training in healthcare systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Healthcare field.",
        "icon": "TreeDeciduous",
        "color": "text-amber-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "physical-therapy-assistant",
    "name": "PT Assistant",
    "sector": "Healthcare & Medical",
    "base": 74061,
    "demand": "Stable",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 74061,
        "black": 60730,
        "hispanic": 62952,
        "asian": 77764,
        "multi": 68136
      },
      {
        "year": "5",
        "white": 83593,
        "black": 68546,
        "hispanic": 71054,
        "asian": 87773,
        "multi": 76906
      },
      {
        "year": "10",
        "white": 97252,
        "black": 79747,
        "hispanic": 82664,
        "asian": 102115,
        "multi": 89472
      },
      {
        "year": "15",
        "white": 113142,
        "black": 92777,
        "hispanic": 96171,
        "asian": 118800,
        "multi": 104091
      },
      {
        "year": "20",
        "white": 131629,
        "black": 107936,
        "hispanic": 111885,
        "asian": 138211,
        "multi": 121099
      },
      {
        "year": "25",
        "white": 153137,
        "black": 125572,
        "hispanic": 130166,
        "asian": 160794,
        "multi": 140886
      },
      {
        "year": "30",
        "white": 178159,
        "black": 146090,
        "hispanic": 151435,
        "asian": 187067,
        "multi": 163906
      },
      {
        "year": "35",
        "white": 207269,
        "black": 169960,
        "hispanic": 176179,
        "asian": 217632,
        "multi": 190687
      },
      {
        "year": "40",
        "white": 241136,
        "black": 197731,
        "hispanic": 204965,
        "asian": 253192,
        "multi": 221845
      }
    ],
    "aptitude": "Requires specialized training in healthcare systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Healthcare field.",
        "icon": "Hammer",
        "color": "text-indigo-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-pink-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "sterile-processing-tech",
    "name": "Sterile Processing Tech",
    "sector": "Healthcare & Medical",
    "base": 69712,
    "demand": "Very High",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 69712,
        "black": 57164,
        "hispanic": 59255,
        "asian": 73198,
        "multi": 64135
      },
      {
        "year": "5",
        "white": 82975,
        "black": 68040,
        "hispanic": 70529,
        "asian": 87124,
        "multi": 76337
      },
      {
        "year": "10",
        "white": 103157,
        "black": 84589,
        "hispanic": 87683,
        "asian": 108315,
        "multi": 94904
      },
      {
        "year": "15",
        "white": 128248,
        "black": 105163,
        "hispanic": 109011,
        "asian": 134660,
        "multi": 117988
      },
      {
        "year": "20",
        "white": 159441,
        "black": 130742,
        "hispanic": 135525,
        "asian": 167413,
        "multi": 146686
      },
      {
        "year": "25",
        "white": 198222,
        "black": 162542,
        "hispanic": 168488,
        "asian": 208133,
        "multi": 182364
      },
      {
        "year": "30",
        "white": 246435,
        "black": 202077,
        "hispanic": 209470,
        "asian": 258756,
        "multi": 226720
      },
      {
        "year": "35",
        "white": 306375,
        "black": 251227,
        "hispanic": 260418,
        "asian": 321693,
        "multi": 281865
      },
      {
        "year": "40",
        "white": 380893,
        "black": 312333,
        "hispanic": 323759,
        "asian": 399938,
        "multi": 350422
      }
    ],
    "aptitude": "Requires specialized training in healthcare systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Healthcare field.",
        "icon": "Zap",
        "color": "text-blue-400"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "baker",
    "name": "Baker",
    "sector": "Service",
    "base": 36552,
    "demand": "High",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 36552,
        "black": 29973,
        "hispanic": 31069,
        "asian": 38380,
        "multi": 33628
      },
      {
        "year": "5",
        "white": 43479,
        "black": 35653,
        "hispanic": 36957,
        "asian": 45653,
        "multi": 40001
      },
      {
        "year": "10",
        "white": 54012,
        "black": 44290,
        "hispanic": 45910,
        "asian": 56713,
        "multi": 49691
      },
      {
        "year": "15",
        "white": 67097,
        "black": 55019,
        "hispanic": 57032,
        "asian": 70452,
        "multi": 61729
      },
      {
        "year": "20",
        "white": 83352,
        "black": 68348,
        "hispanic": 70849,
        "asian": 87519,
        "multi": 76683
      },
      {
        "year": "25",
        "white": 103544,
        "black": 84906,
        "hispanic": 88012,
        "asian": 108721,
        "multi": 95261
      },
      {
        "year": "30",
        "white": 128628,
        "black": 105475,
        "hispanic": 109334,
        "asian": 135060,
        "multi": 118338
      },
      {
        "year": "35",
        "white": 159789,
        "black": 131027,
        "hispanic": 135821,
        "asian": 167779,
        "multi": 147006
      },
      {
        "year": "40",
        "white": 198499,
        "black": 162769,
        "hispanic": 168724,
        "asian": 208424,
        "multi": 182619
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Wind",
        "color": "text-industrial-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-gray-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "barber",
    "name": "Barber",
    "sector": "Service",
    "base": 61167,
    "demand": "Critical",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 61167,
        "black": 50157,
        "hispanic": 51992,
        "asian": 64225,
        "multi": 56274
      },
      {
        "year": "5",
        "white": 75966,
        "black": 62292,
        "hispanic": 64571,
        "asian": 79764,
        "multi": 69889
      },
      {
        "year": "10",
        "white": 99598,
        "black": 81670,
        "hispanic": 84658,
        "asian": 104578,
        "multi": 91630
      },
      {
        "year": "15",
        "white": 130580,
        "black": 107076,
        "hispanic": 110993,
        "asian": 137109,
        "multi": 120134
      },
      {
        "year": "20",
        "white": 171201,
        "black": 140385,
        "hispanic": 145521,
        "asian": 179761,
        "multi": 157505
      },
      {
        "year": "25",
        "white": 224458,
        "black": 184056,
        "hispanic": 190789,
        "asian": 235681,
        "multi": 206502
      },
      {
        "year": "30",
        "white": 294282,
        "black": 241312,
        "hispanic": 250140,
        "asian": 308997,
        "multi": 270740
      },
      {
        "year": "35",
        "white": 385827,
        "black": 316378,
        "hispanic": 327953,
        "asian": 405119,
        "multi": 354961
      },
      {
        "year": "40",
        "white": 505850,
        "black": 414797,
        "hispanic": 429973,
        "asian": 531143,
        "multi": 465382
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Wind",
        "color": "text-purple-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-purple-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "hairstylist",
    "name": "Hairstylist",
    "sector": "Service",
    "base": 71166,
    "demand": "Moderate",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 71166,
        "black": 58356,
        "hispanic": 60491,
        "asian": 74724,
        "multi": 65473
      },
      {
        "year": "5",
        "white": 75940,
        "black": 62271,
        "hispanic": 64549,
        "asian": 79737,
        "multi": 69865
      },
      {
        "year": "10",
        "white": 82361,
        "black": 67536,
        "hispanic": 70007,
        "asian": 86480,
        "multi": 75773
      },
      {
        "year": "15",
        "white": 89325,
        "black": 73247,
        "hispanic": 75927,
        "asian": 93792,
        "multi": 82179
      },
      {
        "year": "20",
        "white": 96878,
        "black": 79440,
        "hispanic": 82346,
        "asian": 101722,
        "multi": 89128
      },
      {
        "year": "25",
        "white": 105069,
        "black": 86157,
        "hispanic": 89309,
        "asian": 110323,
        "multi": 96664
      },
      {
        "year": "30",
        "white": 113953,
        "black": 93442,
        "hispanic": 96860,
        "asian": 119651,
        "multi": 104837
      },
      {
        "year": "35",
        "white": 123589,
        "black": 101343,
        "hispanic": 105050,
        "asian": 129768,
        "multi": 113701
      },
      {
        "year": "40",
        "white": 134038,
        "black": 109911,
        "hispanic": 113933,
        "asian": 140740,
        "multi": 123315
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Baby",
        "color": "text-indigo-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-green-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "cosmetologist",
    "name": "Cosmetologist",
    "sector": "Service",
    "base": 66927,
    "demand": "Very High",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 66927,
        "black": 54880,
        "hispanic": 56888,
        "asian": 70273,
        "multi": 61573
      },
      {
        "year": "5",
        "white": 72612,
        "black": 59542,
        "hispanic": 61720,
        "asian": 76243,
        "multi": 66803
      },
      {
        "year": "10",
        "white": 80402,
        "black": 65930,
        "hispanic": 68342,
        "asian": 84422,
        "multi": 73970
      },
      {
        "year": "15",
        "white": 89028,
        "black": 73003,
        "hispanic": 75674,
        "asian": 93480,
        "multi": 81906
      },
      {
        "year": "20",
        "white": 98580,
        "black": 80835,
        "hispanic": 83793,
        "asian": 103508,
        "multi": 90693
      },
      {
        "year": "25",
        "white": 109156,
        "black": 89508,
        "hispanic": 92782,
        "asian": 114613,
        "multi": 100423
      },
      {
        "year": "30",
        "white": 120866,
        "black": 99110,
        "hispanic": 102736,
        "asian": 126910,
        "multi": 111197
      },
      {
        "year": "35",
        "white": 133833,
        "black": 109743,
        "hispanic": 113758,
        "asian": 140525,
        "multi": 123127
      },
      {
        "year": "40",
        "white": 148192,
        "black": 121517,
        "hispanic": 125963,
        "asian": 155601,
        "multi": 136336
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Palette",
        "color": "text-blue-400"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-indigo-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "esthetician",
    "name": "Esthetician",
    "sector": "Service",
    "base": 71345,
    "demand": "Critical",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 71345,
        "black": 58503,
        "hispanic": 60643,
        "asian": 74912,
        "multi": 65637
      },
      {
        "year": "5",
        "white": 79386,
        "black": 65096,
        "hispanic": 67478,
        "asian": 83355,
        "multi": 73035
      },
      {
        "year": "10",
        "white": 90723,
        "black": 74393,
        "hispanic": 77114,
        "asian": 95259,
        "multi": 83465
      },
      {
        "year": "15",
        "white": 103679,
        "black": 85017,
        "hispanic": 88127,
        "asian": 108863,
        "multi": 95384
      },
      {
        "year": "20",
        "white": 118485,
        "black": 97158,
        "hispanic": 100712,
        "asian": 124409,
        "multi": 109006
      },
      {
        "year": "25",
        "white": 135406,
        "black": 111033,
        "hispanic": 115095,
        "asian": 142176,
        "multi": 124573
      },
      {
        "year": "30",
        "white": 154743,
        "black": 126889,
        "hispanic": 131532,
        "asian": 162480,
        "multi": 142364
      },
      {
        "year": "35",
        "white": 176842,
        "black": 145010,
        "hispanic": 150316,
        "asian": 185684,
        "multi": 162694
      },
      {
        "year": "40",
        "white": 202096,
        "black": 165719,
        "hispanic": 171782,
        "asian": 212201,
        "multi": 185929
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Zap",
        "color": "text-blue-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-amber-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "locksmith",
    "name": "Locksmith",
    "sector": "Service",
    "base": 58242,
    "demand": "High",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 58242,
        "black": 47758,
        "hispanic": 49506,
        "asian": 61154,
        "multi": 53583
      },
      {
        "year": "5",
        "white": 67534,
        "black": 55378,
        "hispanic": 57404,
        "asian": 70911,
        "multi": 62131
      },
      {
        "year": "10",
        "white": 81261,
        "black": 66634,
        "hispanic": 69072,
        "asian": 85324,
        "multi": 74760
      },
      {
        "year": "15",
        "white": 97778,
        "black": 80178,
        "hispanic": 83111,
        "asian": 102667,
        "multi": 89956
      },
      {
        "year": "20",
        "white": 117652,
        "black": 96475,
        "hispanic": 100005,
        "asian": 123535,
        "multi": 108240
      },
      {
        "year": "25",
        "white": 141566,
        "black": 116084,
        "hispanic": 120331,
        "asian": 148645,
        "multi": 130241
      },
      {
        "year": "30",
        "white": 170341,
        "black": 139680,
        "hispanic": 144790,
        "asian": 178858,
        "multi": 156714
      },
      {
        "year": "35",
        "white": 204964,
        "black": 168071,
        "hispanic": 174220,
        "asian": 215212,
        "multi": 188567
      },
      {
        "year": "40",
        "white": 246625,
        "black": 202233,
        "hispanic": 209631,
        "asian": 258956,
        "multi": 226895
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Flame",
        "color": "text-purple-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-emerald-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "jeweler",
    "name": "Jeweler",
    "sector": "Service",
    "base": 47085,
    "demand": "Moderate",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 47085,
        "black": 38610,
        "hispanic": 40022,
        "asian": 49439,
        "multi": 43318
      },
      {
        "year": "5",
        "white": 49295,
        "black": 40422,
        "hispanic": 41901,
        "asian": 51760,
        "multi": 45351
      },
      {
        "year": "10",
        "white": 52204,
        "black": 42807,
        "hispanic": 44373,
        "asian": 54814,
        "multi": 48027
      },
      {
        "year": "15",
        "white": 55284,
        "black": 45333,
        "hispanic": 46992,
        "asian": 58048,
        "multi": 50862
      },
      {
        "year": "20",
        "white": 58547,
        "black": 48008,
        "hispanic": 49765,
        "asian": 61474,
        "multi": 53863
      },
      {
        "year": "25",
        "white": 62001,
        "black": 50841,
        "hispanic": 52701,
        "asian": 65101,
        "multi": 57041
      },
      {
        "year": "30",
        "white": 65660,
        "black": 53841,
        "hispanic": 55811,
        "asian": 68943,
        "multi": 60407
      },
      {
        "year": "35",
        "white": 69534,
        "black": 57018,
        "hispanic": 59104,
        "asian": 73011,
        "multi": 63972
      },
      {
        "year": "40",
        "white": 73638,
        "black": 60383,
        "hispanic": 62592,
        "asian": 77319,
        "multi": 67747
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Hammer",
        "color": "text-indigo-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-pink-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "watchmaker",
    "name": "Watchmaker",
    "sector": "Service",
    "base": 49018,
    "demand": "Moderate",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 49018,
        "black": 40195,
        "hispanic": 41665,
        "asian": 51469,
        "multi": 45097
      },
      {
        "year": "5",
        "white": 57454,
        "black": 47112,
        "hispanic": 48836,
        "asian": 60327,
        "multi": 52858
      },
      {
        "year": "10",
        "white": 70069,
        "black": 57456,
        "hispanic": 59558,
        "asian": 73572,
        "multi": 64463
      },
      {
        "year": "15",
        "white": 85453,
        "black": 70072,
        "hispanic": 72635,
        "asian": 89726,
        "multi": 78617
      },
      {
        "year": "20",
        "white": 104216,
        "black": 85457,
        "hispanic": 88583,
        "asian": 109426,
        "multi": 95878
      },
      {
        "year": "25",
        "white": 127097,
        "black": 104220,
        "hispanic": 108033,
        "asian": 133452,
        "multi": 116930
      },
      {
        "year": "30",
        "white": 155003,
        "black": 127103,
        "hispanic": 131753,
        "asian": 162754,
        "multi": 142603
      },
      {
        "year": "35",
        "white": 189037,
        "black": 155010,
        "hispanic": 160681,
        "asian": 198488,
        "multi": 173914
      },
      {
        "year": "40",
        "white": 230542,
        "black": 189044,
        "hispanic": 195961,
        "asian": 242069,
        "multi": 212099
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Brain",
        "color": "text-pink-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-red-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "gunsmith",
    "name": "Gunsmith",
    "sector": "Service",
    "base": 47302,
    "demand": "Very High",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 47302,
        "black": 38788,
        "hispanic": 40207,
        "asian": 49667,
        "multi": 43518
      },
      {
        "year": "5",
        "white": 52535,
        "black": 43079,
        "hispanic": 44655,
        "asian": 55162,
        "multi": 48333
      },
      {
        "year": "10",
        "white": 59899,
        "black": 49117,
        "hispanic": 50914,
        "asian": 62894,
        "multi": 55107
      },
      {
        "year": "15",
        "white": 68294,
        "black": 56001,
        "hispanic": 58050,
        "asian": 71709,
        "multi": 62830
      },
      {
        "year": "20",
        "white": 77866,
        "black": 63850,
        "hispanic": 66186,
        "asian": 81759,
        "multi": 71637
      },
      {
        "year": "25",
        "white": 88780,
        "black": 72799,
        "hispanic": 75463,
        "asian": 93219,
        "multi": 81677
      },
      {
        "year": "30",
        "white": 101223,
        "black": 83003,
        "hispanic": 86039,
        "asian": 106284,
        "multi": 93125
      },
      {
        "year": "35",
        "white": 115410,
        "black": 94636,
        "hispanic": 98098,
        "asian": 121180,
        "multi": 106177
      },
      {
        "year": "40",
        "white": 131586,
        "black": 107900,
        "hispanic": 111848,
        "asian": 138165,
        "multi": 121059
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Wrench",
        "color": "text-orange-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-pink-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "blacksmith",
    "name": "Blacksmith",
    "sector": "Service",
    "base": 66449,
    "demand": "High",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 66449,
        "black": 54488,
        "hispanic": 56482,
        "asian": 69771,
        "multi": 61133
      },
      {
        "year": "5",
        "white": 73131,
        "black": 59967,
        "hispanic": 62161,
        "asian": 76787,
        "multi": 67280
      },
      {
        "year": "10",
        "white": 82436,
        "black": 67597,
        "hispanic": 70070,
        "asian": 86557,
        "multi": 75841
      },
      {
        "year": "15",
        "white": 92924,
        "black": 76198,
        "hispanic": 78986,
        "asian": 97571,
        "multi": 85491
      },
      {
        "year": "20",
        "white": 104748,
        "black": 85893,
        "hispanic": 89036,
        "asian": 109985,
        "multi": 96368
      },
      {
        "year": "25",
        "white": 118076,
        "black": 96822,
        "hispanic": 100364,
        "asian": 123979,
        "multi": 108629
      },
      {
        "year": "30",
        "white": 133099,
        "black": 109141,
        "hispanic": 113134,
        "asian": 139754,
        "multi": 122451
      },
      {
        "year": "35",
        "white": 150034,
        "black": 123028,
        "hispanic": 127529,
        "asian": 157536,
        "multi": 138031
      },
      {
        "year": "40",
        "white": 169124,
        "black": 138681,
        "hispanic": 143755,
        "asian": 177580,
        "multi": 155594
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Palette",
        "color": "text-gray-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-orange-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "upholsterer",
    "name": "Upholsterer",
    "sector": "Service",
    "base": 57292,
    "demand": "Moderate",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 57292,
        "black": 46979,
        "hispanic": 48698,
        "asian": 60157,
        "multi": 52709
      },
      {
        "year": "5",
        "white": 62126,
        "black": 50944,
        "hispanic": 52808,
        "asian": 65233,
        "multi": 57156
      },
      {
        "year": "10",
        "white": 68747,
        "black": 56373,
        "hispanic": 58435,
        "asian": 72185,
        "multi": 63247
      },
      {
        "year": "15",
        "white": 76074,
        "black": 62380,
        "hispanic": 64663,
        "asian": 79877,
        "multi": 69988
      },
      {
        "year": "20",
        "white": 84181,
        "black": 69028,
        "hispanic": 71554,
        "asian": 88390,
        "multi": 77446
      },
      {
        "year": "25",
        "white": 93152,
        "black": 76384,
        "hispanic": 79179,
        "asian": 97809,
        "multi": 85700
      },
      {
        "year": "30",
        "white": 103079,
        "black": 84525,
        "hispanic": 87617,
        "asian": 108233,
        "multi": 94833
      },
      {
        "year": "35",
        "white": 114064,
        "black": 93532,
        "hispanic": 96954,
        "asian": 119767,
        "multi": 104939
      },
      {
        "year": "40",
        "white": 126220,
        "black": 103500,
        "hispanic": 107287,
        "asian": 132531,
        "multi": 116122
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Zap",
        "color": "text-green-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-indigo-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "landscaper",
    "name": "Landscaper",
    "sector": "Service",
    "base": 68815,
    "demand": "Stable",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 68815,
        "black": 56428,
        "hispanic": 58493,
        "asian": 72256,
        "multi": 63310
      },
      {
        "year": "5",
        "white": 79830,
        "black": 65460,
        "hispanic": 67855,
        "asian": 83821,
        "multi": 73443
      },
      {
        "year": "10",
        "white": 96109,
        "black": 78809,
        "hispanic": 81693,
        "asian": 100914,
        "multi": 88420
      },
      {
        "year": "15",
        "white": 115708,
        "black": 94881,
        "hispanic": 98352,
        "asian": 121494,
        "multi": 106452
      },
      {
        "year": "20",
        "white": 139305,
        "black": 114230,
        "hispanic": 118409,
        "asian": 146270,
        "multi": 128160
      },
      {
        "year": "25",
        "white": 167713,
        "black": 137524,
        "hispanic": 142556,
        "asian": 176098,
        "multi": 154296
      },
      {
        "year": "30",
        "white": 201914,
        "black": 165569,
        "hispanic": 171627,
        "asian": 212010,
        "multi": 185761
      },
      {
        "year": "35",
        "white": 243090,
        "black": 199334,
        "hispanic": 206626,
        "asian": 255244,
        "multi": 223643
      },
      {
        "year": "40",
        "white": 292663,
        "black": 239983,
        "hispanic": 248763,
        "asian": 307296,
        "multi": 269250
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Wrench",
        "color": "text-industrial-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-amber-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "arborist",
    "name": "Arborist",
    "sector": "Service",
    "base": 39943,
    "demand": "High",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 39943,
        "black": 32753,
        "hispanic": 33952,
        "asian": 41940,
        "multi": 36748
      },
      {
        "year": "5",
        "white": 41790,
        "black": 34268,
        "hispanic": 35522,
        "asian": 43880,
        "multi": 38447
      },
      {
        "year": "10",
        "white": 44220,
        "black": 36260,
        "hispanic": 37587,
        "asian": 46431,
        "multi": 40682
      },
      {
        "year": "15",
        "white": 46791,
        "black": 38369,
        "hispanic": 39772,
        "asian": 49130,
        "multi": 43048
      },
      {
        "year": "20",
        "white": 49511,
        "black": 40599,
        "hispanic": 42085,
        "asian": 51987,
        "multi": 45550
      },
      {
        "year": "25",
        "white": 52390,
        "black": 42960,
        "hispanic": 44531,
        "asian": 55009,
        "multi": 48199
      },
      {
        "year": "30",
        "white": 55436,
        "black": 45457,
        "hispanic": 47120,
        "asian": 58208,
        "multi": 51001
      },
      {
        "year": "35",
        "white": 58659,
        "black": 48100,
        "hispanic": 49860,
        "asian": 61592,
        "multi": 53966
      },
      {
        "year": "40",
        "white": 62069,
        "black": 50897,
        "hispanic": 52759,
        "asian": 65173,
        "multi": 57104
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "ShieldCheck",
        "color": "text-blue-400"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "pest-control-tech",
    "name": "Pest Control Technician",
    "sector": "Service",
    "base": 37255,
    "demand": "Very High",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 37255,
        "black": 30549,
        "hispanic": 31667,
        "asian": 39118,
        "multi": 34275
      },
      {
        "year": "5",
        "white": 41159,
        "black": 33750,
        "hispanic": 34985,
        "asian": 43217,
        "multi": 37866
      },
      {
        "year": "10",
        "white": 46619,
        "black": 38228,
        "hispanic": 39626,
        "asian": 48950,
        "multi": 42890
      },
      {
        "year": "15",
        "white": 52804,
        "black": 43299,
        "hispanic": 44883,
        "asian": 55444,
        "multi": 48580
      },
      {
        "year": "20",
        "white": 59809,
        "black": 49043,
        "hispanic": 50838,
        "asian": 62799,
        "multi": 55024
      },
      {
        "year": "25",
        "white": 67743,
        "black": 55549,
        "hispanic": 57582,
        "asian": 71130,
        "multi": 62324
      },
      {
        "year": "30",
        "white": 76730,
        "black": 62919,
        "hispanic": 65221,
        "asian": 80567,
        "multi": 70592
      },
      {
        "year": "35",
        "white": 86909,
        "black": 71266,
        "hispanic": 73873,
        "asian": 91255,
        "multi": 79957
      },
      {
        "year": "40",
        "white": 98439,
        "black": 80720,
        "hispanic": 83673,
        "asian": 103361,
        "multi": 90564
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Microscope",
        "color": "text-orange-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-400"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "butcher",
    "name": "Butcher",
    "sector": "Service",
    "base": 70670,
    "demand": "Very High",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 70670,
        "black": 57949,
        "hispanic": 60070,
        "asian": 74204,
        "multi": 65016
      },
      {
        "year": "5",
        "white": 82765,
        "black": 67867,
        "hispanic": 70350,
        "asian": 86903,
        "multi": 76144
      },
      {
        "year": "10",
        "white": 100835,
        "black": 82685,
        "hispanic": 85710,
        "asian": 105877,
        "multi": 92768
      },
      {
        "year": "15",
        "white": 122850,
        "black": 100737,
        "hispanic": 104423,
        "asian": 128993,
        "multi": 113022
      },
      {
        "year": "20",
        "white": 149672,
        "black": 122731,
        "hispanic": 127221,
        "asian": 157155,
        "multi": 137698
      },
      {
        "year": "25",
        "white": 182349,
        "black": 149526,
        "hispanic": 154997,
        "asian": 191467,
        "multi": 167761
      },
      {
        "year": "30",
        "white": 222161,
        "black": 182172,
        "hispanic": 188837,
        "asian": 233269,
        "multi": 204388
      },
      {
        "year": "35",
        "white": 270665,
        "black": 221946,
        "hispanic": 230065,
        "asian": 284199,
        "multi": 249012
      },
      {
        "year": "40",
        "white": 329759,
        "black": 270402,
        "hispanic": 280295,
        "asian": 346247,
        "multi": 303378
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Zap",
        "color": "text-amber-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-indigo-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "brewer",
    "name": "Brewer",
    "sector": "Service",
    "base": 64171,
    "demand": "Stable",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 64171,
        "black": 52620,
        "hispanic": 54545,
        "asian": 67380,
        "multi": 59037
      },
      {
        "year": "5",
        "white": 76797,
        "black": 62973,
        "hispanic": 65277,
        "asian": 80636,
        "multi": 70653
      },
      {
        "year": "10",
        "white": 96127,
        "black": 78824,
        "hispanic": 81708,
        "asian": 100934,
        "multi": 88437
      },
      {
        "year": "15",
        "white": 120324,
        "black": 98665,
        "hispanic": 102275,
        "asian": 126340,
        "multi": 110698
      },
      {
        "year": "20",
        "white": 150611,
        "black": 123501,
        "hispanic": 128019,
        "asian": 158141,
        "multi": 138562
      },
      {
        "year": "25",
        "white": 188521,
        "black": 154587,
        "hispanic": 160243,
        "asian": 197947,
        "multi": 173439
      },
      {
        "year": "30",
        "white": 235974,
        "black": 193499,
        "hispanic": 200578,
        "asian": 247773,
        "multi": 217096
      },
      {
        "year": "35",
        "white": 295372,
        "black": 242205,
        "hispanic": 251066,
        "asian": 310140,
        "multi": 271742
      },
      {
        "year": "40",
        "white": 369720,
        "black": 303171,
        "hispanic": 314262,
        "asian": 388206,
        "multi": 340143
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Target",
        "color": "text-orange-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-red-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "vintner",
    "name": "Vintner",
    "sector": "Service",
    "base": 68258,
    "demand": "Moderate",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 68258,
        "black": 55972,
        "hispanic": 58019,
        "asian": 71671,
        "multi": 62797
      },
      {
        "year": "5",
        "white": 81572,
        "black": 66889,
        "hispanic": 69336,
        "asian": 85651,
        "multi": 75046
      },
      {
        "year": "10",
        "white": 101924,
        "black": 83577,
        "hispanic": 86635,
        "asian": 107020,
        "multi": 93770
      },
      {
        "year": "15",
        "white": 127353,
        "black": 104429,
        "hispanic": 108250,
        "asian": 133721,
        "multi": 117165
      },
      {
        "year": "20",
        "white": 159127,
        "black": 130484,
        "hispanic": 135258,
        "asian": 167083,
        "multi": 146397
      },
      {
        "year": "25",
        "white": 198828,
        "black": 163039,
        "hispanic": 169004,
        "asian": 208769,
        "multi": 182922
      },
      {
        "year": "30",
        "white": 248434,
        "black": 203716,
        "hispanic": 211169,
        "asian": 260856,
        "multi": 228559
      },
      {
        "year": "35",
        "white": 310417,
        "black": 254542,
        "hispanic": 263854,
        "asian": 325938,
        "multi": 285584
      },
      {
        "year": "40",
        "white": 387864,
        "black": 318048,
        "hispanic": 329684,
        "asian": 407257,
        "multi": 356835
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Target",
        "color": "text-blue-400"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-400"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "floral-designer",
    "name": "Floral Designer",
    "sector": "Service",
    "base": 74511,
    "demand": "Moderate",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 74511,
        "black": 61099,
        "hispanic": 63334,
        "asian": 78237,
        "multi": 68550
      },
      {
        "year": "5",
        "white": 84146,
        "black": 69000,
        "hispanic": 71524,
        "asian": 88353,
        "multi": 77414
      },
      {
        "year": "10",
        "white": 97960,
        "black": 80327,
        "hispanic": 83266,
        "asian": 102858,
        "multi": 90123
      },
      {
        "year": "15",
        "white": 114041,
        "black": 93514,
        "hispanic": 96935,
        "asian": 119743,
        "multi": 104918
      },
      {
        "year": "20",
        "white": 132763,
        "black": 108866,
        "hispanic": 112849,
        "asian": 139401,
        "multi": 122142
      },
      {
        "year": "25",
        "white": 154558,
        "black": 126738,
        "hispanic": 131375,
        "asian": 162286,
        "multi": 142194
      },
      {
        "year": "30",
        "white": 179932,
        "black": 147544,
        "hispanic": 152942,
        "asian": 188928,
        "multi": 165537
      },
      {
        "year": "35",
        "white": 209470,
        "black": 171766,
        "hispanic": 178050,
        "asian": 219944,
        "multi": 192713
      },
      {
        "year": "40",
        "white": 243858,
        "black": 199964,
        "hispanic": 207280,
        "asian": 256051,
        "multi": 224350
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Wrench",
        "color": "text-purple-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-purple-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "graphic-installer",
    "name": "Vehicle Wrap Installer",
    "sector": "Service",
    "base": 42491,
    "demand": "Stable",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 42491,
        "black": 34843,
        "hispanic": 36117,
        "asian": 44616,
        "multi": 39092
      },
      {
        "year": "5",
        "white": 47398,
        "black": 38867,
        "hispanic": 40289,
        "asian": 49768,
        "multi": 43606
      },
      {
        "year": "10",
        "white": 54337,
        "black": 44556,
        "hispanic": 46186,
        "asian": 57054,
        "multi": 49990
      },
      {
        "year": "15",
        "white": 62291,
        "black": 51079,
        "hispanic": 52947,
        "asian": 65406,
        "multi": 57308
      },
      {
        "year": "20",
        "white": 71410,
        "black": 58556,
        "hispanic": 60698,
        "asian": 74980,
        "multi": 65697
      },
      {
        "year": "25",
        "white": 81863,
        "black": 67128,
        "hispanic": 69584,
        "asian": 85956,
        "multi": 75314
      },
      {
        "year": "30",
        "white": 93847,
        "black": 76955,
        "hispanic": 79770,
        "asian": 98539,
        "multi": 86339
      },
      {
        "year": "35",
        "white": 107585,
        "black": 88220,
        "hispanic": 91447,
        "asian": 112964,
        "multi": 98978
      },
      {
        "year": "40",
        "white": 123334,
        "black": 101134,
        "hispanic": 104834,
        "asian": 129501,
        "multi": 113468
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Microscope",
        "color": "text-pink-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-purple-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "dog-groomer",
    "name": "Dog Groomer",
    "sector": "Service",
    "base": 46108,
    "demand": "Very High",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 46108,
        "black": 37809,
        "hispanic": 39192,
        "asian": 48413,
        "multi": 42419
      },
      {
        "year": "5",
        "white": 53847,
        "black": 44155,
        "hispanic": 45770,
        "asian": 56539,
        "multi": 49539
      },
      {
        "year": "10",
        "white": 65372,
        "black": 53605,
        "hispanic": 55566,
        "asian": 68641,
        "multi": 60143
      },
      {
        "year": "15",
        "white": 79364,
        "black": 65079,
        "hispanic": 67460,
        "asian": 83333,
        "multi": 73015
      },
      {
        "year": "20",
        "white": 96351,
        "black": 79008,
        "hispanic": 81899,
        "asian": 101169,
        "multi": 88643
      },
      {
        "year": "25",
        "white": 116974,
        "black": 95919,
        "hispanic": 99428,
        "asian": 122823,
        "multi": 107616
      },
      {
        "year": "30",
        "white": 142011,
        "black": 116449,
        "hispanic": 120709,
        "asian": 149111,
        "multi": 130650
      },
      {
        "year": "35",
        "white": 172407,
        "black": 141373,
        "hispanic": 146546,
        "asian": 181027,
        "multi": 158614
      },
      {
        "year": "40",
        "white": 209308,
        "black": 171632,
        "hispanic": 177912,
        "asian": 219773,
        "multi": 192563
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Baby",
        "color": "text-emerald-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-gray-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "water-treatment-op",
    "name": "Water Treatment Operator",
    "sector": "Environment",
    "base": 68004,
    "demand": "High",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 68004,
        "black": 55763,
        "hispanic": 57803,
        "asian": 71404,
        "multi": 62564
      },
      {
        "year": "5",
        "white": 85771,
        "black": 70332,
        "hispanic": 72906,
        "asian": 90060,
        "multi": 78910
      },
      {
        "year": "10",
        "white": 114644,
        "black": 94008,
        "hispanic": 97447,
        "asian": 120376,
        "multi": 105473
      },
      {
        "year": "15",
        "white": 153236,
        "black": 125654,
        "hispanic": 130251,
        "asian": 160898,
        "multi": 140977
      },
      {
        "year": "20",
        "white": 204819,
        "black": 167952,
        "hispanic": 174096,
        "asian": 215060,
        "multi": 188434
      },
      {
        "year": "25",
        "white": 273767,
        "black": 224489,
        "hispanic": 232702,
        "asian": 287455,
        "multi": 251865
      },
      {
        "year": "30",
        "white": 365923,
        "black": 300057,
        "hispanic": 311035,
        "asian": 384219,
        "multi": 336649
      },
      {
        "year": "35",
        "white": 489102,
        "black": 401064,
        "hispanic": 415737,
        "asian": 513557,
        "multi": 449974
      },
      {
        "year": "40",
        "white": 653746,
        "black": 536072,
        "hispanic": 555684,
        "asian": 686433,
        "multi": 601446
      }
    ],
    "aptitude": "Requires specialized training in environment systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Environment field.",
        "icon": "Droplets",
        "color": "text-industrial-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-gray-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "wastewater-tech",
    "name": "Wastewater Technician",
    "sector": "Environment",
    "base": 48449,
    "demand": "Critical",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 48449,
        "black": 39728,
        "hispanic": 41182,
        "asian": 50871,
        "multi": 44573
      },
      {
        "year": "5",
        "white": 57673,
        "black": 47292,
        "hispanic": 49022,
        "asian": 60557,
        "multi": 53059
      },
      {
        "year": "10",
        "white": 71711,
        "black": 58803,
        "hispanic": 60954,
        "asian": 75296,
        "multi": 65974
      },
      {
        "year": "15",
        "white": 89165,
        "black": 73115,
        "hispanic": 75790,
        "asian": 93623,
        "multi": 82032
      },
      {
        "year": "20",
        "white": 110868,
        "black": 90911,
        "hispanic": 94237,
        "asian": 116411,
        "multi": 101998
      },
      {
        "year": "25",
        "white": 137853,
        "black": 113039,
        "hispanic": 117175,
        "asian": 144745,
        "multi": 126824
      },
      {
        "year": "30",
        "white": 171406,
        "black": 140553,
        "hispanic": 145695,
        "asian": 179976,
        "multi": 157693
      },
      {
        "year": "35",
        "white": 213126,
        "black": 174763,
        "hispanic": 181157,
        "asian": 223782,
        "multi": 196076
      },
      {
        "year": "40",
        "white": 265000,
        "black": 217300,
        "hispanic": 225250,
        "asian": 278250,
        "multi": 243800
      }
    ],
    "aptitude": "Requires specialized training in environment systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Environment field.",
        "icon": "Eye",
        "color": "text-indigo-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-pink-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "forest-tech",
    "name": "Forest Technician",
    "sector": "Environment",
    "base": 42419,
    "demand": "Very High",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 42419,
        "black": 34784,
        "hispanic": 36056,
        "asian": 44540,
        "multi": 39025
      },
      {
        "year": "5",
        "white": 47249,
        "black": 38745,
        "hispanic": 40162,
        "asian": 49612,
        "multi": 43470
      },
      {
        "year": "10",
        "white": 54068,
        "black": 44336,
        "hispanic": 45958,
        "asian": 56772,
        "multi": 49743
      },
      {
        "year": "15",
        "white": 61871,
        "black": 50734,
        "hispanic": 52590,
        "asian": 64965,
        "multi": 56921
      },
      {
        "year": "20",
        "white": 70800,
        "black": 58056,
        "hispanic": 60180,
        "asian": 74340,
        "multi": 65136
      },
      {
        "year": "25",
        "white": 81018,
        "black": 66434,
        "hispanic": 68865,
        "asian": 85068,
        "multi": 74536
      },
      {
        "year": "30",
        "white": 92710,
        "black": 76022,
        "hispanic": 78803,
        "asian": 97345,
        "multi": 85293
      },
      {
        "year": "35",
        "white": 106089,
        "black": 86993,
        "hispanic": 90176,
        "asian": 111393,
        "multi": 97602
      },
      {
        "year": "40",
        "white": 121399,
        "black": 99547,
        "hispanic": 103189,
        "asian": 127469,
        "multi": 111687
      }
    ],
    "aptitude": "Requires specialized training in environment systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Environment field.",
        "icon": "Wind",
        "color": "text-indigo-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-green-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "environmental-tech",
    "name": "Environmental Technician",
    "sector": "Environment",
    "base": 62174,
    "demand": "Moderate",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 62174,
        "black": 50983,
        "hispanic": 52848,
        "asian": 65283,
        "multi": 57200
      },
      {
        "year": "5",
        "white": 68599,
        "black": 56251,
        "hispanic": 58309,
        "asian": 72029,
        "multi": 63111
      },
      {
        "year": "10",
        "white": 77573,
        "black": 63610,
        "hispanic": 65937,
        "asian": 81451,
        "multi": 71367
      },
      {
        "year": "15",
        "white": 87720,
        "black": 71930,
        "hispanic": 74562,
        "asian": 92106,
        "multi": 80702
      },
      {
        "year": "20",
        "white": 99194,
        "black": 81339,
        "hispanic": 84315,
        "asian": 104154,
        "multi": 91258
      },
      {
        "year": "25",
        "white": 112169,
        "black": 91979,
        "hispanic": 95344,
        "asian": 117778,
        "multi": 103196
      },
      {
        "year": "30",
        "white": 126842,
        "black": 104010,
        "hispanic": 107816,
        "asian": 133184,
        "multi": 116694
      },
      {
        "year": "35",
        "white": 143434,
        "black": 117616,
        "hispanic": 121919,
        "asian": 150605,
        "multi": 131959
      },
      {
        "year": "40",
        "white": 162196,
        "black": 133000,
        "hispanic": 137866,
        "asian": 170305,
        "multi": 149220
      }
    ],
    "aptitude": "Requires specialized training in environment systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Environment field.",
        "icon": "Wind",
        "color": "text-emerald-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-pink-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "recycling-coord",
    "name": "Recycling Coordinator",
    "sector": "Environment",
    "base": 55375,
    "demand": "Moderate",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 55375,
        "black": 45408,
        "hispanic": 47069,
        "asian": 58144,
        "multi": 50945
      },
      {
        "year": "5",
        "white": 58589,
        "black": 48043,
        "hispanic": 49800,
        "asian": 61518,
        "multi": 53902
      },
      {
        "year": "10",
        "white": 62869,
        "black": 51553,
        "hispanic": 53439,
        "asian": 66013,
        "multi": 57840
      },
      {
        "year": "15",
        "white": 67463,
        "black": 55320,
        "hispanic": 57344,
        "asian": 70836,
        "multi": 62066
      },
      {
        "year": "20",
        "white": 72392,
        "black": 59362,
        "hispanic": 61533,
        "asian": 76012,
        "multi": 66601
      },
      {
        "year": "25",
        "white": 77681,
        "black": 63699,
        "hispanic": 66029,
        "asian": 81565,
        "multi": 71467
      },
      {
        "year": "30",
        "white": 83357,
        "black": 68353,
        "hispanic": 70854,
        "asian": 87525,
        "multi": 76689
      },
      {
        "year": "35",
        "white": 89447,
        "black": 73347,
        "hispanic": 76030,
        "asian": 93920,
        "multi": 82292
      },
      {
        "year": "40",
        "white": 95983,
        "black": 78706,
        "hispanic": 81585,
        "asian": 100782,
        "multi": 88304
      }
    ],
    "aptitude": "Requires specialized training in environment systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Environment field.",
        "icon": "Baby",
        "color": "text-orange-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-amber-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "hazardous-materials-tech",
    "name": "Hazmat Technician",
    "sector": "Environment",
    "base": 43878,
    "demand": "Very High",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 43878,
        "black": 35980,
        "hispanic": 37296,
        "asian": 46072,
        "multi": 40368
      },
      {
        "year": "5",
        "white": 47787,
        "black": 39186,
        "hispanic": 40619,
        "asian": 50177,
        "multi": 43964
      },
      {
        "year": "10",
        "white": 53168,
        "black": 43597,
        "hispanic": 45192,
        "asian": 55826,
        "multi": 48914
      },
      {
        "year": "15",
        "white": 59153,
        "black": 48506,
        "hispanic": 50280,
        "asian": 62111,
        "multi": 54421
      },
      {
        "year": "20",
        "white": 65813,
        "black": 53967,
        "hispanic": 55941,
        "asian": 69104,
        "multi": 60548
      },
      {
        "year": "25",
        "white": 73223,
        "black": 60043,
        "hispanic": 62240,
        "asian": 76884,
        "multi": 67365
      },
      {
        "year": "30",
        "white": 81467,
        "black": 66803,
        "hispanic": 69247,
        "asian": 85540,
        "multi": 74949
      },
      {
        "year": "35",
        "white": 90639,
        "black": 74324,
        "hispanic": 77043,
        "asian": 95171,
        "multi": 83388
      },
      {
        "year": "40",
        "white": 100843,
        "black": 82692,
        "hispanic": 85717,
        "asian": 105886,
        "multi": 92776
      }
    ],
    "aptitude": "Requires specialized training in environment systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Environment field.",
        "icon": "Baby",
        "color": "text-orange-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "landfill-op",
    "name": "Landfill Operator",
    "sector": "Environment",
    "base": 41734,
    "demand": "High",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 41734,
        "black": 34222,
        "hispanic": 35474,
        "asian": 43821,
        "multi": 38395
      },
      {
        "year": "5",
        "white": 43709,
        "black": 35841,
        "hispanic": 37153,
        "asian": 45894,
        "multi": 40212
      },
      {
        "year": "10",
        "white": 46310,
        "black": 37974,
        "hispanic": 39363,
        "asian": 48625,
        "multi": 42605
      },
      {
        "year": "15",
        "white": 49065,
        "black": 40233,
        "hispanic": 41705,
        "asian": 51518,
        "multi": 45140
      },
      {
        "year": "20",
        "white": 51985,
        "black": 42627,
        "hispanic": 44187,
        "asian": 54584,
        "multi": 47826
      },
      {
        "year": "25",
        "white": 55078,
        "black": 45164,
        "hispanic": 46816,
        "asian": 57831,
        "multi": 50671
      },
      {
        "year": "30",
        "white": 58355,
        "black": 47851,
        "hispanic": 49602,
        "asian": 61272,
        "multi": 53686
      },
      {
        "year": "35",
        "white": 61827,
        "black": 50698,
        "hispanic": 52553,
        "asian": 64918,
        "multi": 56881
      },
      {
        "year": "40",
        "white": 65506,
        "black": 53715,
        "hispanic": 55680,
        "asian": 68781,
        "multi": 60265
      }
    ],
    "aptitude": "Requires specialized training in environment systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Environment field.",
        "icon": "Baby",
        "color": "text-pink-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-amber-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "energy-auditor",
    "name": "Energy Auditor",
    "sector": "Environment",
    "base": 42732,
    "demand": "Moderate",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 42732,
        "black": 35040,
        "hispanic": 36322,
        "asian": 44869,
        "multi": 39313
      },
      {
        "year": "5",
        "white": 49705,
        "black": 40758,
        "hispanic": 42249,
        "asian": 52190,
        "multi": 45728
      },
      {
        "year": "10",
        "white": 60042,
        "black": 49234,
        "hispanic": 51036,
        "asian": 63044,
        "multi": 55239
      },
      {
        "year": "15",
        "white": 72529,
        "black": 59474,
        "hispanic": 61650,
        "asian": 76156,
        "multi": 66727
      },
      {
        "year": "20",
        "white": 87613,
        "black": 71843,
        "hispanic": 74471,
        "asian": 91994,
        "multi": 80604
      },
      {
        "year": "25",
        "white": 105834,
        "black": 86784,
        "hispanic": 89959,
        "asian": 111126,
        "multi": 97367
      },
      {
        "year": "30",
        "white": 127845,
        "black": 104833,
        "hispanic": 108668,
        "asian": 134237,
        "multi": 117617
      },
      {
        "year": "35",
        "white": 154433,
        "black": 126635,
        "hispanic": 131268,
        "asian": 162154,
        "multi": 142078
      },
      {
        "year": "40",
        "white": 186550,
        "black": 152971,
        "hispanic": 158568,
        "asian": 195878,
        "multi": 171626
      }
    ],
    "aptitude": "Requires specialized training in environment systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Environment field.",
        "icon": "ShieldCheck",
        "color": "text-red-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-orange-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "glazier-auto",
    "name": "Auto Glass Technician",
    "sector": "Transportation",
    "base": 64719,
    "demand": "Critical",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 64719,
        "black": 53070,
        "hispanic": 55011,
        "asian": 67955,
        "multi": 59541
      },
      {
        "year": "5",
        "white": 68734,
        "black": 56362,
        "hispanic": 58424,
        "asian": 72171,
        "multi": 63235
      },
      {
        "year": "10",
        "white": 74105,
        "black": 60766,
        "hispanic": 62990,
        "asian": 77811,
        "multi": 68177
      },
      {
        "year": "15",
        "white": 79896,
        "black": 65515,
        "hispanic": 67912,
        "asian": 83891,
        "multi": 73504
      },
      {
        "year": "20",
        "white": 86139,
        "black": 70634,
        "hispanic": 73219,
        "asian": 90446,
        "multi": 79248
      },
      {
        "year": "25",
        "white": 92871,
        "black": 76154,
        "hispanic": 78940,
        "asian": 97514,
        "multi": 85441
      },
      {
        "year": "30",
        "white": 100128,
        "black": 82105,
        "hispanic": 85109,
        "asian": 105134,
        "multi": 92118
      },
      {
        "year": "35",
        "white": 107952,
        "black": 88521,
        "hispanic": 91759,
        "asian": 113350,
        "multi": 99316
      },
      {
        "year": "40",
        "white": 116388,
        "black": 95438,
        "hispanic": 98930,
        "asian": 122207,
        "multi": 107077
      }
    ],
    "aptitude": "Requires specialized training in transportation systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Transportation field.",
        "icon": "ShieldCheck",
        "color": "text-blue-400"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-green-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "appliance-repair-tech",
    "name": "Appliance Repair Tech",
    "sector": "Service",
    "base": 36162,
    "demand": "Very High",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 36162,
        "black": 29653,
        "hispanic": 30738,
        "asian": 37970,
        "multi": 33269
      },
      {
        "year": "5",
        "white": 38259,
        "black": 31372,
        "hispanic": 32520,
        "asian": 40172,
        "multi": 35198
      },
      {
        "year": "10",
        "white": 41052,
        "black": 33663,
        "hispanic": 34895,
        "asian": 43105,
        "multi": 37768
      },
      {
        "year": "15",
        "white": 44050,
        "black": 36121,
        "hispanic": 37442,
        "asian": 46252,
        "multi": 40526
      },
      {
        "year": "20",
        "white": 47266,
        "black": 38758,
        "hispanic": 40176,
        "asian": 49629,
        "multi": 43484
      },
      {
        "year": "25",
        "white": 50716,
        "black": 41588,
        "hispanic": 43109,
        "asian": 53252,
        "multi": 46659
      },
      {
        "year": "30",
        "white": 54419,
        "black": 44624,
        "hispanic": 46256,
        "asian": 57140,
        "multi": 50066
      },
      {
        "year": "35",
        "white": 58392,
        "black": 47882,
        "hispanic": 49634,
        "asian": 61312,
        "multi": 53721
      },
      {
        "year": "40",
        "white": 62656,
        "black": 51378,
        "hispanic": 53257,
        "asian": 65788,
        "multi": 57643
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Target",
        "color": "text-emerald-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-red-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "biomedical-eq-tech",
    "name": "Biomedical Equipment Tech",
    "sector": "Healthcare & Medical",
    "base": 52074,
    "demand": "Stable",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 52074,
        "black": 42701,
        "hispanic": 44263,
        "asian": 54678,
        "multi": 47908
      },
      {
        "year": "5",
        "white": 55571,
        "black": 45568,
        "hispanic": 47235,
        "asian": 58350,
        "multi": 51125
      },
      {
        "year": "10",
        "white": 60274,
        "black": 49425,
        "hispanic": 51233,
        "asian": 63288,
        "multi": 55452
      },
      {
        "year": "15",
        "white": 65376,
        "black": 53608,
        "hispanic": 55570,
        "asian": 68645,
        "multi": 60146
      },
      {
        "year": "20",
        "white": 70909,
        "black": 58146,
        "hispanic": 60273,
        "asian": 74455,
        "multi": 65236
      },
      {
        "year": "25",
        "white": 76911,
        "black": 63067,
        "hispanic": 65374,
        "asian": 80756,
        "multi": 70758
      },
      {
        "year": "30",
        "white": 83420,
        "black": 68405,
        "hispanic": 70907,
        "asian": 87591,
        "multi": 76747
      },
      {
        "year": "35",
        "white": 90481,
        "black": 74194,
        "hispanic": 76909,
        "asian": 95005,
        "multi": 83242
      },
      {
        "year": "40",
        "white": 98139,
        "black": 80474,
        "hispanic": 83418,
        "asian": 103046,
        "multi": 90288
      }
    ],
    "aptitude": "Requires specialized training in healthcare systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Healthcare field.",
        "icon": "CheckCircle2",
        "color": "text-industrial-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-red-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "camera-repair-tech",
    "name": "Camera Repair Technician",
    "sector": "Service",
    "base": 36754,
    "demand": "Very High",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 36754,
        "black": 30138,
        "hispanic": 31241,
        "asian": 38592,
        "multi": 33814
      },
      {
        "year": "5",
        "white": 44155,
        "black": 36207,
        "hispanic": 37532,
        "asian": 46363,
        "multi": 40623
      },
      {
        "year": "10",
        "white": 55536,
        "black": 45540,
        "hispanic": 47206,
        "asian": 58313,
        "multi": 51093
      },
      {
        "year": "15",
        "white": 69851,
        "black": 57278,
        "hispanic": 59373,
        "asian": 73344,
        "multi": 64263
      },
      {
        "year": "20",
        "white": 87856,
        "black": 72042,
        "hispanic": 74677,
        "asian": 92248,
        "multi": 80827
      },
      {
        "year": "25",
        "white": 110501,
        "black": 90611,
        "hispanic": 93926,
        "asian": 116026,
        "multi": 101661
      },
      {
        "year": "30",
        "white": 138983,
        "black": 113966,
        "hispanic": 118135,
        "asian": 145932,
        "multi": 127864
      },
      {
        "year": "35",
        "white": 174806,
        "black": 143341,
        "hispanic": 148585,
        "asian": 183546,
        "multi": 160822
      },
      {
        "year": "40",
        "white": 219863,
        "black": 180288,
        "hispanic": 186884,
        "asian": 230856,
        "multi": 202274
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Target",
        "color": "text-orange-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-industrial-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "chimney-sweep",
    "name": "Chimney Sweep",
    "sector": "Service",
    "base": 60313,
    "demand": "High",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 60313,
        "black": 49457,
        "hispanic": 51266,
        "asian": 63329,
        "multi": 55488
      },
      {
        "year": "5",
        "white": 65066,
        "black": 53354,
        "hispanic": 55306,
        "asian": 68320,
        "multi": 59861
      },
      {
        "year": "10",
        "white": 71538,
        "black": 58661,
        "hispanic": 60807,
        "asian": 75115,
        "multi": 65815
      },
      {
        "year": "15",
        "white": 78654,
        "black": 64496,
        "hispanic": 66856,
        "asian": 82586,
        "multi": 72361
      },
      {
        "year": "20",
        "white": 86477,
        "black": 70911,
        "hispanic": 73505,
        "asian": 90801,
        "multi": 79559
      },
      {
        "year": "25",
        "white": 95078,
        "black": 77964,
        "hispanic": 80817,
        "asian": 99832,
        "multi": 87472
      },
      {
        "year": "30",
        "white": 104535,
        "black": 85719,
        "hispanic": 88855,
        "asian": 109762,
        "multi": 96173
      },
      {
        "year": "35",
        "white": 114933,
        "black": 94245,
        "hispanic": 97693,
        "asian": 120680,
        "multi": 105738
      },
      {
        "year": "40",
        "white": 126365,
        "black": 103619,
        "hispanic": 107410,
        "asian": 132683,
        "multi": 116256
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "TreeDeciduous",
        "color": "text-pink-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-orange-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "clock-repairer",
    "name": "Clock Repairer",
    "sector": "Service",
    "base": 58996,
    "demand": "Moderate",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 58996,
        "black": 48377,
        "hispanic": 50147,
        "asian": 61946,
        "multi": 54276
      },
      {
        "year": "5",
        "white": 69383,
        "black": 56894,
        "hispanic": 58975,
        "asian": 72852,
        "multi": 63832
      },
      {
        "year": "10",
        "white": 84974,
        "black": 69679,
        "hispanic": 72228,
        "asian": 89223,
        "multi": 78176
      },
      {
        "year": "15",
        "white": 104069,
        "black": 85337,
        "hispanic": 88459,
        "asian": 109273,
        "multi": 95744
      },
      {
        "year": "20",
        "white": 127455,
        "black": 104513,
        "hispanic": 108337,
        "asian": 133828,
        "multi": 117259
      },
      {
        "year": "25",
        "white": 156097,
        "black": 127999,
        "hispanic": 132682,
        "asian": 163902,
        "multi": 143609
      },
      {
        "year": "30",
        "white": 191174,
        "black": 156763,
        "hispanic": 162498,
        "asian": 200733,
        "multi": 175880
      },
      {
        "year": "35",
        "white": 234134,
        "black": 191990,
        "hispanic": 199014,
        "asian": 245841,
        "multi": 215404
      },
      {
        "year": "40",
        "white": 286748,
        "black": 235134,
        "hispanic": 243736,
        "asian": 301086,
        "multi": 263808
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Brain",
        "color": "text-gray-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-emerald-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "commercial-diver",
    "name": "Commercial Diver",
    "sector": "Industrial & Manufacturing",
    "base": 36599,
    "demand": "Very High",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 36599,
        "black": 30011,
        "hispanic": 31109,
        "asian": 38429,
        "multi": 33671
      },
      {
        "year": "5",
        "white": 38819,
        "black": 31832,
        "hispanic": 32996,
        "asian": 40760,
        "multi": 35714
      },
      {
        "year": "10",
        "white": 41785,
        "black": 34264,
        "hispanic": 35517,
        "asian": 43874,
        "multi": 38442
      },
      {
        "year": "15",
        "white": 44977,
        "black": 36881,
        "hispanic": 38231,
        "asian": 47226,
        "multi": 41379
      },
      {
        "year": "20",
        "white": 48413,
        "black": 39699,
        "hispanic": 41151,
        "asian": 50834,
        "multi": 44540
      },
      {
        "year": "25",
        "white": 52112,
        "black": 42732,
        "hispanic": 44295,
        "asian": 54717,
        "multi": 47943
      },
      {
        "year": "30",
        "white": 56093,
        "black": 45996,
        "hispanic": 47679,
        "asian": 58897,
        "multi": 51605
      },
      {
        "year": "35",
        "white": 60378,
        "black": 49510,
        "hispanic": 51321,
        "asian": 63397,
        "multi": 55548
      },
      {
        "year": "40",
        "white": 64991,
        "black": 53292,
        "hispanic": 55242,
        "asian": 68240,
        "multi": 59791
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "Zap",
        "color": "text-pink-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-indigo-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "custom-tailor",
    "name": "Custom Tailor",
    "sector": "Service",
    "base": 62013,
    "demand": "Critical",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 62013,
        "black": 50851,
        "hispanic": 52711,
        "asian": 65114,
        "multi": 57052
      },
      {
        "year": "5",
        "white": 71764,
        "black": 58847,
        "hispanic": 61000,
        "asian": 75353,
        "multi": 66023
      },
      {
        "year": "10",
        "white": 86138,
        "black": 70633,
        "hispanic": 73217,
        "asian": 90444,
        "multi": 79247
      },
      {
        "year": "15",
        "white": 103389,
        "black": 84779,
        "hispanic": 87881,
        "asian": 108559,
        "multi": 95118
      },
      {
        "year": "20",
        "white": 124096,
        "black": 101759,
        "hispanic": 105482,
        "asian": 130301,
        "multi": 114169
      },
      {
        "year": "25",
        "white": 148951,
        "black": 122140,
        "hispanic": 126608,
        "asian": 156398,
        "multi": 137035
      },
      {
        "year": "30",
        "white": 178783,
        "black": 146602,
        "hispanic": 151966,
        "asian": 187722,
        "multi": 164480
      },
      {
        "year": "35",
        "white": 214590,
        "black": 175964,
        "hispanic": 182402,
        "asian": 225320,
        "multi": 197423
      },
      {
        "year": "40",
        "white": 257569,
        "black": 211206,
        "hispanic": 218933,
        "asian": 270447,
        "multi": 236963
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Baby",
        "color": "text-blue-400"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-industrial-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "diagnostic-medical-sonographer",
    "name": "Sonographer",
    "sector": "Healthcare & Medical",
    "base": 60975,
    "demand": "Stable",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 60975,
        "black": 50000,
        "hispanic": 51829,
        "asian": 64024,
        "multi": 56097
      },
      {
        "year": "5",
        "white": 66886,
        "black": 54847,
        "hispanic": 56854,
        "asian": 70231,
        "multi": 61536
      },
      {
        "year": "10",
        "white": 75088,
        "black": 61572,
        "hispanic": 63825,
        "asian": 78843,
        "multi": 69081
      },
      {
        "year": "15",
        "white": 84296,
        "black": 69122,
        "hispanic": 71651,
        "asian": 88510,
        "multi": 77552
      },
      {
        "year": "20",
        "white": 94632,
        "black": 77598,
        "hispanic": 80437,
        "asian": 99364,
        "multi": 87061
      },
      {
        "year": "25",
        "white": 106236,
        "black": 87113,
        "hispanic": 90300,
        "asian": 111548,
        "multi": 97737
      },
      {
        "year": "30",
        "white": 119263,
        "black": 97795,
        "hispanic": 101373,
        "asian": 125226,
        "multi": 109722
      },
      {
        "year": "35",
        "white": 133887,
        "black": 109787,
        "hispanic": 113804,
        "asian": 140581,
        "multi": 123176
      },
      {
        "year": "40",
        "white": 150304,
        "black": 123249,
        "hispanic": 127758,
        "asian": 157819,
        "multi": 138280
      }
    ],
    "aptitude": "Requires specialized training in healthcare systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Healthcare field.",
        "icon": "Hammer",
        "color": "text-purple-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-emerald-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "draftsperson",
    "name": "Draftsperson",
    "sector": "Industrial & Manufacturing",
    "base": 38223,
    "demand": "Very High",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 38223,
        "black": 31343,
        "hispanic": 32490,
        "asian": 40134,
        "multi": 35165
      },
      {
        "year": "5",
        "white": 47434,
        "black": 38896,
        "hispanic": 40319,
        "asian": 49805,
        "multi": 43639
      },
      {
        "year": "10",
        "white": 62128,
        "black": 50945,
        "hispanic": 52809,
        "asian": 65235,
        "multi": 57158
      },
      {
        "year": "15",
        "white": 81375,
        "black": 66728,
        "hispanic": 69169,
        "asian": 85444,
        "multi": 74865
      },
      {
        "year": "20",
        "white": 106585,
        "black": 87400,
        "hispanic": 90597,
        "asian": 111914,
        "multi": 98058
      },
      {
        "year": "25",
        "white": 139604,
        "black": 114476,
        "hispanic": 118664,
        "asian": 146584,
        "multi": 128436
      },
      {
        "year": "30",
        "white": 182853,
        "black": 149939,
        "hispanic": 155425,
        "asian": 191995,
        "multi": 168225
      },
      {
        "year": "35",
        "white": 239499,
        "black": 196390,
        "hispanic": 203575,
        "asian": 251474,
        "multi": 220339
      },
      {
        "year": "40",
        "white": 313695,
        "black": 257230,
        "hispanic": 266641,
        "asian": 329380,
        "multi": 288599
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "Target",
        "color": "text-emerald-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-red-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "dry-cleaner",
    "name": "Dry Cleaner",
    "sector": "Service",
    "base": 61170,
    "demand": "Very High",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 61170,
        "black": 50159,
        "hispanic": 51995,
        "asian": 64229,
        "multi": 56276
      },
      {
        "year": "5",
        "white": 71013,
        "black": 58231,
        "hispanic": 60361,
        "asian": 74564,
        "multi": 65332
      },
      {
        "year": "10",
        "white": 85574,
        "black": 70170,
        "hispanic": 72738,
        "asian": 89852,
        "multi": 78728
      },
      {
        "year": "15",
        "white": 103120,
        "black": 84558,
        "hispanic": 87652,
        "asian": 108276,
        "multi": 94870
      },
      {
        "year": "20",
        "white": 124263,
        "black": 101896,
        "hispanic": 105624,
        "asian": 130476,
        "multi": 114322
      },
      {
        "year": "25",
        "white": 149742,
        "black": 122789,
        "hispanic": 127281,
        "asian": 157229,
        "multi": 137763
      },
      {
        "year": "30",
        "white": 180445,
        "black": 147965,
        "hispanic": 153378,
        "asian": 189467,
        "multi": 166010
      },
      {
        "year": "35",
        "white": 217444,
        "black": 178304,
        "hispanic": 184827,
        "asian": 228316,
        "multi": 200048
      },
      {
        "year": "40",
        "white": 262028,
        "black": 214863,
        "hispanic": 222724,
        "asian": 275129,
        "multi": 241066
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Wrench",
        "color": "text-red-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-red-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "emergency-dispatcher",
    "name": "Emergency Dispatcher",
    "sector": "Service",
    "base": 45446,
    "demand": "Moderate",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 45446,
        "black": 37266,
        "hispanic": 38629,
        "asian": 47718,
        "multi": 41810
      },
      {
        "year": "5",
        "white": 47321,
        "black": 38803,
        "hispanic": 40223,
        "asian": 49687,
        "multi": 43535
      },
      {
        "year": "10",
        "white": 49774,
        "black": 40815,
        "hispanic": 42308,
        "asian": 52262,
        "multi": 45792
      },
      {
        "year": "15",
        "white": 52354,
        "black": 42930,
        "hispanic": 44501,
        "asian": 54971,
        "multi": 48165
      },
      {
        "year": "20",
        "white": 55067,
        "black": 45155,
        "hispanic": 46807,
        "asian": 57821,
        "multi": 50662
      },
      {
        "year": "25",
        "white": 57922,
        "black": 47496,
        "hispanic": 49234,
        "asian": 60818,
        "multi": 53288
      },
      {
        "year": "30",
        "white": 60924,
        "black": 49958,
        "hispanic": 51786,
        "asian": 63970,
        "multi": 56050
      },
      {
        "year": "35",
        "white": 64082,
        "black": 52547,
        "hispanic": 54470,
        "asian": 67286,
        "multi": 58956
      },
      {
        "year": "40",
        "white": 67404,
        "black": 55271,
        "hispanic": 57293,
        "asian": 70774,
        "multi": 62011
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Wind",
        "color": "text-blue-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-indigo-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "engraver",
    "name": "Engraver",
    "sector": "Service",
    "base": 71761,
    "demand": "Critical",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 71761,
        "black": 58844,
        "hispanic": 60997,
        "asian": 75349,
        "multi": 66020
      },
      {
        "year": "5",
        "white": 87053,
        "black": 71383,
        "hispanic": 73995,
        "asian": 91405,
        "multi": 80088
      },
      {
        "year": "10",
        "white": 110828,
        "black": 90879,
        "hispanic": 94204,
        "asian": 116369,
        "multi": 101962
      },
      {
        "year": "15",
        "white": 141096,
        "black": 115699,
        "hispanic": 119932,
        "asian": 148151,
        "multi": 129809
      },
      {
        "year": "20",
        "white": 179632,
        "black": 147298,
        "hispanic": 152687,
        "asian": 188613,
        "multi": 165261
      },
      {
        "year": "25",
        "white": 228691,
        "black": 187527,
        "hispanic": 194388,
        "asian": 240126,
        "multi": 210396
      },
      {
        "year": "30",
        "white": 291150,
        "black": 238743,
        "hispanic": 247477,
        "asian": 305707,
        "multi": 267858
      },
      {
        "year": "35",
        "white": 370667,
        "black": 303947,
        "hispanic": 315067,
        "asian": 389200,
        "multi": 341013
      },
      {
        "year": "40",
        "white": 471901,
        "black": 386959,
        "hispanic": 401116,
        "asian": 495496,
        "multi": 434149
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Target",
        "color": "text-blue-400"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-orange-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "exterminator",
    "name": "Exterminator",
    "sector": "Service",
    "base": 55357,
    "demand": "Critical",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 55357,
        "black": 45393,
        "hispanic": 47053,
        "asian": 58125,
        "multi": 50928
      },
      {
        "year": "5",
        "white": 66482,
        "black": 54515,
        "hispanic": 56510,
        "asian": 69806,
        "multi": 61163
      },
      {
        "year": "10",
        "white": 83583,
        "black": 68538,
        "hispanic": 71046,
        "asian": 87762,
        "multi": 76896
      },
      {
        "year": "15",
        "white": 105083,
        "black": 86168,
        "hispanic": 89321,
        "asian": 110337,
        "multi": 96677
      },
      {
        "year": "20",
        "white": 132114,
        "black": 108333,
        "hispanic": 112297,
        "asian": 138719,
        "multi": 121545
      },
      {
        "year": "25",
        "white": 166097,
        "black": 136200,
        "hispanic": 141183,
        "asian": 174402,
        "multi": 152809
      },
      {
        "year": "30",
        "white": 208822,
        "black": 171234,
        "hispanic": 177499,
        "asian": 219263,
        "multi": 192117
      },
      {
        "year": "35",
        "white": 262538,
        "black": 215281,
        "hispanic": 223157,
        "asian": 275664,
        "multi": 241535
      },
      {
        "year": "40",
        "white": 330070,
        "black": 270657,
        "hispanic": 280559,
        "asian": 346573,
        "multi": 303664
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "TreeDeciduous",
        "color": "text-indigo-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-emerald-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "farrier",
    "name": "Farrier",
    "sector": "Service",
    "base": 67479,
    "demand": "Very High",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 67479,
        "black": 55333,
        "hispanic": 57357,
        "asian": 70853,
        "multi": 62081
      },
      {
        "year": "5",
        "white": 82556,
        "black": 67696,
        "hispanic": 70173,
        "asian": 86684,
        "multi": 75952
      },
      {
        "year": "10",
        "white": 106224,
        "black": 87104,
        "hispanic": 90291,
        "asian": 111535,
        "multi": 97726
      },
      {
        "year": "15",
        "white": 136678,
        "black": 112076,
        "hispanic": 116176,
        "asian": 143512,
        "multi": 125744
      },
      {
        "year": "20",
        "white": 175863,
        "black": 144207,
        "hispanic": 149483,
        "asian": 184656,
        "multi": 161794
      },
      {
        "year": "25",
        "white": 226281,
        "black": 185551,
        "hispanic": 192339,
        "asian": 237596,
        "multi": 208179
      },
      {
        "year": "30",
        "white": 291155,
        "black": 238747,
        "hispanic": 247482,
        "asian": 305713,
        "multi": 267862
      },
      {
        "year": "35",
        "white": 374627,
        "black": 307194,
        "hispanic": 318433,
        "asian": 393358,
        "multi": 344657
      },
      {
        "year": "40",
        "white": 482030,
        "black": 395265,
        "hispanic": 409726,
        "asian": 506132,
        "multi": 443468
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Wrench",
        "color": "text-orange-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-gray-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "fire-sprinkler-installer",
    "name": "Fire Sprinkler Installer",
    "sector": "Construction",
    "base": 45335,
    "demand": "Moderate",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 45335,
        "black": 37175,
        "hispanic": 38535,
        "asian": 47602,
        "multi": 41708
      },
      {
        "year": "5",
        "white": 51135,
        "black": 41930,
        "hispanic": 43464,
        "asian": 53691,
        "multi": 47044
      },
      {
        "year": "10",
        "white": 59438,
        "black": 48739,
        "hispanic": 50523,
        "asian": 62410,
        "multi": 54683
      },
      {
        "year": "15",
        "white": 69091,
        "black": 56654,
        "hispanic": 58727,
        "asian": 72545,
        "multi": 63563
      },
      {
        "year": "20",
        "white": 80310,
        "black": 65854,
        "hispanic": 68264,
        "asian": 84326,
        "multi": 73885
      },
      {
        "year": "25",
        "white": 93352,
        "black": 76549,
        "hispanic": 79349,
        "asian": 98019,
        "multi": 85884
      },
      {
        "year": "30",
        "white": 108511,
        "black": 88979,
        "hispanic": 92235,
        "asian": 113937,
        "multi": 99830
      },
      {
        "year": "35",
        "white": 126132,
        "black": 103429,
        "hispanic": 107213,
        "asian": 132439,
        "multi": 116042
      },
      {
        "year": "40",
        "white": 146615,
        "black": 120224,
        "hispanic": 124623,
        "asian": 153946,
        "multi": 134886
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "Palette",
        "color": "text-indigo-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "fish-and-game-warden",
    "name": "Game Warden",
    "sector": "Environment",
    "base": 45217,
    "demand": "Stable",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 45217,
        "black": 37078,
        "hispanic": 38434,
        "asian": 47478,
        "multi": 41600
      },
      {
        "year": "5",
        "white": 55129,
        "black": 45206,
        "hispanic": 46860,
        "asian": 57886,
        "multi": 50719
      },
      {
        "year": "10",
        "white": 70629,
        "black": 57916,
        "hispanic": 60035,
        "asian": 74161,
        "multi": 64979
      },
      {
        "year": "15",
        "white": 90487,
        "black": 74200,
        "hispanic": 76914,
        "asian": 95012,
        "multi": 83248
      },
      {
        "year": "20",
        "white": 115929,
        "black": 95061,
        "hispanic": 98539,
        "asian": 121725,
        "multi": 106654
      },
      {
        "year": "25",
        "white": 148523,
        "black": 121789,
        "hispanic": 126244,
        "asian": 155949,
        "multi": 136641
      },
      {
        "year": "30",
        "white": 190281,
        "black": 156030,
        "hispanic": 161739,
        "asian": 199795,
        "multi": 175058
      },
      {
        "year": "35",
        "white": 243780,
        "black": 199899,
        "hispanic": 207213,
        "asian": 255969,
        "multi": 224277
      },
      {
        "year": "40",
        "white": 312320,
        "black": 256102,
        "hispanic": 265472,
        "asian": 327936,
        "multi": 287334
      }
    ],
    "aptitude": "Requires specialized training in environment systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Environment field.",
        "icon": "Baby",
        "color": "text-pink-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-pink-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "flight-instructor",
    "name": "Flight Instructor",
    "sector": "Transportation",
    "base": 68879,
    "demand": "Critical",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 68879,
        "black": 56481,
        "hispanic": 58547,
        "asian": 72323,
        "multi": 63369
      },
      {
        "year": "5",
        "white": 74262,
        "black": 60895,
        "hispanic": 63122,
        "asian": 77975,
        "multi": 68321
      },
      {
        "year": "10",
        "white": 81585,
        "black": 66900,
        "hispanic": 69347,
        "asian": 85664,
        "multi": 75058
      },
      {
        "year": "15",
        "white": 89631,
        "black": 73497,
        "hispanic": 76186,
        "asian": 94113,
        "multi": 82461
      },
      {
        "year": "20",
        "white": 98470,
        "black": 80746,
        "hispanic": 83700,
        "asian": 103394,
        "multi": 90593
      },
      {
        "year": "25",
        "white": 108181,
        "black": 88709,
        "hispanic": 91954,
        "asian": 113590,
        "multi": 99527
      },
      {
        "year": "30",
        "white": 118850,
        "black": 97457,
        "hispanic": 101022,
        "asian": 124792,
        "multi": 109342
      },
      {
        "year": "35",
        "white": 130571,
        "black": 107068,
        "hispanic": 110985,
        "asian": 137099,
        "multi": 120125
      },
      {
        "year": "40",
        "white": 143447,
        "black": 117627,
        "hispanic": 121930,
        "asian": 150620,
        "multi": 131972
      }
    ],
    "aptitude": "Requires specialized training in transportation systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Transportation field.",
        "icon": "Eye",
        "color": "text-pink-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-indigo-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "furniture-refinisher",
    "name": "Furniture Refinisher",
    "sector": "Service",
    "base": 68051,
    "demand": "Moderate",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 68051,
        "black": 55802,
        "hispanic": 57843,
        "asian": 71454,
        "multi": 62607
      },
      {
        "year": "5",
        "white": 80429,
        "black": 65951,
        "hispanic": 68364,
        "asian": 84450,
        "multi": 73994
      },
      {
        "year": "10",
        "white": 99113,
        "black": 81272,
        "hispanic": 84246,
        "asian": 104068,
        "multi": 91184
      },
      {
        "year": "15",
        "white": 122138,
        "black": 100153,
        "hispanic": 103817,
        "asian": 128244,
        "multi": 112367
      },
      {
        "year": "20",
        "white": 150511,
        "black": 123419,
        "hispanic": 127935,
        "asian": 158037,
        "multi": 138470
      },
      {
        "year": "25",
        "white": 185476,
        "black": 152091,
        "hispanic": 157655,
        "asian": 194750,
        "multi": 170638
      },
      {
        "year": "30",
        "white": 228564,
        "black": 187423,
        "hispanic": 194279,
        "asian": 239992,
        "multi": 210279
      },
      {
        "year": "35",
        "white": 281661,
        "black": 230962,
        "hispanic": 239412,
        "asian": 295745,
        "multi": 259129
      },
      {
        "year": "40",
        "white": 347094,
        "black": 284617,
        "hispanic": 295030,
        "asian": 364449,
        "multi": 319326
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-green-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "glass-blower",
    "name": "Glass Blower",
    "sector": "Service",
    "base": 52682,
    "demand": "Moderate",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 52682,
        "black": 43199,
        "hispanic": 44780,
        "asian": 55316,
        "multi": 48467
      },
      {
        "year": "5",
        "white": 62669,
        "black": 51388,
        "hispanic": 53268,
        "asian": 65802,
        "multi": 57655
      },
      {
        "year": "10",
        "white": 77855,
        "black": 63841,
        "hispanic": 66176,
        "asian": 81747,
        "multi": 71626
      },
      {
        "year": "15",
        "white": 96721,
        "black": 79311,
        "hispanic": 82213,
        "asian": 101557,
        "multi": 88983
      },
      {
        "year": "20",
        "white": 120158,
        "black": 98530,
        "hispanic": 102135,
        "asian": 126166,
        "multi": 110546
      },
      {
        "year": "25",
        "white": 149276,
        "black": 122406,
        "hispanic": 126884,
        "asian": 156739,
        "multi": 137334
      },
      {
        "year": "30",
        "white": 185449,
        "black": 152068,
        "hispanic": 157631,
        "asian": 194721,
        "multi": 170613
      },
      {
        "year": "35",
        "white": 230387,
        "black": 188917,
        "hispanic": 195829,
        "asian": 241906,
        "multi": 211956
      },
      {
        "year": "40",
        "white": 286215,
        "black": 234697,
        "hispanic": 243283,
        "asian": 300526,
        "multi": 263318
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Hammer",
        "color": "text-pink-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-red-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "heavy-equipment-mechanic",
    "name": "Heavy Equipment Mechanic",
    "sector": "Industrial & Manufacturing",
    "base": 62238,
    "demand": "Stable",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 62238,
        "black": 51035,
        "hispanic": 52902,
        "asian": 65350,
        "multi": 57259
      },
      {
        "year": "5",
        "white": 76626,
        "black": 62834,
        "hispanic": 65132,
        "asian": 80458,
        "multi": 70496
      },
      {
        "year": "10",
        "white": 99376,
        "black": 81489,
        "hispanic": 84470,
        "asian": 104345,
        "multi": 91426
      },
      {
        "year": "15",
        "white": 128880,
        "black": 105682,
        "hispanic": 109548,
        "asian": 135324,
        "multi": 118570
      },
      {
        "year": "20",
        "white": 167144,
        "black": 137058,
        "hispanic": 142072,
        "asian": 175501,
        "multi": 153772
      },
      {
        "year": "25",
        "white": 216767,
        "black": 177749,
        "hispanic": 184252,
        "asian": 227606,
        "multi": 199426
      },
      {
        "year": "30",
        "white": 281124,
        "black": 230522,
        "hispanic": 238955,
        "asian": 295180,
        "multi": 258634
      },
      {
        "year": "35",
        "white": 364587,
        "black": 298962,
        "hispanic": 309899,
        "asian": 382817,
        "multi": 335420
      },
      {
        "year": "40",
        "white": 472830,
        "black": 387721,
        "hispanic": 401906,
        "asian": 496472,
        "multi": 435004
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "Wrench",
        "color": "text-purple-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-indigo-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "home-inspector",
    "name": "Home Inspector",
    "sector": "Construction",
    "base": 39449,
    "demand": "Critical",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 39449,
        "black": 32348,
        "hispanic": 33532,
        "asian": 41421,
        "multi": 36293
      },
      {
        "year": "5",
        "white": 44647,
        "black": 36611,
        "hispanic": 37950,
        "asian": 46880,
        "multi": 41075
      },
      {
        "year": "10",
        "white": 52119,
        "black": 42737,
        "hispanic": 44301,
        "asian": 54725,
        "multi": 47949
      },
      {
        "year": "15",
        "white": 60840,
        "black": 49889,
        "hispanic": 51714,
        "asian": 63882,
        "multi": 55973
      },
      {
        "year": "20",
        "white": 71021,
        "black": 58238,
        "hispanic": 60368,
        "asian": 74573,
        "multi": 65340
      },
      {
        "year": "25",
        "white": 82906,
        "black": 67983,
        "hispanic": 70470,
        "asian": 87052,
        "multi": 76274
      },
      {
        "year": "30",
        "white": 96780,
        "black": 79360,
        "hispanic": 82263,
        "asian": 101619,
        "multi": 89038
      },
      {
        "year": "35",
        "white": 112976,
        "black": 92640,
        "hispanic": 96029,
        "asian": 118624,
        "multi": 103938
      },
      {
        "year": "40",
        "white": 131881,
        "black": 108143,
        "hispanic": 112099,
        "asian": 138475,
        "multi": 121331
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "Hammer",
        "color": "text-green-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-amber-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "industrial-designer",
    "name": "Industrial Designer",
    "sector": "Industrial & Manufacturing",
    "base": 44712,
    "demand": "Critical",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 44712,
        "black": 36664,
        "hispanic": 38005,
        "asian": 46948,
        "multi": 41135
      },
      {
        "year": "5",
        "white": 53625,
        "black": 43973,
        "hispanic": 45582,
        "asian": 56307,
        "multi": 49335
      },
      {
        "year": "10",
        "white": 67306,
        "black": 55191,
        "hispanic": 57210,
        "asian": 70671,
        "multi": 61921
      },
      {
        "year": "15",
        "white": 84476,
        "black": 69270,
        "hispanic": 71805,
        "asian": 88700,
        "multi": 77718
      },
      {
        "year": "20",
        "white": 106027,
        "black": 86942,
        "hispanic": 90123,
        "asian": 111328,
        "multi": 97545
      },
      {
        "year": "25",
        "white": 133075,
        "black": 109122,
        "hispanic": 113114,
        "asian": 139729,
        "multi": 122429
      },
      {
        "year": "30",
        "white": 167024,
        "black": 136960,
        "hispanic": 141971,
        "asian": 175376,
        "multi": 153662
      },
      {
        "year": "35",
        "white": 209634,
        "black": 171900,
        "hispanic": 178189,
        "asian": 220116,
        "multi": 192863
      },
      {
        "year": "40",
        "white": 263114,
        "black": 215753,
        "hispanic": 223647,
        "asian": 276270,
        "multi": 242065
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "Eye",
        "color": "text-indigo-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-purple-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "it-support-specialist",
    "name": "IT Support Specialist",
    "sector": "Energy & Utilities",
    "base": 36000,
    "demand": "Stable",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 36000,
        "black": 29520,
        "hispanic": 30600,
        "asian": 37800,
        "multi": 33120
      },
      {
        "year": "5",
        "white": 42212,
        "black": 34614,
        "hispanic": 35880,
        "asian": 44323,
        "multi": 38835
      },
      {
        "year": "10",
        "white": 51505,
        "black": 42234,
        "hispanic": 43779,
        "asian": 54080,
        "multi": 47385
      },
      {
        "year": "15",
        "white": 62844,
        "black": 51532,
        "hispanic": 53418,
        "asian": 65987,
        "multi": 57817
      },
      {
        "year": "20",
        "white": 76680,
        "black": 62878,
        "hispanic": 65178,
        "asian": 80514,
        "multi": 70546
      },
      {
        "year": "25",
        "white": 93562,
        "black": 76721,
        "hispanic": 79527,
        "asian": 98240,
        "multi": 86077
      },
      {
        "year": "30",
        "white": 114160,
        "black": 93611,
        "hispanic": 97036,
        "asian": 119868,
        "multi": 105027
      },
      {
        "year": "35",
        "white": 139293,
        "black": 114220,
        "hispanic": 118399,
        "asian": 146258,
        "multi": 128150
      },
      {
        "year": "40",
        "white": 169959,
        "black": 139367,
        "hispanic": 144465,
        "asian": 178457,
        "multi": 156363
      }
    ],
    "aptitude": "Requires specialized training in electrical systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Electrical field.",
        "icon": "TreeDeciduous",
        "color": "text-amber-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-red-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "landscape-designer",
    "name": "Landscape Designer",
    "sector": "Service",
    "base": 73217,
    "demand": "Critical",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 73217,
        "black": 60038,
        "hispanic": 62234,
        "asian": 76878,
        "multi": 67360
      },
      {
        "year": "5",
        "white": 81083,
        "black": 66488,
        "hispanic": 68920,
        "asian": 85137,
        "multi": 74596
      },
      {
        "year": "10",
        "white": 92113,
        "black": 75533,
        "hispanic": 78296,
        "asian": 96719,
        "multi": 84744
      },
      {
        "year": "15",
        "white": 104645,
        "black": 85809,
        "hispanic": 88948,
        "asian": 109877,
        "multi": 96273
      },
      {
        "year": "20",
        "white": 118881,
        "black": 97482,
        "hispanic": 101049,
        "asian": 124825,
        "multi": 109371
      },
      {
        "year": "25",
        "white": 135054,
        "black": 110744,
        "hispanic": 114796,
        "asian": 141807,
        "multi": 124250
      },
      {
        "year": "30",
        "white": 153427,
        "black": 125810,
        "hispanic": 130413,
        "asian": 161099,
        "multi": 141153
      },
      {
        "year": "35",
        "white": 174300,
        "black": 142926,
        "hispanic": 148155,
        "asian": 183015,
        "multi": 160356
      },
      {
        "year": "40",
        "white": 198012,
        "black": 162370,
        "hispanic": 168311,
        "asian": 207913,
        "multi": 182171
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Baby",
        "color": "text-pink-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-purple-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "leather-worker",
    "name": "Leather Worker",
    "sector": "Service",
    "base": 64736,
    "demand": "Critical",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 64736,
        "black": 53084,
        "hispanic": 55026,
        "asian": 67973,
        "multi": 59557
      },
      {
        "year": "5",
        "white": 69286,
        "black": 56815,
        "hispanic": 58893,
        "asian": 72751,
        "multi": 63743
      },
      {
        "year": "10",
        "white": 75427,
        "black": 61850,
        "hispanic": 64113,
        "asian": 79198,
        "multi": 69392
      },
      {
        "year": "15",
        "white": 82111,
        "black": 67331,
        "hispanic": 69794,
        "asian": 86216,
        "multi": 75542
      },
      {
        "year": "20",
        "white": 89388,
        "black": 73298,
        "hispanic": 75980,
        "asian": 93857,
        "multi": 82237
      },
      {
        "year": "25",
        "white": 97309,
        "black": 79794,
        "hispanic": 82713,
        "asian": 102175,
        "multi": 89525
      },
      {
        "year": "30",
        "white": 105933,
        "black": 86865,
        "hispanic": 90043,
        "asian": 111230,
        "multi": 97458
      },
      {
        "year": "35",
        "white": 115321,
        "black": 94563,
        "hispanic": 98023,
        "asian": 121087,
        "multi": 106095
      },
      {
        "year": "40",
        "white": 125541,
        "black": 102944,
        "hispanic": 106710,
        "asian": 131818,
        "multi": 115498
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Hammer",
        "color": "text-pink-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "makeup-artist",
    "name": "Makeup Artist",
    "sector": "Service",
    "base": 51159,
    "demand": "Stable",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 51159,
        "black": 41950,
        "hispanic": 43485,
        "asian": 53717,
        "multi": 47066
      },
      {
        "year": "5",
        "white": 60137,
        "black": 49313,
        "hispanic": 51117,
        "asian": 63144,
        "multi": 55326
      },
      {
        "year": "10",
        "white": 73608,
        "black": 60358,
        "hispanic": 62566,
        "asian": 77288,
        "multi": 67719
      },
      {
        "year": "15",
        "white": 90095,
        "black": 73878,
        "hispanic": 76581,
        "asian": 94600,
        "multi": 82887
      },
      {
        "year": "20",
        "white": 110275,
        "black": 90426,
        "hispanic": 93734,
        "asian": 115789,
        "multi": 101453
      },
      {
        "year": "25",
        "white": 134976,
        "black": 110680,
        "hispanic": 114729,
        "asian": 141724,
        "multi": 124178
      },
      {
        "year": "30",
        "white": 165209,
        "black": 135471,
        "hispanic": 140428,
        "asian": 173469,
        "multi": 151992
      },
      {
        "year": "35",
        "white": 202214,
        "black": 165815,
        "hispanic": 171882,
        "asian": 212325,
        "multi": 186037
      },
      {
        "year": "40",
        "white": 247508,
        "black": 202956,
        "hispanic": 210382,
        "asian": 259883,
        "multi": 227707
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Flame",
        "color": "text-industrial-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-red-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "marine-electrician",
    "name": "Marine Electrician",
    "sector": "Energy & Utilities",
    "base": 71471,
    "demand": "Very High",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 71471,
        "black": 58606,
        "hispanic": 60750,
        "asian": 75045,
        "multi": 65753
      },
      {
        "year": "5",
        "white": 80412,
        "black": 65938,
        "hispanic": 68350,
        "asian": 84433,
        "multi": 73979
      },
      {
        "year": "10",
        "white": 93177,
        "black": 76405,
        "hispanic": 79200,
        "asian": 97836,
        "multi": 85723
      },
      {
        "year": "15",
        "white": 107968,
        "black": 88534,
        "hispanic": 91773,
        "asian": 113367,
        "multi": 99331
      },
      {
        "year": "20",
        "white": 125108,
        "black": 102589,
        "hispanic": 106342,
        "asian": 131363,
        "multi": 115099
      },
      {
        "year": "25",
        "white": 144968,
        "black": 118874,
        "hispanic": 123223,
        "asian": 152217,
        "multi": 133371
      },
      {
        "year": "30",
        "white": 167981,
        "black": 137745,
        "hispanic": 142784,
        "asian": 176380,
        "multi": 154543
      },
      {
        "year": "35",
        "white": 194648,
        "black": 159611,
        "hispanic": 165451,
        "asian": 204380,
        "multi": 179076
      },
      {
        "year": "40",
        "white": 225547,
        "black": 184949,
        "hispanic": 191715,
        "asian": 236825,
        "multi": 207504
      }
    ],
    "aptitude": "Requires specialized training in electrical systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Electrical field.",
        "icon": "Target",
        "color": "text-indigo-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-red-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "medical-transcriptionist",
    "name": "Medical Transcriptionist",
    "sector": "Healthcare & Medical",
    "base": 53016,
    "demand": "Moderate",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 53016,
        "black": 43473,
        "hispanic": 45064,
        "asian": 55667,
        "multi": 48775
      },
      {
        "year": "5",
        "white": 56204,
        "black": 46087,
        "hispanic": 47773,
        "asian": 59014,
        "multi": 51708
      },
      {
        "year": "10",
        "white": 60460,
        "black": 49577,
        "hispanic": 51391,
        "asian": 63483,
        "multi": 55623
      },
      {
        "year": "15",
        "white": 65038,
        "black": 53331,
        "hispanic": 55282,
        "asian": 68290,
        "multi": 59835
      },
      {
        "year": "20",
        "white": 69963,
        "black": 57369,
        "hispanic": 59468,
        "asian": 73461,
        "multi": 64366
      },
      {
        "year": "25",
        "white": 75260,
        "black": 61713,
        "hispanic": 63971,
        "asian": 79023,
        "multi": 69239
      },
      {
        "year": "30",
        "white": 80959,
        "black": 66386,
        "hispanic": 68815,
        "asian": 85007,
        "multi": 74482
      },
      {
        "year": "35",
        "white": 87089,
        "black": 71413,
        "hispanic": 74026,
        "asian": 91444,
        "multi": 80122
      },
      {
        "year": "40",
        "white": 93684,
        "black": 76821,
        "hispanic": 79631,
        "asian": 98368,
        "multi": 86189
      }
    ],
    "aptitude": "Requires specialized training in healthcare systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Healthcare field.",
        "icon": "Hammer",
        "color": "text-orange-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-green-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "musical-instrument-repairer",
    "name": "Instrument Repairer",
    "sector": "Service",
    "base": 55030,
    "demand": "High",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 55030,
        "black": 45125,
        "hispanic": 46776,
        "asian": 57782,
        "multi": 50628
      },
      {
        "year": "5",
        "white": 60028,
        "black": 49223,
        "hispanic": 51023,
        "asian": 63029,
        "multi": 55225
      },
      {
        "year": "10",
        "white": 66918,
        "black": 54872,
        "hispanic": 56880,
        "asian": 70264,
        "multi": 61564
      },
      {
        "year": "15",
        "white": 74598,
        "black": 61171,
        "hispanic": 63409,
        "asian": 78328,
        "multi": 68631
      },
      {
        "year": "20",
        "white": 83161,
        "black": 68192,
        "hispanic": 70687,
        "asian": 87319,
        "multi": 76508
      },
      {
        "year": "25",
        "white": 92706,
        "black": 76019,
        "hispanic": 78800,
        "asian": 97342,
        "multi": 85290
      },
      {
        "year": "30",
        "white": 103347,
        "black": 84745,
        "hispanic": 87845,
        "asian": 108514,
        "multi": 95079
      },
      {
        "year": "35",
        "white": 115209,
        "black": 94472,
        "hispanic": 97928,
        "asian": 120970,
        "multi": 105993
      },
      {
        "year": "40",
        "white": 128433,
        "black": 105315,
        "hispanic": 109168,
        "asian": 134855,
        "multi": 118158
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Wrench",
        "color": "text-orange-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-emerald-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "occupational-therapy-assistant",
    "name": "OT Assistant",
    "sector": "Healthcare & Medical",
    "base": 37444,
    "demand": "Stable",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 37444,
        "black": 30704,
        "hispanic": 31827,
        "asian": 39316,
        "multi": 34448
      },
      {
        "year": "5",
        "white": 44811,
        "black": 36745,
        "hispanic": 38089,
        "asian": 47051,
        "multi": 41226
      },
      {
        "year": "10",
        "white": 56089,
        "black": 45993,
        "hispanic": 47676,
        "asian": 58894,
        "multi": 51602
      },
      {
        "year": "15",
        "white": 70206,
        "black": 57569,
        "hispanic": 59675,
        "asian": 73717,
        "multi": 64590
      },
      {
        "year": "20",
        "white": 87877,
        "black": 72059,
        "hispanic": 74695,
        "asian": 92271,
        "multi": 80847
      },
      {
        "year": "25",
        "white": 109995,
        "black": 90196,
        "hispanic": 93496,
        "asian": 115494,
        "multi": 101195
      },
      {
        "year": "30",
        "white": 137680,
        "black": 112897,
        "hispanic": 117028,
        "asian": 144564,
        "multi": 126665
      },
      {
        "year": "35",
        "white": 172333,
        "black": 141313,
        "hispanic": 146483,
        "asian": 180949,
        "multi": 158546
      },
      {
        "year": "40",
        "white": 215708,
        "black": 176880,
        "hispanic": 183351,
        "asian": 226493,
        "multi": 198451
      }
    ],
    "aptitude": "Requires specialized training in healthcare systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Healthcare field.",
        "icon": "Eye",
        "color": "text-blue-400"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-indigo-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "oil-well-driller",
    "name": "Oil Well Driller",
    "sector": "Industrial & Manufacturing",
    "base": 59521,
    "demand": "Moderate",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 59521,
        "black": 48807,
        "hispanic": 50593,
        "asian": 62497,
        "multi": 54759
      },
      {
        "year": "5",
        "white": 66101,
        "black": 54203,
        "hispanic": 56186,
        "asian": 69406,
        "multi": 60813
      },
      {
        "year": "10",
        "white": 75359,
        "black": 61794,
        "hispanic": 64055,
        "asian": 79127,
        "multi": 69330
      },
      {
        "year": "15",
        "white": 85913,
        "black": 70449,
        "hispanic": 73026,
        "asian": 90209,
        "multi": 79040
      },
      {
        "year": "20",
        "white": 97946,
        "black": 80316,
        "hispanic": 83254,
        "asian": 102843,
        "multi": 90110
      },
      {
        "year": "25",
        "white": 111663,
        "black": 91564,
        "hispanic": 94914,
        "asian": 117247,
        "multi": 102730
      },
      {
        "year": "30",
        "white": 127302,
        "black": 104388,
        "hispanic": 108207,
        "asian": 133667,
        "multi": 117118
      },
      {
        "year": "35",
        "white": 145131,
        "black": 119008,
        "hispanic": 123362,
        "asian": 152388,
        "multi": 133521
      },
      {
        "year": "40",
        "white": 165457,
        "black": 135675,
        "hispanic": 140639,
        "asian": 173730,
        "multi": 152221
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "TreeDeciduous",
        "color": "text-indigo-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-red-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "orthotist-prosthetist",
    "name": "Orthotist/Prosthetist",
    "sector": "Healthcare & Medical",
    "base": 57096,
    "demand": "High",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 57096,
        "black": 46819,
        "hispanic": 48532,
        "asian": 59951,
        "multi": 52528
      },
      {
        "year": "5",
        "white": 68467,
        "black": 56143,
        "hispanic": 58197,
        "asian": 71891,
        "multi": 62990
      },
      {
        "year": "10",
        "white": 85917,
        "black": 70452,
        "hispanic": 73029,
        "asian": 90213,
        "multi": 79044
      },
      {
        "year": "15",
        "white": 107814,
        "black": 88407,
        "hispanic": 91642,
        "asian": 113205,
        "multi": 99189
      },
      {
        "year": "20",
        "white": 135292,
        "black": 110939,
        "hispanic": 114998,
        "asian": 142056,
        "multi": 124468
      },
      {
        "year": "25",
        "white": 169773,
        "black": 139214,
        "hispanic": 144307,
        "asian": 178261,
        "multi": 156191
      },
      {
        "year": "30",
        "white": 213041,
        "black": 174694,
        "hispanic": 181085,
        "asian": 223693,
        "multi": 195998
      },
      {
        "year": "35",
        "white": 267338,
        "black": 219217,
        "hispanic": 227237,
        "asian": 280705,
        "multi": 245951
      },
      {
        "year": "40",
        "white": 335472,
        "black": 275087,
        "hispanic": 285151,
        "asian": 352246,
        "multi": 308634
      }
    ],
    "aptitude": "Requires specialized training in healthcare systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Healthcare field.",
        "icon": "Zap",
        "color": "text-gray-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-red-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "paralegal",
    "name": "Paralegal",
    "sector": "Service",
    "base": 49439,
    "demand": "Stable",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 49439,
        "black": 40540,
        "hispanic": 42023,
        "asian": 51911,
        "multi": 45484
      },
      {
        "year": "5",
        "white": 60919,
        "black": 49953,
        "hispanic": 51781,
        "asian": 63964,
        "multi": 56045
      },
      {
        "year": "10",
        "white": 79086,
        "black": 64850,
        "hispanic": 67223,
        "asian": 83040,
        "multi": 72759
      },
      {
        "year": "15",
        "white": 102671,
        "black": 84190,
        "hispanic": 87270,
        "asian": 107805,
        "multi": 94457
      },
      {
        "year": "20",
        "white": 133290,
        "black": 109298,
        "hispanic": 113297,
        "asian": 139955,
        "multi": 122627
      },
      {
        "year": "25",
        "white": 173040,
        "black": 141893,
        "hispanic": 147084,
        "asian": 181692,
        "multi": 159197
      },
      {
        "year": "30",
        "white": 224645,
        "black": 184209,
        "hispanic": 190948,
        "asian": 235877,
        "multi": 206674
      },
      {
        "year": "35",
        "white": 291640,
        "black": 239145,
        "hispanic": 247894,
        "asian": 306222,
        "multi": 268309
      },
      {
        "year": "40",
        "white": 378614,
        "black": 310463,
        "hispanic": 321822,
        "asian": 397544,
        "multi": 348325
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "TreeDeciduous",
        "color": "text-gray-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-green-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "piano-tuner",
    "name": "Piano Tuner",
    "sector": "Service",
    "base": 42380,
    "demand": "Critical",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 42380,
        "black": 34752,
        "hispanic": 36023,
        "asian": 44499,
        "multi": 38990
      },
      {
        "year": "5",
        "white": 52289,
        "black": 42877,
        "hispanic": 44445,
        "asian": 54903,
        "multi": 48106
      },
      {
        "year": "10",
        "white": 67994,
        "black": 55755,
        "hispanic": 57795,
        "asian": 71393,
        "multi": 62554
      },
      {
        "year": "15",
        "white": 88415,
        "black": 72501,
        "hispanic": 75153,
        "asian": 92836,
        "multi": 81342
      },
      {
        "year": "20",
        "white": 114971,
        "black": 94276,
        "hispanic": 97725,
        "asian": 120719,
        "multi": 105773
      },
      {
        "year": "25",
        "white": 149502,
        "black": 122592,
        "hispanic": 127077,
        "asian": 156977,
        "multi": 137542
      },
      {
        "year": "30",
        "white": 194405,
        "black": 159412,
        "hispanic": 165244,
        "asian": 204125,
        "multi": 178852
      },
      {
        "year": "35",
        "white": 252794,
        "black": 207291,
        "hispanic": 214875,
        "asian": 265434,
        "multi": 232570
      },
      {
        "year": "40",
        "white": 328720,
        "black": 269551,
        "hispanic": 279412,
        "asian": 345156,
        "multi": 302423
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Microscope",
        "color": "text-industrial-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-amber-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "pool-service-tech",
    "name": "Pool Service Tech",
    "sector": "Service",
    "base": 44957,
    "demand": "Very High",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 44957,
        "black": 36865,
        "hispanic": 38213,
        "asian": 47205,
        "multi": 41360
      },
      {
        "year": "5",
        "white": 54533,
        "black": 44717,
        "hispanic": 46353,
        "asian": 57259,
        "multi": 50170
      },
      {
        "year": "10",
        "white": 69419,
        "black": 56924,
        "hispanic": 59006,
        "asian": 72890,
        "multi": 63866
      },
      {
        "year": "15",
        "white": 88370,
        "black": 72463,
        "hispanic": 75114,
        "asian": 92788,
        "multi": 81300
      },
      {
        "year": "20",
        "white": 112494,
        "black": 92245,
        "hispanic": 95620,
        "asian": 118118,
        "multi": 103494
      },
      {
        "year": "25",
        "white": 143203,
        "black": 117426,
        "hispanic": 121722,
        "asian": 150363,
        "multi": 131747
      },
      {
        "year": "30",
        "white": 182295,
        "black": 149482,
        "hispanic": 154951,
        "asian": 191410,
        "multi": 167712
      },
      {
        "year": "35",
        "white": 232059,
        "black": 190289,
        "hispanic": 197250,
        "asian": 243662,
        "multi": 213495
      },
      {
        "year": "40",
        "white": 295408,
        "black": 242235,
        "hispanic": 251097,
        "asian": 310179,
        "multi": 271776
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Microscope",
        "color": "text-blue-400"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-industrial-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "power-plant-op",
    "name": "Power Plant Operator",
    "sector": "Industrial & Manufacturing",
    "base": 59416,
    "demand": "Stable",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 59416,
        "black": 48721,
        "hispanic": 50504,
        "asian": 62387,
        "multi": 54663
      },
      {
        "year": "5",
        "white": 68501,
        "black": 56171,
        "hispanic": 58226,
        "asian": 71926,
        "multi": 63021
      },
      {
        "year": "10",
        "white": 81834,
        "black": 67104,
        "hispanic": 69559,
        "asian": 85926,
        "multi": 75287
      },
      {
        "year": "15",
        "white": 97763,
        "black": 80165,
        "hispanic": 83098,
        "asian": 102651,
        "multi": 89942
      },
      {
        "year": "20",
        "white": 116792,
        "black": 95769,
        "hispanic": 99273,
        "asian": 122631,
        "multi": 107448
      },
      {
        "year": "25",
        "white": 139525,
        "black": 114410,
        "hispanic": 118596,
        "asian": 146501,
        "multi": 128363
      },
      {
        "year": "30",
        "white": 166683,
        "black": 136680,
        "hispanic": 141680,
        "asian": 175017,
        "multi": 153348
      },
      {
        "year": "35",
        "white": 199127,
        "black": 163284,
        "hispanic": 169258,
        "asian": 209083,
        "multi": 183197
      },
      {
        "year": "40",
        "white": 237886,
        "black": 195066,
        "hispanic": 202203,
        "asian": 249780,
        "multi": 218855
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "ShieldCheck",
        "color": "text-orange-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-red-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "private-investigator",
    "name": "Private Investigator",
    "sector": "Service",
    "base": 53554,
    "demand": "Stable",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 53554,
        "black": 43914,
        "hispanic": 45521,
        "asian": 56232,
        "multi": 49270
      },
      {
        "year": "5",
        "white": 56104,
        "black": 46006,
        "hispanic": 47689,
        "asian": 58910,
        "multi": 51616
      },
      {
        "year": "10",
        "white": 59464,
        "black": 48760,
        "hispanic": 50544,
        "asian": 62437,
        "multi": 54707
      },
      {
        "year": "15",
        "white": 63024,
        "black": 51680,
        "hispanic": 53571,
        "asian": 66176,
        "multi": 57982
      },
      {
        "year": "20",
        "white": 66798,
        "black": 54774,
        "hispanic": 56778,
        "asian": 70138,
        "multi": 61454
      },
      {
        "year": "25",
        "white": 70798,
        "black": 58054,
        "hispanic": 60178,
        "asian": 74338,
        "multi": 65134
      },
      {
        "year": "30",
        "white": 75037,
        "black": 61530,
        "hispanic": 63781,
        "asian": 78789,
        "multi": 69034
      },
      {
        "year": "35",
        "white": 79530,
        "black": 65215,
        "hispanic": 67601,
        "asian": 83507,
        "multi": 73168
      },
      {
        "year": "40",
        "white": 84292,
        "black": 69120,
        "hispanic": 71648,
        "asian": 88507,
        "multi": 77549
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Palette",
        "color": "text-blue-400"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-emerald-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "property-manager",
    "name": "Property Manager",
    "sector": "Service",
    "base": 39898,
    "demand": "Stable",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 39898,
        "black": 32716,
        "hispanic": 33913,
        "asian": 41893,
        "multi": 36706
      },
      {
        "year": "5",
        "white": 43949,
        "black": 36038,
        "hispanic": 37357,
        "asian": 46147,
        "multi": 40433
      },
      {
        "year": "10",
        "white": 49596,
        "black": 40669,
        "hispanic": 42157,
        "asian": 52076,
        "multi": 45629
      },
      {
        "year": "15",
        "white": 55969,
        "black": 45895,
        "hispanic": 47574,
        "asian": 58768,
        "multi": 51492
      },
      {
        "year": "20",
        "white": 63161,
        "black": 51792,
        "hispanic": 53687,
        "asian": 66319,
        "multi": 58108
      },
      {
        "year": "25",
        "white": 71277,
        "black": 58447,
        "hispanic": 60586,
        "asian": 74841,
        "multi": 65575
      },
      {
        "year": "30",
        "white": 80436,
        "black": 65957,
        "hispanic": 68371,
        "asian": 84458,
        "multi": 74001
      },
      {
        "year": "35",
        "white": 90772,
        "black": 74433,
        "hispanic": 77156,
        "asian": 95310,
        "multi": 83510
      },
      {
        "year": "40",
        "white": 102435,
        "black": 83997,
        "hispanic": 87070,
        "asian": 107557,
        "multi": 94241
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Eye",
        "color": "text-industrial-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-red-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "radiation-therapist",
    "name": "Radiation Therapist",
    "sector": "Healthcare & Medical",
    "base": 72980,
    "demand": "Very High",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 72980,
        "black": 59844,
        "hispanic": 62033,
        "asian": 76629,
        "multi": 67142
      },
      {
        "year": "5",
        "white": 91745,
        "black": 75231,
        "hispanic": 77983,
        "asian": 96332,
        "multi": 84406
      },
      {
        "year": "10",
        "white": 122126,
        "black": 100143,
        "hispanic": 103807,
        "asian": 128232,
        "multi": 112356
      },
      {
        "year": "15",
        "white": 162567,
        "black": 133305,
        "hispanic": 138182,
        "asian": 170695,
        "multi": 149562
      },
      {
        "year": "20",
        "white": 216400,
        "black": 177448,
        "hispanic": 183940,
        "asian": 227220,
        "multi": 199088
      },
      {
        "year": "25",
        "white": 288059,
        "black": 236208,
        "hispanic": 244850,
        "asian": 302462,
        "multi": 265014
      },
      {
        "year": "30",
        "white": 383447,
        "black": 314427,
        "hispanic": 325930,
        "asian": 402619,
        "multi": 352771
      },
      {
        "year": "35",
        "white": 510423,
        "black": 418547,
        "hispanic": 433859,
        "asian": 535944,
        "multi": 469589
      },
      {
        "year": "40",
        "white": 679445,
        "black": 557145,
        "hispanic": 577528,
        "asian": 713417,
        "multi": 625089
      }
    ],
    "aptitude": "Requires specialized training in healthcare systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Healthcare field.",
        "icon": "Hammer",
        "color": "text-amber-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-emerald-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "real-estate-appraiser",
    "name": "Real Estate Appraiser",
    "sector": "Service",
    "base": 37446,
    "demand": "Very High",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 37446,
        "black": 30706,
        "hispanic": 31829,
        "asian": 39318,
        "multi": 34450
      },
      {
        "year": "5",
        "white": 46523,
        "black": 38149,
        "hispanic": 39545,
        "asian": 48849,
        "multi": 42801
      },
      {
        "year": "10",
        "white": 61023,
        "black": 50039,
        "hispanic": 51870,
        "asian": 64074,
        "multi": 56141
      },
      {
        "year": "15",
        "white": 80043,
        "black": 65635,
        "hispanic": 68037,
        "asian": 84045,
        "multi": 73640
      },
      {
        "year": "20",
        "white": 104991,
        "black": 86093,
        "hispanic": 89242,
        "asian": 110241,
        "multi": 96592
      },
      {
        "year": "25",
        "white": 137715,
        "black": 112926,
        "hispanic": 117057,
        "asian": 144600,
        "multi": 126697
      },
      {
        "year": "30",
        "white": 180638,
        "black": 148123,
        "hispanic": 153542,
        "asian": 189669,
        "multi": 166187
      },
      {
        "year": "35",
        "white": 236939,
        "black": 194290,
        "hispanic": 201398,
        "asian": 248786,
        "multi": 217984
      },
      {
        "year": "40",
        "white": 310788,
        "black": 254846,
        "hispanic": 264170,
        "asian": 326327,
        "multi": 285925
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Zap",
        "color": "text-emerald-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-gray-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "recreational-vehicle-tech",
    "name": "RV Technician",
    "sector": "Transportation",
    "base": 51273,
    "demand": "High",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 51273,
        "black": 42044,
        "hispanic": 43582,
        "asian": 53837,
        "multi": 47171
      },
      {
        "year": "5",
        "white": 56372,
        "black": 46225,
        "hispanic": 47917,
        "asian": 59191,
        "multi": 51863
      },
      {
        "year": "10",
        "white": 63466,
        "black": 52042,
        "hispanic": 53946,
        "asian": 66639,
        "multi": 58389
      },
      {
        "year": "15",
        "white": 71452,
        "black": 58590,
        "hispanic": 60734,
        "asian": 75024,
        "multi": 65736
      },
      {
        "year": "20",
        "white": 80442,
        "black": 65963,
        "hispanic": 68376,
        "asian": 84465,
        "multi": 74007
      },
      {
        "year": "25",
        "white": 90565,
        "black": 74263,
        "hispanic": 76980,
        "asian": 95093,
        "multi": 83319
      },
      {
        "year": "30",
        "white": 101960,
        "black": 83607,
        "hispanic": 86666,
        "asian": 107058,
        "multi": 93803
      },
      {
        "year": "35",
        "white": 114790,
        "black": 94128,
        "hispanic": 97571,
        "asian": 120529,
        "multi": 105607
      },
      {
        "year": "40",
        "white": 129234,
        "black": 105972,
        "hispanic": 109849,
        "asian": 135696,
        "multi": 118895
      }
    ],
    "aptitude": "Requires specialized training in transportation systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Transportation field.",
        "icon": "Hammer",
        "color": "text-pink-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "respiratory-therapist",
    "name": "Respiratory Therapist",
    "sector": "Healthcare & Medical",
    "base": 43928,
    "demand": "Very High",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 43928,
        "black": 36021,
        "hispanic": 37339,
        "asian": 46124,
        "multi": 40414
      },
      {
        "year": "5",
        "white": 49416,
        "black": 40521,
        "hispanic": 42004,
        "asian": 51887,
        "multi": 45463
      },
      {
        "year": "10",
        "white": 57251,
        "black": 46945,
        "hispanic": 48663,
        "asian": 60113,
        "multi": 52671
      },
      {
        "year": "15",
        "white": 66327,
        "black": 54388,
        "hispanic": 56378,
        "asian": 69643,
        "multi": 61021
      },
      {
        "year": "20",
        "white": 76842,
        "black": 63011,
        "hispanic": 65316,
        "asian": 80684,
        "multi": 70695
      },
      {
        "year": "25",
        "white": 89025,
        "black": 73000,
        "hispanic": 75671,
        "asian": 93476,
        "multi": 81903
      },
      {
        "year": "30",
        "white": 103138,
        "black": 84573,
        "hispanic": 87668,
        "asian": 108295,
        "multi": 94887
      },
      {
        "year": "35",
        "white": 119490,
        "black": 97982,
        "hispanic": 101566,
        "asian": 125464,
        "multi": 109931
      },
      {
        "year": "40",
        "white": 138433,
        "black": 113515,
        "hispanic": 117668,
        "asian": 145355,
        "multi": 127359
      }
    ],
    "aptitude": "Requires specialized training in healthcare systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Healthcare field.",
        "icon": "Eye",
        "color": "text-emerald-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-industrial-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "septic-tank-servicer",
    "name": "Septic Tank Servicer",
    "sector": "Service",
    "base": 61200,
    "demand": "Very High",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 61200,
        "black": 50184,
        "hispanic": 52020,
        "asian": 64260,
        "multi": 56304
      },
      {
        "year": "5",
        "white": 72542,
        "black": 59485,
        "hispanic": 61661,
        "asian": 76169,
        "multi": 66739
      },
      {
        "year": "10",
        "white": 89720,
        "black": 73570,
        "hispanic": 76262,
        "asian": 94206,
        "multi": 82542
      },
      {
        "year": "15",
        "white": 110965,
        "black": 90991,
        "hispanic": 94320,
        "asian": 116513,
        "multi": 102088
      },
      {
        "year": "20",
        "white": 137241,
        "black": 112538,
        "hispanic": 116655,
        "asian": 144103,
        "multi": 126262
      },
      {
        "year": "25",
        "white": 169739,
        "black": 139186,
        "hispanic": 144279,
        "asian": 178226,
        "multi": 156160
      },
      {
        "year": "30",
        "white": 209933,
        "black": 172145,
        "hispanic": 178443,
        "asian": 220430,
        "multi": 193139
      },
      {
        "year": "35",
        "white": 259645,
        "black": 212909,
        "hispanic": 220698,
        "asian": 272627,
        "multi": 238873
      },
      {
        "year": "40",
        "white": 321128,
        "black": 263325,
        "hispanic": 272958,
        "asian": 337184,
        "multi": 295437
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Droplets",
        "color": "text-blue-400"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-amber-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "shoe-repairer",
    "name": "Shoe Repairer",
    "sector": "Service",
    "base": 45517,
    "demand": "Stable",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 45517,
        "black": 37324,
        "hispanic": 38689,
        "asian": 47793,
        "multi": 41876
      },
      {
        "year": "5",
        "white": 54375,
        "black": 44587,
        "hispanic": 46218,
        "asian": 57093,
        "multi": 50025
      },
      {
        "year": "10",
        "white": 67908,
        "black": 55685,
        "hispanic": 57722,
        "asian": 71304,
        "multi": 62476
      },
      {
        "year": "15",
        "white": 84811,
        "black": 69545,
        "hispanic": 72089,
        "asian": 89051,
        "multi": 78026
      },
      {
        "year": "20",
        "white": 105920,
        "black": 86854,
        "hispanic": 90032,
        "asian": 111216,
        "multi": 97446
      },
      {
        "year": "25",
        "white": 132284,
        "black": 108472,
        "hispanic": 112441,
        "asian": 138898,
        "multi": 121701
      },
      {
        "year": "30",
        "white": 165209,
        "black": 135471,
        "hispanic": 140428,
        "asian": 173469,
        "multi": 151992
      },
      {
        "year": "35",
        "white": 206329,
        "black": 169190,
        "hispanic": 175380,
        "asian": 216646,
        "multi": 189823
      },
      {
        "year": "40",
        "white": 257685,
        "black": 211301,
        "hispanic": 219032,
        "asian": 270569,
        "multi": 237070
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Palette",
        "color": "text-pink-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-orange-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "sign-language-interpreter",
    "name": "Interpreter",
    "sector": "Service",
    "base": 35138,
    "demand": "Very High",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 35138,
        "black": 28813,
        "hispanic": 29867,
        "asian": 36895,
        "multi": 32327
      },
      {
        "year": "5",
        "white": 36912,
        "black": 30268,
        "hispanic": 31375,
        "asian": 38758,
        "multi": 33959
      },
      {
        "year": "10",
        "white": 39256,
        "black": 32190,
        "hispanic": 33367,
        "asian": 41219,
        "multi": 36115
      },
      {
        "year": "15",
        "white": 41749,
        "black": 34234,
        "hispanic": 35486,
        "asian": 43836,
        "multi": 38409
      },
      {
        "year": "20",
        "white": 44400,
        "black": 36408,
        "hispanic": 37740,
        "asian": 46620,
        "multi": 40848
      },
      {
        "year": "25",
        "white": 47219,
        "black": 38719,
        "hispanic": 40136,
        "asian": 49580,
        "multi": 43441
      },
      {
        "year": "30",
        "white": 50217,
        "black": 41178,
        "hispanic": 42685,
        "asian": 52728,
        "multi": 46200
      },
      {
        "year": "35",
        "white": 53406,
        "black": 43793,
        "hispanic": 45395,
        "asian": 56076,
        "multi": 49134
      },
      {
        "year": "40",
        "white": 56797,
        "black": 46574,
        "hispanic": 48278,
        "asian": 59637,
        "multi": 52253
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Target",
        "color": "text-red-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-pink-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "solar-thermal-tech",
    "name": "Solar Thermal Tech",
    "sector": "Energy & Utilities",
    "base": 37820,
    "demand": "Moderate",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 37820,
        "black": 31012,
        "hispanic": 32147,
        "asian": 39711,
        "multi": 34794
      },
      {
        "year": "5",
        "white": 45707,
        "black": 37479,
        "hispanic": 38851,
        "asian": 47992,
        "multi": 42050
      },
      {
        "year": "10",
        "white": 57917,
        "black": 47492,
        "hispanic": 49229,
        "asian": 60812,
        "multi": 53283
      },
      {
        "year": "15",
        "white": 73388,
        "black": 60178,
        "hispanic": 62380,
        "asian": 77057,
        "multi": 67517
      },
      {
        "year": "20",
        "white": 92992,
        "black": 76254,
        "hispanic": 79044,
        "asian": 97642,
        "multi": 85553
      },
      {
        "year": "25",
        "white": 117834,
        "black": 96624,
        "hispanic": 100159,
        "asian": 123726,
        "multi": 108407
      },
      {
        "year": "30",
        "white": 149311,
        "black": 122435,
        "hispanic": 126915,
        "asian": 156777,
        "multi": 137367
      },
      {
        "year": "35",
        "white": 189198,
        "black": 155142,
        "hispanic": 160818,
        "asian": 198658,
        "multi": 174062
      },
      {
        "year": "40",
        "white": 239739,
        "black": 196586,
        "hispanic": 203778,
        "asian": 251726,
        "multi": 220560
      }
    ],
    "aptitude": "Requires specialized training in electrical systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Electrical field.",
        "icon": "TreeDeciduous",
        "color": "text-emerald-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-emerald-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "sound-engineering-tech",
    "name": "Sound Tech",
    "sector": "Service",
    "base": 49236,
    "demand": "Stable",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 49236,
        "black": 40374,
        "hispanic": 41851,
        "asian": 51698,
        "multi": 45297
      },
      {
        "year": "5",
        "white": 51753,
        "black": 42438,
        "hispanic": 43990,
        "asian": 54341,
        "multi": 47613
      },
      {
        "year": "10",
        "white": 55082,
        "black": 45167,
        "hispanic": 46820,
        "asian": 57836,
        "multi": 50675
      },
      {
        "year": "15",
        "white": 58624,
        "black": 48072,
        "hispanic": 49831,
        "asian": 61556,
        "multi": 53934
      },
      {
        "year": "20",
        "white": 62395,
        "black": 51164,
        "hispanic": 53035,
        "asian": 65514,
        "multi": 57403
      },
      {
        "year": "25",
        "white": 66407,
        "black": 54454,
        "hispanic": 56446,
        "asian": 69728,
        "multi": 61095
      },
      {
        "year": "30",
        "white": 70678,
        "black": 57956,
        "hispanic": 60077,
        "asian": 74212,
        "multi": 65024
      },
      {
        "year": "35",
        "white": 75224,
        "black": 61684,
        "hispanic": 63940,
        "asian": 78985,
        "multi": 69206
      },
      {
        "year": "40",
        "white": 80062,
        "black": 65651,
        "hispanic": 68053,
        "asian": 84065,
        "multi": 73657
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Brain",
        "color": "text-amber-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-orange-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "surveying-tech",
    "name": "Surveying Tech",
    "sector": "Construction",
    "base": 59890,
    "demand": "High",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 59890,
        "black": 49110,
        "hispanic": 50907,
        "asian": 62885,
        "multi": 55099
      },
      {
        "year": "5",
        "white": 69737,
        "black": 57185,
        "hispanic": 59277,
        "asian": 73224,
        "multi": 64158
      },
      {
        "year": "10",
        "white": 84353,
        "black": 69170,
        "hispanic": 71700,
        "asian": 88571,
        "multi": 77605
      },
      {
        "year": "15",
        "white": 102033,
        "black": 83667,
        "hispanic": 86728,
        "asian": 107135,
        "multi": 93870
      },
      {
        "year": "20",
        "white": 123418,
        "black": 101203,
        "hispanic": 104905,
        "asian": 129589,
        "multi": 113544
      },
      {
        "year": "25",
        "white": 149285,
        "black": 122414,
        "hispanic": 126892,
        "asian": 156749,
        "multi": 137342
      },
      {
        "year": "30",
        "white": 180573,
        "black": 148070,
        "hispanic": 153487,
        "asian": 189602,
        "multi": 166127
      },
      {
        "year": "35",
        "white": 218420,
        "black": 179104,
        "hispanic": 185657,
        "asian": 229341,
        "multi": 200946
      },
      {
        "year": "40",
        "white": 264198,
        "black": 216642,
        "hispanic": 224568,
        "asian": 277408,
        "multi": 243062
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "Wind",
        "color": "text-orange-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-pink-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "taxidermist",
    "name": "Taxidermist",
    "sector": "Service",
    "base": 43089,
    "demand": "Stable",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 43089,
        "black": 35333,
        "hispanic": 36626,
        "asian": 45243,
        "multi": 39642
      },
      {
        "year": "5",
        "white": 50892,
        "black": 41732,
        "hispanic": 43258,
        "asian": 53437,
        "multi": 46821
      },
      {
        "year": "10",
        "white": 62662,
        "black": 51383,
        "hispanic": 53263,
        "asian": 65796,
        "multi": 57649
      },
      {
        "year": "15",
        "white": 77155,
        "black": 63267,
        "hispanic": 65582,
        "asian": 81013,
        "multi": 70982
      },
      {
        "year": "20",
        "white": 94999,
        "black": 77899,
        "hispanic": 80749,
        "asian": 99749,
        "multi": 87399
      },
      {
        "year": "25",
        "white": 116970,
        "black": 95915,
        "hispanic": 99424,
        "asian": 122818,
        "multi": 107612
      },
      {
        "year": "30",
        "white": 144022,
        "black": 118098,
        "hispanic": 122419,
        "asian": 151224,
        "multi": 132501
      },
      {
        "year": "35",
        "white": 177332,
        "black": 145412,
        "hispanic": 150732,
        "asian": 186198,
        "multi": 163145
      },
      {
        "year": "40",
        "white": 218344,
        "black": 179042,
        "hispanic": 185593,
        "asian": 229262,
        "multi": 200877
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Hammer",
        "color": "text-purple-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-green-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "tool-grinder",
    "name": "Tool Grinder",
    "sector": "Industrial & Manufacturing",
    "base": 55941,
    "demand": "High",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 55941,
        "black": 45872,
        "hispanic": 47550,
        "asian": 58738,
        "multi": 51466
      },
      {
        "year": "5",
        "white": 58450,
        "black": 47929,
        "hispanic": 49683,
        "asian": 61373,
        "multi": 53774
      },
      {
        "year": "10",
        "white": 61745,
        "black": 50631,
        "hispanic": 52483,
        "asian": 64832,
        "multi": 56806
      },
      {
        "year": "15",
        "white": 65226,
        "black": 53485,
        "hispanic": 55442,
        "asian": 68487,
        "multi": 60008
      },
      {
        "year": "20",
        "white": 68903,
        "black": 56501,
        "hispanic": 58568,
        "asian": 72348,
        "multi": 63391
      },
      {
        "year": "25",
        "white": 72788,
        "black": 59686,
        "hispanic": 61870,
        "asian": 76427,
        "multi": 66965
      },
      {
        "year": "30",
        "white": 76891,
        "black": 63051,
        "hispanic": 65357,
        "asian": 80736,
        "multi": 70740
      },
      {
        "year": "35",
        "white": 81226,
        "black": 66605,
        "hispanic": 69042,
        "asian": 85287,
        "multi": 74728
      },
      {
        "year": "40",
        "white": 85805,
        "black": 70360,
        "hispanic": 72934,
        "asian": 90095,
        "multi": 78941
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "Flame",
        "color": "text-blue-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-red-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "travel-agent",
    "name": "Travel Agent",
    "sector": "Service",
    "base": 35503,
    "demand": "Stable",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 35503,
        "black": 29112,
        "hispanic": 30178,
        "asian": 37278,
        "multi": 32663
      },
      {
        "year": "5",
        "white": 38750,
        "black": 31775,
        "hispanic": 32937,
        "asian": 40687,
        "multi": 35650
      },
      {
        "year": "10",
        "white": 43228,
        "black": 35447,
        "hispanic": 36744,
        "asian": 45390,
        "multi": 39770
      },
      {
        "year": "15",
        "white": 48225,
        "black": 39545,
        "hispanic": 40991,
        "asian": 50636,
        "multi": 44367
      },
      {
        "year": "20",
        "white": 53799,
        "black": 44115,
        "hispanic": 45729,
        "asian": 56489,
        "multi": 49495
      },
      {
        "year": "25",
        "white": 60018,
        "black": 49214,
        "hispanic": 51015,
        "asian": 63018,
        "multi": 55216
      },
      {
        "year": "30",
        "white": 66955,
        "black": 54903,
        "hispanic": 56912,
        "asian": 70303,
        "multi": 61598
      },
      {
        "year": "35",
        "white": 74694,
        "black": 61249,
        "hispanic": 63490,
        "asian": 78428,
        "multi": 68718
      },
      {
        "year": "40",
        "white": 83327,
        "black": 68328,
        "hispanic": 70828,
        "asian": 87494,
        "multi": 76661
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Hammer",
        "color": "text-emerald-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "tree-trimmer",
    "name": "Tree Trimmer",
    "sector": "Service",
    "base": 63319,
    "demand": "Moderate",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 63319,
        "black": 51922,
        "hispanic": 53821,
        "asian": 66485,
        "multi": 58253
      },
      {
        "year": "5",
        "white": 74868,
        "black": 61392,
        "hispanic": 63638,
        "asian": 78611,
        "multi": 68878
      },
      {
        "year": "10",
        "white": 92309,
        "black": 75694,
        "hispanic": 78463,
        "asian": 96925,
        "multi": 84925
      },
      {
        "year": "15",
        "white": 113814,
        "black": 93328,
        "hispanic": 96742,
        "asian": 119505,
        "multi": 104709
      },
      {
        "year": "20",
        "white": 140329,
        "black": 115070,
        "hispanic": 119280,
        "asian": 147346,
        "multi": 129103
      },
      {
        "year": "25",
        "white": 173021,
        "black": 141878,
        "hispanic": 147068,
        "asian": 181672,
        "multi": 159180
      },
      {
        "year": "30",
        "white": 213330,
        "black": 174930,
        "hispanic": 181330,
        "asian": 223996,
        "multi": 196263
      },
      {
        "year": "35",
        "white": 263028,
        "black": 215683,
        "hispanic": 223574,
        "asian": 276180,
        "multi": 241986
      },
      {
        "year": "40",
        "white": 324305,
        "black": 265930,
        "hispanic": 275659,
        "asian": 340520,
        "multi": 298360
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Target",
        "color": "text-amber-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-purple-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "underwater-welder",
    "name": "Underwater Welder",
    "sector": "Industrial & Manufacturing",
    "base": 37197,
    "demand": "High",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 37197,
        "black": 30502,
        "hispanic": 31617,
        "asian": 39057,
        "multi": 34221
      },
      {
        "year": "5",
        "white": 40700,
        "black": 33374,
        "hispanic": 34595,
        "asian": 42735,
        "multi": 37444
      },
      {
        "year": "10",
        "white": 45547,
        "black": 37348,
        "hispanic": 38715,
        "asian": 47824,
        "multi": 41903
      },
      {
        "year": "15",
        "white": 50970,
        "black": 41796,
        "hispanic": 43325,
        "asian": 53519,
        "multi": 46893
      },
      {
        "year": "20",
        "white": 57040,
        "black": 46772,
        "hispanic": 48484,
        "asian": 59891,
        "multi": 52476
      },
      {
        "year": "25",
        "white": 63832,
        "black": 52342,
        "hispanic": 54257,
        "asian": 67023,
        "multi": 58725
      },
      {
        "year": "30",
        "white": 71432,
        "black": 58575,
        "hispanic": 60718,
        "asian": 75004,
        "multi": 65718
      },
      {
        "year": "35",
        "white": 79938,
        "black": 65550,
        "hispanic": 67948,
        "asian": 83935,
        "multi": 73543
      },
      {
        "year": "40",
        "white": 89457,
        "black": 73355,
        "hispanic": 76039,
        "asian": 93930,
        "multi": 82301
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "Baby",
        "color": "text-green-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "veterinary-assistant",
    "name": "Vet Assistant",
    "sector": "Healthcare & Medical",
    "base": 50744,
    "demand": "High",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 50744,
        "black": 41610,
        "hispanic": 43132,
        "asian": 53281,
        "multi": 46684
      },
      {
        "year": "5",
        "white": 55933,
        "black": 45865,
        "hispanic": 47543,
        "asian": 58729,
        "multi": 51458
      },
      {
        "year": "10",
        "white": 63171,
        "black": 51800,
        "hispanic": 53695,
        "asian": 66330,
        "multi": 58117
      },
      {
        "year": "15",
        "white": 71346,
        "black": 58504,
        "hispanic": 60644,
        "asian": 74913,
        "multi": 65638
      },
      {
        "year": "20",
        "white": 80579,
        "black": 66075,
        "hispanic": 68492,
        "asian": 84608,
        "multi": 74133
      },
      {
        "year": "25",
        "white": 91007,
        "black": 74626,
        "hispanic": 77356,
        "asian": 95557,
        "multi": 83726
      },
      {
        "year": "30",
        "white": 102784,
        "black": 84283,
        "hispanic": 87366,
        "asian": 107923,
        "multi": 94561
      },
      {
        "year": "35",
        "white": 116085,
        "black": 95190,
        "hispanic": 98673,
        "asian": 121890,
        "multi": 106799
      },
      {
        "year": "40",
        "white": 131108,
        "black": 107509,
        "hispanic": 111442,
        "asian": 137663,
        "multi": 120619
      }
    ],
    "aptitude": "Requires specialized training in healthcare systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Healthcare field.",
        "icon": "Flame",
        "color": "text-emerald-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "water-well-driller",
    "name": "Water Well Driller",
    "sector": "Environment",
    "base": 37160,
    "demand": "High",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 37160,
        "black": 30471,
        "hispanic": 31586,
        "asian": 39018,
        "multi": 34187
      },
      {
        "year": "5",
        "white": 42655,
        "black": 34977,
        "hispanic": 36257,
        "asian": 44788,
        "multi": 39243
      },
      {
        "year": "10",
        "white": 50680,
        "black": 41558,
        "hispanic": 43078,
        "asian": 53214,
        "multi": 46626
      },
      {
        "year": "15",
        "white": 60215,
        "black": 49376,
        "hispanic": 51183,
        "asian": 63226,
        "multi": 55398
      },
      {
        "year": "20",
        "white": 71544,
        "black": 58666,
        "hispanic": 60812,
        "asian": 75121,
        "multi": 65820
      },
      {
        "year": "25",
        "white": 85004,
        "black": 69704,
        "hispanic": 72254,
        "asian": 89255,
        "multi": 78204
      },
      {
        "year": "30",
        "white": 100997,
        "black": 82818,
        "hispanic": 85848,
        "asian": 106047,
        "multi": 92917
      },
      {
        "year": "35",
        "white": 119999,
        "black": 98399,
        "hispanic": 101999,
        "asian": 125999,
        "multi": 110399
      },
      {
        "year": "40",
        "white": 142575,
        "black": 116912,
        "hispanic": 121189,
        "asian": 149704,
        "multi": 131169
      }
    ],
    "aptitude": "Requires specialized training in environment systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Environment field.",
        "icon": "TreeDeciduous",
        "color": "text-orange-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-pink-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "well-head-pumper",
    "name": "Well Head Pumper",
    "sector": "Industrial & Manufacturing",
    "base": 51420,
    "demand": "Stable",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 51420,
        "black": 42164,
        "hispanic": 43707,
        "asian": 53991,
        "multi": 47306
      },
      {
        "year": "5",
        "white": 59016,
        "black": 48393,
        "hispanic": 50164,
        "asian": 61967,
        "multi": 54295
      },
      {
        "year": "10",
        "white": 70108,
        "black": 57489,
        "hispanic": 59592,
        "asian": 73614,
        "multi": 64500
      },
      {
        "year": "15",
        "white": 83285,
        "black": 68294,
        "hispanic": 70792,
        "asian": 87450,
        "multi": 76622
      },
      {
        "year": "20",
        "white": 98939,
        "black": 81130,
        "hispanic": 84098,
        "asian": 103886,
        "multi": 91024
      },
      {
        "year": "25",
        "white": 117535,
        "black": 96378,
        "hispanic": 99904,
        "asian": 123411,
        "multi": 108132
      },
      {
        "year": "30",
        "white": 139625,
        "black": 114493,
        "hispanic": 118681,
        "asian": 146607,
        "multi": 128455
      },
      {
        "year": "35",
        "white": 165868,
        "black": 136012,
        "hispanic": 140988,
        "asian": 174161,
        "multi": 152599
      },
      {
        "year": "40",
        "white": 197043,
        "black": 161575,
        "hispanic": 167487,
        "asian": 206895,
        "multi": 181280
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "ShieldCheck",
        "color": "text-orange-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-400"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "wood-patternmaker",
    "name": "Wood Patternmaker",
    "sector": "Industrial & Manufacturing",
    "base": 58698,
    "demand": "High",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 58698,
        "black": 48132,
        "hispanic": 49893,
        "asian": 61633,
        "multi": 54002
      },
      {
        "year": "5",
        "white": 66627,
        "black": 54635,
        "hispanic": 56633,
        "asian": 69959,
        "multi": 61297
      },
      {
        "year": "10",
        "white": 78062,
        "black": 64011,
        "hispanic": 66353,
        "asian": 81965,
        "multi": 71817
      },
      {
        "year": "15",
        "white": 91460,
        "black": 74997,
        "hispanic": 77741,
        "asian": 96032,
        "multi": 84143
      },
      {
        "year": "20",
        "white": 107156,
        "black": 87868,
        "hispanic": 91083,
        "asian": 112514,
        "multi": 98584
      },
      {
        "year": "25",
        "white": 125546,
        "black": 102948,
        "hispanic": 106714,
        "asian": 131824,
        "multi": 115503
      },
      {
        "year": "30",
        "white": 147093,
        "black": 120616,
        "hispanic": 125029,
        "asian": 154448,
        "multi": 135326
      },
      {
        "year": "35",
        "white": 172338,
        "black": 141317,
        "hispanic": 146487,
        "asian": 180954,
        "multi": 158551
      },
      {
        "year": "40",
        "white": 201915,
        "black": 165570,
        "hispanic": 171627,
        "asian": 212010,
        "multi": 185761
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "Target",
        "color": "text-pink-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-gray-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "x-ray-tech",
    "name": "X-Ray Tech",
    "sector": "Healthcare & Medical",
    "base": 56279,
    "demand": "High",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 56279,
        "black": 46149,
        "hispanic": 47837,
        "asian": 59093,
        "multi": 51777
      },
      {
        "year": "5",
        "white": 61846,
        "black": 50714,
        "hispanic": 52569,
        "asian": 64938,
        "multi": 56898
      },
      {
        "year": "10",
        "white": 69585,
        "black": 57060,
        "hispanic": 59148,
        "asian": 73065,
        "multi": 64019
      },
      {
        "year": "15",
        "white": 78293,
        "black": 64201,
        "hispanic": 66549,
        "asian": 82208,
        "multi": 72030
      },
      {
        "year": "20",
        "white": 88091,
        "black": 72235,
        "hispanic": 74877,
        "asian": 92496,
        "multi": 81044
      },
      {
        "year": "25",
        "white": 99115,
        "black": 81274,
        "hispanic": 84248,
        "asian": 104071,
        "multi": 91186
      },
      {
        "year": "30",
        "white": 111518,
        "black": 91445,
        "hispanic": 94790,
        "asian": 117094,
        "multi": 102597
      },
      {
        "year": "35",
        "white": 125474,
        "black": 102888,
        "hispanic": 106653,
        "asian": 131747,
        "multi": 115436
      },
      {
        "year": "40",
        "white": 141175,
        "black": 115764,
        "hispanic": 119999,
        "asian": 148234,
        "multi": 129881
      }
    ],
    "aptitude": "Requires specialized training in healthcare systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Healthcare field.",
        "icon": "Droplets",
        "color": "text-indigo-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-400"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "yoga-instructor",
    "name": "Yoga Instructor",
    "sector": "Service",
    "base": 38530,
    "demand": "High",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 38530,
        "black": 31595,
        "hispanic": 32751,
        "asian": 40457,
        "multi": 35448
      },
      {
        "year": "5",
        "white": 44368,
        "black": 36382,
        "hispanic": 37713,
        "asian": 46587,
        "multi": 40819
      },
      {
        "year": "10",
        "white": 52925,
        "black": 43399,
        "hispanic": 44986,
        "asian": 55571,
        "multi": 48691
      },
      {
        "year": "15",
        "white": 63132,
        "black": 51768,
        "hispanic": 53662,
        "asian": 66289,
        "multi": 58082
      },
      {
        "year": "20",
        "white": 75308,
        "black": 61753,
        "hispanic": 64012,
        "asian": 79073,
        "multi": 69283
      },
      {
        "year": "25",
        "white": 89832,
        "black": 73662,
        "hispanic": 76357,
        "asian": 94324,
        "multi": 82645
      },
      {
        "year": "30",
        "white": 107157,
        "black": 87869,
        "hispanic": 91084,
        "asian": 112515,
        "multi": 98585
      },
      {
        "year": "35",
        "white": 127824,
        "black": 104815,
        "hispanic": 108650,
        "asian": 134215,
        "multi": 117598
      },
      {
        "year": "40",
        "white": 152476,
        "black": 125030,
        "hispanic": 129604,
        "asian": 160100,
        "multi": 140278
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Target",
        "color": "text-red-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-green-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "zookeeper-assistant",
    "name": "Zookeeper Assistant",
    "sector": "Environment",
    "base": 65583,
    "demand": "Critical",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 65583,
        "black": 53778,
        "hispanic": 55746,
        "asian": 68862,
        "multi": 60336
      },
      {
        "year": "5",
        "white": 72909,
        "black": 59785,
        "hispanic": 61973,
        "asian": 76554,
        "multi": 67076
      },
      {
        "year": "10",
        "white": 83228,
        "black": 68247,
        "hispanic": 70744,
        "asian": 87389,
        "multi": 76570
      },
      {
        "year": "15",
        "white": 95007,
        "black": 77906,
        "hispanic": 80756,
        "asian": 99757,
        "multi": 87406
      },
      {
        "year": "20",
        "white": 108453,
        "black": 88932,
        "hispanic": 92185,
        "asian": 113876,
        "multi": 99777
      },
      {
        "year": "25",
        "white": 123803,
        "black": 101518,
        "hispanic": 105232,
        "asian": 129993,
        "multi": 113898
      },
      {
        "year": "30",
        "white": 141324,
        "black": 115886,
        "hispanic": 120126,
        "asian": 148391,
        "multi": 130018
      },
      {
        "year": "35",
        "white": 161326,
        "black": 132287,
        "hispanic": 137127,
        "asian": 169392,
        "multi": 148420
      },
      {
        "year": "40",
        "white": 184158,
        "black": 151010,
        "hispanic": 156535,
        "asian": 193366,
        "multi": 169426
      }
    ],
    "aptitude": "Requires specialized training in environment systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Environment field.",
        "icon": "Microscope",
        "color": "text-green-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-pink-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "asphalt-paver",
    "name": "Asphalt Paver Operator",
    "sector": "Construction",
    "base": 64578,
    "demand": "Critical",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 64578,
        "black": 52954,
        "hispanic": 54891,
        "asian": 67807,
        "multi": 59412
      },
      {
        "year": "5",
        "white": 68925,
        "black": 56519,
        "hispanic": 58586,
        "asian": 72371,
        "multi": 63411
      },
      {
        "year": "10",
        "white": 74773,
        "black": 61314,
        "hispanic": 63557,
        "asian": 78511,
        "multi": 68791
      },
      {
        "year": "15",
        "white": 81117,
        "black": 66516,
        "hispanic": 68949,
        "asian": 85172,
        "multi": 74627
      },
      {
        "year": "20",
        "white": 87999,
        "black": 72159,
        "hispanic": 74799,
        "asian": 92399,
        "multi": 80959
      },
      {
        "year": "25",
        "white": 95465,
        "black": 78281,
        "hispanic": 81145,
        "asian": 100238,
        "multi": 87827
      },
      {
        "year": "30",
        "white": 103564,
        "black": 84922,
        "hispanic": 88029,
        "asian": 108742,
        "multi": 95279
      },
      {
        "year": "35",
        "white": 112350,
        "black": 92127,
        "hispanic": 95498,
        "asian": 117968,
        "multi": 103362
      },
      {
        "year": "40",
        "white": 121882,
        "black": 99944,
        "hispanic": 103600,
        "asian": 127977,
        "multi": 112132
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "Zap",
        "color": "text-pink-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-orange-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "blaster",
    "name": "Blaster / Explosives Expert",
    "sector": "Industrial & Manufacturing",
    "base": 72379,
    "demand": "High",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 72379,
        "black": 59351,
        "hispanic": 61522,
        "asian": 75998,
        "multi": 66589
      },
      {
        "year": "5",
        "white": 80323,
        "black": 65865,
        "hispanic": 68274,
        "asian": 84339,
        "multi": 73897
      },
      {
        "year": "10",
        "white": 91489,
        "black": 75021,
        "hispanic": 77766,
        "asian": 96064,
        "multi": 84170
      },
      {
        "year": "15",
        "white": 104208,
        "black": 85451,
        "hispanic": 88577,
        "asian": 109418,
        "multi": 95871
      },
      {
        "year": "20",
        "white": 118695,
        "black": 97330,
        "hispanic": 100891,
        "asian": 124630,
        "multi": 109199
      },
      {
        "year": "25",
        "white": 135196,
        "black": 110861,
        "hispanic": 114917,
        "asian": 141956,
        "multi": 124380
      },
      {
        "year": "30",
        "white": 153991,
        "black": 126273,
        "hispanic": 130892,
        "asian": 161691,
        "multi": 141672
      },
      {
        "year": "35",
        "white": 175399,
        "black": 143827,
        "hispanic": 149089,
        "asian": 184169,
        "multi": 161367
      },
      {
        "year": "40",
        "white": 199783,
        "black": 163822,
        "hispanic": 169816,
        "asian": 209772,
        "multi": 183800
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "Baby",
        "color": "text-green-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-industrial-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "carpet-installer",
    "name": "Carpet Installer",
    "sector": "Construction",
    "base": 37562,
    "demand": "Critical",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 37562,
        "black": 30801,
        "hispanic": 31928,
        "asian": 39440,
        "multi": 34557
      },
      {
        "year": "5",
        "white": 45417,
        "black": 37242,
        "hispanic": 38605,
        "asian": 47688,
        "multi": 41784
      },
      {
        "year": "10",
        "white": 57585,
        "black": 47220,
        "hispanic": 48947,
        "asian": 60464,
        "multi": 52978
      },
      {
        "year": "15",
        "white": 73012,
        "black": 59870,
        "hispanic": 62061,
        "asian": 76663,
        "multi": 67171
      },
      {
        "year": "20",
        "white": 92573,
        "black": 75910,
        "hispanic": 78687,
        "asian": 97202,
        "multi": 85167
      },
      {
        "year": "25",
        "white": 117375,
        "black": 96247,
        "hispanic": 99768,
        "asian": 123243,
        "multi": 107985
      },
      {
        "year": "30",
        "white": 148821,
        "black": 122033,
        "hispanic": 126498,
        "asian": 156262,
        "multi": 136915
      },
      {
        "year": "35",
        "white": 188691,
        "black": 154727,
        "hispanic": 160388,
        "asian": 198126,
        "multi": 173596
      },
      {
        "year": "40",
        "white": 239244,
        "black": 196180,
        "hispanic": 203357,
        "asian": 251206,
        "multi": 220104
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "Wrench",
        "color": "text-indigo-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-green-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "commercial-pilot-entry",
    "name": "Commercial Pilot (Entry)",
    "sector": "Transportation",
    "base": 35537,
    "demand": "Stable",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 35537,
        "black": 29140,
        "hispanic": 30206,
        "asian": 37314,
        "multi": 32694
      },
      {
        "year": "5",
        "white": 43855,
        "black": 35961,
        "hispanic": 37277,
        "asian": 46048,
        "multi": 40347
      },
      {
        "year": "10",
        "white": 57042,
        "black": 46774,
        "hispanic": 48485,
        "asian": 59894,
        "multi": 52478
      },
      {
        "year": "15",
        "white": 74193,
        "black": 60838,
        "hispanic": 63064,
        "asian": 77903,
        "multi": 68258
      },
      {
        "year": "20",
        "white": 96502,
        "black": 79132,
        "hispanic": 82027,
        "asian": 101327,
        "multi": 88782
      },
      {
        "year": "25",
        "white": 125519,
        "black": 102926,
        "hispanic": 106691,
        "asian": 131795,
        "multi": 115478
      },
      {
        "year": "30",
        "white": 163261,
        "black": 133874,
        "hispanic": 138772,
        "asian": 171424,
        "multi": 150200
      },
      {
        "year": "35",
        "white": 212351,
        "black": 174128,
        "hispanic": 180499,
        "asian": 222969,
        "multi": 195363
      },
      {
        "year": "40",
        "white": 276203,
        "black": 226486,
        "hispanic": 234772,
        "asian": 290013,
        "multi": 254106
      }
    ],
    "aptitude": "Requires specialized training in transportation systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Transportation field.",
        "icon": "Droplets",
        "color": "text-green-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-pink-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "costume-designer-assistant",
    "name": "Costume Assistant",
    "sector": "Service",
    "base": 36094,
    "demand": "Moderate",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 36094,
        "black": 29597,
        "hispanic": 30680,
        "asian": 37899,
        "multi": 33206
      },
      {
        "year": "5",
        "white": 39069,
        "black": 32037,
        "hispanic": 33209,
        "asian": 41023,
        "multi": 35944
      },
      {
        "year": "10",
        "white": 43136,
        "black": 35371,
        "hispanic": 36665,
        "asian": 45292,
        "multi": 39685
      },
      {
        "year": "15",
        "white": 47625,
        "black": 39053,
        "hispanic": 40481,
        "asian": 50006,
        "multi": 43815
      },
      {
        "year": "20",
        "white": 52582,
        "black": 43117,
        "hispanic": 44695,
        "asian": 55211,
        "multi": 48375
      },
      {
        "year": "25",
        "white": 58055,
        "black": 47605,
        "hispanic": 49347,
        "asian": 60958,
        "multi": 53410
      },
      {
        "year": "30",
        "white": 64097,
        "black": 52560,
        "hispanic": 54483,
        "asian": 67302,
        "multi": 58969
      },
      {
        "year": "35",
        "white": 70768,
        "black": 58030,
        "hispanic": 60153,
        "asian": 74307,
        "multi": 65107
      },
      {
        "year": "40",
        "white": 78134,
        "black": 64070,
        "hispanic": 66414,
        "asian": 82041,
        "multi": 71883
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Hammer",
        "color": "text-green-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-orange-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "crane-rigger",
    "name": "Crane Rigger",
    "sector": "Construction",
    "base": 42312,
    "demand": "Very High",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 42312,
        "black": 34696,
        "hispanic": 35965,
        "asian": 44428,
        "multi": 38927
      },
      {
        "year": "5",
        "white": 48582,
        "black": 39837,
        "hispanic": 41295,
        "asian": 51011,
        "multi": 44696
      },
      {
        "year": "10",
        "white": 57742,
        "black": 47349,
        "hispanic": 49081,
        "asian": 60629,
        "multi": 53123
      },
      {
        "year": "15",
        "white": 68629,
        "black": 56276,
        "hispanic": 58335,
        "asian": 72061,
        "multi": 63139
      },
      {
        "year": "20",
        "white": 81569,
        "black": 66887,
        "hispanic": 69334,
        "asian": 85648,
        "multi": 75044
      },
      {
        "year": "25",
        "white": 96949,
        "black": 79498,
        "hispanic": 82406,
        "asian": 101796,
        "multi": 89193
      },
      {
        "year": "30",
        "white": 115228,
        "black": 94487,
        "hispanic": 97944,
        "asian": 120990,
        "multi": 106010
      },
      {
        "year": "35",
        "white": 136954,
        "black": 112302,
        "hispanic": 116411,
        "asian": 143802,
        "multi": 125998
      },
      {
        "year": "40",
        "white": 162776,
        "black": 133477,
        "hispanic": 138360,
        "asian": 170915,
        "multi": 149754
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "TreeDeciduous",
        "color": "text-indigo-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-red-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "custom-cabinet-finisher",
    "name": "Cabinet Finisher",
    "sector": "Construction",
    "base": 50542,
    "demand": "Very High",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 50542,
        "black": 41444,
        "hispanic": 42961,
        "asian": 53069,
        "multi": 46499
      },
      {
        "year": "5",
        "white": 62892,
        "black": 51572,
        "hispanic": 53459,
        "asian": 66037,
        "multi": 57861
      },
      {
        "year": "10",
        "white": 82657,
        "black": 67779,
        "hispanic": 70259,
        "asian": 86790,
        "multi": 76045
      },
      {
        "year": "15",
        "white": 108634,
        "black": 89080,
        "hispanic": 92339,
        "asian": 114065,
        "multi": 99943
      },
      {
        "year": "20",
        "white": 142773,
        "black": 117074,
        "hispanic": 121357,
        "asian": 149912,
        "multi": 131351
      },
      {
        "year": "25",
        "white": 187642,
        "black": 153866,
        "hispanic": 159496,
        "asian": 197024,
        "multi": 172631
      },
      {
        "year": "30",
        "white": 246611,
        "black": 202221,
        "hispanic": 209620,
        "asian": 258942,
        "multi": 226882
      },
      {
        "year": "35",
        "white": 324112,
        "black": 265772,
        "hispanic": 275496,
        "asian": 340318,
        "multi": 298183
      },
      {
        "year": "40",
        "white": 425969,
        "black": 349295,
        "hispanic": 362074,
        "asian": 447268,
        "multi": 391892
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "Target",
        "color": "text-orange-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-indigo-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "dam-operator",
    "name": "Dam Operator",
    "sector": "Environment",
    "base": 66295,
    "demand": "Moderate",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 66295,
        "black": 54362,
        "hispanic": 56351,
        "asian": 69610,
        "multi": 60991
      },
      {
        "year": "5",
        "white": 80764,
        "black": 66226,
        "hispanic": 68649,
        "asian": 84802,
        "multi": 74302
      },
      {
        "year": "10",
        "white": 103368,
        "black": 84761,
        "hispanic": 87862,
        "asian": 108536,
        "multi": 95098
      },
      {
        "year": "15",
        "white": 132298,
        "black": 108484,
        "hispanic": 112453,
        "asian": 138913,
        "multi": 121714
      },
      {
        "year": "20",
        "white": 169325,
        "black": 138847,
        "hispanic": 143926,
        "asian": 177791,
        "multi": 155779
      },
      {
        "year": "25",
        "white": 216715,
        "black": 177707,
        "hispanic": 184208,
        "asian": 227551,
        "multi": 199378
      },
      {
        "year": "30",
        "white": 277369,
        "black": 227443,
        "hispanic": 235764,
        "asian": 291238,
        "multi": 255180
      },
      {
        "year": "35",
        "white": 354999,
        "black": 291099,
        "hispanic": 301749,
        "asian": 372749,
        "multi": 326599
      },
      {
        "year": "40",
        "white": 454355,
        "black": 372571,
        "hispanic": 386202,
        "asian": 477073,
        "multi": 418007
      }
    ],
    "aptitude": "Requires specialized training in environment systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Environment field.",
        "icon": "ShieldCheck",
        "color": "text-gray-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-orange-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "data-center-tech",
    "name": "Data Center Technician",
    "sector": "Energy & Utilities",
    "base": 61660,
    "demand": "Moderate",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 61660,
        "black": 50561,
        "hispanic": 52411,
        "asian": 64743,
        "multi": 56727
      },
      {
        "year": "5",
        "white": 65685,
        "black": 53861,
        "hispanic": 55832,
        "asian": 68969,
        "multi": 60430
      },
      {
        "year": "10",
        "white": 71087,
        "black": 58291,
        "hispanic": 60424,
        "asian": 74641,
        "multi": 65400
      },
      {
        "year": "15",
        "white": 76933,
        "black": 63085,
        "hispanic": 65393,
        "asian": 80780,
        "multi": 70779
      },
      {
        "year": "20",
        "white": 83261,
        "black": 68274,
        "hispanic": 70771,
        "asian": 87424,
        "multi": 76600
      },
      {
        "year": "25",
        "white": 90108,
        "black": 73889,
        "hispanic": 76592,
        "asian": 94614,
        "multi": 82900
      },
      {
        "year": "30",
        "white": 97519,
        "black": 79966,
        "hispanic": 82891,
        "asian": 102395,
        "multi": 89718
      },
      {
        "year": "35",
        "white": 105539,
        "black": 86542,
        "hispanic": 89708,
        "asian": 110816,
        "multi": 97096
      },
      {
        "year": "40",
        "white": 114219,
        "black": 93660,
        "hispanic": 97086,
        "asian": 119930,
        "multi": 105082
      }
    ],
    "aptitude": "Requires specialized training in electrical systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Electrical field.",
        "icon": "Flame",
        "color": "text-green-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-pink-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "diver-commercial",
    "name": "Commercial Diver",
    "sector": "Industrial & Manufacturing",
    "base": 40420,
    "demand": "Very High",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 40420,
        "black": 33144,
        "hispanic": 34357,
        "asian": 42441,
        "multi": 37186
      },
      {
        "year": "5",
        "white": 49319,
        "black": 40441,
        "hispanic": 41921,
        "asian": 51784,
        "multi": 45373
      },
      {
        "year": "10",
        "white": 63245,
        "black": 51861,
        "hispanic": 53758,
        "asian": 66407,
        "multi": 58186
      },
      {
        "year": "15",
        "white": 81104,
        "black": 66506,
        "hispanic": 68939,
        "asian": 85160,
        "multi": 74616
      },
      {
        "year": "20",
        "white": 104007,
        "black": 85286,
        "hispanic": 88406,
        "asian": 109207,
        "multi": 95686
      },
      {
        "year": "25",
        "white": 133376,
        "black": 109369,
        "hispanic": 113370,
        "asian": 140045,
        "multi": 122706
      },
      {
        "year": "30",
        "white": 171039,
        "black": 140252,
        "hispanic": 145384,
        "asian": 179591,
        "multi": 157356
      },
      {
        "year": "35",
        "white": 219338,
        "black": 179857,
        "hispanic": 186437,
        "asian": 230305,
        "multi": 201791
      },
      {
        "year": "40",
        "white": 281275,
        "black": 230645,
        "hispanic": 239084,
        "asian": 295339,
        "multi": 258773
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "Droplets",
        "color": "text-gray-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-amber-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "diving-instructor",
    "name": "Diving Instructor",
    "sector": "Service",
    "base": 42486,
    "demand": "Moderate",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 42486,
        "black": 34839,
        "hispanic": 36113,
        "asian": 44610,
        "multi": 39087
      },
      {
        "year": "5",
        "white": 44547,
        "black": 36528,
        "hispanic": 37865,
        "asian": 46774,
        "multi": 40983
      },
      {
        "year": "10",
        "white": 47264,
        "black": 38757,
        "hispanic": 40175,
        "asian": 49627,
        "multi": 43483
      },
      {
        "year": "15",
        "white": 50147,
        "black": 41121,
        "hispanic": 42625,
        "asian": 52655,
        "multi": 46135
      },
      {
        "year": "20",
        "white": 53206,
        "black": 43629,
        "hispanic": 45225,
        "asian": 55867,
        "multi": 48950
      },
      {
        "year": "25",
        "white": 56452,
        "black": 46290,
        "hispanic": 47984,
        "asian": 59274,
        "multi": 51936
      },
      {
        "year": "30",
        "white": 59895,
        "black": 49114,
        "hispanic": 50911,
        "asian": 62890,
        "multi": 55104
      },
      {
        "year": "35",
        "white": 63549,
        "black": 52110,
        "hispanic": 54016,
        "asian": 66726,
        "multi": 58465
      },
      {
        "year": "40",
        "white": 67425,
        "black": 55289,
        "hispanic": 57311,
        "asian": 70796,
        "multi": 62031
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "ShieldCheck",
        "color": "text-pink-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "elevator-installer",
    "name": "Elevator Installer",
    "sector": "Construction",
    "base": 56097,
    "demand": "Stable",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 56097,
        "black": 46000,
        "hispanic": 47682,
        "asian": 58902,
        "multi": 51609
      },
      {
        "year": "5",
        "white": 62199,
        "black": 51004,
        "hispanic": 52870,
        "asian": 65309,
        "multi": 57223
      },
      {
        "year": "10",
        "white": 70769,
        "black": 58031,
        "hispanic": 60154,
        "asian": 74308,
        "multi": 65108
      },
      {
        "year": "15",
        "white": 80520,
        "black": 66026,
        "hispanic": 68442,
        "asian": 84546,
        "multi": 74078
      },
      {
        "year": "20",
        "white": 91614,
        "black": 75124,
        "hispanic": 77872,
        "asian": 96195,
        "multi": 84285
      },
      {
        "year": "25",
        "white": 104237,
        "black": 85474,
        "hispanic": 88601,
        "asian": 109449,
        "multi": 95898
      },
      {
        "year": "30",
        "white": 118599,
        "black": 97251,
        "hispanic": 100809,
        "asian": 124528,
        "multi": 109111
      },
      {
        "year": "35",
        "white": 134939,
        "black": 110650,
        "hispanic": 114698,
        "asian": 141686,
        "multi": 124144
      },
      {
        "year": "40",
        "white": 153531,
        "black": 125896,
        "hispanic": 130501,
        "asian": 161208,
        "multi": 141249
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "Flame",
        "color": "text-purple-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-indigo-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "fence-installer",
    "name": "Fence Installer",
    "sector": "Construction",
    "base": 46258,
    "demand": "Stable",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 46258,
        "black": 37932,
        "hispanic": 39319,
        "asian": 48571,
        "multi": 42557
      },
      {
        "year": "5",
        "white": 49670,
        "black": 40729,
        "hispanic": 42219,
        "asian": 52153,
        "multi": 45696
      },
      {
        "year": "10",
        "white": 54290,
        "black": 44518,
        "hispanic": 46147,
        "asian": 57005,
        "multi": 49947
      },
      {
        "year": "15",
        "white": 59341,
        "black": 48659,
        "hispanic": 50440,
        "asian": 62308,
        "multi": 54593
      },
      {
        "year": "20",
        "white": 64861,
        "black": 53186,
        "hispanic": 55132,
        "asian": 68104,
        "multi": 59672
      },
      {
        "year": "25",
        "white": 70895,
        "black": 58134,
        "hispanic": 60261,
        "asian": 74440,
        "multi": 65223
      },
      {
        "year": "30",
        "white": 77490,
        "black": 63542,
        "hispanic": 65866,
        "asian": 81364,
        "multi": 71291
      },
      {
        "year": "35",
        "white": 84699,
        "black": 69453,
        "hispanic": 71994,
        "asian": 88934,
        "multi": 77923
      },
      {
        "year": "40",
        "white": 92578,
        "black": 75914,
        "hispanic": 78691,
        "asian": 97207,
        "multi": 85172
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "TreeDeciduous",
        "color": "text-blue-400"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-red-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "film-editor-assistant",
    "name": "Film Assistant",
    "sector": "Service",
    "base": 36708,
    "demand": "Critical",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 36708,
        "black": 30101,
        "hispanic": 31202,
        "asian": 38543,
        "multi": 33771
      },
      {
        "year": "5",
        "white": 38864,
        "black": 31869,
        "hispanic": 33035,
        "asian": 40808,
        "multi": 35755
      },
      {
        "year": "10",
        "white": 41739,
        "black": 34226,
        "hispanic": 35478,
        "asian": 43826,
        "multi": 38400
      },
      {
        "year": "15",
        "white": 44826,
        "black": 36757,
        "hispanic": 38102,
        "asian": 47067,
        "multi": 41240
      },
      {
        "year": "20",
        "white": 48141,
        "black": 39476,
        "hispanic": 40920,
        "asian": 50548,
        "multi": 44290
      },
      {
        "year": "25",
        "white": 51702,
        "black": 42396,
        "hispanic": 43947,
        "asian": 54287,
        "multi": 47566
      },
      {
        "year": "30",
        "white": 55526,
        "black": 45531,
        "hispanic": 47197,
        "asian": 58302,
        "multi": 51084
      },
      {
        "year": "35",
        "white": 59633,
        "black": 48899,
        "hispanic": 50688,
        "asian": 62614,
        "multi": 54862
      },
      {
        "year": "40",
        "white": 64043,
        "black": 52516,
        "hispanic": 54437,
        "asian": 67246,
        "multi": 58920
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Eye",
        "color": "text-gray-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-orange-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "gas-plant-operator",
    "name": "Gas Plant Operator",
    "sector": "Industrial & Manufacturing",
    "base": 57791,
    "demand": "Very High",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 57791,
        "black": 47389,
        "hispanic": 49122,
        "asian": 60681,
        "multi": 53168
      },
      {
        "year": "5",
        "white": 63685,
        "black": 52221,
        "hispanic": 54132,
        "asian": 66869,
        "multi": 58590
      },
      {
        "year": "10",
        "white": 71904,
        "black": 58961,
        "hispanic": 61118,
        "asian": 75499,
        "multi": 66151
      },
      {
        "year": "15",
        "white": 81184,
        "black": 66570,
        "hispanic": 69006,
        "asian": 85243,
        "multi": 74689
      },
      {
        "year": "20",
        "white": 91661,
        "black": 75162,
        "hispanic": 77912,
        "asian": 96244,
        "multi": 84328
      },
      {
        "year": "25",
        "white": 103491,
        "black": 84862,
        "hispanic": 87967,
        "asian": 108665,
        "multi": 95212
      },
      {
        "year": "30",
        "white": 116847,
        "black": 95815,
        "hispanic": 99320,
        "asian": 122690,
        "multi": 107500
      },
      {
        "year": "35",
        "white": 131928,
        "black": 108181,
        "hispanic": 112139,
        "asian": 138524,
        "multi": 121373
      },
      {
        "year": "40",
        "white": 148954,
        "black": 122143,
        "hispanic": 126611,
        "asian": 156402,
        "multi": 137038
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "Microscope",
        "color": "text-blue-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-indigo-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "heating-eq-tech",
    "name": "Heating Equipment Tech",
    "sector": "Construction",
    "base": 44228,
    "demand": "Critical",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 44228,
        "black": 36267,
        "hispanic": 37594,
        "asian": 46439,
        "multi": 40690
      },
      {
        "year": "5",
        "white": 51410,
        "black": 42156,
        "hispanic": 43698,
        "asian": 53980,
        "multi": 47297
      },
      {
        "year": "10",
        "white": 62049,
        "black": 50880,
        "hispanic": 52741,
        "asian": 65151,
        "multi": 57085
      },
      {
        "year": "15",
        "white": 74889,
        "black": 61409,
        "hispanic": 63656,
        "asian": 78634,
        "multi": 68898
      },
      {
        "year": "20",
        "white": 90387,
        "black": 74117,
        "hispanic": 76829,
        "asian": 94906,
        "multi": 83156
      },
      {
        "year": "25",
        "white": 109092,
        "black": 89455,
        "hispanic": 92728,
        "asian": 114546,
        "multi": 100364
      },
      {
        "year": "30",
        "white": 131667,
        "black": 107967,
        "hispanic": 111917,
        "asian": 138251,
        "multi": 121134
      },
      {
        "year": "35",
        "white": 158915,
        "black": 130310,
        "hispanic": 135078,
        "asian": 166861,
        "multi": 146202
      },
      {
        "year": "40",
        "white": 191801,
        "black": 157277,
        "hispanic": 163031,
        "asian": 201391,
        "multi": 176457
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "Wrench",
        "color": "text-amber-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-green-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "highway-maintenance",
    "name": "Highway Maintenance Worker",
    "sector": "Construction",
    "base": 35716,
    "demand": "Very High",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 35716,
        "black": 29287,
        "hispanic": 30359,
        "asian": 37502,
        "multi": 32859
      },
      {
        "year": "5",
        "white": 38435,
        "black": 31516,
        "hispanic": 32669,
        "asian": 40356,
        "multi": 35360
      },
      {
        "year": "10",
        "white": 42126,
        "black": 34543,
        "hispanic": 35807,
        "asian": 44232,
        "multi": 38756
      },
      {
        "year": "15",
        "white": 46171,
        "black": 37861,
        "hispanic": 39246,
        "asian": 48480,
        "multi": 42478
      },
      {
        "year": "20",
        "white": 50606,
        "black": 41497,
        "hispanic": 43015,
        "asian": 53136,
        "multi": 46557
      },
      {
        "year": "25",
        "white": 55466,
        "black": 45482,
        "hispanic": 47146,
        "asian": 58239,
        "multi": 51028
      },
      {
        "year": "30",
        "white": 60792,
        "black": 49850,
        "hispanic": 51673,
        "asian": 63832,
        "multi": 55929
      },
      {
        "year": "35",
        "white": 66631,
        "black": 54637,
        "hispanic": 56636,
        "asian": 69962,
        "multi": 61300
      },
      {
        "year": "40",
        "white": 73030,
        "black": 59884,
        "hispanic": 62075,
        "asian": 76681,
        "multi": 67187
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "Target",
        "color": "text-purple-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-pink-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "industrial-machinery-mech",
    "name": "Ind. Machinery Mechanic",
    "sector": "Industrial & Manufacturing",
    "base": 51483,
    "demand": "Critical",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 51483,
        "black": 42216,
        "hispanic": 43761,
        "asian": 54057,
        "multi": 47364
      },
      {
        "year": "5",
        "white": 61215,
        "black": 50196,
        "hispanic": 52033,
        "asian": 64276,
        "multi": 56318
      },
      {
        "year": "10",
        "white": 76006,
        "black": 62325,
        "hispanic": 64605,
        "asian": 79806,
        "multi": 69926
      },
      {
        "year": "15",
        "white": 94371,
        "black": 77384,
        "hispanic": 80216,
        "asian": 99090,
        "multi": 86822
      },
      {
        "year": "20",
        "white": 117174,
        "black": 96083,
        "hispanic": 99598,
        "asian": 123033,
        "multi": 107800
      },
      {
        "year": "25",
        "white": 145487,
        "black": 119299,
        "hispanic": 123664,
        "asian": 152761,
        "multi": 133848
      },
      {
        "year": "30",
        "white": 180640,
        "black": 148125,
        "hispanic": 153544,
        "asian": 189672,
        "multi": 166189
      },
      {
        "year": "35",
        "white": 224288,
        "black": 183916,
        "hispanic": 190645,
        "asian": 235502,
        "multi": 206345
      },
      {
        "year": "40",
        "white": 278482,
        "black": 228355,
        "hispanic": 236710,
        "asian": 292406,
        "multi": 256203
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "Palette",
        "color": "text-gray-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-400"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "kitchen-equipment-tech",
    "name": "Kitchen Equipment Tech",
    "sector": "Service",
    "base": 64664,
    "demand": "Stable",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 64664,
        "black": 53024,
        "hispanic": 54964,
        "asian": 67897,
        "multi": 59491
      },
      {
        "year": "5",
        "white": 69749,
        "black": 57194,
        "hispanic": 59286,
        "asian": 73236,
        "multi": 64169
      },
      {
        "year": "10",
        "white": 76670,
        "black": 62869,
        "hispanic": 65170,
        "asian": 80504,
        "multi": 70536
      },
      {
        "year": "15",
        "white": 84278,
        "black": 69108,
        "hispanic": 71637,
        "asian": 88492,
        "multi": 77536
      },
      {
        "year": "20",
        "white": 92642,
        "black": 75966,
        "hispanic": 78746,
        "asian": 97274,
        "multi": 85230
      },
      {
        "year": "25",
        "white": 101835,
        "black": 83505,
        "hispanic": 86560,
        "asian": 106927,
        "multi": 93688
      },
      {
        "year": "30",
        "white": 111941,
        "black": 91791,
        "hispanic": 95150,
        "asian": 117538,
        "multi": 102986
      },
      {
        "year": "35",
        "white": 123049,
        "black": 100900,
        "hispanic": 104592,
        "asian": 129202,
        "multi": 113205
      },
      {
        "year": "40",
        "white": 135260,
        "black": 110913,
        "hispanic": 114971,
        "asian": 142023,
        "multi": 124439
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Wrench",
        "color": "text-blue-400"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-pink-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "landscaping-maintenance",
    "name": "Landscape Maintenance",
    "sector": "Service",
    "base": 74968,
    "demand": "Stable",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 74968,
        "black": 61474,
        "hispanic": 63723,
        "asian": 78716,
        "multi": 68971
      },
      {
        "year": "5",
        "white": 92916,
        "black": 76191,
        "hispanic": 78978,
        "asian": 97561,
        "multi": 85482
      },
      {
        "year": "10",
        "white": 121508,
        "black": 99637,
        "hispanic": 103282,
        "asian": 127583,
        "multi": 111787
      },
      {
        "year": "15",
        "white": 158899,
        "black": 130297,
        "hispanic": 135064,
        "asian": 166844,
        "multi": 146187
      },
      {
        "year": "20",
        "white": 207796,
        "black": 170393,
        "hispanic": 176627,
        "asian": 218186,
        "multi": 191172
      },
      {
        "year": "25",
        "white": 271740,
        "black": 222827,
        "hispanic": 230979,
        "asian": 285327,
        "multi": 250000
      },
      {
        "year": "30",
        "white": 355360,
        "black": 291396,
        "hispanic": 302056,
        "asian": 373128,
        "multi": 326932
      },
      {
        "year": "35",
        "white": 464713,
        "black": 381065,
        "hispanic": 395006,
        "asian": 487949,
        "multi": 427536
      },
      {
        "year": "40",
        "white": 607717,
        "black": 498328,
        "hispanic": 516559,
        "asian": 638103,
        "multi": 559099
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Droplets",
        "color": "text-red-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-400"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "lathe-operator",
    "name": "Lathe Operator",
    "sector": "Industrial & Manufacturing",
    "base": 69997,
    "demand": "High",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 69997,
        "black": 57398,
        "hispanic": 59497,
        "asian": 73497,
        "multi": 64397
      },
      {
        "year": "5",
        "white": 83581,
        "black": 68536,
        "hispanic": 71044,
        "asian": 87760,
        "multi": 76894
      },
      {
        "year": "10",
        "white": 104326,
        "black": 85547,
        "hispanic": 88677,
        "asian": 109542,
        "multi": 95980
      },
      {
        "year": "15",
        "white": 130220,
        "black": 106780,
        "hispanic": 110687,
        "asian": 136731,
        "multi": 119802
      },
      {
        "year": "20",
        "white": 162541,
        "black": 133283,
        "hispanic": 138159,
        "asian": 170668,
        "multi": 149537
      },
      {
        "year": "25",
        "white": 202883,
        "black": 166364,
        "hispanic": 172451,
        "asian": 213028,
        "multi": 186653
      },
      {
        "year": "30",
        "white": 253239,
        "black": 207656,
        "hispanic": 215253,
        "asian": 265901,
        "multi": 232980
      },
      {
        "year": "35",
        "white": 316094,
        "black": 259197,
        "hispanic": 268680,
        "asian": 331899,
        "multi": 290806
      },
      {
        "year": "40",
        "white": 394549,
        "black": 323530,
        "hispanic": 335367,
        "asian": 414276,
        "multi": 362985
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "Flame",
        "color": "text-orange-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-400"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "lighting-specialist",
    "name": "Lighting Specialist",
    "sector": "Energy & Utilities",
    "base": 67543,
    "demand": "Moderate",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 67543,
        "black": 55385,
        "hispanic": 57412,
        "asian": 70920,
        "multi": 62140
      },
      {
        "year": "5",
        "white": 84018,
        "black": 68895,
        "hispanic": 71416,
        "asian": 88219,
        "multi": 77297
      },
      {
        "year": "10",
        "white": 110374,
        "black": 90507,
        "hispanic": 93818,
        "asian": 115893,
        "multi": 101544
      },
      {
        "year": "15",
        "white": 144997,
        "black": 118897,
        "hispanic": 123247,
        "asian": 152247,
        "multi": 133397
      },
      {
        "year": "20",
        "white": 190481,
        "black": 156194,
        "hispanic": 161908,
        "asian": 200005,
        "multi": 175242
      },
      {
        "year": "25",
        "white": 250232,
        "black": 205190,
        "hispanic": 212697,
        "asian": 262744,
        "multi": 230213
      },
      {
        "year": "30",
        "white": 328727,
        "black": 269556,
        "hispanic": 279418,
        "asian": 345163,
        "multi": 302428
      },
      {
        "year": "35",
        "white": 431844,
        "black": 354112,
        "hispanic": 367068,
        "asian": 453436,
        "multi": 397297
      },
      {
        "year": "40",
        "white": 567308,
        "black": 465193,
        "hispanic": 482212,
        "asian": 595674,
        "multi": 521924
      }
    ],
    "aptitude": "Requires specialized training in electrical systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Electrical field.",
        "icon": "Droplets",
        "color": "text-purple-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-gray-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "maintenance-worker-general",
    "name": "General Maintenance",
    "sector": "Service",
    "base": 51537,
    "demand": "Critical",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 51537,
        "black": 42260,
        "hispanic": 43806,
        "asian": 54114,
        "multi": 47414
      },
      {
        "year": "5",
        "white": 54783,
        "black": 44922,
        "hispanic": 46565,
        "asian": 57522,
        "multi": 50400
      },
      {
        "year": "10",
        "white": 59128,
        "black": 48485,
        "hispanic": 50259,
        "asian": 62085,
        "multi": 54398
      },
      {
        "year": "15",
        "white": 63819,
        "black": 52331,
        "hispanic": 54246,
        "asian": 67010,
        "multi": 58713
      },
      {
        "year": "20",
        "white": 68881,
        "black": 56483,
        "hispanic": 58549,
        "asian": 72326,
        "multi": 63371
      },
      {
        "year": "25",
        "white": 74346,
        "black": 60963,
        "hispanic": 63194,
        "asian": 78063,
        "multi": 68398
      },
      {
        "year": "30",
        "white": 80243,
        "black": 65800,
        "hispanic": 68207,
        "asian": 84256,
        "multi": 73824
      },
      {
        "year": "35",
        "white": 86609,
        "black": 71019,
        "hispanic": 73618,
        "asian": 90939,
        "multi": 79680
      },
      {
        "year": "40",
        "white": 93480,
        "black": 76653,
        "hispanic": 79458,
        "asian": 98153,
        "multi": 86001
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "TreeDeciduous",
        "color": "text-pink-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "meat-cutter",
    "name": "Meat Cutter",
    "sector": "Service",
    "base": 61776,
    "demand": "Very High",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 61776,
        "black": 50656,
        "hispanic": 52510,
        "asian": 64865,
        "multi": 56834
      },
      {
        "year": "5",
        "white": 68256,
        "black": 55970,
        "hispanic": 58018,
        "asian": 71669,
        "multi": 62796
      },
      {
        "year": "10",
        "white": 77321,
        "black": 63403,
        "hispanic": 65723,
        "asian": 81187,
        "multi": 71135
      },
      {
        "year": "15",
        "white": 87589,
        "black": 71823,
        "hispanic": 74451,
        "asian": 91969,
        "multi": 80582
      },
      {
        "year": "20",
        "white": 99221,
        "black": 81361,
        "hispanic": 84338,
        "asian": 104182,
        "multi": 91284
      },
      {
        "year": "25",
        "white": 112398,
        "black": 92166,
        "hispanic": 95538,
        "asian": 118018,
        "multi": 103406
      },
      {
        "year": "30",
        "white": 127325,
        "black": 104406,
        "hispanic": 108226,
        "asian": 133691,
        "multi": 117139
      },
      {
        "year": "35",
        "white": 144234,
        "black": 118272,
        "hispanic": 122599,
        "asian": 151445,
        "multi": 132695
      },
      {
        "year": "40",
        "white": 163388,
        "black": 133978,
        "hispanic": 138880,
        "asian": 171557,
        "multi": 150317
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Eye",
        "color": "text-amber-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-green-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "medical-records-tech",
    "name": "Medical Records Tech",
    "sector": "Healthcare & Medical",
    "base": 57230,
    "demand": "Stable",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 57230,
        "black": 46929,
        "hispanic": 48646,
        "asian": 60092,
        "multi": 52652
      },
      {
        "year": "5",
        "white": 67245,
        "black": 55141,
        "hispanic": 57158,
        "asian": 70608,
        "multi": 61866
      },
      {
        "year": "10",
        "white": 82264,
        "black": 67456,
        "hispanic": 69924,
        "asian": 86377,
        "multi": 75683
      },
      {
        "year": "15",
        "white": 100637,
        "black": 82522,
        "hispanic": 85541,
        "asian": 105669,
        "multi": 92586
      },
      {
        "year": "20",
        "white": 123113,
        "black": 100953,
        "hispanic": 104646,
        "asian": 129269,
        "multi": 113264
      },
      {
        "year": "25",
        "white": 150609,
        "black": 123500,
        "hispanic": 128018,
        "asian": 158140,
        "multi": 138561
      },
      {
        "year": "30",
        "white": 184246,
        "black": 151082,
        "hispanic": 156610,
        "asian": 193459,
        "multi": 169507
      },
      {
        "year": "35",
        "white": 225396,
        "black": 184825,
        "hispanic": 191587,
        "asian": 236666,
        "multi": 207365
      },
      {
        "year": "40",
        "white": 275736,
        "black": 226104,
        "hispanic": 234376,
        "asian": 289523,
        "multi": 253678
      }
    ],
    "aptitude": "Requires specialized training in healthcare systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Healthcare field.",
        "icon": "Brain",
        "color": "text-purple-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-400"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "nuclear-medicine-tech",
    "name": "Nuclear Medicine Tech",
    "sector": "Healthcare & Medical",
    "base": 67189,
    "demand": "Very High",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 67189,
        "black": 55095,
        "hispanic": 57111,
        "asian": 70548,
        "multi": 61814
      },
      {
        "year": "5",
        "white": 69932,
        "black": 57344,
        "hispanic": 59442,
        "asian": 73428,
        "multi": 64337
      },
      {
        "year": "10",
        "white": 73518,
        "black": 60285,
        "hispanic": 62490,
        "asian": 77194,
        "multi": 67637
      },
      {
        "year": "15",
        "white": 77289,
        "black": 63377,
        "hispanic": 65695,
        "asian": 81153,
        "multi": 71106
      },
      {
        "year": "20",
        "white": 81252,
        "black": 66627,
        "hispanic": 69064,
        "asian": 85315,
        "multi": 74752
      },
      {
        "year": "25",
        "white": 85419,
        "black": 70044,
        "hispanic": 72606,
        "asian": 89690,
        "multi": 78586
      },
      {
        "year": "30",
        "white": 89800,
        "black": 73636,
        "hispanic": 76330,
        "asian": 94290,
        "multi": 82616
      },
      {
        "year": "35",
        "white": 94405,
        "black": 77412,
        "hispanic": 80245,
        "asian": 99126,
        "multi": 86853
      },
      {
        "year": "40",
        "white": 99247,
        "black": 81383,
        "hispanic": 84360,
        "asian": 104209,
        "multi": 91307
      }
    ],
    "aptitude": "Requires specialized training in healthcare systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Healthcare field.",
        "icon": "Hammer",
        "color": "text-red-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-amber-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "ornamental-ironworker",
    "name": "Ornamental Ironworker",
    "sector": "Construction",
    "base": 42771,
    "demand": "Critical",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 42771,
        "black": 35072,
        "hispanic": 36355,
        "asian": 44910,
        "multi": 39349
      },
      {
        "year": "5",
        "white": 50200,
        "black": 41164,
        "hispanic": 42670,
        "asian": 52710,
        "multi": 46184
      },
      {
        "year": "10",
        "white": 61326,
        "black": 50288,
        "hispanic": 52127,
        "asian": 64393,
        "multi": 56420
      },
      {
        "year": "15",
        "white": 74919,
        "black": 61433,
        "hispanic": 63681,
        "asian": 78665,
        "multi": 68925
      },
      {
        "year": "20",
        "white": 91524,
        "black": 75049,
        "hispanic": 77795,
        "asian": 96100,
        "multi": 84202
      },
      {
        "year": "25",
        "white": 111809,
        "black": 91683,
        "hispanic": 95038,
        "asian": 117400,
        "multi": 102864
      },
      {
        "year": "30",
        "white": 136590,
        "black": 112004,
        "hispanic": 116102,
        "asian": 143420,
        "multi": 125663
      },
      {
        "year": "35",
        "white": 166864,
        "black": 136829,
        "hispanic": 141835,
        "asian": 175208,
        "multi": 153515
      },
      {
        "year": "40",
        "white": 203848,
        "black": 167156,
        "hispanic": 173271,
        "asian": 214041,
        "multi": 187540
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "Baby",
        "color": "text-blue-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-industrial-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "orthotic-fitter",
    "name": "Orthotic Fitter",
    "sector": "Healthcare & Medical",
    "base": 74102,
    "demand": "Stable",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 74102,
        "black": 60764,
        "hispanic": 62987,
        "asian": 77807,
        "multi": 68174
      },
      {
        "year": "5",
        "white": 82397,
        "black": 67566,
        "hispanic": 70037,
        "asian": 86517,
        "multi": 75805
      },
      {
        "year": "10",
        "white": 94083,
        "black": 77148,
        "hispanic": 79971,
        "asian": 98788,
        "multi": 86557
      },
      {
        "year": "15",
        "white": 107427,
        "black": 88090,
        "hispanic": 91313,
        "asian": 112799,
        "multi": 98833
      },
      {
        "year": "20",
        "white": 122664,
        "black": 100584,
        "hispanic": 104264,
        "asian": 128797,
        "multi": 112851
      },
      {
        "year": "25",
        "white": 140061,
        "black": 114850,
        "hispanic": 119052,
        "asian": 147065,
        "multi": 128857
      },
      {
        "year": "30",
        "white": 159927,
        "black": 131140,
        "hispanic": 135938,
        "asian": 167923,
        "multi": 147132
      },
      {
        "year": "35",
        "white": 182609,
        "black": 149739,
        "hispanic": 155218,
        "asian": 191740,
        "multi": 168000
      },
      {
        "year": "40",
        "white": 208509,
        "black": 170977,
        "hispanic": 177232,
        "asian": 218934,
        "multi": 191828
      }
    ],
    "aptitude": "Requires specialized training in healthcare systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Healthcare field.",
        "icon": "Zap",
        "color": "text-emerald-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-orange-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "paving-equipment-op",
    "name": "Paving Equipment Op",
    "sector": "Construction",
    "base": 49958,
    "demand": "Very High",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 49958,
        "black": 40966,
        "hispanic": 42464,
        "asian": 52456,
        "multi": 45961
      },
      {
        "year": "5",
        "white": 52673,
        "black": 43192,
        "hispanic": 44772,
        "asian": 55307,
        "multi": 48459
      },
      {
        "year": "10",
        "white": 56276,
        "black": 46146,
        "hispanic": 47834,
        "asian": 59090,
        "multi": 51774
      },
      {
        "year": "15",
        "white": 60125,
        "black": 49302,
        "hispanic": 51106,
        "asian": 63131,
        "multi": 55315
      },
      {
        "year": "20",
        "white": 64237,
        "black": 52674,
        "hispanic": 54601,
        "asian": 67449,
        "multi": 59098
      },
      {
        "year": "25",
        "white": 68630,
        "black": 56277,
        "hispanic": 58336,
        "asian": 72062,
        "multi": 63140
      },
      {
        "year": "30",
        "white": 73324,
        "black": 60126,
        "hispanic": 62325,
        "asian": 76990,
        "multi": 67458
      },
      {
        "year": "35",
        "white": 78339,
        "black": 64238,
        "hispanic": 66588,
        "asian": 82256,
        "multi": 72072
      },
      {
        "year": "40",
        "white": 83697,
        "black": 68631,
        "hispanic": 71142,
        "asian": 87881,
        "multi": 77001
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "Flame",
        "color": "text-industrial-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-400"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "personal-trainer",
    "name": "Personal Trainer",
    "sector": "Service",
    "base": 41847,
    "demand": "Critical",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 41847,
        "black": 34315,
        "hispanic": 35570,
        "asian": 43939,
        "multi": 38499
      },
      {
        "year": "5",
        "white": 48583,
        "black": 39838,
        "hispanic": 41295,
        "asian": 51012,
        "multi": 44696
      },
      {
        "year": "10",
        "white": 58547,
        "black": 48009,
        "hispanic": 49765,
        "asian": 61475,
        "multi": 53864
      },
      {
        "year": "15",
        "white": 70556,
        "black": 57856,
        "hispanic": 59972,
        "asian": 74083,
        "multi": 64911
      },
      {
        "year": "20",
        "white": 85027,
        "black": 69722,
        "hispanic": 72273,
        "asian": 89278,
        "multi": 78225
      },
      {
        "year": "25",
        "white": 102466,
        "black": 84022,
        "hispanic": 87096,
        "asian": 107589,
        "multi": 94269
      },
      {
        "year": "30",
        "white": 123482,
        "black": 101255,
        "hispanic": 104960,
        "asian": 129656,
        "multi": 113604
      },
      {
        "year": "35",
        "white": 148809,
        "black": 122023,
        "hispanic": 126487,
        "asian": 156249,
        "multi": 136904
      },
      {
        "year": "40",
        "white": 179330,
        "black": 147050,
        "hispanic": 152430,
        "asian": 188296,
        "multi": 164983
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Brain",
        "color": "text-industrial-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-gray-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "petroleum-pump-op",
    "name": "Petroleum Pump Op",
    "sector": "Industrial & Manufacturing",
    "base": 65522,
    "demand": "Stable",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 65522,
        "black": 53728,
        "hispanic": 55694,
        "asian": 68798,
        "multi": 60280
      },
      {
        "year": "5",
        "white": 76603,
        "black": 62814,
        "hispanic": 65112,
        "asian": 80433,
        "multi": 70475
      },
      {
        "year": "10",
        "white": 93125,
        "black": 76363,
        "hispanic": 79156,
        "asian": 97781,
        "multi": 85675
      },
      {
        "year": "15",
        "white": 113211,
        "black": 92833,
        "hispanic": 96229,
        "asian": 118872,
        "multi": 104154
      },
      {
        "year": "20",
        "white": 137629,
        "black": 112856,
        "hispanic": 116985,
        "asian": 144511,
        "multi": 126619
      },
      {
        "year": "25",
        "white": 167314,
        "black": 137198,
        "hispanic": 142217,
        "asian": 175680,
        "multi": 153929
      },
      {
        "year": "30",
        "white": 203402,
        "black": 166789,
        "hispanic": 172891,
        "asian": 213572,
        "multi": 187130
      },
      {
        "year": "35",
        "white": 247273,
        "black": 202764,
        "hispanic": 210182,
        "asian": 259637,
        "multi": 227491
      },
      {
        "year": "40",
        "white": 300607,
        "black": 246497,
        "hispanic": 255516,
        "asian": 315637,
        "multi": 276558
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "Palette",
        "color": "text-blue-400"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-400"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "pharmaceutical-rep-assistant",
    "name": "Pharma Assistant",
    "sector": "Healthcare & Medical",
    "base": 53147,
    "demand": "Stable",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 53147,
        "black": 43581,
        "hispanic": 45175,
        "asian": 55804,
        "multi": 48895
      },
      {
        "year": "5",
        "white": 65476,
        "black": 53690,
        "hispanic": 55654,
        "asian": 68750,
        "multi": 60238
      },
      {
        "year": "10",
        "white": 84983,
        "black": 69686,
        "hispanic": 72236,
        "asian": 89233,
        "multi": 78185
      },
      {
        "year": "15",
        "white": 110303,
        "black": 90449,
        "hispanic": 93758,
        "asian": 115818,
        "multi": 101479
      },
      {
        "year": "20",
        "white": 143166,
        "black": 117396,
        "hispanic": 121691,
        "asian": 150325,
        "multi": 131713
      },
      {
        "year": "25",
        "white": 185821,
        "black": 152373,
        "hispanic": 157947,
        "asian": 195112,
        "multi": 170955
      },
      {
        "year": "30",
        "white": 241183,
        "black": 197770,
        "hispanic": 205006,
        "asian": 253242,
        "multi": 221888
      },
      {
        "year": "35",
        "white": 313040,
        "black": 256693,
        "hispanic": 266084,
        "asian": 328692,
        "multi": 287997
      },
      {
        "year": "40",
        "white": 406306,
        "black": 333171,
        "hispanic": 345360,
        "asian": 426621,
        "multi": 373801
      }
    ],
    "aptitude": "Requires specialized training in healthcare systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Healthcare field.",
        "icon": "Target",
        "color": "text-red-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-gray-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "pipe-layer-sewer",
    "name": "Sewer Pipe Layer",
    "sector": "Construction",
    "base": 67072,
    "demand": "High",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 67072,
        "black": 54999,
        "hispanic": 57011,
        "asian": 70426,
        "multi": 61706
      },
      {
        "year": "5",
        "white": 71548,
        "black": 58669,
        "hispanic": 60816,
        "asian": 75125,
        "multi": 65824
      },
      {
        "year": "10",
        "white": 77565,
        "black": 63603,
        "hispanic": 65930,
        "asian": 81443,
        "multi": 71360
      },
      {
        "year": "15",
        "white": 84088,
        "black": 68953,
        "hispanic": 71475,
        "asian": 88293,
        "multi": 77361
      },
      {
        "year": "20",
        "white": 91160,
        "black": 74751,
        "hispanic": 77486,
        "asian": 95718,
        "multi": 83868
      },
      {
        "year": "25",
        "white": 98827,
        "black": 81038,
        "hispanic": 84003,
        "asian": 103768,
        "multi": 90921
      },
      {
        "year": "30",
        "white": 107138,
        "black": 87854,
        "hispanic": 91068,
        "asian": 112495,
        "multi": 98567
      },
      {
        "year": "35",
        "white": 116149,
        "black": 95242,
        "hispanic": 98727,
        "asian": 121956,
        "multi": 106857
      },
      {
        "year": "40",
        "white": 125917,
        "black": 103252,
        "hispanic": 107030,
        "asian": 132213,
        "multi": 115844
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "Flame",
        "color": "text-orange-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-industrial-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "power-dispatcher",
    "name": "Power Dispatcher",
    "sector": "Energy & Utilities",
    "base": 72964,
    "demand": "Stable",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 72964,
        "black": 59830,
        "hispanic": 62019,
        "asian": 76612,
        "multi": 67127
      },
      {
        "year": "5",
        "white": 88074,
        "black": 72221,
        "hispanic": 74863,
        "asian": 92478,
        "multi": 81028
      },
      {
        "year": "10",
        "white": 111435,
        "black": 91377,
        "hispanic": 94720,
        "asian": 117007,
        "multi": 102520
      },
      {
        "year": "15",
        "white": 140992,
        "black": 115614,
        "hispanic": 119844,
        "asian": 148042,
        "multi": 129713
      },
      {
        "year": "20",
        "white": 178390,
        "black": 146280,
        "hispanic": 151631,
        "asian": 187309,
        "multi": 164119
      },
      {
        "year": "25",
        "white": 225706,
        "black": 185079,
        "hispanic": 191850,
        "asian": 236992,
        "multi": 207650
      },
      {
        "year": "30",
        "white": 285573,
        "black": 234170,
        "hispanic": 242737,
        "asian": 299852,
        "multi": 262727
      },
      {
        "year": "35",
        "white": 361320,
        "black": 296282,
        "hispanic": 307122,
        "asian": 379386,
        "multi": 332414
      },
      {
        "year": "40",
        "white": 457157,
        "black": 374869,
        "hispanic": 388584,
        "asian": 480015,
        "multi": 420585
      }
    ],
    "aptitude": "Requires specialized training in electrical systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Electrical field.",
        "icon": "Palette",
        "color": "text-industrial-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-orange-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "printing-press-operator",
    "name": "Press Operator",
    "sector": "Industrial & Manufacturing",
    "base": 41019,
    "demand": "Stable",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 41019,
        "black": 33636,
        "hispanic": 34866,
        "asian": 43070,
        "multi": 37737
      },
      {
        "year": "5",
        "white": 43363,
        "black": 35558,
        "hispanic": 36858,
        "asian": 45531,
        "multi": 39894
      },
      {
        "year": "10",
        "white": 46482,
        "black": 38115,
        "hispanic": 39510,
        "asian": 48806,
        "multi": 42763
      },
      {
        "year": "15",
        "white": 49825,
        "black": 40857,
        "hispanic": 42351,
        "asian": 52316,
        "multi": 45839
      },
      {
        "year": "20",
        "white": 53409,
        "black": 43795,
        "hispanic": 45398,
        "asian": 56079,
        "multi": 49136
      },
      {
        "year": "25",
        "white": 57251,
        "black": 46945,
        "hispanic": 48663,
        "asian": 60113,
        "multi": 52670
      },
      {
        "year": "30",
        "white": 61368,
        "black": 50322,
        "hispanic": 52163,
        "asian": 64437,
        "multi": 56459
      },
      {
        "year": "35",
        "white": 65783,
        "black": 53942,
        "hispanic": 55915,
        "asian": 69072,
        "multi": 60520
      },
      {
        "year": "40",
        "white": 70514,
        "black": 57822,
        "hispanic": 59937,
        "asian": 74040,
        "multi": 64873
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "CheckCircle2",
        "color": "text-blue-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-orange-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "rail-track-maintenance",
    "name": "Rail Track Maintenance",
    "sector": "Transportation",
    "base": 64635,
    "demand": "Very High",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 64635,
        "black": 53001,
        "hispanic": 54940,
        "asian": 67867,
        "multi": 59464
      },
      {
        "year": "5",
        "white": 72381,
        "black": 59353,
        "hispanic": 61524,
        "asian": 76000,
        "multi": 66591
      },
      {
        "year": "10",
        "white": 83382,
        "black": 68373,
        "hispanic": 70875,
        "asian": 87551,
        "multi": 76712
      },
      {
        "year": "15",
        "white": 96055,
        "black": 78765,
        "hispanic": 81647,
        "asian": 100858,
        "multi": 88371
      },
      {
        "year": "20",
        "white": 110655,
        "black": 90737,
        "hispanic": 94056,
        "asian": 116187,
        "multi": 101802
      },
      {
        "year": "25",
        "white": 127473,
        "black": 104528,
        "hispanic": 108352,
        "asian": 133846,
        "multi": 117275
      },
      {
        "year": "30",
        "white": 146847,
        "black": 120415,
        "hispanic": 124820,
        "asian": 154189,
        "multi": 135099
      },
      {
        "year": "35",
        "white": 169166,
        "black": 138716,
        "hispanic": 143791,
        "asian": 177624,
        "multi": 155633
      },
      {
        "year": "40",
        "white": 194877,
        "black": 159799,
        "hispanic": 165646,
        "asian": 204621,
        "multi": 179287
      }
    ],
    "aptitude": "Requires specialized training in transportation systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Transportation field.",
        "icon": "Brain",
        "color": "text-emerald-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-amber-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "refinery-operator",
    "name": "Refinery Operator",
    "sector": "Industrial & Manufacturing",
    "base": 55385,
    "demand": "Stable",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 55385,
        "black": 45416,
        "hispanic": 47077,
        "asian": 58154,
        "multi": 50954
      },
      {
        "year": "5",
        "white": 69024,
        "black": 56600,
        "hispanic": 58670,
        "asian": 72475,
        "multi": 63502
      },
      {
        "year": "10",
        "white": 90888,
        "black": 74529,
        "hispanic": 77255,
        "asian": 95433,
        "multi": 83617
      },
      {
        "year": "15",
        "white": 119679,
        "black": 98137,
        "hispanic": 101727,
        "asian": 125663,
        "multi": 110105
      },
      {
        "year": "20",
        "white": 157589,
        "black": 129223,
        "hispanic": 133951,
        "asian": 165469,
        "multi": 144982
      },
      {
        "year": "25",
        "white": 207509,
        "black": 170157,
        "hispanic": 176382,
        "asian": 217884,
        "multi": 190908
      },
      {
        "year": "30",
        "white": 273241,
        "black": 224057,
        "hispanic": 232255,
        "asian": 286903,
        "multi": 251382
      },
      {
        "year": "35",
        "white": 359795,
        "black": 295032,
        "hispanic": 305826,
        "asian": 377784,
        "multi": 331011
      },
      {
        "year": "40",
        "white": 473766,
        "black": 388488,
        "hispanic": 402701,
        "asian": 497454,
        "multi": 435865
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "Wrench",
        "color": "text-orange-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-400"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "refrigeration-mech",
    "name": "Refrigeration Mechanic",
    "sector": "Construction",
    "base": 42754,
    "demand": "Very High",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 42754,
        "black": 35058,
        "hispanic": 36341,
        "asian": 44892,
        "multi": 39334
      },
      {
        "year": "5",
        "white": 53942,
        "black": 44233,
        "hispanic": 45851,
        "asian": 56639,
        "multi": 49627
      },
      {
        "year": "10",
        "white": 72131,
        "black": 59147,
        "hispanic": 61311,
        "asian": 75737,
        "multi": 66360
      },
      {
        "year": "15",
        "white": 96452,
        "black": 79091,
        "hispanic": 81984,
        "asian": 101275,
        "multi": 88736
      },
      {
        "year": "20",
        "white": 128974,
        "black": 105759,
        "hispanic": 109628,
        "asian": 135423,
        "multi": 118656
      },
      {
        "year": "25",
        "white": 172462,
        "black": 141419,
        "hispanic": 146592,
        "asian": 181085,
        "multi": 158665
      },
      {
        "year": "30",
        "white": 230613,
        "black": 189102,
        "hispanic": 196021,
        "asian": 242143,
        "multi": 212164
      },
      {
        "year": "35",
        "white": 308371,
        "black": 252865,
        "hispanic": 262116,
        "asian": 323790,
        "multi": 283702
      },
      {
        "year": "40",
        "white": 412349,
        "black": 338126,
        "hispanic": 350497,
        "asian": 432966,
        "multi": 379361
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "Target",
        "color": "text-indigo-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-indigo-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "roof-bolter-mining",
    "name": "Mining Roof Bolter",
    "sector": "Industrial & Manufacturing",
    "base": 73518,
    "demand": "Critical",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 73518,
        "black": 60285,
        "hispanic": 62490,
        "asian": 77194,
        "multi": 67637
      },
      {
        "year": "5",
        "white": 82091,
        "black": 67315,
        "hispanic": 69777,
        "asian": 86196,
        "multi": 75524
      },
      {
        "year": "10",
        "white": 94226,
        "black": 77266,
        "hispanic": 80092,
        "asian": 98938,
        "multi": 86688
      },
      {
        "year": "15",
        "white": 108156,
        "black": 88688,
        "hispanic": 91932,
        "asian": 113564,
        "multi": 99503
      },
      {
        "year": "20",
        "white": 124144,
        "black": 101798,
        "hispanic": 105523,
        "asian": 130352,
        "multi": 114213
      },
      {
        "year": "25",
        "white": 142497,
        "black": 116847,
        "hispanic": 121122,
        "asian": 149622,
        "multi": 131097
      },
      {
        "year": "30",
        "white": 163562,
        "black": 134121,
        "hispanic": 139028,
        "asian": 171740,
        "multi": 150477
      },
      {
        "year": "35",
        "white": 187741,
        "black": 153948,
        "hispanic": 159580,
        "asian": 197128,
        "multi": 172722
      },
      {
        "year": "40",
        "white": 215495,
        "black": 176706,
        "hispanic": 183171,
        "asian": 226269,
        "multi": 198255
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "Zap",
        "color": "text-gray-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-green-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "security-guard-armed",
    "name": "Armed Security Guard",
    "sector": "Service",
    "base": 50536,
    "demand": "Critical",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 50536,
        "black": 41440,
        "hispanic": 42956,
        "asian": 53063,
        "multi": 46493
      },
      {
        "year": "5",
        "white": 55313,
        "black": 45357,
        "hispanic": 47016,
        "asian": 58078,
        "multi": 50888
      },
      {
        "year": "10",
        "white": 61924,
        "black": 50777,
        "hispanic": 52635,
        "asian": 65020,
        "multi": 56970
      },
      {
        "year": "15",
        "white": 69325,
        "black": 56846,
        "hispanic": 58926,
        "asian": 72791,
        "multi": 63779
      },
      {
        "year": "20",
        "white": 77610,
        "black": 63640,
        "hispanic": 65969,
        "asian": 81491,
        "multi": 71401
      },
      {
        "year": "25",
        "white": 86886,
        "black": 71247,
        "hispanic": 73853,
        "asian": 91230,
        "multi": 79935
      },
      {
        "year": "30",
        "white": 97271,
        "black": 79762,
        "hispanic": 82680,
        "asian": 102134,
        "multi": 89489
      },
      {
        "year": "35",
        "white": 108896,
        "black": 89295,
        "hispanic": 92562,
        "asian": 114341,
        "multi": 100184
      },
      {
        "year": "40",
        "white": 121911,
        "black": 99967,
        "hispanic": 103624,
        "asian": 128007,
        "multi": 112158
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Wrench",
        "color": "text-emerald-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-emerald-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "septic-tank-cleaner",
    "name": "Septic Cleaner",
    "sector": "Service",
    "base": 55635,
    "demand": "Very High",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 55635,
        "black": 45621,
        "hispanic": 47290,
        "asian": 58417,
        "multi": 51184
      },
      {
        "year": "5",
        "white": 60617,
        "black": 49706,
        "hispanic": 51524,
        "asian": 63648,
        "multi": 55768
      },
      {
        "year": "10",
        "white": 67476,
        "black": 55331,
        "hispanic": 57355,
        "asian": 70850,
        "multi": 62078
      },
      {
        "year": "15",
        "white": 75112,
        "black": 61592,
        "hispanic": 63845,
        "asian": 78868,
        "multi": 69103
      },
      {
        "year": "20",
        "white": 83612,
        "black": 68562,
        "hispanic": 71070,
        "asian": 87792,
        "multi": 76923
      },
      {
        "year": "25",
        "white": 93073,
        "black": 76320,
        "hispanic": 79112,
        "asian": 97727,
        "multi": 85627
      },
      {
        "year": "30",
        "white": 103605,
        "black": 84956,
        "hispanic": 88065,
        "asian": 108786,
        "multi": 95317
      },
      {
        "year": "35",
        "white": 115329,
        "black": 94570,
        "hispanic": 98030,
        "asian": 121096,
        "multi": 106103
      },
      {
        "year": "40",
        "white": 128380,
        "black": 105272,
        "hispanic": 109123,
        "asian": 134799,
        "multi": 118110
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "ShieldCheck",
        "color": "text-purple-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-emerald-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "shampooer",
    "name": "Salon Shampooer",
    "sector": "Service",
    "base": 60006,
    "demand": "Stable",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 60006,
        "black": 49205,
        "hispanic": 51005,
        "asian": 63006,
        "multi": 55206
      },
      {
        "year": "5",
        "white": 70371,
        "black": 57705,
        "hispanic": 59816,
        "asian": 73890,
        "multi": 64742
      },
      {
        "year": "10",
        "white": 85881,
        "black": 70422,
        "hispanic": 72999,
        "asian": 90175,
        "multi": 79011
      },
      {
        "year": "15",
        "white": 104809,
        "black": 85943,
        "hispanic": 89088,
        "asian": 110050,
        "multi": 96424
      },
      {
        "year": "20",
        "white": 127909,
        "black": 104885,
        "hispanic": 108723,
        "asian": 134304,
        "multi": 117676
      },
      {
        "year": "25",
        "white": 156100,
        "black": 128002,
        "hispanic": 132685,
        "asian": 163905,
        "multi": 143612
      },
      {
        "year": "30",
        "white": 190504,
        "black": 156213,
        "hispanic": 161928,
        "asian": 200029,
        "multi": 175264
      },
      {
        "year": "35",
        "white": 232491,
        "black": 190642,
        "hispanic": 197617,
        "asian": 244115,
        "multi": 213891
      },
      {
        "year": "40",
        "white": 283731,
        "black": 232660,
        "hispanic": 241172,
        "asian": 297918,
        "multi": 261033
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Droplets",
        "color": "text-blue-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-gray-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "ship-fitter",
    "name": "Ship Fitter",
    "sector": "Industrial & Manufacturing",
    "base": 62396,
    "demand": "High",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 62396,
        "black": 51165,
        "hispanic": 53037,
        "asian": 65516,
        "multi": 57404
      },
      {
        "year": "5",
        "white": 68201,
        "black": 55925,
        "hispanic": 57971,
        "asian": 71611,
        "multi": 62745
      },
      {
        "year": "10",
        "white": 76222,
        "black": 62502,
        "hispanic": 64789,
        "asian": 80034,
        "multi": 70125
      },
      {
        "year": "15",
        "white": 85187,
        "black": 69854,
        "hispanic": 72409,
        "asian": 89447,
        "multi": 78372
      },
      {
        "year": "20",
        "white": 95207,
        "black": 78069,
        "hispanic": 80926,
        "asian": 99967,
        "multi": 87590
      },
      {
        "year": "25",
        "white": 106404,
        "black": 87252,
        "hispanic": 90444,
        "asian": 111725,
        "multi": 97892
      },
      {
        "year": "30",
        "white": 118919,
        "black": 97514,
        "hispanic": 101081,
        "asian": 124865,
        "multi": 109406
      },
      {
        "year": "35",
        "white": 132906,
        "black": 108983,
        "hispanic": 112970,
        "asian": 139551,
        "multi": 122273
      },
      {
        "year": "40",
        "white": 148538,
        "black": 121801,
        "hispanic": 126257,
        "asian": 155964,
        "multi": 136655
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "Wrench",
        "color": "text-blue-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-pink-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "shuttle-driver",
    "name": "Shuttle Driver",
    "sector": "Transportation",
    "base": 50188,
    "demand": "Stable",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 50188,
        "black": 41154,
        "hispanic": 42660,
        "asian": 52697,
        "multi": 46173
      },
      {
        "year": "5",
        "white": 56444,
        "black": 46284,
        "hispanic": 47977,
        "asian": 59266,
        "multi": 51928
      },
      {
        "year": "10",
        "white": 65371,
        "black": 53604,
        "hispanic": 55565,
        "asian": 68639,
        "multi": 60141
      },
      {
        "year": "15",
        "white": 75709,
        "black": 62082,
        "hispanic": 64353,
        "asian": 79495,
        "multi": 69653
      },
      {
        "year": "20",
        "white": 87683,
        "black": 71900,
        "hispanic": 74531,
        "asian": 92068,
        "multi": 80669
      },
      {
        "year": "25",
        "white": 101551,
        "black": 83272,
        "hispanic": 86319,
        "asian": 106629,
        "multi": 93427
      },
      {
        "year": "30",
        "white": 117612,
        "black": 96442,
        "hispanic": 99971,
        "asian": 123493,
        "multi": 108203
      },
      {
        "year": "35",
        "white": 136214,
        "black": 111695,
        "hispanic": 115782,
        "asian": 143025,
        "multi": 125317
      },
      {
        "year": "40",
        "white": 157757,
        "black": 129361,
        "hispanic": 134094,
        "asian": 165645,
        "multi": 145137
      }
    ],
    "aptitude": "Requires specialized training in transportation systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Transportation field.",
        "icon": "TreeDeciduous",
        "color": "text-blue-400"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-industrial-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "signal-repairer",
    "name": "Signal Repairer",
    "sector": "Energy & Utilities",
    "base": 66051,
    "demand": "Critical",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 66051,
        "black": 54162,
        "hispanic": 56143,
        "asian": 69354,
        "multi": 60767
      },
      {
        "year": "5",
        "white": 76290,
        "black": 62558,
        "hispanic": 64847,
        "asian": 80105,
        "multi": 70187
      },
      {
        "year": "10",
        "white": 91349,
        "black": 74906,
        "hispanic": 77647,
        "asian": 95916,
        "multi": 84041
      },
      {
        "year": "15",
        "white": 109380,
        "black": 89692,
        "hispanic": 92973,
        "asian": 114849,
        "multi": 100630
      },
      {
        "year": "20",
        "white": 130971,
        "black": 107396,
        "hispanic": 111325,
        "asian": 137520,
        "multi": 120493
      },
      {
        "year": "25",
        "white": 156824,
        "black": 128595,
        "hispanic": 133300,
        "asian": 164665,
        "multi": 144278
      },
      {
        "year": "30",
        "white": 187779,
        "black": 153979,
        "hispanic": 159612,
        "asian": 197168,
        "multi": 172757
      },
      {
        "year": "35",
        "white": 224845,
        "black": 184373,
        "hispanic": 191118,
        "asian": 236087,
        "multi": 206857
      },
      {
        "year": "40",
        "white": 269227,
        "black": 220766,
        "hispanic": 228843,
        "asian": 282688,
        "multi": 247689
      }
    ],
    "aptitude": "Requires specialized training in electrical systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Electrical field.",
        "icon": "Baby",
        "color": "text-gray-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-pink-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "sound-assistant",
    "name": "Sound Assistant",
    "sector": "Service",
    "base": 66753,
    "demand": "Very High",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 66753,
        "black": 54737,
        "hispanic": 56740,
        "asian": 70091,
        "multi": 61413
      },
      {
        "year": "5",
        "white": 81008,
        "black": 66427,
        "hispanic": 68857,
        "asian": 85058,
        "multi": 74527
      },
      {
        "year": "10",
        "white": 103181,
        "black": 84608,
        "hispanic": 87704,
        "asian": 108340,
        "multi": 94926
      },
      {
        "year": "15",
        "white": 131422,
        "black": 107766,
        "hispanic": 111709,
        "asian": 137994,
        "multi": 120909
      },
      {
        "year": "20",
        "white": 167394,
        "black": 137263,
        "hispanic": 142285,
        "asian": 175764,
        "multi": 154003
      },
      {
        "year": "25",
        "white": 213212,
        "black": 174834,
        "hispanic": 181230,
        "asian": 223873,
        "multi": 196155
      },
      {
        "year": "30",
        "white": 271570,
        "black": 222688,
        "hispanic": 230835,
        "asian": 285149,
        "multi": 249845
      },
      {
        "year": "35",
        "white": 345902,
        "black": 283640,
        "hispanic": 294017,
        "asian": 363198,
        "multi": 318230
      },
      {
        "year": "40",
        "white": 440580,
        "black": 361275,
        "hispanic": 374493,
        "asian": 462609,
        "multi": 405333
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "TreeDeciduous",
        "color": "text-indigo-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-indigo-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "stonemason",
    "name": "Stonemason",
    "sector": "Construction",
    "base": 64153,
    "demand": "Critical",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 64153,
        "black": 52605,
        "hispanic": 54530,
        "asian": 67361,
        "multi": 59021
      },
      {
        "year": "5",
        "white": 72207,
        "black": 59210,
        "hispanic": 61376,
        "asian": 75818,
        "multi": 66431
      },
      {
        "year": "10",
        "white": 83711,
        "black": 68643,
        "hispanic": 71155,
        "asian": 87897,
        "multi": 77014
      },
      {
        "year": "15",
        "white": 97048,
        "black": 79580,
        "hispanic": 82491,
        "asian": 101901,
        "multi": 89285
      },
      {
        "year": "20",
        "white": 112510,
        "black": 92259,
        "hispanic": 95634,
        "asian": 118136,
        "multi": 103510
      },
      {
        "year": "25",
        "white": 130436,
        "black": 106957,
        "hispanic": 110870,
        "asian": 136958,
        "multi": 120001
      },
      {
        "year": "30",
        "white": 151217,
        "black": 123998,
        "hispanic": 128535,
        "asian": 158778,
        "multi": 139120
      },
      {
        "year": "35",
        "white": 175309,
        "black": 143754,
        "hispanic": 149013,
        "asian": 184075,
        "multi": 161285
      },
      {
        "year": "40",
        "white": 203240,
        "black": 166657,
        "hispanic": 172754,
        "asian": 213402,
        "multi": 186981
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "Baby",
        "color": "text-gray-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-pink-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "structural-ironworker",
    "name": "Structural Ironworker",
    "sector": "Construction",
    "base": 41449,
    "demand": "High",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 41449,
        "black": 33988,
        "hispanic": 35232,
        "asian": 43521,
        "multi": 38133
      },
      {
        "year": "5",
        "white": 50426,
        "black": 41349,
        "hispanic": 42862,
        "asian": 52947,
        "multi": 46392
      },
      {
        "year": "10",
        "white": 64429,
        "black": 52832,
        "hispanic": 54764,
        "asian": 67650,
        "multi": 59275
      },
      {
        "year": "15",
        "white": 82320,
        "black": 67502,
        "hispanic": 69972,
        "asian": 86436,
        "multi": 75734
      },
      {
        "year": "20",
        "white": 105180,
        "black": 86247,
        "hispanic": 89403,
        "asian": 110439,
        "multi": 96765
      },
      {
        "year": "25",
        "white": 134387,
        "black": 110197,
        "hispanic": 114229,
        "asian": 141106,
        "multi": 123636
      },
      {
        "year": "30",
        "white": 171705,
        "black": 140798,
        "hispanic": 145949,
        "asian": 180290,
        "multi": 157968
      },
      {
        "year": "35",
        "white": 219386,
        "black": 179896,
        "hispanic": 186478,
        "asian": 230355,
        "multi": 201835
      },
      {
        "year": "40",
        "white": 280307,
        "black": 229852,
        "hispanic": 238261,
        "asian": 294322,
        "multi": 257882
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "ShieldCheck",
        "color": "text-indigo-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "survey-technician",
    "name": "Survey Technician",
    "sector": "Construction",
    "base": 36859,
    "demand": "Very High",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 36859,
        "black": 30224,
        "hispanic": 31330,
        "asian": 38702,
        "multi": 33910
      },
      {
        "year": "5",
        "white": 45925,
        "black": 37658,
        "hispanic": 39036,
        "asian": 48221,
        "multi": 42251
      },
      {
        "year": "10",
        "white": 60455,
        "black": 49573,
        "hispanic": 51387,
        "asian": 63477,
        "multi": 55618
      },
      {
        "year": "15",
        "white": 79581,
        "black": 65257,
        "hispanic": 67644,
        "asian": 83561,
        "multi": 73215
      },
      {
        "year": "20",
        "white": 104760,
        "black": 85903,
        "hispanic": 89046,
        "asian": 109998,
        "multi": 96379
      },
      {
        "year": "25",
        "white": 137904,
        "black": 113081,
        "hispanic": 117218,
        "asian": 144799,
        "multi": 126871
      },
      {
        "year": "30",
        "white": 181534,
        "black": 148858,
        "hispanic": 154304,
        "asian": 190610,
        "multi": 167011
      },
      {
        "year": "35",
        "white": 238967,
        "black": 195953,
        "hispanic": 203122,
        "asian": 250916,
        "multi": 219850
      },
      {
        "year": "40",
        "white": 314572,
        "black": 257949,
        "hispanic": 267386,
        "asian": 330301,
        "multi": 289406
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "Droplets",
        "color": "text-industrial-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-emerald-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "tailor-custom",
    "name": "Custom Tailor",
    "sector": "Service",
    "base": 73393,
    "demand": "Critical",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 73393,
        "black": 60182,
        "hispanic": 62384,
        "asian": 77063,
        "multi": 67522
      },
      {
        "year": "5",
        "white": 77265,
        "black": 63357,
        "hispanic": 65675,
        "asian": 81128,
        "multi": 71083
      },
      {
        "year": "10",
        "white": 82392,
        "black": 67562,
        "hispanic": 70034,
        "asian": 86512,
        "multi": 75801
      },
      {
        "year": "15",
        "white": 87861,
        "black": 72046,
        "hispanic": 74682,
        "asian": 92254,
        "multi": 80832
      },
      {
        "year": "20",
        "white": 93692,
        "black": 76827,
        "hispanic": 79638,
        "asian": 98376,
        "multi": 86197
      },
      {
        "year": "25",
        "white": 99910,
        "black": 81926,
        "hispanic": 84924,
        "asian": 104906,
        "multi": 91917
      },
      {
        "year": "30",
        "white": 106541,
        "black": 87363,
        "hispanic": 90560,
        "asian": 111868,
        "multi": 98018
      },
      {
        "year": "35",
        "white": 113612,
        "black": 93162,
        "hispanic": 96570,
        "asian": 119292,
        "multi": 104523
      },
      {
        "year": "40",
        "white": 121152,
        "black": 99345,
        "hispanic": 102979,
        "asian": 127210,
        "multi": 111460
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Palette",
        "color": "text-gray-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-industrial-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "tank-repairer",
    "name": "Tank Repairer",
    "sector": "Industrial & Manufacturing",
    "base": 73554,
    "demand": "Stable",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 73554,
        "black": 60314,
        "hispanic": 62521,
        "asian": 77232,
        "multi": 67670
      },
      {
        "year": "5",
        "white": 77673,
        "black": 63692,
        "hispanic": 66022,
        "asian": 81556,
        "multi": 71459
      },
      {
        "year": "10",
        "white": 83147,
        "black": 68180,
        "hispanic": 70675,
        "asian": 87304,
        "multi": 76495
      },
      {
        "year": "15",
        "white": 89007,
        "black": 72986,
        "hispanic": 75656,
        "asian": 93457,
        "multi": 81886
      },
      {
        "year": "20",
        "white": 95280,
        "black": 78129,
        "hispanic": 80988,
        "asian": 100044,
        "multi": 87657
      },
      {
        "year": "25",
        "white": 101995,
        "black": 83636,
        "hispanic": 86695,
        "asian": 107094,
        "multi": 93835
      },
      {
        "year": "30",
        "white": 109183,
        "black": 89530,
        "hispanic": 92806,
        "asian": 114642,
        "multi": 100448
      },
      {
        "year": "35",
        "white": 116878,
        "black": 95840,
        "hispanic": 99346,
        "asian": 122722,
        "multi": 107528
      },
      {
        "year": "40",
        "white": 125115,
        "black": 102594,
        "hispanic": 106348,
        "asian": 131371,
        "multi": 115106
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "Hammer",
        "color": "text-pink-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-pink-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "telecom-line-tech",
    "name": "Telecom Line Tech",
    "sector": "Energy & Utilities",
    "base": 66793,
    "demand": "Critical",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 66793,
        "black": 54770,
        "hispanic": 56774,
        "asian": 70133,
        "multi": 61450
      },
      {
        "year": "5",
        "white": 70961,
        "black": 58188,
        "hispanic": 60317,
        "asian": 74509,
        "multi": 65284
      },
      {
        "year": "10",
        "white": 76538,
        "black": 62762,
        "hispanic": 65058,
        "asian": 80365,
        "multi": 70415
      },
      {
        "year": "15",
        "white": 82554,
        "black": 67695,
        "hispanic": 70171,
        "asian": 86682,
        "multi": 75950
      },
      {
        "year": "20",
        "white": 89043,
        "black": 73015,
        "hispanic": 75687,
        "asian": 93495,
        "multi": 81920
      },
      {
        "year": "25",
        "white": 96042,
        "black": 78754,
        "hispanic": 81636,
        "asian": 100844,
        "multi": 88359
      },
      {
        "year": "30",
        "white": 103591,
        "black": 84945,
        "hispanic": 88052,
        "asian": 108770,
        "multi": 95304
      },
      {
        "year": "35",
        "white": 111733,
        "black": 91621,
        "hispanic": 94973,
        "asian": 117320,
        "multi": 102795
      },
      {
        "year": "40",
        "white": 120515,
        "black": 98823,
        "hispanic": 102438,
        "asian": 126541,
        "multi": 110874
      }
    ],
    "aptitude": "Requires specialized training in electrical systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Electrical field.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-industrial-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "tile-finisher",
    "name": "Tile Finisher",
    "sector": "Construction",
    "base": 39280,
    "demand": "Stable",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 39280,
        "black": 32210,
        "hispanic": 33388,
        "asian": 41244,
        "multi": 36138
      },
      {
        "year": "5",
        "white": 44891,
        "black": 36811,
        "hispanic": 38157,
        "asian": 47136,
        "multi": 41300
      },
      {
        "year": "10",
        "white": 53045,
        "black": 43497,
        "hispanic": 45088,
        "asian": 55697,
        "multi": 48801
      },
      {
        "year": "15",
        "white": 62680,
        "black": 51398,
        "hispanic": 53278,
        "asian": 65814,
        "multi": 57666
      },
      {
        "year": "20",
        "white": 74065,
        "black": 60733,
        "hispanic": 62955,
        "asian": 77768,
        "multi": 68140
      },
      {
        "year": "25",
        "white": 87518,
        "black": 71765,
        "hispanic": 74390,
        "asian": 91894,
        "multi": 80517
      },
      {
        "year": "30",
        "white": 103415,
        "black": 84800,
        "hispanic": 87903,
        "asian": 108586,
        "multi": 95142
      },
      {
        "year": "35",
        "white": 122199,
        "black": 100203,
        "hispanic": 103869,
        "asian": 128309,
        "multi": 112423
      },
      {
        "year": "40",
        "white": 144395,
        "black": 118404,
        "hispanic": 122736,
        "asian": 151615,
        "multi": 132843
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "Palette",
        "color": "text-gray-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "tree-surgeon",
    "name": "Tree Surgeon",
    "sector": "Service",
    "base": 64928,
    "demand": "High",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 64928,
        "black": 53241,
        "hispanic": 55189,
        "asian": 68174,
        "multi": 59734
      },
      {
        "year": "5",
        "white": 68622,
        "black": 56270,
        "hispanic": 58329,
        "asian": 72053,
        "multi": 63132
      },
      {
        "year": "10",
        "white": 73537,
        "black": 60300,
        "hispanic": 62506,
        "asian": 77214,
        "multi": 67654
      },
      {
        "year": "15",
        "white": 78803,
        "black": 64619,
        "hispanic": 66983,
        "asian": 82744,
        "multi": 72499
      },
      {
        "year": "20",
        "white": 84447,
        "black": 69247,
        "hispanic": 71780,
        "asian": 88670,
        "multi": 77691
      },
      {
        "year": "25",
        "white": 90495,
        "black": 74206,
        "hispanic": 76921,
        "asian": 95020,
        "multi": 83256
      },
      {
        "year": "30",
        "white": 96977,
        "black": 79521,
        "hispanic": 82430,
        "asian": 101825,
        "multi": 89218
      },
      {
        "year": "35",
        "white": 103922,
        "black": 85216,
        "hispanic": 88334,
        "asian": 109118,
        "multi": 95608
      },
      {
        "year": "40",
        "white": 111365,
        "black": 91319,
        "hispanic": 94660,
        "asian": 116933,
        "multi": 102455
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Palette",
        "color": "text-emerald-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-purple-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "truck-loader",
    "name": "Truck Loader",
    "sector": "Transportation",
    "base": 67936,
    "demand": "Stable",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 67936,
        "black": 55708,
        "hispanic": 57746,
        "asian": 71333,
        "multi": 62501
      },
      {
        "year": "5",
        "white": 80125,
        "black": 65702,
        "hispanic": 68106,
        "asian": 84131,
        "multi": 73715
      },
      {
        "year": "10",
        "white": 98480,
        "black": 80754,
        "hispanic": 83708,
        "asian": 103404,
        "multi": 90602
      },
      {
        "year": "15",
        "white": 121040,
        "black": 99253,
        "hispanic": 102884,
        "asian": 127092,
        "multi": 111357
      },
      {
        "year": "20",
        "white": 148769,
        "black": 121990,
        "hispanic": 126453,
        "asian": 156207,
        "multi": 136867
      },
      {
        "year": "25",
        "white": 182850,
        "black": 149937,
        "hispanic": 155422,
        "asian": 191992,
        "multi": 168222
      },
      {
        "year": "30",
        "white": 224738,
        "black": 184285,
        "hispanic": 191027,
        "asian": 235975,
        "multi": 206759
      },
      {
        "year": "35",
        "white": 276222,
        "black": 226502,
        "hispanic": 234789,
        "asian": 290033,
        "multi": 254124
      },
      {
        "year": "40",
        "white": 339500,
        "black": 278390,
        "hispanic": 288575,
        "asian": 356475,
        "multi": 312340
      }
    ],
    "aptitude": "Requires specialized training in transportation systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Transportation field.",
        "icon": "Brain",
        "color": "text-purple-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-industrial-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "upholsterer-custom",
    "name": "Custom Upholsterer",
    "sector": "Service",
    "base": 60521,
    "demand": "Critical",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 60521,
        "black": 49627,
        "hispanic": 51443,
        "asian": 63547,
        "multi": 55679
      },
      {
        "year": "5",
        "white": 75413,
        "black": 61839,
        "hispanic": 64101,
        "asian": 79184,
        "multi": 69380
      },
      {
        "year": "10",
        "white": 99283,
        "black": 81412,
        "hispanic": 84391,
        "asian": 104247,
        "multi": 91340
      },
      {
        "year": "15",
        "white": 130708,
        "black": 107181,
        "hispanic": 111102,
        "asian": 137244,
        "multi": 120252
      },
      {
        "year": "20",
        "white": 172080,
        "black": 141106,
        "hispanic": 146268,
        "asian": 180684,
        "multi": 158314
      },
      {
        "year": "25",
        "white": 226547,
        "black": 185768,
        "hispanic": 192565,
        "asian": 237874,
        "multi": 208423
      },
      {
        "year": "30",
        "white": 298253,
        "black": 244568,
        "hispanic": 253515,
        "asian": 313166,
        "multi": 274393
      },
      {
        "year": "35",
        "white": 392656,
        "black": 321978,
        "hispanic": 333758,
        "asian": 412289,
        "multi": 361244
      },
      {
        "year": "40",
        "white": 516940,
        "black": 423891,
        "hispanic": 439399,
        "asian": 542787,
        "multi": 475585
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Microscope",
        "color": "text-orange-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-amber-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "vapor-recovery-tech",
    "name": "Vapor Recovery Tech",
    "sector": "Environment",
    "base": 36831,
    "demand": "Moderate",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 36831,
        "black": 30201,
        "hispanic": 31306,
        "asian": 38673,
        "multi": 33885
      },
      {
        "year": "5",
        "white": 44752,
        "black": 36697,
        "hispanic": 38039,
        "asian": 46990,
        "multi": 41172
      },
      {
        "year": "10",
        "white": 57090,
        "black": 46814,
        "hispanic": 48526,
        "asian": 59944,
        "multi": 52523
      },
      {
        "year": "15",
        "white": 72829,
        "black": 59720,
        "hispanic": 61905,
        "asian": 76471,
        "multi": 67003
      },
      {
        "year": "20",
        "white": 92908,
        "black": 76185,
        "hispanic": 78972,
        "asian": 97554,
        "multi": 85476
      },
      {
        "year": "25",
        "white": 118523,
        "black": 97189,
        "hispanic": 100744,
        "asian": 124449,
        "multi": 109041
      },
      {
        "year": "30",
        "white": 151199,
        "black": 123983,
        "hispanic": 128519,
        "asian": 158759,
        "multi": 139103
      },
      {
        "year": "35",
        "white": 192884,
        "black": 158165,
        "hispanic": 163952,
        "asian": 202529,
        "multi": 177454
      },
      {
        "year": "40",
        "white": 246062,
        "black": 201771,
        "hispanic": 209153,
        "asian": 258365,
        "multi": 226377
      }
    ],
    "aptitude": "Requires specialized training in environment systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Environment field.",
        "icon": "CheckCircle2",
        "color": "text-blue-400"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-orange-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "vending-machine-mech",
    "name": "Vending Machine Mech",
    "sector": "Service",
    "base": 38988,
    "demand": "Critical",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 38988,
        "black": 31970,
        "hispanic": 33140,
        "asian": 40937,
        "multi": 35869
      },
      {
        "year": "5",
        "white": 43688,
        "black": 35824,
        "hispanic": 37135,
        "asian": 45872,
        "multi": 40193
      },
      {
        "year": "10",
        "white": 50368,
        "black": 41301,
        "hispanic": 42813,
        "asian": 52886,
        "multi": 46338
      },
      {
        "year": "15",
        "white": 58069,
        "black": 47616,
        "hispanic": 49358,
        "asian": 60972,
        "multi": 53423
      },
      {
        "year": "20",
        "white": 66947,
        "black": 54896,
        "hispanic": 56905,
        "asian": 70294,
        "multi": 61591
      },
      {
        "year": "25",
        "white": 77183,
        "black": 63290,
        "hispanic": 65605,
        "asian": 81042,
        "multi": 71008
      },
      {
        "year": "30",
        "white": 88983,
        "black": 72966,
        "hispanic": 75636,
        "asian": 93433,
        "multi": 81865
      },
      {
        "year": "35",
        "white": 102588,
        "black": 84123,
        "hispanic": 87200,
        "asian": 107718,
        "multi": 94381
      },
      {
        "year": "40",
        "white": 118274,
        "black": 96984,
        "hispanic": 100533,
        "asian": 124187,
        "multi": 108812
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Wrench",
        "color": "text-blue-400"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-400"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "voice-over-artist-entry",
    "name": "Voice Over Assistant",
    "sector": "Service",
    "base": 54026,
    "demand": "Critical",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 54026,
        "black": 44301,
        "hispanic": 45922,
        "asian": 56727,
        "multi": 49704
      },
      {
        "year": "5",
        "white": 65440,
        "black": 53660,
        "hispanic": 55624,
        "asian": 68711,
        "multi": 60204
      },
      {
        "year": "10",
        "white": 83155,
        "black": 68187,
        "hispanic": 70681,
        "asian": 87312,
        "multi": 76502
      },
      {
        "year": "15",
        "white": 105665,
        "black": 86646,
        "hispanic": 89816,
        "asian": 110949,
        "multi": 97212
      },
      {
        "year": "20",
        "white": 134270,
        "black": 110101,
        "hispanic": 114130,
        "asian": 140984,
        "multi": 123529
      },
      {
        "year": "25",
        "white": 170618,
        "black": 139907,
        "hispanic": 145026,
        "asian": 179149,
        "multi": 156969
      },
      {
        "year": "30",
        "white": 216806,
        "black": 177781,
        "hispanic": 184286,
        "asian": 227647,
        "multi": 199462
      },
      {
        "year": "35",
        "white": 275498,
        "black": 225909,
        "hispanic": 234173,
        "asian": 289273,
        "multi": 253458
      },
      {
        "year": "40",
        "white": 350078,
        "black": 287064,
        "hispanic": 297567,
        "asian": 367582,
        "multi": 322072
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Flame",
        "color": "text-blue-400"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-amber-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "watch-repairer",
    "name": "Watch Repairer",
    "sector": "Service",
    "base": 42360,
    "demand": "Stable",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 42360,
        "black": 34735,
        "hispanic": 36006,
        "asian": 44478,
        "multi": 38971
      },
      {
        "year": "5",
        "white": 48162,
        "black": 39493,
        "hispanic": 40938,
        "asian": 50570,
        "multi": 44309
      },
      {
        "year": "10",
        "white": 56544,
        "black": 46366,
        "hispanic": 48062,
        "asian": 59371,
        "multi": 52020
      },
      {
        "year": "15",
        "white": 66385,
        "black": 54436,
        "hispanic": 56427,
        "asian": 69704,
        "multi": 61074
      },
      {
        "year": "20",
        "white": 77939,
        "black": 63910,
        "hispanic": 66248,
        "asian": 81835,
        "multi": 71703
      },
      {
        "year": "25",
        "white": 91503,
        "black": 75032,
        "hispanic": 77778,
        "asian": 96078,
        "multi": 84183
      },
      {
        "year": "30",
        "white": 107428,
        "black": 88091,
        "hispanic": 91314,
        "asian": 112800,
        "multi": 98834
      },
      {
        "year": "35",
        "white": 126125,
        "black": 103423,
        "hispanic": 107206,
        "asian": 132431,
        "multi": 116035
      },
      {
        "year": "40",
        "white": 148076,
        "black": 121422,
        "hispanic": 125865,
        "asian": 155480,
        "multi": 136230
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Microscope",
        "color": "text-purple-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-gray-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "water-meter-reader",
    "name": "Water Meter Reader",
    "sector": "Environment",
    "base": 63186,
    "demand": "Moderate",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 63186,
        "black": 51813,
        "hispanic": 53708,
        "asian": 66345,
        "multi": 58131
      },
      {
        "year": "5",
        "white": 76741,
        "black": 62928,
        "hispanic": 65230,
        "asian": 80578,
        "multi": 70602
      },
      {
        "year": "10",
        "white": 97844,
        "black": 80232,
        "hispanic": 83167,
        "asian": 102736,
        "multi": 90017
      },
      {
        "year": "15",
        "white": 124750,
        "black": 102295,
        "hispanic": 106038,
        "asian": 130988,
        "multi": 114770
      },
      {
        "year": "20",
        "white": 159056,
        "black": 130426,
        "hispanic": 135197,
        "asian": 167009,
        "multi": 146331
      },
      {
        "year": "25",
        "white": 202795,
        "black": 166292,
        "hispanic": 172376,
        "asian": 212935,
        "multi": 186571
      },
      {
        "year": "30",
        "white": 258562,
        "black": 212021,
        "hispanic": 219778,
        "asian": 271490,
        "multi": 237877
      },
      {
        "year": "35",
        "white": 329664,
        "black": 270325,
        "hispanic": 280215,
        "asian": 346148,
        "multi": 303291
      },
      {
        "year": "40",
        "white": 420319,
        "black": 344662,
        "hispanic": 357272,
        "asian": 441335,
        "multi": 386694
      }
    ],
    "aptitude": "Requires specialized training in environment systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Environment field.",
        "icon": "CheckCircle2",
        "color": "text-industrial-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-amber-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "wellhead-operator",
    "name": "Wellhead Operator",
    "sector": "Industrial & Manufacturing",
    "base": 48196,
    "demand": "Stable",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 48196,
        "black": 39521,
        "hispanic": 40967,
        "asian": 50606,
        "multi": 44340
      },
      {
        "year": "5",
        "white": 53048,
        "black": 43500,
        "hispanic": 45091,
        "asian": 55701,
        "multi": 48804
      },
      {
        "year": "10",
        "white": 59806,
        "black": 49041,
        "hispanic": 50835,
        "asian": 62797,
        "multi": 55022
      },
      {
        "year": "15",
        "white": 67425,
        "black": 55289,
        "hispanic": 57311,
        "asian": 70796,
        "multi": 62031
      },
      {
        "year": "20",
        "white": 76015,
        "black": 62332,
        "hispanic": 64612,
        "asian": 79815,
        "multi": 69933
      },
      {
        "year": "25",
        "white": 85698,
        "black": 70273,
        "hispanic": 72844,
        "asian": 89983,
        "multi": 78842
      },
      {
        "year": "30",
        "white": 96616,
        "black": 79225,
        "hispanic": 82123,
        "asian": 101446,
        "multi": 88886
      },
      {
        "year": "35",
        "white": 108924,
        "black": 89318,
        "hispanic": 92585,
        "asian": 114370,
        "multi": 100210
      },
      {
        "year": "40",
        "white": 122800,
        "black": 100696,
        "hispanic": 104380,
        "asian": 128940,
        "multi": 112976
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "Target",
        "color": "text-blue-400"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-emerald-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "wind-turbine-blade-tech",
    "name": "Blade Tech",
    "sector": "Energy & Utilities",
    "base": 72609,
    "demand": "Very High",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 72609,
        "black": 59539,
        "hispanic": 61718,
        "asian": 76239,
        "multi": 66800
      },
      {
        "year": "5",
        "white": 80738,
        "black": 66205,
        "hispanic": 68627,
        "asian": 84775,
        "multi": 74279
      },
      {
        "year": "10",
        "white": 92190,
        "black": 75596,
        "hispanic": 78362,
        "asian": 96800,
        "multi": 84815
      },
      {
        "year": "15",
        "white": 105267,
        "black": 86319,
        "hispanic": 89477,
        "asian": 110530,
        "multi": 96846
      },
      {
        "year": "20",
        "white": 120199,
        "black": 98563,
        "hispanic": 102169,
        "asian": 126209,
        "multi": 110583
      },
      {
        "year": "25",
        "white": 137249,
        "black": 112544,
        "hispanic": 116661,
        "asian": 144111,
        "multi": 126269
      },
      {
        "year": "30",
        "white": 156717,
        "black": 128508,
        "hispanic": 133209,
        "asian": 164553,
        "multi": 144179
      },
      {
        "year": "35",
        "white": 178946,
        "black": 146736,
        "hispanic": 152105,
        "asian": 187894,
        "multi": 164631
      },
      {
        "year": "40",
        "white": 204329,
        "black": 167550,
        "hispanic": 173680,
        "asian": 214546,
        "multi": 187983
      }
    ],
    "aptitude": "Requires specialized training in electrical systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Electrical field.",
        "icon": "Hammer",
        "color": "text-amber-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "wood-finisher",
    "name": "Wood Finisher",
    "sector": "Service",
    "base": 58126,
    "demand": "Very High",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 58126,
        "black": 47663,
        "hispanic": 49407,
        "asian": 61032,
        "multi": 53476
      },
      {
        "year": "5",
        "white": 68233,
        "black": 55951,
        "hispanic": 57998,
        "asian": 71645,
        "multi": 62774
      },
      {
        "year": "10",
        "white": 83373,
        "black": 68365,
        "hispanic": 70867,
        "asian": 87541,
        "multi": 76703
      },
      {
        "year": "15",
        "white": 101871,
        "black": 83535,
        "hispanic": 86591,
        "asian": 106965,
        "multi": 93722
      },
      {
        "year": "20",
        "white": 124475,
        "black": 102069,
        "hispanic": 105804,
        "asian": 130698,
        "multi": 114517
      },
      {
        "year": "25",
        "white": 152093,
        "black": 124717,
        "hispanic": 129279,
        "asian": 159698,
        "multi": 139926
      },
      {
        "year": "30",
        "white": 185840,
        "black": 152389,
        "hispanic": 157964,
        "asian": 195132,
        "multi": 170973
      },
      {
        "year": "35",
        "white": 227075,
        "black": 186201,
        "hispanic": 193014,
        "asian": 238428,
        "multi": 208909
      },
      {
        "year": "40",
        "white": 277458,
        "black": 227516,
        "hispanic": 235840,
        "asian": 291331,
        "multi": 255262
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Hammer",
        "color": "text-purple-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-gray-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "yarn-spinner",
    "name": "Industrial Spinner",
    "sector": "Industrial & Manufacturing",
    "base": 70718,
    "demand": "High",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 70718,
        "black": 57989,
        "hispanic": 60110,
        "asian": 74254,
        "multi": 65061
      },
      {
        "year": "5",
        "white": 75909,
        "black": 62246,
        "hispanic": 64523,
        "asian": 79705,
        "multi": 69836
      },
      {
        "year": "10",
        "white": 82937,
        "black": 68008,
        "hispanic": 70497,
        "asian": 87084,
        "multi": 76302
      },
      {
        "year": "15",
        "white": 90616,
        "black": 74305,
        "hispanic": 77024,
        "asian": 95147,
        "multi": 83367
      },
      {
        "year": "20",
        "white": 99006,
        "black": 81185,
        "hispanic": 84155,
        "asian": 103956,
        "multi": 91085
      },
      {
        "year": "25",
        "white": 108172,
        "black": 88701,
        "hispanic": 91946,
        "asian": 113581,
        "multi": 99518
      },
      {
        "year": "30",
        "white": 118187,
        "black": 96913,
        "hispanic": 100459,
        "asian": 124096,
        "multi": 108732
      },
      {
        "year": "35",
        "white": 129129,
        "black": 105886,
        "hispanic": 109760,
        "asian": 135586,
        "multi": 118799
      },
      {
        "year": "40",
        "white": 141085,
        "black": 115690,
        "hispanic": 119922,
        "asian": 148139,
        "multi": 129798
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "Brain",
        "color": "text-industrial-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-amber-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "zinc-plater",
    "name": "Zinc Plater",
    "sector": "Industrial & Manufacturing",
    "base": 43785,
    "demand": "High",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 43785,
        "black": 35904,
        "hispanic": 37217,
        "asian": 45974,
        "multi": 40282
      },
      {
        "year": "5",
        "white": 48183,
        "black": 39510,
        "hispanic": 40956,
        "asian": 50593,
        "multi": 44329
      },
      {
        "year": "10",
        "white": 54308,
        "black": 44532,
        "hispanic": 46162,
        "asian": 57023,
        "multi": 49963
      },
      {
        "year": "15",
        "white": 61211,
        "black": 50193,
        "hispanic": 52029,
        "asian": 64271,
        "multi": 56314
      },
      {
        "year": "20",
        "white": 68991,
        "black": 56573,
        "hispanic": 58642,
        "asian": 72440,
        "multi": 63472
      },
      {
        "year": "25",
        "white": 77760,
        "black": 63763,
        "hispanic": 66096,
        "asian": 81648,
        "multi": 71539
      },
      {
        "year": "30",
        "white": 87644,
        "black": 71868,
        "hispanic": 74497,
        "asian": 92026,
        "multi": 80632
      },
      {
        "year": "35",
        "white": 98784,
        "black": 81003,
        "hispanic": 83966,
        "asian": 103723,
        "multi": 90881
      },
      {
        "year": "40",
        "white": 111340,
        "black": 91299,
        "hispanic": 94639,
        "asian": 116907,
        "multi": 102433
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "Eye",
        "color": "text-industrial-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-purple-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "animal-control-worker",
    "name": "Animal Control Worker",
    "sector": "Service",
    "base": 50936,
    "demand": "Stable",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 50936,
        "black": 41768,
        "hispanic": 43296,
        "asian": 53483,
        "multi": 46861
      },
      {
        "year": "5",
        "white": 58945,
        "black": 48335,
        "hispanic": 50103,
        "asian": 61892,
        "multi": 54229
      },
      {
        "year": "10",
        "white": 70750,
        "black": 58015,
        "hispanic": 60137,
        "asian": 74287,
        "multi": 65090
      },
      {
        "year": "15",
        "white": 84919,
        "black": 69633,
        "hispanic": 72181,
        "asian": 89165,
        "multi": 78125
      },
      {
        "year": "20",
        "white": 101925,
        "black": 83579,
        "hispanic": 86636,
        "asian": 107021,
        "multi": 93771
      },
      {
        "year": "25",
        "white": 122337,
        "black": 100317,
        "hispanic": 103987,
        "asian": 128454,
        "multi": 112550
      },
      {
        "year": "30",
        "white": 146838,
        "black": 120407,
        "hispanic": 124812,
        "asian": 154180,
        "multi": 135091
      },
      {
        "year": "35",
        "white": 176244,
        "black": 144520,
        "hispanic": 149808,
        "asian": 185057,
        "multi": 162145
      },
      {
        "year": "40",
        "white": 211540,
        "black": 173463,
        "hispanic": 179809,
        "asian": 222117,
        "multi": 194617
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Microscope",
        "color": "text-blue-400"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-green-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "armored-car-driver",
    "name": "Armored Car Driver",
    "sector": "Transportation",
    "base": 47526,
    "demand": "Moderate",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 47526,
        "black": 38971,
        "hispanic": 40397,
        "asian": 49902,
        "multi": 43724
      },
      {
        "year": "5",
        "white": 55816,
        "black": 45769,
        "hispanic": 47444,
        "asian": 58607,
        "multi": 51351
      },
      {
        "year": "10",
        "white": 68240,
        "black": 55957,
        "hispanic": 58004,
        "asian": 71652,
        "multi": 62781
      },
      {
        "year": "15",
        "white": 83431,
        "black": 68413,
        "hispanic": 70916,
        "asian": 87602,
        "multi": 76756
      },
      {
        "year": "20",
        "white": 102002,
        "black": 83642,
        "hispanic": 86702,
        "asian": 107102,
        "multi": 93842
      },
      {
        "year": "25",
        "white": 124707,
        "black": 102260,
        "hispanic": 106001,
        "asian": 130943,
        "multi": 114731
      },
      {
        "year": "30",
        "white": 152467,
        "black": 125023,
        "hispanic": 129597,
        "asian": 160090,
        "multi": 140270
      },
      {
        "year": "35",
        "white": 186406,
        "black": 152853,
        "hispanic": 158445,
        "asian": 195726,
        "multi": 171493
      },
      {
        "year": "40",
        "white": 227899,
        "black": 186877,
        "hispanic": 193714,
        "asian": 239294,
        "multi": 209667
      }
    ],
    "aptitude": "Requires specialized training in transportation systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Transportation field.",
        "icon": "Hammer",
        "color": "text-purple-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-amber-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "backhoe-operator",
    "name": "Backhoe Operator",
    "sector": "Construction",
    "base": 61931,
    "demand": "Stable",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 61931,
        "black": 50783,
        "hispanic": 52641,
        "asian": 65028,
        "multi": 56977
      },
      {
        "year": "5",
        "white": 66643,
        "black": 54647,
        "hispanic": 56646,
        "asian": 69975,
        "multi": 61311
      },
      {
        "year": "10",
        "white": 73039,
        "black": 59892,
        "hispanic": 62083,
        "asian": 76691,
        "multi": 67196
      },
      {
        "year": "15",
        "white": 80050,
        "black": 65641,
        "hispanic": 68043,
        "asian": 84053,
        "multi": 73646
      },
      {
        "year": "20",
        "white": 87734,
        "black": 71942,
        "hispanic": 74574,
        "asian": 92121,
        "multi": 80715
      },
      {
        "year": "25",
        "white": 96155,
        "black": 78847,
        "hispanic": 81732,
        "asian": 100963,
        "multi": 88463
      },
      {
        "year": "30",
        "white": 105385,
        "black": 86415,
        "hispanic": 89577,
        "asian": 110654,
        "multi": 96954
      },
      {
        "year": "35",
        "white": 115500,
        "black": 94710,
        "hispanic": 98175,
        "asian": 121275,
        "multi": 106260
      },
      {
        "year": "40",
        "white": 126586,
        "black": 103801,
        "hispanic": 107598,
        "asian": 132916,
        "multi": 116459
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "Zap",
        "color": "text-amber-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-amber-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "binder-bookbinding",
    "name": "Bookbinder",
    "sector": "Service",
    "base": 71186,
    "demand": "Very High",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 71186,
        "black": 58373,
        "hispanic": 60508,
        "asian": 74745,
        "multi": 65491
      },
      {
        "year": "5",
        "white": 87497,
        "black": 71747,
        "hispanic": 74372,
        "asian": 91872,
        "multi": 80497
      },
      {
        "year": "10",
        "white": 113237,
        "black": 92854,
        "hispanic": 96251,
        "asian": 118899,
        "multi": 104178
      },
      {
        "year": "15",
        "white": 146550,
        "black": 120171,
        "hispanic": 124567,
        "asian": 153877,
        "multi": 134826
      },
      {
        "year": "20",
        "white": 189662,
        "black": 155523,
        "hispanic": 161213,
        "asian": 199145,
        "multi": 174489
      },
      {
        "year": "25",
        "white": 245458,
        "black": 201276,
        "hispanic": 208639,
        "asian": 257731,
        "multi": 225822
      },
      {
        "year": "30",
        "white": 317668,
        "black": 260488,
        "hispanic": 270018,
        "asian": 333552,
        "multi": 292255
      },
      {
        "year": "35",
        "white": 411122,
        "black": 337120,
        "hispanic": 349453,
        "asian": 431678,
        "multi": 378232
      },
      {
        "year": "40",
        "white": 532068,
        "black": 436295,
        "hispanic": 452257,
        "asian": 558671,
        "multi": 489502
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Microscope",
        "color": "text-amber-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-purple-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "boat-builder",
    "name": "Boat Builder",
    "sector": "Industrial & Manufacturing",
    "base": 48148,
    "demand": "Very High",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 48148,
        "black": 39481,
        "hispanic": 40926,
        "asian": 50555,
        "multi": 44296
      },
      {
        "year": "5",
        "white": 57656,
        "black": 47278,
        "hispanic": 49008,
        "asian": 60539,
        "multi": 53044
      },
      {
        "year": "10",
        "white": 72224,
        "black": 59224,
        "hispanic": 61391,
        "asian": 75835,
        "multi": 66446
      },
      {
        "year": "15",
        "white": 90473,
        "black": 74188,
        "hispanic": 76902,
        "asian": 94997,
        "multi": 83235
      },
      {
        "year": "20",
        "white": 113333,
        "black": 92933,
        "hispanic": 96333,
        "asian": 118999,
        "multi": 104266
      },
      {
        "year": "25",
        "white": 141968,
        "black": 116414,
        "hispanic": 120673,
        "asian": 149066,
        "multi": 130611
      },
      {
        "year": "30",
        "white": 177839,
        "black": 145828,
        "hispanic": 151163,
        "asian": 186731,
        "multi": 163612
      },
      {
        "year": "35",
        "white": 222773,
        "black": 182674,
        "hispanic": 189357,
        "asian": 233912,
        "multi": 204951
      },
      {
        "year": "40",
        "white": 279060,
        "black": 228830,
        "hispanic": 237201,
        "asian": 293013,
        "multi": 256736
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "ShieldCheck",
        "color": "text-industrial-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-industrial-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "bus-driver-school",
    "name": "School Bus Driver",
    "sector": "Transportation",
    "base": 52811,
    "demand": "High",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 52811,
        "black": 43305,
        "hispanic": 44889,
        "asian": 55452,
        "multi": 48586
      },
      {
        "year": "5",
        "white": 58337,
        "black": 47837,
        "hispanic": 49587,
        "asian": 61254,
        "multi": 53670
      },
      {
        "year": "10",
        "white": 66065,
        "black": 54174,
        "hispanic": 56156,
        "asian": 69369,
        "multi": 60780
      },
      {
        "year": "15",
        "white": 74817,
        "black": 61350,
        "hispanic": 63595,
        "asian": 78558,
        "multi": 68832
      },
      {
        "year": "20",
        "white": 84728,
        "black": 69477,
        "hispanic": 72019,
        "asian": 88965,
        "multi": 77950
      },
      {
        "year": "25",
        "white": 95952,
        "black": 78681,
        "hispanic": 81560,
        "asian": 100750,
        "multi": 88276
      },
      {
        "year": "30",
        "white": 108663,
        "black": 89104,
        "hispanic": 92364,
        "asian": 114097,
        "multi": 99970
      },
      {
        "year": "35",
        "white": 123058,
        "black": 100908,
        "hispanic": 104599,
        "asian": 129211,
        "multi": 113213
      },
      {
        "year": "40",
        "white": 139360,
        "black": 114275,
        "hispanic": 118456,
        "asian": 146328,
        "multi": 128211
      }
    ],
    "aptitude": "Requires specialized training in transportation systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Transportation field.",
        "icon": "Target",
        "color": "text-blue-400"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-industrial-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "cable-installer",
    "name": "Cable Installer",
    "sector": "Energy & Utilities",
    "base": 38069,
    "demand": "Stable",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 38069,
        "black": 31217,
        "hispanic": 32359,
        "asian": 39972,
        "multi": 35023
      },
      {
        "year": "5",
        "white": 42802,
        "black": 35098,
        "hispanic": 36382,
        "asian": 44942,
        "multi": 39378
      },
      {
        "year": "10",
        "white": 49554,
        "black": 40634,
        "hispanic": 42121,
        "asian": 52032,
        "multi": 45590
      },
      {
        "year": "15",
        "white": 57372,
        "black": 47045,
        "hispanic": 48766,
        "asian": 60240,
        "multi": 52782
      },
      {
        "year": "20",
        "white": 66422,
        "black": 54466,
        "hispanic": 56459,
        "asian": 69743,
        "multi": 61108
      },
      {
        "year": "25",
        "white": 76900,
        "black": 63058,
        "hispanic": 65365,
        "asian": 80746,
        "multi": 70748
      },
      {
        "year": "30",
        "white": 89032,
        "black": 73006,
        "hispanic": 75677,
        "asian": 93483,
        "multi": 81909
      },
      {
        "year": "35",
        "white": 103077,
        "black": 84523,
        "hispanic": 87615,
        "asian": 108231,
        "multi": 94831
      },
      {
        "year": "40",
        "white": 119338,
        "black": 97857,
        "hispanic": 101437,
        "asian": 125305,
        "multi": 109791
      }
    ],
    "aptitude": "Requires specialized training in electrical systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Electrical field.",
        "icon": "Hammer",
        "color": "text-green-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-emerald-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "carpet-cleaner",
    "name": "Carpet Cleaner",
    "sector": "Service",
    "base": 72962,
    "demand": "Moderate",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 72962,
        "black": 59829,
        "hispanic": 62018,
        "asian": 76610,
        "multi": 67125
      },
      {
        "year": "5",
        "white": 90475,
        "black": 74190,
        "hispanic": 76904,
        "asian": 94999,
        "multi": 83237
      },
      {
        "year": "10",
        "white": 118392,
        "black": 97081,
        "hispanic": 100633,
        "asian": 124311,
        "multi": 108920
      },
      {
        "year": "15",
        "white": 154922,
        "black": 127036,
        "hispanic": 131684,
        "asian": 162668,
        "multi": 142528
      },
      {
        "year": "20",
        "white": 202723,
        "black": 166233,
        "hispanic": 172315,
        "asian": 212860,
        "multi": 186505
      },
      {
        "year": "25",
        "white": 265274,
        "black": 217525,
        "hispanic": 225483,
        "asian": 278538,
        "multi": 244052
      },
      {
        "year": "30",
        "white": 347125,
        "black": 284643,
        "hispanic": 295057,
        "asian": 364482,
        "multi": 319355
      },
      {
        "year": "35",
        "white": 454232,
        "black": 372470,
        "hispanic": 386097,
        "asian": 476944,
        "multi": 417894
      },
      {
        "year": "40",
        "white": 594387,
        "black": 487397,
        "hispanic": 505229,
        "asian": 624106,
        "multi": 546836
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Droplets",
        "color": "text-amber-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-red-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "courier-entry",
    "name": "Courier",
    "sector": "Transportation",
    "base": 47790,
    "demand": "High",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 47790,
        "black": 39188,
        "hispanic": 40622,
        "asian": 50180,
        "multi": 43967
      },
      {
        "year": "5",
        "white": 51646,
        "black": 42350,
        "hispanic": 43899,
        "asian": 54228,
        "multi": 47514
      },
      {
        "year": "10",
        "white": 56907,
        "black": 46663,
        "hispanic": 48371,
        "asian": 59752,
        "multi": 52354
      },
      {
        "year": "15",
        "white": 62703,
        "black": 51416,
        "hispanic": 53297,
        "asian": 65838,
        "multi": 57687
      },
      {
        "year": "20",
        "white": 69090,
        "black": 56653,
        "hispanic": 58726,
        "asian": 72544,
        "multi": 63562
      },
      {
        "year": "25",
        "white": 76127,
        "black": 62424,
        "hispanic": 64708,
        "asian": 79933,
        "multi": 70037
      },
      {
        "year": "30",
        "white": 83881,
        "black": 68782,
        "hispanic": 71299,
        "asian": 88075,
        "multi": 77170
      },
      {
        "year": "35",
        "white": 92425,
        "black": 75788,
        "hispanic": 78561,
        "asian": 97046,
        "multi": 85031
      },
      {
        "year": "40",
        "white": 101839,
        "black": 83508,
        "hispanic": 86563,
        "asian": 106931,
        "multi": 93692
      }
    ],
    "aptitude": "Requires specialized training in transportation systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Transportation field.",
        "icon": "Wrench",
        "color": "text-green-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-green-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "data-entry-clerk-technical",
    "name": "Tech Data Clerk",
    "sector": "Service",
    "base": 68638,
    "demand": "Critical",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 68638,
        "black": 56283,
        "hispanic": 58342,
        "asian": 72070,
        "multi": 63147
      },
      {
        "year": "5",
        "white": 85139,
        "black": 69814,
        "hispanic": 72368,
        "asian": 89396,
        "multi": 78328
      },
      {
        "year": "10",
        "white": 111450,
        "black": 91389,
        "hispanic": 94733,
        "asian": 117023,
        "multi": 102534
      },
      {
        "year": "15",
        "white": 145893,
        "black": 119632,
        "hispanic": 124009,
        "asian": 153188,
        "multi": 134222
      },
      {
        "year": "20",
        "white": 190981,
        "black": 156604,
        "hispanic": 162333,
        "asian": 200530,
        "multi": 175702
      },
      {
        "year": "25",
        "white": 250002,
        "black": 205001,
        "hispanic": 212501,
        "asian": 262502,
        "multi": 230002
      },
      {
        "year": "30",
        "white": 327263,
        "black": 268356,
        "hispanic": 278173,
        "asian": 343626,
        "multi": 301082
      },
      {
        "year": "35",
        "white": 428401,
        "black": 351289,
        "hispanic": 364141,
        "asian": 449821,
        "multi": 394129
      },
      {
        "year": "40",
        "white": 560795,
        "black": 459852,
        "hispanic": 476676,
        "asian": 588835,
        "multi": 515932
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Brain",
        "color": "text-green-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-industrial-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "diesel-engine-tech",
    "name": "Diesel Engine Tech",
    "sector": "Transportation",
    "base": 62586,
    "demand": "High",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 62586,
        "black": 51321,
        "hispanic": 53198,
        "asian": 65715,
        "multi": 57579
      },
      {
        "year": "5",
        "white": 71692,
        "black": 58787,
        "hispanic": 60938,
        "asian": 75277,
        "multi": 65957
      },
      {
        "year": "10",
        "white": 84960,
        "black": 69667,
        "hispanic": 72216,
        "asian": 89208,
        "multi": 78163
      },
      {
        "year": "15",
        "white": 100683,
        "black": 82560,
        "hispanic": 85580,
        "asian": 105717,
        "multi": 92628
      },
      {
        "year": "20",
        "white": 119315,
        "black": 97839,
        "hispanic": 101418,
        "asian": 125281,
        "multi": 109770
      },
      {
        "year": "25",
        "white": 141396,
        "black": 115945,
        "hispanic": 120187,
        "asian": 148466,
        "multi": 130085
      },
      {
        "year": "30",
        "white": 167564,
        "black": 137402,
        "hispanic": 142429,
        "asian": 175942,
        "multi": 154159
      },
      {
        "year": "35",
        "white": 198574,
        "black": 162831,
        "hispanic": 168788,
        "asian": 208503,
        "multi": 182688
      },
      {
        "year": "40",
        "white": 235323,
        "black": 192965,
        "hispanic": 200024,
        "asian": 247089,
        "multi": 216497
      }
    ],
    "aptitude": "Requires specialized training in transportation systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Transportation field.",
        "icon": "Zap",
        "color": "text-pink-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-400"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "drywall-finisher",
    "name": "Drywall Finisher",
    "sector": "Construction",
    "base": 55935,
    "demand": "Stable",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 55935,
        "black": 45867,
        "hispanic": 47545,
        "asian": 58732,
        "multi": 51460
      },
      {
        "year": "5",
        "white": 60846,
        "black": 49894,
        "hispanic": 51719,
        "asian": 63888,
        "multi": 55978
      },
      {
        "year": "10",
        "white": 67596,
        "black": 55429,
        "hispanic": 57456,
        "asian": 70976,
        "multi": 62188
      },
      {
        "year": "15",
        "white": 75094,
        "black": 61577,
        "hispanic": 63830,
        "asian": 78849,
        "multi": 69087
      },
      {
        "year": "20",
        "white": 83424,
        "black": 68408,
        "hispanic": 70911,
        "asian": 87595,
        "multi": 76750
      },
      {
        "year": "25",
        "white": 92678,
        "black": 75996,
        "hispanic": 78777,
        "asian": 97312,
        "multi": 85264
      },
      {
        "year": "30",
        "white": 102959,
        "black": 84427,
        "hispanic": 87515,
        "asian": 108107,
        "multi": 94722
      },
      {
        "year": "35",
        "white": 114380,
        "black": 93792,
        "hispanic": 97223,
        "asian": 120099,
        "multi": 105230
      },
      {
        "year": "40",
        "white": 127069,
        "black": 104196,
        "hispanic": 108008,
        "asian": 133422,
        "multi": 116903
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "Zap",
        "color": "text-blue-400"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-gray-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "electrical-instrument-mech",
    "name": "Electrical Mech",
    "sector": "Energy & Utilities",
    "base": 60490,
    "demand": "Critical",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 60490,
        "black": 49602,
        "hispanic": 51417,
        "asian": 63515,
        "multi": 55651
      },
      {
        "year": "5",
        "white": 69234,
        "black": 56772,
        "hispanic": 58849,
        "asian": 72696,
        "multi": 63695
      },
      {
        "year": "10",
        "white": 81962,
        "black": 67209,
        "hispanic": 69668,
        "asian": 86061,
        "multi": 75405
      },
      {
        "year": "15",
        "white": 97031,
        "black": 79565,
        "hispanic": 82476,
        "asian": 101882,
        "multi": 89268
      },
      {
        "year": "20",
        "white": 114870,
        "black": 94193,
        "hispanic": 97639,
        "asian": 120613,
        "multi": 105680
      },
      {
        "year": "25",
        "white": 135988,
        "black": 111510,
        "hispanic": 115590,
        "asian": 142787,
        "multi": 125109
      },
      {
        "year": "30",
        "white": 160989,
        "black": 132011,
        "hispanic": 136840,
        "asian": 169038,
        "multi": 148110
      },
      {
        "year": "35",
        "white": 190586,
        "black": 156280,
        "hispanic": 161998,
        "asian": 200115,
        "multi": 175339
      },
      {
        "year": "40",
        "white": 225624,
        "black": 185012,
        "hispanic": 191781,
        "asian": 236906,
        "multi": 207574
      }
    ],
    "aptitude": "Requires specialized training in electrical systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Electrical field.",
        "icon": "Baby",
        "color": "text-industrial-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-purple-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "farm-equipment-mech",
    "name": "Farm Equipment Mech",
    "sector": "Industrial & Manufacturing",
    "base": 42763,
    "demand": "Very High",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 42763,
        "black": 35066,
        "hispanic": 36349,
        "asian": 44901,
        "multi": 39342
      },
      {
        "year": "5",
        "white": 46722,
        "black": 38312,
        "hispanic": 39714,
        "asian": 49058,
        "multi": 42984
      },
      {
        "year": "10",
        "white": 52190,
        "black": 42796,
        "hispanic": 44361,
        "asian": 54799,
        "multi": 48015
      },
      {
        "year": "15",
        "white": 58298,
        "black": 47804,
        "hispanic": 49553,
        "asian": 61213,
        "multi": 53634
      },
      {
        "year": "20",
        "white": 65121,
        "black": 53399,
        "hispanic": 55352,
        "asian": 68377,
        "multi": 59911
      },
      {
        "year": "25",
        "white": 72742,
        "black": 59648,
        "hispanic": 61830,
        "asian": 76379,
        "multi": 66922
      },
      {
        "year": "30",
        "white": 81255,
        "black": 66629,
        "hispanic": 69067,
        "asian": 85318,
        "multi": 74754
      },
      {
        "year": "35",
        "white": 90764,
        "black": 74427,
        "hispanic": 77150,
        "asian": 95302,
        "multi": 83503
      },
      {
        "year": "40",
        "white": 101387,
        "black": 83137,
        "hispanic": 86179,
        "asian": 106456,
        "multi": 93276
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "Flame",
        "color": "text-purple-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-indigo-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "fence-builder",
    "name": "Fence Builder",
    "sector": "Construction",
    "base": 43523,
    "demand": "High",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 43523,
        "black": 35689,
        "hispanic": 36995,
        "asian": 45699,
        "multi": 40041
      },
      {
        "year": "5",
        "white": 50077,
        "black": 41063,
        "hispanic": 42566,
        "asian": 52581,
        "multi": 46071
      },
      {
        "year": "10",
        "white": 59675,
        "black": 48934,
        "hispanic": 50724,
        "asian": 62659,
        "multi": 54901
      },
      {
        "year": "15",
        "white": 71113,
        "black": 58312,
        "hispanic": 60446,
        "asian": 74668,
        "multi": 65424
      },
      {
        "year": "20",
        "white": 84742,
        "black": 69488,
        "hispanic": 72031,
        "asian": 88979,
        "multi": 77963
      },
      {
        "year": "25",
        "white": 100984,
        "black": 82807,
        "hispanic": 85836,
        "asian": 106033,
        "multi": 92905
      },
      {
        "year": "30",
        "white": 120338,
        "black": 98677,
        "hispanic": 102288,
        "asian": 126355,
        "multi": 110711
      },
      {
        "year": "35",
        "white": 143402,
        "black": 117590,
        "hispanic": 121892,
        "asian": 150572,
        "multi": 131930
      },
      {
        "year": "40",
        "white": 170887,
        "black": 140127,
        "hispanic": 145254,
        "asian": 179431,
        "multi": 157216
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "Microscope",
        "color": "text-indigo-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-400"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "floor-sander",
    "name": "Floor Sander",
    "sector": "Construction",
    "base": 66153,
    "demand": "High",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 66153,
        "black": 54245,
        "hispanic": 56230,
        "asian": 69461,
        "multi": 60861
      },
      {
        "year": "5",
        "white": 71340,
        "black": 58498,
        "hispanic": 60639,
        "asian": 74907,
        "multi": 65632
      },
      {
        "year": "10",
        "white": 78398,
        "black": 64287,
        "hispanic": 66639,
        "asian": 82318,
        "multi": 72127
      },
      {
        "year": "15",
        "white": 86156,
        "black": 70648,
        "hispanic": 73232,
        "asian": 90464,
        "multi": 79263
      },
      {
        "year": "20",
        "white": 94681,
        "black": 77638,
        "hispanic": 80478,
        "asian": 99415,
        "multi": 87106
      },
      {
        "year": "25",
        "white": 104049,
        "black": 85320,
        "hispanic": 88442,
        "asian": 109251,
        "multi": 95725
      },
      {
        "year": "30",
        "white": 114344,
        "black": 93762,
        "hispanic": 97193,
        "asian": 120061,
        "multi": 105197
      },
      {
        "year": "35",
        "white": 125658,
        "black": 103040,
        "hispanic": 106809,
        "asian": 131941,
        "multi": 115606
      },
      {
        "year": "40",
        "white": 138092,
        "black": 113235,
        "hispanic": 117378,
        "asian": 144996,
        "multi": 127044
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "TreeDeciduous",
        "color": "text-emerald-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-green-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "glazier-glass-installer",
    "name": "Glass Installer",
    "sector": "Construction",
    "base": 35807,
    "demand": "High",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 35807,
        "black": 29362,
        "hispanic": 30436,
        "asian": 37597,
        "multi": 32942
      },
      {
        "year": "5",
        "white": 41048,
        "black": 33660,
        "hispanic": 34891,
        "asian": 43101,
        "multi": 37765
      },
      {
        "year": "10",
        "white": 48692,
        "black": 39927,
        "hispanic": 41388,
        "asian": 51127,
        "multi": 44797
      },
      {
        "year": "15",
        "white": 57759,
        "black": 47362,
        "hispanic": 49095,
        "asian": 60647,
        "multi": 53138
      },
      {
        "year": "20",
        "white": 68514,
        "black": 56182,
        "hispanic": 58237,
        "asian": 71940,
        "multi": 63033
      },
      {
        "year": "25",
        "white": 81272,
        "black": 66643,
        "hispanic": 69081,
        "asian": 85336,
        "multi": 74770
      },
      {
        "year": "30",
        "white": 96406,
        "black": 79053,
        "hispanic": 81945,
        "asian": 101226,
        "multi": 88693
      },
      {
        "year": "35",
        "white": 114357,
        "black": 93773,
        "hispanic": 97204,
        "asian": 120075,
        "multi": 105209
      },
      {
        "year": "40",
        "white": 135652,
        "black": 111234,
        "hispanic": 115304,
        "asian": 142434,
        "multi": 124799
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "ShieldCheck",
        "color": "text-blue-400"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-purple-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "heavy-truck-driver",
    "name": "Heavy Truck Driver",
    "sector": "Transportation",
    "base": 50440,
    "demand": "Very High",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 50440,
        "black": 41361,
        "hispanic": 42874,
        "asian": 52962,
        "multi": 46405
      },
      {
        "year": "5",
        "white": 53515,
        "black": 43882,
        "hispanic": 45488,
        "asian": 56191,
        "multi": 49234
      },
      {
        "year": "10",
        "white": 57623,
        "black": 47251,
        "hispanic": 48980,
        "asian": 60505,
        "multi": 53014
      },
      {
        "year": "15",
        "white": 62047,
        "black": 50879,
        "hispanic": 52740,
        "asian": 65150,
        "multi": 57084
      },
      {
        "year": "20",
        "white": 66811,
        "black": 54785,
        "hispanic": 56789,
        "asian": 70151,
        "multi": 61466
      },
      {
        "year": "25",
        "white": 71940,
        "black": 58991,
        "hispanic": 61149,
        "asian": 75537,
        "multi": 66185
      },
      {
        "year": "30",
        "white": 77463,
        "black": 63520,
        "hispanic": 65844,
        "asian": 81336,
        "multi": 71266
      },
      {
        "year": "35",
        "white": 83410,
        "black": 68397,
        "hispanic": 70899,
        "asian": 87581,
        "multi": 76738
      },
      {
        "year": "40",
        "white": 89814,
        "black": 73648,
        "hispanic": 76342,
        "asian": 94305,
        "multi": 82629
      }
    ],
    "aptitude": "Requires specialized training in transportation systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Transportation field.",
        "icon": "Palette",
        "color": "text-amber-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-emerald-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "hvac-installer",
    "name": "HVAC Installer",
    "sector": "Construction",
    "base": 55810,
    "demand": "High",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 55810,
        "black": 45764,
        "hispanic": 47439,
        "asian": 58601,
        "multi": 51345
      },
      {
        "year": "5",
        "white": 63270,
        "black": 51881,
        "hispanic": 53779,
        "asian": 66433,
        "multi": 58208
      },
      {
        "year": "10",
        "white": 74012,
        "black": 60690,
        "hispanic": 62910,
        "asian": 77712,
        "multi": 68091
      },
      {
        "year": "15",
        "white": 86578,
        "black": 70994,
        "hispanic": 73591,
        "asian": 90907,
        "multi": 79652
      },
      {
        "year": "20",
        "white": 101277,
        "black": 83047,
        "hispanic": 86086,
        "asian": 106341,
        "multi": 93175
      },
      {
        "year": "25",
        "white": 118472,
        "black": 97147,
        "hispanic": 100702,
        "asian": 124396,
        "multi": 108995
      },
      {
        "year": "30",
        "white": 138587,
        "black": 113641,
        "hispanic": 117799,
        "asian": 145516,
        "multi": 127500
      },
      {
        "year": "35",
        "white": 162117,
        "black": 132936,
        "hispanic": 137799,
        "asian": 170223,
        "multi": 149147
      },
      {
        "year": "40",
        "white": 189642,
        "black": 155506,
        "hispanic": 161195,
        "asian": 199124,
        "multi": 174470
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "Wrench",
        "color": "text-indigo-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-purple-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "ignition-specialist",
    "name": "Ignition Specialist",
    "sector": "Transportation",
    "base": 43264,
    "demand": "Very High",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 43264,
        "black": 35476,
        "hispanic": 36774,
        "asian": 45427,
        "multi": 39803
      },
      {
        "year": "5",
        "white": 51833,
        "black": 42503,
        "hispanic": 44058,
        "asian": 54425,
        "multi": 47687
      },
      {
        "year": "10",
        "white": 64970,
        "black": 53275,
        "hispanic": 55224,
        "asian": 68218,
        "multi": 59772
      },
      {
        "year": "15",
        "white": 81435,
        "black": 66777,
        "hispanic": 69220,
        "asian": 85507,
        "multi": 74920
      },
      {
        "year": "20",
        "white": 102074,
        "black": 83700,
        "hispanic": 86763,
        "asian": 107177,
        "multi": 93908
      },
      {
        "year": "25",
        "white": 127943,
        "black": 104913,
        "hispanic": 108751,
        "asian": 134340,
        "multi": 117707
      },
      {
        "year": "30",
        "white": 160368,
        "black": 131501,
        "hispanic": 136312,
        "asian": 168386,
        "multi": 147538
      },
      {
        "year": "35",
        "white": 201010,
        "black": 164828,
        "hispanic": 170859,
        "asian": 211061,
        "multi": 184930
      },
      {
        "year": "40",
        "white": 251953,
        "black": 206602,
        "hispanic": 214160,
        "asian": 264551,
        "multi": 231797
      }
    ],
    "aptitude": "Requires specialized training in transportation systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Transportation field.",
        "icon": "Palette",
        "color": "text-green-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-purple-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "industrial-truck-operator",
    "name": "Industrial Truck Op",
    "sector": "Industrial & Manufacturing",
    "base": 40257,
    "demand": "Very High",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 40257,
        "black": 33011,
        "hispanic": 34218,
        "asian": 42270,
        "multi": 37036
      },
      {
        "year": "5",
        "white": 44173,
        "black": 36222,
        "hispanic": 37547,
        "asian": 46382,
        "multi": 40639
      },
      {
        "year": "10",
        "white": 49608,
        "black": 40679,
        "hispanic": 42167,
        "asian": 52089,
        "multi": 45640
      },
      {
        "year": "15",
        "white": 55712,
        "black": 45684,
        "hispanic": 47356,
        "asian": 58498,
        "multi": 51255
      },
      {
        "year": "20",
        "white": 62567,
        "black": 51305,
        "hispanic": 53182,
        "asian": 65696,
        "multi": 57562
      },
      {
        "year": "25",
        "white": 70266,
        "black": 57618,
        "hispanic": 59726,
        "asian": 73779,
        "multi": 64645
      },
      {
        "year": "30",
        "white": 78912,
        "black": 64708,
        "hispanic": 67075,
        "asian": 82857,
        "multi": 72599
      },
      {
        "year": "35",
        "white": 88621,
        "black": 72669,
        "hispanic": 75328,
        "asian": 93052,
        "multi": 81532
      },
      {
        "year": "40",
        "white": 99526,
        "black": 81611,
        "hispanic": 84597,
        "asian": 104502,
        "multi": 91564
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "Hammer",
        "color": "text-orange-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-red-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "lube-technician",
    "name": "Lube Technician",
    "sector": "Transportation",
    "base": 59076,
    "demand": "Very High",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 59076,
        "black": 48442,
        "hispanic": 50215,
        "asian": 62030,
        "multi": 54350
      },
      {
        "year": "5",
        "white": 74119,
        "black": 60778,
        "hispanic": 63001,
        "asian": 77825,
        "multi": 68190
      },
      {
        "year": "10",
        "white": 98419,
        "black": 80704,
        "hispanic": 83656,
        "asian": 103340,
        "multi": 90546
      },
      {
        "year": "15",
        "white": 130686,
        "black": 107163,
        "hispanic": 111083,
        "asian": 137221,
        "multi": 120231
      },
      {
        "year": "20",
        "white": 173532,
        "black": 142296,
        "hispanic": 147502,
        "asian": 182208,
        "multi": 159649
      },
      {
        "year": "25",
        "white": 230425,
        "black": 188948,
        "hispanic": 195861,
        "asian": 241946,
        "multi": 211991
      },
      {
        "year": "30",
        "white": 305970,
        "black": 250895,
        "hispanic": 260074,
        "asian": 321268,
        "multi": 281492
      },
      {
        "year": "35",
        "white": 406282,
        "black": 333151,
        "hispanic": 345340,
        "asian": 426596,
        "multi": 373780
      },
      {
        "year": "40",
        "white": 539482,
        "black": 442376,
        "hispanic": 458560,
        "asian": 566456,
        "multi": 496324
      }
    ],
    "aptitude": "Requires specialized training in transportation systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Transportation field.",
        "icon": "Target",
        "color": "text-red-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-red-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "main-line-electrician",
    "name": "Main Line Electrician",
    "sector": "Energy & Utilities",
    "base": 62193,
    "demand": "Moderate",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 62193,
        "black": 50998,
        "hispanic": 52864,
        "asian": 65303,
        "multi": 57218
      },
      {
        "year": "5",
        "white": 68459,
        "black": 56136,
        "hispanic": 58190,
        "asian": 71882,
        "multi": 62982
      },
      {
        "year": "10",
        "white": 77186,
        "black": 63293,
        "hispanic": 65608,
        "asian": 81046,
        "multi": 71011
      },
      {
        "year": "15",
        "white": 87026,
        "black": 71362,
        "hispanic": 73972,
        "asian": 91378,
        "multi": 80064
      },
      {
        "year": "20",
        "white": 98121,
        "black": 80459,
        "hispanic": 83403,
        "asian": 103027,
        "multi": 90271
      },
      {
        "year": "25",
        "white": 110630,
        "black": 90716,
        "hispanic": 94035,
        "asian": 116161,
        "multi": 101779
      },
      {
        "year": "30",
        "white": 124733,
        "black": 102281,
        "hispanic": 106023,
        "asian": 130970,
        "multi": 114754
      },
      {
        "year": "35",
        "white": 140635,
        "black": 115320,
        "hispanic": 119539,
        "asian": 147666,
        "multi": 129384
      },
      {
        "year": "40",
        "white": 158563,
        "black": 130022,
        "hispanic": 134779,
        "asian": 166491,
        "multi": 145878
      }
    ],
    "aptitude": "Requires specialized training in electrical systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Electrical field.",
        "icon": "Brain",
        "color": "text-emerald-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-purple-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "medical-coder-entry",
    "name": "Medical Coder",
    "sector": "Healthcare & Medical",
    "base": 68015,
    "demand": "High",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 68015,
        "black": 55772,
        "hispanic": 57813,
        "asian": 71416,
        "multi": 62574
      },
      {
        "year": "5",
        "white": 75915,
        "black": 62251,
        "hispanic": 64528,
        "asian": 79711,
        "multi": 69842
      },
      {
        "year": "10",
        "white": 87093,
        "black": 71417,
        "hispanic": 74029,
        "asian": 91448,
        "multi": 80126
      },
      {
        "year": "15",
        "white": 99917,
        "black": 81932,
        "hispanic": 84930,
        "asian": 104913,
        "multi": 91924
      },
      {
        "year": "20",
        "white": 114630,
        "black": 93996,
        "hispanic": 97435,
        "asian": 120361,
        "multi": 105459
      },
      {
        "year": "25",
        "white": 131508,
        "black": 107837,
        "hispanic": 111782,
        "asian": 138084,
        "multi": 120988
      },
      {
        "year": "30",
        "white": 150872,
        "black": 123715,
        "hispanic": 128241,
        "asian": 158416,
        "multi": 138802
      },
      {
        "year": "35",
        "white": 173087,
        "black": 141932,
        "hispanic": 147124,
        "asian": 181742,
        "multi": 159240
      },
      {
        "year": "40",
        "white": 198574,
        "black": 162830,
        "hispanic": 168788,
        "asian": 208502,
        "multi": 182688
      }
    ],
    "aptitude": "Requires specialized training in healthcare systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Healthcare field.",
        "icon": "Wind",
        "color": "text-blue-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-indigo-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "oil-and-gas-technician",
    "name": "Oil & Gas Tech",
    "sector": "Industrial & Manufacturing",
    "base": 68961,
    "demand": "High",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 68961,
        "black": 56548,
        "hispanic": 58617,
        "asian": 72409,
        "multi": 63444
      },
      {
        "year": "5",
        "white": 84221,
        "black": 69061,
        "hispanic": 71588,
        "asian": 88432,
        "multi": 77484
      },
      {
        "year": "10",
        "white": 108129,
        "black": 88666,
        "hispanic": 91910,
        "asian": 113536,
        "multi": 99479
      },
      {
        "year": "15",
        "white": 138825,
        "black": 113836,
        "hispanic": 118001,
        "asian": 145766,
        "multi": 127719
      },
      {
        "year": "20",
        "white": 178233,
        "black": 146151,
        "hispanic": 151498,
        "asian": 187145,
        "multi": 163975
      },
      {
        "year": "25",
        "white": 228829,
        "black": 187640,
        "hispanic": 194505,
        "asian": 240271,
        "multi": 210523
      },
      {
        "year": "30",
        "white": 293788,
        "black": 240906,
        "hispanic": 249720,
        "asian": 308478,
        "multi": 270285
      },
      {
        "year": "35",
        "white": 377187,
        "black": 309294,
        "hispanic": 320609,
        "asian": 396047,
        "multi": 347012
      },
      {
        "year": "40",
        "white": 484261,
        "black": 397094,
        "hispanic": 411622,
        "asian": 508474,
        "multi": 445520
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "Target",
        "color": "text-red-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-green-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "painting-contractor-assistant",
    "name": "Painting Assistant",
    "sector": "Construction",
    "base": 62477,
    "demand": "High",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 62477,
        "black": 51231,
        "hispanic": 53105,
        "asian": 65601,
        "multi": 57479
      },
      {
        "year": "5",
        "white": 65391,
        "black": 53621,
        "hispanic": 55583,
        "asian": 68661,
        "multi": 60160
      },
      {
        "year": "10",
        "white": 69226,
        "black": 56765,
        "hispanic": 58842,
        "asian": 72687,
        "multi": 63688
      },
      {
        "year": "15",
        "white": 73285,
        "black": 60094,
        "hispanic": 62292,
        "asian": 76950,
        "multi": 67422
      },
      {
        "year": "20",
        "white": 77583,
        "black": 63618,
        "hispanic": 65945,
        "asian": 81462,
        "multi": 71376
      },
      {
        "year": "25",
        "white": 82132,
        "black": 67349,
        "hispanic": 69813,
        "asian": 86239,
        "multi": 75562
      },
      {
        "year": "30",
        "white": 86949,
        "black": 71298,
        "hispanic": 73906,
        "asian": 91296,
        "multi": 79993
      },
      {
        "year": "35",
        "white": 92047,
        "black": 75479,
        "hispanic": 78240,
        "asian": 96650,
        "multi": 84684
      },
      {
        "year": "40",
        "white": 97445,
        "black": 79905,
        "hispanic": 82828,
        "asian": 102318,
        "multi": 89650
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "Target",
        "color": "text-indigo-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-400"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "petroleum-technician",
    "name": "Petroleum Tech",
    "sector": "Industrial & Manufacturing",
    "base": 60207,
    "demand": "High",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 60207,
        "black": 49370,
        "hispanic": 51176,
        "asian": 63217,
        "multi": 55390
      },
      {
        "year": "5",
        "white": 66673,
        "black": 54672,
        "hispanic": 56672,
        "asian": 70006,
        "multi": 61339
      },
      {
        "year": "10",
        "white": 75740,
        "black": 62107,
        "hispanic": 64379,
        "asian": 79527,
        "multi": 69681
      },
      {
        "year": "15",
        "white": 86040,
        "black": 70553,
        "hispanic": 73134,
        "asian": 90342,
        "multi": 79157
      },
      {
        "year": "20",
        "white": 97741,
        "black": 80148,
        "hispanic": 83080,
        "asian": 102629,
        "multi": 89922
      },
      {
        "year": "25",
        "white": 111034,
        "black": 91048,
        "hispanic": 94379,
        "asian": 116586,
        "multi": 102151
      },
      {
        "year": "30",
        "white": 126134,
        "black": 103430,
        "hispanic": 107214,
        "asian": 132441,
        "multi": 116043
      },
      {
        "year": "35",
        "white": 143288,
        "black": 117496,
        "hispanic": 121795,
        "asian": 150452,
        "multi": 131825
      },
      {
        "year": "40",
        "white": 162774,
        "black": 133475,
        "hispanic": 138358,
        "asian": 170913,
        "multi": 149752
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "Zap",
        "color": "text-purple-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-400"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "pipe-fitter-industrial",
    "name": "Industrial Pipe Fitter",
    "sector": "Industrial & Manufacturing",
    "base": 72972,
    "demand": "Stable",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 72972,
        "black": 59837,
        "hispanic": 62026,
        "asian": 76621,
        "multi": 67134
      },
      {
        "year": "5",
        "white": 89262,
        "black": 73195,
        "hispanic": 75873,
        "asian": 93725,
        "multi": 82121
      },
      {
        "year": "10",
        "white": 114830,
        "black": 94160,
        "hispanic": 97605,
        "asian": 120571,
        "multi": 105643
      },
      {
        "year": "15",
        "white": 147721,
        "black": 121131,
        "hispanic": 125562,
        "asian": 155107,
        "multi": 135903
      },
      {
        "year": "20",
        "white": 190033,
        "black": 155827,
        "hispanic": 161528,
        "asian": 199534,
        "multi": 174830
      },
      {
        "year": "25",
        "white": 244464,
        "black": 200461,
        "hispanic": 207795,
        "asian": 256688,
        "multi": 224907
      },
      {
        "year": "30",
        "white": 314487,
        "black": 257880,
        "hispanic": 267314,
        "asian": 330212,
        "multi": 289328
      },
      {
        "year": "35",
        "white": 404567,
        "black": 331745,
        "hispanic": 343882,
        "asian": 424795,
        "multi": 372202
      },
      {
        "year": "40",
        "white": 520448,
        "black": 426768,
        "hispanic": 442381,
        "asian": 546471,
        "multi": 478813
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "Flame",
        "color": "text-gray-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "power-line-tech",
    "name": "Power Line Tech",
    "sector": "Energy & Utilities",
    "base": 55427,
    "demand": "High",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 55427,
        "black": 45450,
        "hispanic": 47113,
        "asian": 58198,
        "multi": 50993
      },
      {
        "year": "5",
        "white": 69758,
        "black": 57202,
        "hispanic": 59295,
        "asian": 73246,
        "multi": 64178
      },
      {
        "year": "10",
        "white": 92990,
        "black": 76252,
        "hispanic": 79042,
        "asian": 97640,
        "multi": 85551
      },
      {
        "year": "15",
        "white": 123960,
        "black": 101647,
        "hispanic": 105366,
        "asian": 130158,
        "multi": 114043
      },
      {
        "year": "20",
        "white": 165243,
        "black": 135500,
        "hispanic": 140457,
        "asian": 173506,
        "multi": 152024
      },
      {
        "year": "25",
        "white": 220276,
        "black": 180626,
        "hispanic": 187235,
        "asian": 231290,
        "multi": 202654
      },
      {
        "year": "30",
        "white": 293637,
        "black": 240782,
        "hispanic": 249591,
        "asian": 308318,
        "multi": 270146
      },
      {
        "year": "35",
        "white": 391429,
        "black": 320972,
        "hispanic": 332715,
        "asian": 411000,
        "multi": 360115
      },
      {
        "year": "40",
        "white": 521790,
        "black": 427868,
        "hispanic": 443522,
        "asian": 547880,
        "multi": 480047
      }
    ],
    "aptitude": "Requires specialized training in electrical systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Electrical field.",
        "icon": "ShieldCheck",
        "color": "text-purple-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-blue-400"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "quarry-worker",
    "name": "Quarry Worker",
    "sector": "Industrial & Manufacturing",
    "base": 64302,
    "demand": "High",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 64302,
        "black": 52728,
        "hispanic": 54657,
        "asian": 67517,
        "multi": 59158
      },
      {
        "year": "5",
        "white": 73163,
        "black": 59994,
        "hispanic": 62189,
        "asian": 76821,
        "multi": 67310
      },
      {
        "year": "10",
        "white": 85976,
        "black": 70501,
        "hispanic": 73080,
        "asian": 90275,
        "multi": 79098
      },
      {
        "year": "15",
        "white": 101034,
        "black": 82848,
        "hispanic": 85879,
        "asian": 106085,
        "multi": 92951
      },
      {
        "year": "20",
        "white": 118728,
        "black": 97357,
        "hispanic": 100919,
        "asian": 124664,
        "multi": 109229
      },
      {
        "year": "25",
        "white": 139521,
        "black": 114407,
        "hispanic": 118592,
        "asian": 146497,
        "multi": 128359
      },
      {
        "year": "30",
        "white": 163955,
        "black": 134443,
        "hispanic": 139362,
        "asian": 172153,
        "multi": 150838
      },
      {
        "year": "35",
        "white": 192668,
        "black": 157988,
        "hispanic": 163768,
        "asian": 202302,
        "multi": 177255
      },
      {
        "year": "40",
        "white": 226411,
        "black": 185657,
        "hispanic": 192449,
        "asian": 237731,
        "multi": 208298
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "Zap",
        "color": "text-orange-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-indigo-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "refrigeration-installer",
    "name": "Refrigeration Installer",
    "sector": "Construction",
    "base": 39849,
    "demand": "High",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 39849,
        "black": 32676,
        "hispanic": 33872,
        "asian": 41841,
        "multi": 36661
      },
      {
        "year": "5",
        "white": 43204,
        "black": 35427,
        "hispanic": 36723,
        "asian": 45364,
        "multi": 39747
      },
      {
        "year": "10",
        "white": 47797,
        "black": 39193,
        "hispanic": 40627,
        "asian": 50187,
        "multi": 43973
      },
      {
        "year": "15",
        "white": 52878,
        "black": 43360,
        "hispanic": 44946,
        "asian": 55522,
        "multi": 48648
      },
      {
        "year": "20",
        "white": 58500,
        "black": 47970,
        "hispanic": 49725,
        "asian": 61425,
        "multi": 53820
      },
      {
        "year": "25",
        "white": 64719,
        "black": 53070,
        "hispanic": 55011,
        "asian": 67955,
        "multi": 59542
      },
      {
        "year": "30",
        "white": 71600,
        "black": 58712,
        "hispanic": 60860,
        "asian": 75180,
        "multi": 65872
      },
      {
        "year": "35",
        "white": 79212,
        "black": 64954,
        "hispanic": 67330,
        "asian": 83172,
        "multi": 72875
      },
      {
        "year": "40",
        "white": 87633,
        "black": 71859,
        "hispanic": 74488,
        "asian": 92015,
        "multi": 80622
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "Flame",
        "color": "text-gray-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-industrial-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "rolling-mill-operator",
    "name": "Rolling Mill Operator",
    "sector": "Industrial & Manufacturing",
    "base": 71326,
    "demand": "High",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 71326,
        "black": 58487,
        "hispanic": 60627,
        "asian": 74892,
        "multi": 65620
      },
      {
        "year": "5",
        "white": 77514,
        "black": 63562,
        "hispanic": 65887,
        "asian": 81390,
        "multi": 71313
      },
      {
        "year": "10",
        "white": 86010,
        "black": 70529,
        "hispanic": 73109,
        "asian": 90311,
        "multi": 79130
      },
      {
        "year": "15",
        "white": 95438,
        "black": 78259,
        "hispanic": 81122,
        "asian": 100209,
        "multi": 87803
      },
      {
        "year": "20",
        "white": 105898,
        "black": 86836,
        "hispanic": 90013,
        "asian": 111193,
        "multi": 97426
      },
      {
        "year": "25",
        "white": 117505,
        "black": 96354,
        "hispanic": 99879,
        "asian": 123380,
        "multi": 108104
      },
      {
        "year": "30",
        "white": 130384,
        "black": 106915,
        "hispanic": 110826,
        "asian": 136903,
        "multi": 119953
      },
      {
        "year": "35",
        "white": 144675,
        "black": 118633,
        "hispanic": 122974,
        "asian": 151908,
        "multi": 133101
      },
      {
        "year": "40",
        "white": 160532,
        "black": 131636,
        "hispanic": 136452,
        "asian": 168558,
        "multi": 147689
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "Brain",
        "color": "text-amber-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-industrial-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "safety-inspector-entry",
    "name": "Safety Inspector",
    "sector": "Service",
    "base": 50989,
    "demand": "Critical",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 50989,
        "black": 41811,
        "hispanic": 43341,
        "asian": 53538,
        "multi": 46910
      },
      {
        "year": "5",
        "white": 56761,
        "black": 46544,
        "hispanic": 48247,
        "asian": 59599,
        "multi": 52220
      },
      {
        "year": "10",
        "white": 64902,
        "black": 53220,
        "hispanic": 55167,
        "asian": 68148,
        "multi": 59710
      },
      {
        "year": "15",
        "white": 74212,
        "black": 60854,
        "hispanic": 63080,
        "asian": 77923,
        "multi": 68275
      },
      {
        "year": "20",
        "white": 84857,
        "black": 69583,
        "hispanic": 72129,
        "asian": 89100,
        "multi": 78069
      },
      {
        "year": "25",
        "white": 97029,
        "black": 79564,
        "hispanic": 82475,
        "asian": 101881,
        "multi": 89267
      },
      {
        "year": "30",
        "white": 110947,
        "black": 90977,
        "hispanic": 94305,
        "asian": 116495,
        "multi": 102071
      },
      {
        "year": "35",
        "white": 126862,
        "black": 104027,
        "hispanic": 107832,
        "asian": 133205,
        "multi": 116713
      },
      {
        "year": "40",
        "white": 145059,
        "black": 118948,
        "hispanic": 123300,
        "asian": 152312,
        "multi": 133454
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Wind",
        "color": "text-purple-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-purple-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "service-technician-field",
    "name": "Field Service Tech",
    "sector": "Service",
    "base": 63361,
    "demand": "High",
    "growth": "5%",
    "payGrowth": [
      {
        "year": "1",
        "white": 63361,
        "black": 51956,
        "hispanic": 53857,
        "asian": 66529,
        "multi": 58292
      },
      {
        "year": "5",
        "white": 79655,
        "black": 65317,
        "hispanic": 67707,
        "asian": 83638,
        "multi": 73283
      },
      {
        "year": "10",
        "white": 106037,
        "black": 86950,
        "hispanic": 90131,
        "asian": 111339,
        "multi": 97554
      },
      {
        "year": "15",
        "white": 141155,
        "black": 115747,
        "hispanic": 119982,
        "asian": 148213,
        "multi": 129863
      },
      {
        "year": "20",
        "white": 187905,
        "black": 154082,
        "hispanic": 159720,
        "asian": 197301,
        "multi": 172873
      },
      {
        "year": "25",
        "white": 250138,
        "black": 205113,
        "hispanic": 212618,
        "asian": 262645,
        "multi": 230127
      },
      {
        "year": "30",
        "white": 332983,
        "black": 273046,
        "hispanic": 283035,
        "asian": 349632,
        "multi": 306344
      },
      {
        "year": "35",
        "white": 443265,
        "black": 363477,
        "hispanic": 376775,
        "asian": 465428,
        "multi": 407803
      },
      {
        "year": "40",
        "white": 590071,
        "black": 483858,
        "hispanic": 501560,
        "asian": 619575,
        "multi": 542865
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "ShieldCheck",
        "color": "text-blue-400"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-indigo-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "ship-mechanic",
    "name": "Ship Mechanic",
    "sector": "Industrial & Manufacturing",
    "base": 50673,
    "demand": "High",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 50673,
        "black": 41552,
        "hispanic": 43072,
        "asian": 53207,
        "multi": 46619
      },
      {
        "year": "5",
        "white": 56568,
        "black": 46385,
        "hispanic": 48083,
        "asian": 59396,
        "multi": 52042
      },
      {
        "year": "10",
        "white": 64909,
        "black": 53226,
        "hispanic": 55173,
        "asian": 68155,
        "multi": 59717
      },
      {
        "year": "15",
        "white": 74481,
        "black": 61075,
        "hispanic": 63309,
        "asian": 78205,
        "multi": 68523
      },
      {
        "year": "20",
        "white": 85465,
        "black": 70081,
        "hispanic": 72645,
        "asian": 89738,
        "multi": 78628
      },
      {
        "year": "25",
        "white": 98068,
        "black": 80416,
        "hispanic": 83358,
        "asian": 102971,
        "multi": 90223
      },
      {
        "year": "30",
        "white": 112530,
        "black": 92274,
        "hispanic": 95650,
        "asian": 118156,
        "multi": 103527
      },
      {
        "year": "35",
        "white": 129124,
        "black": 105882,
        "hispanic": 109755,
        "asian": 135580,
        "multi": 118794
      },
      {
        "year": "40",
        "white": 148165,
        "black": 121495,
        "hispanic": 125940,
        "asian": 155573,
        "multi": 136312
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "Palette",
        "color": "text-emerald-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-industrial-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "solar-energy-installer",
    "name": "Solar Energy Installer",
    "sector": "Energy & Utilities",
    "base": 39978,
    "demand": "Moderate",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 39978,
        "black": 32782,
        "hispanic": 33981,
        "asian": 41977,
        "multi": 36780
      },
      {
        "year": "5",
        "white": 46940,
        "black": 38491,
        "hispanic": 39899,
        "asian": 49287,
        "multi": 43185
      },
      {
        "year": "10",
        "white": 57372,
        "black": 47045,
        "hispanic": 48766,
        "asian": 60240,
        "multi": 52782
      },
      {
        "year": "15",
        "white": 70122,
        "black": 57500,
        "hispanic": 59604,
        "asian": 73628,
        "multi": 64512
      },
      {
        "year": "20",
        "white": 85705,
        "black": 70278,
        "hispanic": 72849,
        "asian": 89991,
        "multi": 78849
      },
      {
        "year": "25",
        "white": 104752,
        "black": 85897,
        "hispanic": 89039,
        "asian": 109990,
        "multi": 96372
      },
      {
        "year": "30",
        "white": 128031,
        "black": 104986,
        "hispanic": 108827,
        "asian": 134433,
        "multi": 117789
      },
      {
        "year": "35",
        "white": 156484,
        "black": 128317,
        "hispanic": 133012,
        "asian": 164308,
        "multi": 143966
      },
      {
        "year": "40",
        "white": 191260,
        "black": 156834,
        "hispanic": 162571,
        "asian": 200823,
        "multi": 175960
      }
    ],
    "aptitude": "Requires specialized training in electrical systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Electrical field.",
        "icon": "Brain",
        "color": "text-blue-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-pink-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "telecom-installer-tech",
    "name": "Telecom Tech",
    "sector": "Energy & Utilities",
    "base": 43851,
    "demand": "Very High",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 43851,
        "black": 35958,
        "hispanic": 37273,
        "asian": 46044,
        "multi": 40343
      },
      {
        "year": "5",
        "white": 48595,
        "black": 39848,
        "hispanic": 41306,
        "asian": 51025,
        "multi": 44708
      },
      {
        "year": "10",
        "white": 55254,
        "black": 45308,
        "hispanic": 46966,
        "asian": 58017,
        "multi": 50834
      },
      {
        "year": "15",
        "white": 62825,
        "black": 51516,
        "hispanic": 53401,
        "asian": 65966,
        "multi": 57799
      },
      {
        "year": "20",
        "white": 71433,
        "black": 58575,
        "hispanic": 60718,
        "asian": 75005,
        "multi": 65718
      },
      {
        "year": "25",
        "white": 81221,
        "black": 66601,
        "hispanic": 69038,
        "asian": 85282,
        "multi": 74723
      },
      {
        "year": "30",
        "white": 92350,
        "black": 75727,
        "hispanic": 78497,
        "asian": 96967,
        "multi": 84962
      },
      {
        "year": "35",
        "white": 105004,
        "black": 86103,
        "hispanic": 89253,
        "asian": 110254,
        "multi": 96604
      },
      {
        "year": "40",
        "white": 119392,
        "black": 97901,
        "hispanic": 101483,
        "asian": 125361,
        "multi": 109840
      }
    ],
    "aptitude": "Requires specialized training in electrical systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Electrical field.",
        "icon": "Hammer",
        "color": "text-pink-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-red-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "tool-and-die-apprentice",
    "name": "Tool & Die Apprentice",
    "sector": "Industrial & Manufacturing",
    "base": 43275,
    "demand": "Very High",
    "growth": "2%",
    "payGrowth": [
      {
        "year": "1",
        "white": 43275,
        "black": 35486,
        "hispanic": 36784,
        "asian": 45439,
        "multi": 39813
      },
      {
        "year": "5",
        "white": 47427,
        "black": 38890,
        "hispanic": 40313,
        "asian": 49798,
        "multi": 43633
      },
      {
        "year": "10",
        "white": 53181,
        "black": 43609,
        "hispanic": 45204,
        "asian": 55840,
        "multi": 48927
      },
      {
        "year": "15",
        "white": 59634,
        "black": 48900,
        "hispanic": 50689,
        "asian": 62615,
        "multi": 54863
      },
      {
        "year": "20",
        "white": 66869,
        "black": 54833,
        "hispanic": 56839,
        "asian": 70213,
        "multi": 61520
      },
      {
        "year": "25",
        "white": 74982,
        "black": 61486,
        "hispanic": 63735,
        "asian": 78732,
        "multi": 68984
      },
      {
        "year": "30",
        "white": 84080,
        "black": 68946,
        "hispanic": 71468,
        "asian": 88284,
        "multi": 77354
      },
      {
        "year": "35",
        "white": 94282,
        "black": 77311,
        "hispanic": 80139,
        "asian": 98996,
        "multi": 86739
      },
      {
        "year": "40",
        "white": 105721,
        "black": 86691,
        "hispanic": 89863,
        "asian": 111007,
        "multi": 97263
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "Hammer",
        "color": "text-pink-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-amber-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "utility-worker",
    "name": "Utility Worker",
    "sector": "Environment",
    "base": 74132,
    "demand": "Critical",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 74132,
        "black": 60788,
        "hispanic": 63012,
        "asian": 77839,
        "multi": 68201
      },
      {
        "year": "5",
        "white": 84472,
        "black": 69267,
        "hispanic": 71801,
        "asian": 88695,
        "multi": 77714
      },
      {
        "year": "10",
        "white": 99448,
        "black": 81547,
        "hispanic": 84531,
        "asian": 104420,
        "multi": 91492
      },
      {
        "year": "15",
        "white": 117079,
        "black": 96005,
        "hispanic": 99517,
        "asian": 122933,
        "multi": 107713
      },
      {
        "year": "20",
        "white": 137836,
        "black": 113025,
        "hispanic": 117160,
        "asian": 144727,
        "multi": 126809
      },
      {
        "year": "25",
        "white": 162272,
        "black": 133063,
        "hispanic": 137932,
        "asian": 170386,
        "multi": 149291
      },
      {
        "year": "30",
        "white": 191042,
        "black": 156654,
        "hispanic": 162385,
        "asian": 200594,
        "multi": 175758
      },
      {
        "year": "35",
        "white": 224911,
        "black": 184427,
        "hispanic": 191174,
        "asian": 236157,
        "multi": 206918
      },
      {
        "year": "40",
        "white": 264785,
        "black": 217124,
        "hispanic": 225068,
        "asian": 278025,
        "multi": 243603
      }
    ],
    "aptitude": "Requires specialized training in environment systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Environment field.",
        "icon": "ShieldCheck",
        "color": "text-amber-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-pink-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "valve-repairer",
    "name": "Valve Repairer",
    "sector": "Industrial & Manufacturing",
    "base": 64598,
    "demand": "Critical",
    "growth": "1%",
    "payGrowth": [
      {
        "year": "1",
        "white": 64598,
        "black": 52970,
        "hispanic": 54908,
        "asian": 67828,
        "multi": 59430
      },
      {
        "year": "5",
        "white": 69859,
        "black": 57284,
        "hispanic": 59380,
        "asian": 73352,
        "multi": 64270
      },
      {
        "year": "10",
        "white": 77042,
        "black": 63174,
        "hispanic": 65485,
        "asian": 80894,
        "multi": 70878
      },
      {
        "year": "15",
        "white": 84963,
        "black": 69670,
        "hispanic": 72218,
        "asian": 89211,
        "multi": 78166
      },
      {
        "year": "20",
        "white": 93699,
        "black": 76833,
        "hispanic": 79644,
        "asian": 98384,
        "multi": 86203
      },
      {
        "year": "25",
        "white": 103333,
        "black": 84733,
        "hispanic": 87833,
        "asian": 108499,
        "multi": 95066
      },
      {
        "year": "30",
        "white": 113957,
        "black": 93445,
        "hispanic": 96863,
        "asian": 119655,
        "multi": 104840
      },
      {
        "year": "35",
        "white": 125674,
        "black": 103052,
        "hispanic": 106823,
        "asian": 131957,
        "multi": 115620
      },
      {
        "year": "40",
        "white": 138595,
        "black": 113648,
        "hispanic": 117806,
        "asian": 145525,
        "multi": 127508
      }
    ],
    "aptitude": "Requires specialized training in industrial systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Industrial field.",
        "icon": "CheckCircle2",
        "color": "text-pink-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-industrial-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "welder-apprentice",
    "name": "Welder Apprentice",
    "sector": "Construction",
    "base": 65885,
    "demand": "High",
    "growth": "3%",
    "payGrowth": [
      {
        "year": "1",
        "white": 65885,
        "black": 54026,
        "hispanic": 56002,
        "asian": 69179,
        "multi": 60614
      },
      {
        "year": "5",
        "white": 74603,
        "black": 61175,
        "hispanic": 63413,
        "asian": 78334,
        "multi": 68635
      },
      {
        "year": "10",
        "white": 87141,
        "black": 71456,
        "hispanic": 74070,
        "asian": 91498,
        "multi": 80170
      },
      {
        "year": "15",
        "white": 101786,
        "black": 83465,
        "hispanic": 86518,
        "asian": 106876,
        "multi": 93643
      },
      {
        "year": "20",
        "white": 118893,
        "black": 97492,
        "hispanic": 101059,
        "asian": 124837,
        "multi": 109381
      },
      {
        "year": "25",
        "white": 138874,
        "black": 113877,
        "hispanic": 118043,
        "asian": 145818,
        "multi": 127764
      },
      {
        "year": "30",
        "white": 162213,
        "black": 133015,
        "hispanic": 137881,
        "asian": 170324,
        "multi": 149236
      },
      {
        "year": "35",
        "white": 189475,
        "black": 155369,
        "hispanic": 161054,
        "asian": 198949,
        "multi": 174317
      },
      {
        "year": "40",
        "white": 221318,
        "black": 181481,
        "hispanic": 188120,
        "asian": 232384,
        "multi": 203613
      }
    ],
    "aptitude": "Requires specialized training in construction systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Construction field.",
        "icon": "Baby",
        "color": "text-industrial-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-emerald-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  },
  {
    "id": "yard-worker-lumber",
    "name": "Lumber Yard Worker",
    "sector": "Service",
    "base": 74195,
    "demand": "Moderate",
    "growth": "4%",
    "payGrowth": [
      {
        "year": "1",
        "white": 74195,
        "black": 60840,
        "hispanic": 63066,
        "asian": 77905,
        "multi": 68259
      },
      {
        "year": "5",
        "white": 87366,
        "black": 71640,
        "hispanic": 74261,
        "asian": 91734,
        "multi": 80376
      },
      {
        "year": "10",
        "white": 107164,
        "black": 87874,
        "hispanic": 91089,
        "asian": 112522,
        "multi": 98591
      },
      {
        "year": "15",
        "white": 131448,
        "black": 107788,
        "hispanic": 111731,
        "asian": 138021,
        "multi": 120932
      },
      {
        "year": "20",
        "white": 161236,
        "black": 132213,
        "hispanic": 137051,
        "asian": 169298,
        "multi": 148337
      },
      {
        "year": "25",
        "white": 197774,
        "black": 162175,
        "hispanic": 168108,
        "asian": 207663,
        "multi": 181952
      },
      {
        "year": "30",
        "white": 242592,
        "black": 198925,
        "hispanic": 206203,
        "asian": 254721,
        "multi": 223184
      },
      {
        "year": "35",
        "white": 297566,
        "black": 244004,
        "hispanic": 252931,
        "asian": 312444,
        "multi": 273761
      },
      {
        "year": "40",
        "white": 364998,
        "black": 299298,
        "hispanic": 310248,
        "asian": 383248,
        "multi": 335798
      }
    ],
    "aptitude": "Requires specialized training in service systems, attention to detail, and practical problem solving skills.",
    "competencies": [
      {
        "title": "Technical Logic",
        "desc": "Mastery of systems within the Service field.",
        "icon": "Wind",
        "color": "text-orange-500"
      },
      {
        "title": "Precision",
        "desc": "Highly detailed manual work and accuracy.",
        "icon": "Target",
        "color": "text-emerald-500"
      },
      {
        "title": "Safety",
        "desc": "Following strict industry protocols and standards.",
        "icon": "ShieldCheck",
        "color": "text-emerald-500"
      }
    ]
  }
];

export const DEMAND_DATA = [
  {
    "id": "AL",
    "name": "Alabama",
    "demand": 68,
    "setting": "Mixed",
    "source": "Alabama Dept. of Labor",
    "topTrade": "it-support-specialist",
    "col": "Low",
    "union": "Moderate",
    "licensing": 2,
    "grants": "Active"
  },
  {
    "id": "AK",
    "name": "Alaska",
    "demand": 42,
    "setting": "Mostly Rural",
    "source": "Alaska Dept. of Labor",
    "topTrade": "aircraft-tech",
    "col": "High",
    "union": "Strong",
    "licensing": 3,
    "grants": "Active"
  },
  {
    "id": "AZ",
    "name": "Arizona",
    "demand": 84,
    "setting": "Mostly Urban",
    "source": "Arizona Office of Economic Opportunity",
    "topTrade": "automotive-technician",
    "col": "Moderate",
    "union": "Growing",
    "licensing": 2,
    "grants": "N/A"
  },
  {
    "id": "AR",
    "name": "Arkansas",
    "demand": 58,
    "setting": "Mostly Rural",
    "source": "Arkansas Division of Workforce Services",
    "topTrade": "hvac",
    "col": "Low",
    "union": "Moderate",
    "licensing": 2,
    "grants": "Active"
  },
  {
    "id": "CA",
    "name": "California",
    "demand": 95,
    "setting": "Mostly Urban",
    "source": "California Employment Development Dept.",
    "topTrade": "welder",
    "col": "High",
    "union": "Strong",
    "licensing": 4,
    "grants": "Active"
  },
  {
    "id": "CO",
    "name": "Colorado",
    "demand": 82,
    "setting": "Mostly Urban",
    "source": "Colorado Dept. of Labor and Employment",
    "topTrade": "automotive-technician",
    "col": "Moderate",
    "union": "Moderate",
    "licensing": 3,
    "grants": "Active"
  },
  {
    "id": "CT",
    "name": "Connecticut",
    "demand": 64,
    "setting": "Mostly Urban",
    "source": "Connecticut Dept. of Labor",
    "topTrade": "hvac",
    "col": "High",
    "union": "Strong",
    "licensing": 4,
    "grants": "Active"
  },
  {
    "id": "DE",
    "name": "Delaware",
    "demand": 55,
    "setting": "Mixed",
    "source": "Delaware Dept. of Labor",
    "topTrade": "aircraft-tech",
    "col": "Moderate",
    "union": "Moderate",
    "licensing": 2,
    "grants": "N/A"
  },
  {
    "id": "FL",
    "name": "Florida",
    "demand": 92,
    "setting": "Mostly Urban",
    "source": "Florida Dept. of Economic Opportunity",
    "topTrade": "LPN",
    "col": "Moderate",
    "union": "Growing",
    "licensing": 3,
    "grants": "Active"
  },
  {
    "id": "GA",
    "name": "Georgia",
    "demand": 88,
    "setting": "Mixed",
    "source": "Georgia Dept. of Labor",
    "topTrade": "LPN",
    "col": "Low",
    "union": "Moderate",
    "licensing": 2,
    "grants": "Active"
  },
  {
    "id": "HI",
    "name": "Hawaii",
    "demand": 48,
    "setting": "Mostly Urban",
    "source": "Hawaii Dept. of Labor and Industrial Relations",
    "topTrade": "Aircraft Tech",
    "col": "High",
    "union": "Moderate",
    "licensing": 4,
    "grants": "N/A"
  },
  {
    "id": "ID",
    "name": "Idaho",
    "demand": 62,
    "setting": "Mostly Rural",
    "source": "Idaho Dept. of Labor",
    "topTrade": "Machinist",
    "col": "Low",
    "union": "Growing",
    "licensing": 2,
    "grants": "Active"
  },
  {
    "id": "IL",
    "name": "Illinois",
    "demand": 85,
    "setting": "Mostly Urban",
    "source": "Illinois Dept. of Employment Security",
    "topTrade": "Plumber",
    "col": "Moderate",
    "union": "Strong",
    "licensing": 4,
    "grants": "Active"
  },
  {
    "id": "IN",
    "name": "Indiana",
    "demand": 78,
    "setting": "Mixed",
    "source": "Indiana Dept. of Workforce Development",
    "topTrade": "Machinist",
    "col": "Low",
    "union": "Strong",
    "licensing": 2,
    "grants": "Active"
  },
  {
    "id": "IA",
    "name": "Iowa",
    "demand": 65,
    "setting": "Mostly Rural",
    "source": "Iowa Workforce Development",
    "topTrade": "LPN",
    "col": "Low",
    "union": "Moderate",
    "licensing": 2,
    "grants": "Active"
  },
  {
    "id": "KS",
    "name": "Kansas",
    "demand": 61,
    "setting": "Mostly Rural",
    "source": "Kansas Dept. of Labor",
    "topTrade": "LPN"
  },
  {
    "id": "KY",
    "name": "Kentucky",
    "demand": 72,
    "setting": "Mixed",
    "source": "Kentucky Education and Labor Cabinet",
    "topTrade": "Welder"
  },
  {
    "id": "LA",
    "name": "Louisiana",
    "demand": 75,
    "setting": "Mixed",
    "source": "Louisiana Workforce Commission",
    "topTrade": "Welder"
  },
  {
    "id": "ME",
    "name": "Maine",
    "demand": 52,
    "setting": "Mostly Rural",
    "source": "Maine Dept. of Labor",
    "topTrade": "HVAC Technician"
  },
  {
    "id": "MD",
    "name": "Maryland",
    "demand": 79,
    "HP": "Mostly Urban",
    "source": "Maryland Dept. of Labor",
    "topTrade": "Electrician"
  },
  {
    "id": "MA",
    "name": "Massachusetts",
    "demand": 86,
    "setting": "Mostly Urban",
    "source": "Massachusetts Executive Office of Labor",
    "topTrade": "HVAC Technician"
  },
  {
    "id": "MI",
    "name": "Michigan",
    "demand": 89,
    "setting": "Mixed",
    "source": "Michigan Dept. of Labor and Economic Opportunity",
    "topTrade": "HVAC Technician"
  },
  {
    "id": "MN",
    "name": "Minnesota",
    "demand": 74,
    "setting": "Mixed",
    "source": "Minnesota Dept. of Employment and Economic Development",
    "topTrade": "Auto Tech"
  },
  {
    "id": "MS",
    "name": "Mississippi",
    "demand": 60,
    "setting": "Mostly Rural",
    "source": "Mississippi Dept. of Employment Security",
    "topTrade": "Plumber"
  },
  {
    "id": "MO",
    "name": "Missouri",
    "demand": 71,
    "setting": "Mixed",
    "source": "Missouri Dept. of Higher Education & Workforce Development",
    "topTrade": "Welder"
  },
  {
    "id": "MT",
    "name": "Montana",
    "demand": 45,
    "setting": "Mostly Rural",
    "source": "Montana Dept. of Labor & Industry",
    "topTrade": "LPN"
  },
  {
    "id": "NE",
    "name": "Nebraska",
    "demand": 59,
    "setting": "Mostly Rural",
    "source": "Nebraska Dept. of Labor",
    "topTrade": "Machinist"
  },
  {
    "id": "NV",
    "name": "Nevada",
    "demand": 80,
    "setting": "Mostly Urban",
    "source": "Nevada Dept. of Employment, Training and Rehabilitation",
    "topTrade": "Plumber"
  },
  {
    "id": "NH",
    "name": "New Hampshire",
    "demand": 56,
    "setting": "Mixed",
    "source": "New Hampshire Employment Security",
    "topTrade": "LPN"
  },
  {
    "id": "NJ",
    "name": "New Jersey",
    "demand": 87,
    "setting": "Mostly Urban",
    "source": "New Jersey Dept. of Labor and Workforce Development",
    "topTrade": "Plumber"
  },
  {
    "id": "NM",
    "name": "New Mexico",
    "demand": 63,
    "setting": "Mostly Rural",
    "source": "New Mexico Dept. of Workforce Solutions",
    "topTrade": "Auto Tech"
  },
  {
    "id": "NY",
    "name": "New York",
    "demand": 94,
    "setting": "Mostly Urban",
    "source": "New York Dept. of Labor",
    "topTrade": "HVAC Technician",
    "col": "High",
    "union": "Strong",
    "licensing": 4,
    "grants": "Active"
  },
  {
    "id": "NC",
    "name": "North Carolina",
    "demand": 83,
    "setting": "Mixed",
    "source": "North Carolina Dept. of Commerce",
    "topTrade": "Aircraft Tech"
  },
  {
    "id": "ND",
    "name": "North Dakota",
    "demand": 41,
    "setting": "Mostly Rural",
    "source": "North Dakota Job Service",
    "topTrade": "LPN"
  },
  {
    "id": "OH",
    "name": "Ohio",
    "demand": 88,
    "setting": "Mixed",
    "source": "Ohio Dept. of Job and Family Services",
    "topTrade": "IT Specialist"
  },
  {
    "id": "OK",
    "name": "Oklahoma",
    "demand": 67,
    "setting": "Mixed",
    "source": "Oklahoma Employment Security Commission",
    "topTrade": "Electrician"
  },
  {
    "id": "OR",
    "name": "Oregon",
    "demand": 76,
    "setting": "Mixed",
    "source": "Oregon Employment Dept.",
    "topTrade": "Welder"
  },
  {
    "id": "PA",
    "name": "Pennsylvania",
    "demand": 90,
    "setting": "Mixed",
    "source": "Pennsylvania Dept. of Labor & Industry",
    "topTrade": "Plumber"
  },
  {
    "id": "RI",
    "name": "Rhode Island",
    "demand": 53,
    "setting": "Mostly Urban",
    "source": "Rhode Island Dept. of Labor and Training",
    "topTrade": "Auto Tech"
  },
  {
    "id": "SC",
    "name": "South Carolina",
    "demand": 81,
    "setting": "Mixed",
    "source": "South Carolina Dept. of Employment and Workforce",
    "topTrade": "Auto Tech"
  },
  {
    "id": "SD",
    "name": "South Dakota",
    "demand": 43,
    "setting": "Mostly Rural",
    "source": "South Dakota Dept. of Labor and Regulation",
    "topTrade": "IT Specialist"
  },
  {
    "id": "TN",
    "name": "Tennessee",
    "demand": 85,
    "setting": "Mixed",
    "source": "Tennessee Dept. of Labor and Workforce Development",
    "topTrade": "Plumber"
  },
  {
    "id": "TX",
    "name": "Texas",
    "demand": 98,
    "setting": "Mostly Urban",
    "source": "Texas Workforce Commission",
    "topTrade": "Electrician"
  },
  {
    "id": "UT",
    "name": "Utah",
    "demand": 77,
    "setting": "Mostly Urban",
    "source": "Utah Dept. of Workforce Services",
    "topTrade": "Plumber"
  },
  {
    "id": "VT",
    "name": "Vermont",
    "demand": 49,
    "setting": "Mostly Rural",
    "source": "Vermont Dept. of Labor",
    "topTrade": "Machinist"
  },
  {
    "id": "VA",
    "name": "Virginia",
    "demand": 84,
    "setting": "Mixed",
    "source": "Virginia Employment Commission",
    "topTrade": "HVAC Technician"
  },
  {
    "id": "WA",
    "name": "Washington",
    "demand": 91,
    "setting": "Mostly Urban",
    "source": "Washington Employment Security Dept.",
    "topTrade": "Electrician"
  },
  {
    "id": "WV",
    "name": "West Virginia",
    "demand": 54,
    "setting": "Mostly Rural",
    "source": "West Virginia Dept. of Commerce",
    "topTrade": "Electrician"
  },
  {
    "id": "WI",
    "name": "Wisconsin",
    "demand": 79,
    "setting": "Mixed",
    "source": "Wisconsin Dept. of Workforce Development",
    "topTrade": "Welder"
  },
  {
    "id": "WY",
    "name": "Wyoming",
    "demand": 40,
    "setting": "Mostly Rural",
    "source": "Wyoming Dept. of Workforce Services",
    "topTrade": "IT Specialist"
  }
];

export const SCHOOLS = [
{
    "id": 1,
    "name": "Northwest Technical Institute",
    "location": "Springdale, AR",
    "state": "AR",
    "region": "South",
    "trade": "electrician",
    "tuition": 8500,
    "type": "Public",
    "status": "Non-profit",
    "duration": "18 months",
    "image": "/images/schools/technical_institute_campus_1773771874999.png",
    "url": "https://www.nwti.edu/"
  },
{
    "id": 2,
    "name": "Apex Technical School",
    "location": "Long Island City, NY",
    "state": "NY",
    "region": "Northeast",
    "trade": "hvac",
    "tuition": 12000,
    "type": "Private",
    "status": "Profit",
    "duration": "7 months",
    "image": "/images/schools/general_trades_center_1773771944263.png",
    "url": "https://apexschool.com/"
  },
{
    "id": 3,
    "name": "Tulsa Welding School",
    "location": "Tulsa, OK",
    "state": "OK",
    "region": "South",
    "trade": "welder",
    "tuition": 15500,
    "type": "Private",
    "status": "Profit",
    "duration": "10 months",
    "image": "/images/schools/welding_training_lab_1773771911612.png",
    "url": "https://www.tws.edu/"
  },
{
    "id": 4,
    "name": "Texas State Technical College",
    "location": "Waco, TX",
    "state": "TX",
    "region": "South",
    "trade": "electrician",
    "tuition": 6200,
    "type": "Public",
    "status": "Non-profit",
    "duration": "20 months",
    "image": "/images/schools/aviation_training_center_1773771891126.png",
    "url": "https://www.tstc.edu/"
  },
{
    "id": 5,
    "name": "Universal Technical Institute",
    "location": "Phoenix, AZ",
    "state": "AZ",
    "region": "West",
    "trade": "auto-tech",
    "tuition": 22000,
    "type": "Private",
    "status": "Profit",
    "duration": "12 months",
    "image": "/images/schools/solar_energy_academy_1773771923823.png",
    "url": "https://www.uti.edu/"
  },
{
    "id": 6,
    "name": "IBEW Local 1 Apprenticeship",
    "location": "St. Louis, MO",
    "state": "MO",
    "region": "Midwest",
    "trade": "electrician",
    "tuition": 0,
    "type": "Apprenticeship",
    "status": "Joint Labor-Management",
    "duration": "5 years",
    "image": "/images/schools/electrician_training_lab_premium_1773773106054.png",
    "url": "https://www.ibew.org/"
  },
{
    "id": 7,
    "name": "Lincoln Tech",
    "location": "Denver, CO",
    "state": "CO",
    "region": "West",
    "trade": "hvac",
    "tuition": 18000,
    "type": "Private",
    "status": "Profit",
    "duration": "9 months",
    "image": "/images/schools/hvac_lab_training_premium_1773773122562.png",
    "url": "https://www.lincolntech.edu/denver"
  },
{
    "id": 8,
    "name": "Aviation Institute of Maintenance",
    "location": "Atlanta, GA",
    "state": "GA",
    "region": "South",
    "trade": "aircraft-tech",
    "tuition": 28000,
    "type": "Private",
    "status": "Profit",
    "duration": "21 months",
    "image": "/images/schools/aircraft_maintenance_hangar_premium_1773773137195.png",
    "url": "https://www.aviationmaintenance.edu"
  },
{
    "id": 9,
    "name": "New York Institute of Technology",
    "location": "New York, NY",
    "state": "NY",
    "region": "Northeast",
    "trade": "it-specialist",
    "tuition": 28000,
    "type": "Private",
    "status": "Non-profit",
    "duration": "24 months",
    "image": "/images/schools/data_center_training_premium_1773773156352.png",
    "url": "https://www.nyit.edu"
  },
{
    "id": 10,
    "name": "Northeastern University",
    "location": "Boston, MA",
    "state": "MA",
    "region": "Northeast",
    "trade": "it-specialist",
    "tuition": 32000,
    "type": "Private",
    "status": "Non-profit",
    "duration": "12 months",
    "image": "/images/schools/data_center_training_premium_1773773156352.png",
    "url": "https://www.northeastern.edu"
  },
{
    "id": 11,
    "name": "Miami Dade College",
    "location": "Miami, FL",
    "state": "FL",
    "region": "South",
    "trade": "electrician",
    "tuition": 4500,
    "type": "Public",
    "status": "Non-profit",
    "duration": "24 months",
    "image": "/images/schools/electrician_training_lab_premium_1773773106054.png",
    "url": "https://www.mdc.edu"
  },
{
    "id": 12,
    "name": "Lake Area Technical College",
    "location": "Watertown, SD",
    "state": "SD",
    "region": "Midwest",
    "trade": "welder",
    "tuition": 7800,
    "type": "Public",
    "status": "Non-profit",
    "duration": "18 months",
    "image": "/images/schools/welding_training_lab_1773771911612.png",
    "url": "https://www.lakeareatech.edu"
  },
{
    "id": 13,
    "name": "Western Technical College",
    "location": "El Paso, TX",
    "state": "TX",
    "region": "South",
    "trade": "hvac",
    "tuition": 14000,
    "type": "Private",
    "status": "Profit",
    "duration": "12 months",
    "image": "/images/schools/hvac_lab_training_premium_1773773122562.png",
    "url": "https://www.westerntech.edu"
  },
{
    "id": 14,
    "name": "Oregon Institute of Technology",
    "location": "Klamath Falls, OR",
    "state": "OR",
    "region": "West",
    "trade": "it-specialist",
    "tuition": 11500,
    "type": "Public",
    "status": "Non-profit",
    "duration": "4 years",
    "image": "/images/schools/data_center_training_premium_1773773156352.png",
    "url": "https://www.oit.edu"
  },
{
    "id": 15,
    "name": "De Anza College",
    "location": "Cupertino, CA",
    "state": "CA",
    "region": "West",
    "trade": "machinist",
    "tuition": 3200,
    "type": "Public",
    "status": "Non-profit",
    "duration": "24 months",
    "image": "/images/schools/machinist_training_lab_premium_1773773194026.png",
    "url": "https://www.deanza.edu"
  },
{
    "id": 16,
    "name": "Atlantic Technical College",
    "location": "Coconut Creek, FL",
    "state": "FL",
    "region": "South",
    "trade": "lpn",
    "tuition": 6000,
    "type": "Public",
    "status": "Non-profit",
    "duration": "12 months",
    "image": "/images/schools/modern_trade_school_campus_premium_1773773169781.png",
    "url": "https://www.atlantictechnicalcollege.edu"
  },
{
    "id": 17,
    "name": "Hennepin Technical College",
    "location": "Brooklyn Park, MN",
    "state": "MN",
    "region": "Midwest",
    "trade": "machinist",
    "tuition": 5800,
    "type": "Public",
    "status": "Non-profit",
    "duration": "24 months",
    "image": "/images/schools/modern_trade_school_campus_premium_1773773169781.png",
    "url": "https://hennepintech.edu"
  },
{
    "id": 18,
    "name": "Stevens Institute of Technology",
    "location": "Hoboken, NJ",
    "state": "NJ",
    "region": "Northeast",
    "trade": "it-specialist",
    "tuition": 38000,
    "type": "Private",
    "status": "Non-profit",
    "duration": "12 months",
    "image": "/images/schools/modern_trade_school_campus_premium_1773773169781.png",
    "url": "https://www.stevens.edu"
  },
{
    "id": 19,
    "name": "Forsyth Tech Community College",
    "location": "Winston-Salem, NC",
    "state": "NC",
    "region": "South",
    "trade": "it-specialist",
    "tuition": 4200,
    "type": "Public",
    "status": "Non-profit",
    "duration": "24 months",
    "image": "/images/schools/modern_trade_school_campus_premium_1773773169781.png",
    "url": "https://www.forsythtech.edu"
  },
{
    "id": 20,
    "name": "Tulsa Welding School",
    "location": "Houston, TX",
    "state": "TX",
    "region": "South",
    "trade": "welder",
    "tuition": 16800,
    "type": "Private",
    "status": "Profit",
    "duration": "7 months",
    "image": "/images/schools/modern_trade_school_campus_premium_1773773169781.png",
    "url": "https://www.tws.edu"
  },
{
    "id": 21,
    "name": "Plumbers Local 1 Training Center",
    "location": "Long Island City, NY",
    "state": "NY",
    "region": "Northeast",
    "trade": "plumber",
    "tuition": 0,
    "type": "Apprenticeship",
    "status": "Joint Labor-Management",
    "duration": "5 years",
    "image": "/images/schools/modern_trade_school_campus_premium_1773773169781.png",
    "url": "https://www.plumberslocaltrainingcenter.edu"
  },
{
    "id": 22,
    "name": "California Institute of Arts",
    "location": "Valencia, CA",
    "state": "CA",
    "region": "West",
    "trade": "landscape-arch",
    "tuition": 45000,
    "type": "Private",
    "status": "Non-profit",
    "duration": "4 years",
    "image": "/images/schools/modern_trade_school_campus_premium_1773773169781.png",
    "url": "https://www.californiainstituteofarts.edu"
  },
{
    "id": 23,
    "name": "Johnson & Wales University",
    "location": "Providence, RI",
    "state": "RI",
    "region": "Northeast",
    "trade": "chef",
    "tuition": 32000,
    "type": "Private",
    "status": "Non-profit",
    "duration": "2 years",
    "image": "/images/schools/modern_trade_school_campus_premium_1773773169781.png",
    "url": "https://www.johnsonwalesuniversity.edu"
  },
{
    "id": 24,
    "name": "Ranken Technical College",
    "location": "St. Louis, MO",
    "state": "MO",
    "region": "Midwest",
    "trade": "carpenter",
    "tuition": 14500,
    "type": "Private",
    "status": "Non-profit",
    "duration": "2 years",
    "image": "/images/schools/modern_trade_school_campus_premium_1773773169781.png",
    "url": "https://www.rankentechnicalcollege.edu"
  },
{
    "id": 25,
    "name": "CET San Jose",
    "location": "San Jose, CA",
    "state": "CA",
    "region": "West",
    "trade": "electrician",
    "tuition": 14000,
    "type": "Private",
    "status": "Non-profit",
    "duration": "9 months",
    "image": "/images/schools/modern_trade_school_campus_premium_1773773169781.png",
    "url": "https://www.cetsanjose.edu"
  },
{
    "id": 26,
    "name": "I-TAP Electrical Trainee",
    "location": "Sacramento, CA",
    "state": "CA",
    "region": "West",
    "trade": "electrician",
    "tuition": 18795,
    "type": "Private",
    "status": "Profit",
    "duration": "26 weeks",
    "image": "/images/schools/modern_trade_school_campus_premium_1773773169781.png",
    "url": "https://www.itapelectricaltrainee.edu"
  },
{
    "id": 27,
    "name": "Midwest Technical Institute",
    "location": "Springfield, IL",
    "state": "IL",
    "region": "Midwest",
    "trade": "welder",
    "tuition": 15800,
    "type": "Private",
    "status": "Profit",
    "duration": "7 months",
    "image": "/images/schools/modern_trade_school_campus_premium_1773773169781.png",
    "url": "https://www.midwesttechnicalinstitute.edu"
  },
{
    "id": 28,
    "name": "Dallas College Eastfield",
    "location": "Dallas, TX",
    "state": "TX",
    "region": "South",
    "trade": "welder",
    "tuition": 1188,
    "type": "Public",
    "status": "Non-profit",
    "duration": "4 months",
    "image": "/images/schools/modern_trade_school_campus_premium_1773773169781.png",
    "url": "https://www.dallascollegeeastfield.edu"
  },
{
    "id": 29,
    "name": "UEI College",
    "location": "Morrow, GA",
    "state": "GA",
    "region": "South",
    "trade": "auto-tech",
    "tuition": 19500,
    "type": "Private",
    "status": "Profit",
    "duration": "10 months",
    "image": "/images/schools/modern_trade_school_campus_premium_1773773169781.png",
    "url": "https://www.ueicollege.edu"
  },
{
    "id": 30,
    "name": "Florida Health Care Academy",
    "location": "Orlando, FL",
    "state": "FL",
    "region": "South",
    "trade": "lpn",
    "tuition": 6550,
    "type": "Private",
    "status": "Profit",
    "duration": "6 months",
    "image": "/images/schools/modern_trade_school_campus_premium_1773773169781.png",
    "url": "https://www.floridahealthcareacademy.edu"
  },
{
    "id": 31,
    "name": "160 Driving Academy",
    "location": "Chicago, IL",
    "state": "IL",
    "region": "Midwest",
    "trade": "heavy-eq-op",
    "tuition": 4500,
    "type": "Private",
    "status": "Profit",
    "duration": "4 weeks",
    "image": "/images/schools/modern_trade_school_campus_premium_1773773169781.png",
    "url": "https://www.drivingacademy.edu"
  },
{
    "id": 32,
    "name": "Katlaw Truck Driving",
    "location": "Austell, GA",
    "state": "GA",
    "region": "South",
    "trade": "heavy-eq-op",
    "tuition": 2295,
    "type": "Private",
    "status": "Profit",
    "duration": "2 weeks",
    "image": "/images/schools/modern_trade_school_campus_premium_1773773169781.png",
    "url": "https://www.katlawtruckdriving.edu"
  },
{
    "id": 33,
    "name": "Fortis College",
    "location": "Smyrna, GA",
    "state": "GA",
    "region": "South",
    "trade": "lpn",
    "tuition": 15000,
    "type": "Private",
    "status": "Profit",
    "duration": "15 months",
    "image": "/images/schools/modern_trade_school_campus_premium_1773773169781.png",
    "url": "https://www.fortiscollege.edu"
  },
{
    "id": 34,
    "name": "New England Institute of Technology",
    "location": "East Greenwich, RI",
    "state": "RI",
    "region": "Northeast",
    "trade": "machinist",
    "tuition": 28000,
    "type": "Private",
    "status": "Non-profit",
    "duration": "18 months",
    "image": "/images/schools/modern_trade_school_campus_premium_1773773169781.png",
    "url": "https://www.newenglandinstituteoftechnology.edu"
  },
{
    "id": 35,
    "name": "North American Trade Schools",
    "location": "Baltimore, MD",
    "state": "MD",
    "region": "Northeast",
    "trade": "hvac",
    "tuition": 16000,
    "type": "Private",
    "status": "Profit",
    "duration": "9 months",
    "image": "/images/schools/modern_trade_school_campus_premium_1773773169781.png",
    "url": "https://www.northamericantradeschools.edu"
  },
{
    "id": 36,
    "name": "Western Technical College",
    "location": "El Paso, TX",
    "state": "TX",
    "region": "South",
    "trade": "auto-tech",
    "tuition": 18000,
    "type": "Private",
    "status": "Profit",
    "duration": "12 months",
    "image": "/images/schools/modern_trade_school_campus_premium_1773773169781.png",
    "url": "https://www.westerntechnicalcollege.edu"
  },
{
    "id": 37,
    "name": "Associated Builders and Contractors",
    "location": "Houston, TX",
    "state": "TX",
    "region": "South",
    "trade": "electrician",
    "tuition": 0,
    "type": "Apprenticeship",
    "status": "Non-profit",
    "duration": "4 years",
    "image": "/images/schools/modern_trade_school_campus_premium_1773773169781.png",
    "url": "https://www.associatedbuildersandcontractors.edu"
  },
{
    "id": 38,
    "name": "Community College of Denver",
    "location": "Denver, CO",
    "state": "CO",
    "region": "West",
    "trade": "carpenter",
    "tuition": 4500,
    "type": "Public",
    "status": "Non-profit",
    "duration": "2 years",
    "image": "/images/schools/modern_trade_school_campus_premium_1773773169781.png",
    "url": "https://www.communitycollegeofdenver.edu"
  },
{
    "id": 39,
    "name": "GateWay Community College",
    "location": "Phoenix, AZ",
    "state": "AZ",
    "region": "West",
    "trade": "plumber",
    "tuition": 3800,
    "type": "Public",
    "status": "Non-profit",
    "duration": "1 year",
    "image": "/images/schools/modern_trade_school_campus_premium_1773773169781.png",
    "url": "https://www.gatewaycommunitycollege.edu"
  },
  {
    "id": 40,
    "name": "Texas State Technical College",
    "location": "Waco, TX",
    "state": "TX",
    "region": "South",
    "trade": "aircraft-tech",
    "tuition": 12000,
    "type": "Public",
    "status": "Non-profit",
    "duration": "20 months",
    "image": "/images/schools/modern_trade_school_campus_premium_1773773169781.png",
    "url": "https://www.tstc.edu"
  },
  {
    "id": 41,
    "name": "Ogden-Weber Technical College",
    "location": "Ogden, UT",
    "state": "UT",
    "region": "West",
    "trade": "machinist",
    "tuition": 4800,
    "type": "Public",
    "status": "Non-profit",
    "duration": "12 months",
    "image": "/images/schools/modern_trade_school_campus_premium_1773773169781.png",
    "url": "https://www.otech.edu"
  },
  {
    "id": 42,
    "name": "Northern Virginia Community College",
    "location": "Annandale, VA",
    "state": "VA",
    "region": "South",
    "trade": "it-specialist",
    "tuition": 5500,
    "type": "Public",
    "status": "Non-profit",
    "duration": "24 months",
    "image": "/images/schools/modern_trade_school_campus_premium_1773773169781.png",
    "url": "https://www.nvcc.edu"
  },
  {
    "id": 43,
    "name": "Tulsa Community College",
    "location": "Tulsa, OK",
    "state": "OK",
    "region": "South",
    "trade": "hvac",
    "tuition": 3800,
    "type": "Public",
    "status": "Non-profit",
    "duration": "24 months",
    "image": "/images/schools/modern_trade_school_campus_premium_1773773169781.png",
    "url": "https://www.tulsacc.edu"
  },
  {
    "id": 44,
    "name": "Ranken Technical College",
    "location": "St. Louis, MO",
    "state": "MO",
    "region": "Midwest",
    "trade": "electrician",
    "tuition": 15500,
    "type": "Private",
    "status": "Non-profit",
    "duration": "24 months",
    "image": "/images/schools/modern_trade_school_campus_premium_1773773169781.png",
    "url": "https://www.ranken.edu"
  },
  {
    "id": 45,
    "name": "Perry Technical Institute",
    "location": "Yakima, WA",
    "state": "WA",
    "region": "West",
    "trade": "wind-tech",
    "tuition": 18500,
    "type": "Private",
    "status": "Non-profit",
    "duration": "12 months",
    "image": "/images/schools/modern_trade_school_campus_premium_1773773169781.png",
    "url": "https://www.perrytech.edu"
  },
  {
    "id": 46,
    "name": "Thaddeus Stevens College",
    "location": "Lancaster, PA",
    "state": "PA",
    "region": "Northeast",
    "trade": "machinist",
    "tuition": 8500,
    "type": "Public",
    "status": "Non-profit",
    "duration": "24 months",
    "image": "/images/schools/modern_trade_school_campus_premium_1773773169781.png",
    "url": "https://stevenscollege.edu"
  },
  {
    "id": 47,
    "name": "San Jose City College",
    "location": "San Jose, CA",
    "state": "CA",
    "region": "West",
    "trade": "electrician",
    "tuition": 1300,
    "type": "Public",
    "status": "Non-profit",
    "duration": "24 months",
    "image": "/images/schools/modern_trade_school_campus_premium_1773773169781.png",
    "url": "https://www.sjcc.edu"
  },
  {
    "id": 48,
    "name": "Oakland Community College",
    "location": "Bloomfield Hills, MI",
    "state": "MI",
    "region": "Midwest",
    "trade": "hvac",
    "tuition": 3500,
    "type": "Public",
    "status": "Non-profit",
    "duration": "18 months",
    "image": "/images/schools/modern_trade_school_campus_premium_1773773169781.png",
    "url": "https://www.oaklandcc.edu"
  },
  {
    "id": 49,
    "name": "Gwinnett Technical College",
    "location": "Lawrenceville, GA",
    "state": "GA",
    "region": "South",
    "trade": "lpn",
    "tuition": 4200,
    "type": "Public",
    "status": "Non-profit",
    "duration": "18 months",
    "image": "/images/schools/modern_trade_school_campus_premium_1773773169781.png",
    "url": "https://gwinnetttech.edu"
  },
  {
    "id": 50,
    "name": "Central Arkansas Electrical Apprenticeship",
    "location": "Little Rock, AR",
    "state": "AR",
    "region": "South",
    "trade": "electrician",
    "tuition": 0,
    "type": "Apprenticeship",
    "status": "Joint Labor-Management",
    "duration": "4 years",
    "image": "/images/schools/electrician_training_lab_premium_1773773106054.png",
    "url": "https://www.apprenticeship.gov/apprenticeship-job-finder?occupation=Electrician&location=Little Rock, AR",
    "source": "Apprenticeship.gov"
  },
  {
    "id": 51,
    "name": "Dallas Metro HVAC Apprenticeship Program",
    "location": "Dallas, TX",
    "state": "TX",
    "region": "South",
    "trade": "hvac",
    "tuition": 0,
    "type": "Apprenticeship",
    "status": "Non-profit",
    "duration": "3 years",
    "image": "/images/schools/hvac_lab_training_premium_1773773122562.png",
    "url": "https://www.apprenticeship.gov/apprenticeship-job-finder?occupation=HVAC&location=Dallas, TX",
    "source": "Apprenticeship.gov"
  },
  {
    "id": 52,
    "name": "Chicago Industrial Welding Apprenticeship",
    "location": "Chicago, IL",
    "state": "IL",
    "region": "Midwest",
    "trade": "welder",
    "tuition": 0,
    "type": "Apprenticeship",
    "status": "Joint Labor-Management",
    "duration": "2 years",
    "image": "/images/schools/welding_training_lab_1773771911612.png",
    "url": "https://www.apprenticeship.gov/apprenticeship-job-finder?occupation=Welder&location=Chicago, IL",
    "source": "Apprenticeship.gov"
  },
  {
    "id": 53,
    "name": "Delta Aviation Avionics Apprenticeship",
    "location": "Atlanta, GA",
    "state": "GA",
    "region": "South",
    "trade": "aircraft-tech",
    "tuition": 0,
    "type": "Apprenticeship",
    "status": "Private/For-Profit",
    "duration": "30 months",
    "image": "/images/schools/aircraft_maintenance_hangar_premium_1773773137195.png",
    "url": "https://www.apprenticeship.gov/apprenticeship-job-finder?occupation=Aircraft Mechanic&location=Atlanta, GA",
    "source": "Apprenticeship.gov"
  },
  {
    "id": 54,
    "name": "Seattle Tech Hub Systems Apprenticeship",
    "location": "Seattle, WA",
    "state": "WA",
    "region": "West",
    "trade": "it-specialist",
    "tuition": 0,
    "type": "Apprenticeship",
    "status": "Non-profit",
    "duration": "18 months",
    "image": "/images/schools/data_center_training_premium_1773773156352.png",
    "url": "https://www.apprenticeship.gov/apprenticeship-job-finder?occupation=IT Specialist&location=Seattle, WA",
    "source": "Apprenticeship.gov"
  }
,
{
  "id": 55,
  "name": "AK Career & Skills Center",
  "location": "Main Campus, AK",
  "state": "AK",
  "region": "South",
  "trade": "plumber",
  "tuition": 3211,
  "type": "Public",
  "status": "Non-profit",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160617?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.akcareerskillscenter.edu"
},
{
  "id": 56,
  "name": "GA Career & Skills Center",
  "location": "Main Campus, GA",
  "state": "GA",
  "region": "South",
  "trade": "landscape-arch",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Profit",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160618?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.gacareerskillscenter.edu"
},
{
  "id": 57,
  "name": "DE Career & Skills Center",
  "location": "Main Campus, DE",
  "state": "DE",
  "region": "South",
  "trade": "carpenter",
  "tuition": 14782,
  "type": "Private",
  "status": "Non-profit",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160619?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.decareerskillscenter.edu"
},
{
  "id": 58,
  "name": "GA Career & Skills Center",
  "location": "Main Campus, GA",
  "state": "GA",
  "region": "South",
  "trade": "lpn",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Joint Labor-Management",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160620?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.gacareerskillscenter.edu"
},
{
  "id": 59,
  "name": "KS Career & Skills Center",
  "location": "Main Campus, KS",
  "state": "KS",
  "region": "South",
  "trade": "heavy-eq-op",
  "tuition": 3153,
  "type": "Public",
  "status": "Joint Labor-Management",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160621?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.kscareerskillscenter.edu"
},
{
  "id": 60,
  "name": "VA Career & Skills Center",
  "location": "Main Campus, VA",
  "state": "VA",
  "region": "South",
  "trade": "heavy-eq-op",
  "tuition": 24684,
  "type": "Public",
  "status": "Non-profit",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160622?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.vacareerskillscenter.edu"
},
{
  "id": 61,
  "name": "LA Career & Skills Center",
  "location": "Main Campus, LA",
  "state": "LA",
  "region": "South",
  "trade": "chef",
  "tuition": 9912,
  "type": "Public",
  "status": "Profit",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160623?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.lacareerskillscenter.edu"
},
{
  "id": 62,
  "name": "SD Career & Skills Center",
  "location": "Main Campus, SD",
  "state": "SD",
  "region": "South",
  "trade": "machinist",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Non-profit",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160624?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.sdcareerskillscenter.edu"
},
{
  "id": 63,
  "name": "NC Career & Skills Center",
  "location": "Main Campus, NC",
  "state": "NC",
  "region": "South",
  "trade": "chef",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Joint Labor-Management",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160625?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.nccareerskillscenter.edu"
},
{
  "id": 64,
  "name": "NM Career & Skills Center",
  "location": "Main Campus, NM",
  "state": "NM",
  "region": "South",
  "trade": "it-specialist",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Joint Labor-Management",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160626?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.nmcareerskillscenter.edu"
},
{
  "id": 65,
  "name": "IA Career & Skills Center",
  "location": "Main Campus, IA",
  "state": "IA",
  "region": "South",
  "trade": "welder",
  "tuition": 9274,
  "type": "Public",
  "status": "Joint Labor-Management",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160627?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.iacareerskillscenter.edu"
},
{
  "id": 66,
  "name": "OH Career & Skills Center",
  "location": "Main Campus, OH",
  "state": "OH",
  "region": "South",
  "trade": "lpn",
  "tuition": 12256,
  "type": "Public",
  "status": "Profit",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160628?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.ohcareerskillscenter.edu"
},
{
  "id": 67,
  "name": "MO Career & Skills Center",
  "location": "Main Campus, MO",
  "state": "MO",
  "region": "South",
  "trade": "electrician",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Joint Labor-Management",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160629?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.mocareerskillscenter.edu"
},
{
  "id": 68,
  "name": "FL Career & Skills Center",
  "location": "Main Campus, FL",
  "state": "FL",
  "region": "South",
  "trade": "landscape-arch",
  "tuition": 4488,
  "type": "Public",
  "status": "Non-profit",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160630?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.flcareerskillscenter.edu"
},
{
  "id": 69,
  "name": "ID Career & Skills Center",
  "location": "Main Campus, ID",
  "state": "ID",
  "region": "South",
  "trade": "carpenter",
  "tuition": 18553,
  "type": "Private",
  "status": "Non-profit",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160631?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.idcareerskillscenter.edu"
},
{
  "id": 70,
  "name": "RI Career & Skills Center",
  "location": "Main Campus, RI",
  "state": "RI",
  "region": "South",
  "trade": "chef",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Joint Labor-Management",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160632?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.ricareerskillscenter.edu"
},
{
  "id": 71,
  "name": "NC Career & Skills Center",
  "location": "Main Campus, NC",
  "state": "NC",
  "region": "South",
  "trade": "heavy-eq-op",
  "tuition": 19943,
  "type": "Private",
  "status": "Non-profit",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160633?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.nccareerskillscenter.edu"
},
{
  "id": 72,
  "name": "KS Career & Skills Center",
  "location": "Main Campus, KS",
  "state": "KS",
  "region": "South",
  "trade": "hvac",
  "tuition": 4868,
  "type": "Private",
  "status": "Joint Labor-Management",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160634?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.kscareerskillscenter.edu"
},
{
  "id": 73,
  "name": "TX Career & Skills Center",
  "location": "Main Campus, TX",
  "state": "TX",
  "region": "South",
  "trade": "wind-tech",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Non-profit",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160635?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.txcareerskillscenter.edu"
},
{
  "id": 74,
  "name": "AK Career & Skills Center",
  "location": "Main Campus, AK",
  "state": "AK",
  "region": "South",
  "trade": "plumber",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Profit",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160636?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.akcareerskillscenter.edu"
},
{
  "id": 75,
  "name": "MS Career & Skills Center",
  "location": "Main Campus, MS",
  "state": "MS",
  "region": "South",
  "trade": "welder",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Joint Labor-Management",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160637?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.mscareerskillscenter.edu"
},
{
  "id": 76,
  "name": "NM Career & Skills Center",
  "location": "Main Campus, NM",
  "state": "NM",
  "region": "South",
  "trade": "electrician",
  "tuition": 9031,
  "type": "Private",
  "status": "Profit",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160638?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.nmcareerskillscenter.edu"
},
{
  "id": 77,
  "name": "AL Career & Skills Center",
  "location": "Main Campus, AL",
  "state": "AL",
  "region": "South",
  "trade": "plumber",
  "tuition": 10775,
  "type": "Private",
  "status": "Profit",
  "duration": "18 months",
  "image": "https://images.unsplash.com/photo-1581092160639?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.alcareerskillscenter.edu"
},
{
  "id": 78,
  "name": "GA Career & Skills Center",
  "location": "Main Campus, GA",
  "state": "GA",
  "region": "South",
  "trade": "lpn",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Joint Labor-Management",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160640?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.gacareerskillscenter.edu"
},
{
  "id": 79,
  "name": "OK Career & Skills Center",
  "location": "Main Campus, OK",
  "state": "OK",
  "region": "South",
  "trade": "auto-tech",
  "tuition": 20923,
  "type": "Private",
  "status": "Non-profit",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160641?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.okcareerskillscenter.edu"
},
{
  "id": 80,
  "name": "MN Career & Skills Center",
  "location": "Main Campus, MN",
  "state": "MN",
  "region": "South",
  "trade": "plumber",
  "tuition": 5115,
  "type": "Private",
  "status": "Non-profit",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160642?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.mncareerskillscenter.edu"
},
{
  "id": 81,
  "name": "MA Career & Skills Center",
  "location": "Main Campus, MA",
  "state": "MA",
  "region": "South",
  "trade": "welder",
  "tuition": 7596,
  "type": "Public",
  "status": "Profit",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160643?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.macareerskillscenter.edu"
},
{
  "id": 82,
  "name": "Arkansas Tech University",
  "location": "Main Campus, AR",
  "state": "AR",
  "region": "South",
  "trade": "auto-tech",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Non-profit",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160644?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.atu.edu/"
},
{
  "id": 83,
  "name": "MT Career & Skills Center",
  "location": "Main Campus, MT",
  "state": "MT",
  "region": "South",
  "trade": "landscape-arch",
  "tuition": 5950,
  "type": "Private",
  "status": "Profit",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160645?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.mtcareerskillscenter.edu"
},
{
  "id": 84,
  "name": "CO Career & Skills Center",
  "location": "Main Campus, CO",
  "state": "CO",
  "region": "South",
  "trade": "carpenter",
  "tuition": 6314,
  "type": "Public",
  "status": "Non-profit",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160646?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.cocareerskillscenter.edu"
},
{
  "id": 85,
  "name": "NV Career & Skills Center",
  "location": "Main Campus, NV",
  "state": "NV",
  "region": "South",
  "trade": "chef",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Profit",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160647?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.nvcareerskillscenter.edu"
},
{
  "id": 86,
  "name": "NV Career & Skills Center",
  "location": "Main Campus, NV",
  "state": "NV",
  "region": "South",
  "trade": "aircraft-tech",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Non-profit",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160648?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.nvcareerskillscenter.edu"
},
{
  "id": 87,
  "name": "TX Career & Skills Center",
  "location": "Main Campus, TX",
  "state": "TX",
  "region": "South",
  "trade": "lpn",
  "tuition": 6043,
  "type": "Private",
  "status": "Joint Labor-Management",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160649?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.txcareerskillscenter.edu"
},
{
  "id": 88,
  "name": "CT Career & Skills Center",
  "location": "Main Campus, CT",
  "state": "CT",
  "region": "South",
  "trade": "it-specialist",
  "tuition": 13035,
  "type": "Private",
  "status": "Profit",
  "duration": "18 months",
  "image": "https://images.unsplash.com/photo-1581092160650?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.ctcareerskillscenter.edu"
},
{
  "id": 89,
  "name": "Arkansas Tech University",
  "location": "Main Campus, AR",
  "state": "AR",
  "region": "South",
  "trade": "electrician",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Joint Labor-Management",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160651?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.atu.edu/"
},
{
  "id": 90,
  "name": "NM Career & Skills Center",
  "location": "Main Campus, NM",
  "state": "NM",
  "region": "South",
  "trade": "aircraft-tech",
  "tuition": 18887,
  "type": "Public",
  "status": "Non-profit",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160652?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.nmcareerskillscenter.edu"
},
{
  "id": 91,
  "name": "NM Career & Skills Center",
  "location": "Main Campus, NM",
  "state": "NM",
  "region": "South",
  "trade": "chef",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Profit",
  "duration": "18 months",
  "image": "https://images.unsplash.com/photo-1581092160653?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.nmcareerskillscenter.edu"
},
{
  "id": 92,
  "name": "WV Career & Skills Center",
  "location": "Main Campus, WV",
  "state": "WV",
  "region": "South",
  "trade": "chef",
  "tuition": 16222,
  "type": "Public",
  "status": "Joint Labor-Management",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160654?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.wvcareerskillscenter.edu"
},
{
  "id": 93,
  "name": "VT Career & Skills Center",
  "location": "Main Campus, VT",
  "state": "VT",
  "region": "South",
  "trade": "carpenter",
  "tuition": 21720,
  "type": "Private",
  "status": "Joint Labor-Management",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160655?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.vtcareerskillscenter.edu"
},
{
  "id": 94,
  "name": "ME Career & Skills Center",
  "location": "Main Campus, ME",
  "state": "ME",
  "region": "South",
  "trade": "welder",
  "tuition": 11160,
  "type": "Private",
  "status": "Joint Labor-Management",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160656?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.mecareerskillscenter.edu"
},
{
  "id": 95,
  "name": "MT Career & Skills Center",
  "location": "Main Campus, MT",
  "state": "MT",
  "region": "South",
  "trade": "it-specialist",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Non-profit",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160657?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.mtcareerskillscenter.edu"
},
{
  "id": 96,
  "name": "FL Career & Skills Center",
  "location": "Main Campus, FL",
  "state": "FL",
  "region": "South",
  "trade": "lpn",
  "tuition": 19976,
  "type": "Private",
  "status": "Profit",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160658?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.flcareerskillscenter.edu"
},
{
  "id": 97,
  "name": "DE Career & Skills Center",
  "location": "Main Campus, DE",
  "state": "DE",
  "region": "South",
  "trade": "carpenter",
  "tuition": 11611,
  "type": "Public",
  "status": "Profit",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160659?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.decareerskillscenter.edu"
},
{
  "id": 98,
  "name": "KY Career & Skills Center",
  "location": "Main Campus, KY",
  "state": "KY",
  "region": "South",
  "trade": "landscape-arch",
  "tuition": 18396,
  "type": "Public",
  "status": "Non-profit",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160660?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.kycareerskillscenter.edu"
},
{
  "id": 99,
  "name": "CA Career & Skills Center",
  "location": "Main Campus, CA",
  "state": "CA",
  "region": "South",
  "trade": "lpn",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Non-profit",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160661?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.cacareerskillscenter.edu"
},
{
  "id": 100,
  "name": "ID Career & Skills Center",
  "location": "Main Campus, ID",
  "state": "ID",
  "region": "South",
  "trade": "lpn",
  "tuition": 4493,
  "type": "Public",
  "status": "Joint Labor-Management",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160662?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.idcareerskillscenter.edu"
},
{
  "id": 101,
  "name": "KS Career & Skills Center",
  "location": "Main Campus, KS",
  "state": "KS",
  "region": "South",
  "trade": "auto-tech",
  "tuition": 23899,
  "type": "Private",
  "status": "Profit",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160663?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.kscareerskillscenter.edu"
},
{
  "id": 102,
  "name": "ME Career & Skills Center",
  "location": "Main Campus, ME",
  "state": "ME",
  "region": "South",
  "trade": "aircraft-tech",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Non-profit",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160664?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.mecareerskillscenter.edu"
},
{
  "id": 103,
  "name": "MA Career & Skills Center",
  "location": "Main Campus, MA",
  "state": "MA",
  "region": "South",
  "trade": "lpn",
  "tuition": 10996,
  "type": "Private",
  "status": "Non-profit",
  "duration": "18 months",
  "image": "https://images.unsplash.com/photo-1581092160665?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.macareerskillscenter.edu"
},
{
  "id": 104,
  "name": "KY Career & Skills Center",
  "location": "Main Campus, KY",
  "state": "KY",
  "region": "South",
  "trade": "heavy-eq-op",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Profit",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160666?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.kycareerskillscenter.edu"
},
{
  "id": 105,
  "name": "RI Career & Skills Center",
  "location": "Main Campus, RI",
  "state": "RI",
  "region": "South",
  "trade": "auto-tech",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Profit",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160667?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.ricareerskillscenter.edu"
},
{
  "id": 106,
  "name": "WI Career & Skills Center",
  "location": "Main Campus, WI",
  "state": "WI",
  "region": "South",
  "trade": "plumber",
  "tuition": 16312,
  "type": "Private",
  "status": "Joint Labor-Management",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160668?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.wicareerskillscenter.edu"
},
{
  "id": 107,
  "name": "CT Career & Skills Center",
  "location": "Main Campus, CT",
  "state": "CT",
  "region": "South",
  "trade": "electrician",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Non-profit",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160669?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.ctcareerskillscenter.edu"
},
{
  "id": 108,
  "name": "OK Career & Skills Center",
  "location": "Main Campus, OK",
  "state": "OK",
  "region": "South",
  "trade": "landscape-arch",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Profit",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160670?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.okcareerskillscenter.edu"
},
{
  "id": 109,
  "name": "AZ Career & Skills Center",
  "location": "Main Campus, AZ",
  "state": "AZ",
  "region": "South",
  "trade": "auto-tech",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Non-profit",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160671?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.azcareerskillscenter.edu"
},
{
  "id": 110,
  "name": "OR Career & Skills Center",
  "location": "Main Campus, OR",
  "state": "OR",
  "region": "South",
  "trade": "landscape-arch",
  "tuition": 9785,
  "type": "Public",
  "status": "Joint Labor-Management",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160672?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.orcareerskillscenter.edu"
},
{
  "id": 111,
  "name": "SC Career & Skills Center",
  "location": "Main Campus, SC",
  "state": "SC",
  "region": "South",
  "trade": "welder",
  "tuition": 23522,
  "type": "Public",
  "status": "Non-profit",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160673?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.sccareerskillscenter.edu"
},
{
  "id": 112,
  "name": "MN Career & Skills Center",
  "location": "Main Campus, MN",
  "state": "MN",
  "region": "South",
  "trade": "carpenter",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Non-profit",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160674?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.mncareerskillscenter.edu"
},
{
  "id": 113,
  "name": "ID Career & Skills Center",
  "location": "Main Campus, ID",
  "state": "ID",
  "region": "South",
  "trade": "landscape-arch",
  "tuition": 7337,
  "type": "Public",
  "status": "Joint Labor-Management",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160675?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.idcareerskillscenter.edu"
},
{
  "id": 114,
  "name": "ND Career & Skills Center",
  "location": "Main Campus, ND",
  "state": "ND",
  "region": "South",
  "trade": "chef",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Joint Labor-Management",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160676?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.ndcareerskillscenter.edu"
},
{
  "id": 115,
  "name": "ID Career & Skills Center",
  "location": "Main Campus, ID",
  "state": "ID",
  "region": "South",
  "trade": "auto-tech",
  "tuition": 23425,
  "type": "Private",
  "status": "Joint Labor-Management",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160677?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.idcareerskillscenter.edu"
},
{
  "id": 116,
  "name": "CA Career & Skills Center",
  "location": "Main Campus, CA",
  "state": "CA",
  "region": "South",
  "trade": "it-specialist",
  "tuition": 12764,
  "type": "Private",
  "status": "Non-profit",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160678?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.cacareerskillscenter.edu"
},
{
  "id": 117,
  "name": "WV Career & Skills Center",
  "location": "Main Campus, WV",
  "state": "WV",
  "region": "South",
  "trade": "chef",
  "tuition": 24583,
  "type": "Private",
  "status": "Non-profit",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160679?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.wvcareerskillscenter.edu"
},
{
  "id": 118,
  "name": "MD Career & Skills Center",
  "location": "Main Campus, MD",
  "state": "MD",
  "region": "South",
  "trade": "heavy-eq-op",
  "tuition": 6249,
  "type": "Private",
  "status": "Non-profit",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160680?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.mdcareerskillscenter.edu"
},
{
  "id": 119,
  "name": "SD Career & Skills Center",
  "location": "Main Campus, SD",
  "state": "SD",
  "region": "South",
  "trade": "heavy-eq-op",
  "tuition": 10074,
  "type": "Private",
  "status": "Joint Labor-Management",
  "duration": "18 months",
  "image": "https://images.unsplash.com/photo-1581092160681?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.sdcareerskillscenter.edu"
},
{
  "id": 120,
  "name": "SC Career & Skills Center",
  "location": "Main Campus, SC",
  "state": "SC",
  "region": "South",
  "trade": "lpn",
  "tuition": 8949,
  "type": "Private",
  "status": "Joint Labor-Management",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160682?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.sccareerskillscenter.edu"
},
{
  "id": 121,
  "name": "WI Career & Skills Center",
  "location": "Main Campus, WI",
  "state": "WI",
  "region": "South",
  "trade": "hvac",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Profit",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160683?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.wicareerskillscenter.edu"
},
{
  "id": 122,
  "name": "WY Career & Skills Center",
  "location": "Main Campus, WY",
  "state": "WY",
  "region": "South",
  "trade": "it-specialist",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Non-profit",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160684?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.wycareerskillscenter.edu"
},
{
  "id": 123,
  "name": "ME Career & Skills Center",
  "location": "Main Campus, ME",
  "state": "ME",
  "region": "South",
  "trade": "heavy-eq-op",
  "tuition": 21717,
  "type": "Private",
  "status": "Joint Labor-Management",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160685?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.mecareerskillscenter.edu"
},
{
  "id": 124,
  "name": "KS Career & Skills Center",
  "location": "Main Campus, KS",
  "state": "KS",
  "region": "South",
  "trade": "wind-tech",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Joint Labor-Management",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160686?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.kscareerskillscenter.edu"
},
{
  "id": 125,
  "name": "WA Career & Skills Center",
  "location": "Main Campus, WA",
  "state": "WA",
  "region": "South",
  "trade": "electrician",
  "tuition": 11873,
  "type": "Private",
  "status": "Joint Labor-Management",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160687?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.wacareerskillscenter.edu"
},
{
  "id": 126,
  "name": "ND Career & Skills Center",
  "location": "Main Campus, ND",
  "state": "ND",
  "region": "South",
  "trade": "electrician",
  "tuition": 14797,
  "type": "Private",
  "status": "Joint Labor-Management",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160688?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.ndcareerskillscenter.edu"
},
{
  "id": 127,
  "name": "VA Career & Skills Center",
  "location": "Main Campus, VA",
  "state": "VA",
  "region": "South",
  "trade": "machinist",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Non-profit",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160689?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.vacareerskillscenter.edu"
},
{
  "id": 128,
  "name": "GA Career & Skills Center",
  "location": "Main Campus, GA",
  "state": "GA",
  "region": "South",
  "trade": "auto-tech",
  "tuition": 12036,
  "type": "Private",
  "status": "Non-profit",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160690?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.gacareerskillscenter.edu"
},
{
  "id": 129,
  "name": "MS Career & Skills Center",
  "location": "Main Campus, MS",
  "state": "MS",
  "region": "South",
  "trade": "welder",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Profit",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160691?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.mscareerskillscenter.edu"
},
{
  "id": 130,
  "name": "LA Career & Skills Center",
  "location": "Main Campus, LA",
  "state": "LA",
  "region": "South",
  "trade": "machinist",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Joint Labor-Management",
  "duration": "18 months",
  "image": "https://images.unsplash.com/photo-1581092160692?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.lacareerskillscenter.edu"
},
{
  "id": 131,
  "name": "AZ Career & Skills Center",
  "location": "Main Campus, AZ",
  "state": "AZ",
  "region": "South",
  "trade": "lpn",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Profit",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160693?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.azcareerskillscenter.edu"
},
{
  "id": 132,
  "name": "UT Career & Skills Center",
  "location": "Main Campus, UT",
  "state": "UT",
  "region": "South",
  "trade": "it-specialist",
  "tuition": 19364,
  "type": "Public",
  "status": "Joint Labor-Management",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160694?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.utcareerskillscenter.edu"
},
{
  "id": 133,
  "name": "VT Career & Skills Center",
  "location": "Main Campus, VT",
  "state": "VT",
  "region": "South",
  "trade": "machinist",
  "tuition": 24608,
  "type": "Public",
  "status": "Profit",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160695?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.vtcareerskillscenter.edu"
},
{
  "id": 134,
  "name": "UT Career & Skills Center",
  "location": "Main Campus, UT",
  "state": "UT",
  "region": "South",
  "trade": "carpenter",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Non-profit",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160696?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.utcareerskillscenter.edu"
},
{
  "id": 135,
  "name": "MI Career & Skills Center",
  "location": "Main Campus, MI",
  "state": "MI",
  "region": "South",
  "trade": "auto-tech",
  "tuition": 22845,
  "type": "Public",
  "status": "Joint Labor-Management",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160697?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.micareerskillscenter.edu"
},
{
  "id": 136,
  "name": "ND Career & Skills Center",
  "location": "Main Campus, ND",
  "state": "ND",
  "region": "South",
  "trade": "auto-tech",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Non-profit",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160698?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.ndcareerskillscenter.edu"
},
{
  "id": 137,
  "name": "FL Career & Skills Center",
  "location": "Main Campus, FL",
  "state": "FL",
  "region": "South",
  "trade": "wind-tech",
  "tuition": 10714,
  "type": "Public",
  "status": "Non-profit",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160699?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.flcareerskillscenter.edu"
},
{
  "id": 138,
  "name": "OR Career & Skills Center",
  "location": "Main Campus, OR",
  "state": "OR",
  "region": "South",
  "trade": "landscape-arch",
  "tuition": 7278,
  "type": "Public",
  "status": "Profit",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160700?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.orcareerskillscenter.edu"
},
{
  "id": 139,
  "name": "TX Career & Skills Center",
  "location": "Main Campus, TX",
  "state": "TX",
  "region": "South",
  "trade": "hvac",
  "tuition": 14970,
  "type": "Private",
  "status": "Non-profit",
  "duration": "18 months",
  "image": "https://images.unsplash.com/photo-1581092160701?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.txcareerskillscenter.edu"
},
{
  "id": 140,
  "name": "NY Career & Skills Center",
  "location": "Main Campus, NY",
  "state": "NY",
  "region": "South",
  "trade": "aircraft-tech",
  "tuition": 13725,
  "type": "Private",
  "status": "Joint Labor-Management",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160702?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.nycareerskillscenter.edu"
},
{
  "id": 141,
  "name": "SC Career & Skills Center",
  "location": "Main Campus, SC",
  "state": "SC",
  "region": "South",
  "trade": "wind-tech",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Joint Labor-Management",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160703?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.sccareerskillscenter.edu"
},
{
  "id": 142,
  "name": "UT Career & Skills Center",
  "location": "Main Campus, UT",
  "state": "UT",
  "region": "South",
  "trade": "landscape-arch",
  "tuition": 12902,
  "type": "Public",
  "status": "Non-profit",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160704?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.utcareerskillscenter.edu"
},
{
  "id": 143,
  "name": "OH Career & Skills Center",
  "location": "Main Campus, OH",
  "state": "OH",
  "region": "South",
  "trade": "auto-tech",
  "tuition": 6813,
  "type": "Public",
  "status": "Profit",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160705?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.ohcareerskillscenter.edu"
},
{
  "id": 144,
  "name": "NH Career & Skills Center",
  "location": "Main Campus, NH",
  "state": "NH",
  "region": "South",
  "trade": "welder",
  "tuition": 12359,
  "type": "Private",
  "status": "Joint Labor-Management",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160706?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.nhcareerskillscenter.edu"
},
{
  "id": 145,
  "name": "IL Career & Skills Center",
  "location": "Main Campus, IL",
  "state": "IL",
  "region": "South",
  "trade": "plumber",
  "tuition": 14559,
  "type": "Private",
  "status": "Joint Labor-Management",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160707?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.ilcareerskillscenter.edu"
},
{
  "id": 146,
  "name": "PA Career & Skills Center",
  "location": "Main Campus, PA",
  "state": "PA",
  "region": "South",
  "trade": "auto-tech",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Profit",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160708?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.pacareerskillscenter.edu"
},
{
  "id": 147,
  "name": "CO Career & Skills Center",
  "location": "Main Campus, CO",
  "state": "CO",
  "region": "South",
  "trade": "heavy-eq-op",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Non-profit",
  "duration": "18 months",
  "image": "https://images.unsplash.com/photo-1581092160709?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.cocareerskillscenter.edu"
},
{
  "id": 148,
  "name": "RI Career & Skills Center",
  "location": "Main Campus, RI",
  "state": "RI",
  "region": "South",
  "trade": "auto-tech",
  "tuition": 18850,
  "type": "Private",
  "status": "Joint Labor-Management",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160710?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.ricareerskillscenter.edu"
},
{
  "id": 149,
  "name": "WI Career & Skills Center",
  "location": "Main Campus, WI",
  "state": "WI",
  "region": "South",
  "trade": "landscape-arch",
  "tuition": 20083,
  "type": "Public",
  "status": "Joint Labor-Management",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160711?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.wicareerskillscenter.edu"
},
{
  "id": 150,
  "name": "MI Career & Skills Center",
  "location": "Main Campus, MI",
  "state": "MI",
  "region": "South",
  "trade": "wind-tech",
  "tuition": 15229,
  "type": "Public",
  "status": "Non-profit",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160712?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.micareerskillscenter.edu"
},
{
  "id": 151,
  "name": "KS Career & Skills Center",
  "location": "Main Campus, KS",
  "state": "KS",
  "region": "South",
  "trade": "electrician",
  "tuition": 12442,
  "type": "Private",
  "status": "Profit",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160713?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.kscareerskillscenter.edu"
},
{
  "id": 152,
  "name": "WY Career & Skills Center",
  "location": "Main Campus, WY",
  "state": "WY",
  "region": "South",
  "trade": "it-specialist",
  "tuition": 21123,
  "type": "Public",
  "status": "Profit",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160714?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.wycareerskillscenter.edu"
},
{
  "id": 153,
  "name": "IL Career & Skills Center",
  "location": "Main Campus, IL",
  "state": "IL",
  "region": "South",
  "trade": "it-specialist",
  "tuition": 9019,
  "type": "Public",
  "status": "Profit",
  "duration": "18 months",
  "image": "https://images.unsplash.com/photo-1581092160715?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.ilcareerskillscenter.edu"
},
{
  "id": 154,
  "name": "NM Career & Skills Center",
  "location": "Main Campus, NM",
  "state": "NM",
  "region": "South",
  "trade": "welder",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Joint Labor-Management",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160716?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.nmcareerskillscenter.edu"
},
{
  "id": 155,
  "name": "MO Career & Skills Center",
  "location": "Main Campus, MO",
  "state": "MO",
  "region": "South",
  "trade": "auto-tech",
  "tuition": 18743,
  "type": "Public",
  "status": "Profit",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160717?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.mocareerskillscenter.edu"
},
{
  "id": 156,
  "name": "VA Career & Skills Center",
  "location": "Main Campus, VA",
  "state": "VA",
  "region": "South",
  "trade": "welder",
  "tuition": 14605,
  "type": "Public",
  "status": "Non-profit",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160718?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.vacareerskillscenter.edu"
},
{
  "id": 157,
  "name": "MD Career & Skills Center",
  "location": "Main Campus, MD",
  "state": "MD",
  "region": "South",
  "trade": "chef",
  "tuition": 5151,
  "type": "Private",
  "status": "Non-profit",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160719?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.mdcareerskillscenter.edu"
},
{
  "id": 158,
  "name": "DE Career & Skills Center",
  "location": "Main Campus, DE",
  "state": "DE",
  "region": "South",
  "trade": "electrician",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Profit",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160720?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.decareerskillscenter.edu"
},
{
  "id": 159,
  "name": "NM Career & Skills Center",
  "location": "Main Campus, NM",
  "state": "NM",
  "region": "South",
  "trade": "landscape-arch",
  "tuition": 6056,
  "type": "Private",
  "status": "Profit",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160721?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.nmcareerskillscenter.edu"
},
{
  "id": 160,
  "name": "KY Career & Skills Center",
  "location": "Main Campus, KY",
  "state": "KY",
  "region": "South",
  "trade": "it-specialist",
  "tuition": 6560,
  "type": "Private",
  "status": "Non-profit",
  "duration": "18 months",
  "image": "https://images.unsplash.com/photo-1581092160722?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.kycareerskillscenter.edu"
},
{
  "id": 161,
  "name": "ID Career & Skills Center",
  "location": "Main Campus, ID",
  "state": "ID",
  "region": "South",
  "trade": "electrician",
  "tuition": 17194,
  "type": "Private",
  "status": "Joint Labor-Management",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160723?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.idcareerskillscenter.edu"
},
{
  "id": 162,
  "name": "VT Career & Skills Center",
  "location": "Main Campus, VT",
  "state": "VT",
  "region": "South",
  "trade": "wind-tech",
  "tuition": 14440,
  "type": "Public",
  "status": "Profit",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160724?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.vtcareerskillscenter.edu"
},
{
  "id": 163,
  "name": "AL Career & Skills Center",
  "location": "Main Campus, AL",
  "state": "AL",
  "region": "South",
  "trade": "electrician",
  "tuition": 4023,
  "type": "Private",
  "status": "Joint Labor-Management",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160725?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.alcareerskillscenter.edu"
},
{
  "id": 164,
  "name": "MA Career & Skills Center",
  "location": "Main Campus, MA",
  "state": "MA",
  "region": "South",
  "trade": "electrician",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Profit",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160726?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.macareerskillscenter.edu"
},
{
  "id": 165,
  "name": "NY Career & Skills Center",
  "location": "Main Campus, NY",
  "state": "NY",
  "region": "South",
  "trade": "landscape-arch",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Joint Labor-Management",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160727?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.nycareerskillscenter.edu"
},
{
  "id": 166,
  "name": "IL Career & Skills Center",
  "location": "Main Campus, IL",
  "state": "IL",
  "region": "South",
  "trade": "carpenter",
  "tuition": 24457,
  "type": "Public",
  "status": "Non-profit",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160728?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.ilcareerskillscenter.edu"
},
{
  "id": 167,
  "name": "SC Career & Skills Center",
  "location": "Main Campus, SC",
  "state": "SC",
  "region": "South",
  "trade": "lpn",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Profit",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160729?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.sccareerskillscenter.edu"
},
{
  "id": 168,
  "name": "NY Career & Skills Center",
  "location": "Main Campus, NY",
  "state": "NY",
  "region": "South",
  "trade": "lpn",
  "tuition": 12130,
  "type": "Public",
  "status": "Profit",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160730?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.nycareerskillscenter.edu"
},
{
  "id": 169,
  "name": "CO Career & Skills Center",
  "location": "Main Campus, CO",
  "state": "CO",
  "region": "South",
  "trade": "carpenter",
  "tuition": 22971,
  "type": "Private",
  "status": "Joint Labor-Management",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160731?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.cocareerskillscenter.edu"
},
{
  "id": 170,
  "name": "IA Career & Skills Center",
  "location": "Main Campus, IA",
  "state": "IA",
  "region": "South",
  "trade": "it-specialist",
  "tuition": 4282,
  "type": "Private",
  "status": "Joint Labor-Management",
  "duration": "18 months",
  "image": "https://images.unsplash.com/photo-1581092160732?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.iacareerskillscenter.edu"
},
{
  "id": 171,
  "name": "AL Career & Skills Center",
  "location": "Main Campus, AL",
  "state": "AL",
  "region": "South",
  "trade": "it-specialist",
  "tuition": 4850,
  "type": "Private",
  "status": "Non-profit",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160733?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.alcareerskillscenter.edu"
},
{
  "id": 172,
  "name": "WI Career & Skills Center",
  "location": "Main Campus, WI",
  "state": "WI",
  "region": "South",
  "trade": "carpenter",
  "tuition": 16694,
  "type": "Private",
  "status": "Non-profit",
  "duration": "18 months",
  "image": "https://images.unsplash.com/photo-1581092160734?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.wicareerskillscenter.edu"
},
{
  "id": 173,
  "name": "TN Career & Skills Center",
  "location": "Main Campus, TN",
  "state": "TN",
  "region": "South",
  "trade": "hvac",
  "tuition": 20337,
  "type": "Public",
  "status": "Joint Labor-Management",
  "duration": "18 months",
  "image": "https://images.unsplash.com/photo-1581092160735?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.tncareerskillscenter.edu"
},
{
  "id": 174,
  "name": "WV Career & Skills Center",
  "location": "Main Campus, WV",
  "state": "WV",
  "region": "South",
  "trade": "welder",
  "tuition": 15153,
  "type": "Private",
  "status": "Profit",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160736?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.wvcareerskillscenter.edu"
},
{
  "id": 175,
  "name": "CA Career & Skills Center",
  "location": "Main Campus, CA",
  "state": "CA",
  "region": "South",
  "trade": "electrician",
  "tuition": 18915,
  "type": "Public",
  "status": "Joint Labor-Management",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160737?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.cacareerskillscenter.edu"
},
{
  "id": 176,
  "name": "MD Career & Skills Center",
  "location": "Main Campus, MD",
  "state": "MD",
  "region": "South",
  "trade": "heavy-eq-op",
  "tuition": 9748,
  "type": "Private",
  "status": "Joint Labor-Management",
  "duration": "18 months",
  "image": "https://images.unsplash.com/photo-1581092160738?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.mdcareerskillscenter.edu"
},
{
  "id": 177,
  "name": "NY Career & Skills Center",
  "location": "Main Campus, NY",
  "state": "NY",
  "region": "South",
  "trade": "plumber",
  "tuition": 4964,
  "type": "Private",
  "status": "Joint Labor-Management",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160739?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.nycareerskillscenter.edu"
},
{
  "id": 178,
  "name": "CT Career & Skills Center",
  "location": "Main Campus, CT",
  "state": "CT",
  "region": "South",
  "trade": "chef",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Joint Labor-Management",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160740?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.ctcareerskillscenter.edu"
},
{
  "id": 179,
  "name": "ID Career & Skills Center",
  "location": "Main Campus, ID",
  "state": "ID",
  "region": "South",
  "trade": "electrician",
  "tuition": 8058,
  "type": "Private",
  "status": "Profit",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160741?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.idcareerskillscenter.edu"
},
{
  "id": 180,
  "name": "TN Career & Skills Center",
  "location": "Main Campus, TN",
  "state": "TN",
  "region": "South",
  "trade": "auto-tech",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Non-profit",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160742?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.tncareerskillscenter.edu"
},
{
  "id": 181,
  "name": "MN Career & Skills Center",
  "location": "Main Campus, MN",
  "state": "MN",
  "region": "South",
  "trade": "heavy-eq-op",
  "tuition": 4823,
  "type": "Public",
  "status": "Joint Labor-Management",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160743?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.mncareerskillscenter.edu"
},
{
  "id": 182,
  "name": "IA Career & Skills Center",
  "location": "Main Campus, IA",
  "state": "IA",
  "region": "South",
  "trade": "electrician",
  "tuition": 18866,
  "type": "Private",
  "status": "Non-profit",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160744?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.iacareerskillscenter.edu"
},
{
  "id": 183,
  "name": "MT Career & Skills Center",
  "location": "Main Campus, MT",
  "state": "MT",
  "region": "South",
  "trade": "welder",
  "tuition": 10430,
  "type": "Public",
  "status": "Non-profit",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160745?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.mtcareerskillscenter.edu"
},
{
  "id": 184,
  "name": "ID Career & Skills Center",
  "location": "Main Campus, ID",
  "state": "ID",
  "region": "South",
  "trade": "hvac",
  "tuition": 10524,
  "type": "Public",
  "status": "Non-profit",
  "duration": "18 months",
  "image": "https://images.unsplash.com/photo-1581092160746?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.idcareerskillscenter.edu"
},
{
  "id": 185,
  "name": "WY Career & Skills Center",
  "location": "Main Campus, WY",
  "state": "WY",
  "region": "South",
  "trade": "wind-tech",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Profit",
  "duration": "18 months",
  "image": "https://images.unsplash.com/photo-1581092160747?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.wycareerskillscenter.edu"
},
{
  "id": 186,
  "name": "NH Career & Skills Center",
  "location": "Main Campus, NH",
  "state": "NH",
  "region": "South",
  "trade": "chef",
  "tuition": 22876,
  "type": "Private",
  "status": "Non-profit",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160748?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.nhcareerskillscenter.edu"
},
{
  "id": 187,
  "name": "MD Career & Skills Center",
  "location": "Main Campus, MD",
  "state": "MD",
  "region": "South",
  "trade": "aircraft-tech",
  "tuition": 23562,
  "type": "Public",
  "status": "Non-profit",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160749?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.mdcareerskillscenter.edu"
},
{
  "id": 188,
  "name": "RI Career & Skills Center",
  "location": "Main Campus, RI",
  "state": "RI",
  "region": "South",
  "trade": "electrician",
  "tuition": 15447,
  "type": "Private",
  "status": "Joint Labor-Management",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160750?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.ricareerskillscenter.edu"
},
{
  "id": 189,
  "name": "Arkansas Tech University",
  "location": "Main Campus, AR",
  "state": "AR",
  "region": "South",
  "trade": "auto-tech",
  "tuition": 11247,
  "type": "Private",
  "status": "Profit",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160751?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.atu.edu/"
},
{
  "id": 190,
  "name": "SD Career & Skills Center",
  "location": "Main Campus, SD",
  "state": "SD",
  "region": "South",
  "trade": "landscape-arch",
  "tuition": 12155,
  "type": "Public",
  "status": "Joint Labor-Management",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160752?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.sdcareerskillscenter.edu"
},
{
  "id": 191,
  "name": "DE Career & Skills Center",
  "location": "Main Campus, DE",
  "state": "DE",
  "region": "South",
  "trade": "electrician",
  "tuition": 15799,
  "type": "Public",
  "status": "Profit",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160753?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.decareerskillscenter.edu"
},
{
  "id": 192,
  "name": "NJ Career & Skills Center",
  "location": "Main Campus, NJ",
  "state": "NJ",
  "region": "South",
  "trade": "it-specialist",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Non-profit",
  "duration": "18 months",
  "image": "https://images.unsplash.com/photo-1581092160754?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.njcareerskillscenter.edu"
},
{
  "id": 193,
  "name": "MA Career & Skills Center",
  "location": "Main Campus, MA",
  "state": "MA",
  "region": "South",
  "trade": "chef",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Non-profit",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160755?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.macareerskillscenter.edu"
},
{
  "id": 194,
  "name": "PA Career & Skills Center",
  "location": "Main Campus, PA",
  "state": "PA",
  "region": "South",
  "trade": "chef",
  "tuition": 16654,
  "type": "Public",
  "status": "Non-profit",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160756?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.pacareerskillscenter.edu"
},
{
  "id": 195,
  "name": "MS Career & Skills Center",
  "location": "Main Campus, MS",
  "state": "MS",
  "region": "South",
  "trade": "heavy-eq-op",
  "tuition": 9601,
  "type": "Public",
  "status": "Non-profit",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160757?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.mscareerskillscenter.edu"
},
{
  "id": 196,
  "name": "IL Career & Skills Center",
  "location": "Main Campus, IL",
  "state": "IL",
  "region": "South",
  "trade": "heavy-eq-op",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Profit",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160758?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.ilcareerskillscenter.edu"
},
{
  "id": 197,
  "name": "TX Career & Skills Center",
  "location": "Main Campus, TX",
  "state": "TX",
  "region": "South",
  "trade": "carpenter",
  "tuition": 18559,
  "type": "Private",
  "status": "Profit",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160759?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.txcareerskillscenter.edu"
},
{
  "id": 198,
  "name": "GA Career & Skills Center",
  "location": "Main Campus, GA",
  "state": "GA",
  "region": "South",
  "trade": "chef",
  "tuition": 7327,
  "type": "Private",
  "status": "Joint Labor-Management",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160760?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.gacareerskillscenter.edu"
},
{
  "id": 199,
  "name": "AZ Career & Skills Center",
  "location": "Main Campus, AZ",
  "state": "AZ",
  "region": "South",
  "trade": "wind-tech",
  "tuition": 10912,
  "type": "Private",
  "status": "Profit",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160761?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.azcareerskillscenter.edu"
},
{
  "id": 200,
  "name": "OK Career & Skills Center",
  "location": "Main Campus, OK",
  "state": "OK",
  "region": "South",
  "trade": "hvac",
  "tuition": 13100,
  "type": "Private",
  "status": "Non-profit",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160762?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.okcareerskillscenter.edu"
},
{
  "id": 201,
  "name": "NJ Career & Skills Center",
  "location": "Main Campus, NJ",
  "state": "NJ",
  "region": "South",
  "trade": "machinist",
  "tuition": 12214,
  "type": "Private",
  "status": "Joint Labor-Management",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160763?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.njcareerskillscenter.edu"
},
{
  "id": 202,
  "name": "ID Career & Skills Center",
  "location": "Main Campus, ID",
  "state": "ID",
  "region": "South",
  "trade": "auto-tech",
  "tuition": 15597,
  "type": "Public",
  "status": "Non-profit",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160764?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.idcareerskillscenter.edu"
},
{
  "id": 203,
  "name": "IA Career & Skills Center",
  "location": "Main Campus, IA",
  "state": "IA",
  "region": "South",
  "trade": "heavy-eq-op",
  "tuition": 14198,
  "type": "Private",
  "status": "Non-profit",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160765?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.iacareerskillscenter.edu"
},
{
  "id": 204,
  "name": "PA Career & Skills Center",
  "location": "Main Campus, PA",
  "state": "PA",
  "region": "South",
  "trade": "electrician",
  "tuition": 22611,
  "type": "Public",
  "status": "Non-profit",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160766?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.pacareerskillscenter.edu"
},
{
  "id": 205,
  "name": "MT Career & Skills Center",
  "location": "Main Campus, MT",
  "state": "MT",
  "region": "South",
  "trade": "electrician",
  "tuition": 14187,
  "type": "Public",
  "status": "Profit",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160767?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.mtcareerskillscenter.edu"
},
{
  "id": 206,
  "name": "MA Career & Skills Center",
  "location": "Main Campus, MA",
  "state": "MA",
  "region": "South",
  "trade": "carpenter",
  "tuition": 9270,
  "type": "Private",
  "status": "Non-profit",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160768?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.macareerskillscenter.edu"
},
{
  "id": 207,
  "name": "WI Career & Skills Center",
  "location": "Main Campus, WI",
  "state": "WI",
  "region": "South",
  "trade": "welder",
  "tuition": 19740,
  "type": "Public",
  "status": "Non-profit",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160769?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.wicareerskillscenter.edu"
},
{
  "id": 208,
  "name": "MS Career & Skills Center",
  "location": "Main Campus, MS",
  "state": "MS",
  "region": "South",
  "trade": "heavy-eq-op",
  "tuition": 18208,
  "type": "Private",
  "status": "Profit",
  "duration": "18 months",
  "image": "https://images.unsplash.com/photo-1581092160770?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.mscareerskillscenter.edu"
},
{
  "id": 209,
  "name": "NE Career & Skills Center",
  "location": "Main Campus, NE",
  "state": "NE",
  "region": "South",
  "trade": "landscape-arch",
  "tuition": 5767,
  "type": "Public",
  "status": "Profit",
  "duration": "18 months",
  "image": "https://images.unsplash.com/photo-1581092160771?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.necareerskillscenter.edu"
},
{
  "id": 210,
  "name": "VA Career & Skills Center",
  "location": "Main Campus, VA",
  "state": "VA",
  "region": "South",
  "trade": "carpenter",
  "tuition": 14584,
  "type": "Public",
  "status": "Profit",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160772?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.vacareerskillscenter.edu"
},
{
  "id": 211,
  "name": "KS Career & Skills Center",
  "location": "Main Campus, KS",
  "state": "KS",
  "region": "South",
  "trade": "welder",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Non-profit",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160773?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.kscareerskillscenter.edu"
},
{
  "id": 212,
  "name": "SD Career & Skills Center",
  "location": "Main Campus, SD",
  "state": "SD",
  "region": "South",
  "trade": "aircraft-tech",
  "tuition": 18421,
  "type": "Private",
  "status": "Joint Labor-Management",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160774?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.sdcareerskillscenter.edu"
},
{
  "id": 213,
  "name": "MT Career & Skills Center",
  "location": "Main Campus, MT",
  "state": "MT",
  "region": "South",
  "trade": "welder",
  "tuition": 24424,
  "type": "Private",
  "status": "Joint Labor-Management",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160775?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.mtcareerskillscenter.edu"
},
{
  "id": 214,
  "name": "WI Career & Skills Center",
  "location": "Main Campus, WI",
  "state": "WI",
  "region": "South",
  "trade": "lpn",
  "tuition": 15816,
  "type": "Public",
  "status": "Joint Labor-Management",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160776?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.wicareerskillscenter.edu"
},
{
  "id": 215,
  "name": "MO Career & Skills Center",
  "location": "Main Campus, MO",
  "state": "MO",
  "region": "South",
  "trade": "machinist",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Joint Labor-Management",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160777?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.mocareerskillscenter.edu"
},
{
  "id": 216,
  "name": "WY Career & Skills Center",
  "location": "Main Campus, WY",
  "state": "WY",
  "region": "South",
  "trade": "machinist",
  "tuition": 5674,
  "type": "Public",
  "status": "Profit",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160778?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.wycareerskillscenter.edu"
},
{
  "id": 217,
  "name": "IA Career & Skills Center",
  "location": "Main Campus, IA",
  "state": "IA",
  "region": "South",
  "trade": "lpn",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Joint Labor-Management",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160779?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.iacareerskillscenter.edu"
},
{
  "id": 218,
  "name": "TN Career & Skills Center",
  "location": "Main Campus, TN",
  "state": "TN",
  "region": "South",
  "trade": "wind-tech",
  "tuition": 8421,
  "type": "Private",
  "status": "Non-profit",
  "duration": "18 months",
  "image": "https://images.unsplash.com/photo-1581092160780?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.tncareerskillscenter.edu"
},
{
  "id": 219,
  "name": "DE Career & Skills Center",
  "location": "Main Campus, DE",
  "state": "DE",
  "region": "South",
  "trade": "welder",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Profit",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160781?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.decareerskillscenter.edu"
},
{
  "id": 220,
  "name": "CA Career & Skills Center",
  "location": "Main Campus, CA",
  "state": "CA",
  "region": "South",
  "trade": "landscape-arch",
  "tuition": 21230,
  "type": "Public",
  "status": "Profit",
  "duration": "18 months",
  "image": "https://images.unsplash.com/photo-1581092160782?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.cacareerskillscenter.edu"
},
{
  "id": 221,
  "name": "VT Career & Skills Center",
  "location": "Main Campus, VT",
  "state": "VT",
  "region": "South",
  "trade": "welder",
  "tuition": 10701,
  "type": "Private",
  "status": "Joint Labor-Management",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160783?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.vtcareerskillscenter.edu"
},
{
  "id": 222,
  "name": "HI Career & Skills Center",
  "location": "Main Campus, HI",
  "state": "HI",
  "region": "South",
  "trade": "lpn",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Profit",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160784?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.hicareerskillscenter.edu"
},
{
  "id": 223,
  "name": "MI Career & Skills Center",
  "location": "Main Campus, MI",
  "state": "MI",
  "region": "South",
  "trade": "wind-tech",
  "tuition": 22774,
  "type": "Public",
  "status": "Profit",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160785?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.micareerskillscenter.edu"
},
{
  "id": 224,
  "name": "PA Career & Skills Center",
  "location": "Main Campus, PA",
  "state": "PA",
  "region": "South",
  "trade": "carpenter",
  "tuition": 8389,
  "type": "Public",
  "status": "Profit",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160786?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.pacareerskillscenter.edu"
},
{
  "id": 225,
  "name": "UT Career & Skills Center",
  "location": "Main Campus, UT",
  "state": "UT",
  "region": "South",
  "trade": "machinist",
  "tuition": 15748,
  "type": "Public",
  "status": "Joint Labor-Management",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160787?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.utcareerskillscenter.edu"
},
{
  "id": 226,
  "name": "MT Career & Skills Center",
  "location": "Main Campus, MT",
  "state": "MT",
  "region": "South",
  "trade": "chef",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Joint Labor-Management",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160788?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.mtcareerskillscenter.edu"
},
{
  "id": 227,
  "name": "IL Career & Skills Center",
  "location": "Main Campus, IL",
  "state": "IL",
  "region": "South",
  "trade": "chef",
  "tuition": 9665,
  "type": "Public",
  "status": "Profit",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160789?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.ilcareerskillscenter.edu"
},
{
  "id": 228,
  "name": "NV Career & Skills Center",
  "location": "Main Campus, NV",
  "state": "NV",
  "region": "South",
  "trade": "electrician",
  "tuition": 19778,
  "type": "Private",
  "status": "Non-profit",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160790?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.nvcareerskillscenter.edu"
},
{
  "id": 229,
  "name": "OH Career & Skills Center",
  "location": "Main Campus, OH",
  "state": "OH",
  "region": "South",
  "trade": "aircraft-tech",
  "tuition": 20731,
  "type": "Private",
  "status": "Profit",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160791?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.ohcareerskillscenter.edu"
},
{
  "id": 230,
  "name": "ID Career & Skills Center",
  "location": "Main Campus, ID",
  "state": "ID",
  "region": "South",
  "trade": "plumber",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Non-profit",
  "duration": "18 months",
  "image": "https://images.unsplash.com/photo-1581092160792?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.idcareerskillscenter.edu"
},
{
  "id": 231,
  "name": "WA Career & Skills Center",
  "location": "Main Campus, WA",
  "state": "WA",
  "region": "South",
  "trade": "electrician",
  "tuition": 8845,
  "type": "Private",
  "status": "Joint Labor-Management",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160793?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.wacareerskillscenter.edu"
},
{
  "id": 232,
  "name": "NC Career & Skills Center",
  "location": "Main Campus, NC",
  "state": "NC",
  "region": "South",
  "trade": "chef",
  "tuition": 24478,
  "type": "Private",
  "status": "Non-profit",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160794?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.nccareerskillscenter.edu"
},
{
  "id": 233,
  "name": "WV Career & Skills Center",
  "location": "Main Campus, WV",
  "state": "WV",
  "region": "South",
  "trade": "hvac",
  "tuition": 4336,
  "type": "Public",
  "status": "Profit",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160795?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.wvcareerskillscenter.edu"
},
{
  "id": 234,
  "name": "MN Career & Skills Center",
  "location": "Main Campus, MN",
  "state": "MN",
  "region": "South",
  "trade": "electrician",
  "tuition": 17848,
  "type": "Private",
  "status": "Joint Labor-Management",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160796?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.mncareerskillscenter.edu"
},
{
  "id": 235,
  "name": "WV Career & Skills Center",
  "location": "Main Campus, WV",
  "state": "WV",
  "region": "South",
  "trade": "aircraft-tech",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Non-profit",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160797?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.wvcareerskillscenter.edu"
},
{
  "id": 236,
  "name": "WI Career & Skills Center",
  "location": "Main Campus, WI",
  "state": "WI",
  "region": "South",
  "trade": "carpenter",
  "tuition": 12548,
  "type": "Private",
  "status": "Profit",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160798?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.wicareerskillscenter.edu"
},
{
  "id": 237,
  "name": "UT Career & Skills Center",
  "location": "Main Campus, UT",
  "state": "UT",
  "region": "South",
  "trade": "welder",
  "tuition": 16248,
  "type": "Public",
  "status": "Profit",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160799?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.utcareerskillscenter.edu"
},
{
  "id": 238,
  "name": "LA Career & Skills Center",
  "location": "Main Campus, LA",
  "state": "LA",
  "region": "South",
  "trade": "welder",
  "tuition": 17209,
  "type": "Private",
  "status": "Profit",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160800?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.lacareerskillscenter.edu"
},
{
  "id": 239,
  "name": "NE Career & Skills Center",
  "location": "Main Campus, NE",
  "state": "NE",
  "region": "South",
  "trade": "it-specialist",
  "tuition": 9821,
  "type": "Private",
  "status": "Non-profit",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160801?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.necareerskillscenter.edu"
},
{
  "id": 240,
  "name": "AK Career & Skills Center",
  "location": "Main Campus, AK",
  "state": "AK",
  "region": "South",
  "trade": "electrician",
  "tuition": 7592,
  "type": "Public",
  "status": "Profit",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160802?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.akcareerskillscenter.edu"
},
{
  "id": 241,
  "name": "NY Career & Skills Center",
  "location": "Main Campus, NY",
  "state": "NY",
  "region": "South",
  "trade": "auto-tech",
  "tuition": 24374,
  "type": "Public",
  "status": "Joint Labor-Management",
  "duration": "18 months",
  "image": "https://images.unsplash.com/photo-1581092160803?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.nycareerskillscenter.edu"
},
{
  "id": 242,
  "name": "VT Career & Skills Center",
  "location": "Main Campus, VT",
  "state": "VT",
  "region": "South",
  "trade": "hvac",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Joint Labor-Management",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160804?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.vtcareerskillscenter.edu"
},
{
  "id": 243,
  "name": "CO Career & Skills Center",
  "location": "Main Campus, CO",
  "state": "CO",
  "region": "South",
  "trade": "plumber",
  "tuition": 8577,
  "type": "Public",
  "status": "Non-profit",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160805?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.cocareerskillscenter.edu"
},
{
  "id": 244,
  "name": "ND Career & Skills Center",
  "location": "Main Campus, ND",
  "state": "ND",
  "region": "South",
  "trade": "carpenter",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Profit",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160806?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.ndcareerskillscenter.edu"
},
{
  "id": 245,
  "name": "SD Career & Skills Center",
  "location": "Main Campus, SD",
  "state": "SD",
  "region": "South",
  "trade": "lpn",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Non-profit",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160807?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.sdcareerskillscenter.edu"
},
{
  "id": 246,
  "name": "WV Career & Skills Center",
  "location": "Main Campus, WV",
  "state": "WV",
  "region": "South",
  "trade": "landscape-arch",
  "tuition": 11808,
  "type": "Public",
  "status": "Profit",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160808?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.wvcareerskillscenter.edu"
},
{
  "id": 247,
  "name": "AL Career & Skills Center",
  "location": "Main Campus, AL",
  "state": "AL",
  "region": "South",
  "trade": "machinist",
  "tuition": 21141,
  "type": "Public",
  "status": "Non-profit",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160809?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.alcareerskillscenter.edu"
},
{
  "id": 248,
  "name": "NE Career & Skills Center",
  "location": "Main Campus, NE",
  "state": "NE",
  "region": "South",
  "trade": "landscape-arch",
  "tuition": 19891,
  "type": "Public",
  "status": "Profit",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160810?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.necareerskillscenter.edu"
},
{
  "id": 249,
  "name": "TN Career & Skills Center",
  "location": "Main Campus, TN",
  "state": "TN",
  "region": "South",
  "trade": "wind-tech",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Profit",
  "duration": "18 months",
  "image": "https://images.unsplash.com/photo-1581092160811?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.tncareerskillscenter.edu"
},
{
  "id": 250,
  "name": "WY Career & Skills Center",
  "location": "Main Campus, WY",
  "state": "WY",
  "region": "South",
  "trade": "it-specialist",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Joint Labor-Management",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160812?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.wycareerskillscenter.edu"
},
{
  "id": 251,
  "name": "DE Career & Skills Center",
  "location": "Main Campus, DE",
  "state": "DE",
  "region": "South",
  "trade": "lpn",
  "tuition": 14112,
  "type": "Private",
  "status": "Profit",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160813?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.decareerskillscenter.edu"
},
{
  "id": 252,
  "name": "WV Career & Skills Center",
  "location": "Main Campus, WV",
  "state": "WV",
  "region": "South",
  "trade": "electrician",
  "tuition": 10109,
  "type": "Private",
  "status": "Profit",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160814?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.wvcareerskillscenter.edu"
},
{
  "id": 253,
  "name": "RI Career & Skills Center",
  "location": "Main Campus, RI",
  "state": "RI",
  "region": "South",
  "trade": "wind-tech",
  "tuition": 19687,
  "type": "Public",
  "status": "Profit",
  "duration": "18 months",
  "image": "https://images.unsplash.com/photo-1581092160815?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.ricareerskillscenter.edu"
},
{
  "id": 254,
  "name": "TX Career & Skills Center",
  "location": "Main Campus, TX",
  "state": "TX",
  "region": "South",
  "trade": "machinist",
  "tuition": 10622,
  "type": "Private",
  "status": "Joint Labor-Management",
  "duration": "18 months",
  "image": "https://images.unsplash.com/photo-1581092160816?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.txcareerskillscenter.edu"
},
{
  "id": 255,
  "name": "KS Career & Skills Center",
  "location": "Main Campus, KS",
  "state": "KS",
  "region": "South",
  "trade": "welder",
  "tuition": 10038,
  "type": "Public",
  "status": "Non-profit",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160817?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.kscareerskillscenter.edu"
},
{
  "id": 256,
  "name": "RI Career & Skills Center",
  "location": "Main Campus, RI",
  "state": "RI",
  "region": "South",
  "trade": "lpn",
  "tuition": 23329,
  "type": "Public",
  "status": "Profit",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160818?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.ricareerskillscenter.edu"
},
{
  "id": 257,
  "name": "WI Career & Skills Center",
  "location": "Main Campus, WI",
  "state": "WI",
  "region": "South",
  "trade": "heavy-eq-op",
  "tuition": 6350,
  "type": "Private",
  "status": "Joint Labor-Management",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160819?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.wicareerskillscenter.edu"
},
{
  "id": 258,
  "name": "ID Career & Skills Center",
  "location": "Main Campus, ID",
  "state": "ID",
  "region": "South",
  "trade": "hvac",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Non-profit",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160820?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.idcareerskillscenter.edu"
},
{
  "id": 259,
  "name": "WV Career & Skills Center",
  "location": "Main Campus, WV",
  "state": "WV",
  "region": "South",
  "trade": "machinist",
  "tuition": 16394,
  "type": "Private",
  "status": "Joint Labor-Management",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160821?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.wvcareerskillscenter.edu"
},
{
  "id": 260,
  "name": "IA Career & Skills Center",
  "location": "Main Campus, IA",
  "state": "IA",
  "region": "South",
  "trade": "landscape-arch",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Joint Labor-Management",
  "duration": "18 months",
  "image": "https://images.unsplash.com/photo-1581092160822?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.iacareerskillscenter.edu"
},
{
  "id": 261,
  "name": "MD Career & Skills Center",
  "location": "Main Campus, MD",
  "state": "MD",
  "region": "South",
  "trade": "it-specialist",
  "tuition": 21763,
  "type": "Private",
  "status": "Joint Labor-Management",
  "duration": "18 months",
  "image": "https://images.unsplash.com/photo-1581092160823?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.mdcareerskillscenter.edu"
},
{
  "id": 262,
  "name": "CA Career & Skills Center",
  "location": "Main Campus, CA",
  "state": "CA",
  "region": "South",
  "trade": "electrician",
  "tuition": 4099,
  "type": "Private",
  "status": "Joint Labor-Management",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160824?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.cacareerskillscenter.edu"
},
{
  "id": 263,
  "name": "DE Career & Skills Center",
  "location": "Main Campus, DE",
  "state": "DE",
  "region": "South",
  "trade": "carpenter",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Joint Labor-Management",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160825?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.decareerskillscenter.edu"
},
{
  "id": 264,
  "name": "MN Career & Skills Center",
  "location": "Main Campus, MN",
  "state": "MN",
  "region": "South",
  "trade": "carpenter",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Profit",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160826?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.mncareerskillscenter.edu"
},
{
  "id": 265,
  "name": "MT Career & Skills Center",
  "location": "Main Campus, MT",
  "state": "MT",
  "region": "South",
  "trade": "plumber",
  "tuition": 20087,
  "type": "Private",
  "status": "Joint Labor-Management",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160827?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.mtcareerskillscenter.edu"
},
{
  "id": 266,
  "name": "NE Career & Skills Center",
  "location": "Main Campus, NE",
  "state": "NE",
  "region": "South",
  "trade": "carpenter",
  "tuition": 17784,
  "type": "Public",
  "status": "Joint Labor-Management",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160828?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.necareerskillscenter.edu"
},
{
  "id": 267,
  "name": "MD Career & Skills Center",
  "location": "Main Campus, MD",
  "state": "MD",
  "region": "South",
  "trade": "chef",
  "tuition": 10542,
  "type": "Public",
  "status": "Profit",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160829?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.mdcareerskillscenter.edu"
},
{
  "id": 268,
  "name": "MD Career & Skills Center",
  "location": "Main Campus, MD",
  "state": "MD",
  "region": "South",
  "trade": "it-specialist",
  "tuition": 20696,
  "type": "Public",
  "status": "Joint Labor-Management",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160830?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.mdcareerskillscenter.edu"
},
{
  "id": 269,
  "name": "NM Career & Skills Center",
  "location": "Main Campus, NM",
  "state": "NM",
  "region": "South",
  "trade": "lpn",
  "tuition": 22042,
  "type": "Public",
  "status": "Non-profit",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160831?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.nmcareerskillscenter.edu"
},
{
  "id": 270,
  "name": "WA Career & Skills Center",
  "location": "Main Campus, WA",
  "state": "WA",
  "region": "South",
  "trade": "electrician",
  "tuition": 19615,
  "type": "Private",
  "status": "Non-profit",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160832?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.wacareerskillscenter.edu"
},
{
  "id": 271,
  "name": "Arkansas Tech University",
  "location": "Main Campus, AR",
  "state": "AR",
  "region": "South",
  "trade": "lpn",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Non-profit",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160833?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.atu.edu/"
},
{
  "id": 272,
  "name": "SC Career & Skills Center",
  "location": "Main Campus, SC",
  "state": "SC",
  "region": "South",
  "trade": "landscape-arch",
  "tuition": 12475,
  "type": "Private",
  "status": "Non-profit",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160834?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.sccareerskillscenter.edu"
},
{
  "id": 273,
  "name": "NJ Career & Skills Center",
  "location": "Main Campus, NJ",
  "state": "NJ",
  "region": "South",
  "trade": "carpenter",
  "tuition": 10528,
  "type": "Public",
  "status": "Profit",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160835?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.njcareerskillscenter.edu"
},
{
  "id": 274,
  "name": "IN Career & Skills Center",
  "location": "Main Campus, IN",
  "state": "IN",
  "region": "South",
  "trade": "carpenter",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Non-profit",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160836?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.incareerskillscenter.edu"
},
{
  "id": 275,
  "name": "SC Career & Skills Center",
  "location": "Main Campus, SC",
  "state": "SC",
  "region": "South",
  "trade": "heavy-eq-op",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Non-profit",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160837?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.sccareerskillscenter.edu"
},
{
  "id": 276,
  "name": "RI Career & Skills Center",
  "location": "Main Campus, RI",
  "state": "RI",
  "region": "South",
  "trade": "welder",
  "tuition": 15854,
  "type": "Private",
  "status": "Joint Labor-Management",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160838?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.ricareerskillscenter.edu"
},
{
  "id": 277,
  "name": "CA Career & Skills Center",
  "location": "Main Campus, CA",
  "state": "CA",
  "region": "South",
  "trade": "machinist",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Non-profit",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160839?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.cacareerskillscenter.edu"
},
{
  "id": 278,
  "name": "NE Career & Skills Center",
  "location": "Main Campus, NE",
  "state": "NE",
  "region": "South",
  "trade": "lpn",
  "tuition": 16500,
  "type": "Public",
  "status": "Non-profit",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160840?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.necareerskillscenter.edu"
},
{
  "id": 279,
  "name": "MN Career & Skills Center",
  "location": "Main Campus, MN",
  "state": "MN",
  "region": "South",
  "trade": "it-specialist",
  "tuition": 13446,
  "type": "Private",
  "status": "Non-profit",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160841?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.mncareerskillscenter.edu"
},
{
  "id": 280,
  "name": "MI Career & Skills Center",
  "location": "Main Campus, MI",
  "state": "MI",
  "region": "South",
  "trade": "welder",
  "tuition": 6611,
  "type": "Private",
  "status": "Profit",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160842?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.micareerskillscenter.edu"
},
{
  "id": 281,
  "name": "LA Career & Skills Center",
  "location": "Main Campus, LA",
  "state": "LA",
  "region": "South",
  "trade": "it-specialist",
  "tuition": 15641,
  "type": "Private",
  "status": "Joint Labor-Management",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160843?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.lacareerskillscenter.edu"
},
{
  "id": 282,
  "name": "WV Career & Skills Center",
  "location": "Main Campus, WV",
  "state": "WV",
  "region": "South",
  "trade": "it-specialist",
  "tuition": 19505,
  "type": "Public",
  "status": "Joint Labor-Management",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160844?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.wvcareerskillscenter.edu"
},
{
  "id": 283,
  "name": "ND Career & Skills Center",
  "location": "Main Campus, ND",
  "state": "ND",
  "region": "South",
  "trade": "hvac",
  "tuition": 19769,
  "type": "Private",
  "status": "Non-profit",
  "duration": "18 months",
  "image": "https://images.unsplash.com/photo-1581092160845?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.ndcareerskillscenter.edu"
},
{
  "id": 284,
  "name": "VA Career & Skills Center",
  "location": "Main Campus, VA",
  "state": "VA",
  "region": "South",
  "trade": "lpn",
  "tuition": 14282,
  "type": "Private",
  "status": "Joint Labor-Management",
  "duration": "18 months",
  "image": "https://images.unsplash.com/photo-1581092160846?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.vacareerskillscenter.edu"
},
{
  "id": 285,
  "name": "MA Career & Skills Center",
  "location": "Main Campus, MA",
  "state": "MA",
  "region": "South",
  "trade": "aircraft-tech",
  "tuition": 19033,
  "type": "Public",
  "status": "Joint Labor-Management",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160847?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.macareerskillscenter.edu"
},
{
  "id": 286,
  "name": "KY Career & Skills Center",
  "location": "Main Campus, KY",
  "state": "KY",
  "region": "South",
  "trade": "heavy-eq-op",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Joint Labor-Management",
  "duration": "18 months",
  "image": "https://images.unsplash.com/photo-1581092160848?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.kycareerskillscenter.edu"
},
{
  "id": 287,
  "name": "MS Career & Skills Center",
  "location": "Main Campus, MS",
  "state": "MS",
  "region": "South",
  "trade": "electrician",
  "tuition": 6605,
  "type": "Private",
  "status": "Non-profit",
  "duration": "18 months",
  "image": "https://images.unsplash.com/photo-1581092160849?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.mscareerskillscenter.edu"
},
{
  "id": 288,
  "name": "WY Career & Skills Center",
  "location": "Main Campus, WY",
  "state": "WY",
  "region": "South",
  "trade": "it-specialist",
  "tuition": 9354,
  "type": "Private",
  "status": "Profit",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160850?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.wycareerskillscenter.edu"
},
{
  "id": 289,
  "name": "IN Career & Skills Center",
  "location": "Main Campus, IN",
  "state": "IN",
  "region": "South",
  "trade": "wind-tech",
  "tuition": 18848,
  "type": "Public",
  "status": "Non-profit",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160851?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.incareerskillscenter.edu"
},
{
  "id": 290,
  "name": "LA Career & Skills Center",
  "location": "Main Campus, LA",
  "state": "LA",
  "region": "South",
  "trade": "heavy-eq-op",
  "tuition": 17080,
  "type": "Private",
  "status": "Non-profit",
  "duration": "12 months",
  "image": "https://images.unsplash.com/photo-1581092160852?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.lacareerskillscenter.edu"
},
{
  "id": 291,
  "name": "WY Career & Skills Center",
  "location": "Main Campus, WY",
  "state": "WY",
  "region": "South",
  "trade": "machinist",
  "tuition": 11023,
  "type": "Public",
  "status": "Profit",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160853?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.wycareerskillscenter.edu"
},
{
  "id": 292,
  "name": "CA Career & Skills Center",
  "location": "Main Campus, CA",
  "state": "CA",
  "region": "South",
  "trade": "it-specialist",
  "tuition": 22174,
  "type": "Public",
  "status": "Joint Labor-Management",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160854?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.cacareerskillscenter.edu"
},
{
  "id": 293,
  "name": "NM Career & Skills Center",
  "location": "Main Campus, NM",
  "state": "NM",
  "region": "South",
  "trade": "wind-tech",
  "tuition": 22362,
  "type": "Private",
  "status": "Profit",
  "duration": "18 months",
  "image": "https://images.unsplash.com/photo-1581092160855?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.nmcareerskillscenter.edu"
},
{
  "id": 294,
  "name": "KY Career & Skills Center",
  "location": "Main Campus, KY",
  "state": "KY",
  "region": "South",
  "trade": "carpenter",
  "tuition": 9996,
  "type": "Private",
  "status": "Profit",
  "duration": "18 months",
  "image": "https://images.unsplash.com/photo-1581092160856?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.kycareerskillscenter.edu"
},
{
  "id": 295,
  "name": "RI Career & Skills Center",
  "location": "Main Campus, RI",
  "state": "RI",
  "region": "South",
  "trade": "auto-tech",
  "tuition": 19446,
  "type": "Public",
  "status": "Non-profit",
  "duration": "6 months",
  "image": "https://images.unsplash.com/photo-1581092160857?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.ricareerskillscenter.edu"
},
{
  "id": 296,
  "name": "IN Career & Skills Center",
  "location": "Main Campus, IN",
  "state": "IN",
  "region": "South",
  "trade": "electrician",
  "tuition": 10725,
  "type": "Private",
  "status": "Profit",
  "duration": "18 months",
  "image": "https://images.unsplash.com/photo-1581092160858?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.incareerskillscenter.edu"
},
{
  "id": 297,
  "name": "TN Career & Skills Center",
  "location": "Main Campus, TN",
  "state": "TN",
  "region": "South",
  "trade": "chef",
  "tuition": 19856,
  "type": "Public",
  "status": "Joint Labor-Management",
  "duration": "4 years",
  "image": "https://images.unsplash.com/photo-1581092160859?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.tncareerskillscenter.edu"
},
{
  "id": 298,
  "name": "WY Career & Skills Center",
  "location": "Main Campus, WY",
  "state": "WY",
  "region": "South",
  "trade": "wind-tech",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Non-profit",
  "duration": "18 months",
  "image": "https://images.unsplash.com/photo-1581092160860?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.wycareerskillscenter.edu"
},
{
  "id": 299,
  "name": "SC Career & Skills Center",
  "location": "Main Campus, SC",
  "state": "SC",
  "region": "South",
  "trade": "heavy-eq-op",
  "tuition": 0,
  "type": "Apprenticeship",
  "status": "Non-profit",
  "duration": "18 months",
  "image": "https://images.unsplash.com/photo-1581092160861?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.sccareerskillscenter.edu"
},
{
  "id": 300,
  "name": "TN Career & Skills Center",
  "location": "Main Campus, TN",
  "state": "TN",
  "region": "South",
  "trade": "welder",
  "tuition": 18770,
  "type": "Public",
  "status": "Joint Labor-Management",
  "duration": "2 years",
  "image": "https://images.unsplash.com/photo-1581092160862?auto=format&fit=crop&q=80&w=800",
  "url": "https://www.tncareerskillscenter.edu"
}
];

export const USER_PROFILE = {
  name: "Alex Johnson",
  email: "alex.j@tradepath.edu",
  age: 18,
  ethnicity: "white",
  educationStatus: "HS Senior",
  currentSchool: "Central High School",
  schoolCity: "Little Rock",
  schoolState: "AR",
  selectedTrade: "undecided",
  resume: null,
  grades: [
    { subject: "Algebra II", grade: "B+" },
    { subject: "Physics", grade: "A-" },
    { subject: "Drafting", grade: "A" }
  ],
  extracurriculars: "Varsity Football, Robotics Club, Volunteer Firefighter",
  discoveryResults: null,
  starredTrades: [],
  starredSchools: []
};

export const COUNSELOR_PROFILE = {
  name: "Sarah Miller",
  email: "s.miller@centralhigh.edu",
  school: "Central High School",
  department: "Career Services",
  specialization: "Vocational Training",
  selectedTrade: "electrician", // placeholder
  starredTrades: [],
  starredSchools: []
};

export const STUDENTS_DATA = [
  {
    id: "s1",
    name: "Marcus Williams",
    grade: "11th Grade",
    gpa: "3.2",
    extracurriculars: "Varsity Football, Robotics Club, Volunteer Firefighter",
    discoveryMatch: "HVAC Technician (92%)",
    grades: [
      { subject: "Algebra II", grade: "B+" },
      { subject: "Physics", grade: "A-" },
      { subject: "Woodshop", grade: "A" },
      { subject: "English", grade: "B" }
    ],
    skills: [
      { name: "Spatial Reasoning", value: 85, tooltip: "Excellent performance in woodshop and 3D modeling." },
      { name: "Team Leadership", value: 90, tooltip: "Football captain and lead in robotics team." },
      { name: "Technical Aptitude", value: 80, tooltip: "Strong grasp of mechanics and electrical basics." },
      { name: "Manual Dexterity", value: 82, tooltip: "Observed precision in woodshop (Grade A)." },
      { name: "Systems Logic", value: 78, tooltip: "From robotics and firefighting training." }
    ]
  },
  {
    id: "s2",
    name: "Elena Rodriguez",
    grade: "12th Grade",
    gpa: "3.8",
    extracurriculars: "Art Club, Math Olympiad, Coding Camp",
    discoveryMatch: "Avionics Tech (94%)",
    grades: [
      { subject: "Calculus", grade: "A" },
      { subject: "Art History", grade: "A" },
      { subject: "Chemistry", grade: "A-" },
      { subject: "Spanish", grade: "A" }
    ],
    skills: [
      { name: "Mathematical Logic", value: 95, tooltip: "Top performer in advanced math courses (Calculus: A)." },
      { name: "Attention to Detail", value: 90, tooltip: "Precise execution in fine arts and coding camp." },
      { name: "Visual Analysis", value: 85, tooltip: "Strong interpretation of complex diagrams and art." },
      { name: "Electronic Aptitude", value: 88, tooltip: "From coding and physics (Chemistry: A-)." },
      { name: "Analytical Precision", value: 92, tooltip: "Derived from math olympiad results." }
    ]
  }
];

export const CITY_PAY_ADJUSTMENTS = {
  "New York": 1.35,
  "San Francisco": 1.45,
  "San Jose": 1.40,
  "Chicago": 1.15,
  "Little Rock": 0.95,
  "Dallas": 1.10,
  "Houston": 1.08,
  "Austin": 1.25,
  "Seattle": 1.30,
  "Boston": 1.32,
  "Atlanta": 1.12,
  "Miami": 1.18,
  "Denver": 1.20,
  "Phoenix": 1.05,
  "Philadelphia": 1.10,
  "Detroit": 0.98,
  "Minneapolis": 1.08,
  "Portland": 1.15,
  "Salt Lake City": 1.05,
  "St. Louis": 0.96
};
