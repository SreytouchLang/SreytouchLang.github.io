import { useState } from 'react'
import profileImage from './assets/sreytouch-profile.jpg'

const navLinks = [
  { label: 'Home', href: '#home', icon: 'home' },
  { label: 'About', href: '#about', icon: 'user' },
  { label: 'Skills', href: '#skills', icon: 'stack' },
  { label: 'Resume', href: '#resume', icon: 'file' },
  { label: 'Projects', href: '#projects', icon: 'briefcase' },
  { label: 'Contact', href: '#contact', icon: 'mail' }
]

function NavIcon({ icon }) {
  const svgProps = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.9',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true'
  }

  switch (icon) {
    case 'home':
      return (
        <svg {...svgProps}>
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5.5 9.5V21h13V9.5" />
          <path d="M9.5 21v-6h5v6" />
        </svg>
      )
    case 'user':
      return (
        <svg {...svgProps}>
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
        </svg>
      )
    case 'stack':
      return (
        <svg {...svgProps}>
          <rect x="4" y="5" width="16" height="5" rx="1.5" />
          <rect x="4" y="14" width="16" height="5" rx="1.5" />
          <path d="M16.5 7.5h.01M16.5 16.5h.01" />
        </svg>
      )
    case 'file':
      return (
        <svg {...svgProps}>
          <path d="M8 3.5h6l4 4V20a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" />
          <path d="M14 3.5V8h4" />
        </svg>
      )
    case 'briefcase':
      return (
        <svg {...svgProps}>
          <path d="M4 8.5h16v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-10Z" />
          <path d="M9 8.5V6.8A1.8 1.8 0 0 1 10.8 5h2.4A1.8 1.8 0 0 1 15 6.8v1.7" />
          <path d="M4 12.5h16" />
        </svg>
      )
    case 'mail':
      return (
        <svg {...svgProps}>
          <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
          <path d="m4.5 7 7.5 6 7.5-6" />
        </svg>
      )
    default:
      return null
  }
}

function ThemeIcon({ theme }) {
  const svgProps = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.8',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true'
  }

  if (theme === 'dark') {
    return (
      <svg {...svgProps}>
        <circle cx="12" cy="12" r="4.2" />
        <path d="M12 2.5v2.4" />
        <path d="M12 19.1v2.4" />
        <path d="m5.3 5.3 1.7 1.7" />
        <path d="m17 17 1.7 1.7" />
        <path d="M2.5 12h2.4" />
        <path d="M19.1 12h2.4" />
        <path d="m5.3 18.7 1.7-1.7" />
        <path d="M17 7l1.7-1.7" />
      </svg>
    )
  }

  return (
    <svg {...svgProps}>
      <path d="M20 15.2A7.8 7.8 0 1 1 8.8 4 6.4 6.4 0 0 0 20 15.2Z" />
    </svg>
  )
}

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/SreytouchLang' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sreytouch-lang/' },
  { label: 'Email', href: 'mailto:sreytouchjessicalang@gmail.com' },
  { label: 'AI Project', href: 'https://getrepurpose-ai.com' },
  { label: 'HackerRank', href: 'https://www.hackerrank.com/profile/sreytouchjessic1' }
]

const quickFacts = [
  { label: 'Location', value: 'California, United States' },
  { label: 'Opportunity', value: 'Full-time or contract' },
  { label: 'Focus', value: 'React Native, iOS, and applied AI' },
  { label: 'Strength', value: 'Architecture, testing, and release' }
]

const bestSkills = [
  'iOS Development',
  'Swift',
  'SwiftUI',
  'UIKit',
  'AI',
  'Python',
  'Node.js',
  'TypeScript',
  'XCTest',
  'Core Data',
  'Objective-C',
  'React Native',
  'Flutter',
  'MVC',
  'MVVM',
  'App Testing'
]

const summaryHighlights = [
  '8+ years of hands-on experience architecting, leading, and shipping large-scale React Native, iOS Swift, and Kotlin applications.',
  'Staff-level experience driving architecture decisions, engineering standards, PR culture, and mentorship while staying deeply involved in delivery.',
  'Strong production ownership across notifications, offline sync, payments, testing, release management, and cross-platform mobile execution.',
  'Hands-on AI product work across LLM chat, predictive personalization, content generation, automation workflows, and data-driven product features.'
]

