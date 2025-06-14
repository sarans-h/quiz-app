import { publicProcedure, router } from "@/server/trpc";
import { z } from "zod";

export const quizRouter = router({
  hello: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return { greeting: `Hello, ${input.name}!` };
    }),
});
