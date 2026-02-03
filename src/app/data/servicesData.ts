import { Calendar, Award, Users, CalendarCheck, Sparkles, Scissors, Sprout, Bandage, Shield, Sparkle, Palette, Zap, Gem, Crown, Target, Search, UserCheck, Smile, Square, Eye, ClipboardCheck, Heart, GraduationCap, BookOpen, Lock, Microscope, ShieldCheck, RefreshCw, Camera, AlertCircle } from 'lucide-react'
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
  benefits: {
    icon: LucideIcon
    title: string
    description: string
  }[]
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
      subtitle: 'General Dentistry forms the foundation of lifelong oral health',
      description: 'General Dentistry forms the foundation of lifelong oral health, focusing on early diagnosis, prevention, and treatment of common dental concerns.'
    },
    benefits: [
      {
        icon: Calendar,
        title: 'Same-Day Appointments',
        description: 'Flexible scheduling to fit your busy lifestyle'
      },
      {
        icon: Award,
        title: 'Expert Care',
        description: 'Experienced professionals using latest techniques'
      },
      {
        icon: Users,
        title: 'Family-Friendly',
        description: 'Comprehensive care for all ages'
      }
    ],
    services: [
      {
        icon: CalendarCheck,
        title: 'Dental Checkup & Cleaning',
        description: 'A comprehensive examination and professional cleaning that help detect early concerns and maintain optimal oral hygiene. This service prevents decay, reduces gum disease risk, and leaves your smile feeling fresh and healthy.',
        features: [
          'Comprehensive oral examination',
          'Professional teeth cleaning',
          'Oral cancer screening',
          'Personalized care plan'
        ]
      },
      {
        icon: Sparkles,
        title: 'Tooth-Coloured Fillings',
        description: 'Aesthetic, natural-looking fillings that match your tooth shade while restoring function and structure. An ideal solution for treating decay discreetly and effectively.',
        features: [
          'Natural tooth shade matching',
          'Aesthetic restoration',
          'Functional repair',
          'Discreet treatment'
        ]
      },
      {
        icon: Scissors,
        title: 'Tooth Extraction',
        description: 'Gentle and precise removal of damaged or non-restorable teeth with a focus on patient comfort and fast healing. Our approach minimises discomfort and supports ongoing oral health.',
        features: [
          'Gentle extraction technique',
          'Pain management',
          'Post-op care instructions',
          'Healing monitoring'
        ]
      },
      {
        icon: Sprout,
        title: 'Root Canal Treatments',
        description: 'An advanced treatment that removes infection inside the tooth to preserve it rather than extract it. Performed using modern techniques to ensure comfort and durable outcomes.',
        features: [
          'Pain-free procedure',
          'Advanced technology',
          'Tooth preservation',
          'Long-lasting results'
        ]
      },
      {
        icon: Bandage,
        title: 'Gum Disease Treatment',
        description: 'Specialised care that treats inflammation, halts disease progression, and restores gum health. Early management prevents tooth loss and enhances overall oral wellbeing.',
        features: [
          'Inflammation treatment',
          'Disease progression prevention',
          'Gum health restoration',
          'Tooth loss prevention'
        ]
      },
      {
        icon: Shield,
        title: 'Preventive Dental Care',
        description: 'Fluoride treatments, hygiene guidance, and routine monitoring designed to protect your smile from future issues. Prevention is the key to lasting oral health.',
        features: [
          'Fluoride treatments',
          'Hygiene guidance',
          'Routine monitoring',
          'Preventive strategies'
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
    bgColor: '#CBFF8F',
    hero: {
      title: 'Cosmetic Dentistry',
      subtitle: 'Transform your smile and boost your confidence',
      description: 'Cosmetic dentistry focuses on improving the appearance of your teeth, gums, and smile using advanced aesthetic techniques and materials.'
    },
    benefits: [
      {
        icon: Sparkle,
        title: 'Beautiful Results',
        description: 'Natural-looking enhancements that transform your smile'
      },
      {
        icon: Palette,
        title: 'Custom Design',
        description: 'Personalized treatment plans for your unique smile'
      },
      {
        icon: Zap,
        title: 'Quick Transformation',
        description: 'See dramatic improvements in just a few visits'
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
        description: 'A quick and minimally invasive solution that reshapes and corrects minor imperfections. Achieve refined, aesthetic enhancements without extensive procedures.',
        features: [
          'Quick treatment',
          'Minimally invasive',
          'Minor imperfection correction',
          'Refined aesthetic results'
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
      subtitle: 'Straighten your smile with confidence',
      description: 'Our orthodontic services use advanced technology to straighten teeth, correct bite issues, and create beautiful, healthy smiles.'
    },
    benefits: [
      {
        icon: Search,
        title: 'Advanced Technology',
        description: '3D imaging and digital treatment planning'
      },
      {
        icon: UserCheck,
        title: 'Expert Orthodontists',
        description: 'Board-certified specialists with years of experience'
      },
      {
        icon: Smile,
        title: 'Comfortable Treatment',
        description: 'Modern techniques for minimal discomfort'
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
        title: 'Retainers and Smile Correction',
        description: 'Custom retainers designed to maintain treatment results and prevent teeth from shifting. Supports long-term smile stability.',
        features: [
          'Custom retainers',
          'Treatment result maintenance',
          'Prevents teeth shifting',
          'Long-term smile stability'
        ]
      },
      {
        icon: ClipboardCheck,
        title: 'Orthodontic Check-up',
        description: 'A detailed orthodontic assessment to evaluate dental alignment and bite concerns, allowing us to plan or adjust treatment as needed.',
        features: [
          'Detailed assessment',
          'Dental alignment evaluation',
          'Bite concern evaluation',
          'Treatment planning and adjustment'
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
    bgColor: '#CBFF8F',
    hero: {
      title: 'Pediatric Dentistry',
      subtitle: 'Creating healthy smiles for kids',
      description: 'Our pediatric dentistry services provide gentle, specialized care in a fun, welcoming environment designed just for children.'
    },
    benefits: [
      {
        icon: Heart,
        title: 'Child-Friendly',
        description: 'Fun, comfortable environment designed for kids'
      },
      {
        icon: UserCheck,
        title: 'Specialized Care',
        description: 'Dentists trained in pediatric dentistry'
      },
      {
        icon: GraduationCap,
        title: 'Education Focus',
        description: 'Teaching kids healthy habits for life'
      }
    ],
    services: [
      {
        icon: Heart,
        title: 'Gentle Dental Care for Kids',
        description: 'Soft, comforting care that helps children feel relaxed during dental visits. We create positive experiences that encourage lifelong oral health.',
        features: [
          'Soft and comforting care',
          'Relaxed dental visits',
          'Positive experiences',
          'Lifelong oral health encouragement'
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
        title: 'Education on Oral Hygiene Habits',
        description: 'Engaging instruction that teaches children proper brushing, flossing, and healthy habits to support long-term dental wellness.',
        features: [
          'Engaging instruction',
          'Proper brushing techniques',
          'Flossing education',
          'Healthy habit development'
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
    title: 'Implant & Advanced Care',
    icon: '🔬',
    shortDescription: 'Complex treatments for structural and functional restoration including implants and full-mouth restoration.',
    bgColor: '#CBFF8F',
    hero: {
      title: 'Implant & Advanced Care Dentistry',
      subtitle: 'Restore function and beauty to your smile',
      description: 'Advanced restorative dentistry combines cutting-edge technology with expertise to repair, replace, and restore damaged or missing teeth.'
    },
    benefits: [
      {
        icon: Microscope,
        title: 'Advanced Technology',
        description: 'State-of-the-art equipment and techniques'
      },
      {
        icon: ShieldCheck,
        title: 'Durable Results',
        description: 'Long-lasting solutions that stand the test of time'
      },
      {
        icon: Target,
        title: 'Comprehensive Care',
        description: 'Full-mouth restoration capabilities'
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
        icon: Camera,
        title: 'Digital X-rays & 3D Imaging',
        description: 'Advanced diagnostic technology providing highly detailed images that guide precise and efficient treatment.',
        features: [
          'Advanced diagnostic technology',
          'Highly detailed images',
          'Precise treatment guidance',
          'Efficient treatment planning'
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
      title: 'Why Choose Our Implant & Advanced Care Services?',
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