const skillGroups = [
  {
    title: 'iOS engineering',
    items: ['Swift', 'SwiftUI', 'UIKit', 'Objective-C', 'Core Data', 'XCTest']
  },
  {
    title: 'Cross-platform delivery',
    items: [
      'React Native',
      'Flutter',
      'TypeScript',
      'Node.js',
      'Python',
      'iOS / Android product work',
      'Reusable mobile UI',
      'API integration'
    ]
  },
  {
    title: 'Architecture and quality',
    items: ['MVC', 'MVVM', 'Design patterns', 'App testing', 'TDD support']
  },
  {
    title: 'AI and product work',
    items: [
      'Recommendation systems',
      'Content generation',
      'Automation workflows',
      'Data-driven features',
      'Prompt-based UX'
    ]
  },
  {
    title: 'Tools and delivery',
    items: [
      'Xcode',
      'CocoaPods',
      'Fastlane',
      'Git / GitHub / GitLab',
      'Jira',
      'CircleCI / Jenkins'
    ]
  }
]

const experienceEntries = [
  {
    role: 'Staff Mobile Engineer - React Native & iOS Lead',
    company: 'Coinable Inc. · Palo Alto, CA (remote)',
    period: 'Apr 2024 - Present',
    summary:
      'Set technical direction for the mobile organization while leading React Native, native iOS, and AI-enabled product delivery from architecture through release.',
    bullets: [
      'Authored the React Native New Architecture RFC (JSI + Hermes), cutting JS thread bottlenecks by 40% and preparing the platform for 8M+ user scale.',
      'Led and mentored a cross-functional mobile team while remaining a primary contributor across Redux and TypeScript architecture, native Swift and Kotlin bridge modules, and CI/CD design.',
      'Owned end-to-end delivery of push notifications, offline-first sync, and in-app payments from technical scoping through rollout and incident response.',
      'Defined coding standards, PR review culture, and ADR processes that reduced regression rate by 35% and onboarding time for new engineers by 50%.',
      'Built observability with Datadog, Rudderstack, and Segment, and integrated AI-powered chatbot and predictive personalization features with AWS SageMaker and OpenAI API.'
    ],
    tech:
      'React Native, TypeScript, Redux, Swift, Kotlin, JSI, Hermes, Datadog, Segment, Rudderstack, AWS SageMaker, OpenAI API, CI/CD'
  },
  {
    role: 'Senior Mobile Engineer',
    company: 'LTLabs Co., Ltd. · Remote',
    period: 'Feb 2020 - Mar 2024',
    summary:
      'Architected and scaled React Native and native iOS applications for high-traffic products while driving mobile architecture, release quality, and team growth.',
    bullets: [
      'Architected and led React Native and native iOS delivery for a platform serving 100K+ daily active users, improving user experience and system performance by 25%.',
      'Introduced MVVM and Clean Architecture patterns that reduced coupling and helped the mobile codebase scale across 6 squads.',
      'Built Swift and Objective-C features with XCTest and XCUITest coverage, coordinated TestFlight beta programs, and published multiple App Store releases.',
      'Added Kotlin-based Android modules bridged into the React Native layer to accelerate platform-specific delivery without duplicating business logic.',
      'Established Bitrise and Jenkins CI/CD, plus analytics and crash monitoring integrations that reduced mean time to detect mobile incidents.',
      'Mentored 5 junior and mid-level mobile engineers through pair programming, code reviews, and weekly architecture sessions.'
    ],
    tech:
      'React Native, TypeScript, Swift, Objective-C, Kotlin, Redux, XCTest, XCUITest, Bitrise, Jenkins, Firebase, Amplitude, Splunk'
  },
  {
    role: 'Software Engineer - Mobile',
    company: 'SLASH CO. INC. · Remote',
    period: 'Apr 2017 - Feb 2020',
    summary:
      'Built government-scale and startup mobile products across React Native and iOS, with deep ownership of release management, SDK reuse, and performance work.',
    bullets: [
      'Designed and shipped React Native and iOS Swift applications for government-scale platforms and startup products.',
      'Led App Store submission strategy and release management across multiple product lines.',
      'Built an internal mobile SDK for push notifications, deep linking, and offline sync, reducing duplicated infrastructure by 60% across 3 product teams.',
      'Resolved critical performance bottlenecks through memory profiling and GCD threading optimizations, and modernized legacy Objective-C code to Swift.',
      'Coordinated sprint planning and milestone delivery with scrum masters, solution architects, and product owners in a fast-moving startup environment.'
    ],
    tech:
      'React Native, TypeScript, Swift, Objective-C, GCD, Push Notifications, Deep Linking, Offline Sync, Agile Delivery, App Store Release Management'
  },
  {
    role: 'Mobile Engineer',
    company: 'Pathmazing Co., Ltd. · Phnom Penh',
    period: 'Oct 2015 - Apr 2017',
    summary:
      'Shipped iOS and watchOS applications end-to-end while helping the team mature reusable components, documentation, and estimation practices.',
    bullets: [
      'Delivered iOS and watchOS applications from requirements gathering through App Store deployment.',
      'Built internal component libraries reused across multiple mobile products.',
      'Mentored junior teammates on Swift patterns, Agile workflows, and sprint estimation.',
      'Contributed technical documentation and cross-team engineering practices that improved delivery consistency.'
    ],
    tech:
      'Swift, UIKit, watchOS, App Store Deployment, Component Libraries, Agile'
  }
]

