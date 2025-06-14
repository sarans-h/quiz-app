import { router } from "@/server/trpc";
import { quizRouter } from "@/server/routers/quiz";

export const appRouter = router({
  quiz: quizRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
