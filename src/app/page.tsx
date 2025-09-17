
import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

export default function Home() {
  const heroImage = getImage('hero');
  const whyUsImage = getImage('whyus');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh]">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container h-full flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            A.J TECH SOLUTIONS
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-neutral-200">
            We provide comprehensive electrical solutions for residential and commercial customers, ensuring that your needs are met with efficiency and excellence.
          </p>
          <div className="mt-8 flex gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-secondary/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              We provide a wide range of professional electrical and construction services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.slice(0, 4).map((service) => (
                <Card key={service.slug} className="flex flex-col text-center items-center transition-transform transform hover:-translate-y-2 hover:shadow-primary/20 shadow-lg bg-card overflow-hidden">
                  <Link href={`/services/${service.slug}`} className="w-full">
                    <CardHeader>
                      <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Link>
                </Card>
              ))}
          </div>
          <div className="text-center mt-12">
             <Button asChild size="lg">
                <Link href="/services">View All Services</Link>
             </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary">Why Choose A.J. Tech?</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    We are more than just a service provider; we are your dedicated partner in achieving excellence. Our commitment is to deliver unparalleled quality and innovative solutions.
                </p>
                <ul className="mt-6 space-y-4">
                    <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold">Expert & Experienced Team</h4>
                            <p className="text-muted-foreground">Our professionals have decades of combined experience across multiple industries.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold">Quality and Safety First</h4>
                            <p className="text-muted-foreground">We adhere to the highest standards of quality and safety on every project.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold">Customer-Centric Approach</h4>
                            <p className="text-muted-foreground">Your satisfaction is our priority. We work closely with you to meet your specific needs.</p>
                        </div>
                    </li>
                </ul>
            </div>
            {whyUsImage && (
              <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
                  <Image src={whyUsImage.imageUrl} alt={whyUsImage.description} fill className="object-cover" data-ai-hint={whyUsImage.imageHint} />
              </div>
            )}
        </div>
      </section>
    </div>
  );
}
