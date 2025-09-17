'use server';

import { z } from 'zod';
import { prioritizeConsultationRequest } from '@/ai/flows/prioritize-consultation-requests';
import { services } from '@/lib/data';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  service: z.string().min(1, { message: 'Please select a service.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type FormState = {
  message: string;
  priority?: 'High' | 'Medium' | 'Low';
  reason?: string;
  isError: boolean;
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    service: formData.get('service'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    // This server-side validation is a fallback.
    // The client-side form should prevent this from being reached in normal use.
    return {
      message: 'Invalid form data. Please check your inputs.',
      isError: true,
    };
  }

  const { message, service } = validatedFields.data;
  const serviceTitle = services.find(s => s.slug === service)?.title || 'General Inquiry';

  try {
    const aiResponse = await prioritizeConsultationRequest({
      requestDetails: `Service of interest: ${serviceTitle}. Message: ${message}`,
    });
    
    // In a real app, you would now save the form data and AI priority to a database.
    // e.g., db.collection('leads').add({ ...validatedFields.data, ...aiResponse, createdAt: new Date() });

    return {
      message: 'Thank you for your request! We have received it and will get back to you shortly.',
      priority: aiResponse.priorityLevel,
      reason: aiResponse.urgencyReason,
      isError: false,
    };
  } catch (error) {
    console.error('AI prioritization failed:', error);
    // Fallback: still accept the submission but notify of the AI error.
    // In a real app, you would save the submission with a note to manually prioritize.
    return {
      message: 'Your message was submitted successfully. We will process your request and get back to you soon.',
      isError: false,
      // We don't return priority/reason here as the AI call failed.
    };
  }
}
