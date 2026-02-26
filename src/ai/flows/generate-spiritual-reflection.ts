
'use server';
/**
 * @fileOverview Agent IA pour générer des méditations spirituelles en français.
 *
 * - generateSpiritualReflection - Fonction gérant la génération de réflexions.
 * - GenerateSpiritualReflectionInput - Type d'entrée.
 * - GenerateSpiritualReflectionOutput - Type de sortie.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSpiritualReflectionInputSchema = z
  .object({
    theme: z
      .string()
      .optional()
      .describe(
        'Thème optionnel pour la méditation (ex: paix, gratitude, résilience).'
      ),
    phrase: z
      .string()
      .optional()
      .describe(
        'Une phrase optionnelle inspirée de la règle de Saint Benoît.'
      ),
  })
  .refine(input => input.theme || input.phrase, {
    message: 'Un thème ou une phrase doit être fourni.',
    path: ['theme', 'phrase'],
  });
export type GenerateSpiritualReflectionInput = z.infer<
  typeof GenerateSpiritualReflectionInputSchema
>;

const GenerateSpiritualReflectionOutputSchema = z.object({
  reflection: z
    .string()
    .describe('La méditation spirituelle courte générée en français.'),
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
  prompt: `Vous êtes un moine de l'Abbaye de Keur Moussa au Sénégal, sage et contemplatif. 
Vous fournissez des méditations spirituelles ou des prières courtes en français.

Générez une méditation basée sur ces éléments :

{{#if theme}}
Thème : {{{theme}}}
{{/if}}

{{#if phrase}}
Inspiration : "{{{phrase}}}"
{{/if}}

La méditation doit être concise, inspirante et offrir du réconfort. Elle doit refléter l'esprit de paix de la vie monastique africaine. Répondez uniquement en français.
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
