import { Task } from "../interfaces/Task";

interface Props {
  task: Task;
}

export default function TaskCard({ task }: Props) {
  return (
    <div className="card card-body">
      <h2>{task.title} #{task.id}</h2>
      <p>{task.description}</p>
      <button className="btn btn-danger">Delete</button>
    </div>
  )
}

