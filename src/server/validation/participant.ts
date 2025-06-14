import { z } from 'zod';

export const participantSchema = z.object({
  name: z.string().min(1, 'Name required'),
  score: z.number().int().min(0),
  quizId: z.string().uuid('Valid quiz ID required'),
});

export function validateParticipant(input: unknown) {
  return participantSchema.safeParse(input);
}