const educationEntries = [
  {
    degree: 'M.S. Computer & Information Science',
    school: 'Westcliff University · Focus: Mobile Application & Applied ML/AI',
    period: 'Feb 2025 - Mar 2027'
  },
  {
    degree: 'B.S. Computer & Information Science',
    school: 'Royal University of Phnom Penh · GPA 3.9 / 4.0',
    period: 'Aug 2012 - Apr 2016'
  }
]

const certificationEntries = [
  'The Complete Introduction to Node.js',
  'Front-End Web Development with React',
  'The Complete Introduction to Software Engineering',
  'HTML, CSS, and JavaScript for Web Developers'
]

const aiFocusEntries = [
  'AI product work',
  'Recommendation systems',
  'Content generation',
  'Automation workflows'
]

const hiddenRepos = new Set([
  'SreytouchLang',
  'FetchRecipeApp',
  'Week6-PHP-Project-Forms',
  'Guestbook_Week5_Assignment_SreytouchLang',
  'ListProduct-FakeAPI-ReactNative-',
  'Week2-Project2-Wordle',
  'Week1-Project1-Wordle',
  'IOS101-Week2-Lab2-MarioKartPt2',
  'IOS101-Week1Lab1-MarioKart',
  'ListProduct-Flutter-MockApi',
  'system-design-resources',
  'low-level-design',
  'FetchJoke-SwiftUI',
  'SwiftUI-LoginForm',
  'SwiftUI-Login-MVVM',
  'Sample-ListProduct-MVC-MVVM-SingleFile-SwiftUI',
  'SwiftUI-ContactPhone',
  'SwiftUI-QRView',
  'SwiftUI-IncomingCall',
  'CalculatorSwiftUI',
  'Design-Patterns-in-iOS',
  'SwiftUIFirebase',
  'SwiftUI-ChatApp',
  'FB_SwiftUI',
  'SwiftUI-Travel',
  'SwiftUI-FilmMovie',
  'SwiftUI-Core-Bluetooth',
  'RobinNest_SocialNetworking_WebApp-PHP-',
  'Clojure-API-App',
  'SwiftUI-NodeJS-SocialMedia'
])

