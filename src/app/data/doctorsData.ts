import imgImage from "../../assets/6bcd7b1b14451ea069e378e86538986311521fdb.png"
import imgImage1 from "../../assets/5acfcfbb197f8e51d36fe2ef16afabdd1303f102.png"
import imgImage2 from "../../assets/c732a079e104af15d7dd4e2053f9ad2a683392cf.png"
import imgImage3 from "../../assets/9fbf72269945d89340291423575f203d2365fd2d.png"
import imgImage4 from "../../assets/9820c349dd5b4ac1658cc8b535bf4db2bebb8ebb.png"
import imgImage5 from "../../assets/77ae170107d77646f52d92aa2eb7f49fce9af7ad.png"
import imgImage6 from "../../assets/7354fce0048b8c11bb7fcdd7a0ab2cd907a3d792.png"
import imgImage7 from "../../assets/09dfd6008361ed084838521d23cd6404d570744c.png"
import imgImage8 from "../../assets/5027978346984890af8db65202bd8d2976612444.png"
import imgDrArwaRashedAlmarshoodi from "../../assets/ac27cb9260d1dd3d4097ea2409bb7f4c8b698c29.png"
import imgDentalCare from "../../assets/7e26eb0c35bbd0356cd593caf48b0b5a702f7753.png"
import imgDoctorConsultingWithPatient from "../../assets/4f8e41bd74fa3fbba3008a03ef58695f6730a222.png"

export interface DoctorDetail {
  id: string
  name: string
  title: string
  specialty: string
  image: string
  aboutImage: string
  description: string
  stats: {
    label: string
    value: string
  }[]
  education: {
    icon: string
    degree: string
    institution: string
    year?: string
  }[]
  experience: {
    title: string
    description: string
    highlights: string[]
  }
  expertise: {
    category: string
    items: string[]
  }[]
  philosophy: {
    title: string
    description: string
    principles: string[]
    quote: string
  }
  clinicImages: string[]
}

