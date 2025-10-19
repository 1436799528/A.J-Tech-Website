
'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating a blog post from a given topic.
 *
 * - generateBlogPost - A function that takes a topic and generates a blog post.
 * - GenerateBlogPostInput - The input type for the generateBlogPost function.
 * - GenerateBlogPostOutput - The return type for the generateBlogPost function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateBlogPostInputSchema = z.object({
  topic: z.string().describe('The topic for the blog post.'),
});
export type GenerateBlogPostInput = z.infer<typeof GenerateBlogPostInputSchema>;

const ContentBlockSchema = z.union([
    z.object({
        type: z.literal('paragraph'),
        text: z.string(),
    }),
    z.object({
        type: z.literal('list'),
        items: z.array(z.string()),
    }),
]);

const GenerateBlogPostOutputSchema = z.object({
  title: z.string().describe('A compelling and SEO-friendly title for the blog post.'),
  excerpt: z.string().describe('A short, engaging summary of the blog post, around 2-3 sentences.'),
  content: z.array(ContentBlockSchema).describe('The main content of the blog post, structured in paragraphs and lists.'),
});
export type GenerateBlogPostOutput = z.infer<typeof GenerateBlogPostOutputSchema>;

export async function generateBlogPost(input: GenerateBlogPostInput): Promise<GenerateBlogPostOutput> {
  return generateBlogPostFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBlogPostPrompt',
  input: { schema: GenerateBlogPostInputSchema },
  output: { schema: GenerateBlogPostOutputSchema },
  prompt: `You are an expert content writer and SEO specialist for A.J. Tech Solutions, a Nigerian company specializing in electrical, solar, and construction services. Your audience includes homeowners, business owners, and potential clients in Nigeria.

Your task is to write an engaging, informative, and professional blog post about the given topic. The tone should be authoritative yet accessible.

Topic: {{{topic}}}

Guidelines:
- The title must be catchy and relevant.
- The excerpt should be a concise summary that grabs the reader's attention.
- The content should be well-structured. Use a mix of paragraphs and bulleted lists where appropriate to break up the text and make it easy to read.
- Ensure the content is practical and provides real value to the target audience.
- The entire output must conform to the specified JSON schema.

Begin writing now.`,
  config: {
    model: 'googleai/gemini-2.5-flash',
    safetySettings: [
        {
            category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
            threshold: 'BLOCK_NONE',
        },
        {
            category: 'HARM_CATEGORY_HATE_SPEECH',
            threshold: 'BLOCK_ONLY_HIGH',
        },
        {
            category: 'HARM_CATEGORY_HARASSMENT',
            threshold: 'BLOCK_ONLY_HIGH',
        },
        {
            category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
            threshold: 'BLOCK_ONLY_HIGH',
        },
    ]
  }
});

const generateBlogPostFlow = ai.defineFlow(
  {
    name: 'generateBlogPostFlow',
    inputSchema: GenerateBlogPostInputSchema,
    outputSchema: GenerateBlogPostOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