const rawProjects = [
  ['repurpose-ai', 'TypeScript', '2026-05-12'],
  ['CryptoTradingPlatform-ReactNative-Typescript', 'TypeScript', '2026-05-12'],
  ['RobinNest_SocialNetworking_WebApp-PHP-', 'PHP', '2026-03-08'],
  ['music-app-reactnative', 'TypeScript', '2026-02-08'],
  ['zeelool-app-reactnative', 'TypeScript', '2026-02-08'],
  ['whatsapp-clone-react-native', 'TypeScript', '2026-01-07'],
  ['Uber-App-ReactNative', 'TypeScript', '2026-01-07'],
  ['ECommerceApp_-Recommendation_AI_Swift', 'Swift', '2025-12-22'],
  ['Week6-PHP-Project-Forms', 'JavaScript', '2025-12-13'],
  ['Guestbook_Week5_Assignment_SreytouchLang', 'PHP', '2025-11-30'],
  ['ListProduct-FakeAPI-ReactNative-', 'TypeScript', '2025-08-05'],
  ['SwiftUI-Core-Bluetooth', 'Swift', '2025-07-18'],
  ['Week2-Project2-Wordle', 'Swift', '2025-06-12'],
  ['Week1-Project1-Wordle', 'Swift', '2025-06-12'],
  ['IOS101-Week2-Lab2-MarioKartPt2', 'Swift', '2025-06-12'],
  ['IOS101-Week1Lab1-MarioKart', 'Swift', '2025-06-05'],
  ['trello-clone-react-native', 'TypeScript', '2025-06-02'],
  ['airbnb-clone-react-native', 'TypeScript', '2025-06-02'],
  ['chatgpt-clone-react-native', 'TypeScript', '2025-06-02'],
  ['Todo-ReactNative', 'TypeScript', '2025-06-02'],
  ['music-web', 'TypeScript', '2025-06-02'],
  ['music-apps', 'Swift', '2025-06-02'],
  ['react-native-ecommerce', 'TypeScript', '2025-06-02'],
  ['clone-deliveroo-react-native', 'TypeScript', '2025-05-13'],
  ['ListProduct-Flutter-MockApi', 'C++', '2025-02-06'],
  ['FetchRecipeApp', 'Swift', '2025-01-30'],
  ['BookStoreApp_Flutter', 'Dart', '2024-10-04'],
  ['React-PythonDjango-BookApp', 'Python', '2024-10-03'],
  ['SwiftUI-RemindersClone', 'Swift', '2024-09-13'],
  ['system-design-resources', 'Java', '2024-09-11'],
  ['low-level-design', 'Java', '2024-09-11'],
  ['Clojure-API-App', 'Clojure', '2024-09-11'],
  ['SwiftUI-Animations', 'Swift', '2024-09-03'],
  ['FetchJoke-SwiftUI', 'Unknown', '2024-08-26'],
  ['SwiftUI-LoginForm', 'Swift', '2024-08-26'],
  ['SwiftUI-Login-MVVM', 'Swift', '2024-08-26'],
  ['SwiftUI-ContactPhone', 'Swift', '2024-08-26'],
  ['SwiftUI-QRView', 'Swift', '2024-08-26'],
  ['SwiftUI-IncomingCall', 'Swift', '2024-08-26'],
  ['Sample-ListProduct-MVC-MVVM-SingleFile-SwiftUI', 'Unknown', '2024-08-25'],
  ['CalculatorSwiftUI', 'Swift', '2024-08-25'],
  ['GooglePhotos-ReactNative', 'TypeScript', '2024-08-24'],
  ['SreytouchLang', 'Unknown', '2024-08-23'],
  ['SwiftUI-Mastery-Travel-Discovery-NodeJS', 'Swift', '2024-08-22'],
  ['Passport-Template-NodeJS', 'JavaScript', '2024-08-19'],
  ['ECommerce-AmazonClone-Flutter-NodeJS', 'Dart', '2024-04-30'],
  ['Crypto-App-Flutter', 'Dart', '2024-04-30'],
  ['SwiftUI-NodeJS-SocialMedia', 'Swift', '2024-04-27'],
  ['SwiftUI-FilmMovie', 'Unknown', '2024-03-13'],
  ['Design-Patterns-in-iOS', 'Swift', '2024-01-25'],
  ['SwiftUI-Travel', 'Swift', '2024-01-02'],
  ['ReactNative-Booking-App', 'JavaScript', '2023-12-05'],
  ['ReactNative-Laundry-App', 'JavaScript', '2023-12-05'],
  ['ReactNative-Delivery-App', 'TypeScript', '2023-12-05'],
  ['FB_SwiftUI', 'Swift', '2023-11-30'],
  ['SwiftUI-ChatApp', 'Swift', '2023-11-17'],
  ['SwiftUIFirebase', 'Swift', '2023-11-17']
]

