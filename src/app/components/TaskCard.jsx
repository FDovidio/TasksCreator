'use client'
import {useRouter} from 'next/navigation'

const TaskCard = ({task}) => {
const router = useRouter();
  return (
    <div>
        <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
        
        >
          <div className="rounded-[10px] bg-slate-100 p-4 !pt-10 sm:p-6 min-h-[200px] max-h-[400px] text-center">
            <time datetime="2022-10-10" className="block text-xs text-gray-500">
              {new Date(task.crateAt).toLocaleString()}
            </time>
            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
              {task.title}
            </h3>
            <h4 className="mt-1 text-sm text-gray-500">{task.description}</h4>
            <button
              type="button"
              className="mt-3 w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
              onClick={() => router.push(`/tasks/edit/${task.id}`)}
            >
              Editar tarea
            </button>
          </div>
        </div>
    </div>
  );
}

export default TaskCard