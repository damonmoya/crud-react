import { ChangeEvent, FormEvent, useState, useRef } from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';
import { Task } from '../interfaces/Task';

interface Props {
  addANewTask: (task: Task) => void;
}

type handleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const initialState = {
  title: '',
  description: ''
}

export default function TaskForm({addANewTask}: Props) {

  const [task, setTask] = useState(initialState);
  const titleRef = useRef<HTMLInputElement>(null);

  const handleInputChange = ({
    target: { name, value }, 
  }: handleInputChange) => {
    setTask({
      ...task,
      [name]: value
    });  
  };

  const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addANewTask(task)
    setTask(initialState)
    titleRef.current?.focus()
  }

  return (
    <div className="card card-body">
        <h1>Add Task</h1>

        <form onSubmit={handleNewTask}>
          <input 
            type="text" 
            name="title"
            className="form-control mb-3" 
            placeholder="Title" 
            onChange={handleInputChange}
            value={task.title}
            required
            autoFocus
            ref={titleRef}
          />

          <textarea 
            name="description" 
            rows={2} 
            placeholder="Description" 
            className="form-control mb-3"
            onChange={handleInputChange}
            value={task.description}
            required
          ></textarea>

        <button className="btn btn-primary">
          Save <BsPlusCircleFill />
        </button>
        </form>
    </div>
  )
}
