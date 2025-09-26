
import { ContactForm } from '@/components/contact-form';
import { Mail, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container py-16 md:py-24 px-4 md:px-6">
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">Get In Touch</h1>
        <p className="mt-4 max-w-2xl mx-auto text-base text-muted-foreground">
          We're here to help and answer any question you might have. We look forward to hearing from you.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div className="space-y-8 flex flex-col justify-center">
            <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <h3 className="text-lg font-semibold">Email Us</h3>
                    <a href="mailto:a.j.engr.tech@gmail.com" className="text-muted-foreground hover:text-primary transition-colors break-all">a.j.engr.tech@gmail.com</a>
                </div>
            </div>
            <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <h3 className="text-lg font-semibold">Call Us</h3>
                    <a href="tel:09130134969" className="text-muted-foreground hover:text-primary transition-colors">09130134969</a>
                </div>
            </div>
        </div>
        <div>
            <ContactForm />
        </div>
      </div>
    </div>
  );
}
