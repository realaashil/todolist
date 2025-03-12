'use client'
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { addTodo } from "@/actions/todos/actions";
import { taskData, TodoSchema } from "@/lib/types";


export function AddTask() {
  const form = useForm<taskData>({
    resolver: zodResolver(TodoSchema),
  })
  function onSubmit(data: taskData) {
    addTodo(data);
  }

  return (
    <div className="my-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex justify-center">
          <FormField
            control={form.control}
            name="task"
            render={({ field }) => (
              <FormItem className="min-w-45">
                <FormControl>
                  <Textarea
                    placeholder="Enter your new task here"
                    className="resize-none  min-h-8"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="ps-5">
            <Button className="h-8" type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

