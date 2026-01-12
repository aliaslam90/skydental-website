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
    name: 'Dr. Saifaldin Tawakul',
    title: 'DDS, MS',
    specialty: 'Orthodontist',
    image: '/doctor1.png',
    aboutImage: '/doctor1.png',
    description: 'Dr. Saifaldin Tawakul is a distinguished orthodontist with over 15 years of experience in transforming smiles through advanced orthodontic techniques. Specializing in both traditional braces and clear aligner therapy, Dr. Tawakul combines precision with artistry to create beautiful, functional smiles. His patient-centered approach and commitment to excellence have made him a trusted name in orthodontic care.',
    stats: [
      { label: 'Years of Experience', value: '15+' },
      { label: 'Happy Patients', value: '4,500+' },
      { label: 'Successful Cases', value: '9,000+' }
    ],
    education: [
      {
        icon: '🎓',
        degree: 'Master of Science in Orthodontics',
        institution: 'New York University College of Dentistry',
        year: '2010'
      },
      {
        icon: '🎓',
        degree: 'Doctor of Dental Surgery (DDS)',
        institution: 'University of Pennsylvania',
        year: '2007'
      },
      {
        icon: '📜',
        degree: 'Board Certification',
        institution: 'American Board of Orthodontics',
        year: '2011'
      },
      {
        icon: '🏆',
        degree: 'Advanced Invisalign Certification',
        institution: 'Align Technology',
        year: '2013'
      }
    ],
    experience: {
      title: 'Comprehensive Orthodontic Experience',
      description: 'With extensive training in the latest orthodontic technologies, Dr. Tawakul has successfully treated thousands of patients, from children to adults. His expertise in complex cases and commitment to continuing education ensures optimal results for every patient.',
      highlights: [
        'Invisalign Diamond Provider with 9,000+ cases',
        'Specialist in accelerated orthodontic treatment',
        'Expert in surgical orthodontics and complex cases',
        'Published researcher in orthodontic journals',
        'International speaker at orthodontic conferences'
      ]
    },
    expertise: [
      {
        category: 'Clear Aligner Therapy',
        items: [
          'Invisalign treatment',
          'Teen aligner programs',
          'Adult orthodontics',
          'Accelerated treatment options',
          'Retention protocols'
        ]
      },
      {
        category: 'Traditional Orthodontics',
        items: [
          'Metal and ceramic braces',
          'Self-ligating braces',
          'Lingual braces',
          'Early intervention',
          'Surgical orthodontics'
        ]
      },
      {
        category: 'Specialized Treatments',
        items: [
          'TMJ disorder treatment',
          'Sleep apnea appliances',
          'Interceptive orthodontics',
          'Complex bite corrections',
          'Aesthetic smile design'
        ]
      }
    ],
    philosophy: {
      title: 'Patient-Centric Philosophy',
      description: 'Dr. Tawakul believes in creating personalized treatment plans that consider each patient\'s unique facial features, dental health, and lifestyle preferences.',
      principles: [
        'Comprehensive diagnostic evaluation',
        'Clear communication and treatment planning',
        'Latest technology for optimal results',
        'Comfortable and efficient treatment',
        'Long-term stability and retention'
      ],
      quote: 'Every smile tells a story. My mission is to help my patients write their best chapter through expert orthodontic care.'
    },
    clinicImages: [
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop'
    ]
  },
  {
    id: 'dr-basma-al-rawi',
    name: 'Dr. Basma Al Rawi',
    title: 'DDS, FACD',
    specialty: 'Cosmetic Dentistry',
    image: '/doctor2.png',
    aboutImage: '/doctor2.png',
    description: 'Dr. Basma Al Rawi is a renowned cosmetic dentist with a passion for creating stunning smiles. With over 12 years of experience, she specializes in smile makeovers, porcelain veneers, and advanced whitening techniques. Dr. Al Rawi\'s artistic eye and meticulous attention to detail have transformed countless smiles, boosting her patients\' confidence and quality of life.',
    stats: [
      { label: 'Years of Experience', value: '12+' },
      { label: 'Smile Makeovers', value: '2,000+' },
      { label: 'Procedures Performed', value: '8,500+' }
    ],
    education: [
      {
        icon: '🎓',
        degree: 'Advanced Cosmetic Dentistry',
        institution: 'Las Vegas Institute for Advanced Dental Studies',
        year: '2014'
      },
      {
        icon: '🎓',
        degree: 'Doctor of Dental Surgery (DDS)',
        institution: 'University of Southern California',
        year: '2011'
      },
      {
        icon: '📜',
        degree: 'Fellowship in Cosmetic Dentistry',
        institution: 'American Academy of Cosmetic Dentistry',
        year: '2015'
      },
      {
        icon: '🏆',
        degree: 'Master Ceramist Certification',
        institution: 'European Academy of Esthetic Dentistry',
        year: '2017'
      }
    ],
    experience: {
      title: 'Comprehensive Cosmetic Experience',
      description: 'Dr. Al Rawi has dedicated her career to the art and science of cosmetic dentistry. Her expertise in smile design, combined with cutting-edge technology, allows her to create natural-looking, beautiful smiles that exceed patient expectations.',
      highlights: [
        'Specialist in full smile makeovers',
        'Expert in porcelain veneer placement',
        'Advanced training in digital smile design',
        'Featured in cosmetic dentistry publications',
        'Regular instructor at aesthetic dentistry courses'
      ]
    },
    expertise: [
      {
        category: 'Smile Design',
        items: [
          'Digital smile design',
          'Full smile makeovers',
          'Gum contouring',
          'Smile line optimization',
          'Facial aesthetics integration'
        ]
      },
      {
        category: 'Cosmetic Restorations',
        items: [
          'Porcelain veneers',
          'Composite bonding',
          'All-ceramic crowns',
          'Teeth whitening',
          'Minimally invasive dentistry'
        ]
      },
      {
        category: 'Advanced Procedures',
        items: [
          'Laser dentistry',
          'Gum recontouring',
          'Bite reconstruction',
          'Esthetic implant restoration',
          'Anti-aging facial treatments'
        ]
      }
    ],
    philosophy: {
      title: 'Artistry Meets Science',
      description: 'Dr. Al Rawi believes that every smile is unique and deserves a personalized approach that harmonizes facial aesthetics with dental function.',
      principles: [
        'Comprehensive smile analysis and planning',
        'Natural-looking aesthetic results',
        'Minimal tooth preparation techniques',
        'High-quality materials and craftsmanship',
        'Patient comfort and satisfaction first'
      ],
      quote: 'A beautiful smile is more than just straight white teeth—it\'s about creating harmony between your facial features, personality, and dental aesthetics.'
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
    title: 'DDS, MS',
    specialty: 'Master of Implant Dentistry',
    image: '/doctor3.png',
    aboutImage: '/doctor3.png',
    description: 'Dr. Claude Istanbouli is a renowned implant dentistry specialist with over 10 years of experience in advanced dental implant procedures. His expertise in full-mouth rehabilitation, bone grafting, and immediate implant placement has restored smiles and confidence for thousands of patients. Dr. Istanbouli combines surgical precision with aesthetic excellence to deliver exceptional results.',
    stats: [
      { label: 'Years of Experience', value: '10+' },
      { label: 'Implants Placed', value: '5,000+' },
      { label: 'Happy Patients', value: '3,500+' }
    ],
    education: [
      {
        icon: '🎓',
        degree: 'Master of Science in Implant Dentistry',
        institution: 'Harvard School of Dental Medicine',
        year: '2014'
      },
      {
        icon: '🎓',
        degree: 'Doctor of Dental Surgery (DDS)',
        institution: 'Boston University',
        year: '2011'
      },
      {
        icon: '📜',
        degree: 'Board Certification',
        institution: 'International Congress of Oral Implantologists',
        year: '2015'
      },
      {
        icon: '🏆',
        degree: 'Advanced Bone Grafting Certification',
        institution: 'Misch International Implant Institute',
        year: '2016'
      }
    ],
    experience: {
      title: 'Comprehensive Implant Experience',
      description: 'Dr. Istanbouli specializes in complex implant cases including full-mouth rehabilitation, immediate loading protocols, and advanced bone regeneration techniques. His commitment to continuing education ensures patients receive the most current and effective implant solutions.',
      highlights: [
        'Specialist in immediate implant placement',
        'Expert in full-mouth reconstruction',
        'Advanced training in bone augmentation',
        'Published researcher in implant dentistry',
        'International lecturer on implant techniques'
      ]
    },
    expertise: [
      {
        category: 'Dental Implants',
        items: [
          'Single and multiple implants',
          'Full arch reconstruction',
          'Immediate implant placement',
          'All-on-4 and All-on-6 protocols',
          'Implant-supported dentures'
        ]
      },
      {
        category: 'Bone Regeneration',
        items: [
          'Bone grafting procedures',
          'Sinus lift surgery',
          'Ridge augmentation',
          'Guided bone regeneration',
          'Socket preservation'
        ]
      },
      {
        category: 'Advanced Procedures',
        items: [
          'Zygomatic implants',
          'Computer-guided surgery',
          '3D planning and navigation',
          'Aesthetic implant restoration',
          'Complex case management'
        ]
      }
    ],
    philosophy: {
      title: 'Excellence in Implant Dentistry',
      description: 'Dr. Istanbouli believes that dental implants should restore not just function, but also confidence and quality of life. He approaches each case with meticulous planning and personalized care.',
      principles: [
        'Comprehensive treatment planning',
        'State-of-the-art technology',
        'Minimally invasive techniques',
        'Long-term success focus',
        'Patient-centered approach'
      ],
      quote: 'Dental implants are not just about replacing teeth—they\'re about restoring lives. Every patient deserves a solution that looks, feels, and functions like natural teeth.'
    },
    clinicImages: [
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop'
    ]
  },
  {
    id: 'dr-elias-daoud-hanna',
    name: 'Dr. Elias Daoud Hanna',
    title: 'DDS, MD',
    specialty: 'Oral Surgeon',
    image: '/doctor4.png',
    aboutImage: '/doctor4.png',
    description: 'Dr. Elias Daoud Hanna is a board-certified oral and maxillofacial surgeon with over 20 years of experience. His expertise encompasses complex tooth extractions, dental implants, jaw surgery, and facial trauma reconstruction. Known for his surgical precision and compassionate care, Dr. Hanna has helped thousands of patients achieve optimal oral health and function.',
    stats: [
      { label: 'Years of Experience', value: '20+' },
      { label: 'Successful Surgeries', value: '12,000+' },
      { label: 'Happy Patients', value: '6,500+' }
    ],
    education: [
      {
        icon: '🎓',
        degree: 'Medical Degree (MD)',
        institution: 'Johns Hopkins School of Medicine',
        year: '2003'
      },
      {
        icon: '🎓',
        degree: 'Oral & Maxillofacial Surgery Residency',
        institution: 'Massachusetts General Hospital',
        year: '2007'
      },
      {
        icon: '🎓',
        degree: 'Doctor of Dental Surgery (DDS)',
        institution: 'Columbia University',
        year: '1999'
      },
      {
        icon: '📜',
        degree: 'Board Certification',
        institution: 'American Board of Oral & Maxillofacial Surgery',
        year: '2008'
      }
    ],
    experience: {
      title: 'Comprehensive Surgical Experience',
      description: 'With dual training in dentistry and medicine, Dr. Hanna brings unparalleled expertise to complex oral and maxillofacial procedures. His extensive surgical experience and commitment to advanced techniques ensure optimal outcomes for even the most challenging cases.',
      highlights: [
        'Over 12,000 successful surgical procedures',
        'Specialist in complex implant surgery',
        'Expert in orthognathic (jaw) surgery',
        'Facial trauma and reconstruction specialist',
        'Published researcher and educator'
      ]
    },
    expertise: [
      {
        category: 'Dental Implants',
        items: [
          'Single and multiple implant placement',
          'Full arch reconstruction',
          'Bone grafting and augmentation',
          'Sinus lift procedures',
          'Immediate implant placement'
        ]
      },
      {
        category: 'Oral Surgery',
        items: [
          'Wisdom teeth removal',
          'Complex tooth extractions',
          'Pre-prosthetic surgery',
          'Biopsy and pathology',
          'Oral cancer screening'
        ]
      },
      {
        category: 'Maxillofacial Surgery',
        items: [
          'Corrective jaw surgery',
          'TMJ surgery',
          'Facial trauma reconstruction',
          'Cleft lip and palate repair',
          'Sleep apnea surgery'
        ]
      }
    ],
    philosophy: {
      title: 'Precision and Compassion',
      description: 'Dr. Hanna believes in combining surgical excellence with empathetic patient care, ensuring every patient feels informed, comfortable, and confident throughout their treatment journey.',
      principles: [
        'Thorough preoperative planning and consultation',
        'Minimally invasive surgical techniques',
        'Advanced pain management protocols',
        'Collaborative multidisciplinary care',
        'Comprehensive postoperative support'
      ],
      quote: 'Surgery is both an art and a science. My goal is to provide exceptional surgical care while ensuring my patients feel safe, informed, and cared for every step of the way.'
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
    title: 'DDS, MS',
    specialty: 'Periodontist',
    image: '/doctor5.png',
    aboutImage: '/doctor5.png',
    description: 'Dr. Amr Husson is a dedicated periodontist specializing in the prevention, diagnosis, and treatment of periodontal disease. With 8 years of experience and advanced training in dental implants and regenerative procedures, Dr. Husson helps patients achieve and maintain healthy gums and supporting structures for optimal oral health.',
    stats: [
      { label: 'Years of Experience', value: '8+' },
      { label: 'Happy Patients', value: '2,800+' },
      { label: 'Procedures Performed', value: '5,500+' }
    ],
    education: [
      {
        icon: '🎓',
        degree: 'Master of Science in Periodontics',
        institution: 'University of California, San Francisco',
        year: '2017'
      },
      {
        icon: '🎓',
        degree: 'Doctor of Dental Surgery (DDS)',
        institution: 'University of Michigan',
        year: '2014'
      },
      {
        icon: '📜',
        degree: 'Board Certification',
        institution: 'American Board of Periodontology',
        year: '2018'
      },
      {
        icon: '🏆',
        degree: 'Implant Dentistry Fellowship',
        institution: 'International Congress of Oral Implantologists',
        year: '2019'
      }
    ],
    experience: {
      title: 'Comprehensive Periodontal Experience',
      description: 'Dr. Husson stays at the forefront of periodontal care through continuous education and adoption of the latest treatment modalities. His gentle approach and expertise in minimally invasive techniques ensure comfortable, effective treatment for all patients.',
      highlights: [
        'Specialist in laser periodontal therapy',
        'Expert in soft tissue grafting',
        'Advanced training in regenerative procedures',
        'Implant placement and maintenance specialist',
        'Active member of periodontal study clubs'
      ]
    },
    expertise: [
      {
        category: 'Periodontal Treatment',
        items: [
          'Scaling and root planing',
          'Laser gum therapy',
          'Pocket reduction surgery',
          'Gum grafting',
          'Periodontal maintenance'
        ]
      },
      {
        category: 'Implant Dentistry',
        items: [
          'Dental implant placement',
          'Bone grafting',
          'Sinus augmentation',
          'Ridge preservation',
          'Implant maintenance'
        ]
      },
      {
        category: 'Regenerative Procedures',
        items: [
          'Guided tissue regeneration',
          'Bone regeneration',
          'Platelet-rich fibrin therapy',
          'Soft tissue grafting',
          'Crown lengthening'
        ]
      }
    ],
    philosophy: {
      title: 'Prevention and Education',
      description: 'Dr. Husson believes that healthy gums are the foundation of a healthy smile. He emphasizes patient education and preventive care to help patients maintain optimal periodontal health throughout their lives.',
      principles: [
        'Early detection and prevention',
        'Minimally invasive treatment approaches',
        'Patient education and empowerment',
        'Collaborative care with referring dentists',
        'Long-term periodontal health maintenance'
      ],
      quote: 'Healthy gums don\'t just support your teeth—they support your overall health and wellbeing. Prevention and early intervention are key to lifelong oral health.'
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
    title: 'DDS',
    specialty: 'General Dentistry',
    image: '/doctor6.png',
    aboutImage: '/doctor6.png',
    description: 'Dr. Shridhar Munje is an experienced general dentist with 18 years of providing comprehensive dental care to patients of all ages. His gentle chairside manner and commitment to patient comfort have made him a favorite among families. Dr. Munje believes in preventive care and patient education to help his patients achieve lifelong oral health.',
    stats: [
      { label: 'Years of Experience', value: '18+' },
      { label: 'Happy Patients', value: '5,500+' },
      { label: 'Procedures Performed', value: '15,000+' }
    ],
    education: [
      {
        icon: '🎓',
        degree: 'Doctor of Dental Surgery (DDS)',
        institution: 'University of California, Los Angeles',
        year: '2005'
      },
      {
        icon: '📜',
        degree: 'Advanced General Dentistry Residency',
        institution: 'Veterans Affairs Medical Center',
        year: '2006'
      },
      {
        icon: '🏆',
        degree: 'Sedation Dentistry Certification',
        institution: 'Dental Organization for Conscious Sedation',
        year: '2010'
      },
      {
        icon: '🎓',
        degree: 'Implant Dentistry Certificate',
        institution: 'American Academy of Implant Dentistry',
        year: '2012'
      }
    ],
    experience: {
      title: 'Comprehensive General Dentistry Experience',
      description: 'With nearly two decades of experience, Dr. Munje provides a full range of dental services from routine cleanings to complex restorative procedures. His focus on patient education and preventive care has helped thousands of families maintain healthy smiles.',
      highlights: [
        'Experienced in treating patients of all ages',
        'Specialist in sedation dentistry for anxious patients',
        'Expert in comprehensive treatment planning',
        'Skilled in cosmetic and restorative dentistry',
        'Community volunteer providing free dental care'
      ]
    },
    expertise: [
      {
        category: 'Preventive Care',
        items: [
          'Comprehensive exams',
          'Professional cleanings',
          'Fluoride treatments',
          'Sealants',
          'Oral cancer screenings'
        ]
      },
      {
        category: 'Restorative Dentistry',
        items: [
          'Fillings and restorations',
          'Crowns and bridges',
          'Root canal therapy',
          'Dentures and partials',
          'Dental implant restoration'
        ]
      },
      {
        category: 'Cosmetic Services',
        items: [
          'Teeth whitening',
          'Composite bonding',
          'Porcelain veneers',
          'Smile makeovers',
          'Gum contouring'
        ]
      }
    ],
    philosophy: {
      title: 'Family-Centered Care',
      description: 'Dr. Munje treats each patient like family, providing personalized care in a comfortable, welcoming environment. He believes in building long-term relationships based on trust, communication, and exceptional dental care.',
      principles: [
        'Preventive care as the foundation',
        'Patient education and empowerment',
        'Gentle, compassionate treatment',
        'Conservative treatment approach',
        'Comprehensive family dentistry'
      ],
      quote: 'I believe that a healthy smile is a happy smile. My goal is to help every patient achieve optimal oral health through preventive care, education, and personalized treatment.'
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
    title: 'DDS, MS',
    specialty: 'Specialist Periodontist',
    image: '/doctor7.png',
    aboutImage: '/doctor7.png',
    description: 'Dr. Mohammad Abdulrazak is a dedicated periodontist with over 14 years of experience in treating gum disease and placing dental implants. His expertise in regenerative periodontal therapy and advanced surgical techniques has helped thousands of patients achieve optimal oral health. Dr. Abdulrazak is committed to providing compassionate, evidence-based periodontal care.',
    stats: [
      { label: 'Years of Experience', value: '14+' },
      { label: 'Happy Patients', value: '4,200+' },
      { label: 'Procedures Performed', value: '8,000+' }
    ],
    education: [
      {
        icon: '🎓',
        degree: 'Master of Science in Periodontics',
        institution: 'University of North Carolina',
        year: '2010'
      },
      {
        icon: '🎓',
        degree: 'Doctor of Dental Surgery (DDS)',
        institution: 'University of Maryland',
        year: '2007'
      },
      {
        icon: '📜',
        degree: 'Board Certification',
        institution: 'American Board of Periodontology',
        year: '2011'
      },
      {
        icon: '🏆',
        degree: 'Laser Periodontal Therapy Certification',
        institution: 'Academy of Laser Dentistry',
        year: '2012'
      }
    ],
    experience: {
      title: 'Comprehensive Periodontal Experience',
      description: 'Dr. Abdulrazak combines traditional periodontal techniques with cutting-edge technology to provide effective, comfortable treatment. His expertise in regenerative procedures and implant dentistry ensures optimal outcomes for complex cases.',
      highlights: [
        'Specialist in laser periodontal therapy',
        'Expert in soft and hard tissue regeneration',
        'Advanced training in implant placement',
        'Active member of periodontal research groups',
        'Regular contributor to periodontal journals'
      ]
    },
    expertise: [
      {
        category: 'Periodontal Treatment',
        items: [
          'Scaling and root planing',
          'Laser gum therapy',
          'Pocket reduction surgery',
          'Gum grafting procedures',
          'Periodontal maintenance'
        ]
      },
      {
        category: 'Regenerative Procedures',
        items: [
          'Bone regeneration',
          'Guided tissue regeneration',
          'Soft tissue augmentation',
          'Crown lengthening',
          'Ridge augmentation'
        ]
      },
      {
        category: 'Implant Dentistry',
        items: [
          'Dental implant placement',
          'Bone grafting for implants',
          'Sinus augmentation',
          'Implant maintenance',
          'Peri-implantitis treatment'
        ]
      }
    ],
    philosophy: {
      title: 'Foundation of Oral Health',
      description: 'Dr. Abdulrazak believes that healthy gums are the foundation of a healthy smile. He emphasizes prevention, early intervention, and patient education to maintain optimal periodontal health.',
      principles: [
        'Early detection and prevention',
        'Evidence-based treatment approaches',
        'Minimally invasive techniques',
        'Patient education and empowerment',
        'Long-term periodontal health'
      ],
      quote: 'Healthy gums are the foundation of a beautiful smile. My goal is to help patients achieve and maintain optimal periodontal health through expert care and education.'
    },
    clinicImages: [
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop'
    ]
  },
  {
    id: 'dr-hazem-reslan',
    name: 'Dr. Hazem Reslan',
    title: 'DDS, MS',
    specialty: 'Orthodontist',
    image: '/doctor8.png',
    aboutImage: '/doctor8.png',
    description: 'Dr. Hazem Reslan is a skilled orthodontist with 11 years of experience creating beautiful, healthy smiles. Specializing in both traditional braces and Invisalign clear aligners, Dr. Reslan uses the latest technology to provide efficient, comfortable orthodontic treatment for patients of all ages.',
    stats: [
      { label: 'Years of Experience', value: '11+' },
      { label: 'Happy Patients', value: '3,200+' },
      { label: 'Successful Cases', value: '6,800+' }
    ],
    education: [
      {
        icon: '🎓',
        degree: 'Master of Science in Orthodontics',
        institution: 'University of the Pacific',
        year: '2014'
      },
      {
        icon: '🎓',
        degree: 'Doctor of Dental Surgery (DDS)',
        institution: 'University of California, San Francisco',
        year: '2011'
      },
      {
        icon: '📜',
        degree: 'Board Certification',
        institution: 'American Board of Orthodontics',
        year: '2015'
      },
      {
        icon: '🏆',
        degree: 'Invisalign Platinum Provider',
        institution: 'Align Technology',
        year: '2017'
      }
    ],
    experience: {
      title: 'Comprehensive Orthodontic Experience',
      description: 'Dr. Reslan has transformed thousands of smiles using both traditional and modern orthodontic techniques. His expertise in digital treatment planning and 3D imaging ensures precise, predictable results for every patient.',
      highlights: [
        'Invisalign Platinum Provider',
        'Specialist in adult orthodontics',
        'Expert in accelerated treatment options',
        'Advanced training in digital orthodontics',
        'Active member of orthodontic associations'
      ]
    },
    expertise: [
      {
        category: 'Clear Aligner Therapy',
        items: [
          'Invisalign treatment',
          'Teen aligner programs',
          'Adult clear aligners',
          'Refinement treatments',
          'Retention protocols'
        ]
      },
      {
        category: 'Traditional Orthodontics',
        items: [
          'Metal and ceramic braces',
          'Self-ligating systems',
          'Early intervention',
          'Bite correction',
          'Space management'
        ]
      },
      {
        category: 'Advanced Treatments',
        items: [
          'Digital treatment planning',
          '3D smile visualization',
          'Accelerated orthodontics',
          'Surgical orthodontics',
          'TMJ treatment'
        ]
      }
    ],
    philosophy: {
      title: 'Technology-Driven Excellence',
      description: 'Dr. Reslan combines cutting-edge orthodontic technology with personalized care to deliver exceptional results. He believes every patient deserves a treatment plan tailored to their unique needs and goals.',
      principles: [
        'Advanced digital treatment planning',
        'Clear communication and transparency',
        'Comfortable, efficient treatment',
        'Aesthetic-focused results',
        'Long-term stability emphasis'
      ],
      quote: 'Modern orthodontics is about more than just straightening teeth—it\'s about creating healthy, beautiful smiles that last a lifetime through precise, personalized care.'
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
    title: 'DDS, MS',
    specialty: 'Specialist Endodontist',
    image: '/doctor9.png',
    aboutImage: '/doctor9.png',
    description: 'Dr. Nasrin Badreldin Mahgoub is a skilled endodontist with 9 years of experience specializing in root canal therapy and endodontic surgery. Her gentle approach and use of advanced technology, including operating microscopes, ensure comfortable and successful treatment outcomes. Dr. Mahgoub is dedicated to saving natural teeth and relieving dental pain.',
    stats: [
      { label: 'Years of Experience', value: '9+' },
      { label: 'Root Canals Performed', value: '6,500+' },
      { label: 'Success Rate', value: '97%' }
    ],
    education: [
      {
        icon: '🎓',
        degree: 'Master of Science in Endodontics',
        institution: 'University of Toronto',
        year: '2016'
      },
      {
        icon: '🎓',
        degree: 'Doctor of Dental Surgery (DDS)',
        institution: 'McGill University',
        year: '2013'
      },
      {
        icon: '📜',
        degree: 'Board Certification',
        institution: 'American Board of Endodontics',
        year: '2017'
      },
      {
        icon: '🏆',
        degree: 'Advanced Microsurgery Certificate',
        institution: 'Foundation for Endodontics',
        year: '2018'
      }
    ],
    experience: {
      title: 'Comprehensive Endodontic Experience',
      description: 'Dr. Mahgoub uses state-of-the-art technology including operating microscopes and digital imaging to provide the highest level of endodontic care. Her expertise in complex cases and retreatments has saved countless teeth.',
      highlights: [
        'Specialist in microscope-enhanced endodontics',
        'Expert in endodontic retreatments',
        'Advanced training in apicoectomy procedures',
        'Leader in pain-free root canal therapy',
        'Active researcher in endodontic innovations'
      ]
    },
    expertise: [
      {
        category: 'Root Canal Therapy',
        items: [
          'Routine root canal treatment',
          'Complex canal anatomy',
          'Calcified canals',
          'Retreatment procedures',
          'Emergency treatment'
        ]
      },
      {
        category: 'Endodontic Surgery',
        items: [
          'Apicoectomy',
          'Root amputation',
          'Perforation repair',
          'Resorption treatment',
          'Surgical retreatment'
        ]
      },
      {
        category: 'Advanced Procedures',
        items: [
          'Microscope-enhanced treatment',
          'Digital imaging and diagnostics',
          'Regenerative endodontics',
          'Traumatic injury treatment',
          'Cracked tooth diagnosis'
        ]
      }
    ],
    philosophy: {
      title: 'Preserving Natural Teeth',
      description: 'Dr. Mahgoub is passionate about saving natural teeth through expert endodontic care. She believes that with proper treatment, most teeth can be preserved for a lifetime.',
      principles: [
        'Thorough diagnosis and treatment planning',
        'Gentle, pain-free procedures',
        'Advanced technology for optimal results',
        'Clear patient communication',
        'Long-term tooth preservation'
      ],
      quote: 'My mission is to save natural teeth and eliminate dental pain through compassionate, expert endodontic care using the most advanced techniques available.'
    },
    clinicImages: [
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop'
    ]
  },
  {
    id: 'dr-kinan-mohammed',
    name: 'Dr. Kinan Mohammed Mohdi',
    title: 'DDS',
    specialty: 'General Dentistry',
    image: '/doctor10.png',
    aboutImage: '/doctor10.png',
    description: 'Dr. Kinan Mohammed Mohdi is a compassionate general dentist with 7 years of experience providing comprehensive dental care. His gentle approach and commitment to patient comfort make dental visits stress-free. Dr. Mohdi focuses on preventive care and patient education to help families maintain optimal oral health.',
    stats: [
      { label: 'Years of Experience', value: '7+' },
      { label: 'Happy Patients', value: '2,100+' },
      { label: 'Procedures Performed', value: '6,000+' }
    ],
    education: [
      {
        icon: '🎓',
        degree: 'Doctor of Dental Surgery (DDS)',
        institution: 'University of Washington',
        year: '2016'
      },
      {
        icon: '📜',
        degree: 'General Practice Residency',
        institution: 'Harbor-UCLA Medical Center',
        year: '2017'
      },
      {
        icon: '🏆',
        degree: 'Cosmetic Dentistry Certificate',
        institution: 'American Academy of Cosmetic Dentistry',
        year: '2019'
      },
      {
        icon: '🎓',
        degree: 'Endodontic Therapy Certification',
        institution: 'American Association of Endodontists',
        year: '2020'
      }
    ],
    experience: {
      title: 'Comprehensive General Dentistry Experience',
      description: 'Dr. Mohdi provides high-quality dental care with a focus on patient comfort and satisfaction. His expertise spans preventive, restorative, and cosmetic dentistry, allowing him to address all aspects of his patients\' oral health needs.',
      highlights: [
        'Experienced in treating anxious patients',
        'Skilled in cosmetic dentistry procedures',
        'Expert in same-day emergency care',
        'Committed to continuing education',
        'Multilingual practitioner'
      ]
    },
    expertise: [
      {
        category: 'Preventive Dentistry',
        items: [
          'Comprehensive examinations',
          'Professional cleanings',
          'Periodontal therapy',
          'Fluoride treatments',
          'Oral health education'
        ]
      },
      {
        category: 'Restorative Care',
        items: [
          'Tooth-colored fillings',
          'Crowns and bridges',
          'Root canal therapy',
          'Tooth extractions',
          'Dentures'
        ]
      },
      {
        category: 'Cosmetic Dentistry',
        items: [
          'Professional whitening',
          'Composite bonding',
          'Porcelain veneers',
          'Smile design',
          'Esthetic restorations'
        ]
      }
    ],
    philosophy: {
      title: 'Compassionate, Patient-Centered Care',
      description: 'Dr. Mohdi believes in treating each patient with kindness, respect, and personalized attention. He takes time to listen to concerns and explain treatment options, ensuring patients feel comfortable and informed.',
      principles: [
        'Gentle, compassionate treatment approach',
        'Clear communication and education',
        'Conservative treatment planning',
        'Focus on prevention',
        'Patient comfort as priority'
      ],
      quote: 'Dentistry is about more than just teeth—it\'s about people. I strive to create a welcoming environment where patients feel valued, heard, and cared for.'
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
    title: 'DDS',
    specialty: 'General dentist',
    image: '/doctor11.png',
    aboutImage: '/doctor11.png',
    description: 'Dr. Mohanned Albasha is an experienced general dentist with 13 years of providing comprehensive dental care to patients of all ages. His gentle approach and commitment to patient comfort have made him a trusted practitioner. Dr. Albasha focuses on preventive care and patient education to help his patients achieve lifelong oral health.',
    stats: [
      { label: 'Years of Experience', value: '13+' },
      { label: 'Happy Patients', value: '4,800+' },
      { label: 'Procedures Performed', value: '12,000+' }
    ],
    education: [
      {
        icon: '🎓',
        degree: 'Doctor of Dental Surgery (DDS)',
        institution: 'University of Damascus',
        year: '2011'
      },
      {
        icon: '📜',
        degree: 'Advanced General Dentistry Residency',
        institution: 'Damascus University Hospital',
        year: '2012'
      },
      {
        icon: '🏆',
        degree: 'Cosmetic Dentistry Certificate',
        institution: 'American Academy of Cosmetic Dentistry',
        year: '2015'
      },
      {
        icon: '🎓',
        degree: 'Implant Dentistry Certificate',
        institution: 'International Congress of Oral Implantologists',
        year: '2017'
      }
    ],
    experience: {
      title: 'Comprehensive General Dentistry Experience',
      description: 'With over a decade of experience, Dr. Albasha provides a full range of dental services from routine cleanings to complex restorative procedures. His focus on patient education and preventive care has helped thousands of patients maintain healthy smiles.',
      highlights: [
        'Experienced in treating patients of all ages',
        'Specialist in cosmetic dentistry procedures',
        'Expert in comprehensive treatment planning',
        'Skilled in restorative and preventive dentistry',
        'Multilingual practitioner'
      ]
    },
    expertise: [
      {
        category: 'Preventive Care',
        items: [
          'Comprehensive exams',
          'Professional cleanings',
          'Fluoride treatments',
          'Sealants',
          'Oral cancer screenings'
        ]
      },
      {
        category: 'Restorative Dentistry',
        items: [
          'Fillings and restorations',
          'Crowns and bridges',
          'Root canal therapy',
          'Dentures and partials',
          'Dental implant restoration'
        ]
      },
      {
        category: 'Cosmetic Services',
        items: [
          'Teeth whitening',
          'Composite bonding',
          'Porcelain veneers',
          'Smile makeovers',
          'Gum contouring'
        ]
      }
    ],
    philosophy: {
      title: 'Patient-Centered Care',
      description: 'Dr. Albasha treats each patient with personalized attention and care. He believes in building long-term relationships based on trust, communication, and exceptional dental care.',
      principles: [
        'Preventive care as the foundation',
        'Patient education and empowerment',
        'Gentle, compassionate treatment',
        'Conservative treatment approach',
        'Comprehensive family dentistry'
      ],
      quote: 'I believe that a healthy smile is a happy smile. My goal is to help every patient achieve optimal oral health through preventive care, education, and personalized treatment.'
    },
    clinicImages: [
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop'
    ]
  },
  {
    id: 'dr-arwa-rashed',
    name: 'Dr. Arwa Rashed Almarshoodi',
    title: 'DDS, MS',
    specialty: 'Cosmetic Dentistry',
    image: '/doctor12.png',
    aboutImage: '/doctor12.png',
    description: 'Dr. Arwa Rashed Almarshoodi is a highly skilled cosmetic dentist with 10 years of experience in aesthetic smile transformations. Her artistic vision and technical precision have made her a sought-after specialist for porcelain veneers, smile makeovers, and advanced cosmetic procedures. Dr. Almarshoodi\'s dedication to natural-looking results and patient satisfaction sets her apart in the field of cosmetic dentistry.',
    stats: [
      { label: 'Years of Experience', value: '10+' },
      { label: 'Smile Makeovers', value: '1,800+' },
      { label: 'Happy Patients', value: '3,500+' }
    ],
    education: [
      {
        icon: '🎓',
        degree: 'Master of Science in Cosmetic Dentistry',
        institution: 'New York University',
        year: '2015'
      },
      {
        icon: '🎓',
        degree: 'Doctor of Dental Surgery (DDS)',
        institution: 'University of California, Los Angeles',
        year: '2012'
      },
      {
        icon: '📜',
        degree: 'Accreditation in Cosmetic Dentistry',
        institution: 'American Academy of Cosmetic Dentistry',
        year: '2016'
      },
      {
        icon: '🏆',
        degree: 'Digital Smile Design Certification',
        institution: 'DSD Planning Center',
        year: '2018'
      }
    ],
    experience: {
      title: 'Comprehensive Cosmetic Experience',
      description: 'Dr. Almarshoodi combines artistry with advanced technology to create stunning, natural-looking smiles. Her expertise in digital smile design and minimally invasive techniques ensures beautiful results that enhance both appearance and function.',
      highlights: [
        'Specialist in porcelain veneer artistry',
        'Expert in digital smile design',
        'Advanced training in minimally invasive dentistry',
        'Featured in cosmetic dentistry case studies',
        'Regular lecturer at aesthetic dentistry seminars'
      ]
    },
    expertise: [
      {
        category: 'Smile Makeovers',
        items: [
          'Full smile transformations',
          'Digital smile design',
          'Facial aesthetic analysis',
          'Color and shape optimization',
          'Comprehensive treatment planning'
        ]
      },
      {
        category: 'Cosmetic Restorations',
        items: [
          'Porcelain veneers',
          'Composite bonding',
          'All-ceramic crowns',
          'Teeth whitening',
          'Gum recontouring'
        ]
      },
      {
        category: 'Advanced Aesthetics',
        items: [
          'Minimally invasive preparations',
          'No-prep veneers',
          'Esthetic implant restoration',
          'Bite reconstruction',
          'Anti-aging smile design'
        ]
      }
    ],
    philosophy: {
      title: 'Natural Beauty Through Dentistry',
      description: 'Dr. Almarshoodi believes that the best cosmetic dentistry looks completely natural. She focuses on creating smiles that complement each patient\'s unique facial features and personality.',
      principles: [
        'Comprehensive aesthetic evaluation',
        'Natural-looking, harmonious results',
        'Minimal tooth preparation when possible',
        'Highest quality materials and techniques',
        'Patient involvement in treatment planning'
      ],
      quote: 'True beauty in dentistry comes from creating smiles that look and feel natural—smiles that enhance your confidence and reflect your unique personality.'
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
    title: 'DDS, MS',
    specialty: 'Endodontist',
    image: '/doctor13.png',
    aboutImage: '/doctor13.png',
    description: 'Dr. Reem Al-Hammadi is a dedicated endodontist with 6 years of experience specializing in root canal therapy and endodontic surgery. Her gentle technique and use of advanced technology make even the most complex root canal treatments comfortable and successful. Dr. Al-Hammadi is committed to saving natural teeth and relieving dental pain.',
    stats: [
      { label: 'Years of Experience', value: '6+' },
      { label: 'Root Canals Performed', value: '4,500+' },
      { label: 'Success Rate', value: '98%' }
    ],
    education: [
      {
        icon: '🎓',
        degree: 'Master of Science in Endodontics',
        institution: 'University of Pennsylvania',
        year: '2019'
      },
      {
        icon: '🎓',
        degree: 'Doctor of Dental Surgery (DDS)',
        institution: 'University of Southern California',
        year: '2016'
      },
      {
        icon: '📜',
        degree: 'Board Certification',
        institution: 'American Board of Endodontics',
        year: '2020'
      },
      {
        icon: '🏆',
        degree: 'Advanced Microsurgery Certificate',
        institution: 'Foundation for Endodontics',
        year: '2021'
      }
    ],
    experience: {
      title: 'Comprehensive Endodontic Experience',
      description: 'Dr. Al-Hammadi uses state-of-the-art technology including operating microscopes and digital imaging to provide the highest level of endodontic care. Her expertise in complex cases and retreatments has saved countless teeth.',
      highlights: [
        'Specialist in microscope-enhanced endodontics',
        'Expert in endodontic retreatments',
        'Advanced training in apicoectomy procedures',
        'Leader in pain-free root canal therapy',
        'Active researcher in endodontic innovations'
      ]
    },
    expertise: [
      {
        category: 'Root Canal Therapy',
        items: [
          'Routine root canal treatment',
          'Complex canal anatomy',
          'Calcified canals',
          'Retreatment procedures',
          'Emergency treatment'
        ]
      },
      {
        category: 'Endodontic Surgery',
        items: [
          'Apicoectomy',
          'Root amputation',
          'Perforation repair',
          'Resorption treatment',
          'Surgical retreatment'
        ]
      },
      {
        category: 'Advanced Procedures',
        items: [
          'Microscope-enhanced treatment',
          'Digital imaging and diagnostics',
          'Regenerative endodontics',
          'Traumatic injury treatment',
          'Cracked tooth diagnosis'
        ]
      }
    ],
    philosophy: {
      title: 'Saving Natural Teeth',
      description: 'Dr. Al-Hammadi is passionate about saving natural teeth through expert endodontic care. She believes that with proper treatment, most teeth can be preserved for a lifetime.',
      principles: [
        'Thorough diagnosis and treatment planning',
        'Gentle, pain-free procedures',
        'Advanced technology for optimal results',
        'Clear patient communication',
        'Long-term tooth preservation'
      ],
      quote: 'My mission is to save natural teeth and eliminate dental pain through compassionate, expert endodontic care using the most advanced techniques available.'
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