const projectOverrides = {
  'repurpose-ai': {
    title: 'RepurposeAI',
    category: 'Personal Project',
    stack: 'Next.js / TypeScript / Supabase / AI',
    summary:
      'AI-powered personal product for turning one piece of content into multi-platform posts, scheduling, publishing, analytics, and automation workflows.',
    liveHref: 'https://getrepurpose-ai.com',
    liveLabel: 'Open app',
    featured: true
  },
  'CryptoTradingPlatform-ReactNative-Typescript': {
    title: 'Crypto Trading Platform',
    featured: true
  },
  'RobinNest_SocialNetworking_WebApp-PHP-': {
    title: 'RobinNest Social Networking',
    featured: true
  },
  'music-app-reactnative': {
    title: 'Music App',
    featured: true
  },
  'zeelool-app-reactnative': {
    title: 'Zeelool App'
  },
  'whatsapp-clone-react-native': {
    title: 'WhatsApp Clone',
    featured: true
  },
  'Uber-App-ReactNative': {
    title: 'Uber App Clone'
  },
  'ECommerceApp_-Recommendation_AI_Swift': {
    title: 'Ecommerce Recommendation AI',
    featured: true
  },
  'Guestbook_Week5_Assignment_SreytouchLang': {
    title: 'Guestbook Assignment'
  },
  'ListProduct-FakeAPI-ReactNative-': {
    title: 'ListProduct Fake API',
    category: 'React Native',
    stack: 'React Native / TypeScript'
  },
  'SwiftUI-Core-Bluetooth': {
    title: 'SwiftUI Core Bluetooth',
    featured: true
  },
  'Week2-Project2-Wordle': {
    title: 'Wordle Project Week 2'
  },
  'Week1-Project1-Wordle': {
    title: 'Wordle Project Week 1'
  },
  'IOS101-Week2-Lab2-MarioKartPt2': {
    title: 'MarioKart Lab Week 2'
  },
  'IOS101-Week1Lab1-MarioKart': {
    title: 'MarioKart Lab Week 1'
  },
  'trello-clone-react-native': {
    title: 'Trello Clone'
  },
  'airbnb-clone-react-native': {
    title: 'Airbnb Clone'
  },
  'chatgpt-clone-react-native': {
    title: 'ChatGPT Clone',
    summary:
      'AI-style mobile interface built around conversational patterns, prompt exchange, and assistant-centered UX.'
  },
  'Todo-ReactNative': {
    title: 'Todo App'
  },
  'music-web': {
    title: 'Music Web'
  },
  'music-apps': {
    title: 'Music Apps'
  },
  'react-native-ecommerce': {
    title: 'React Native Ecommerce',
    featured: true
  },
  'clone-deliveroo-react-native': {
    title: 'Deliveroo Clone'
  },
  'ListProduct-Flutter-MockApi': {
    title: 'ListProduct Flutter Mock API'
  },
  'BookStoreApp_Flutter': {
    title: 'BookStore App'
  },
  'React-PythonDjango-BookApp': {
    title: 'React Python Django Book App'
  },
  'SwiftUI-RemindersClone': {
    title: 'SwiftUI Reminders Clone'
  },
  'system-design-resources': {
    title: 'System Design Resources'
  },
  'low-level-design': {
    title: 'Low Level Design'
  },
  'Clojure-API-App': {
    title: 'Clojure API App'
  },
  'FetchJoke-SwiftUI': {
    title: 'Fetch Joke SwiftUI',
    stack: 'SwiftUI / Swift'
  },
  'SwiftUI-LoginForm': {
    title: 'SwiftUI Login Form'
  },
  'SwiftUI-Login-MVVM': {
    title: 'SwiftUI Login MVVM'
  },
  'SwiftUI-ContactPhone': {
    title: 'SwiftUI Contact Phone'
  },
  'SwiftUI-QRView': {
    title: 'SwiftUI QR View'
  },
  'SwiftUI-IncomingCall': {
    title: 'SwiftUI Incoming Call'
  },
  'Sample-ListProduct-MVC-MVVM-SingleFile-SwiftUI': {
    title: 'ListProduct MVC MVVM Sample',
    stack: 'SwiftUI / Swift'
  },
  'GooglePhotos-ReactNative': {
    title: 'Google Photos Clone'
  },
  SreytouchLang: {
    title: 'Personal GitHub Profile',
    category: 'Personal Project',
    stack: 'GitHub Profile / Personal Brand',
    summary:
      'Personal profile project that ties together GitHub presence, contact details, and a public-facing mobile engineering portfolio.',
    liveHref: 'https://github.com/SreytouchLang',
    liveLabel: 'Open profile',
    featured: true
  },
  'SwiftUI-Mastery-Travel-Discovery-NodeJS': {
    title: 'Travel Discovery'
  },
  'Passport-Template-NodeJS': {
    title: 'Passport Template'
  },
  'ECommerce-AmazonClone-Flutter-NodeJS': {
    title: 'Amazon Ecommerce Clone',
    featured: true
  },
  'Crypto-App-Flutter': {
    title: 'Crypto App',
    featured: true
  },
  'SwiftUI-NodeJS-SocialMedia': {
    title: 'SwiftUI Social Media'
  },
  'SwiftUI-FilmMovie': {
    title: 'SwiftUI Film Movie',
    stack: 'SwiftUI / Swift'
  },
  'Design-Patterns-in-iOS': {
    title: 'Design Patterns in iOS'
  },
  'SwiftUI-Travel': {
    title: 'SwiftUI Travel'
  },
  'ReactNative-Booking-App': {
    title: 'Booking App'
  },
  'ReactNative-Laundry-App': {
    title: 'Laundry App'
  },
  'ReactNative-Delivery-App': {
    title: 'Delivery App'
  },
  FB_SwiftUI: {
    title: 'FB SwiftUI'
  },
  'SwiftUI-ChatApp': {
    title: 'SwiftUI Chat App'
  },
  SwiftUIFirebase: {
    title: 'SwiftUI Firebase'
  }
}

const categoryOrder = [
  'All',
  'Personal Project',
  'React Native',
  'iOS / Swift',
  'Flutter',
  'Web / Backend'
]

function inferCategory(repo, language) {
  const name = repo.toLowerCase()

  if (/reactnative|react-native|uber-app|todo-reactnative|googlephotos/.test(name)) {
    return 'React Native'
  }

  if (/flutter/.test(name) || language === 'Dart' || language === 'C++') {
    return 'Flutter'
  }

  if (
    /swift|swiftui|ios|mariokart|wordle|bluetooth|fetchrecipe|fb_/.test(name) ||
    language === 'Swift' ||
    language === 'Unknown'
  ) {
    return 'iOS / Swift'
  }

  return 'Web / Backend'
}

