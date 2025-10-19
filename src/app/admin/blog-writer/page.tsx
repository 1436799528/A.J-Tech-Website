
'use client';

import { useFormState } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { generateBlogPostAction, type BlogWriterFormState } from './actions';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2 } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const blogWriterFormSchema = z.object({
  topic: z.string().min(5, { message: 'Topic must be at least 5 characters.' }),
});

type BlogWriterFormValues = z.infer<typeof blogWriterFormSchema>;

const initialState: BlogWriterFormState = { message: '', isError: false };

export default function BlogWriterPage() {
  const [state, formAction] = useFormState(generateBlogPostAction, initialState);

  const form = useForm<BlogWriterFormValues>({
    resolver: zodResolver(blogWriterFormSchema),
    defaultValues: {
      topic: '',
    },
  });

  const { formState, handleSubmit } = form;

  const handleFormSubmit = (data: BlogWriterFormValues) => {
    const formData = new FormData();
    formData.append('topic', data.topic);
    formAction(formData);
  };

  return (
    <div className="container py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>AI Blog Post Generator</CardTitle>
            <CardDescription>
              Enter a topic, and the AI will generate and save a draft for a new blog post.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={handleSubmit(handleFormSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="topic"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Blog Post Topic</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., The benefits of smart home automation in Nigeria" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={formState.isSubmitting} className="w-full">
                  {formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {formState.isSubmitting ? 'Generating...' : 'Generate & Save Post'}
                </Button>
                {state.message && (
                  <Alert variant={state.isError ? "destructive" : "default"}>
                    <AlertTitle>{state.isError ? "Error" : "Success"}</AlertTitle>
                    <AlertDescription>{state.message}</AlertDescription>
                  </Alert>
                )}
              </form>
            </Form>
          </CardContent>
        </Card>

        {formState.isSubmitSuccessful && state.blogPost && (
          <Card className="mt-8 shadow-lg">
            <CardHeader>
              <CardTitle>Generated Post</CardTitle>
              <CardDescription>Review and edit the generated content below. This has been saved to `data/content.json` and is now live on your blog.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="generated-title">Title</Label>
                <Input id="generated-title" readOnly defaultValue={state.blogPost.title} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="generated-excerpt">Excerpt</Label>
                <Textarea id="generated-excerpt" readOnly defaultValue={state.blogPost.excerpt} className="min-h-[80px]" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="generated-content">Content (JSON)</Label>
                <Textarea id="generated-content" readOnly defaultValue={JSON.stringify(state.blogPost.content, null, 2)} className="min-h-[300px] font-mono text-xs" />
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
