
import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

export default function ServicesPage() {
  return (
    <div className="container py-16 md:py-24 px-4 md:px-6">
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">Our Services</h1>
        <p className="mt-4 max-w-3xl mx-auto text-base text-muted-foreground">
          We offer a comprehensive suite of services to bring your vision to life, from sustainable energy solutions to large-scale construction and precision electrical work.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => {
            const serviceImage = getImage(service.gallery[0]);
            return (
            <Card key={service.slug} className="flex flex-col transition-transform transform hover:-translate-y-2 hover:shadow-primary/20 shadow-lg bg-card overflow-hidden">
                <Link href={`/services/${service.slug}`} className="w-full flex flex-col h-full">
                    {serviceImage && (
                        <div className="relative h-56 w-full">
                            <Image
                            src={serviceImage.imageUrl}
                            alt={service.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover"
                            data-ai-hint={serviceImage.imageHint}
                            />
                        </div>
                    )}
                    <div className="p-6 flex flex-col items-center text-center flex-grow">
                        <CardHeader className="p-0 mb-4">
                             <div className={cn("p-3 rounded-full mb-4 mx-auto", service.color?.replace('text-', 'bg-') + '/10')}>
                                <service.Icon className={cn("h-8 w-8", service.color)} />
                            </div>
                            <CardTitle className="mt-4 text-lg">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 flex-grow">
                            <p className="text-muted-foreground text-sm">{service.description}</p>
                        </CardContent>
                    </div>
                    <div className="mt-auto p-6 pt-0">
                        <Button variant="link" className="p-0 h-auto text-sm">View Details</Button>
                    </div>
                </Link>
            </Card>
           )}
        )}
      </div>
    </div>
  );
}
