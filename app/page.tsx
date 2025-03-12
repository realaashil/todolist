import Todos from "@/components/tasklist"
import { AddTask } from "@/components/newtask"
import { Button } from "@/components/ui/button";
import { signout } from "@/app/actions"

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center">
      <div className="grow">
        <p className="text-5xl text-center">All Tasks</p>
        <AddTask />
        <Todos />
        <Button onClick={signout}>Sign Out</Button>
      </div>
    </div >
  );
}
