
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';

const allImages = PlaceHolderImages.filter(
    (img) => !['hero', 'whyus', 'about-us'].includes(img.id) && !img.id.startsWith('team')
);

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<typeof allImages[0] | null>(null);

    return (
        <div className="container py-16 md:py-24 px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-primary">Photo Gallery</h1>
                <p className="mt-4 text-base text-muted-foreground">
                    A collection of our work, showcasing our dedication to quality and craftsmanship across various projects.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {allImages.map((image) => (
                    <Card
                        key={image.id}
                        className="overflow-hidden group border-2 border-transparent hover:border-primary/50 transition-all duration-300 shadow-lg cursor-pointer"
                        onClick={() => setSelectedImage(image)}
                    >
                        <CardContent className="p-0 relative">
                            <div className="relative aspect-square w-full">
                                <Image
                                    src={image.imageUrl}
                                    alt={image.description}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    data-ai-hint={image.imageHint}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                            </div>
                             <div className="absolute bottom-0 left-0 p-3">
                                <p className="text-sm text-white line-clamp-2">{image.description}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {selectedImage && (
                 <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
                    <DialogContent className="max-w-4xl p-0 border-0 bg-transparent shadow-none">
                        <div className="relative aspect-video w-full">
                             <Image
                                src={selectedImage.imageUrl}
                                alt={selectedImage.description}
                                fill
                                className="object-contain"
                            />
                        </div>
                         <button 
                            onClick={() => setSelectedImage(null)} 
                            className="absolute top-2 right-2 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors z-50">
                            <X className="h-6 w-6" />
                            <span className="sr-only">Close</span>
                        </button>
                    </DialogContent>
                </Dialog>
            )}
        </div>
    );
}
