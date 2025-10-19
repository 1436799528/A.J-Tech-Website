
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

export default function AboutPage() {
  const aboutImage = getImage('about-us');
  return (
    <div className="container py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">About Aponi James</h1>
          <p className="mt-4 max-w-3xl mx-auto text-base text-muted-foreground">
            The Founder of A.J Tech Solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
          {aboutImage && (
            <div className="md:col-span-2 relative h-96 rounded-lg overflow-hidden shadow-xl w-full">
                <Image src={aboutImage.imageUrl} alt={aboutImage.description} fill className="object-cover" data-ai-hint={aboutImage.imageHint}/>
            </div>
          )}
          <div className="md:col-span-3">
              <p className="text-muted-foreground mb-4 text-sm md:text-base">
                  Aponi James, born on August 14, 2005, is a passionate and forward-thinking Electrical Engineering student at the prestigious University of Calabar, Cross River State, Nigeria. From a young age, he’s been driven by a curiosity for how things work — not just to understand electricity, but to master it. That same drive has grown into <strong>A.J Tech</strong>, a hands-on electrical service brand known for delivering smart, safe, and reliable electrical installations for homes, businesses, and industrial spaces.
              </p>
              <p className="text-muted-foreground mb-4 text-sm md:text-base">
                  James blends technical skill with creativity, always looking for better ways to solve real problems — from clean energy solutions like solar setups to structured building installations that meet professional standards. He believes every project should not just <em>work</em>, but also <em>last</em> — and that the future of engineering lies in precision, integrity, and continuous learning.
              </p>
              <p className="text-muted-foreground text-sm md:text-base">
                  Beyond his technical work, Aponi represents the new wave of young African engineers — self-taught, ambitious, and determined to build a better standard of living through technology. His mission is simple: to light up lives, connect systems, and inspire others to pursue technical excellence with the same fire that fuels him every day.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}
