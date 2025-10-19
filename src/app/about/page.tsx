
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { teamMembers } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

export default function AboutPage() {
  const founder = teamMembers.find(member => member.name === 'Aponi James');
  const otherMembers = teamMembers.filter(member => member.name !== 'Aponi James');
  const founderImage = "https://storage.googleapis.com/gcs-public-prod.appspot.com/files/1e6878b2-b13c-4977-a878-3560f4e3c98a";

  return (
    <div className="container py-16 md:py-24 px-4 md:px-6">
      {/* Company Intro */}
      <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">About A.J. Tech Solutions</h1>
        <p className="mt-4 max-w-3xl mx-auto text-base text-muted-foreground">
          At A.J. Tech Solutions, we are more than just engineers and technicians; we are innovators driven by a passion for building a brighter, more connected future. Founded on the principles of safety, reliability, and cutting-edge technical expertise, our mission is to deliver exceptional electrical, solar, and construction services that not only meet but exceed expectations. We believe in blending modern technology with time-honored craftsmanship to solve real-world problems for our clients across Nigeria.
        </p>
      </div>

      {/* Founder Section */}
      {founder && (
        <div className="max-w-5xl mx-auto mb-16 md:mb-24">
            <div className="text-center mb-12">
                 <h2 className="text-2xl md:text-3xl font-bold">Our Founder</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
                <div className="md:col-span-2 flex justify-center">
                    <Avatar className="h-64 w-64 border-4 border-primary/20 shadow-xl">
                        <AvatarImage src={founderImage} alt={founder.name} className="object-cover" />
                        <AvatarFallback>
                            <div className="flex h-full w-full items-center justify-center rounded-full bg-card">
                                <User className="h-32 w-32 text-muted-foreground" />
                            </div>
                        </AvatarFallback>
                    </Avatar>
                </div>
                <div className="md:col-span-3">
                    <h3 className="text-2xl font-bold text-primary mb-2">{founder.name}</h3>
                    <p className="text-muted-foreground mb-4 text-sm md:text-base">
                        {founder.bio}
                    </p>
                    <p className="text-muted-foreground text-sm md:text-base">
                        Beyond his technical work, Aponi represents the new wave of young African engineers—self-taught, ambitious, and determined to build a better standard of living through technology. His mission is simple: to light up lives, connect systems, and inspire others to pursue technical excellence with the same fire that fuels him every day.
                    </p>
                </div>
            </div>
        </div>
      )}
      
      {/* Team Section */}
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">Meet Our Core Team</h2>
             <p className="mt-4 max-w-2xl mx-auto text-base text-muted-foreground">
                Collaboration and expertise are at the heart of what we do.
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {otherMembers.map((member) => {
            return (
              <Card key={member.name} className="text-center">
                <CardContent className="pt-6">
                    <Avatar className="h-40 w-40 mx-auto mb-4 border-2 border-primary/10 shadow-lg">
                         <div className="flex h-full w-full items-center justify-center rounded-full bg-card">
                            <User className="h-20 w-20 text-muted-foreground" />
                        </div>
                    </Avatar>
                  <CardHeader className="p-0">
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <p className="text-primary font-semibold text-sm">{member.role}</p>
                  </CardHeader>
                  <p className="text-muted-foreground text-sm mt-3">{member.bio}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

    </div>
  );
}
