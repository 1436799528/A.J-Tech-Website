
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { format } from 'date-fns';
import { Calendar, User } from 'lucide-react';
import type { BlogPost } from '@/lib/types';
import fs from 'fs';
import path from 'path';
import { Metadata, ResolvingMetadata } from 'next';

function getBlogPosts(): BlogPost[] {
  const filePath = path.join(process.cwd(), "data", "content.json");
  try {
    const fileData = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileData);
  } catch (error) {
    console.error("Failed to read blog posts:", error);
    return [];
  }
}

const blogPosts = getBlogPosts();

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
 
  if (!post) {
    return {
        title: 'Post Not Found',
        description: 'This blog post could not be found.',
    }
  }
 
  return {
    title: `${post.title} | AJ Tech Solutions Blog`,
    description: post.excerpt,
  }
}

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
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">{post.title}</h1>
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
        
        {post.video && (
            <div className="relative mb-12 w-full" style={{paddingBottom: '56.25%'}}>
                 <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-xl"
                    src={post.video}
                    title={post.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        )}

        <div className="prose max-w-none prose-h3:text-primary prose-a:text-primary hover:prose-a:text-primary/80 prose-p:text-sm prose-li:text-sm">
          {post.content.map((block, index) => {
            if (block.type === 'paragraph') {
              return <p key={index} className="mb-4 text-muted-foreground">{block.text}</p>;
            }
            if (block.type === 'list') {
              return (
                <ul key={index} className="list-disc list-inside space-y-3 mb-4 text-muted-foreground">
                  {block.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              );
            }
            return null;
          })}
        </div>
      </div>
    </article>
  );
}
