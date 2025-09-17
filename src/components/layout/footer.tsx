import Link from 'next/link';
import { Twitter, Linkedin, Facebook } from 'lucide-react';
import { navLinks } from '@/lib/data';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container py-12 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
               <Image 
                src="/logo.png" 
                alt="A.J Tech Logo" 
                width={50} 
                height={50} 
                className="h-12 w-auto"
              />
              <span className="text-xl font-bold sr-only">AJ Tech Solutions</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs mx-auto md:mx-0 md:text-left">
              Comprehensive electrical solutions for residential and commercial customers.
            </p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary"><Twitter className="h-5 w-5" /></Link>
              <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary"><Linkedin className="h-5 w-5" /></Link>
              <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary"><Facebook className="h-5 w-5" /></Link>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
             <h3 className="font-semibold mb-4 text-primary">Contact Us</h3>
             <address className="not-italic text-sm text-muted-foreground space-y-2">
                <p>Email: <a href="mailto:a.j.engr.tech@gmail.com" className="hover:text-primary">a.j.engr.tech@gmail.com</a></p>
                <p>Phone: <a href="tel:09130134969" className="hover:text-primary">09130134969</a></p>
             </address>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AJ Tech Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
