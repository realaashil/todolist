"use server";

import { createClient } from "@/app/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { Todo } from "@/lib/interface";
import { taskData } from "@/lib/types";


export async function addTodo(formData: taskData) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { error } = await supabase
    .from("todos")
    .insert([
      {
        user_id: user?.id,
        task: formData.task,
        is_complete: false,
        inserted_at: new Date(),
      },
    ]
    )
    .select();
  if (error) {
    throw new Error(error.message);
  }
  revalidatePath("/")
}

export async function onCheckChange(todo: Todo) {
  const supabase = await createClient();
  const { error } = await supabase
    .from("todos")
    .update({ is_complete: !todo?.is_complete })
    .eq("id", todo.id)
    .select();
  if (error) {
    throw new Error(error.message)
  }
  revalidatePath("/")
}
