import { Task } from "../interfaces/Task";
import { BsPencilSquare, BsTrash } from 'react-icons/bs';

interface Props {
  task: Task;
  deleteATask: (id: string) => void;
}

export default function TaskCard({ task, deleteATask }: Props) {
  return (
    <div className="card card-body">
      <h2>{task.title}</h2>
      <small>{task.id}</small>
      <p>{task.description}</p>
      <button 
        className="btn btn-danger" 
        onClick={() => task.id && deleteATask(task.id)}
      >
        Delete <BsTrash /></button>
    </div>
  )
}

