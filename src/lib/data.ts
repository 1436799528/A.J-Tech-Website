
import type { NavLink, Service, TeamMember } from './types';
import { Sun, Building } from 'lucide-react';

const ElectricalServiceIcon = (props: any) => (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 465.26 465.26"
      style={{ enableBackground: 'new 0 0 465.26 465.26' }}
      xmlSpace="preserve"
      {...props}
    >
      <g>
        <g>
          <path
            d="M403.62,59.63c-2.4-2.8-6-4.4-9.6-4.4H71.24c-3.6,0-7.2,1.6-9.6,4.4c-2.4,2.8-3.2,6.4-2.4,10l44.8,202.8
			c1.2,5.2,5.6,8.8,10.8,8.8h110.4v-46c0-6.8,5.6-12.4,12.4-12.4s12.4,5.6,12.4,12.4v46h110.4c5.2,0,9.6-3.6,10.8-8.8l44.8-202.8
			C406.82,66.03,406.02,62.43,403.62,59.63z"
          />
          <path
            d="M327.22,301.23h-44.4v-22c0-6.8-5.6-12.4-12.4-12.4s-12.4,5.6-12.4,12.4v22h-44.4c-8.4,0-15.2,6.8-15.2,15.2v129.6
			c0,8.4,6.8,15.2,15.2,15.2h128.8c8.4,0,15.2-6.8,15.2-15.2V316.43C342.42,308.03,335.62,301.23,327.22,301.23z"
          />
        </g>
      </g>
    </svg>
);

const GeneralContractingIcon = (props: any) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img src="https://cdn-icons-png.flaticon.com/512/3098/3098409.png" alt="General Contracting" {...props} />
);

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

export const services: Service[] = [
  {
    slug: 'general-contracting',
    title: 'General Contracting',
    Icon: GeneralContractingIcon,
    description: 'Comprehensive project management for all your construction needs, ensuring quality and timely completion.',
    longDescription: 'As your general contractor, we oversee every phase of your construction project. From coordinating with architects and engineers to managing subcontractors and sourcing materials, we ensure your project is completed on time, within budget, and to the highest standards of quality and safety.',
    gallery: ['contracting1', 'contracting2', 'contracting3'],
  },
  {
    slug: 'electrical-installation-repair',
    title: 'Electrical Installation & Repair',
    Icon: ElectricalServiceIcon,
    description: 'Expert electrical installation and repair services for residential and commercial customers.',
    longDescription: 'We provide comprehensive electrical solutions, including new installations, wiring, panel upgrades, and troubleshooting. Our certified electricians ensure your systems are safe, efficient, and up to code. From minor repairs to major installations, we handle it all with precision and care.',
    gallery: ['repair1', 'repair2', 'repair3'],
  },
  {
    slug: 'solar-installation',
    title: 'Solar Panel Installation',
    Icon: Sun,
    description: 'Harness the power of the sun with our expert solar panel installation services for home and business.',
    longDescription: 'Our comprehensive solar installation service takes you from initial consultation to a fully operational solar power system. We handle site assessment, system design, panel mounting, inverter setup, and grid connection. Go green, save on energy bills, and increase your property value with a reliable solar solution tailored to your needs.',
    gallery: ['solar1', 'solar2', 'solar3', 'solar4'],
  },
  {
    slug: 'building-construction',
    title: 'Building Construction',
    Icon: Building,
    description: 'From groundwork to finishing touches, we provide end-to-end solutions for new building constructions.',
    longDescription: 'We bring your architectural visions to life with our full-service building construction capabilities. Our experienced team manages everything from foundation and framing to electrical, plumbing, and interior finishing. We are committed to building durable, functional, and beautiful structures that stand the test of time.',
    gallery: ['construction1', 'construction2', 'construction3'],
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
