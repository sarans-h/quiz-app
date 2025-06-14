import { z } from 'zod';

export const quizSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  questions: z.array(z.object({
    text: z.string().min(1, 'Question text required'),
    options: z.array(z.string().min(1)).min(2, 'At least 2 options'),
    answer: z.string().min(1, 'Answer required'),
  })).min(1, 'At least 1 question required'),
});

export function validateQuiz(input: unknown) {
  return quizSchema.safeParse(input);
}
