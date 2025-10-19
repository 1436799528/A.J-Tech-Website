
'use server';

import { z } from 'zod';
import { generateBlogPost, type GenerateBlogPostOutput } from '@/ai/flows/generate-blog-post';

const blogWriterFormSchema = z.object({
  topic: z.string().min(5, { message: 'Topic must be at least 5 characters.' }),
});

export type BlogWriterFormState = {
  message: string;
  isError: boolean;
  blogPost?: GenerateBlogPostOutput;
};

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
    const blogPost = await generateBlogPost({ topic: validatedFields.data.topic });

    return {
      message: 'Blog post generated successfully!',
      isError: false,
      blogPost,
    };
  } catch (error) {
    console.error('AI blog post generation failed:', error);
    return {
      message: 'Failed to generate blog post. Please try again.',
      isError: true,
    };
  }
}
