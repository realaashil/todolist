'use client'
import { Checkbox } from "@/components/ui/checkbox"
import { CheckedState } from "@radix-ui/react-checkbox";
import { onCheckChange } from "@/actions/todos/actions";
import type { Todo } from "@/lib/interface";
import { useState } from "react";


export function Task({ todo }: { todo: Todo }) {
  const [checked, setChecked] = useState(todo.is_complete);
  async function onCheckedChange(checked: CheckedState) {
    if (typeof checked === "boolean") {
      setChecked(checked);
      onCheckChange(todo);
    }
  }
  return (
    <div className="flex flex-row items-start space-x-2">
      <Checkbox onCheckedChange={onCheckedChange} defaultChecked={checked} />
      <p className={`text-center ${checked ? "line-through text-gray-500" : ""} `}>{todo.task}</p>
    </div >
  );

}
