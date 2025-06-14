import { z } from 'zod';

export const userSchema = z.object({
  email: z.string().email('Valid email required'),
  name: z.string().min(1, 'Name required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export function validateUser(input: unknown) {
  return userSchema.safeParse(input);
}
