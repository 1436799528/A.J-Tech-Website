
import Image from 'next/image';
import { services, recentWork } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

// Let's create a more structured portfolio data by linking recent work to services.
const portfolioItems = recentWork.map(work => {
    const service = services.find(s => work.image.includes(s.slug.split('-')[0]));
    return { ...work, category: service?.slug || 'general' };
});

const allServicesWithPortfolio = services.filter(service => portfolioItems.some(item => item.category === service.slug));

export default function PortfolioPage() {
  
  const allImages = services.flatMap(service => 
    service.gallery.map(id => {
        const img = getImage(id);
        if (!img) return null;
        return {
            ...img,
            serviceSlug: service.slug,
            serviceTitle: service.title,
        }
    }).filter(Boolean)
  );
  
  return (
    <div className="container py-16 md:py-24 px-4 md:px-6">
      <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">Our Project Portfolio</h1>
        <p className="mt-4 text-base text-muted-foreground">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allImages.map((image) => (
             image && 
             <Card key={image.id} className="overflow-hidden group border-2 border-transparent hover:border-primary/50 transition-all duration-300 shadow-lg">
                <CardContent className="p-0 relative">
                  <div className="relative h-72 w-full">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      data-ai-hint={image.imageHint}
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  </div>
                   <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="text-lg font-bold text-white">{image.serviceTitle}</h3>
                      <p className="text-sm text-gray-200 line-clamp-2">{image.description}</p>
                   </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {services.map((service) => (
          <TabsContent key={service.slug} value={service.slug}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.gallery.map((imageId) => {
                const image = getImage(imageId);
                if (!image) return null;
                return (
                  <Card key={image.id} className="overflow-hidden group border-2 border-transparent hover:border-primary/50 transition-all duration-300 shadow-lg">
                    <CardContent className="p-0 relative">
                       <div className="relative h-72 w-full">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          data-ai-hint={image.imageHint}
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      </div>
                      <div className="absolute bottom-0 left-0 p-4">
                        <h3 className="text-lg font-bold text-white">{service.title}</h3>
                        <p className="text-sm text-gray-200 line-clamp-2">{image.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
             {service.gallery.length === 0 && (
                <div className="text-center col-span-full py-12">
                    <p className="text-muted-foreground">No projects to display for this category yet.</p>
                </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
