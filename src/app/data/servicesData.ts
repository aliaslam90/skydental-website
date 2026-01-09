export interface ServiceDetail {
  id: string
  title: string
  icon: string
  shortDescription: string
  bgColor: string
  hero: {
    title: string
    subtitle: string
    description: string
  }
  benefits: {
    icon: string
    title: string
    description: string
  }[]
  services: {
    icon: string
    title: string
    description: string
    features: string[]
  }[]
  whyChoose: {
    title: string
    description: string
    features: string[]
    image: string
  }
}

export const servicesData: ServiceDetail[] = [
  {
    id: 'general-dentistry',
    title: 'General Dentistry',
    icon: '🦷',
    shortDescription: 'Comprehensive dental care for healthy teeth and gums, including checkups, cleanings, and preventive treatments.',
    bgColor: '#edfede',
    hero: {
      title: 'General Dentistry',
      subtitle: 'General Dentistry forms the foundation of lifelong oral health',
      description: 'General Dentistry forms the foundation of lifelong oral health, focusing on early diagnosis, prevention, and treatment of common dental concerns.'
    },
    benefits: [
      {
        icon: '⏰',
        title: 'Same-Day Appointments',
        description: 'Flexible scheduling to fit your busy lifestyle'
      },
      {
        icon: '👨‍⚕️',
        title: 'Expert Care',
        description: 'Experienced professionals using latest techniques'
      },
      {
        icon: '👨‍👩‍👧‍👦',
        title: 'Family-Friendly',
        description: 'Comprehensive care for all ages'
      }
    ],
    services: [
      {
        icon: '📅',
        title: 'Dental Checkup & Cleaning',
        description: 'Regular checkups help detect issues early and keep your smile healthy. Our thorough cleanings remove plaque and tartar buildup.',
        features: [
          'Comprehensive oral examination',
          'Professional teeth cleaning',
          'Oral cancer screening',
          'Personalized care plan'
        ]
      },
      {
        icon: '📋',
        title: 'Dental Laboratory Filing',
        description: 'Accurate diagnostic imaging and laboratory work for precise treatment planning and optimal results.',
        features: [
          'Digital X-rays',
          'Lab work coordination',
          'Treatment planning',
          'Follow-up care'
        ]
      },
      {
        icon: '🦷',
        title: 'Tooth Extraction',
        description: 'Safe and comfortable tooth removal when necessary, performed with care to minimize discomfort.',
        features: [
          'Gentle extraction technique',
          'Pain management',
          'Post-op care instructions',
          'Healing monitoring'
        ]
      },
      {
        icon: '🌱',
        title: 'Root Canal Treatment',
        description: 'Save your natural tooth with our advanced root canal therapy, performed with precision and care.',
        features: [
          'Pain-free procedure',
          'Advanced technology',
          'Tooth preservation',
          'Long-lasting results'
        ]
      },
      {
        icon: '🦴',
        title: 'Dental Bone Grafting',
        description: 'Restore bone density and prepare for implants with our advanced bone grafting procedures.',
        features: [
          'Bone regeneration',
          'Implant preparation',
          'Advanced materials',
          'Proven success rate'
        ]
      },
      {
        icon: '🩹',
        title: 'Periodontal Treatment',
        description: 'Protect your gums and prevent disease with our comprehensive periodontal care programs.',
        features: [
          'Gum disease treatment',
          'Deep cleaning',
          'Maintenance programs',
          'Health monitoring'
        ]
      }
    ],
    whyChoose: {
      title: 'Why Choose Our General Dentistry Services?',
      description: 'Our general dentistry services combine expertise, technology, and compassionate care to deliver exceptional results.',
      features: [
        'Modern, state-of-the-art equipment for accurate diagnosis',
        'Safe and sterilized instruments to protect patient health',
        'Experienced dentists with certifications and expertise',
        'Preventive approach to reduce long-term treatment needs',
        'Focus on patient comfort and education',
        'Transparent pricing and flexible payment options'
      ],
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop'
    }
  },
  {
    id: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    icon: '✨',
    shortDescription: 'Transform your smile with advanced aesthetic treatments including whitening, veneers, and smile design.',
    bgColor: '#edfede',
    hero: {
      title: 'Cosmetic Dentistry',
      subtitle: 'Transform your smile and boost your confidence',
      description: 'Cosmetic dentistry focuses on improving the appearance of your teeth, gums, and smile using advanced aesthetic techniques and materials.'
    },
    benefits: [
      {
        icon: '✨',
        title: 'Beautiful Results',
        description: 'Natural-looking enhancements that transform your smile'
      },
      {
        icon: '🎨',
        title: 'Custom Design',
        description: 'Personalized treatment plans for your unique smile'
      },
      {
        icon: '⚡',
        title: 'Quick Transformation',
        description: 'See dramatic improvements in just a few visits'
      }
    ],
    services: [
      {
        icon: '🦷',
        title: 'Teeth Whitening',
        description: 'Professional whitening treatments that brighten your smile by several shades safely and effectively.',
        features: [
          'In-office whitening',
          'Take-home kits',
          'Long-lasting results',
          'Safe for enamel'
        ]
      },
      {
        icon: '💎',
        title: 'Porcelain Veneers',
        description: 'Ultra-thin shells that cover imperfections and create a flawless, natural-looking smile.',
        features: [
          'Custom-crafted veneers',
          'Stain-resistant',
          'Natural appearance',
          'Minimal tooth preparation'
        ]
      },
      {
        icon: '👑',
        title: 'Smile Makeover',
        description: 'Comprehensive treatment combining multiple procedures to completely transform your smile.',
        features: [
          'Complete smile analysis',
          'Multiple treatments',
          'Digital smile preview',
          'Stunning results'
        ]
      },
      {
        icon: '🎯',
        title: 'Dental Bonding',
        description: 'Quick and affordable solution to repair chips, cracks, and gaps in your teeth.',
        features: [
          'Same-day treatment',
          'Natural color matching',
          'Conservative approach',
          'Immediate results'
        ]
      }
    ],
    whyChoose: {
      title: 'Why Choose Our Cosmetic Dentistry?',
      description: 'We combine artistry with advanced technology to create beautiful, natural-looking smiles that boost your confidence.',
      features: [
        'Award-winning cosmetic dentists',
        'Digital smile design technology',
        'Premium materials and techniques',
        'Natural-looking results',
        'Comprehensive consultations',
        'Flexible financing options'
      ],
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop'
    }
  },
  {
    id: 'orthodontics',
    title: 'Orthodontics',
    icon: '🦷',
    shortDescription: 'Straighten your teeth and correct misalignments with braces, Invisalign, and modern orthodontic solutions.',
    bgColor: '#edfede',
    hero: {
      title: 'Orthodontics',
      subtitle: 'Straighten your smile with confidence',
      description: 'Our orthodontic services use advanced technology to straighten teeth, correct bite issues, and create beautiful, healthy smiles.'
    },
    benefits: [
      {
        icon: '🔍',
        title: 'Advanced Technology',
        description: '3D imaging and digital treatment planning'
      },
      {
        icon: '👨‍⚕️',
        title: 'Expert Orthodontists',
        description: 'Board-certified specialists with years of experience'
      },
      {
        icon: '😊',
        title: 'Comfortable Treatment',
        description: 'Modern techniques for minimal discomfort'
      }
    ],
    services: [
      {
        icon: '🔲',
        title: 'Traditional Braces',
        description: 'Proven, effective treatment for complex orthodontic cases with modern materials for comfort.',
        features: [
          'Metal or ceramic options',
          'Effective for all cases',
          'Precise tooth movement',
          'Affordable option'
        ]
      },
      {
        icon: '👻',
        title: 'Invisalign Clear Aligners',
        description: 'Nearly invisible aligners that straighten teeth without the look of traditional braces.',
        features: [
          'Virtually invisible',
          'Removable convenience',
          'Comfortable fit',
          'Predictable results'
        ]
      },
      {
        icon: '⏱️',
        title: 'Fast Track Orthodontics',
        description: 'Accelerated treatment options to achieve your dream smile in less time.',
        features: [
          'Reduced treatment time',
          'Advanced techniques',
          'Effective results',
          'Regular monitoring'
        ]
      },
      {
        icon: '🛡️',
        title: 'Retainers & Maintenance',
        description: 'Keep your newly straightened smile perfect with custom retainers and ongoing care.',
        features: [
          'Custom retainers',
          'Lifetime retention plan',
          'Regular check-ups',
          'Smile protection'
        ]
      }
    ],
    whyChoose: {
      title: 'Why Choose Our Orthodontic Services?',
      description: 'We offer the latest orthodontic treatments tailored to your lifestyle and smile goals.',
      features: [
        'Board-certified orthodontists',
        'Multiple treatment options',
        'Digital treatment planning',
        'Flexible payment plans',
        'Family-friendly environment',
        'Proven track record of success'
      ],
      image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=600&fit=crop'
    }
  },
  {
    id: 'pediatric-dentistry',
    title: 'Pediatric Dentistry',
    icon: '👶',
    shortDescription: 'Gentle, specialized dental care for children and teens in a welcoming and comfortable environment.',
    bgColor: '#edfede',
    hero: {
      title: 'Pediatric Dentistry',
      subtitle: 'Creating healthy smiles for kids',
      description: 'Our pediatric dentistry services provide gentle, specialized care in a fun, welcoming environment designed just for children.'
    },
    benefits: [
      {
        icon: '🎈',
        title: 'Child-Friendly',
        description: 'Fun, comfortable environment designed for kids'
      },
      {
        icon: '👨‍⚕️',
        title: 'Specialized Care',
        description: 'Dentists trained in pediatric dentistry'
      },
      {
        icon: '🎓',
        title: 'Education Focus',
        description: 'Teaching kids healthy habits for life'
      }
    ],
    services: [
      {
        icon: '👀',
        title: 'Preventive Care',
        description: 'Regular checkups, cleanings, and fluoride treatments to keep young smiles healthy.',
        features: [
          'Gentle examinations',
          'Professional cleanings',
          'Fluoride treatments',
          'Sealants'
        ]
      },
      {
        icon: '🦷',
        title: 'Cavity Treatment',
        description: 'Gentle, effective treatment for cavities using child-friendly techniques and materials.',
        features: [
          'Tooth-colored fillings',
          'Gentle approach',
          'Pain management',
          'Quick procedures'
        ]
      },
      {
        icon: '📚',
        title: 'Dental Education',
        description: 'Teaching children proper brushing, flossing, and nutrition habits for lifelong oral health.',
        features: [
          'Interactive learning',
          'Brushing demonstrations',
          'Nutrition guidance',
          'Fun activities'
        ]
      },
      {
        icon: '🚨',
        title: 'Emergency Care',
        description: 'Prompt treatment for dental emergencies including knocked-out teeth and injuries.',
        features: [
          'Same-day appointments',
          'Trauma care',
          'Pain relief',
          'Follow-up care'
        ]
      }
    ],
    whyChoose: {
      title: 'Why Choose Our Pediatric Dentistry?',
      description: 'We create positive dental experiences that help children develop healthy habits and overcome dental anxiety.',
      features: [
        'Specialized pediatric dentists',
        'Child-friendly office design',
        'Gentle, patient approach',
        'Parent education and involvement',
        'Prevention-focused care',
        'Building trust and comfort'
      ],
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&h=600&fit=crop'
    }
  },
  {
    id: 'advanced-restorative',
    title: 'Advanced & Restorative',
    icon: '🔬',
    shortDescription: 'Complex treatments for structural and functional restoration including implants and full-mouth restoration.',
    bgColor: '#edfede',
    hero: {
      title: 'Advanced & Restorative Dentistry',
      subtitle: 'Restore function and beauty to your smile',
      description: 'Advanced restorative dentistry combines cutting-edge technology with expertise to repair, replace, and restore damaged or missing teeth.'
    },
    benefits: [
      {
        icon: '🔬',
        title: 'Advanced Technology',
        description: 'State-of-the-art equipment and techniques'
      },
      {
        icon: '💪',
        title: 'Durable Results',
        description: 'Long-lasting solutions that stand the test of time'
      },
      {
        icon: '🎯',
        title: 'Comprehensive Care',
        description: 'Full-mouth restoration capabilities'
      }
    ],
    services: [
      {
        icon: '🦷',
        title: 'Dental Implants',
        description: 'Permanent tooth replacement that looks, feels, and functions like natural teeth.',
        features: [
          'Natural appearance',
          'Permanent solution',
          'Bone preservation',
          'High success rate'
        ]
      },
      {
        icon: '👑',
        title: 'Crowns & Bridges',
        description: 'Custom-crafted restorations to repair damaged teeth or replace missing ones.',
        features: [
          'Natural-looking',
          'Durable materials',
          'Custom-fit',
          'Long-lasting'
        ]
      },
      {
        icon: '😬',
        title: 'Full Mouth Restoration',
        description: 'Comprehensive treatment to rebuild and restore your entire smile.',
        features: [
          'Complete transformation',
          'Multiple procedures',
          'Personalized plan',
          'Life-changing results'
        ]
      },
      {
        icon: '🦴',
        title: 'Bone Grafting & Sinus Lift',
        description: 'Advanced procedures to restore bone and prepare for dental implants.',
        features: [
          'Bone regeneration',
          'Implant preparation',
          'Advanced materials',
          'Proven techniques'
        ]
      }
    ],
    whyChoose: {
      title: 'Why Choose Our Advanced & Restorative Services?',
      description: 'We use the latest technology and techniques to deliver complex restorative treatments with exceptional results.',
      features: [
        'Board-certified specialists',
        'Advanced 3D imaging and planning',
        'State-of-the-art equipment',
        'Comprehensive treatment options',
        'Sedation dentistry available',
        'Dedicated to your comfort'
      ],
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop'
    }
  }
]

export function getServiceById(id: string): ServiceDetail | undefined {
  return servicesData.find(service => service.id === id)
}
