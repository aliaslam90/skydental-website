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
    image: imgImage,
    aboutImage: imgImage,
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
    title: 'Specialist Oral Surgeon',
    specialty: 'Sky Dental Center [With Implant Privileges]',
    image: imgImage1,
    aboutImage: imgImage1,
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
        category: 'Preventive & Supportive Care',
        items: [
          'Oral hygiene counselling and disease-prevention strategies',
          'Pre- and post-operative care for medically compromised patients',
          'Custom dental appliances for surgical planning and protection'
        ]
      },
      {
        category: 'Restorative & Endodontic Support',
        items: [
          'Minor restorative treatments when required before or after surgery',
          'Support in providing implant-supported prostheses such as crowns and bridges',
          'Performing uncomplicated root canal treatments',
          'Pulp therapy (vital and non-vital) for both primary and permanent teeth'
        ]
      }
    ],
    philosophy: {
      title: 'A Patient-Centred Surgical Philosophy',
      description: 'Dr. Basma Alrawi believes that exceptional surgical care requires not only technical expertise but also empathy, communication, and trust. She prioritises clear explanation of procedures and treatment expectations, gentle patient-focused surgical delivery, multidisciplinary collaboration for comprehensive outcomes, and individualised treatment plans tailored to each patient\'s clinical needs and personal comfort.',
      principles: [
        'Clear explanation of procedures and treatment expectations',
        'Gentle, patient-focused surgical delivery',
        'Multidisciplinary collaboration for comprehensive outcomes',
        'Individualised treatment plans tailored to each patient\'s clinical needs and personal comfort',
        'Surgical care of the highest standard delivered with compassion, precision, and integrity'
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
    id: 'dr-elias-daoud-hanna',
    name: 'Dr. Elias Daoud Hanna',
    title: 'DDS, MD',
    specialty: 'Oral Surgeon',
    image: imgImage2,
    aboutImage: imgImage2,
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
    image: imgImage3,
    aboutImage: imgImage3,
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
    image: imgImage4,
    aboutImage: imgImage4,
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
    id: 'dr-hazem-reslan',
    name: 'Dr. Hazem Reslan',
    title: 'DDS, MS',
    specialty: 'Orthodontist',
    image: imgImage5,
    aboutImage: imgImage5,
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
    id: 'dr-kinan-mohammed',
    name: 'Dr. Kinan Mohammed Mohdi',
    title: 'DDS',
    specialty: 'General Dentistry',
    image: imgImage6,
    aboutImage: imgImage6,
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
    id: 'dr-arwa-rashed',
    name: 'Dr. Arwa Rashed Almarshoodi',
    title: 'DDS, MS',
    specialty: 'Cosmetic Dentistry',
    image: imgImage7,
    aboutImage: imgDrArwaRashedAlmarshoodi,
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
      imgDentalCare,
      imgDoctorConsultingWithPatient,
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop'
    ]
  },
  {
    id: 'dr-reem-al-hammadi',
    name: 'Dr. Reem Al-Hammadi',
    title: 'DDS, MS',
    specialty: 'Endodontist',
    image: imgImage8,
    aboutImage: imgImage8,
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