function inferStack(repo, language, category) {
  if (category === 'React Native') {
    return `React Native / ${language === 'Unknown' ? 'JavaScript' : language}`
  }

  if (category === 'Flutter') {
    return `Flutter / ${language === 'C++' ? 'Dart ecosystem' : language}`
  }

  if (category === 'iOS / Swift') {
    return /swiftui/i.test(repo)
      ? 'SwiftUI / Swift'
      : `iOS / ${language === 'Unknown' ? 'Swift' : language}`
  }

  return language === 'HTML' ? 'Web / HTML-CSS-JS' : `Web / ${language}`
}

function inferSummary(repo, category) {
  const name = repo.toLowerCase()

  if (/chatgpt|recommendation_ai|recommendation/.test(name)) {
    return 'AI-oriented product prototype centered on recommendation logic or assistant-style interaction patterns.'
  }

  if (/airbnb|travel|booking|uber|delivery|deliveroo|laundry/.test(name)) {
    return 'Service and logistics style product exploring reservations, movement, and location-aware mobile journeys.'
  }

  if (/ecommerce|amazon|bookstore|store|product/.test(name)) {
    return 'Commerce-focused build exploring catalog browsing, product detail flows, and purchase-oriented mobile UI.'
  }

  if (/crypto|trading/.test(name)) {
    return 'Finance-oriented experience focused on market dashboards, portfolio-style interaction, and data-rich presentation.'
  }

  if (/whatsapp|chat|social|robin/.test(name)) {
    return 'Social or messaging project centered on conversation flows, community patterns, and communication-first UI.'
  }

  if (/music/.test(name)) {
    return 'Media-focused app built around discovery, playback, and entertainment-oriented mobile interaction.'
  }

  if (/bluetooth/.test(name)) {
    return 'Hardware-connected iOS experiment focused on Bluetooth communication, device state, and connected interactions.'
  }

  if (/system-design|low-level-design|design-patterns/.test(name)) {
    return 'Engineering reference repository centered on architecture thinking, reusable patterns, and system design study.'
  }

  if (/forms|guestbook|login|contact|qr|incomingcall|calculator|reminders|wordle|mariokart/.test(name)) {
    return 'Focused feature build used to explore UI states, view models, and implementation details around a specific product flow.'
  }

  if (category === 'React Native') {
    return 'Cross-platform mobile build focused on reusable UI, native-feeling flows, and production-style app structure.'
  }

  if (category === 'Flutter') {
    return 'Flutter application exploring cross-platform delivery, polished screens, and interactive product patterns.'
  }

  if (category === 'iOS / Swift') {
    return 'Native iOS project exploring Swift, SwiftUI, or UIKit implementation with a strong mobile-first development focus.'
  }

  return 'Full-stack or web-facing project combining interface work with backend structure, server logic, or platform integration.'
}

function formatDate(dateString, opts = { month: 'short', year: 'numeric' }) {
  const [year, month, day] = dateString.split('-').map(Number)
  return new Intl.DateTimeFormat('en-US', opts).format(
    new Date(year, month - 1, day)
  )
}

function buildProjects() {
  return rawProjects
    .filter(([repo]) => !hiddenRepos.has(repo))
    .map(([repo, language, updatedAt]) => {
      const override = projectOverrides[repo] || {}
      const category = override.category || inferCategory(repo, language)
      const stack = override.stack || inferStack(repo, language, category)
      const summary = override.summary || inferSummary(repo, category)

      return {
        repo,
        title: override.title || repo.replace(/[_-]+/g, ' ').trim(),
        category,
        stack,
        summary,
        href: `https://github.com/SreytouchLang/${repo}`,
        liveHref: override.liveHref || null,
        liveLabel: override.liveLabel || null,
        updatedAt,
        updatedLabel: formatDate(updatedAt),
        featured: Boolean(override.featured)
      }
    })
}

const projects = buildProjects()

const featuredOrder = [
  'repurpose-ai',
  'SreytouchLang',
  'ECommerceApp_-Recommendation_AI_Swift',
  'CryptoTradingPlatform-ReactNative-Typescript',
  'SwiftUI-Core-Bluetooth',
  'ECommerce-AmazonClone-Flutter-NodeJS',
  'whatsapp-clone-react-native',
  'react-native-ecommerce',
  'Crypto-App-Flutter',
  'RobinNest_SocialNetworking_WebApp-PHP-',
  'music-app-reactnative'
]

const featuredProjects = projects
  .filter((project) => project.featured)
  .sort((left, right) => {
    const leftIndex = featuredOrder.indexOf(left.repo)
    const rightIndex = featuredOrder.indexOf(right.repo)

    if (leftIndex !== -1 || rightIndex !== -1) {
      if (leftIndex === -1) return 1
      if (rightIndex === -1) return -1
      return leftIndex - rightIndex
    }

    return 0
  })

