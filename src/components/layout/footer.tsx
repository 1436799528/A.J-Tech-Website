
import Link from 'next/link';
import { Twitter, Linkedin, Facebook } from 'lucide-react';
import { navLinks } from '@/lib/data';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/20">
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="flex items-center space-x-2 mb-4">
               <Image 
                src="/logo.png" 
                alt="A.J Tech Logo" 
                width={50} 
                height={50} 
                className="h-12 w-auto"
              />
              <span className="text-xl font-bold">AJ Tech Solutions</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Powering innovation with expert electrical, solar, and construction services.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary"><Twitter className="h-5 w-5" /></Link>
              <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary"><Linkedin className="h-5 w-5" /></Link>
              <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary"><Facebook className="h-5 w-5" /></Link>
            </div>
          </div>
          
          <div className="md:col-span-2 md:col-start-6 flex flex-col items-center md:items-start">
            <h3 className="font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2 text-center md:text-left">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 flex flex-col items-center md:items-start">
             <h3 className="font-semibold mb-4 text-primary">Legal</h3>
             <ul className="space-y-2 text-center md:text-left">
                <li><Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                <li><Link href="/terms-and-conditions" className="text-sm text-muted-foreground hover:text-primary">Terms & Conditions</Link></li>
                <li><Link href="/cookie-settings" className="text-sm text-muted-foreground hover:text-primary">Cookie Settings</Link></li>
             </ul>
          </div>

          <div className="md:col-span-3 flex flex-col items-center md:items-start">
             <h3 className="font-semibold mb-4 text-primary">Contact Us</h3>
             <address className="not-italic text-sm text-muted-foreground space-y-2 text-center md:text-left">
                <p>Email: <a href="mailto:a.j.engr.tech@gmail.com" className="hover:text-primary">a.j.engr.tech@gmail.com</a></p>
                <p>Phone: <a href="tel:09130134969" className="hover:text-primary">09130134969</a></p>
             </address>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/20 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AJ Tech Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
