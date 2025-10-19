
'use server';

import { z } from 'zod';
import { generateBlogPost, type GenerateBlogPostOutput } from '@/ai/flows/generate-blog-post';
import fs from 'fs/promises';
import path from 'path';
import type { BlogPost } from '@/lib/types';

const blogWriterFormSchema = z.object({
  topic: z.string().min(5, { message: 'Topic must be at least 5 characters.' }),
});

export type BlogWriterFormState = {
  message: string;
  isError: boolean;
  blogPost?: GenerateBlogPostOutput;
};

function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-'); // Replace multiple - with single -
}

export async function generateBlogPostAction(
  prevState: BlogWriterFormState,
  formData: FormData,
): Promise<BlogWriterFormState> {
  const validatedFields = blogWriterFormSchema.safeParse({
    topic: formData.get('topic'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Invalid topic. Please check your input.',
      isError: true,
    };
  }

  try {
    const generatedPost = await generateBlogPost({ topic: validatedFields.data.topic });
    
    const filePath = path.join(process.cwd(), 'data', 'content.json');
    
    try {
      const fileData = await fs.readFile(filePath, 'utf-8');
      const posts: BlogPost[] = JSON.parse(fileData);

      const newPost: BlogPost = {
        ...generatedPost,
        slug: slugify(generatedPost.title),
        author: 'Aponi James', // Default author
        date: new Date().toISOString().split('T')[0], // Today's date
        image: 'construction-trends' // Default placeholder image
      };

      posts.unshift(newPost); // Add to the beginning of the array

      await fs.writeFile(filePath, JSON.stringify(posts, null, 2));

      return {
        message: 'Blog post generated and saved successfully!',
        isError: false,
        blogPost: generatedPost,
      };

    } catch (fileError) {
        console.error('Error writing to content.json:', fileError);
        return {
            message: 'AI post was generated, but failed to save to file. Check server logs.',
            isError: true,
            blogPost: generatedPost, // Return the generated content so it's not lost
        };
    }

  } catch (error) {
    console.error('AI blog post generation failed:', error);
    return {
      message: 'Failed to generate blog post. Please try again.',
      isError: true,
    };
  }
}
