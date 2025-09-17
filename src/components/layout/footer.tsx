import Link from 'next/link';
import { Sun, Twitter, Linkedin, Facebook } from 'lucide-react';
import { navLinks, services } from '@/lib/data';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-start space-y-4 col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <Sun className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">AJ Tech Solutions</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Your partner in building a sustainable and efficient future.
            </p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary"><Twitter className="h-5 w-5" /></Link>
              <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary"><Linkedin className="h-5 w-5" /></Link>
              <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary"><Facebook className="h-5 w-5" /></Link>
            </div>
          </div>
          
          <div>
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
          
          <div>
             <h3 className="font-semibold mb-4 text-primary">Services</h3>
             <ul className="space-y-2">
                {services.map(service => (
                    <li key={service.slug}><Link href={`/services/${service.slug}`} className="text-sm text-muted-foreground hover:text-primary">{service.title}</Link></li>
                ))}
             </ul>
          </div>

          <div>
             <h3 className="font-semibold mb-4 text-primary">Contact Us</h3>
             <address className="not-italic text-sm text-muted-foreground space-y-2">
                <p>123 Tech Street, Innovation City, 12345</p>
                <p>Email: <a href="mailto:contact@ajtech.com" className="hover:text-primary">contact@ajtech.com</a></p>
                <p>Phone: <a href="tel:+1234567890" className="hover:text-primary">(123) 456-7890</a></p>
             </address>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AJ Tech Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
