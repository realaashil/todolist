import { z } from "zod";

export const TodoSchema = z.object({
  task: z.string().nonempty({ message: "Enter some task" }).max(100, { message: "Task must be less than 100 characters" })
})
export type taskData = z.infer<typeof TodoSchema>
