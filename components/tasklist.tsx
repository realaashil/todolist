import { createClient } from "@/app/utils/supabase/server";
import { Task } from "@/components/task"

export default async function Todos() {
  const supabase = await createClient();
  const { data: todos, error } = await supabase.from("todos").select("*").order("inserted_at", { ascending: false });
  if (error) {
    throw new Error(error.message);
  }
  return (
    <div className="my-5 flex-1 overflow-auto">
      <div className="flex flex-col">
        {todos && todos.map((todo) => (
          <Task key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  )
}