const selectedProjects = featuredProjects.slice(0, 6)

const profileMetrics = [
  { value: '8+', label: 'Years in professional development' },
  { value: '20', label: 'Mobile app builds' },
  { value: '13', label: 'Certificates' },
  { value: String(projects.length), label: 'Public repositories' }
]

const lastVerifiedDate = formatDate(projects[0].updatedAt, {
  month: 'long',
  day: 'numeric',
  year: 'numeric'
})

function App() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [theme, setTheme] = useState('dark')

  const filterOptions = categoryOrder.map((category) => ({
    label: category,
    count:
      category === 'All'
        ? projects.length
        : projects.filter((project) => project.category === category).length
  }))

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <div className={`page-shell${theme === 'dark' ? ' theme-dark' : ''}`}>
      <header className="site-header">
        <div className="site-header__inner">
          <a className="brand" href="#home">
            Sreytouch Lang(Jessica)
          </a>

          <div className="site-links">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
              >
                {link.label}
              </a>
            ))}

            <button
              type="button"
              className="theme-toggle"
              aria-label={
                theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
              }
              title={
                theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
              }
              onClick={() =>
                setTheme((currentTheme) =>
                  currentTheme === 'light' ? 'dark' : 'light'
                )
              }
            >
              <ThemeIcon theme={theme} />
            </button>
          </div>
        </div>
      </header>

      <nav className="side-rail" aria-label="Primary">
        {navLinks.map((link) => (
          <a
            key={link.label}
            className={`side-rail__link${
              link.href === '#home' ? ' side-rail__link--active' : ''
            }`}
            href={link.href}
            aria-label={link.label}
            title={link.label}
          >
            <NavIcon icon={link.icon} />
            <span className="side-rail__tooltip" aria-hidden="true">
              {link.label}
            </span>
            <span className="visually-hidden">{link.label}</span>
          </a>
        ))}
      </nav>

      <main className="portfolio">
        <section id="home" className="section-card hero">
          <div className="hero-portrait-card">
            <div className="portrait-frame">
              <img
                className="portrait-image"
                src={profileImage}
                alt="Portrait of Sreytouch Lang(Jessica)"
              />
            </div>

            <div className="portrait-copy">
              <p className="eyebrow">Profile</p>
              <h3>Sreytouch Lang(Jessica)</h3>
              <p>
                iOS, React Native, Kotlin, and AI product engineer based in
                California and open to relocate.
              </p>
            </div>
          </div>

          <div className="hero-copy">
            <div className="hero-topline">
              <p className="eyebrow">Senior mobile engineer</p>
              <span className="status-pill">Open to work</span>
            </div>

            <h1>
              Software engineer and mobile developer specializing in iOS,
              Swift, SwiftUI, React Native, Flutter, and applied AI product
              work.
            </h1>

            <p className="lede">
              I am a California-based(open to relocate) software engineer with
              8+ years of professional experience building native iOS,
              React Native, and cross-platform mobile products from
              architecture and implementation through testing, release, and
              ongoing iteration.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="primary-link">
                View selected projects
              </a>
              <a href="#contact" className="ghost-link">
                Contact me
              </a>
            </div>

            <div className="fact-grid">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="fact-card">
                  <span>{fact.label}</span>
                  <strong>{fact.value}</strong>
                </div>
              ))}
            </div>

            <div className="hero-skill-group">
              <p className="eyebrow">Best skills</p>
              <div className="skill-pill-row">
                {bestSkills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <aside className="hero-aside">
            <div className="hero-summary-copy">
              <p className="eyebrow">Professional summary</p>
              <ul className="summary-list">
                {summaryHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="metric-grid">
              {profileMetrics.map((metric) => (
                <div key={metric.label} className="metric-card">
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section id="about" className="section-card">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>
              Product-focused mobile engineer with strong execution across
              iOS, cross-platform delivery, and AI-driven personal products.
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                I work across the full software development lifecycle, including
                requirements, architecture, implementation, testing, deployment,
                and maintenance. My strongest foundation is in iOS application
                development with Swift, SwiftUI, UIKit, Objective-C, XCTest,
                and Core Data.
              </p>
              <p>
                Alongside native iOS work, I build cross-platform mobile
                products with React Native and Flutter. Recent personal work
                such as RepurposeAI and multiple AI-oriented product experiments
                also reflects applied experience in recommendation logic,
                content generation, automation, and data-driven application
                features.
              </p>
            </div>

            <div className="about-card">
              <h3>What I bring</h3>
              <ul className="plain-list">
                <li>Strong iOS implementation with production-focused mobile engineering habits.</li>
                <li>Cross-platform range for teams shipping on both iOS and Android.</li>
                <li>Clear execution from feature implementation through testing and release.</li>
                <li>Recent personal product work that shows initiative in AI and automation.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="section-card">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article key={group.title} className="skill-card">
                <h3>{group.title}</h3>
                <div className="skill-list">
                  {group.items.map((item) => (
                    <span key={item} className="skill-token">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="resume" className="section-card">
          <div className="section-heading">
            <p className="eyebrow">Resume</p>
            <h2>Experience, education, and selected credentials.</h2>
          </div>

          <div className="resume-layout">
            <div className="experience-column">
              {experienceEntries.map((entry) => (
                <article key={`${entry.company}-${entry.period}`} className="experience-card">
                  <div className="experience-top">
                    <div>
                      <p className="role-label">{entry.role}</p>
                      <h3>{entry.company}</h3>
                    </div>
                    <span className="period-badge">{entry.period}</span>
                  </div>

                  <p className="entry-summary">{entry.summary}</p>

                  <ul className="plain-list">
                    {entry.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>

                  <p className="tech-line">
                    <strong>Technologies:</strong> {entry.tech}
                  </p>
                </article>
              ))}
            </div>

            <aside className="resume-sidebar">
              <div className="sidebar-card">
                <h3>Education</h3>
                <div className="sidebar-stack">
                  {educationEntries.map((entry) => (
                    <div key={`${entry.degree}-${entry.period}`} className="sidebar-entry">
                      <h4>{entry.degree}</h4>
                      <p>{entry.school}</p>
                      <span>{entry.period}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sidebar-card">
                <h3>Selected certifications</h3>
                <div className="sidebar-stack">
                  {certificationEntries.map((entry) => (
                    <div key={entry} className="sidebar-entry">
                      <h4>{entry}</h4>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sidebar-card">
                <h3>AI focus</h3>
                <div className="sidebar-stack">
                  {aiFocusEntries.map((entry) => (
                    <div key={entry} className="sidebar-entry">
                      <h4>{entry}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="projects" className="section-card">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Selected projects with the clearest signal for mobile, personal brand, and AI product work.</h2>
            <p className="section-note">
              Focused on the builds that best reflect iOS execution,
              cross-platform delivery, and personal initiative.
            </p>
          </div>

          <div className="project-grid">
            {selectedProjects.map((project) => (
              <article key={project.repo} className="project-card">
                <div className="card-topline">
                  <span>{project.category}</span>
                  <span>{project.updatedLabel}</span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.summary}</p>

                <div className="card-footer">
                  <span className="stack-pill">{project.stack}</span>
                  <div className="card-links">
                    <a href={project.href} target="_blank" rel="noreferrer">
                      Repo
                    </a>
                    {project.liveHref ? (
                      <a href={project.liveHref} target="_blank" rel="noreferrer">
                        {project.liveLabel || 'Live'}
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="project-directory" className="section-card">
          <div className="section-heading">
            <p className="eyebrow">Project archive</p>
            <h2>Public project directory.</h2>
          </div>

          <div className="archive-toolbar">
            <div className="filter-row">
              {filterOptions.map((option) => (
                <button
                  key={option.label}
                  type="button"
                  className={`filter-chip ${
                    activeCategory === option.label ? 'filter-chip--active' : ''
                  }`}
                  onClick={() => setActiveCategory(option.label)}
                >
                  <span>{option.label}</span>
                  <strong>{option.count}</strong>
                </button>
              ))}
            </div>
          </div>

          <div className="catalog-grid">
            {filteredProjects.map((project) => (
              <article key={project.repo} className="catalog-card">
                <div className="card-topline">
                  <span>{project.category}</span>
                  <span>{project.updatedLabel}</span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.summary}</p>

                <div className="catalog-meta">
                  <span className="stack-pill">{project.stack}</span>
                  <span className="repo-label">{project.repo}</span>
                </div>

                <div className="card-links">
                  <a href={project.href} target="_blank" rel="noreferrer">
                    View repository
                  </a>
                  {project.liveHref ? (
                    <a href={project.liveHref} target="_blank" rel="noreferrer">
                      {project.liveLabel || 'Open live'}
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section-card contact-card">
          <div className="contact-grid">
            <div>
              <p className="eyebrow">Contact</p>
              <p className="contact-label">Open to work</p>
            </div>

            <h2>
              Looking for an iOS and mobile developer who can take product work
              from implementation to testing and release with strong execution.
            </h2>

            <div className="contact-actions">
              <a
                href="mailto:sreytouchjessicalang@gmail.com"
                className="primary-link"
              >
                Email me
              </a>
              <a
                href="https://www.linkedin.com/in/sreytouch-lang/"
                className="ghost-link"
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
