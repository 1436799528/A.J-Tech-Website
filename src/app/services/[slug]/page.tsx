
import { services } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="container py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
          <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
            <service.Icon className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
        </div>
        <p className="text-lg text-muted-foreground mb-12">
          {service.longDescription}
        </p>

        <div className="text-center mt-16">
            <Button asChild size="lg">
                <Link href="/contact">Ready to Start? Get a Quote</Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
