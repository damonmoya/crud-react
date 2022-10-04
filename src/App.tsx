import { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { Task } from './interfaces/Task';
import logo from './logo.svg';

interface Props {
  title?: string;
}

export function App({title}: Props) {

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Task 1',
      description: 'Task 1 description',
      completed: false
    }
  ]);

  return (
    <div className="App">

      <nav className="navbar bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand text-white">
            <img src={logo} style={{width: '4rem'}} alt="logo" />
            {title && <h1>{title}</h1>}
          </a>
        </div>
      </nav>

      <main className="container p-4">

        <div className="row">
          <div className="col-md-4">
            <TaskForm></TaskForm>
          </div>

          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={tasks} />
            </div>
          </div>
        </div>

      </main>
      

    </div>
    );
}