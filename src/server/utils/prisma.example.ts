// Example usage of Prisma client
import { prisma } from './prisma.ts';

async function example() {
  const quizzes = await prisma.quiz.findMany();
  console.log('All quizzes:', quizzes);
}

example();