export const doctorsData: DoctorDetail[] = [
  {
    id: 'dr-saifaldin-tawakul',
    name: 'Dr. Saif Eldin Tawakul',
    title: 'Specialist Oral Surgeon & Implantologist',
    specialty: 'Sky Dental Center',
    image: '/doctor1.png',
    aboutImage: '/doctor1.png',
    description: 'Dr. Saif Eldin Tawakul is a distinguished Specialist Oral Surgeon and Implantologist with more than 20 years of international clinical experience in Germany and the UAE. Renowned for his advanced surgical expertise and precision-driven treatment approach, Dr. Saif is one of the region\'s most respected oral surgery practitioners. He completed his German Board Certification in Oral Surgery in Bremen, Germany, in 2009, and holds a certified implant privilege. He is also a registered Specialist under the Department of Health – Abu Dhabi. Dr. Saif began his professional journey in Germany, practising Oral Surgery and Implantology from 2004 to 2010, before relocating to the UAE, where he spent over a decade practicing general dentistry and oral surgery in Al Ain. In 2020, he co-founded Sky Dental Center, where he continues to provide exceptional surgical care and plays an integral role in shaping the centre\'s clinical excellence and patient-focused philosophy. His core expertise includes dental implant surgery, ridge augmentation, sinus lift procedures, removal of impacted and wisdom teeth, exposure of impacted teeth for orthodontic purposes, apicoectomy, and cyst removal. His extensive experience across both simple and highly complex surgical procedures enables him to deliver safe, predictable, and life-changing outcomes for patients.',
    stats: [
      { label: 'Years of Experience', value: '20+' },
      { label: 'International Experience', value: 'Germany & UAE' },
      { label: 'Co-Founder', value: 'Sky Dental Center' }
    ],
    education: [
      {
        icon: '🎓',
        degree: 'German Board Certification in Oral Surgery',
        institution: 'Bremen, Germany',
        year: '2009'
      },
      {
        icon: '📜',
        degree: 'Certified Implant Privilege',
        institution: 'Germany',
        year: '2009'
      },
      {
        icon: '🏥',
        degree: 'Registered Specialist',
        institution: 'Department of Health – Abu Dhabi',
        year: 'Current'
      },
      {
        icon: '🌍',
        degree: 'International Clinical Experience',
        institution: 'Germany (2004-2010) & UAE',
        year: '2004-Present'
      }
    ],
    experience: {
      title: 'International Surgical Excellence',
      description: 'Dr. Saif brings over 20 years of international clinical experience, having practiced Oral Surgery and Implantology in Germany from 2004 to 2010, followed by over a decade in the UAE. In 2020, he co-founded Sky Dental Center, where he continues to provide exceptional surgical care and shape the centre\'s clinical excellence.',
      highlights: [
        '20+ years of international clinical experience in Germany and UAE',
        'German Board Certified in Oral Surgery (2009)',
        'Certified implant privilege holder',
        'Co-founder of Sky Dental Center (2020)',
        'Registered Specialist under Department of Health – Abu Dhabi',
        'Expert in complex surgical procedures and implantology'
      ]
    },
    expertise: [
      {
        category: 'Evaluation & Diagnosis',
        items: [
          'Comprehensive dental and medical evaluation',
          'Oral cancer screening and assessment of TMJ, salivary glands, and facial structures',
          'CBCT and advanced radiographic interpretation',
          'Diagnosis of cysts, tumours, oral pathologies, and orofacial pain',
          'Multidisciplinary treatment planning in collaboration with orthodontic, prosthodontic, periodontal, and restorative teams'
        ]
      },
      {
        category: 'Emergency & Trauma Care',
        items: [
          'Management of dental emergencies and oral infections',
          'Treatment of dental trauma, including fractures and lacerations',
          'TMJ dislocation management and abscess drainage'
        ]
      },
      {
        category: 'Surgical Procedures',
        items: [
          'Simple and complex tooth extractions, including impacted and wisdom teeth',
          'Surgical management of oral cysts, tumours, and soft tissue lesions',
          'Pre-prosthetic surgeries such as ridge augmentation and alveoloplasty',
          'Bone grafting and sinus lift procedures',
          'Surgical exposure of impacted teeth for orthodontic treatment'
        ]
      },
      {
        category: 'Implantology',
        items: [
          'Surgical placement of dental implants',
          'Advanced implant procedures including All-on-X and ridge preservation techniques',
          'Management of peri-implantitis and implant-related complications'
        ]
      },
      {
        category: 'Preventive & Supportive Care',
        items: [
          'Oral hygiene counselling and disease prevention guidance',
          'Pre- and post-operative care for medically compromised patients',
          'Fabrication of custom dental appliances for surgical planning and protection'
        ]
      },
      {
        category: 'Restorative & Endodontic Support',
        items: [
          'Minor restorative procedures required before or after surgical treatment',
          'Collaboration on implant-supported prosthetics including crowns and bridges',
          'Performing uncomplicated root canal treatments',
          'Pulp therapy for both primary and permanent teeth'
        ]
      }
    ],
    philosophy: {
      title: 'Precision-Driven Surgical Excellence',
      description: 'Dr. Saif believes that successful surgical dentistry is built on meticulous planning, advanced clinical skill, and complete transparency with patients. His treatment philosophy focuses on safety, accuracy, and long-term stability, ensuring every patient receives the highest standards of personalised care.',
      principles: [
        'Meticulous planning and advanced clinical skill',
        'Complete transparency with patients',
        'Safety, accuracy, and long-term stability',
        'Highest standards of personalised care',
        'Life-changing outcomes through precision-driven treatment'
      ],
      quote: 'Dr. Saif Eldin Tawakul welcomes patients seeking advanced surgical and implant solutions and is committed to providing exceptional care that restores health, function, and confidence.'
    },
    clinicImages: [
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop'
    ]
  },
  {
    id: 'dr-basma-al-rawi',
    name: 'Dr. Basma Alrawi',
    title: 'Specialist Oral Surgeon | Sky Dental Center [With Implant Privileges]',
    specialty: 'Excellence in Oral Surgery, Compassion in Care',
    image: '/doctor2.png',
    aboutImage: '/doctor2.png',
    description: 'Dr. Basma Alrawi is a highly accomplished Specialist Oral Surgeon renowned for her advanced surgical expertise, precision-driven clinical approach, and unwavering commitment to patient safety and wellbeing. With implant privileges and extensive experience managing complex oral and maxillofacial conditions, she brings exceptional skill and a calm, reassuring presence to every treatment journey. Her practice integrates evidence-based surgery, modern diagnostic technologies, and a multidisciplinary philosophy—ensuring that patients receive comprehensive, safe, and predictable surgical outcomes.',
    stats: [
      { label: 'Specialist', value: 'Oral Surgeon' },
      { label: 'Implant Privileges', value: 'Certified' },
      { label: 'Practice', value: 'Sky Dental Center' }
    ],
    education: [
      {
        icon: '🎓',
        degree: 'Specialist Oral Surgeon',
        institution: 'Certified Specialist',
        year: 'Current'
      },
      {
        icon: '🦷',
        degree: 'Implant Privileges',
        institution: 'Certified Implant Surgeon',
        year: 'Current'
      },
      {
        icon: '🏥',
        degree: 'Advanced Surgical Training',
        institution: 'Oral and Maxillofacial Surgery',
        year: 'Current'
      },
      {
        icon: '🔬',
        degree: 'Evidence-Based Practice',
        institution: 'Modern Diagnostic Technologies',
        year: 'Current'
      }
    ],
    experience: {
      title: 'Excellence in Oral Surgery, Compassion in Care',
      description: 'Dr. Basma Alrawi brings exceptional skill and a calm, reassuring presence to every treatment journey. Her practice integrates evidence-based surgery, modern diagnostic technologies, and a multidisciplinary philosophy—ensuring that patients receive comprehensive, safe, and predictable surgical outcomes.',
      highlights: [
        'Advanced surgical expertise in oral and maxillofacial surgery',
        'Extensive experience managing complex oral conditions',
        'Certified implant privileges',
        'Evidence-based surgical practice',
        'Multidisciplinary treatment approach',
        'Commitment to patient safety and wellbeing'
      ]
    },
    expertise: [
      {
        category: 'Evaluation & Diagnosis',
        items: [
          'Comprehensive dental and medical evaluations',
          'Oral cancer screening and assessment of TMJ, salivary glands, and facial structures',
          'CBCT and radiographic interpretation (intraoral & extraoral)',
          'Diagnosis of cysts, tumours, orofacial pain, and oral pathologies',
          'Collaborative treatment planning with multidisciplinary medical teams'
        ]
      },
      {
        category: 'Emergency & Trauma Care',
        items: [
          'Management of dental emergencies and acute oral infections',
          'Treatment of dental and facial trauma, including fractures and soft-tissue lacerations',
          'TMJ dislocation management and abscess drainage'
        ]
      },
      {
        category: 'Preventive & Supportive Care',
        items: [
          'Oral hygiene counselling and disease-prevention strategies',
          'Pre- and post-operative care for medically compromised patients',
          'Custom dental appliances for surgical planning and protection'
        ]
      },
      {
        category: 'Surgical Procedures',
        items: [
          'Simple and complex tooth extractions',
          'Removal of impacted and wisdom teeth',
          'Management of oral cysts, tumours, and soft-tissue lesions',
          'Pre-prosthetic surgeries including ridge augmentation and alveoloplasty',
          'Bone grafting, sinus lift procedures, and surgical exposure of teeth'
        ]
      },
      {
        category: 'Implantology',
        items: [
          'Surgical placement of dental implants',
          'Advanced implant solutions, including All-On-X and ridge-preservation techniques',
          'Management of implant complications and peri-implantitis'
        ]
      },
      {
        category: 'Restorative Support',
        items: [
          'Minor restorative treatments when required before or after surgery',
          'Support in providing implant-supported prostheses such as crowns and bridges'
        ]
      },
      {
        category: 'Endodontics',
        items: [
          'Performing uncomplicated root canal treatments',
          'Pulp therapy (vital and non-vital) for both primary and permanent teeth'
        ]
      }
    ],
    philosophy: {
      title: 'A Patient-Centred Surgical Philosophy',
      description: 'Dr. Basma Alrawi believes that exceptional surgical care requires not only technical expertise but also empathy, communication, and trust. She prioritises:',
      principles: [
        'Clear explanation of procedures and treatment expectations',
        'Gentle, patient-focused surgical delivery',
        'Multidisciplinary collaboration for comprehensive outcomes',
        'Individualised treatment plans tailored to each patient\'s clinical needs and personal comfort',
        'Her professionalism, skill, and dedication ensure that every patient receives surgical care of the highest standard—delivered with compassion, precision, and integrity'
      ],
      quote: 'Dr. Basma Alrawi looks forward to continuing her mission of elevating oral surgical care at Sky Dental Center, ensuring every patient experiences safe, advanced, and transformative treatment.'
    },
    clinicImages: [
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop'
    ]
  },
  {
    id: 'dr-claude-istanbouli',
    name: 'Dr. Claude Istanbouli',
    title: 'Master of Implant Dentistry & Full Mouth Rehabilitation | Sky Dental Center',
    specialty: 'A Legacy of Excellence Spanning Three Decades',
    image: '/doctor3.png',
    aboutImage: '/doctor3.png',
    description: 'With more than 30 years of transformative experience in restorative, surgical, and cosmetic dentistry, Dr. Claude Istanbouli stands as one of the region\'s foremost authorities in dental implants and full-mouth rehabilitation. Since graduating from Damascus University in 1988 and completing advanced training in cosmetic and restorative dentistry at UCLA, California in 1999, Dr. Istanbouli has built a distinguished international career across the United States and the UAE. His professional journey includes key positions at ADNOC Medical Services and Mubadala Health\'s Healthpoint Hospital, where he contributed to elevating clinical standards and delivering life-changing results. Today, as a leading specialist at Sky Dental Center in Khalifa City A, part of CMC Medical, he continues to redefine modern implant dentistry with unparalleled expertise and innovation. What truly sets Dr. Istanbouli apart is his pioneering role in bringing regenerative dental techniques to Abu Dhabi. He was among the first to introduce stem cell–based biological management and Platelet-Rich Fibrin (PRF) therapy, leveraging the patient\'s own blood to accelerate healing, optimise implant integration, and enhance surgical outcomes. His gentle clinical approach, combined with meticulous attention to detail, has enabled him to successfully rehabilitate even the most complex cases—restoring full oral function, confidence, and quality of life for thousands of patients.',
    stats: [
      { label: 'Years of Experience', value: '30+' },
      { label: 'International Career', value: 'USA & UAE' },
      { label: 'Pioneering Innovation', value: 'Regenerative Dentistry' }
    ],
    education: [
      {
        icon: '🎓',
        degree: 'Dental Degree',
        institution: 'Damascus University',
        year: '1988'
      },
      {
        icon: '🎓',
        degree: 'Advanced Training in Cosmetic and Restorative Dentistry',
        institution: 'UCLA, California',
        year: '1999'
      },
      {
        icon: '📜',
        degree: 'American National Board Certification',
        institution: 'American Dental Association (ADA)',
        year: '1999'
      },
      {
        icon: '🏆',
        degree: 'Fellowship in Implant Dentistry',
        institution: 'American Academy of Implant Dentistry (AAID)',
        year: '2013'
      },
      {
        icon: '💉',
        degree: 'Fellowship in Anti-Aging Medicine',
        institution: 'American Academy of Anti-Aging Medicine (A4M)',
        year: '2018'
      },
      {
        icon: '🦷',
        degree: 'UAE Department of Health Implant Privileges',
        institution: 'Abu Dhabi DOH Examination Panel',
        year: 'Current'
      }
    ],
    experience: {
      title: 'A Legacy of Excellence Spanning Three Decades',
      description: 'Dr. Claude Istanbouli has built a distinguished international career across the United States and the UAE. His professional journey includes key positions at ADNOC Medical Services and Mubadala Health\'s Healthpoint Hospital, where he contributed to elevating clinical standards and delivering life-changing results. Today, as a leading specialist at Sky Dental Center in Khalifa City A, part of CMC Medical, he continues to redefine modern implant dentistry with unparalleled expertise and innovation.',
      highlights: [
        '30+ years of transformative experience in restorative, surgical, and cosmetic dentistry',
        'Pioneering role in bringing regenerative dental techniques to Abu Dhabi',
        'First to introduce stem cell–based biological management and PRF therapy',
        'Key positions at ADNOC Medical Services and Mubadala Health\'s Healthpoint Hospital',
        'Leading specialist at Sky Dental Center in Khalifa City A',
        'Active member of American Dental Association (ADA) since 1999',
        'Service on Abu Dhabi DOH Examination Panel for Implant Privilege assessments'
      ]
    },
    expertise: [
      {
        category: 'Dental Implants & Full Mouth Rehabilitation',
        items: [
          'Specialised in complete oral reconstructions and full-mouth implant solutions',
          'Expert in treating medically compromised patients requiring advanced implant therapy',
          'Utilises cutting-edge technology and biological enhancement methods for predictable, long-lasting results'
        ]
      },
      {
        category: 'Restorative & Cosmetic Dentistry',
        items: [
          'Precision crowns, onlays, veneers, and full smile design',
          'Aesthetic restorations that harmonise facial proportions with optimal occlusal function',
          'Blends artistic craftsmanship with evidence-based restorative science'
        ]
      },
      {
        category: 'Advanced Surgical Procedures',
        items: [
          'Skilled in multiple extractions, lesion removal, and pre-implant surgical preparation',
          'Three decades of refined surgical expertise ensuring safe and predictable outcomes'
        ]
      },
      {
        category: 'Comprehensive Dental Management',
        items: [
          'Provides root canal therapy and tailored dental maintenance programmes',
          'Trains patients in post-implant care and long-term oral hygiene for treatment longevity'
        ]
      },
      {
        category: 'Specialised Aesthetic Treatments',
        items: [
          'Functional Botox for gummy smile correction and bruxism management',
          'Minimally invasive techniques that improve comfort, function, and facial aesthetics'
        ]
      },
      {
        category: 'Regenerative Techniques',
        items: [
          'Stem cell–based biological management',
          'Platelet-Rich Fibrin (PRF) therapy',
          'Biological enhancement methods for accelerated healing and optimal implant integration'
        ]
      }
    ],
    philosophy: {
      title: 'Commitment to Excellence',
      description: 'Beyond his extensive clinical achievements, Dr. Claude Istanbouli is deeply committed to the advancement of the dental profession. He regularly participates in continuing education, mentors aspiring clinicians, and contributes to shaping the future of implant dentistry through training and scientific knowledge-sharing. His legacy is reflected not only in the thousands of patients whose lives he has transformed, but also in the next generation of dental professionals whose careers he continues to inspire.',
      principles: [
        'Regular participation in continuing education',
        'Mentoring aspiring clinicians',
        'Contributing to shaping the future of implant dentistry',
        'Training and scientific knowledge-sharing',
        'Precise, compassionate, and transformative care'
      ],
      quote: 'Dr. Claude Istanbouli welcomes patients seeking world-class implant, surgical, and restorative solutions and remains dedicated to delivering care that is precise, compassionate, and transformative.'
    },
    clinicImages: [
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop'
    ]
  },
  {
    id: 'dr-elias-daoud-hanna',
    name: 'Dr. Elias Hanna',
    title: 'Specialist Prosthodontist | Sky Dental Center [With Implant Privileges]',
    specialty: 'Restoring Function, Refining Aesthetics, Redefining Confidence',
    image: '/doctor4.png',
    aboutImage: '/doctor4.png',
    description: 'Dr. Elias Hanna is a distinguished Specialist Prosthodontist with advanced expertise in the restoration and replacement of missing or damaged teeth, functional rehabilitation, and aesthetic smile enhancement. With implant privileges and extensive training in prosthodontic sciences, he offers patients comprehensive restorative solutions grounded in precision, craftsmanship, and evidence-based excellence. His clinical philosophy focuses on restoring harmony, comfort, and confidence—ensuring that every patient receives personalised, functional, and naturally aesthetic outcomes.',
    stats: [
      { label: 'Specialist', value: 'Prosthodontist' },
      { label: 'Implant Privileges', value: 'Certified' },
      { label: 'Practice', value: 'Sky Dental Center' }
    ],
    education: [
      {
        icon: '🎓',
        degree: 'Specialist Prosthodontist',
        institution: 'Certified Specialist',
        year: 'Current'
      },
      {
        icon: '🦷',
        degree: 'Implant Privileges',
        institution: 'Certified Implant Specialist',
        year: 'Current'
      },
      {
        icon: '🏥',
        degree: 'Advanced Prosthodontic Training',
        institution: 'Prosthodontic Sciences',
        year: 'Current'
      },
      {
        icon: '🔬',
        degree: 'Evidence-Based Excellence',
        institution: 'Precision and Craftsmanship',
        year: 'Current'
      }
    ],
    experience: {
      title: 'Restoring Function, Refining Aesthetics, Redefining Confidence',
      description: 'Dr. Elias Hanna specialises in the full spectrum of prosthodontic treatment, providing tailored restorative and rehabilitative solutions that improve function, aesthetics, and long-term oral health. With implant privileges, he is fully qualified to perform surgical placement of dental implants and restoration of implant-supported prostheses, ensuring high success rates, long-term stability, and seamless functional integration.',
      highlights: [
        'Distinguished Specialist Prosthodontist with advanced expertise',
        'Specialises in restoration and replacement of missing or damaged teeth',
        'Expert in functional rehabilitation and aesthetic smile enhancement',
        'Certified implant privileges for surgical placement and restoration',
        'Comprehensive restorative solutions grounded in precision and craftsmanship',
        'Personalised, functional, and naturally aesthetic outcomes'
      ]
    },
    expertise: [
      {
        category: 'Evaluation & Diagnostic Services',
        items: [
          'Comprehensive assessment of oral health, occlusion, TMJ function, and soft tissues',
          'Diagnosis of conditions affecting chewing efficiency, phonetics, and facial aesthetics',
          'Taking and interpreting diagnostic radiographs, including intraoral and panoramic imaging',
          'Risk assessment and personalised treatment planning tailored to functional and aesthetic goals'
        ]
      },
      {
        category: 'Preventive & Emergency Dental Care',
        items: [
          'Oral hygiene treatments including prophylaxis and fluoride application',
          'Preventive counselling on oral habits, home-care techniques, and dietary guidance',
          'Management of dental emergencies, including trauma and prosthesis-related complications'
        ]
      },
      {
        category: 'Restorative Dental Treatments',
        items: [
          'Composite restorations for carious or fractured teeth',
          'Post and core build-ups to strengthen compromised teeth',
          'Root canal treatment for non-complex endodontic cases'
        ]
      },
      {
        category: 'Prosthodontic Rehabilitation - Removable',
        items: [
          'Fabrication and fitting of full and partial dentures',
          'Conventional and immediate denture options based on patient needs'
        ]
      },
      {
        category: 'Prosthodontic Rehabilitation - Fixed',
        items: [
          'Crown and bridge restorations for individual or multiple tooth replacement',
          'Veneers for aesthetic enhancements and minor alignment corrections',
          'Restoration of missing teeth using tooth-supported or implant-supported fixed prostheses'
        ]
      },
      {
        category: 'Implant-Supported Prostheses',
        items: [
          'Fabrication and restoration of implant-supported crowns, bridges, and overdentures',
          'Occlusal rehabilitation and bite correction for functional and aesthetic optimisation'
        ]
      },
      {
        category: 'Implantology',
        items: [
          'Surgical placement of dental implants',
          'Restoration of implant-supported prostheses including crowns, bridges, and hybrid solutions',
          'Precision in implant dentistry ensuring high success rates, long-term stability, and seamless functional integration'
        ]
      }
    ],
    philosophy: {
      title: 'Patient-Centred Philosophy',
      description: 'Dr. Elias believes that exceptional prosthodontic care requires a holistic understanding of patient needs—balancing function, aesthetics, comfort, and long-term health. He provides clear communication and detailed explanations, personalised treatment planning, and a gentle, reassuring approach that supports patient confidence.',
      principles: [
        'Clear communication and detailed explanations',
        'Personalised treatment planning',
        'Gentle, reassuring approach that supports patient confidence',
        'Holistic understanding of patient needs',
        'Balancing function, aesthetics, comfort, and long-term health',
        'Transformative results that enhance both quality of life and overall wellbeing'
      ],
      quote: 'Dr. Elias Hanna looks forward to welcoming patients seeking advanced restorative, prosthodontic, and implant solutions—delivering care defined by precision, artistry, and trust.'
    },
    clinicImages: [
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop'
    ]
  },
  {
    id: 'dr-amr-husson',
    name: 'Dr. Amr Husson',
    title: 'Orthodontic Specialist | Sky Dental Center',
    specialty: 'Transforming Smiles Through Precision and Personalised Care',
    image: '/doctor5.png',
    aboutImage: '/doctor5.png',
    description: 'Dr. Amr Husson is an accomplished Orthodontic Specialist with more than nine years of advanced clinical expertise dedicated to diagnosing, correcting, and preventing dental and facial irregularities. At Sky Dental Center, he combines cutting-edge orthodontic technologies with a compassionate, patient-focused approach to create healthy, aesthetically refined smiles for children, teens, and adults alike. His commitment to excellence, meticulous attention to detail, and reliance on evidence-based practice ensure that every treatment delivers optimal functional stability and exceptional cosmetic results.',
    stats: [
      { label: 'Years of Experience', value: '9+' },
      { label: 'Master\'s Degree', value: 'Orthodontics' },
      { label: 'Specialised Training', value: 'Invisalign & TADs' }
    ],
    education: [
      {
        icon: '🎓',
        degree: 'Master\'s Degree in Orthodontics',
        institution: 'Damascus University',
        year: '2016'
      },
      {
        icon: '🎓',
        degree: 'Bachelor\'s Degree in Dental Surgery',
        institution: 'Damascus University',
        year: '2010'
      },
      {
        icon: '🏆',
        degree: 'Invisalign Certification',
        institution: 'Certified Provider',
        year: 'Current'
      },
      {
        icon: '🔬',
        degree: 'Temporary Anchorage Devices (TADs)',
        institution: 'Advanced Biomechanical Control',
        year: 'Current'
      },
      {
        icon: '📜',
        degree: 'Licensed Member',
        institution: 'Syrian Dental Association',
        year: '2010'
      },
      {
        icon: '🌍',
        degree: 'Registered Orthodontic Specialist',
        institution: 'UAE & Syria',
        year: 'Current'
      }
    ],
    experience: {
      title: 'Clinical Excellence Across Continents',
      description: 'Dr. Husson\'s professional journey demonstrates steady growth, diverse experience, and a commitment to continuous development. His early clinical training at the Faculty of Dentistry, Damascus University provided him with invaluable exposure to complex orthodontic cases. Between 2014 and 2021, he practiced in leading polyclinics across Syria, treating a wide variety of patient populations and refining his approach to comprehensive orthodontic care. After relocating to the UAE, he joined Safe Care Dental Centre, Abu Dhabi (2022–2023), where he adapted his clinical expertise to serve the region\'s multicultural community. Since June 2023, Dr. Husson has been an essential part of Sky Dental Center in Khalifa City A, continuing to deliver outstanding orthodontic outcomes with precision and consistency.',
      highlights: [
        'More than nine years of advanced clinical expertise in orthodontics',
        'Supervisor in the Orthodontics Department during postgraduate studies',
        'Extensive experience in leading polyclinics across Syria (2014-2021)',
        'Adapted clinical expertise to serve multicultural community in UAE',
        'Essential part of Sky Dental Center since June 2023',
        'Dedicated to staying at the forefront of evolving orthodontic technologies'
      ]
    },
    expertise: [
      {
        category: 'Management of Malocclusions',
        items: [
          'Crowding and spacing',
          'Deep bite and open bite',
          'All Angle classifications: Class I, II, and III',
          'Correction of functional habits (thumb-sucking, tongue thrust)'
        ]
      },
      {
        category: 'Full Spectrum of Orthodontic Treatment Modalities',
        items: [
          'Traditional metal braces',
          'Aesthetic ceramic braces',
          'Self-ligating systems',
          'Clear aligner therapy (including Invisalign)'
        ]
      },
      {
        category: 'Paediatric Orthodontics',
        items: [
          'Preventive and interceptive orthodontics',
          'Space maintainers',
          'Functional appliances guiding proper jaw development'
        ]
      },
      {
        category: 'Advanced Biomechanics & TADs',
        items: [
          'Temporary Anchorage Devices enabling precise control in complex movements',
          'Customised treatment mechanics for challenging orthodontic cases'
        ]
      },
      {
        category: 'Surgical Orthodontics',
        items: [
          'Collaborative treatment planning with oral surgeons',
          'Management of skeletal discrepancies requiring combined orthodontic–surgical approaches'
        ]
      },
      {
        category: 'Technology-Driven Care',
        items: [
          '3D intraoral scanning',
          'Digital treatment simulations',
          'Precision-designed appliances',
          'Highly accurate planning and improved patient comfort',
          'Ability for patients to preview their future smiles before treatment begins'
        ]
      }
    ],
    philosophy: {
      title: 'Technology-Driven, Patient-Centred Care',
      description: 'At Sky Dental Center, Dr. Husson integrates a fully digital orthodontic workflow through 3D intraoral scanning, digital treatment simulations, and precision-designed appliances. This technology enables highly accurate planning, improved patient comfort, and the ability for patients to preview their future smiles even before treatment begins. His approach emphasises patient education, comfort, and clear communication. He collaborates with restorative, prosthodontic, and periodontal specialists when interdisciplinary care is required, ensuring holistic treatment outcomes. Through consistent monitoring and long-term follow-up, he ensures stability, functionality, and lasting satisfaction. Fluent in Arabic and English, Dr. Husson connects naturally with patients from diverse backgrounds, fostering trust and shared decision-making throughout every stage of treatment.',
      principles: [
        'Patient education, comfort, and clear communication',
        'Collaboration with restorative, prosthodontic, and periodontal specialists',
        'Holistic treatment outcomes through interdisciplinary care',
        'Consistent monitoring and long-term follow-up',
        'Ensuring stability, functionality, and lasting satisfaction',
        'Fostering trust and shared decision-making with patients from diverse backgrounds'
      ],
      quote: 'Dr. Amr Husson welcomes patients of all ages and is committed to creating confident, naturally beautiful smiles through advanced orthodontic care rooted in precision, expertise, and compassion.'
    },
    clinicImages: [
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop'
    ]
  },
  {
    id: 'dr-shridhar-munje',
    name: 'Dr. Shridhar Munje',
    title: 'Specialist Orthodontist | Sky Dental Center',
    specialty: 'Advanced Orthodontic Care with Academic Excellence',
    image: '/doctor6.png',
    aboutImage: '/doctor6.png',
    description: 'Dr. Shridhar Munje is a distinguished Specialist Orthodontist with more than 16 years of combined academic and clinical excellence, offering patients an advanced and comprehensive approach to orthodontic care. His career reflects a rare balance between high-level clinical expertise and a deep commitment to dental education, having mentored future dental professionals while continuously refining his mastery of modern orthodontic systems. With a professional journey that spans traditional mechanotherapy, cutting-edge aligner technologies, and interdisciplinary treatment planning, Dr. Munje provides tailored orthodontic solutions designed to achieve functional, aesthetic, and long-lasting results. His patient-centred philosophy emphasises precision, clarity, and comfort—ensuring that every individual receives a customised treatment pathway aligned with their unique dental needs and goals.',
    stats: [
      { label: 'Years of Experience', value: '16+' },
      { label: 'Academic & Clinical', value: 'Combined Excellence' },
      { label: 'Specialist', value: 'Orthodontist' }
    ],
    education: [
      {
        icon: '🎓',
        degree: 'Master of Dental Surgery (MDS) – Orthodontics',
        institution: 'Sharad Pawar Dental College, Datta Meghe University of Medical Sciences',
        year: '2009'
      },
      {
        icon: '🎓',
        degree: 'Bachelor of Dental Surgery (BDS)',
        institution: 'VSPM Dental College, Maharashtra University of Health Sciences',
        year: '2006'
      },
      {
        icon: '📜',
        degree: 'Member',
        institution: 'Maharashtra State Dental Council of India',
        year: '2005'
      },
      {
        icon: '🌍',
        degree: 'Licensed Orthodontic Specialist',
        institution: 'UAE and India',
        year: 'Current'
      }
    ],
    experience: {
      title: 'Career Journey',
      description: 'Dr. Munje\'s professional path reflects extensive international expertise and a steadfast dedication to clinical excellence. At Sky Dental Center, UAE (2018 – Present), he serves as Specialist Orthodontist. Previously, he was Consultant Orthodontist at Bhaskar Orthodontics & Oral Care Centre, Nagpur (2009 – 2018). Additionally, he served as Assistant and Associate Professor in recognised dental colleges in India for 9 years, integrating clinical practice with academic teaching, research, and administrative leadership. His transition from academia to full-time clinical practice demonstrates his enduring commitment to evidence-based orthodontics, patient education, and collaborative treatment planning.',
      highlights: [
        'More than 16 years of combined academic and clinical excellence',
        'Specialist Orthodontist at Sky Dental Center, UAE (2018 – Present)',
        'Consultant Orthodontist at Bhaskar Orthodontics & Oral Care Centre, Nagpur (2009 – 2018)',
        '9 years as Assistant and Associate Professor in recognised dental colleges',
        'Rare balance between high-level clinical expertise and dental education',
        'Mentored future dental professionals while refining mastery of modern orthodontic systems'
      ]
    },
    expertise: [
      {
        category: 'Traditional & Advanced Braces Systems',
        items: [
          'Fixed orthodontic therapy: Beggs, Edgewise, and Pre-adjusted Edgewise systems (MBT, Roth prescriptions)',
          'Ceramic braces for aesthetic alignment',
          'Self-ligating braces for enhanced comfort and efficiency',
          'Lingual orthodontics for discreet, invisible correction',
          'Removable and semi-fixed appliances'
        ]
      },
      {
        category: 'Modern Aligner Technology',
        items: [
          'Invisalign and Smartee clear aligner systems',
          'Customised aligner treatment planning for subtle, aesthetic smile transformation'
        ]
      },
      {
        category: 'Specialised Orthodontic Approaches',
        items: [
          'Myofunctional orthodontics with removable and fixed functional appliances',
          'Preventive and interceptive orthodontics for early developmental intervention',
          'Surgical orthodontics for complex skeletal discrepancies',
          'Adult orthodontic treatments tailored to mature patient needs',
          'TMJ disorder assessment and management'
        ]
      },
      {
        category: 'Advanced Techniques & Interdisciplinary Care',
        items: [
          'Temporary anchorage devices (TADs/micro-implants) for precise tooth movement',
          'Interdisciplinary collaboration with periodontists, prosthodontists, endodontists, and oral surgeons',
          'Comprehensive planning for complex full-mouth rehabilitation and aesthetic cases'
        ]
      }
    ],
    philosophy: {
      title: 'Professional Philosophy',
      description: 'Dr. Munje believes that orthodontic care is both a science and an art—requiring technical precision, thoughtful diagnosis, and individualised attention to each patient\'s functional and cosmetic goals. His approach prioritises patient comfort, informed decision-making, and treatment outcomes that enhance both oral health and confidence.',
      principles: [
        'Technical precision and thoughtful diagnosis',
        'Individualised attention to each patient\'s functional and cosmetic goals',
        'Patient comfort and informed decision-making',
        'Treatment outcomes that enhance both oral health and confidence',
        'Customised treatment pathway aligned with unique dental needs and goals',
        'Precision, clarity, and comfort in patient-centred philosophy'
      ],
      quote: 'Dr. Shridhar Munje welcomes patients of all ages and looks forward to creating beautifully aligned, healthy smiles that stand the test of time.'
    },
    clinicImages: [
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop'
    ]
  },
  {
    id: 'dr-mohammad-abdulrazak',
    name: 'Dr. Mohammad Abdulrazak',
    title: 'Specialist Periodontist | Sky Dental Center',
    specialty: 'Preserving Foundations, Transforming Smiles',
    image: '/doctor7.png',
    aboutImage: '/doctor7.png',
    description: 'Dr. Mohammad Abdulrazak is a highly accomplished Specialist Periodontist with more than a decade of advanced clinical experience dedicated to preserving periodontal health and restoring the structural foundations of the smile. Recognising that healthy gums are essential for long-term oral function and aesthetics, he integrates preventive care with sophisticated surgical techniques to deliver effective and sustainable outcomes for every patient. His refined clinical approach, supported by years of specialised training and international experience, positions him as one of the region\'s leading experts in periodontal therapy and gum-related surgical procedures.',
    stats: [
      { label: 'Years of Experience', value: '10+' },
      { label: 'Specialist', value: 'Periodontist' },
      { label: 'Registered', value: 'UAE, Oman & Syria' }
    ],
    education: [
      {
        icon: '🎓',
        degree: 'Postgraduate Training in Periodontology',
        institution: 'Damascus University',
        year: '2017'
      },
      {
        icon: '🏆',
        degree: 'Syrian Board in Periodontology',
        institution: 'National Centre for Medical Specialties, Damascus, Syria',
        year: 'Awarded'
      },
      {
        icon: '📜',
        degree: 'Licensed Specialist Periodontist',
        institution: 'UAE, Oman, and Syria',
        year: 'Current'
      }
    ],
    experience: {
      title: 'A Decade of Clinical Excellence',
      description: 'With more than 10 years of clinical experience across multiple regions, Dr. Abdulrazak has developed extensive expertise in diagnosing and managing complex periodontal conditions for diverse patient populations. He spent six years in Oman as a periodontal specialist, where he managed challenging and advanced cases with precision and consistency. Prior to that, he served for four years in Syria across several medical centres, gaining invaluable experience working in high-volume, multidisciplinary environments. Beyond his clinical work, Dr. Abdulrazak contributed to training the next generation of dental professionals. He served for two years as a practical supervisor in periodontology, supporting students in both clinical and laboratory settings. This academic role strengthened his ability to simplify complex concepts and reinforced his dedication to evidence-based practice. Since joining Sky Dental Center in 2025, he continues to uphold the exceptional standard of care that defines his professional legacy.',
      highlights: [
        'More than 10 years of advanced clinical experience in periodontology',
        'Six years as periodontal specialist in Oman',
        'Four years in Syria across several medical centres',
        'Two years as practical supervisor in periodontology',
        'Joined Sky Dental Center in 2025',
        'Extensive expertise in diagnosing and managing complex periodontal conditions'
      ]
    },
    expertise: [
      {
        category: 'Non-Surgical Periodontal Therapy',
        items: [
          'Scaling and root planing (deep cleaning)',
          'Periodontal maintenance programmes',
          'Management of early and moderate gum disease'
        ]
      },
      {
        category: 'Advanced Surgical Procedures',
        items: [
          'Treatment of advanced periodontitis',
          'Periodontal flap surgery',
          'Bone grafting and regenerative procedures',
          'Guided tissue regeneration',
          'Soft tissue grafting for gum recession',
          'Crown lengthening (functional & aesthetic)'
        ]
      },
      {
        category: 'Dental Implants & Surgical Support',
        items: [
          'Surgical placement of dental implants',
          'Ridge preservation and bone augmentation',
          'Management of peri-implant disease',
          'Exposure and management of impacted teeth'
        ]
      },
      {
        category: 'Laser-Assisted Periodontal Therapy',
        items: [
          'Minimally invasive laser treatments',
          'Reduced discomfort and faster healing',
          'Enhanced precision for soft tissue procedures'
        ]
      }
    ],
    philosophy: {
      title: 'A Patient-Centred Philosophy',
      description: 'What truly distinguishes Dr. Abdulrazak is his unwavering commitment to patient education and empowerment. He believes that informed patients are better equipped to make decisions that support their long-term oral health. During consultations, he takes the time to explain diagnoses clearly and thoroughly, discuss treatment options in detail, provide practical oral hygiene guidance, and ensure patients feel confident and supported throughout their care. His compassionate, collaborative approach allows patients to feel relaxed and assured, whether they are receiving routine gum treatment or complex surgical interventions. Fluent in Arabic and English, Dr. Abdulrazak communicates effectively with patients from diverse cultural backgrounds and builds trusting, long-lasting relationships.',
      principles: [
        'Unwavering commitment to patient education and empowerment',
        'Clear and thorough explanation of diagnoses',
        'Detailed discussion of treatment options',
        'Practical oral hygiene guidance',
        'Compassionate, collaborative approach',
        'Effective communication with patients from diverse cultural backgrounds'
      ],
      quote: 'Dr. Mohammad Abdulrazak remains committed to advancing periodontal health, protecting the foundations of every smile, and delivering specialist care with precision, empathy, and excellence.'
    },
    clinicImages: [
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop'
    ]
  },
  {
    id: 'dr-hazem-reslan',
    name: 'Dr. Hazem Reslan',
    title: 'Specialist Pedodontist | Sky Dental Center',
    specialty: 'Compassionate, Expert Care for Growing Smiles',
    image: '/doctor8.png',
    aboutImage: '/doctor8.png',
    description: 'Dr. Hazem Reslan is a distinguished Specialist Pedodontist dedicated to delivering exceptional dental care to infants, children, and adolescents. With advanced expertise in paediatric oral health, behavioural management, preventive dentistry, and minimally invasive treatment techniques, he ensures that every child receives compassionate, safe, and personalised care in a comfortable environment. With a deep understanding of the unique dental and emotional needs of young patients, Dr. Hazem combines clinical excellence with a gentle, reassuring approach that builds trust and confidence—laying the foundation for a lifetime of healthy smiles.',
    stats: [
      { label: 'Specialist', value: 'Pedodontist' },
      { label: 'Focus', value: 'Infants, Children & Adolescents' },
      { label: 'Approach', value: 'Compassionate & Expert Care' }
    ],
    education: [
      {
        icon: '🎓',
        degree: 'Specialist Pedodontist',
        institution: 'Certified Specialist',
        year: 'Current'
      },
      {
        icon: '🦷',
        degree: 'Advanced Expertise',
        institution: 'Paediatric Oral Health & Behavioural Management',
        year: 'Current'
      },
      {
        icon: '🏥',
        degree: 'Specialised Training',
        institution: 'Preventive Dentistry & Minimally Invasive Techniques',
        year: 'Current'
      }
    ],
    experience: {
      title: 'Compassionate, Expert Care for Growing Smiles',
      description: 'Dr. Hazem Reslan is a distinguished Specialist Pedodontist dedicated to delivering exceptional dental care to infants, children, and adolescents. With advanced expertise in paediatric oral health, behavioural management, preventive dentistry, and minimally invasive treatment techniques, he ensures that every child receives compassionate, safe, and personalised care in a comfortable environment. With a deep understanding of the unique dental and emotional needs of young patients, Dr. Hazem combines clinical excellence with a gentle, reassuring approach that builds trust and confidence—laying the foundation for a lifetime of healthy smiles.',
      highlights: [
        'Distinguished Specialist Pedodontist',
        'Advanced expertise in paediatric oral health',
        'Expert in behavioural management and preventive dentistry',
        'Minimally invasive treatment techniques',
        'Deep understanding of unique dental and emotional needs of young patients',
        'Gentle, reassuring approach that builds trust and confidence'
      ]
    },
    expertise: [
      {
        category: 'Evaluation & Diagnosis',
        items: [
          'Comprehensive oral evaluations for infants, children, and adolescents',
          'Detection of oral and systemic health conditions',
          'Diagnosis of developmental abnormalities',
          'Taking and interpreting intraoral and extraoral radiographs'
        ]
      },
      {
        category: 'Preventive Care',
        items: [
          'Professional fluoride applications and dental sealants',
          'Oral hygiene treatments and personalised education for children and parents',
          'Dietary and oral habit counselling',
          'Risk-based prevention planning',
          'Custom mouthguards for sports and trauma prevention'
        ]
      },
      {
        category: 'Restorative Treatments',
        items: [
          'Management of dental caries in primary and mixed dentition',
          'Minimally invasive restorations, including aesthetic composites',
          'Temporary and permanent restorations for paediatric cases'
        ]
      },
      {
        category: 'Pulp Therapy',
        items: [
          'Pulpotomy and pulpectomy for primary teeth',
          'Regenerative endodontic procedures for immature permanent teeth'
        ]
      },
      {
        category: 'Behavioural & Sedation Management',
        items: [
          'Non-pharmacologic behaviour guidance techniques',
          'Pharmacological methods including sedation and general anaesthesia (in accordance with clinical protocols)'
        ]
      },
      {
        category: 'Space & Growth Management',
        items: [
          'Placement of space maintainers following early tooth loss',
          'Monitoring and guidance of developing occlusion',
          'Interceptive orthodontic assessment and early intervention'
        ]
      },
      {
        category: 'Surgical Procedures',
        items: [
          'Simple extractions of erupted teeth or roots',
          'Uncomplicated surgical extractions of fractured or residual roots'
        ]
      },
      {
        category: 'Minor Oral Surgery',
        items: [
          'Frenectomy and tongue-tie release',
          'Mucocele removal',
          'Foreign body removal',
          'Surgical exposure of impacted teeth in children',
          'Removal of supernumerary teeth',
          'Decoronation of ankylosed teeth'
        ]
      },
      {
        category: 'Paediatric Prosthodontics',
        items: [
          'Interim crowns and prosthetic appliances for developmental defects',
          'Restorations designed to support oral function, speech, and aesthetics'
        ]
      },
      {
        category: 'Emergency Dental Care',
        items: [
          'Immediate management of paediatric dental emergencies',
          'Referral to specialised emergency services when required'
        ]
      }
    ],
    philosophy: {
      title: 'A Patient-Centred Paediatric Philosophy',
      description: 'Dr. Hazem believes that paediatric dentistry goes far beyond treating teeth—it is about nurturing trust, reducing anxiety, and creating a positive dental experience from the very first visit. His calm, empathetic manner helps children feel safe and supported, while his expert communication style ensures parents remain informed and confident throughout every step of their child\'s care. From early childhood visits to complex restorative and surgical procedures, Dr. Hazem is committed to promoting lifelong oral health through exceptional paediatric dental care rooted in precision, empathy, and excellence.',
      principles: [
        'Nurturing trust and reducing anxiety',
        'Creating a positive dental experience from the very first visit',
        'Calm, empathetic manner that helps children feel safe and supported',
        'Expert communication style ensuring parents remain informed and confident',
        'Promoting lifelong oral health through exceptional paediatric dental care',
        'Rooted in precision, empathy, and excellence'
      ],
      quote: 'From early childhood visits to complex restorative and surgical procedures, Dr. Hazem is committed to promoting lifelong oral health through exceptional paediatric dental care rooted in precision, empathy, and excellence.'
    },
    clinicImages: [
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop'
    ]
  },
  {
    id: 'dr-nasrin-badreldin',
    name: 'Dr. Nasrin Badreldin Mahgoub',
    title: 'Specialist Endodontist | Sky Dental Center',
    specialty: 'Precision, Compassion, and Advanced Endodontic Excellence',
    image: '/doctor9.png',
    aboutImage: '/doctor9.png',
    description: 'Dr. Nasrin Badreldin Mahgoub is a passionate, patient-centred Endodontic Specialist with more than 15 years of clinical experience across Sudan, China, Egypt, and the UAE. Her practice is defined by precision, deep clinical insight, and mastery of advanced root canal therapies that restore comfort, function, and confidence to every patient she treats. With a reputation for delivering meticulous endodontic care using modern, evidence-based techniques, Dr. Nasrin provides exceptional treatment outcomes even in the most complex and challenging cases.',
    stats: [
      { label: 'Years of Experience', value: '15+' },
      { label: 'International Experience', value: 'Sudan, China, Egypt & UAE' },
      { label: 'Specialist', value: 'Endodontist' }
    ],
    education: [
      {
        icon: '🎓',
        degree: 'Master\'s Degree in Endodontics',
        institution: 'Xi\'an Jiaotong University, China',
        year: 'Completed'
      },
      {
        icon: '🎓',
        degree: 'Bachelor of Dental Surgery (BDS)',
        institution: 'University of Science & Technology, Omdurman',
        year: 'Completed'
      },
      {
        icon: '🏆',
        degree: 'Specialised Certifications',
        institution: 'Advanced Endodontics, Implantology, Composite Restoration, Cosmetic Bleaching, Periodontal Surgery',
        year: 'Current'
      },
      {
        icon: '📜',
        degree: 'Licensed Specialist',
        institution: 'Department of Health – Abu Dhabi (DOH)',
        year: 'Current'
      },
      {
        icon: '🌍',
        degree: 'UAE Golden Visa Holder',
        institution: 'Acknowledging impact and contribution to healthcare sector',
        year: 'Current'
      },
      {
        icon: '📚',
        degree: 'Published Researcher',
        institution: 'Journal of the International Society of Preventive and Community Dentistry',
        year: 'Published'
      }
    ],
    experience: {
      title: 'Extensive International Experience',
      description: 'Currently based in Abu Dhabi, Dr. Nasrin serves as an Endodontist at Sky Dental Center, bringing with her an impressive background shaped by roles at Melody Medical Centre, Lefort Dental Centre in Cairo, and Davinci Dental Center in Khartoum. Her diverse clinical journey has strengthened her diagnostic expertise and expanded her ability to manage intricate endodontic cases using a technologically advanced approach. During her postgraduate studies, she gained invaluable hands-on clinical experience as a Registrar at The 1st Affiliated Hospital. Fluent in English, Arabic, and conversational Mandarin Chinese, Dr. Nasrin communicates effortlessly with patients from diverse cultural backgrounds, providing a comfortable and reassuring experience for every individual she treats.',
      highlights: [
        'More than 15 years of clinical experience across Sudan, China, Egypt, and the UAE',
        'Currently serving as Endodontist at Sky Dental Center, Abu Dhabi',
        'Previous roles at Melody Medical Centre, Lefort Dental Centre (Cairo), and Davinci Dental Center (Khartoum)',
        'Registrar at The 1st Affiliated Hospital during postgraduate studies',
        'Fluent in English, Arabic, and conversational Mandarin Chinese',
        'Published researcher contributing to peer-reviewed journals'
      ]
    },
    expertise: [
      {
        category: 'Advanced Endodontic Procedures',
        items: [
          'Advanced root canal therapy',
          'Retreatment of failed root canals',
          'Management of complex endodontic infections',
          'Treatment of traumatic dental injuries'
        ]
      },
      {
        category: 'Aesthetic & Functional Restoration',
        items: [
          'Aesthetic and functional restoration using high-precision techniques',
          'Collaboration with multidisciplinary teams in prosthodontics, periodontics, and orthodontics'
        ]
      },
      {
        category: 'Clinical Approach',
        items: [
          'Gentle technique and state-of-the-art methods',
          'Focus on achieving long-term stability and patient comfort',
          'Meticulous endodontic care using modern, evidence-based techniques',
          'Exceptional treatment outcomes even in the most complex and challenging cases'
        ]
      },
      {
        category: 'Continuous Development',
        items: [
          'Participation in major international dental conferences such as AEEDC Dubai',
          'Specialised courses in implantology and restorative dentistry',
          'Continuous engagement with emerging technologies and scientific advancements',
          'Commitment to lifelong learning and professional excellence'
        ]
      }
    ],
    philosophy: {
      title: 'A Patient-Centred Philosophy',
      description: 'Dr. Nasrin believes that successful endodontic care extends beyond technical accuracy—it requires empathy, communication, and trust. She takes time to explain conditions and treatment options clearly, address patient concerns with understanding and patience, build confidence through transparency and reassurance, and tailor every treatment plan to the patient\'s needs and goals. Her warm, compassionate approach allows her to support patients throughout their healing journey and deliver outcomes that restore both oral health and peace of mind.',
      principles: [
        'Empathy, communication, and trust in patient care',
        'Clear explanation of conditions and treatment options',
        'Addressing patient concerns with understanding and patience',
        'Building confidence through transparency and reassurance',
        'Tailoring every treatment plan to the patient\'s needs and goals',
        'Warm, compassionate approach supporting patients throughout their healing journey'
      ],
      quote: 'Dr. Nasrin Badreldin Mahgoub continues to elevate endodontic care at Sky Dental Center through scientific excellence, clinical mastery, and an unwavering dedication to patient wellbeing.'
    },
    clinicImages: [
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop'
    ]
  },
  {
    id: 'dr-kinan-mohammed',
    name: 'Dr. Kinan Mohammed Mohdi, DDS',
    title: 'General Dental Practitioner | Sky Dental Center',
    specialty: 'Clinical Excellence in General and Prosthodontic Dentistry',
    image: '/doctor10.png',
    aboutImage: '/doctor10.png',
    description: 'With more than 15 years of dedicated clinical experience in general and prosthodontic dentistry, Dr. Kinan Mohammed Mohdi brings a distinguished level of expertise and an exceptional commitment to patient-focused care. His professional journey—beginning with the establishment of his own private clinic in Syria and extending into a longstanding career in the UAE—reflects a deep dedication to clinical excellence, continuous development, and restorative dentistry that restores both function and aesthetic confidence. Through his extensive international experience, Dr. Kinan has become known for his meticulous approach, advanced restorative skills, and his ability to manage complex dental cases with precision, artistry, and a compassionate patient-centred philosophy.',
    stats: [
      { label: 'Years of Experience', value: '15+' },
      { label: 'Specialisation', value: 'General & Prosthodontic Dentistry' },
      { label: 'At Sky Dental Center', value: 'Since 2015' }
    ],
    education: [
      {
        icon: '🎓',
        degree: 'Doctor of Dental Surgery (DDS)',
        institution: 'University of Aleppo, Syria',
        year: '2007'
      },
      {
        icon: '🏆',
        degree: 'Fixed Prosthodontics Certificate',
        institution: 'University of Aleppo',
        year: '2008–2011'
      },
      {
        icon: '🏆',
        degree: 'Fixed Prosthodontics Certificate',
        institution: 'University of Damascus',
        year: '2011–2012'
      },
      {
        icon: '📜',
        degree: 'Advanced Prosthodontic Training',
        institution: 'Comprehensive Restorative Dentistry',
        year: 'Completed'
      }
    ],
    experience: {
      title: 'Professional Journey',
      description: 'Dr. Kinan has built a robust and respected career across both Syria and the UAE. At Sky Dental Center, UAE (2015 – Present), he serves as General Practice Dentist. Previously, he worked in Private Practice & Clinical Roles, UAE (2013 – 2015) as General Practice Dentist, and founded and operated his Private Dental Clinic in Syria (2008 – 2013) as Founder & General Practice Dentist. His long-standing role at Sky Dental Center exemplifies his loyalty, reliability, and the trust he has earned from patients and colleagues alike. Since joining Sky Dental Center in 2015, Dr. Kinan has become an essential member of the medical team. His consistency, clinical excellence, and patient-first philosophy have earned him long-term trust within the community.',
      highlights: [
        'More than 15 years of dedicated clinical experience',
        'Sky Dental Center, UAE (2015 – Present) as General Practice Dentist',
        'Private Practice & Clinical Roles, UAE (2013 – 2015)',
        'Founded and operated Private Dental Clinic, Syria (2008 – 2013)',
        'Essential member of Sky Dental Center medical team since 2015',
        'Long-term trust within the community through consistency and clinical excellence'
      ]
    },
    expertise: [
      {
        category: 'Comprehensive General Dentistry',
        items: [
          'Full oral examinations and personalised treatment planning',
          'Preventive care and patient education',
          'Restorative treatments, including fillings and decay management',
          'Prompt and effective emergency dental care',
          'Routine cleaning and periodontal maintenance'
        ]
      },
      {
        category: 'Advanced Prosthodontic Services',
        items: [
          'Crown and bridge design, fabrication, and placement',
          'Full-mouth rehabilitation for complex restorative needs',
          'Cosmetic veneers and smile enhancement',
          'Complete and partial denture solutions',
          'Implant-supported prosthetic restorations',
          'Precision restorations integrating aesthetics and function'
        ]
      },
      {
        category: 'Aesthetic & Functional Restoration',
        items: [
          'Comprehensive smile makeover treatments',
          'Tooth-coloured restorative solutions',
          'Bite correction and occlusal adjustment therapies'
        ]
      }
    ],
    philosophy: {
      title: 'A Decade of Excellence in the UAE',
      description: 'Dr. Kinan\'s culturally sensitive approach allows him to communicate and connect effectively with patients from diverse backgrounds, ensuring a comfortable and reassuring treatment environment for all. His tenure reflects not only professional expertise but also a genuine commitment to serving patients with integrity, precision, and compassion. His patient-first philosophy, combined with his meticulous approach and advanced restorative skills, enables him to manage complex dental cases with precision, artistry, and a compassionate patient-centred philosophy.',
      principles: [
        'Culturally sensitive approach connecting effectively with diverse backgrounds',
        'Comfortable and reassuring treatment environment for all patients',
        'Genuine commitment to serving patients with integrity, precision, and compassion',
        'Patient-first philosophy combined with meticulous approach',
        'Advanced restorative skills managing complex dental cases',
        'Precision, artistry, and compassionate patient-centred philosophy'
      ],
      quote: 'Dr. Kinan Mohammed Mohdi welcomes new patients and looks forward to supporting them in achieving optimal dental health and a confident, beautiful smile.'
    },
    clinicImages: [
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop'
    ]
  },
  {
    id: 'dr-mohanned-albasha',
    name: 'Dr. Mohanned Albasha',
    title: 'General Dental Practitioner | Sky Dental Center',
    specialty: 'Committed to Precision, Comfort, and Comprehensive Dental Care',
    image: '/doctor11.png',
    aboutImage: '/doctor11.png',
    description: 'Dr. Mohanned Albasha is a dedicated General Dentist who delivers high-quality, patient-centred dental care with precision, compassion, and a commitment to long-term oral health. With extensive experience across the full spectrum of general dentistry, he ensures that every patient receives personalised treatment tailored to their unique needs, whether for prevention, restoration, or urgent care. His approach is grounded in clinical excellence, evidence-based practice, and clear communication—providing patients with confidence and comfort throughout their dental journey.',
    stats: [
      { label: 'Specialist', value: 'General Dentist' },
      { label: 'Approach', value: 'Patient-Centred Care' },
      { label: 'Focus', value: 'Precision & Comfort' }
    ],
    education: [
      {
        icon: '🎓',
        degree: 'General Dental Practitioner',
        institution: 'Certified General Dentist',
        year: 'Current'
      },
      {
        icon: '🏥',
        degree: 'Extensive Experience',
        institution: 'Full Spectrum of General Dentistry',
        year: 'Current'
      },
      {
        icon: '🔬',
        degree: 'Evidence-Based Practice',
        institution: 'Clinical Excellence',
        year: 'Current'
      }
    ],
    experience: {
      title: 'Committed to Precision, Comfort, and Comprehensive Dental Care',
      description: 'Dr. Mohanned Albasha is a dedicated General Dentist who delivers high-quality, patient-centred dental care with precision, compassion, and a commitment to long-term oral health. With extensive experience across the full spectrum of general dentistry, he ensures that every patient receives personalised treatment tailored to their unique needs, whether for prevention, restoration, or urgent care. His approach is grounded in clinical excellence, evidence-based practice, and clear communication—providing patients with confidence and comfort throughout their dental journey.',
      highlights: [
        'Dedicated General Dentist delivering high-quality, patient-centred care',
        'Extensive experience across the full spectrum of general dentistry',
        'Personalised treatment tailored to unique patient needs',
        'Clinical excellence, evidence-based practice, and clear communication',
        'Commitment to long-term oral health',
        'Providing patients with confidence and comfort throughout their dental journey'
      ]
    },
    expertise: [
      {
        category: 'General Dentistry',
        items: [
          'Comprehensive oral examinations and development of personalised treatment plans',
          'Capture, processing, and interpretation of dental radiographs',
          'Immediate management of common dental emergencies',
          'Routine oral hygiene care, including professional scaling and polishing'
        ]
      },
      {
        category: 'Preventive Dentistry',
        items: [
          'Fluoride treatments and application of dental sealants',
          'Education on oral hygiene practices and preventive strategies'
        ]
      },
      {
        category: 'Restorative Dentistry',
        items: [
          'Direct restorations for decayed or damaged teeth',
          'Aesthetic fillings designed to restore function and natural appearance'
        ]
      },
      {
        category: 'Endodontics',
        items: [
          'Uncomplicated root canal treatments for primary and permanent teeth',
          'Pulp therapy for vital and non-vital cases',
          'Post and core build-ups following endodontic procedures'
        ]
      },
      {
        category: 'Oral Surgery',
        items: [
          'Non-surgical extractions of erupted teeth, performed with precision and patient comfort in mind'
        ]
      },
      {
        category: 'Prosthodontics',
        items: [
          'Management of simple prosthodontic cases, including crowns and bridges',
          'Dentures and removable partial dentures (RPDs)',
          'Onlays, inlays, and veneers',
          'Restoration of functional and aesthetic balance through customised prosthetic solutions'
        ]
      },
      {
        category: 'Periodontics',
        items: [
          'Non-surgical periodontal therapy for non-pathologic periodontal conditions',
          'Maintenance treatments aimed at preserving gum health and supporting long-term oral function'
        ]
      }
    ],
    philosophy: {
      title: 'Patient-Centred Philosophy',
      description: 'Dr. Mohanned Albasha believes that exceptional dental care is built on trust, clarity, and comfort. He prioritises patient education, taking the time to explain treatment options and ensure individuals feel informed and relaxed throughout their care. With a gentle clinical approach and dedication to excellence, he strives to create positive dental experiences and long-lasting oral health outcomes for patients of all ages.',
      principles: [
        'Exceptional dental care built on trust, clarity, and comfort',
        'Prioritising patient education and clear communication',
        'Taking time to explain treatment options',
        'Ensuring individuals feel informed and relaxed throughout their care',
        'Gentle clinical approach and dedication to excellence',
        'Creating positive dental experiences and long-lasting oral health outcomes'
      ],
      quote: 'Dr. Mohanned Albasha looks forward to welcoming new patients and supporting them in achieving healthy, confident, and beautiful smiles through high-quality general dentistry.'
    },
    clinicImages: [
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop'
    ]
  },
  {
    id: 'dr-arwa-rashed',
    name: 'Dr. Arwa Rashed Almarshoodi',
    title: 'General Dental Practitioner | Sky Dental Center',
    specialty: 'Restoring Function, Crafting Confidence',
    image: '/doctor12.png',
    aboutImage: '/doctor12.png',
    description: 'Dr. Arwa Rashed Almarshoodi is a distinguished Prosthodontic Specialist who transforms lives by restoring oral function, comfort, and aesthetics with exceptional precision. Through her advanced training and meticulous approach to comprehensive restorative care, she empowers patients to regain their confidence, rediscover their smiles, and achieve long-term oral health. Her clinical philosophy is grounded in the belief that every patient deserves a personalised, functional, and aesthetically harmonious smile—crafted through evidence-based practice and artistic attention to detail.',
    stats: [
      { label: 'Specialist', value: 'Prosthodontic Specialist' },
      { label: 'Residency', value: '3-Year Intensive Training' },
      { label: 'Certification', value: 'Triple Board Certified' }
    ],
    education: [
      {
        icon: '🎓',
        degree: 'Doctor of Dental Surgery (DDS)',
        institution: 'Ajman University of Science and Technology',
        year: '2017'
      },
      {
        icon: '🏆',
        degree: 'Prosthodontics Certification',
        institution: 'Jordan Medical Council',
        year: 'Certified'
      },
      {
        icon: '🏆',
        degree: 'Arab Board Certification',
        institution: 'Arab Board',
        year: 'Certified'
      },
      {
        icon: '🏆',
        degree: 'ACGME-I Certification',
        institution: 'Accreditation Council for Graduate Medical Education – International',
        year: '2024'
      },
      {
        icon: '🏥',
        degree: 'Three-Year Residency in Prosthodontics',
        institution: 'Ambulatory Health Services – Al Ain Dental Centre',
        year: '2021-2024'
      }
    ],
    experience: {
      title: 'Comprehensive Clinical Experience',
      description: 'Dr. Arwa completed an intensive three-year residency in Prosthodontics at Ambulatory Health Services – Al Ain Dental Centre from 2021 to 2024. During this period, she gained extensive hands-on experience in managing complex cases involving missing or compromised teeth, treating damaged oral structures, planning and executing full-mouth rehabilitation cases, and working within multidisciplinary teams to deliver comprehensive care. Her residency nurtured both the advanced technical expertise required for prosthodontic precision and the interpersonal skills essential for guiding patients through transformative restorative journeys.',
      highlights: [
        'Intensive three-year residency in Prosthodontics (2021-2024)',
        'Extensive hands-on experience in managing complex cases',
        'Expert in treating missing or compromised teeth',
        'Skilled in planning and executing full-mouth rehabilitation cases',
        'Experience working within multidisciplinary teams',
        'Advanced technical expertise and interpersonal skills'
      ]
    },
    expertise: [
      {
        category: 'Preventive & Supportive Care',
        items: [
          'Professional cleaning and fluoride applications',
          'Sealants and preventive treatments',
          'Comprehensive patient education on oral hygiene and nutrition'
        ]
      },
      {
        category: 'Restorative Dentistry',
        items: [
          'Direct and indirect fillings',
          'Inlays and onlays',
          'Crowns, bridges, and post–core restorations',
          'Selection of ideal restorative materials based on functional and aesthetic needs'
        ]
      },
      {
        category: 'Oral Surgery & Extractions',
        items: [
          'Simple and surgical tooth extractions',
          'Minor oral surgery, including incision & drainage, foreign body removal, and precise suturing'
        ]
      },
      {
        category: 'Fixed & Removable Prosthodontics',
        items: [
          'Implant–supported restorations',
          'Full and partial dentures',
          'Complex prosthodontic rehabilitation',
          'Restoring oral function and aesthetics with lifelike, durable prostheses'
        ]
      },
      {
        category: 'Aesthetic Excellence',
        items: [
          'Bespoke smile makeover planning',
          'Veneers crafted with artistic precision',
          'Professional teeth-whitening techniques',
          'Cosmetic treatments that seamlessly blend beauty with function'
        ]
      }
    ],
    philosophy: {
      title: 'Patient-Centred Philosophy',
      description: 'Dr. Arwa believes that exceptional prosthodontic care extends beyond technical skill—it requires empathy, collaboration, and a deep understanding of each patient\'s goals. She takes the time to listen carefully to patient concerns, explain treatment options clearly, develop personalised care plans, and provide supportive guidance throughout each stage of treatment. Her gentle manner, transparent communication, and commitment to patient comfort foster trust and long-lasting relationships. Whether restoring a single tooth or rehabilitating an entire smile, Dr. Arwa blends clinical mastery, artistic vision, and compassionate care to deliver transformative results.',
      principles: [
        'Empathy, collaboration, and deep understanding of each patient\'s goals',
        'Listening carefully to patient concerns',
        'Clear explanation of treatment options',
        'Development of personalised care plans',
        'Supportive guidance throughout each stage of treatment',
        'Gentle manner, transparent communication, and commitment to patient comfort'
      ],
      quote: 'Whether restoring a single tooth or rehabilitating an entire smile, Dr. Arwa blends clinical mastery, artistic vision, and compassionate care to deliver transformative results.'
    },
    clinicImages: [
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop'
    ]
  },
  {
    id: 'dr-reem-al-hammadi',
    name: 'Dr. Reem Al-Hammadi',
    title: 'General Dental Practitioner | Sky Dental Center',
    specialty: 'Comprehensive, Patient-Focused Dental Care',
    image: '/doctor13.png',
    aboutImage: '/doctor13.png',
    description: 'Dr. Reem Al-Hammadi is a highly committed general practice dentist who delivers comprehensive, patient-focused dental care grounded in precision, empathy, and evidence-based practice. With a solid academic foundation and extensive clinical exposure across leading healthcare institutions in Abu Dhabi, she has built a reputation as a trusted dental professional who blends technical excellence with genuine dedication to patient wellbeing. Her approach reflects the highest standards of modern dentistry—combining meticulous diagnostic skill, refined clinical techniques, and a warm, reassuring patient experience.',
    stats: [
      { label: 'Education', value: 'Doctor of Dental Medicine (DMD)' },
      { label: 'Practice', value: 'Since 2021' },
      { label: 'At Sky Dental Center', value: 'Since 2024' }
    ],
    education: [
      {
        icon: '🎓',
        degree: 'Doctor of Dental Medicine (DMD)',
        institution: 'Gulf Medical University',
        year: '2019'
      },
      {
        icon: '🏥',
        degree: 'Clinical Internship',
        institution: 'Healthpoint Hospital',
        year: '2021'
      },
      {
        icon: '📜',
        degree: 'Licensed General Dentist',
        institution: 'Registered under the UAE Health Authority',
        year: 'Current'
      }
    ],
    experience: {
      title: 'Professional Experience',
      description: 'Throughout her career, Dr. Reem has developed well-rounded clinical expertise through her work with respected private healthcare providers in Abu Dhabi. At Sky Dental Center (2024 – Present), she serves as General Practice Dentist. Previously, she worked at French Dental Centre (2021 – 2023) and Lazard Medical Centre (2023) as General Practice Dentist. Since commencing her professional practice in 2021, she has consistently expanded her clinical capabilities while upholding the highest standards of safety, accuracy, and patient care.',
      highlights: [
        'Sky Dental Center (2024 – Present) as General Practice Dentist',
        'French Dental Centre (2021 – 2023) as General Practice Dentist',
        'Lazard Medical Centre (2023) as General Practice Dentist',
        'Well-rounded clinical expertise through work with respected healthcare providers',
        'Consistently expanded clinical capabilities since 2021',
        'Upholding the highest standards of safety, accuracy, and patient care'
      ]
    },
    expertise: [
      {
        category: 'Diagnostic & Preventive Care',
        items: [
          'Comprehensive oral examinations and diagnostic evaluations',
          'Personalised treatment planning',
          'Preventive dentistry and oral hygiene education',
          'Prompt management of dental emergencies'
        ]
      },
      {
        category: 'Restorative Dentistry',
        items: [
          'Aesthetic and functional restorative treatments',
          'Tooth-coloured fillings and advanced reconstructions',
          'Simple endodontic procedures (root canal therapy)'
        ]
      },
      {
        category: 'Prosthodontics',
        items: [
          'Crown and bridge restorations',
          'Cosmetic veneers and smile enhancement',
          'Complete and partial dentures',
          'Full-mouth rehabilitation planning and coordination'
        ]
      },
      {
        category: 'Surgical & Periodontal Care',
        items: [
          'Non-surgical tooth extractions',
          'Non-surgical periodontal therapy',
          'Gum health maintenance and disease control'
        ]
      }
    ],
    philosophy: {
      title: 'Professional Philosophy',
      description: 'Dr. Reem believes that exceptional dentistry is built on more than clinical skill—it requires trust, transparency, and a deep understanding of each patient\'s concerns and goals. She strives to create a supportive environment where patients feel informed, valued, and confident in every step of their treatment journey.',
      principles: [
        'Exceptional dentistry built on more than clinical skill',
        'Trust, transparency, and deep understanding of each patient\'s concerns and goals',
        'Creating a supportive environment where patients feel informed, valued, and confident',
        'Comprehensive, patient-focused dental care grounded in precision, empathy, and evidence-based practice',
        'Technical excellence with genuine dedication to patient wellbeing',
        'Meticulous diagnostic skill, refined clinical techniques, and warm, reassuring patient experience'
      ],
      quote: 'Dr. Reem Al-Hammadi looks forward to welcoming new patients and partnering with them in achieving lasting oral health and confident, beautiful smiles.'
    },
    clinicImages: [
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop'
    ]
  }
]

export function getDoctorById(id: string): DoctorDetail | undefined {
  return doctorsData.find(doctor => doctor.id === id)
}
