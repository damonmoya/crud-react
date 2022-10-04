import { BsPlusCircleFill } from 'react-icons/bs';

export default function TaskForm() {
  return (
    <div className="card card-body">
        <h1>Add Task</h1>

        <form>
          <input 
            type="text" 
            className="form-control mb-3" 
            placeholder="Title" 
          />

          <textarea 
            name="description" 
            rows={2} 
            placeholder="Description" 
            className="form-control mb-3"
          ></textarea>

        <button className="btn btn-primary">
          Save <BsPlusCircleFill />
        </button>
        </form>
    </div>
  )
}
