import Todos from "@/components/tasklist"
import { AddTask } from "@/components/newtask"

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center">
      <div className="grow">
        <p className="text-5xl text-center">All Tasks</p>
        <AddTask />
        <Todos />
      </div>
    </div >
  );
}
