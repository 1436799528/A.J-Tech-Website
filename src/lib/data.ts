import type { NavLink, Service, Testimonial, TeamMember, FaqItem } from './types';
import { Sun, HardHat, Wrench, Building, MessageSquare } from 'lucide-react';

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export const services: Service[] = [
  {
    slug: 'solar-installation',
    title: 'Solar Installation',
    Icon: Sun,
    description: 'Harness the power of the sun with our expert solar panel installation services for residential and commercial properties.',
    longDescription: 'Our comprehensive solar installation service takes you from initial consultation to a fully operational solar power system. We handle site assessment, system design, panel mounting, inverter setup, and grid connection. Go green, save on energy bills, and increase your property value with a reliable solar solution tailored to your needs.',
    gallery: ['solar1', 'solar2', 'solar3'],
  },
  {
    slug: 'general-contracting',
    title: 'General Contracting',
    Icon: HardHat,
    description: 'Comprehensive project management for all your construction needs, ensuring quality and timely completion.',
    longDescription: 'As your general contractor, we oversee every phase of your construction project. From coordinating with architects and engineers to managing subcontractors and sourcing materials, we ensure your project is completed on time, within budget, and to the highest standards of quality and safety.',
    gallery: ['contracting1', 'contracting2', 'contracting3'],
  },
  {
    slug: 'electronics-repairs',
    title: 'Electronics Repairs',
    Icon: Wrench,
    description: 'Expert diagnosis and repair for a wide range of electronic devices, from consumer gadgets to industrial equipment.',
    longDescription: 'Don\'t replace, repair! Our skilled technicians can diagnose and fix a wide variety of electronic devices. We specialize in component-level repairs for circuit boards, power supplies, and control systems, saving you the cost of expensive replacements and reducing electronic waste.',
    gallery: ['repair1', 'repair2', 'repair3'],
  },
  {
    slug: 'building-construction',
    title: 'Building Construction',
    Icon: Building,
    description: 'From groundwork to finishing touches, we provide end-to-end solutions for new building constructions.',
    longDescription: 'We bring your architectural visions to life with our full-service building construction capabilities. Our experienced team manages everything from foundation and framing to electrical, plumbing, and interior finishing. We are committed to building durable, functional, and beautiful structures that stand the test of time.',
    gallery: ['construction1', 'construction2', 'construction3'],
  },
  {
    slug: 'consultation',
    title: 'Consultation',
    Icon: MessageSquare,
    description: 'Professional advice and strategic planning for your technical and construction projects.',
    longDescription: 'Leverage our industry expertise to ensure your project\'s success. Our consultation services cover feasibility studies, project planning, technology assessment, and regulatory compliance. We provide the strategic insights you need to make informed decisions, mitigate risks, and achieve your project goals efficiently.',
    gallery: ['consultation1', 'consultation2', 'consultation3'],
  },
];

export const testimonials: Testimonial[] = [
    {
        name: 'John Doe',
        company: 'Innovate Corp',
        comment: 'AJ Tech Solutions delivered our new office building ahead of schedule and under budget. Their professionalism and attention to detail were outstanding. Highly recommended!',
        image: 'testimonial1',
    },
    {
        name: 'Jane Smith',
        company: 'Green Energy Inc.',
        comment: 'The solar installation process was seamless. The team was knowledgeable, efficient, and friendly. Our energy bills have dropped significantly!',
        image: 'testimonial2',
    },
    {
        name: 'Samuel Lee',
        company: 'Homeowner',
        comment: 'I thought my high-end audio system was a goner. The technicians at AJ Tech diagnosed the problem quickly and had it working like new in no time. Incredible service!',
        image: 'testimonial3',
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
        role: 'Lead Technician',
        bio: 'Diana heads our electronics repair division, with an uncanny ability to diagnose and fix complex technical issues.',
        image: 'team4',
    },
];

export const faqItems: FaqItem[] = [
    {
        question: 'What areas do you serve?',
        answer: 'We primarily serve the greater metropolitan area but are available for large-scale projects nationwide. Please contact us to discuss your project specifics.',
    },
    {
        question: 'How do I get a quote for a project?',
        answer: 'The best way to get a quote is to fill out our contact form with as much detail as possible. We will review your request and get back to you within 24-48 hours to schedule a consultation.',
    },
    {
        question: 'What is the typical timeline for a solar installation?',
        answer: 'A standard residential solar installation typically takes 1-3 days on-site. The entire process, from consultation to system activation, can take a few weeks, depending on local permits and utility company approvals.',
    },
    {
        question: 'Are you licensed and insured?',
        answer: 'Yes, AJ Tech Solutions is fully licensed, bonded, and insured for all services we provide. We prioritize safety and compliance in all our projects.',
    },
];
