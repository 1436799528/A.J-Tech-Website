
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

export default function BlogPage() {
  return (
    <div className="container py-16 md:py-24 px-4 md:px-6">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">From the Blog</h1>
        <p className="mt-4 max-w-3xl mx-auto text-base text-muted-foreground">
          Insights, news, and updates from the A.J. Tech Solutions team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => {
          const postImage = getImage(post.image);
          return (
            <Card key={post.slug} className="flex flex-col overflow-hidden">
               {postImage && (
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-56 w-full">
                    <Image
                      src={postImage.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover"
                      data-ai-hint={postImage.imageHint}
                    />
                  </div>
                </Link>
              )}
              <CardHeader>
                <CardTitle className="text-lg">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">{post.title}</Link>
                </CardTitle>
                <CardDescription>
                  <span className="text-xs">By {post.author}</span> | <span className="text-xs">{format(new Date(post.date), 'MMMM d, yyyy')}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm">{post.summary}</p>
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild variant="link" className="p-0 h-auto text-sm">
                  <Link href={`/blog/${post.slug}`}>
                    Read More
                  </Link>
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
