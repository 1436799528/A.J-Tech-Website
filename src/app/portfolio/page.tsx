'use client';

import { useState } from 'react';
import Image from 'next/image';
import { services, recentWork } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

const allPortfolioItems = services.flatMap(service => 
  service.gallery.map(id => {
      const img = getImage(id);
      if (!img) return null;
      return {
          ...img,
          serviceSlug: service.slug,
          serviceTitle: service.title,
          description: img.description,
      }
  }).filter(Boolean)
) as { id: string; imageUrl: string; description: string; imageHint: string; serviceSlug: string; serviceTitle: string; }[];


export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredItems = selectedCategory === 'all'
    ? allPortfolioItems
    : allPortfolioItems.filter(item => item.serviceSlug === selectedCategory);

  return (
    <div className="container py-16 md:py-24 px-4 md:px-6">
      <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">Our Project Portfolio</h1>
        <p className="mt-4 text-base text-muted-foreground">
          A showcase of our commitment to quality, craftsmanship, and innovation across a range of projects.
        </p>
      </div>

      <div className="flex justify-center mb-12">
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full max-w-sm">
            <SelectValue placeholder="Filter by category..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Projects</SelectItem>
            {services.map((service) => (
              <SelectItem key={service.slug} value={service.slug}>
                {service.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <Card key={item.id} className="overflow-hidden group border-2 border-transparent hover:border-primary/50 transition-all duration-300 shadow-lg">
            <CardContent className="p-0 relative">
              <div className="relative h-72 w-full">
                <Image
                  src={item.imageUrl}
                  alt={item.description}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint={item.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-lg font-bold text-white">{item.serviceTitle}</h3>
                <p className="text-sm text-gray-200 line-clamp-2">{item.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {filteredItems.length === 0 && (
        <div className="text-center col-span-full py-12">
            <p className="text-muted-foreground">No projects to display for this category yet.</p>
        </div>
      )}
    </div>
  );
}