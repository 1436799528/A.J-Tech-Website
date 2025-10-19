
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
import { Loader2, Terminal } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

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

  const { formState } = form;

  return (
    <div className="container py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>AI Blog Post Generator</CardTitle>
            <CardDescription>
              Enter a topic, and the AI will generate a draft for a new blog post.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                action={formAction}
                onSubmit={form.handleSubmit(() => form.trigger().then(valid => valid && formAction(new FormData(form.control._formValues.current))))}
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
                  {formState.isSubmitting ? 'Generating...' : 'Generate Post'}
                </Button>
                {state.isError && state.message && (
                  <Alert variant="destructive">
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{state.message}</AlertDescription>
                  </Alert>
                )}
              </form>
            </Form>
          </CardContent>
        </Card>

        {state.blogPost && (
          <Card className="mt-8 shadow-lg">
            <CardHeader>
              <CardTitle>Generated Post</CardTitle>
              <CardDescription>Review the generated content below. You can copy and paste it into your CMS.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Title</Label>
                <Input readOnly value={state.blogPost.title} />
              </div>
              <div className="space-y-2">
                <Label>Excerpt</Label>
                <Textarea readOnly value={state.blogPost.excerpt} className="min-h-[80px]" />
              </div>
              <div className="space-y-2">
                <Label>Content (JSON)</Label>
                <Textarea readOnly value={JSON.stringify(state.blogPost.content, null, 2)} className="min-h-[300px] font-mono text-xs" />
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
