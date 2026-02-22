import { Calendar, Award, Users, CalendarCheck, Sparkles, Scissors, Sprout, Bandage, Shield, Sparkle, Palette, Zap, Gem, Crown, Target, Search, UserCheck, Smile, Square, Eye, ClipboardCheck, Heart, GraduationCap, BookOpen, Lock, Microscope, ShieldCheck, RefreshCw, AlertCircle } from 'lucide-react'
import { LucideIcon } from 'lucide-react'

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
  benefitsIntro?: string
  benefits: {
    icon: LucideIcon
    title: string
    description: string
  }[]
  servicesIntro?: string
  services: {
    icon: LucideIcon
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
  cta?: {
    title: string
    description: string
    buttonText: string
  }
}

export const servicesData: ServiceDetail[] = [
  {
    id: 'general-dentistry',
    title: 'General Dentistry',
    icon: '🦷',
    shortDescription: 'Comprehensive dental care for healthy teeth and gums, including checkups, cleanings, and preventive treatments.',
    bgColor: '#CBFF8F',
    hero: {
      title: 'General Dentistry',
      subtitle: 'Foundation for Lifelong Oral Health',
      description: 'Foundation for Lifelong Oral Health General Dentistry forms the cornerstone of healthy teeth and gums, focusing on early detection, prevention, and treatment of common dental concerns.'
    },
    benefitsIntro: 'Our team provides thoughtful, precise care designed to protect your oral health and maintain strong, healthy teeth. Every visit is crafted for comfort, clarity, and confidence, guided by modern techniques and a patient-first approach.',
    benefits: [
      {
        icon: Calendar,
        title: 'Same-Day Appointments',
        description: 'Flexible scheduling to fit your lifestyle'
      },
      {
        icon: Award,
        title: 'Expert Care',
        description: 'Experienced professionals delivering precise treatments'
      },
      {
        icon: Users,
        title: 'Family-Friendly',
        description: 'Comprehensive care for all ages'
      }
    ],
    servicesIntro: 'From routine check-ups to targeted treatments, we deliver care that keeps your smile healthy and resilient.',
    services: [
      {
        icon: CalendarCheck,
        title: 'Dental Check-Up & Cleaning',
        description: 'A thorough examination and professional cleaning to detect early concerns and maintain optimal oral hygiene. Supports prevention of decay and gum disease, leaving your smile refreshed and healthy.',
        features: [
          'Comprehensive oral exam',
          'Professional cleaning',
          'Oral cancer screening',
          'Personalized care plan'
        ]
      },
      {
        icon: Square,
        title: 'Tooth-Coloured Fillings',
        description: 'Discreet, natural-looking restorations that match your tooth shade while restoring strength and function — an effective solution for treating decay.',
        features: [
          'Shade-matched fillings',
          'Functional and aesthetic restoration',
          'Subtle, comfortable treatment'
        ]
      },
      {
        icon: Scissors,
        title: 'Tooth Extraction',
        description: 'Gentle removal of damaged or non-restorable teeth, prioritizing comfort and smooth healing. Our careful approach minimizes discomfort and supports ongoing oral health.',
        features: [
          'Comfortable extraction techniques',
          'Pain management',
          'Post-treatment guidance',
          'Healing support'
        ]
      },
      {
        icon: Sprout,
        title: 'Root Canal Treatments',
        description: 'Advanced procedures to remove infection while preserving natural teeth. Performed with modern techniques for comfort and durable outcomes.',
        features: [
          'Pain-free procedures',
          'Tooth preservation',
          'Long-lasting results',
          'Modern, precise techniques'
        ]
      },
      {
        icon: Bandage,
        title: 'Gum Disease Treatment',
        description: 'Specialized care to treat inflammation, prevent disease progression, and restore gum health. Early intervention protects your teeth and overall oral wellbeing.',
        features: [
          'Inflammation management',
          'Disease prevention',
          'Gum restoration',
          'Support for long-term oral health'
        ]
      },
      {
        icon: Shield,
        title: 'Preventive Dental Care',
        description: 'Proactive treatments and guidance to protect your smile before issues arise. Prevention is the key to lasting oral health.',
        features: [
          'Fluoride treatments',
          'Personalized hygiene guidance',
          'Routine monitoring',
          'Preventive planning'
        ]
      }
    ],
    whyChoose: {
      title: 'Why Choose Our General Dentistry Services',
      description: 'We combine experience, attention, and careful planning to deliver reliable, patient-focused care.',
      features: [
        'Experienced, certified dentists',
        'Preventive-focused approach',
        'Comfort and clarity at every step',
        'Transparent pricing and flexible payment options'
      ],
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop'
    },
    cta: {
      title: 'Ready to Prioritize Your Oral Health?',
      description: 'Schedule your appointment today and let our team help you maintain a healthy, confident smile.',
      buttonText: 'Book Your Appointment'
    }
  },
  {
    id: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    icon: '✨',
    shortDescription: 'Transform your smile with advanced aesthetic treatments including whitening, veneers, and smile design.',
    bgColor: '#CBFF8F',
    hero: {
      title: 'Cosmetic Dentistry',
      subtitle: 'Enhancing Your Smile, Naturally',
      description: 'Cosmetic dentistry focuses on improving the appearance of your teeth, gums, and smile using advanced aesthetic techniques and materials, tailored to your unique features.'
    },
    benefits: [
      {
        icon: Sparkle,
        title: 'Beautiful Results',
        description: 'Natural-looking enhancements that elevate your smile'
      },
      {
        icon: Palette,
        title: 'Custom Design',
        description: 'Treatment plans personalized for your individual needs'
      },
      {
        icon: Zap,
        title: 'Efficient Transformation',
        description: 'Noticeable improvements in just a few visits'
      }
    ],
    services: [
      {
        icon: Sparkles,
        title: 'Teeth Whitening',
        description: 'A safe and effective whitening treatment that brightens your smile and removes deep stains. Enjoy noticeable, long-lasting results in a single session.',
        features: [
          'Safe and effective treatment',
          'Deep stain removal',
          'Long-lasting results',
          'Single session completion'
        ]
      },
      {
        icon: Gem,
        title: 'Veneers & Hollywood Smile',
        description: 'Ultra-thin cosmetic veneers designed to perfect your smile by enhancing colour, shape, and symmetry. Achieve a natural yet glamorous Hollywood Smile.',
        features: [
          'Ultra-thin cosmetic veneers',
          'Colour and shape enhancement',
          'Symmetry perfection',
          'Natural glamorous results'
        ]
      },
      {
        icon: Crown,
        title: 'Dental Crowns & Bridge',
        description: 'Durable and aesthetic restorations that replace or strengthen damaged or missing teeth. Custom-made to restore natural function and appearance.',
        features: [
          'Durable restorations',
          'Aesthetic appearance',
          'Custom-made design',
          'Natural function restoration'
        ]
      },
      {
        icon: Palette,
        title: 'Smile Design',
        description: 'A digital design process that plans your ideal smile based on your facial features. Preview your results before treatment begins for full confidence in your transformation.',
        features: [
          'Digital design process',
          'Facial feature analysis',
          'Result preview',
          'Confidence in transformation'
        ]
      },
      {
        icon: Target,
        title: 'Composite Bonding',
        description: 'A minimally invasive solution to reshape and correct minor imperfections. Quick, precise, and effective, it refines your smile without extensive procedures.',
        features: [
          'Rapid treatment',
          'Minor imperfection correction',
          'Minimally invasive',
          'Refined, natural results'
        ]
      },
      {
        icon: Sparkles,
        title: 'Tooth-Coloured Fillings',
        description: 'Discreet, natural-looking restorations that match your tooth shade while restoring strength and function — an effective solution for treating decay.',
        features: [
          'Shade-matched fillings',
          'Functional and aesthetic restoration',
          'Subtle, comfortable treatment'
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
    bgColor: '#CBFF8F',
    hero: {
      title: 'Orthodontics',
      subtitle: 'Straightening Smiles, Naturally',
      description: 'Our orthodontic services combine advanced techniques with thoughtful planning to straighten teeth, correct bite issues, and create healthy, confident smiles tailored to your needs.'
    },
    benefits: [
      {
        icon: Search,
        title: 'Advanced Technology',
        description: '3D imaging and digital treatment planning for precision'
      },
      {
        icon: UserCheck,
        title: 'Expert Orthodontists',
        description: 'Board-certified specialists guiding each step'
      },
      {
        icon: Smile,
        title: 'Comfortable Treatment',
        description: 'Modern techniques to minimize discomfort'
      }
    ],
    services: [
      {
        icon: Square,
        title: 'Metal & Ceramic Braces',
        description: 'Effective orthodontic systems designed to correct a wide range of alignment issues. Both options provide excellent results, with ceramic braces offering a more discreet appearance.',
        features: [
          'Metal and ceramic options',
          'Wide range alignment correction',
          'Excellent results',
          'Discreet ceramic option'
        ]
      },
      {
        icon: Eye,
        title: 'Invisalign, Sparks & Smarter',
        description: 'Clear aligner systems that gently and discreetly align teeth using advanced digital planning. Comfortable, removable, and highly effective for everyday lifestyles.',
        features: [
          'Clear aligner systems',
          'Advanced digital planning',
          'Comfortable and removable',
          'Highly effective'
        ]
      },
      {
        icon: Shield,
        title: 'Retainers & Smile Maintenance',
        description: 'Custom retainers designed to preserve your results and prevent teeth from shifting. Ensures your smile remains aligned long after active treatment.',
        features: [
          'Custom-fitted for comfort',
          'Maintains orthodontic results',
          'Prevents shifting',
          'Supports long-term stability'
        ]
      },
      {
        icon: ClipboardCheck,
        title: 'Orthodontic Check-ups',
        description: 'Regular assessments to monitor dental alignment, evaluate bite concerns, and adjust treatment plans as needed.',
        features: [
          'Comprehensive evaluation',
          'Bite and alignment analysis',
          'Treatment adjustments',
          'Ensures predictable outcomes'
        ]
      }
    ],
    whyChoose: {
      title: 'Why Choose Our Orthodontic Services',
      description: 'We combine expertise, advanced technology, and thoughtful patient care to create smiles that are both beautiful and healthy.',
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
    bgColor: '#CBFF8F',
    hero: {
      title: 'Pediatric Dentistry',
      subtitle: 'Gentle Care for Growing Smiles',
      description: 'Our pediatric dentistry services provide specialized, compassionate care in a welcoming environment designed just for children. Every visit is crafted to make dental care a positive, engaging experience while promoting lifelong oral health.'
    },
    benefits: [
      {
        icon: Heart,
        title: 'Child-Friendly Environment',
        description: 'Fun, relaxing spaces that put kids at ease'
      },
      {
        icon: UserCheck,
        title: 'Specialized Dentists',
        description: 'Professionals trained in pediatric care'
      },
      {
        icon: GraduationCap,
        title: 'Education-Focused',
        description: 'Teaching children good oral hygiene habits early'
      }
    ],
    services: [
      {
        icon: Heart,
        title: 'Gentle Dental Care for Kids',
        description: 'Soft, comforting care that helps children feel relaxed during dental visits. Positive experiences foster healthy habits and reduce anxiety for future treatments.',
        features: [
          'Soft, reassuring techniques',
          'Relaxed, kid-friendly visits',
          'Encourages lifelong oral health',
          'Builds trust and confidence'
        ]
      },
      {
        icon: Shield,
        title: 'Fluoride Treatment',
        description: 'A preventive treatment that strengthens enamel and reduces the risk of decay—especially beneficial for growing children.',
        features: [
          'Enamel strengthening',
          'Decay risk reduction',
          'Preventive care',
          'Beneficial for growing children'
        ]
      },
      {
        icon: Lock,
        title: 'Dental Sealant',
        description: 'A protective coating applied to molars to prevent cavities. One of the most effective long-term methods for paediatric decay prevention.',
        features: [
          'Protective coating',
          'Molar protection',
          'Cavity prevention',
          'Long-term effectiveness'
        ]
      },
      {
        icon: Search,
        title: 'Early Orthodontic Evaluation',
        description: 'Early assessment that identifies developmental issues in the teeth and jaws, ensuring timely guidance and intervention.',
        features: [
          'Early assessment',
          'Developmental issue identification',
          'Timely guidance',
          'Intervention planning'
        ]
      },
      {
        icon: BookOpen,
        title: 'Oral Hygiene Education',
        description: 'Interactive instruction to teach children proper brushing, flossing, and healthy habits, empowering them to take charge of their oral health.',
        features: [
          'Engaging, age-appropriate teaching',
          'Brushing and flossing guidance',
          'Healthy habit development',
          'Builds lifelong oral care skills'
        ]
      }
    ],
    whyChoose: {
      title: 'Why Choose Our Pediatric Dentistry',
      description: 'We create experiences that children enjoy while ensuring parents feel confident in the care provided.',
      features: [
        'Specialized pediatric dentists',
        'Child-friendly clinic design',
        'Gentle, supportive approach',
        'Parent education and involvement',
        'Preventive, long-term care',
        'Builds trust, comfort, and confidence'
      ],
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&h=600&fit=crop'
    }
  },
  {
    id: 'advanced-restorative',
    title: 'Implant & Advanced Care',
    icon: '🔬',
    shortDescription: 'Complex treatments for structural and functional restoration including implants and full-mouth restoration.',
    bgColor: '#CBFF8F',
    hero: {
      title: 'Implant & Advanced Care Dentistry',
      subtitle: 'Confidence and Harmony',
      description: 'Our advanced restorative dentistry combines expert care with thoughtful planning to repair, replace, and restore damaged or missing teeth. Every treatment is designed to bring lasting results while maintaining natural function and aesthetics.'
    },
    benefits: [
      {
        icon: Microscope,
        title: 'Advanced Techniques',
        description: 'Cutting-edge tools and approaches for accurate, reliable outcomes'
      },
      {
        icon: ShieldCheck,
        title: 'Durable Results',
        description: 'Restorations built to last and function naturally'
      },
      {
        icon: Target,
        title: 'Comprehensive Solutions',
        description: 'Full-mouth and multi-disciplinary care for complex needs'
      }
    ],
    services: [
      {
        icon: Scissors,
        title: 'Dental Implants',
        description: 'State-of-the-art implant solutions designed to replace missing teeth with exceptional stability and natural appearance.',
        features: [
          'State-of-the-art solutions',
          'Exceptional stability',
          'Natural appearance',
          'Missing tooth replacement'
        ]
      },
      {
        icon: RefreshCw,
        title: 'Full Mouth Rehabilitation',
        description: 'A comprehensive approach that restores function, aesthetics, and oral harmony through personalised, multi-disciplinary treatment planning.',
        features: [
          'Comprehensive approach',
          'Function and aesthetics restoration',
          'Oral harmony',
          'Multi-disciplinary planning'
        ]
      },
      {
        icon: AlertCircle,
        title: 'Emergency Dental Treatment',
        description: 'Immediate care for urgent situations involving pain, trauma, or dental injury—ensuring fast relief and stabilisation.',
        features: [
          'Immediate care',
          'Urgent situation handling',
          'Pain and trauma treatment',
          'Fast relief and stabilisation'
        ]
      }
    ],
    whyChoose: {
      title: 'Why Choose Our Implant & Advanced Care',
      description: 'We combine expertise, advanced technology, and patient-focused planning to deliver restorative solutions with confidence and care.',
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
