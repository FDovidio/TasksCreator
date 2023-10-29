import {prisma} from "@/libs/prisma";
import TaskCard from "./components/TaskCard";



async function loadTasks() {

return await prisma.task.findMany()

}

async function HomePage ()  {
  const tasks = await loadTasks();
console.log(tasks)

  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-16 ">
    <div className="grid grid-cols-3 gap-3 mt-10">
      {tasks.map ((task) => (
      <TaskCard task={task} key={task.id}/>
      ))}
    </div>
    </div>
  )
}

export default HomePage