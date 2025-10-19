
import type { NavLink, Service, TeamMember, Testimonial, FAQ, RecentWork } from './types';
import { Sun, Zap, HardHat, Wrench } from 'lucide-react';

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About Us' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export const services: Service[] = [
  {
    slug: 'general-contracting',
    title: 'General Contracting',
    Icon: HardHat,
    description: 'Comprehensive project management for all your construction needs, ensuring quality and timely completion.',
    longDescription: 'As your general contractor, we oversee every phase of your construction project. From coordinating with architects and engineers to managing subcontractors and sourcing materials, we ensure your project is completed on time, within budget, and to the highest standards of quality and safety.',
    gallery: ['contracting1'],
    color: 'text-blue-500',
  },
  {
    slug: 'electrical-installation-repair',
    title: 'Electrical Installation & Repair',
    Icon: Zap,
    description: 'Expert electrical installation and repair services for residential and commercial customers.',
    longDescription: 'We provide comprehensive electrical solutions, including new installations, wiring, panel upgrades, and troubleshooting. Our certified electricians ensure your systems are safe, efficient, and up to code. From minor repairs to major installations, we handle it all with precision and care.',
    gallery: ['repair1'],
    color: 'text-yellow-500',
  },
  {
    slug: 'solar-installation',
    title: 'Solar Panel Installation',
    Icon: Sun,
    description: 'Harness the power of the sun with our expert solar panel installation services for home and business.',
    longDescription: 'Our comprehensive solar installation service takes you from initial consultation to a fully operational solar power system. We handle site assessment, system design, panel mounting, inverter setup, and grid connection. Go green, save on energy bills, and increase your property value with a reliable solar solution tailored to your needs.',
    gallery: ['solar1', 'solar4'],
    color: 'text-green-500',
  },
  {
    slug: 'building-construction',
    title: 'Building Construction',
    Icon: Wrench,
    description: 'From groundwork to finishing touches, we provide end-to-end solutions for new building constructions.',
    longDescription: 'We bring your architectural visions to life with our full-service building construction capabilities. Our experienced team manages everything from foundation and framing to electrical, plumbing, and interior finishing. We are committed to building durable, functional, and beautiful structures that stand the test of time.',
    gallery: ['construction1'],
    color: 'text-red-500',
  },
];

export const teamMembers: TeamMember[] = [
    {
        name: 'Alex Johnson',
        role: 'Founder & CEO',
        bio: 'With over 20 years in the construction and technology industries, Alex leads AJ Tech Solutions with a passion for innovation and quality.',
        image: 'team1',
    },
    {
        name: 'Brenda Smith',
        role: 'Head of Engineering',
        bio: 'Brenda is a certified engineer specializing in renewable energy systems and sustainable building practices.',
        image: 'team2',
    },
    {
        name: 'Charles Brown',
        role: 'Chief Operations Officer',
        bio: 'Charles ensures all projects are managed efficiently, from initial client contact to final handover, guaranteeing client satisfaction.',
        image: 'team3',
    },
    {
        name: 'Diana Green',
        role: 'Lead Electrician',
        bio: 'Diana heads our electrical services division, with an uncanny ability to diagnose and fix complex electrical systems.',
        image: 'team4',
    },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Adebayo Popoola',
    company: 'Homeowner, Lagos',
    quote: 'The team at A.J. Tech was professional, efficient, and incredibly knowledgeable. They upgraded our entire electrical panel and we couldn\'t be happier with the results. Highly recommend!',
  },
  {
    name: 'Chinedu Okoro',
    company: 'Business Owner, Abuja',
    quote: 'Our new solar installation has already cut our energy bills by 60%. The process was seamless from start to finish. A.J. Tech delivered on every promise.',
  },
  {
    name: 'Bolanle Adeyemi',
    company: 'General Contractor, Port Harcourt',
    quote: 'As a contractor, I rely on dependable partners. A.J. Tech is my go-to for all electrical work. They are reliable, safe, and their quality of work is second to none.',
  },
   {
    name: 'Ngozi Eze',
    company: 'Real Estate Developer, Calabar',
    quote: 'We partnered with A.J. Tech on a new housing development. Their general contracting and construction team was phenomenal, keeping the project on schedule and on budget.',
  },
  {
    name: 'Musa Ibrahim',
    company: 'Homeowner, Kano',
    quote: 'I had an emergency electrical issue and A.J. Tech responded immediately. They fixed the problem quickly and at a fair price. True professionals.',
  },
];

export const faqData: FAQ[] = [
  {
    question: "What kind of electrical services do you offer?",
    answer: "We offer a comprehensive range of electrical services, including new installations, repairs, panel upgrades, wiring for new construction and renovations, lighting installation, and emergency electrical services for both residential and commercial clients."
  },
  {
    question: "How long does a typical solar panel installation take?",
    answer: "A standard residential solar panel installation typically takes 1-3 days to complete the physical installation. The entire process, from initial consultation, and design, to permitting and final activation, can take a few weeks. We handle all the details to make it as smooth as possible for you."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, A.J. Tech Solutions is a fully licensed, bonded, and insured company. All of our electricians and technicians are certified professionals who adhere to the highest safety and quality standards."
  },
  {
    question: "Do you offer free estimates?",
    answer: "Absolutely. We provide free, no-obligation quotes for all our services. Contact us to schedule a consultation, and we will assess your needs and provide a detailed estimate for your project."
  },
  {
    question: "What is the warranty on your work?",
    answer: "We stand by the quality of our work. We offer a comprehensive warranty on all our labor and installations. Specific warranty details vary by service and materials used, and we will provide all warranty information upfront with your project proposal."
  },
  {
    question: "Can you handle large-scale construction projects?",
    answer: "Yes, our general contracting and building construction divisions are equipped to handle projects of all sizes, from residential homes to commercial buildings. We have the experience and resources to manage your project from concept to completion."
  }
];

export const recentWork: RecentWork[] = [
  {
    title: 'Commercial LED Lighting Retrofit',
    description: 'Upgraded a 50,000 sq. ft. warehouse to energy-efficient LED lighting, reducing energy costs by 40%.',
    image: 'work1',
  },
  {
    title: 'Residential Solar Installation',
    description: 'Installed a 10kW rooftop solar system for a family home, providing 100% of their energy needs.',
    image: 'work2',
  },
  {
    title: 'New Construction Electrical Wiring',
    description: 'Completed full electrical wiring and panel installation for a new custom-built luxury home.',
    image: 'work3',
  }
];

