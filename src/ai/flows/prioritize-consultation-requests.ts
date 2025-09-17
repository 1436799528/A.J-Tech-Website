'use server';

/**
 * @fileOverview This file defines a Genkit flow to prioritize consultation requests based on urgency.
 *
 * - prioritizeConsultationRequest - A function that takes a consultation request and returns its priority.
 * - PrioritizeConsultationRequestInput - The input type for the prioritizeConsultationRequest function.
 * - PrioritizeConsultationRequestOutput - The return type for the prioritizeConsultationRequest function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PrioritizeConsultationRequestInputSchema = z.object({
  requestDetails: z
    .string()
    .describe('Details of the consultation request, including the services requested and any specific requirements.'),
});
export type PrioritizeConsultationRequestInput = z.infer<typeof PrioritizeConsultationRequestInputSchema>;

const PrioritizeConsultationRequestOutputSchema = z.object({
  priorityLevel: z
    .enum(['High', 'Medium', 'Low'])
    .describe('The priority level assigned to the consultation request.'),
  urgencyReason: z
    .string()
    .describe('The reason for the assigned priority level, based on the request details.'),
});
export type PrioritizeConsultationRequestOutput = z.infer<typeof PrioritizeConsultationRequestOutputSchema>;

export async function prioritizeConsultationRequest(
  input: PrioritizeConsultationRequestInput
): Promise<PrioritizeConsultationRequestOutput> {
  return prioritizeConsultationRequestFlow(input);
}

const prompt = ai.definePrompt({
  name: 'prioritizeConsultationRequestPrompt',
  input: {schema: PrioritizeConsultationRequestInputSchema},
  output: {schema: PrioritizeConsultationRequestOutputSchema},
  prompt: `You are an AI assistant that prioritizes consultation requests based on urgency.

  Analyze the following consultation request details and determine the appropriate priority level (High, Medium, or Low).
  Provide a brief reason for the assigned priority level.

  Request Details: {{{requestDetails}}}

  Ensure the output is structured according to the following schema:
  {
    "priorityLevel": "High | Medium | Low",
    "urgencyReason": "Explanation for the assigned priority level"
  }`,
});

const prioritizeConsultationRequestFlow = ai.defineFlow(
  {
    name: 'prioritizeConsultationRequestFlow',
    inputSchema: PrioritizeConsultationRequestInputSchema,
    outputSchema: PrioritizeConsultationRequestOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
