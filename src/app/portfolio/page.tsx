
import Image from 'next/image';
import { services } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

export default function PortfolioPage() {
  const allImages = services.flatMap(service => service.gallery.map(id => getImage(id)).filter(Boolean));
  return (
    <div className="container py-16 md:py-24 px-4 md:px-6">
      <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">Our Project Portfolio</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A showcase of our commitment to quality, craftsmanship, and innovation across a range of projects.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 sm:grid-cols-3 md:grid-cols-5 h-auto mb-12">
          <TabsTrigger value="all">All</TabsTrigger>
          {services.map((service) => (
            <TabsTrigger key={service.slug} value={service.slug}>
              {service.title}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allImages.map((image) => (
             image && <Card key={image.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-64 w-full">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {services.map((service) => (
          <TabsContent key={service.slug} value={service.slug}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.gallery.map((imageId) => {
                const image = getImage(imageId);
                if (!image) return null;
                return (
                  <Card key={image.id} className="overflow-hidden">
                    <CardContent className="p-0">
                       <div className="relative h-64 w-full">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-105"
                          data-ai-hint={image.imageHint}
                        />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
