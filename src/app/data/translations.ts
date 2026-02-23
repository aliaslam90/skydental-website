export type Locale = 'en' | 'ar'

export const translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      doctors: 'Doctors',
      packages: 'Packages & Offers',
      aboutUs: 'About Us',
      contact: 'Contact',
      more: 'More',
      patientGuide: 'Patient Guide',
      careers: 'Careers',
      faqs: 'FAQs',
      privacyPolicy: 'Privacy Policy',
      viewAllServices: 'View all services',
      requestAppointment: 'Request Appointment',
      generalDentistry: 'General Dentistry',
      cosmeticDentistry: 'Cosmetic Dentistry',
      orthodontics: 'Orthodontics',
      pediatricDentistry: 'Pediatric Dentistry',
      implantAdvanced: 'Implant & Advanced Care',
    },
    hero: {
      title: 'Sky Dental Center',
      tagline1: 'Your smile.',
      tagline2: 'Your confidence.',
      tagline3: 'Our expert care.',
    },
    footer: {
      quickLinks: 'Quick Links',
      allServices: 'All Services',
      contactInfo: 'Contact Information',
      home: 'Home',
      aboutUs: 'About Us',
      doctors: 'Doctors',
      services: 'Services',
      packages: 'Packages & Offers',
      patientGuide: 'Patient Guide',
      faqs: 'FAQs',
      careers: 'Careers',
      contactUs: 'Contact Us',
      privacyPolicy: 'Privacy Policy',
      generalDentistry: 'General Dentistry',
      cosmeticDentistry: 'Cosmetic Dentistry',
      orthodontics: 'Orthodontics',
      pediatricDentistry: 'Pediatric Dentistry',
      implantAdvanced: 'Implant & Advanced Care',
      description: 'Sky Dental Center is a modern, full-service dental clinic offering comprehensive care across all specialties. Our professional and experienced doctors are highly skilled in the latest treatment methods, delivering precise, advanced, and patient-focused care in a comfortable, contemporary setting.',
      hours: '10am - 10pm, 7 Days a week',
      rights: 'All rights reserved.',
    },
    lang: {
      switchToArabic: 'العربية',
      switchToEnglish: 'English',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      services: 'الخدمات',
      doctors: 'الأطباء',
      packages: 'الباقات والعروض',
      aboutUs: 'من نحن',
      contact: 'اتصل بنا',
      more: 'المزيد',
      patientGuide: 'دليل المريض',
      careers: 'الوظائف',
      faqs: 'الأسئلة الشائعة',
      privacyPolicy: 'سياسة الخصوصية',
      viewAllServices: 'عرض كل الخدمات',
      requestAppointment: 'احجز موعد',
      generalDentistry: 'طب الأسنان العام',
      cosmeticDentistry: 'طب الأسنان التجميلي',
      orthodontics: 'تقويم الأسنان',
      pediatricDentistry: 'طب أسنان الأطفال',
      implantAdvanced: 'زراعة ومتابعة متقدمة',
    },
    hero: {
      title: 'مركز سكاي لطب الأسنان',
      tagline1: 'ابتسامتك.',
      tagline2: 'ثقتك.',
      tagline3: 'رعايتنا المتخصصة.',
    },
    footer: {
      quickLinks: 'روابط سريعة',
      allServices: 'جميع الخدمات',
      contactInfo: 'معلومات الاتصال',
      home: 'الرئيسية',
      aboutUs: 'من نحن',
      doctors: 'الأطباء',
      services: 'الخدمات',
      packages: 'الباقات والعروض',
      patientGuide: 'دليل المريض',
      faqs: 'الأسئلة الشائعة',
      careers: 'الوظائف',
      contactUs: 'اتصل بنا',
      privacyPolicy: 'سياسة الخصوصية',
      generalDentistry: 'طب الأسنان العام',
      cosmeticDentistry: 'طب الأسنان التجميلي',
      orthodontics: 'تقويم الأسنان',
      pediatricDentistry: 'طب أسنان الأطفال',
      implantAdvanced: 'زراعة ومتابعة متقدمة',
      description: 'مركز سكاي لطب الأسنان عيادة أسنان حديثة وشاملة لجميع التخصصات. أطباؤنا المحترفون ذوو الخبرة مهرة في أحدث طرق العلاج، ويقدمون رعاية دقيقة ومتقدمة ومركزة على المريض في بيئة مريحة وعصرية.',
      hours: '١٠ صباحاً - ١٠ مساءً، ٧ أيام في الأسبوع',
      rights: 'جميع الحقوق محفوظة.',
    },
    lang: {
      switchToArabic: 'العربية',
      switchToEnglish: 'English',
    },
  },
} as const

// Key path type for type-safe t(key)
export type TranslationKey = keyof typeof translations.en
export type NavKey = keyof typeof translations.en.nav
export type HeroKey = keyof typeof translations.en.hero
export type FooterKey = keyof typeof translations.en.footer
export type LangKey = keyof typeof translations.en.lang

export function getTranslation(locale: Locale, section: 'nav' | 'hero' | 'footer' | 'lang', key: string): string {
  const sectionObj = translations[locale][section] as Record<string, string>
  return sectionObj[key] ?? (translations.en[section] as Record<string, string>)[key] ?? key
}
