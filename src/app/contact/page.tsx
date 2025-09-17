import { ContactForm } from '@/components/contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">Get In Touch</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          We're here to help and answer any question you might have. We look forward to hearing from you.
        </p>
      </div>
      
      <div className="grid md:grid-cols-5 gap-12">
        <div className="md:col-span-2 space-y-8">
            <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Our Office</h3>
                    <p className="text-muted-foreground">123 Tech Street, Innovation City, 12345</p>
                </div>
            </div>
            <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Email Us</h3>
                    <a href="mailto:contact@ajtech.com" className="text-muted-foreground hover:text-primary transition-colors">contact@ajtech.com</a>
                </div>
            </div>
            <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Call Us</h3>
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">(123) 456-7890</a>
                </div>
            </div>
        </div>
        <div className="md:col-span-3">
            <ContactForm />
        </div>
      </div>
    </div>
  );
}
