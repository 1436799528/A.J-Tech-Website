
import { blogPosts } from '@/lib/blog-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { format } from 'date-fns';
import { Calendar, User } from 'lucide-react';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }
  
  const postImage = getImage(post.image);

  return (
    <article className="container py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">{post.title}</h1>
          <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
            </div>
          </div>
        </header>

        {postImage && (
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-xl mb-12 w-full">
            <Image
              src={postImage.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              data-ai-hint={postImage.imageHint}
            />
          </div>
        )}

        <div 
          className="prose prose-lg max-w-none prose-h3:text-primary prose-a:text-primary hover:prose-a:text-primary/80 prose-p:text-base prose-li:text-base"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
      </div>
    </article>
  );
}
