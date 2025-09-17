
import Image from 'next/image';
import { teamMembers } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

export default function AboutPage() {
  const aboutImage = getImage('about-us');
  return (
    <div className="container py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">About A.J. Tech Solutions</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Learn about our journey, our mission, and the people who make it all happen.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        {aboutImage && (
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl w-full aspect-video md:aspect-auto">
              <Image src={aboutImage.imageUrl} alt={aboutImage.description} fill className="object-cover" data-ai-hint={aboutImage.imageHint}/>
          </div>
        )}
        <div>
            <h2 className="text-3xl font-bold mb-4">Our History & Mission</h2>
            <p className="text-muted-foreground mb-4">
                Founded in 2010 by Alex Johnson, A.J. Tech Solutions started as a small contracting firm with a big vision: to integrate modern technology with traditional construction. Over the years, we've grown into a multi-disciplinary company, expanding our expertise into solar energy, electronics, and comprehensive project consultation.
            </p>
            <p className="text-muted-foreground">
                Our mission is to deliver high-quality, sustainable, and innovative solutions that not only meet but exceed our clients' expectations. We are committed to building a better, more efficient future through expert craftsmanship and cutting-edge technology.
            </p>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">Meet Our Leadership Team</h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          The driving force behind our success.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => {
          const memberImage = getImage(member.image);
          return (
            <Card key={member.name} className="text-center border-border/60 hover:shadow-primary/20 hover:border-primary/20 transition-all duration-300">
              <CardContent className="p-6">
                {memberImage && (
                    <Avatar className="h-32 w-32 mx-auto mb-4">
                        <AvatarImage src={memberImage.imageUrl} alt={member.name} data-ai-hint={memberImage.imageHint} />
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                )}
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-primary text-sm">{member.role}</p>
                <p className="text-muted-foreground mt-2 text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
