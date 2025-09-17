import Image from 'next/image';
import { services } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { notFound } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

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

        <h2 className="text-3xl font-bold text-primary mb-8 text-center">Project Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.gallery.map((imageId) => {
            const image = getImage(imageId);
            if (!image) return null;
            return (
              <Card key={image.id} className="overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative aspect-video">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={image.imageHint}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
            <Button asChild size="lg">
                <Link href="/contact">Ready to Start? Get a Quote</Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
