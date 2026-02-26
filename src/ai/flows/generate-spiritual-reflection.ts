'use server';
/**
 * @fileOverview A GenAI agent for generating spiritual reflections or prayers.
 *
 * - generateSpiritualReflection - A function that handles the generation of spiritual reflections.
 * - GenerateSpiritualReflectionInput - The input type for the generateSpiritualReflection function.
 * - GenerateSpiritualReflectionOutput - The return type for the generateSpiritualReflection function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSpiritualReflectionInputSchema = z
  .object({
    theme: z
      .string()
      .optional()
      .describe(
        'An optional theme for the reflection (e.g., peace, gratitude, resilience).'
      ),
    phrase: z
      .string()
      .optional()
      .describe(
        'An optional phrase from monastic teachings to inspire the reflection.'
      ),
  })
  .refine(input => input.theme || input.phrase, {
    message: 'Either a theme or a phrase must be provided.',
    path: ['theme', 'phrase'],
  });
export type GenerateSpiritualReflectionInput = z.infer<
  typeof GenerateSpiritualReflectionInputSchema
>;

const GenerateSpiritualReflectionOutputSchema = z.object({
  reflection: z
    .string()
    .describe('The generated short, contemplative reflection or prayer.'),
});
export type GenerateSpiritualReflectionOutput = z.infer<
  typeof GenerateSpiritualReflectionOutputSchema
>;

export async function generateSpiritualReflection(
  input: GenerateSpiritualReflectionInput
): Promise<GenerateSpiritualReflectionOutput> {
  return generateSpiritualReflectionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'spiritualReflectionPrompt',
  input: {schema: GenerateSpiritualReflectionInputSchema},
  output: {schema: GenerateSpiritualReflectionOutputSchema},
  prompt: `You are a monastic elder, providing short, contemplative spiritual reflections or prayers.

Generate a spiritual reflection or prayer based on the following input:

{{#if theme}}
Theme: {{{theme}}}
{{/if}}

{{#if phrase}}
Phrase from monastic teachings: "{{{phrase}}}"
{{/if}}

Ensure the reflection is concise, inspiring, and offers solace. Focus on contemplation and inner peace.
`,
});

const generateSpiritualReflectionFlow = ai.defineFlow(
  {
    name: 'generateSpiritualReflectionFlow',
    inputSchema: GenerateSpiritualReflectionInputSchema,
    outputSchema: GenerateSpiritualReflectionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
