import Link from 'next/link';
import { services } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ServicesPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">Our Services</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          We offer a comprehensive suite of services to bring your vision to life, from sustainable energy solutions to large-scale construction and precision electrical work.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card key={service.slug} className="flex flex-col text-center items-center transition-transform transform hover:-translate-y-2 hover:shadow-primary/20 shadow-lg">
            <CardHeader>
              <div className="mx-auto bg-primary/10 p-4 rounded-full">
                <service.Icon className="h-12 w-12 text-primary" />
              </div>
              <CardTitle className="mt-4">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
            <div className="p-6 pt-0">
              <Button asChild>
                <Link href={`/services/${service.slug}`}>View Details</Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
