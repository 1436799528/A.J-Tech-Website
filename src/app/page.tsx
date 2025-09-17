
import Image from 'next/image';
import Link from 'next/link';
import { services, testimonials } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle, Star } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

export default function Home() {
  const heroImage = getImage('hero');
  const whyUsImage = getImage('whyus');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center text-center py-20 px-4">
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
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/50 to-transparent" />
        <div className="relative container text-white max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
            Powering Innovation with <span className="text-primary">A.J. Tech</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Expert electrical, solar, and construction services delivering excellence and building the future.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Core Services</h2>
            <p className="mt-4 text-muted-foreground text-base md:text-lg">
              A commitment to quality, safety, and innovation across every project.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.slice(0, 4).map((service) => {
                const serviceImage = getImage(service.gallery[0]);
                return (
                    <Card key={service.slug} className="flex flex-col transition-transform transform hover:-translate-y-2 hover:shadow-primary/20 shadow-lg bg-card overflow-hidden">
                    <Link href={`/services/${service.slug}`} className="w-full flex flex-col h-full">
                        {serviceImage && (
                            <div className="relative h-48 w-full">
                                <Image
                                src={serviceImage.imageUrl}
                                alt={service.title}
                                fill
                                className="object-cover"
                                data-ai-hint={serviceImage.imageHint}
                                />
                            </div>
                        )}
                        <div className="p-6 flex flex-col items-center text-center flex-grow">
                            <div className="bg-primary/10 p-3 rounded-full mb-4">
                                <service.Icon className="h-8 w-8 text-primary" />
                            </div>
                            <CardHeader className="p-0 mb-2">
                            <CardTitle className="text-xl">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 flex-grow">
                            <p className="text-muted-foreground text-sm">{service.description}</p>
                            </CardContent>
                        </div>
                    </Link>
                    </Card>
                )
            })}
          </div>
          <div className="text-center mt-12">
             <Button asChild size="lg">
                <Link href="/services">View All Services</Link>
             </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">What Our Clients Say</h2>
            <p className="mt-4 text-muted-foreground text-base md:text-lg">
              Building trust through exceptional service and proven results.
            </p>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="flex flex-col h-full justify-between">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                          ))}
                        </div>
                        <p className="text-muted-foreground text-sm italic">"{testimonial.quote}"</p>
                      </CardContent>
                      <div className="p-6 pt-0">
                         <div className="flex items-center">
                            <Avatar className="h-12 w-12 mr-4">
                                <AvatarImage src={`https://picsum.photos/seed/client${index}/100/100`} alt={testimonial.name} data-ai-hint="person portrait"/>
                                <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-semibold text-sm">{testimonial.name}</p>
                                <p className="text-muted-foreground text-xs">{testimonial.company}</p>
                            </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 md:px-6 max-w-6xl mx-auto">
            <div className="md:pr-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">Why Choose A.J. Tech?</h2>
                <p className="mt-4 text-base md:text-lg text-muted-foreground">
                    We are more than just a service provider; we are your dedicated partner in achieving excellence. Our commitment is to deliver unparalleled quality and innovative solutions.
                </p>
                <ul className="mt-6 space-y-4">
                    <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold text-base md:text-lg">Expert & Experienced Team</h4>
                            <p className="text-muted-foreground text-sm md:text-base">Our professionals have decades of combined experience across multiple industries.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold text-base md:text-lg">Quality and Safety First</h4>
                            <p className="text-muted-foreground text-sm md:text-base">We adhere to the highest standards of quality and safety on every project.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold text-base md:text-lg">Customer-Centric Approach</h4>
                            <p className="text-muted-foreground text-sm md:text-base">Your satisfaction is our priority. We work closely with you to meet your specific needs.</p>
                        </div>
                    </li>
                </ul>
                 <Button asChild size="lg" className="mt-8">
                    <Link href="/about">Meet the Team</Link>
                 </Button>
            </div>
            {whyUsImage && (
              <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl w-full">
                  <Image src={whyUsImage.imageUrl} alt={whyUsImage.description} fill className="object-cover rounded-lg" data-ai-hint={whyUsImage.imageHint} />
              </div>
            )}
        </div>
      </section>
    </div>
  );
}
